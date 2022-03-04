import{Request,Response} from "express";
import {getCustomRepository} from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";
import { UsersService } from "../services/UsersServices";

class UsersController {

    async AdicionarUsuario(request:Request,response: Response){
        //const data = request.query
        const email = request.query.email.toString();
        //const {email, nome} = request.query;
        console.log(email);

        const usersService = new UsersService();
        
        const users = await usersService.create(email);

        if(email){
            response.send("<h1>" + email + "</h1>");

        }else{
            response.send("<h1> Formato inválido</h1>");
        }
    }

      

    async RemoverUsuario(request:Request,response: Response){
        const email = request.query["email"].toString();
        
        const usersService = new UsersService();
        
        const users = await usersService.RemoveUser(email);

        if(email){
            response.send("<h1>" + email + " deletado </h1>");
        }else{
            response.send("<h1> Formato inválido</h1>");
        }
    }
}


export {UsersController}
