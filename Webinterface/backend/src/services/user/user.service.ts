import { HttpStatus, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { UserDTO, UserDocument } from 'src/DTO/user.DTO';
import { Usermodel} from 'src/models/user.model';
import * as mongoose from 'mongoose';
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

    public async GetOneUser(id: string) {
        const user = await this.findUser(id);
        return user;
    }

    
    public async findUser(id: string): Promise<UserDocument> {
        let user;
        console.log(id);
        try {
            user = await this.Usermodel.findOne({username:id}).exec();
        } catch (error) {
            // throw new NotFoundException("could not find user");
            console.log(error);
            throw new NotFoundException("Fejl i første userservice statement");
        }
        
        if (!user) {
            // throw new NotFoundException('could not find user');
            throw new NotFoundException('Fejl i andet userservice statement');
        }
        
        return user;
    }

    public async updateUser(id: string, email: string, username: string) {
        const updatedUser = await this.findUser(id);
        if(email) {
            updatedUser.email = email;
        }
        if (username) {
            updatedUser.username = username;
        }
        updatedUser.save();
    }

    public async deleteUser(id: string) {
        const result = await this.Usermodel.deleteOne({_id: id}).exec();
        if(result.n === 0) {
            throw new NotFoundException("Could not find user");
        }
    }
}
