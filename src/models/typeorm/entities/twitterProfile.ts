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

@Entity("twitterProfiles")
class TwitterProfile {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => SocialNetworkProfile)
  @JoinColumn({ name: "id" })
  socialNetworkProfile: SocialNetworkProfile;
  
  @Column({ default: 'Processando' })
  username: string;
  
  @Column({ default: 'Processando' })
  picture: string;
  
  @Column({ default: 0 })
  followers: number
  
  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
  
  @Column({ default: 0 })
  brandUser: number
  
  @Column({ default: 1 })
  exists: number
  
  @Column({ default: 0 })
  macro: number
  
  @Column({ nullable: true })
  engagementRate: number
  
  @Column({ nullable: true })
  totalRetweets: number
  
  @Column({ nullable: true })
  totalLikes: number
  
  @Column({ nullable: true })
  totalRetweetsReceived: number
  
  @Column({ nullable: true })
  averageLikes: number
  
  @Column({ nullable: true })
  averageRetweets: number
  
  @Column({ nullable: true })
  totalTweets: number
  
  @Column({ nullable: true })
  averageRepliesByLikes: number
  
  @Column({ nullable: true })
  averageRepliesByTweet: number
  
  @Column({ nullable: true })
  repliesRate: number
  
  @Column({ nullable: true })
  effectiveImpressionReach: number
  
  @Column({ nullable: true })
  averageImpressions: number
  
  @Column({ nullable: true })
  countReplies: number
  
  @Column({ nullable: true })
  adTweetsCount: number
  
  @Column({ nullable: true })
  engagementRateAd: number
  
  @Column({ nullable: true })
  tweetPostAdPerformance: number
}


export { TwitterProfile }