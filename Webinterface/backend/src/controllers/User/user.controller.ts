import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserDTO } from 'src/DTO/user.DTO';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Post()
    public CreateUser(@Body() userDTO: UserDTO) {
        console.log(userDTO)
        return this.userService.CreateUser(userDTO);
    }

    @Get()
    public GetUser() {
        return this.userService.GetUser();
    }

    @Get(':id')
    public GetOneUser(@Param('id') id) {
        return this.userService.GetOneUser(id);
    }

    @Patch(':id')
    public async updateUser(@Param('id') id, @Body('email') email: string, @Body('username') username: string) {
        await this.userService.updateUser(id, email, username);
        return HttpStatus.OK;
    }

    @Delete(':id')
    public deleteUser(@Param('id') id) {
        return this.userService.deleteUser(id);
    }
} 
