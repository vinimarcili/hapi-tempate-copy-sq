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

@Entity("youtubeProfiles")
class YoutubeProfile {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => SocialNetworkProfile)
  @JoinColumn({ name: "id" })
  socialNetworkProfile: SocialNetworkProfile;
  
  @Column({ nullable: true })
  googleId: string;
  
  @Column({ default: 1 })
  exists: number;
  
  @Column({ default: 1 })
  searchable: number;
  
  @Column({ nullable: true })
  notSearchReason: string;
  
  @Column({ nullable: true })
  email: string;
  
  @Column({ default: 'Processando' })
  channelTitle: string;
  
  @Column({ default: 'Processando' })
  username: string;
  
  @Column({ default: 'Processando' })
  picture: string;
  
  @Column({ nullable: true })
  fullName: string;
  
  @Column({ nullable: true, type: 'text' })
  description: string;
  
  @Column({ nullable: true, type: 'text' })
  bio: string;
  
  @Column({ nullable: true, default: 'Processando' })
  customUrl: string;
  
  @Column({ default: 'Processando' })
  country: string;
  
  @Column()
  since: Date;
  
  @Column({ default: 0 })
  followers: number;
  
  @Column({ default: 0 })
  subscribers: number;
  
  @Column({ default: 0 })
  engagementRate: number;
  
  @Column({ default: 0 })
  engagementRatePositive: number;
  
  @Column({ default: 0 })
  engagementRateNegative: number;
  
  @Column({ default: 0 })
  viewsRate: number;
  
  @Column({ default: 0 })
  viewsMedian: number;
  
  @Column({ default: 0 })
  comments: number;
  
  @Column({ default: 0 })
  identificationComments: number;
  
  @Column({ default: 0 })
  identificationLikes: number;
  
  @Column({ default: 0 })
  identificationDislikes: number;
  
  @Column({ default: 0 })
  averageComments: number;
  
  @Column({ default: 0 })
  averageLikes: number;
  
  @Column({ default: 0 })
  averageDislikes: number;
  
  @Column({ default: 0 })
  shares: number;
  
  @Column({ default: 0 })
  averageShares: number;
  
  @Column({ default: 0 })
  commentLikesRate: number;
  
  @Column({ default: 0 })
  commentViewsRate: number;
  
  @Column({ default: 0 })
  averageViewsDuration: number;
  
  @Column({ default: 0 })
  averageViewPercentage: number;
  
  @Column({ default: 0 })
  averageVideoDuration: number;
  
  @Column({ default: 0 })
  videoEffectiveReach: number;
  
  @Column({ default: 0 })
  videos: number;
  
  @Column({ default: 0 })
  identificationVideos: number;
  
  @Column({ default: 0 })
  views: number;
  
  @Column({ default: 0 })
  identificationViews: number;
  
  @Column({ default: 'Processando' })
  privacyStatus: string;
  
  @Column({ nullable: true })
  language: string;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
  
  @Column({ nullable: true })
  logstashProcessedAt: Date;
  
  @Column({ nullable: true, default: 0 })
  macro: number;
  
  @Column({ nullable: true })
  brandUser: number;
}


export { YoutubeProfile }