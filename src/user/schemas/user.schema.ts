import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type IUserDocument = IUser & Document;

@Schema()
export class IUser {
  @Prop({unique: true, required :true})
  email: string;

  @Prop({required :true})
  password: string;

  @Prop()
  fullName: string;

  @Prop({unique: true})
  username: string;
  @Prop({default :"Врач"})
  position: string;
  @Prop()
  categories: Array<any>;
  @Prop()
  products: Array<any>;
  @Prop()
  bills: Array<any>;
  @Prop()
  patients: Array<any>;
}

export const UserSchema = SchemaFactory.createForClass(IUser);
