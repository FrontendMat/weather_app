import { Controller, Get, Query } from "@nestjs/common";
import { WeatherService } from "./weather.service";

@Controller("weather")
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get("current")
    async getWeather(@Query("city") city: string) {
        return this.weatherService.getCurrentWeather(city);
    }

    @Get("history")
    async getHistory() {
        return this.weatherService.getLimitedSities();
    }
}
