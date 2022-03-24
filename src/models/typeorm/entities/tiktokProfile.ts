import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { SocialNetworkProfile } from "./socialNetworkProfile";

@Entity("tiktokProfiles")
class TiktokProfile {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => SocialNetworkProfile)
  @JoinColumn({ name: "id" })
  socialNetworkProfile: SocialNetworkProfile;
  
  @Column({ nullable: true })
  openId: string;
  
  @Column({ nullable: true })
  unionId: string;
  
  @Column({ nullable: true, default: 1 })
  exists: number;
  
  @Column({ nullable: true, default: 1 })
  verified: number;
  
  @Column({ nullable: true, default: 'Processando' })
  username: string;
  
  @Column({ nullable: true, default: 'Processando' })
  nickname: string;
  
  @Column({ nullable: true, default: 0 })
  macro: number;
  
  @Column({ nullable: true, default: 0 })
  brandUser: number;
  
  @Column({ nullable: true })
  picture: number;
  
  @Column({ nullable: true })
  bio: number;
  
  @Column({ nullable: true, default: 0 })
  engagementRate: number;
  
  @Column({ nullable: true, default: 0 })
  followers: number;
  
  @Column({ nullable: true, default: 0 })
  following: number;
  
  @Column({ nullable: true, default: 0 })
  likes: number;
  
  @Column({ nullable: true, default: 0 })
  averageLikes: number;
  
  @Column({ nullable: true, default: 0 })
  comments: number;
  
  @Column({ nullable: true, default: 0 })
  averageComments: number;
  
  @Column({ nullable: true, default: 0 })
  shares: number;
  
  @Column({ nullable: true, default: 0 })
  averageShares: number;
  
  @Column({ nullable: true, default: 0 })
  views: number;
  
  @Column({ nullable: true, default: 0 })
  averageViews: number;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
}


export { TiktokProfile }