import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { SocialNetworkProfile } from "./socialNetworkProfile";

@Entity("socialNetworkProfilesCategories")
class SocialNetworkProfileCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  categoryId: number;

  @Column({ nullable: true })
  profileId: string;

  @ManyToOne(type => SocialNetworkProfile)
  @JoinColumn({ name: "profileId"})
  socialNetworkProfile: SocialNetworkProfile

  @Column({ nullable: true })
  socialNetwork: string;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date
}

export { SocialNetworkProfileCategory }