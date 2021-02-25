import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const PORT = process.env.SERVER_PORT ?? 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap().then(() => console.log(`server started at port: ${PORT}`));
