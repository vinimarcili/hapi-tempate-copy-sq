import { Recruitment } from "@models/typeorm/schemas/recruitment";

interface IRecruitmentsRepository {
  findRecruitmentsByiIdCampaign(id: string): Promise<Recruitment[]>;
  listRecruitments(): Promise<Recruitment[]>;
}

export { IRecruitmentsRepository };