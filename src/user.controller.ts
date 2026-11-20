import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service.js";

@Controller("users")
export class UserController{
    constructor (private readonly UserService : UserService){}

    
    @Get("all")
    async getAllusers(){
        return this.UserService.getAllusers()
    }
    @Get(":id")
    async getbyid(@Param("id") id : number){
        console.log(id)
    }

    @Post("create")
    async create(@Body() payload:{name:string, age:number}){
        return this.UserService.create(payload)
    }

    @Delete("delete/:id")
    async delete(@Param("id") id : number){
        return this.UserService.delete(id)
    }

    

}