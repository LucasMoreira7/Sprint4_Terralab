import {Router} from"express";
import{Request,Response} from "express";
import { UsersController } from "./controllers/UsersController";
import {CoordsController} from "./controllers/CoordsController"




const routes = Router();

const usersController = new UsersController();

const coordsController = new CoordsController();



//routes.post("/user", usersController.create);

routes.post("/AdicionarUsuario", usersController.AdicionarUsuario);
//exemplo: localhost:8080/AdicionarUsuario/?email=test@gmail.com

routes.post("/AdicionarPonto", coordsController.AdicionarPonto);
//exemplo: localhost:8080/AdicionarPonto/?latitude=-45.8952&longitude=38.5648&email=test@gmail.com

routes.delete("/RemoverPonto", coordsController.RemoverPonto);
//exemplo: localhost:8080/RemoverPonto/?id=fvg347v&email=test@gmail.com

routes.delete("/RemoverUsuario", usersController.RemoverUsuario);
//exemplo: localhost:8080/RemoverUsuario/?email=test@gmail.com


export {routes};


