import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Profile } from "./profile";

@Entity("profileAdditionalInfoBanks")
class ProfileAdditionalInfoBank {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  profileId: string;

  @OneToOne(() => Profile)
  @JoinColumn({ name: "profileId" })
  profile: Profile;
  
  @Column({ nullable: true })
  bankCode: string;
  
  @Column({ nullable: true })
  bankName: string;
  
  @Column({ nullable: true })
  bankAccountNumber: string;
  
  @Column({ nullable: true })
  bankAccountDigit: string;
  
  @Column({ nullable: true })
  bankAccountAgency: string;
  
  @Column({ nullable: true })
  bankAccountType: string;
  
  @Column({ nullable: true })
  bankOperationCode: string;
  
  @Column({ nullable: true })
  holderDocument: string;
  
  @Column({ nullable: true })
  holderOpeningDate: Date;
  
  @Column({ nullable: true })
  holderName: string;
  
  @Column({ nullable: true })
  holderTradingName: string;
  
  @Column()
  isPersonAccount: number;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
  
  @Column()
  nationalDocument: string;
  
  @Column()
  recordEmployment: string;
  
  @Column()
  companyName: string;
  
  @Column()
  fantasyName: string;
  
  @Column()
  companyOpeningDate: Date;
  
  @Column()
  typeOfBusiness: string;
  
  @Column()
  paymentType: string;
  
  @Column()
  companyUf: string;
  
  @Column()
  companyCity: string;
  
  @Column()
  companyLegalNature: string;
  
  @Column()
  companyDocument: string;
  
  @Column()
  bankAccountAgencyDigit: string;
  
  @Column()
  verificationStatus: number;
  
  @Column()
  verificationId: string;
  
  @Column()
  verificatedAt: Date;
}


export { ProfileAdditionalInfoBank }