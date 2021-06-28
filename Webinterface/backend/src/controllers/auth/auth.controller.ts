import { Controller, Get, Request, Param, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { LocalAuthGuard } from 'src/services/helpers/guards/local-auth.guard';
import { UserService } from 'src/services/user/user.service';

@Controller('auth')
export class AuthController {
    
    constructor(
        private userService: UserService,
        private authService: AuthService
    ) {}

    @UseGuards(LocalAuthGuard) // aktivere passport
    @Post('login')
    public async login(@Request() req) {
        return req.user;
    }
}
