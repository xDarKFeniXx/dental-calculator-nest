import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

const environment = process.env.NODE_ENV ?? "development";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true
    })
  ]
})
export class ConfigurationModule {
}
