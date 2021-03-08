import { Controller, Get } from "@nestjs/common";

const API_KEY=process.env.API_KEY

@Controller(API_KEY+'/auth')
export class UserController {



}
