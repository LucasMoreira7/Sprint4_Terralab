import{Request,Response} from "express";
import {getCustomRepository} from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";
import { UsersService } from "../services/UsersServices";
import {CoordsService} from "../services/CooordsServices"


class CoordsController {

    async AdicionarPonto(request:Request,response: Response){
        const latitude = request.query["latitude"].toString();
        const longitude = request.query["longitude"].toString();
        const email = request.query["email"].toString();

        console.log(email);
        console.log(latitude);
        console.log(longitude);
        
        const coordService = new CoordsService();
        
        const coords = await coordService.AddPoint(email, latitude, longitude);

        if(email){
            response.send("<h1>" + email + "</h1> <br> <h1>" + latitude + "</h1> <br> <h1>" + longitude + "</h1>");

        }else{
            response.send("<h1> Formato inválido</h1>");
        }
        
    }
    async RemoverPonto(request:Request,response: Response){
        const id = request.query["id"].toString();
        const email = request.query["email"].toString();

        const coordService = new CoordsService();
        
        const coords = await coordService.RemovePoint(id, email);

        if(id){
            response.send("<h1>" + id + " removido </h1>");
        }else{
            response.send("<h1> Formato inválido</h1>");
        }
        

    }

}

export {CoordsController}