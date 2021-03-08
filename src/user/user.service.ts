import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IUser, IUserDocument } from "./schemas/user.schema";
import { Model } from "mongoose";
import bcrypt from "bcryptjs";

import { CreateUserDto } from "./dto/create-user.dto";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class UserService {
  constructor(
    private configService: ConfigService,
    @InjectModel(IUser.name) private userModel: Model<IUserDocument>

  ) {}
  async create(createUserDto:CreateUserDto):Promise<IUser>{
    const candidate = await this.userModel.findOne({$or: [{email: createUserDto.email}, {username:createUserDto.username}]}).exec()
    if(candidate){
      console.log('we have candidate', candidate);
    }
    const SALT=this.configService.get<number>('SECRET_SALT');
    const salt=await bcrypt.genSalt(SALT)
    const hashPassword=await bcrypt.hash(createUserDto.password, salt)
    return new this.userModel({ ...createUserDto, password: hashPassword });
  }
}
