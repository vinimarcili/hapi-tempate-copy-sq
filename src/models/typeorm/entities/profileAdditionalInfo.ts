import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn
} from "typeorm";
import { Profile } from "./profile";

@Entity("profileAdditionalInfos")
class ProfileAdditionalInfo {
  @PrimaryColumn()
  profileId: string;

  @OneToOne(() => Profile)
  @JoinColumn({ name: "profileId" })
  profile: Profile;
  
  @Column({ nullable: true })
  auth0: string;
  
  @Column()
  email: string;
  
  @Column({ nullable: true })
  document: string;
  
  @Column()
  name: string;
  
  @Column({ nullable: true })
  blog: string;
  
  @Column()
  birthday: Date;
  
  @Column({ nullable: true })
  gender: string;
  
  @Column()
  phone: string;
  
  @Column({ nullable: true })
  zipcode: string;
  
  @Column({ nullable: true })
  address: string;
  
  @Column({ nullable: true })
  addressNumber: string;
  
  @Column({ nullable: true })
  complement: string;
  
  @Column({ nullable: true })
  city: string;
  
  @Column({ nullable: true })
  neighborhood: string;
  
  @Column({ nullable: true })
  uf: string;
  
  @Column({ nullable: true, default: 'BR' })
  country: string;
  
  @Column({ nullable: true })
  registeredFromSource: string;
  
  @Column({ nullable: true })
  registeredFromCampaign: string;
  
  @Column({ nullable: true })
  registeredFromMedium: string;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
  
  @Column({ nullable: true, default: 0 })
  allowSMS: number;
  
  @Column({ nullable: true, default: 1 })
  allowWhatsapp: number;
  
  @Column({ nullable: true, default: 1 })
  allowSuggestionEmail: number;
  
  @Column()
  isPersonAccount: number;
  
  @Column()
  documentType: string;
  
  @Column({ nullable: true, default: 0 })
  hasSkip: number;
  
  @Column({ default: 'pt-br' })
  language: string;
  
  @Column({ nullable: true, default: 0 })
  phoneValid: number;
  
  @Column({ nullable: true })
  phoneValidCode: string;
  
  @Column({ nullable: true })
  phoneValidCodeCreatedAt: Date;
  
  @Column({ nullable: true })
  race: number;
  
  @Column({ nullable: true })
  registeredFromAdId: string;
  
  @Column({ nullable: true })
  registeredFromContent: string;
  
  @Column({ nullable: true })
  registeredFromAdName: string;
  
  @Column({ nullable: true, default: 0 })
  portalRegistration: number;
  
  @Column({ nullable: true, default: 0 })
  agent: number;
  
  @Column({ nullable: true, default: 0 })
  showWarning: number;
  
  @Column({ nullable: true })
  scenario: string;
  
  @Column({ nullable: true })
  updateAddress: number;
  
  @Column({ nullable: true })
  nationality: string;
}

export { ProfileAdditionalInfo }
