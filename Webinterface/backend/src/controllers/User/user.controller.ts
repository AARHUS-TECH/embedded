import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserDTO } from 'src/DTO/user.DTO';

@Controller('hoensehus')
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
} 
