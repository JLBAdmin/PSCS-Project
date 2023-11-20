import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity('PlanAudits')
// eslint-disable-next-line import/prefer-default-export
export class PlanAudits {
  @PrimaryGeneratedColumn('increment')
  Id!: number;

  @Column()
  PlanId?: number;

  @Column()
  CaneImage!: string;

  @Column()
  CaneImage2!: string;

  @Column()
  CaneImage3!: string;
}
