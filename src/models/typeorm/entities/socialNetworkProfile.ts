import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { InstagramProfile } from "./instagramProfile";
import { Profile } from "./profile";
import { SocialNetworkProfileCategory } from "./socialNetworkProfilesCategory";
import { TiktokProfile } from "./tiktokProfile";
import { TwitterProfile } from "./twitterProfile";
import { YoutubeProfile } from "./youtubeProfile";

@Entity("socialNetworkProfiles")
class SocialNetworkProfile {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  squidId: string;

  @ManyToOne(() => Profile)
  @JoinColumn({ name: "squidId" })
  profile: Profile;

  @Column()
  socialNetwork: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => InstagramProfile, instagramProfile => instagramProfile.socialNetworkProfile)
  instagramProfile: InstagramProfile;

  @OneToMany(() => TwitterProfile, twitterProfile => twitterProfile.socialNetworkProfile)
  twitterProfile: TwitterProfile;

  @OneToMany(() => TiktokProfile, tiktokProfile => tiktokProfile.socialNetworkProfile)
  tiktokProfile: TiktokProfile;

  @OneToMany(() => YoutubeProfile, youtubeProfile => youtubeProfile.socialNetworkProfile)
  youtubeProfile: YoutubeProfile;

  @OneToMany(() => SocialNetworkProfileCategory, socialNetworkProfileCategory => socialNetworkProfileCategory.socialNetworkProfile)
  socialNetworkProfileCategory: SocialNetworkProfileCategory[];
}

export { SocialNetworkProfile }