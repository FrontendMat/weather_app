import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { WeatherModule } from "./weather/weather.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        MongooseModule.forRoot(process.env.DB_URL),
        WeatherModule,
    ],
})
export class AppModule {}
