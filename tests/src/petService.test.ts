/*
 * @Author: your name
 * @Date: 2021-08-24 12:41:41
 * @LastEditTime: 2021-08-29 16:42:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Centrapass\petstore\src\test\src\pet.test.ts
*/
import { Pet } from '../../src/module/pet';
import { PetService } from '../../src/module/petService';
import { catRepository } from '../../src/petRepository/catStore';
import { dogRepository } from '../../src/petRepository/dogStore';
import { rabbitRepository } from '../../src/petRepository/rabbitStore';

describe("PetService", () => {
  describe("getPetAttribute", () => {
    let petService = new PetService();
    test("should return dog attribute", () => {
      let dogAttribute = {
        id: 1,
        name: "German Shepherd",
        dateOfBirth: "10/10/2020",
        species: "dog"
      };
      let dogId = 1, name = "German Shepherd", dateOfBirth = "10/10/2020", species = "dog";
      expect(petService.getPetAttribute(dogId, name, species, dateOfBirth)).toStrictEqual(dogAttribute);
    });

    test("should return cat attribute", () => {
      let catAttribute = {
        id: 2,
        name: "Persian Cat",
        dateOfBirth: "03/03/2020",
        species: "cat"
      };
      let catId = 2, name = "Persian Cat", dateOfBirth = "03/03/2020", species = "cat";
      expect(petService.getPetAttribute(catId, name, species, dateOfBirth)).toStrictEqual(catAttribute);
    })

    test("should return rabbit attribute", () => {

      let rabbitAttribute = {
        id: 3,
        name: "Little White Rabbit",
        dateOfBirth: "12/03/2018",
        species: "rabbit"
      };
      let rabbitId = 3, name = "Little White Rabbit", dateOfBirth = "12/03/2018", species = "rabbit";
      expect(petService.getPetAttribute(rabbitId, name, species, dateOfBirth)).toStrictEqual(rabbitAttribute);
    })

    test("should return invalid error if species is fish", () => {
      let fishAttribute = {
        id: 4,
        name: "",
        dateOfBirth: "",
        species: "Invalid species"
      };
      let fishId = 4, name = "Golden Fish", dateOfBirth = "06/15/2021", species = "fish";
      expect(petService.getPetAttribute(fishId, name, species, dateOfBirth)).toStrictEqual(fishAttribute);
    })

    test("should return invalid error if species is empty", () => {
      let petAttribute = {
        id: 5,
        name: "",
        dateOfBirth: "",
        species: "Invalid species"
      };
      let id = 5, name = "Rhino", dateOfBirth = "06/15/2021", species = "";
      expect(petService.getPetAttribute(id, name, species, dateOfBirth)).toStrictEqual(petAttribute);
    })

    test("should return invalid error if species is undefined", () => {
      let petAttribute = {
        id: 6,
        name: "",
        dateOfBirth: "",
        species: "Invalid species"
      };
      let id = 6, name = "hippo", dateOfBirth = "0815/20/20", species = undefined;
      expect(petService.getPetAttribute(id, name, species, dateOfBirth)).toStrictEqual(petAttribute);
    })
  })
})

describe("PetService", () => {
  describe("createPetInstance", () => {
    it("should create a pet instance", () => {
      let dogProperty = {
        name: "Golden Retriever",
        dateOfBirth: "04/07/2019",
        species: "dog"
      };
      let petSvcInst = new PetService();
      let response = petSvcInst.createPetInstance(dogProperty);
      expect(response.name).toStrictEqual(dogProperty.name);
      expect(response.dateOfBirth).toStrictEqual(dogProperty.dateOfBirth);
      expect(response.species).toStrictEqual(dogProperty.species);
    })
  })
})

describe("PetService", () => {
  describe('updatePetData', () => {
    let petSrvInst = new PetService();
    test("should return updated attribute of dog", () => {
      let dogAttribute: Pet = {
        id: 1,
        name: "German Shepherd",
        dateOfBirth: "10/10/2020",
        species: "dog"
      };
      let dogId = 1, name = "German Shepherd", dateOfBirth = "10/10/2020", species = "dog";
      expect(petSrvInst.updatePetAttribute(dogId, name, dateOfBirth, species)).toStrictEqual(dogAttribute);
    });

    test("should return updated attribute of cat", () => {
      let catAttribute: Pet = {
        id: 2,
        name: "Bengal Cat",
        dateOfBirth: "05/10/2017",
        species: "cat"
      };
      let catId = 2, name = "Bengal Cat", dateOfBirth = "05/10/2017", species = "cat";
      expect(petSrvInst.updatePetAttribute(catId, name, dateOfBirth, species)).toStrictEqual(catAttribute);
    });

    test("should return updated attribute of rabbit", () => {
      let rabbitAttribute: Pet = {
        id: 3,
        name: "European Rabbit",
        dateOfBirth: "19/03/2020",
        species: "rabbit"
      };
      let rabbitId = 3, name = "European Rabbit", dateOfBirth = "19/03/2020", species = "rabbit";
      expect(petSrvInst.updatePetAttribute(rabbitId, name, dateOfBirth, species)).toStrictEqual(rabbitAttribute);
    });
  })
})

describe("PetService", () => {
  describe("delete cat instance", () => {
    let petSrvInst = new PetService();
    test("should delete the 1st cat instance in catRepository", () => {
      let catId = 1000;
      let repo = "cat";
      expect(petSrvInst.deletePetInstance(catId, repo)).toStrictEqual(catRepository[0]);
    });
    test("should delete the 2nd cat instance in catRepository", () => {
      let catId = 1001;
      let repo = "cat";
      expect(petSrvInst.deletePetInstance(catId, repo)).toStrictEqual(catRepository[1]);
    });
  })
})

describe("PetService", () => {
  describe("delete dog instance", () => {
    let petSrvInst = new PetService();
    test("should delete the 1st dog instance in dogRepository", () => {
      let dogId = 2000;
      let repo = "dog";
      expect(petSrvInst.deletePetInstance(dogId, repo)).toStrictEqual(dogRepository[0]);
    });
    test("should delete the 2nd dog instance in dogRepository", () => {
      let dogId = 2001;
      let repo = "dog";
      expect(petSrvInst.deletePetInstance(dogId, repo)).toStrictEqual(dogRepository[1]);
    });
  })
})

describe("PetService", () => {
  describe("delete rabbit instance", () => {
    let petSrvInst = new PetService();
    test("should delete the 1st rabbit instance in rabbitRepository", () => {
      let rabbitId = 3000;
      let repo = "rabbit";
      expect(petSrvInst.deletePetInstance(rabbitId, repo)).toStrictEqual(rabbitRepository[0]);
    });
    test("should delete the 2nd rabbit instance in rabbitRepository", () => {
      let rabbitId = 3001;
      let repo = "rabbit";
      expect(petSrvInst.deletePetInstance(rabbitId, repo)).toStrictEqual(rabbitRepository[1]);
    });
  })
})