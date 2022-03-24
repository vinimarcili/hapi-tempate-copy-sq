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
import { ProfileAdditionalInfoResearchQuestionGroup } from "./profileAdditionalInfoResearchQuestionGroup";

@Entity("profileAdditionalInfoResearch")
class ProfileAdditionalInfoResearch {
  @PrimaryColumn()
  squidId: string;

  @OneToOne(() => Profile)
  @JoinColumn({ name: "squidId" })
  profile: Profile;

  @Column({ default: 'hub' })
  idWebapp: string;
  
  @Column({ nullable: true })
  questionGroupId: string;

  @ManyToOne(type => ProfileAdditionalInfoResearchQuestionGroup)
  @JoinColumn({ name: "questionGroupId" })
  profileAdditionalInfoResearchQuestionGroup: ProfileAdditionalInfoResearchQuestionGroup;

  @Column({ nullable: true })
  responseId: string;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}

export { ProfileAdditionalInfoResearch }
