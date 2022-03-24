import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("profileCategories")
class ProfileCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  description_en: string;

  @Column()
  description_es: string;

  @Column()
  parentId: number;
}

export { ProfileCategory }