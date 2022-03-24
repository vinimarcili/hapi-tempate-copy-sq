import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn
} from "typeorm";
import { Profile } from "./profile";
import { ProfileAdditionalInfoResearchQuestion } from "./profileAdditionalInfoResearchQuestion";
import { ProfileAdditionalInfoResearchQuestionGroup } from "./profileAdditionalInfoResearchQuestionGroup";

@Entity("profileAdditionalInfoResearchAnswer")
class ProfileAdditionalInfoResearchAnswer {
  @PrimaryColumn()
  squidId: string;

  @OneToOne(() => Profile)
  @JoinColumn({ name: "squidId" })
  profile: Profile;

  @Column({ default: 'hub' })
  idWebapp: string;

  @Column({ nullable: true })
  answer: string;

  @Column()
  answerId: string;
  
  @Column()
  sharedQuestionId: string;

  @ManyToOne(type => ProfileAdditionalInfoResearchQuestion)
  @JoinColumn({ name: "sharedQuestionId" })
  profileAdditionalInfoResearchQuestion: ProfileAdditionalInfoResearchQuestion;

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}

export { ProfileAdditionalInfoResearchAnswer }
