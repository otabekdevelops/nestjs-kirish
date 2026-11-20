import { Module } from "@nestjs/common";
import { UserController } from "./user.controller.js";
import { UserService } from "./user.service.js";
import { PrismaService } from './prisma/prisma.service.js';
import { ConfigModule } from "@nestjs/config";

@Module({
    imports : [ConfigModule],
    controllers : [UserController],
    providers : [UserService, PrismaService]

})

export class UserModule{}