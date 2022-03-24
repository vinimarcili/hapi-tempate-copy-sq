import { getMongoRepository, MongoRepository } from "typeorm";
import { ObjectID } from "mongodb"

import { Recruitment } from "@models/typeorm/schemas/recruitment";

import { IRecruitmentsRepository } from "./IRecruitmentsRepository";

export default class RecruitmentsRepository implements IRecruitmentsRepository {
  private repository: MongoRepository<Recruitment>;

  constructor() {
    this.repository = getMongoRepository(Recruitment, "mongo");
  }

  async findRecruitmentsByiIdCampaign(id: string): Promise<Recruitment[]> {
    const objectId = new ObjectID(id);

    const recruitments = await this.repository.find({
      where: {
        idCampaign: objectId
      }
    })

    return recruitments
  }

  async listRecruitments(): Promise<Recruitment[]> {
    const recruitments = await this.repository.find()

    return recruitments
  }
}
