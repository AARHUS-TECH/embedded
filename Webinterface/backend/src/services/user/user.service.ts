import { ConflictException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { UserDTO, UserDocument } from 'src/DTO/user.DTO';


@Injectable()
export class UserService {

    constructor(
        // private auth: AuthService,
        @InjectModel('UserSchema') private Usermodel: Model<UserDocument>
    ) {}


    private async doesUserExits(username: string) {
        const user = await this.Usermodel.findOne({ username: username});

        console.log(username); 

        if(user != null || undefined) {
            return true;
        } else {
            throw new ConflictException('user already exits');
        }
    }

    public async CreateUser(userDTO: UserDTO) {
        console.log(userDTO)

        const Data = new this.Usermodel(userDTO);

        const doesUserAlreadyExits = await this.doesUserExits(userDTO.username)

        console.log(doesUserAlreadyExits);
            
        if (doesUserAlreadyExits == false) {
            return Data.save().then((Data) => {
                return HttpStatus.OK
            }, (error) => {
                console.log(error);
        })} 
        else {
            throw new ConflictException('User Already exits')
        }
    }

    public async GetUser() {
        return await this.Usermodel.find().exec();
    }

    public async GetOneUser(id: string) {
        const user = await this.findUser(id);
        return user;
    }

    
    public async findUser(username: string): Promise<UserDocument> {
        let user;
        // console.log(id);
        try {
            // user = await this.Usermodel.findOne({username:id}).exec();
            user = await this.Usermodel.findOne({username}).exec();
            console.log(user);

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

