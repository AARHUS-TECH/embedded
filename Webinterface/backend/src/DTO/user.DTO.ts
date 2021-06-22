import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserDTO & Document;

@Schema()
export class UserDTO {
    @Prop()
    UserName: string

    @Prop()
    email: string;
}

export const CollectionSchema = SchemaFactory.createForClass(UserDTO);


// export class hoensehusDTO {
//     tid: String;
//     Light: String;
// }