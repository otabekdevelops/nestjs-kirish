import { NestFactory } from "@nestjs/core";
import { UserModule } from "./user.module.js";

async function bootstrap(){
    const app = await NestFactory.create(UserModule);
    app.setGlobalPrefix("api/v1")
    app.listen(3000)
}
bootstrap()