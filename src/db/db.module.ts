import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

const MONGO_URL =
  process.env.MONGO_URL ?? 'mongodb://localhost:27016/dental-calculator';
@Module({
  imports: [

    MongooseModule.forRoot(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ]
})

export class DbModule {}
