import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("categories")
class Category {
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

export { Category };
