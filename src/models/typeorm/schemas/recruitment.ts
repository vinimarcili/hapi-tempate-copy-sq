import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("recruitments")
class Recruitment {
  @ObjectIdColumn()
  _id: ObjectID;

  @ObjectIdColumn()
  idCampaign: ObjectID;

  @Column()
  fullname: string;

  @Column()
  inputMode: string;

  @Column({ default: false })
  opApproved: boolean = false;

  @Column()
  picture: string;

  @Column()
  socialNetwork: string;

  @Column()
  squidId: string;

  @Column()
  status: string;

  @Column()
  username: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Recruitment };