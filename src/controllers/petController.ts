import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Put,
  Delete,
  Query,
  Route,
  SuccessResponse
} from "tsoa";
import { inject } from "inversify";
import { Pet } from '../module/pet';
import { PetService, PetCreationParams } from '../module/petService';
import { provideSingleton } from "../util/provideSingleton";

@Route("pets")
@provideSingleton(PetController)
export class PetController extends Controller {
  constructor(@inject(PetService) private petService: PetService) {
    super();
  }
  /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
  @Get("{petId}")
  public async getPet(
    @Path() petId: number,
    @Query() name?: string,
    @Query() species?: string,
    @Query() dateOfBirth?: string
  ): Promise<Pet> {
    try {
      return this.petService.getPetAttribute(petId, name, species, dateOfBirth);
    } catch (error) {
      throw (error);
    }
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createPet(
    @Body() requestBody: PetCreationParams
  ): Promise<Pet> {
    try {
      console.log("requestBody = ", requestBody);
      this.setStatus(201);
      return this.petService.createPetInstance(requestBody);
    } catch (error) {
      throw (error);
    }
  }

  @Put("update/{petId}")
  public async update(
    @Path() petId: number,
    @Query() name?: string,
    @Query() dateOfBirth?: string,
    @Query() species?: string
  ): Promise<Pet> {
    try {
      return this.petService.updatePetAttribute(petId, name, dateOfBirth, species);
    } catch (error) {
      throw (error)
    }
  }

  @Delete("delete/{petId}")
  public async delete(
    @Path() petId: number,
    @Query() repo: string
  ): Promise<Pet> {
    return this.petService.deletePetInstance(petId, repo);
  }
}