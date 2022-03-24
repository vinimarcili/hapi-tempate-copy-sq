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

@Entity("instagramProfiles")
class InstagramProfile {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => SocialNetworkProfile)
  @JoinColumn({ name: "id" })
  socialNetworkProfile: SocialNetworkProfile;

  @Column({ default: "Processando" })
  username: string;

  @Column({ default: 1 })
  exists: number;

  @Column({ default: 1 })
  searchable: number;
  
  @Column({ default: 0, nullable: true })
  macro: number;
  
  @Column({ nullable: true })
  notSearchReason: string;
  
  @Column({ default: 0 })
  brandUser: number;
  
  @Column({ nullable: true, type: 'text' })
  picture: string;
  
  @Column({ nullable: true })
  fullName: string;
  
  @Column({ nullable: true })
  email: string;
  
  @Column({ nullable: true })
  bio: string;
  
  @Column({ nullable: true })
  website: string;
  
  @Column({ nullable: true })
  language: string;
  
  @Column({ default: 0 })
  isBusiness: number;
  
  @Column({ nullable: true })
  hasSkip: number;
  
  @Column({ nullable: true })
  facebookUserId: string;
  
  @Column({ nullable: true })
  facebookPageId: string;
  
  @Column({ nullable: true })
  instagramBusinessId: string;
  
  @Column({ default: 0 })
  scrapperEngagementRate: number;
  
  @Column({ nullable: true })
  engagementRate: number;
  
  @Column({ default: 0 })
  totalMedias: number;
  
  @Column({ default: 0 })
  medias: number;
  
  @Column({ default: 0 })
  followers: number;
  
  @Column({ default: 0 })
  follows: number;
  
  @Column({ default: 0 })
  likes: number;
  
  @Column({ default: 0 })
  comments: number;
  
  @Column()
  tier: string;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
  
  @Column({ nullable: true })
  logstashProcessedAt: Date;
  
  @Column({ nullable: true })
  score: number;
  
  @Column({ nullable: true })
  score1: number;
  
  @Column({ nullable: true })
  score2: number;
  
  @Column({ nullable: true })
  score3: number;
  
  @Column({ nullable: true })
  score4: number;
  
  @Column({ nullable: true })
  score5: number;
  
  @Column({ nullable: true })
  storiesEngagementRate: number;
  
  @Column({ nullable: true })
  postEffectiveReach: number;
  
  @Column({ nullable: true })
  storiesEffectiveReach: number;
  
  @Column({ nullable: true })
  profileViews: number;
  
  @Column({ nullable: true, default: 0 })
  hasMediaKit: number;
  
  @Column()
  categorizedAt: Date;
  
  @Column({ default: 0 })
  averageComments: number;
  
  @Column({ default: 0 })
  averageCommentsImage: number;
  
  @Column({ default: 0 })
  averageCommentsVideo: number;
  
  @Column({ default: 0 })
  averageCommentsCarousel: number;
  
  @Column({ default: 0 })
  averageLikes: number;
  
  @Column({ default: 0 })
  averageLikesImage: number;
  
  @Column({ default: 0 })
  averageLikesVideo: number;
  
  @Column({ default: 0 })
  averageLikesCarousel: number;
  
  @Column({ default: 0 })
  commentLikesRate: number;
  
  @Column({ default: 0 })
  commentsRate: number;
  
  @Column({ nullable: true })
  totalStoriesImpressions: number;
  
  @Column({ nullable: true })
  totalStoriesReach: number;
  
  @Column({ nullable: true })
  totalStoriesReplies: number;
  
  @Column({ nullable: true })
  totalStoriesTapBacks: number;
  
  @Column({ default: 0 })
  totalStoriesTapFowardExits: number;
  
  @Column({ nullable: true })
  totalPostsReach: number;
  
  @Column({ nullable: true })
  totalPostsSaves: number;
  
  @Column({ nullable: true })
  totalPostsImpressions: number;
  
  @Column({ default: 0 })
  averageSaved: number;
  
  @Column({ default: 0 })
  averageSavedImage: number;
  
  @Column({ default: 0 })
  averageSavedVideo: number;
  
  @Column({ default: 0 })
  averageSavedCarousel: number;
  
  @Column({ default: 0 })
  averageTapBacks: number;
  
  @Column({ default: 0 })
  averageTapBacksImage: number;
  
  @Column({ default: 0 })
  averageTapBacksVideo: number;
  
  @Column({ default: 0 })
  averageReplies: number;
  
  @Column({ default: 0 })
  averageRepliesImage: number;
  
  @Column({ default: 0 })
  averageRepliesVideo: number;
  
  @Column({ default: 0 })
  averageTapFowardExits: number;
  
  @Column({ default: 0 })
  averageTapFowardExitsImage: number;
  
  @Column({ default: 0 })
  averageTapFowardExitsVideo: number;
  
  @Column({ default: 0 })
  completeVideoStoriesRate: number;
  
  @Column({ nullable: true })
  numberPostsActivityScore: number;
  
  @Column({ nullable: true })
  numberStoriesScore: number;
  
  @Column({ nullable: true })
  daysPostsScore: number;
  
  @Column({ nullable: true })
  daysStoriesScore: number;
  
  @Column({ nullable: true })
  advertisingPostsEngagementRate: number;
  
  @Column({ nullable: true })
  noAdvertisingPostsEngagementRate: number;
  
  @Column({ nullable: true })
  advertisingStoriesEngagementRate: number;
  
  @Column({ nullable: true })
  noAdvertisingStoriesEngagementRate: number;
  
  @Column({ nullable: true })
  advertisingContentPercentage: number;
  
  @Column({ nullable: true })
  advertisingPostsPercentage: number;
  
  @Column({ nullable: true })
  advertisingStoriesPercentage: number;
  
  @Column({ nullable: true })
  postImageEngagementRate: number;
  
  @Column({ nullable: true })
  postCarouselEngagementRate: number;
  
  @Column({ nullable: true })
  postVideoEngagementRate: number;
  
  @Column({ nullable: true })
  storiesVideoEngagementRate: number;
  
  @Column({ nullable: true })
  storiesImageEngagementRate: number;
  
  @Column({ nullable: true })
  storiesCompleteEngagementRate: number;
  
  @Column({ default: 0 })
  averagePostsReach: number;
  
  @Column({ default: 0 })
  averagePostsImpressions: number;
  
  @Column({ default: 0 })
  averagePostsFrequency: number;
  
  @Column({ default: 0 })
  averageStoriesReach: number;
  
  @Column({ default: 0 })
  averageStoriesImpressions: number;
  
  @Column({ default: 0 })
  averageStoriesFrequency: number;
  
  @Column({ nullable: true })
  adPostPermanceEngagementRate: number;
  
  @Column({ nullable: true })
  adStoriesPermanceEngagementRate: number;
  
  @Column({ nullable: true })
  identifyAt: Date;
}

export { InstagramProfile }