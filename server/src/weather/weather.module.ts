import { Module } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { WeatherController } from "./weather.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Weather, WeatherSchema } from "./weather.schema";

@Module({
    providers: [WeatherService],
    controllers: [WeatherController],
    imports: [
        MongooseModule.forFeature([
            { name: Weather.name, schema: WeatherSchema },
        ]),
    ],
})
export class WeatherModule {}
