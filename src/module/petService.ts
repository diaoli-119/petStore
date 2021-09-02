/*
 * @Author: your name
 * @Date: 2021-08-22 12:35:06
 * @LastEditTime: 2021-08-29 01:15:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Centrapass\petstore\pet\petService.ts
 */
import "reflect-metadata";
import { Pet } from "./pet";
import { provideSingleton } from "../util/provideSingleton";
import { catRepository } from "../petRepository/catStore";
import { rabbitRepository } from "../petRepository/rabbitStore";
import { dogRepository } from "../petRepository/dogStore";

export type PetCreationParams = Pick<Pet, "name" | "dateOfBirth" | "species">;

@provideSingleton(PetService)
export class PetService {
  public getPetAttribute(id: number, name?: string, species?: string, dateOfBirth?: string): Pet {
    if (species === "dog" || species === "cat" || species === "rabbit") {
      return {
        id,
        name: name ?? "Golden Retriever",
        dateOfBirth: dateOfBirth ?? "01/01/2021",
        species: species
      };
    }
    else {
      return {
        id: id,
        name: "",
        dateOfBirth: "",
        species: "Invalid species"
      };
    }
  }

  public createPetInstance(petCreationParams: PetCreationParams): Pet {
    return {
      id: Math.floor(Math.random() * 10000),
      ...petCreationParams
    };
  }

  public updatePetAttribute(id: number, name?: string, dateOfBirth?: string, species?: string): Pet {
    return {
      id,
      name: name,
      dateOfBirth: dateOfBirth,
      species: species
    };
  }

  public deletePetInstance(id: number, repo: any): any {
    switch (repo) {
      case "cat": {
        for (let i = 0; i < catRepository.length; i++) {
          if (catRepository[i].id === id)
            return catRepository[i];
        }
      }
      case "dog": {
        for (let i = 0; i < dogRepository.length; i++) {
          if (dogRepository[i].id === id)
            return dogRepository[i];
        }
      }
      case "rabbit": {
        for (let i = 0; i < rabbitRepository.length; i++) {
          if (rabbitRepository[i].id === id)
            return rabbitRepository[i];
        }
      }
      default: return { id: 0, name: "", dateOfBirth: "", species: "" }
    }
  }
}