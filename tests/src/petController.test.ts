/*
 * @Author: your name
 * @Date: 2021-08-24 17:15:03
 * @LastEditTime: 2021-08-29 16:41:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Centrapass\petstore\tests\src\petController.test.ts
 */
import { PetController } from "../../src/controllers/petController";
import { PetService } from "../../src/module/petService";
import { catRepository } from "../../src/petRepository/catStore";
import { dogRepository } from "../../src/petRepository/dogStore";
import { rabbitRepository } from "../../src/petRepository/rabbitStore";

const petService = new PetService();
const controller = new PetController(petService);

describe("Get /pets/petId", () => {
  test("should return invalid attribute because no specices passed into PetService().getPetAttribute()", async () => {
    let petId = 1;
    let pet = {
      id: petId,
      name: "",
      dateOfBirth: "",
      species: "Invalid species"
    }
    let response = await controller.getPet(petId);
    expect(response).toStrictEqual(pet);
  });

  test("should return the default dog attribute based on petId and species with undefined name", async () => {
    let petId = 1, species = "dog";
    let pet = {
      id: petId,
      name: "Golden Retriever",
      dateOfBirth: "01/01/2021",
      species: "dog"
    }
    let response = await controller.getPet(petId, undefined, species);
    expect(response).toStrictEqual(pet);
  });

  test("should return the default dog attribute based on petId and species with empty name value", async () => {
    let petId = 2, species = "dog";
    let pet = {
      id: petId,
      name: "",
      dateOfBirth: "01/01/2021",
      species: "dog"
    }
    let response = await controller.getPet(petId, "", species);
    expect(response).toStrictEqual(pet);
  });

  test("should return the specific dog attribute based on detailed pet attribute", async () => {
    let petId = 3, petName = "La Prado", petSpecies = "dog", petDateOfBirth = "04/09/2018";
    let pet = {
      id: petId,
      name: petName,
      dateOfBirth: petDateOfBirth,
      species: petSpecies
    }
    let response = await controller.getPet(petId, petName, petSpecies, petDateOfBirth);
    expect(response).toStrictEqual(pet);
  });

  test("should return the specific cat attribute based on detailed pet attribute", async () => {
    let petId = 4, petName = "Persian Cat", petSpecies = "cat", petDateOfBirth = "12/10/2018";
    let pet = {
      id: petId,
      name: petName,
      dateOfBirth: petDateOfBirth,
      species: petSpecies
    }
    let response = await controller.getPet(petId, petName, petSpecies, petDateOfBirth);
    expect(response).toStrictEqual(pet);
  });

  test("should return the specific cat attribute based on detailed pet attribute", async () => {
    let petId = 5, petName = "Black Rabbit", petSpecies = "rabbit", petDateOfBirth = "25/05/2019";
    let pet = {
      id: petId,
      name: petName,
      dateOfBirth: petDateOfBirth,
      species: petSpecies
    }
    let response = await controller.getPet(petId, petName, petSpecies, petDateOfBirth);
    expect(response).toStrictEqual(pet);
  });
});

describe("Post pet instance /post", () => {
  test("should return attributes which are strictly same as the attricutes which are passed in", async () => {
    /**
     * we donot set id in advance, it will be generated automatically by "Math.floor(Math.random() * 10000)"
     */
    let petName = "La Prado", petSpecies = "dog", petDateOfBirth = "04/09/2018";
    let pet = {
      name: petName,
      dateOfBirth: petDateOfBirth,
      species: petSpecies
    };
    let response = await controller.createPet(pet);
    expect(response.name).toStrictEqual(petName);
    expect(response.dateOfBirth).toStrictEqual(petDateOfBirth);
    expect(response.species).toStrictEqual(petSpecies);
  });
});

describe("Update dog instance /update/{petId}", () => {
  test("should return the updated attributes of the dog which is updated", async () => {
    let petId = 11, petName = "La Prado", petSpecies = "dog", petDateOfBirth = "04/09/2018";
    let pet = {
      id: petId,
      name: petName,
      dateOfBirth: petDateOfBirth,
      species: petSpecies
    };
    let response = await controller.update(petId, petName, petDateOfBirth, petSpecies);
    expect(response).toStrictEqual(pet);
  });
});

describe("Update cat instance /update/{petId}", () => {
  test("should return the updated attributes of the cat which is updated", async () => {
    let petId = 12, petName = "Persian Cat", petSpecies = "cat", petDateOfBirth = "14/10/2017";
    let pet = {
      id: petId,
      name: petName,
      dateOfBirth: petDateOfBirth,
      species: petSpecies
    };
    let response = await controller.update(petId, petName, petDateOfBirth, petSpecies);
    expect(response).toStrictEqual(pet);
  });
});

describe("Update rabbit instance /update/{petId}", () => {
  test("should return the updated attributes of the rabbit which is updated", async () => {
    let petId = 13, petName = "Holland Lop", petSpecies = "rabbit", petDateOfBirth = "11/05/2018";
    let pet = {
      id: petId,
      name: petName,
      dateOfBirth: petDateOfBirth,
      species: petSpecies
    };
    let response = await controller.update(petId, petName, petDateOfBirth, petSpecies);
    expect(response).toStrictEqual(pet);
  });
});

describe("Delete dog instance /update/{petId}", () => {
  test("should return the deleted attributes of the dog", async () => {
    let petId = 2000, repo = "dog";
    let response = await controller.delete(petId, repo);
    expect(response).toStrictEqual(dogRepository[0]);
  });
});

describe("Delete dog instance /update/{petId}", () => {
  test("should return the deleted attributes of the dog", async () => {
    let petId = 2001, repo = "dog";
    let response = await controller.delete(petId, repo);
    expect(response).toStrictEqual(dogRepository[1]);
  });
});

describe("Delete cat instance /update/{petId}", () => {
  test("should return the deleted attributes of the cat", async () => {
    let petId = 1000, repo = "cat";
    let response = await controller.delete(petId, repo);
    expect(response).toStrictEqual(catRepository[0]);
  });
});

describe("Delete cat instance /update/{petId}", () => {
  test("should return the deleted attributes of the cat", async () => {
    let petId = 1001, repo = "cat";
    let response = await controller.delete(petId, repo);
    expect(response).toStrictEqual(catRepository[1]);
  });
});

describe("Delete rabbit instance /update/{petId}", () => {
  test("should return the deleted attributes of the rabbit", async () => {
    let petId = 3000, repo = "rabbit";
    let response = await controller.delete(petId, repo);
    expect(response).toStrictEqual(rabbitRepository[0]);
  });
});

describe("Delete rabbit instance /update/{petId}", () => {
  test("should return the deleted attributes of the rabbit", async () => {
    let petId = 3001, repo = "rabbit";
    let response = await controller.delete(petId, repo);
    expect(response).toStrictEqual(rabbitRepository[1]);
  });
});