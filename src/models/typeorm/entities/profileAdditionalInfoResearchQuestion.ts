import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from "typeorm";
import { ProfileAdditionalInfoResearchQuestionGroup } from "./profileAdditionalInfoResearchQuestionGroup";

@Entity("profileAdditionalInfoResearchQuestion")
class ProfileAdditionalInfoResearchQuestion {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  question: string;
  
  @Column({ nullable: true })
  questionType: string;

  @Column({ nullable: true })
  questionGroupId: string;

  @ManyToOne(type => ProfileAdditionalInfoResearchQuestionGroup)
  @JoinColumn({ name: "questionGroupId" })
  profileAdditionalInfoResearchQuestionGroup: ProfileAdditionalInfoResearchQuestionGroup;

  @Column({ default: 'pt-br' })
  language: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

  @OneToMany(
    () => ProfileAdditionalInfoResearchQuestion,
    profileAdditionalInfoResearchQuestion => profileAdditionalInfoResearchQuestion.profileAdditionalInfoResearchQuestionGroup
  )
  profileAdditionalInfoResearchQuestion: ProfileAdditionalInfoResearchQuestion[];
}

export { ProfileAdditionalInfoResearchQuestion }
