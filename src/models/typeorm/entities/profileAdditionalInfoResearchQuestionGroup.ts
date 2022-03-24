import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from "typeorm";
import { ProfileAdditionalInfoResearch } from "./profileAdditionalInfoResearch";
import { ProfileAdditionalInfoResearchQuestion } from "./profileAdditionalInfoResearchQuestion";

@Entity("profileAdditionalInfoResearchQuestionGroup")
class ProfileAdditionalInfoResearchQuestionGroup {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  name: string;
  
  @Column()
  type: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

  @Column({ default: 'hub' })
  idWebapp: string;

  @OneToMany(
    () => ProfileAdditionalInfoResearch,
    profileAdditionalInfoResearch => profileAdditionalInfoResearch.profileAdditionalInfoResearchQuestionGroup
  )
  profileAdditionalInfoResearch: ProfileAdditionalInfoResearch[];

  @OneToMany(
    () => ProfileAdditionalInfoResearchQuestion,
    profileAdditionalInfoResearchQuestion => profileAdditionalInfoResearchQuestion.profileAdditionalInfoResearchQuestionGroup
  )
  profileAdditionalInfoResearchQuestion: ProfileAdditionalInfoResearchQuestion[];
}

export { ProfileAdditionalInfoResearchQuestionGroup }
