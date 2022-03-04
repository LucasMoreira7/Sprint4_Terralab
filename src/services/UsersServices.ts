import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import{Coord} from "../entities/Coord"
import { UsersRepository } from "../repositories/UsersRepository"
import {CoordsRepository} from "../repositories/CoordsRepository"

interface IUsersCreate {
    email: string;
}


class UsersService {

    private usersRepository:Repository<User>
    private coordsRepository:Repository<Coord>


    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
        this.coordsRepository = getCustomRepository(CoordsRepository);
    }
    async create(email:string) {

        const userAlreadyExists = await this.usersRepository.findOne({
            email
        });

        if (!userAlreadyExists) {
            const users = this.usersRepository.create({
                email
            });

            await  this.usersRepository.save(users);

            return users;
            
        }else{
            throw new Error("User already exists!"); /** devolve erro pra camada de cima*/
        }


    }
    
    
    async RemoveUser(email:string) {

        const userAlreadyExists = await this.usersRepository.findOne({
            email
        });
        if (userAlreadyExists) {

            const users = this.usersRepository.delete({
                email,
            });
            await this.coordsRepository.delete({
                email,
            })

            return;
            //const usersCoords = await this.coordsRepository.find({
                //email,
            //})
            
        }else{
            throw new Error("User not exists!"); /** devolve erro pra camada de cima*/
        }
    }

}


export {UsersService}

