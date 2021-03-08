import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { IUser, UserSchema } from "./schemas/user.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: IUser.name, schema: UserSchema }])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
