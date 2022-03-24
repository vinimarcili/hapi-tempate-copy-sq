import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from "typeorm";
import { Profile } from "./profile";

@Entity("profileWhitelabels")
class ProfileWhitelabel {
  @PrimaryColumn()
  id: string;

  @Column()
  profileId: string;

  @ManyToOne(type => Profile)
  @JoinColumn({ name: "profileId" })
  profile: Profile;

  @Column({ nullable: true })
  whitelabel: string;

  @CreateDateColumn()
  created_at: string;

  @Column({ nullable: true })
  registeredFromSource: string;
  
  @Column({ nullable: true })
  registeredFromCampaign: string;
  
  @Column({ nullable: true })
  registeredFromMedium: string;
  
  @Column({ nullable: true })
  registeredFromContent: string;
  
  @Column({ nullable: true })
  registeredFromAdId: string;
  
  @Column({ nullable: true })
  registeredFromAdName: string;
}


export { ProfileWhitelabel }