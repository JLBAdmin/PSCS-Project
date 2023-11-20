import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Index(["id"])
@Entity()
// eslint-disable-next-line import/prefer-default-export
export class PscsOrganic {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  quotaId!: number;

  @Column()
  cropYear?: string;

  @Column({ nullable: true })
  factory_fresh_cane?: number;

  @Column({ nullable: true })
  factory_fire_cane?: number;

  @Column({ nullable: true })
  area_demolish_cane?: number;

  @Column({ nullable: true })
  area_new_cane?: number;

  @Column({ nullable: true })
  area_stump_cane?: number;

  @Column({ nullable: true })
  fertilizer_recipes_new_cane_46_0_0?: number;

  @Column({ nullable: true })
  fertilizer_recipes_new_cane_16_20_0?: number;

  @Column({ nullable: true })
  fertilizer_recipes_new_cane_18_46_0?: number;

  @Column({ nullable: true })
  fertilizer_recipes_new_cane_20_8_20?: number;

  @Column({ nullable: true })
  fertilizer_recipes_new_cane_16_8_8?: number;

  @Column({ nullable: true })
  fertilizer_recipes_new_cane_20_10_10?: number;

  @Column({ nullable: true })
  fertilizer_recipes_new_cane_21_7_18?: number;

  @Column({ nullable: true })
  fertilizer_recipes_stump_cane_46_0_0?: number;

  @Column({ nullable: true })
  fertilizer_recipes_stump_cane_16_20_0?: number;

  @Column({ nullable: true })
  fertilizer_recipes_stump_cane_18_46_0?: number;

  @Column({ nullable: true })
  fertilizer_recipes_stump_cane_20_8_20?: number;

  @Column({ nullable: true })
  fertilizer_recipes_stump_cane_16_8_8?: number;

  @Column({ nullable: true })
  fertilizer_recipes_stump_cane_20_10_10?: number;

  @Column({ nullable: true })
  fertilizer_recipes_stump_cane_21_7_18?: number;

  // @Column({ nullable: true })
  // kg_per_area_new_cane_46_0_0?: number;

  // @Column({ nullable: true })
  // kg_per_area_new_cane_16_20_0?: number;

  // @Column({ nullable: true })
  // kg_per_area_new_cane_18_46_0?: number;

  // @Column({ nullable: true })
  // kg_per_area_new_cane_20_8_20?: number;

  // @Column({ nullable: true })
  // kg_per_area_new_cane_16_8_8?: number;

  // @Column({ nullable: true })
  // kg_per_area_new_cane_20_10_10?: number;

  // @Column({ nullable: true })
  // kg_per_area_new_cane_21_7_18?: number;

  // @Column({ nullable: true })
  // kg_per_area_stump_cane_46_0_0?: number;

  // @Column({ nullable: true })
  // kg_per_area_stump_cane_16_20_0?: number;

  // @Column({ nullable: true })
  // kg_per_area_stump_cane_18_46_0?: number;

  // @Column({ nullable: true })
  // kg_per_area_stump_cane_20_8_20?: number;

  // @Column({ nullable: true })
  // kg_per_area_stump_cane_16_8_8?: number;

  // @Column({ nullable: true })
  // kg_per_area_stump_cane_20_10_10?: number;

  // @Column({ nullable: true })
  // kg_per_area_stump_cane_21_7_18?: number;

  // @Column({ nullable: true })
  // nutrient_N?: number;

  // @Column({ nullable: true })
  // nutrient_P?: number;

  // @Column({ nullable: true })
  // nutrient_K?: number;

  @Column({ nullable: true })
  plow_marks_3?: number;

  @Column({ nullable: true })
  plow_marks_4?: number;

  @Column({ nullable: true })
  plow_marks_7?: number;

  @Column({ nullable: true })
  plow_marks_ripper?: number;

  @Column({ nullable: true })
  plow_marks_22?: number;

  @Column({ nullable: true })
  plow_marks_rotary?: number;

  @Column({ nullable: true })
  plow_marks_mini_comby?: number;

  @Column({ nullable: true })
  planting_machine?: number;

  @Column({ nullable: true })
  oil_plow_marks_3?: number;

  @Column({ nullable: true })
  oil_plow_marks_4?: number;

  @Column({ nullable: true })
  oil_plow_marks_7?: number;

  @Column({ nullable: true })
  oil_plow_marks_ripper?: number;

  @Column({ nullable: true })
  oil_plow_marks_22?: number;

  @Column({ nullable: true })
  oil_plow_marks_rotary?: number;

  @Column({ nullable: true })
  oil_plow_marks_mini_comby?: number;

  @Column({ nullable: true })
  oil_planting_machine?: number;
}
