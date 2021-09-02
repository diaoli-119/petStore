/*
 * @Author: your name
 * @Date: 2021-08-25 17:07:37
 * @LastEditTime: 2021-08-26 14:29:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Centrapass\petstore\src\container.ts
 */
import { Container } from "inversify";
import "reflect-metadata";
import { PetService } from "./module/petService";
import { PetController } from "./controllers/petController";
import TYPES from "./types";

const container = new Container();
container.bind<PetService>(TYPES.Pet).to(PetService).inSingletonScope();

export default { container };