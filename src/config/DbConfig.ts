import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const DbConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DB_HOST || "172.23.76.61",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_NAME || "root",
  password: process.env.DB_PASS || "123456",
  database: process.env.DB_DATA || "blog",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true,
  autoLoadEntities: true,
};
export default DbConfig;
