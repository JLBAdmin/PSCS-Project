import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity('PlanSurveyImages')
// eslint-disable-next-line import/prefer-default-export
export class PlanSurveyImages {
  @PrimaryGeneratedColumn('increment')
  Id!: number;

  @Column()
  PlanId!: number;

  @Column()
  GrooveUrl!: string;

  @Column()
  OverviewUrl!: string;
}
