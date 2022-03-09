import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import changeColor from "./utils/consoleColor";
import { Logger } from "@nestjs/common";
import { HttpInterceptorInterceptor } from "./http-exception/http-interceptor.interceptor";
import { HttpFilterFilter } from "./http-exception/http-filter.filter";
import { logger } from "./middleware/logger.middleware";
const port = 34512;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局过滤器
  app.useGlobalFilters(new HttpFilterFilter());
  // 全局日志
  app.use(logger);
  // 全局拦截器
  app.useGlobalInterceptors(new HttpInterceptorInterceptor());
  await app.listen(port);
}

bootstrap().then(() => {
  Logger.log("Server Is Start,Port Is " + port, "Nest Server");
  changeColor();
});
