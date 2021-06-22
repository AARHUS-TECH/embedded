import { HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO, UserDocument } from 'src/DTO/user.DTO';
import { UserSchema} from 'src/models/user.model';


@Injectable()
export class UserService {

    constructor(
        @InjectModel('UserSchema') private Usermodel: Model<UserDocument>
    ) {}

    public async CreateUser(userDTO: UserDTO) {
        console.log(userDTO)

        const Data = new this.Usermodel(userDTO);
        
        return Data.save().then((Data) => {
            console.log(Data)
            return HttpStatus.OK
        }, (error) => {
            if(error) {
                console.log(error);
            }
        })
    }

    public async GetUser() {
        return await this.Usermodel.find().exec();
    }
}
