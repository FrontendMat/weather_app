import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import Http from "axios";
import { Weather } from "./weather.schema";

@Injectable()
export class WeatherService {
    private readonly apiUrl = process.env.WEATHER_URL;
    private readonly apiKey = process.env.WEATHER_KEY;
    private readonly citiesLimit = 100;

    constructor(
        @InjectModel(Weather.name) private weatherModel: Model<Weather>,
    ) {}

    private async WeatherApi(city: string): Promise<Weather> {
        try {
            const response = await Http.get(this.apiUrl, {
                params: { q: city, appid: this.apiKey, units: "metric" },
            });

            const data = response.data;
            const cityName = data.name;
            const temperature = data.main.temp;
            const weatherType = data.weather[0].main;
            const icon = data.weather[0].icon;
            const country = data.sys.country;

            const countryName = this.toCountryName(country);

            return {
                city: cityName,
                temperature,
                weatherType,
                icon,
                country: countryName,
            };
        } catch (e) {
            throw new HttpException(e, HttpStatus.NOT_FOUND);
        }
    }

    private toCountryName(country: string): string {
        const regionName = new Intl.DisplayNames(["en"], { type: "region" });
        const countryName = regionName.of(country);
        return countryName;
    }

    async getCurrentWeather(cityName: string): Promise<Weather> {
        if (!cityName) {
            throw new HttpException("No Data", HttpStatus.BAD_REQUEST);
        }
        const { city, temperature, weatherType, icon, country } =
            await this.WeatherApi(cityName);

        const weatherData = {
            city,
            country,
            temperature: temperature,
            weatherType: weatherType,
            icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        };

        const data = await new this.weatherModel(weatherData).save();

        return data;
    }

    async getLimitedSities(): Promise<Weather[]> {
        return this.weatherModel
            .find()
            .sort({ _id: -1 })
            .limit(this.citiesLimit)
            .exec();
    }
}
