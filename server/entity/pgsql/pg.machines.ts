import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity()
// eslint-disable-next-line import/prefer-default-export
export class FarmerMachinery {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: true })
  quotaId!: number;

  @Column({ nullable: true })
  cropYear?: string;

  @Column({ nullable: true })
  mini_tractor?: number;

  @Column({ nullable: true })
  mini_tractor1_under_90?: number;

  @Column({ nullable: true })
  mini_tractor1_under_120?: number;

  @Column({ nullable: true })
  mini_tractor1_over_120?: number;

  @Column({ nullable: true })
  mini_tractor2_under_90?: number;

  @Column({ nullable: true })
  mini_tractor2_under_120?: number;

  @Column({ nullable: true })
  mini_tractor2_over_120?: number;

  @Column({ nullable: true })
  pioneer_plow_3?: number;

  @Column({ nullable: true })
  pioneer_plow_4?: number;

  @Column({ nullable: true })
  land_plane?: number;

  @Column({ nullable: true })
  ripper_3?: number;

  @Column({ nullable: true })
  ripper_5?: number;

  @Column({ nullable: true })
  ripper_7?: number;

  @Column({ nullable: true })
  plow_7?: number;

  @Column({ nullable: true })
  plow_10?: number;

  @Column({ nullable: true })
  plow_18?: number;

  @Column({ nullable: true })
  plow_20?: number;

  @Column({ nullable: true })
  plow_24?: number;

  @Column({ nullable: true })
  mini_combo?: number;

  @Column({ nullable: true })
  haro_power?: number;

  @Column({ nullable: true })
  rotary?: number;

  @Column({ nullable: true })
  planting_tools_1?: number;

  @Column({ nullable: true })
  planting_tools_2?: number;

  @Column({ nullable: true })
  planting_tools_billet?: number;

  @Column({ nullable: true })
  mini_boom_spray?: number;

  @Column({ nullable: true })
  big_boom_spray?: number;

  @Column({ nullable: true })
  plow_mix?: number;

  @Column({ nullable: true })
  cutaway?: number;

  @Column({ nullable: true })
  spring_rake?: number;

  @Column({ nullable: true })
  small_plate?: number;

  @Column({ nullable: true })
  small_rotary_hoe?: number;

  @Column({ nullable: true })
  big_rotary_hoe?: number;

  @Column({ nullable: true })
  middle_groove_fertilizer?: number;

  @Column({ nullable: true })
  wheelbarrow?: number;

  @Column({ nullable: true })
  wheels_6?: number;

  @Column({ nullable: true })
  wheeler_10_Single?: number;

  @Column({ nullable: true })
  wheeler_10_trailer?: number;

  @Column({ nullable: true })
  carding_machine?: number;

  @Column({ nullable: true })
  cutting_machine_layingPiles?: number;

  @Column({ nullable: true })
  fork_over_tractor?: number;

  @Column({ nullable: true })
  fork_over_wheeler_3?: number;

  @Column({ nullable: true })
  cutter_under_300?: number;

  @Column({ nullable: true })
  cutter_over_300?: number;
}
