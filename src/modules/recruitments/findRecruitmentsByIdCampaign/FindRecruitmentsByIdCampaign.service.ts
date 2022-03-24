import { inject, injectable } from "tsyringe";

import { Recruitment } from "@models/typeorm/schemas/recruitment";
import { IRecruitmentsRepository } from "@repositories/recruitments/IRecruitmentsRepository";

@injectable()
class FindRecruitmentsByIdCampaignService {
  constructor(
    @inject("RecruitmentsRepository")
    private readonly recruitmentsRepository: IRecruitmentsRepository
  ) {}

  async execute({ idCampaign }): Promise<Recruitment[]> {
    const recruitments = await this.recruitmentsRepository.findRecruitmentsByiIdCampaign(
      idCampaign
    );

    return recruitments;
  }
}

export { FindRecruitmentsByIdCampaignService };