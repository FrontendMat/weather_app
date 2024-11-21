import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start = async () => {
    try {
        const PORT = process.env.PORT || 8000;
        const app = await NestFactory.create(AppModule);
        app.enableCors({
            credentials: true,
            origin: process.env.CLIENT_URL,
        });

        await app.listen(PORT, () => console.log(`Server run on ${PORT} port`));
    } catch (e) {
        console.log(e);
    }
};

start();
