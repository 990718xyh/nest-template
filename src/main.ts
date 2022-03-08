import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import changeColor from "@app/libs/utils/consoleColor";
import { Logger } from "@nestjs/common";

const port = 34512;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap().then(() => {
  Logger.log("Server Is Start,Port Is " + port, "Nest Server");
  changeColor();
});
