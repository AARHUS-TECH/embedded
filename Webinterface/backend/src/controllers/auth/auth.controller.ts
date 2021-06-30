import { Controller, Get, Request, Param, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { AuthenticatedGuard } from 'src/services/helpers/guards/authenticated.guard';
import { LocalAuthGuard } from 'src/services/helpers/guards/local-auth.guard';
import { UserService } from 'src/services/user/user.service';

@Controller('auth')
export class AuthController {
    
    constructor(
        // private userService: UserService,
        // private authService: AuthService
    ) {}

    // @UseGuards(LocalAuthGuard) // aktivere passport
    // @Post('login',)
    // public async login(@Request() req) {
    //     console.log(req.params.id);
    //     return req.user;
    // }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Request() req) {

        const userid = req.body._id;
        console.log(userid);
        
        return req.user;
    }
    
    @UseGuards(AuthenticatedGuard)
    @Get()
    getHello(@Request() req): string {
        return req.user;
    }

}
