import { Repository, EntityRepository } from "typeorm";
import { Coord } from "../entities/Coord";

@EntityRepository(Coord)
class CoordsRepository extends Repository<Coord>{

}

export { CoordsRepository }