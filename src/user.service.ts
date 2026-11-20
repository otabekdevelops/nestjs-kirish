import { Injectable } from "@nestjs/common";

@Injectable()

export class UserService{
    private users = [
        {id : 1, name : "Otabek", age : 20},
        {id : 2, name : "Ulugbek", age : 25},
        {id : 3, name : "Dilshid", age : 28}
    ]
    async getAllusers(){
        return this.users
    }
    async create(payload : {name : string, age : number}){
        const newUser = {
            id : this.users.length + 1,
            ...payload
        } 
        this.users.push(newUser)
        return {
            success : true,
            message : "User created"
        }
    }
    async delete(payload : number){
        this.users = this.users.filter(user => user.id!=payload)
        return {
            success : true,
            message : "User deleted!"
        }
    }
}