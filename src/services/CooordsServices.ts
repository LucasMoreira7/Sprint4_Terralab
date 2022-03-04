import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import{Coord} from "../entities/Coord"
import { UsersRepository } from "../repositories/UsersRepository"
import {CoordsRepository} from "../repositories/CoordsRepository"


class CoordsService {
    private coordsRepository:Repository<Coord>
    private usersRepository:Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
        this.coordsRepository = getCustomRepository(CoordsRepository);
    }

    async AddPoint(email:string, latitude: string, longitude: string) {

        const userAlreadyExists = await this.usersRepository.findOne({
            email
        });
        if (userAlreadyExists) {

            const coords = this.coordsRepository.create({
                email,
                latitude,
                longitude,
                description: "",
            });
            
            await  this.coordsRepository.save(coords);

            return coords;

        }else{
            throw new Error("User not exists!"); /** devolve erro pra camada de cima*/
        }
    }
    
    async RemovePoint(id:string, email:string) {

        const userAlreadyExists = await this.usersRepository.findOne({
            email,
        });
        if (userAlreadyExists) {

            const coords = this.coordsRepository.findOne({
                id,
            })
            if(coords){
                await this.coordsRepository.delete({
                    id,
                })

                return coords;
            }else{
                throw new Error("Coords not exists!"); /** devolve erro pra camada de cima*/
            }
            }else{
            throw new Error("User not exists!"); /** devolve erro pra camada de cima*/
        }
    }

}

export{CoordsService}