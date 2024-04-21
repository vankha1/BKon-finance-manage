import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  fullname: string;

  @Prop()
  username: string;

  @Exclude()
  @Prop({ required: true, unique: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
