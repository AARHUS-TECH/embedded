import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Usermodel } from 'src/models/user.model';
import { UserService } from '../user/user.service';


@Injectable()
export class AuthService {

    constructor(
        // private readonly jwtService: JwtService,
        public userService: UserService
    ) {}

    public async validateUser(username: string, password: string) {
    
        const user = await this.userService.findUser(username);

        if (user && user.password === password) {
            const { password, username, ...rest } = user;
            return user;
        }

        return null;
    }
}