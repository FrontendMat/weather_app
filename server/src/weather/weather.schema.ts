import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type WeatherDocument = HydratedDocument<Weather>;
@Schema({ collection: "Cities" })
export class Weather {
    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    temperature: string;

    @Prop({ required: true })
    weatherType: string;

    @Prop({ required: true })
    icon: string;
}

export const WeatherSchema = SchemaFactory.createForClass(Weather);
