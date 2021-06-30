import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserDTO & Document;

@Schema()
export class UserDTO {
    @Prop()
    username: string

    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const CollectionSchema = SchemaFactory.createForClass(UserDTO);