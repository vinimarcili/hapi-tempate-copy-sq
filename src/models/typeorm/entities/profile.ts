import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { ProfileAdditionalInfo } from "./profileAdditionalInfo";
import { ProfileAdditionalInfoBank } from "./profileAdditionalInfoBank";
import { ProfileWhitelabel } from "./profileWhitelabel";
import { SocialNetworkProfile } from "./socialNetworkProfile";

@Entity("profiles")
class Profile {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  deletedNetworks: string;

  @Column({ nullable: true })
  deletedAt: Date

  @OneToOne(() => ProfileAdditionalInfo, profileAdditionalInfo => profileAdditionalInfo.profile)
  profileAdditionalInfo: ProfileAdditionalInfo;

  @OneToMany(() => ProfileWhitelabel, profileWhitelabel => profileWhitelabel.profile)
  profileWhitelabel: ProfileWhitelabel[];

  @OneToOne(() => ProfileAdditionalInfoBank, profileAdditionalInfoBank => profileAdditionalInfoBank.profile)
  profileAdditionalInfoBank: ProfileAdditionalInfoBank;

  @OneToMany(() => SocialNetworkProfile, socialNetworkProfile => socialNetworkProfile.profile)
  socialNetworkProfile: SocialNetworkProfile[];
}

export { Profile }