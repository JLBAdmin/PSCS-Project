import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

// @Index(["id"])
@Entity()
// eslint-disable-next-line import/prefer-default-export
export class Targets {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: false, comment: 'ปีการผลิต' })
  cropYear?: string;

  @Column({ nullable: true, comment: 'เขตส่งเสริม' })
  zone?: string;

  @Column({ nullable: true, comment: 'นักส่งเสริม' })
  subZone?: string;

  @Column({ nullable: true, comment: 'ชื่อ - สกุล' })
  surveyName?: string;

  @Column({ nullable: true, comment: 'เป้าหมายพื้นที่รวม' })
  targetAll?: number;

  @Column({ nullable: true, comment: 'เป้าหมายพื้นที่ใหม่' })
  targetNewArea!: number;

  @Column({ nullable: true, comment: 'เป้าหมายพื้นที่อ้อยตอ' })
  targetCaneStump?: number;

  @Column({ nullable: true, comment: 'เป้าหมายพื้นที่รื้อตอ' })
  targetDemolishStump?: number;

  @Column({ nullable: true, comment: 'เป้าหมายตัน' })
  targetCaneTon?: number;

  @Column({ nullable: true, comment: 'เป้าหมายหีบอ้อย' })
  sugarCaneCrushing?: number;

  @Column({ nullable: true, comment: 'ผู้รับผิดชอบ' })
  targetManager?: string;

  @Column({ nullable: true, comment: 'วันที่ 1' })
  targetDay1?: number;

  @Column({ nullable: true, comment: 'วันที่ 1' })
  ComeTrue1?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS1'
  })
  ccs1?: number;

  @Column({ nullable: true, comment: 'วันที่ 2' })
  targetDay2?: number;

  @Column({ nullable: true, comment: 'วันที่ 2' })
  ComeTrue2?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS2'
  })
  ccs2?: number;

  @Column({ nullable: true, comment: 'วันที่ 3' })
  targetDay3?: number;

  @Column({ nullable: true, comment: 'วันที่ 3' })
  ComeTrue3?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS3'
  })
  ccs3?: number;

  @Column({ nullable: true, comment: 'วันที่ 4' })
  targetDay4?: number;

  @Column({ nullable: true, comment: 'วันที่ 4' })
  ComeTrue4?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS4'
  })
  ccs4?: number;

  @Column({ nullable: true, comment: 'วันที่ 5' })
  targetDay5?: number;

  @Column({ nullable: true, comment: 'วันที่ 5' })
  ComeTrue5?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS5'
  })
  ccs5?: number;

  @Column({ nullable: true, comment: 'วันที่ 6' })
  targetDay6?: number;

  @Column({ nullable: true, comment: 'วันที่ 6' })
  ComeTrue6?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS6'
  })
  ccs6?: number;

  @Column({ nullable: true, comment: 'วันที่ 7' })
  targetDay7?: number;

  @Column({ nullable: true, comment: 'วันที่ 7' })
  ComeTrue7?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS7'
  })
  ccs7?: number;

  @Column({ nullable: true, comment: 'วันที่ 8' })
  targetDay8?: number;

  @Column({ nullable: true, comment: 'วันที่ 8' })
  ComeTrue8?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS8'
  })
  ccs8?: number;

  @Column({ nullable: true, comment: 'วันที่ 9' })
  targetDay9?: number;

  @Column({ nullable: true, comment: 'วันที่ 9' })
  ComeTrue9?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS9'
  })
  ccs9?: number;

  @Column({ nullable: true, comment: 'วันที่ 10' })
  targetDay10?: number;

  @Column({ nullable: true, comment: 'วันที่ 10' })
  ComeTrue10?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS10'
  })
  ccs10?: number;

  @Column({ nullable: true, comment: 'วันที่ 11' })
  targetDay11?: number;

  @Column({ nullable: true, comment: 'วันที่ 11' })
  ComeTrue11?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS11'
  })
  ccs11?: number;

  @Column({ nullable: true, comment: 'วันที่ 12' })
  targetDay12?: number;

  @Column({ nullable: true, comment: 'วันที่ 12' })
  ComeTrue12?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS12'
  })
  ccs12?: number;

  @Column({ nullable: true, comment: 'วันที่ 13' })
  targetDay13?: number;

  @Column({ nullable: true, comment: 'วันที่ 13' })
  ComeTrue13?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS13'
  })
  ccs13?: number;

  @Column({ nullable: true, comment: 'วันที่ 14' })
  targetDay14?: number;

  @Column({ nullable: true, comment: 'วันที่ 14' })
  ComeTrue14?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS14'
  })
  ccs14?: number;

  @Column({ nullable: true, comment: 'วันที่ 15' })
  targetDay15?: number;

  @Column({ nullable: true, comment: 'วันที่ 15' })
  ComeTrue15?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS15'
  })
  ccs15?: number;

  @Column({ nullable: true, comment: 'วันที่ 16' })
  targetDay16?: number;

  @Column({ nullable: true, comment: 'วันที่ 16' })
  ComeTrue16?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS16'
  })
  ccs16?: number;

  @Column({ nullable: true, comment: 'วันที่ 17' })
  targetDay17?: number;

  @Column({ nullable: true, comment: 'วันที่ 17' })
  ComeTrue17?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS17'
  })
  ccs17?: number;

  @Column({ nullable: true, comment: 'วันที่ 18' })
  targetDay18?: number;

  @Column({ nullable: true, comment: 'วันที่ 18' })
  ComeTrue18?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS18'
  })
  ccs18?: number;

  @Column({ nullable: true, comment: 'วันที่ 19' })
  targetDay19?: number;

  @Column({ nullable: true, comment: 'วันที่ 19' })
  ComeTrue19?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS19'
  })
  ccs19?: number;

  @Column({ nullable: true, comment: 'วันที่ 20' })
  targetDay20?: number;

  @Column({ nullable: true, comment: 'วันที่ 20' })
  ComeTrue20?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS20'
  })
  ccs20?: number;

  @Column({ nullable: true, comment: 'วันที่ 21' })
  targetDay21?: number;

  @Column({ nullable: true, comment: 'วันที่ 21' })
  ComeTrue21?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS21'
  })
  ccs21?: number;

  @Column({ nullable: true, comment: 'วันที่ 22' })
  targetDay22?: number;

  @Column({ nullable: true, comment: 'วันที่ 22' })
  ComeTrue22?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS22'
  })
  ccs22?: number;

  @Column({ nullable: true, comment: 'วันที่ 23' })
  targetDay23?: number;

  @Column({ nullable: true, comment: 'วันที่ 23' })
  ComeTrue23?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS23'
  })
  ccs23?: number;

  @Column({ nullable: true, comment: 'วันที่ 24' })
  targetDay24?: number;

  @Column({ nullable: true, comment: 'วันที่ 24' })
  ComeTrue24?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS24'
  })
  ccs24?: number;

  @Column({ nullable: true, comment: 'วันที่ 25' })
  targetDay25?: number;

  @Column({ nullable: true, comment: 'วันที่ 25' })
  ComeTrue25?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS25'
  })
  ccs25?: number;

  @Column({ nullable: true, comment: 'วันที่ 26' })
  targetDay26?: number;

  @Column({ nullable: true, comment: 'วันที่ 26' })
  ComeTrue26?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS26'
  })
  ccs26?: number;

  @Column({ nullable: true, comment: 'วันที่ 27' })
  targetDay27?: number;

  @Column({ nullable: true, comment: 'วันที่ 27' })
  ComeTrue27?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS27'
  })
  ccs27?: number;

  @Column({ nullable: true, comment: 'วันที่ 28' })
  targetDay28?: number;

  @Column({ nullable: true, comment: 'วันที่ 28' })
  ComeTrue28?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS28'
  })
  ccs28?: number;

  @Column({ nullable: true, comment: 'วันที่ 29' })
  targetDay29?: number;

  @Column({ nullable: true, comment: 'วันที่ 29' })
  ComeTrue29?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS29'
  })
  ccs29?: number;

  @Column({ nullable: true, comment: 'วันที่ 30' })
  targetDay30?: number;

  @Column({ nullable: true, comment: 'วันที่ 30' })
  ComeTrue30?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS30'
  })
  ccs30?: number;

  @Column({ nullable: true, comment: 'วันที่ 31' })
  targetDay31?: number;

  @Column({ nullable: true, comment: 'วันที่ 31' })
  ComeTrue31?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS31'
  })
  ccs31?: number;

  @Column({ nullable: true, comment: 'วันที่ 32' })
  targetDay32?: number;

  @Column({ nullable: true, comment: 'วันที่ 32' })
  ComeTrue32?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS32'
  })
  ccs32?: number;

  @Column({ nullable: true, comment: 'วันที่ 33' })
  targetDay33?: number;

  @Column({ nullable: true, comment: 'วันที่ 33' })
  ComeTrue33?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS33'
  })
  ccs33?: number;

  @Column({ nullable: true, comment: 'วันที่ 34' })
  targetDay34?: number;

  @Column({ nullable: true, comment: 'วันที่ 34' })
  ComeTrue34?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS34'
  })
  ccs34?: number;

  @Column({ nullable: true, comment: 'วันที่ 35' })
  targetDay35?: number;

  @Column({ nullable: true, comment: 'วันที่ 35' })
  ComeTrue35?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS35'
  })
  ccs35?: number;

  @Column({ nullable: true, comment: 'วันที่ 36' })
  targetDay36?: number;

  @Column({ nullable: true, comment: 'วันที่ 36' })
  ComeTrue36?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS36'
  })
  ccs36?: number;

  @Column({ nullable: true, comment: 'วันที่ 37' })
  targetDay37?: number;

  @Column({ nullable: true, comment: 'วันที่ 37' })
  ComeTrue37?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS37'
  })
  ccs37?: number;

  @Column({ nullable: true, comment: 'วันที่ 38' })
  targetDay38?: number;

  @Column({ nullable: true, comment: 'วันที่ 38' })
  ComeTrue38?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS38'
  })
  ccs38?: number;

  @Column({ nullable: true, comment: 'วันที่ 39' })
  targetDay39?: number;

  @Column({ nullable: true, comment: 'วันที่ 39' })
  ComeTrue39?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS39'
  })
  ccs39?: number;

  @Column({ nullable: true, comment: 'วันที่ 40' })
  targetDay40?: number;

  @Column({ nullable: true, comment: 'วันที่ 40' })
  ComeTrue40?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS40'
  })
  ccs40?: number;

  @Column({ nullable: true, comment: 'วันที่ 41' })
  targetDay41?: number;

  @Column({ nullable: true, comment: 'วันที่ 41' })
  ComeTrue41?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS41'
  })
  ccs41?: number;

  @Column({ nullable: true, comment: 'วันที่ 42' })
  targetDay42?: number;

  @Column({ nullable: true, comment: 'วันที่ 42' })
  ComeTrue42?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS42'
  })
  ccs42?: number;

  @Column({ nullable: true, comment: 'วันที่ 43' })
  targetDay43?: number;

  @Column({ nullable: true, comment: 'วันที่ 43' })
  ComeTrue43?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS43'
  })
  ccs43?: number;

  @Column({ nullable: true, comment: 'วันที่ 44' })
  targetDay44?: number;

  @Column({ nullable: true, comment: 'วันที่ 44' })
  ComeTrue44?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS44'
  })
  ccs44?: number;

  @Column({ nullable: true, comment: 'วันที่ 45' })
  targetDay45?: number;

  @Column({ nullable: true, comment: 'วันที่ 45' })
  ComeTrue45?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS45'
  })
  ccs45?: number;

  @Column({ nullable: true, comment: 'วันที่ 46' })
  targetDay46?: number;

  @Column({ nullable: true, comment: 'วันที่ 46' })
  ComeTrue46?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS46'
  })
  ccs46?: number;

  @Column({ nullable: true, comment: 'วันที่ 47' })
  targetDay47?: number;

  @Column({ nullable: true, comment: 'วันที่ 47' })
  ComeTrue47?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS47'
  })
  ccs47?: number;

  @Column({ nullable: true, comment: 'วันที่ 48' })
  targetDay48?: number;

  @Column({ nullable: true, comment: 'วันที่ 48' })
  ComeTrue48?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS48'
  })
  ccs48?: number;

  @Column({ nullable: true, comment: 'วันที่ 49' })
  targetDay49?: number;

  @Column({ nullable: true, comment: 'วันที่ 49' })
  ComeTrue49?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS49'
  })
  ccs49?: number;

  @Column({ nullable: true, comment: 'วันที่ 50' })
  targetDay50?: number;

  @Column({ nullable: true, comment: 'วันที่ 50' })
  ComeTrue50?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS50'
  })
  ccs50?: number;

  @Column({ nullable: true, comment: 'วันที่ 51' })
  targetDay51?: number;

  @Column({ nullable: true, comment: 'วันที่ 51' })
  ComeTrue51?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS51'
  })
  ccs51?: number;

  @Column({ nullable: true, comment: 'วันที่ 52' })
  targetDay52?: number;

  @Column({ nullable: true, comment: 'วันที่ 52' })
  ComeTrue52?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS52'
  })
  ccs52?: number;

  @Column({ nullable: true, comment: 'วันที่ 53' })
  targetDay53?: number;

  @Column({ nullable: true, comment: 'วันที่ 53' })
  ComeTrue53?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS53'
  })
  ccs53?: number;

  @Column({ nullable: true, comment: 'วันที่ 54' })
  targetDay54?: number;

  @Column({ nullable: true, comment: 'วันที่ 54' })
  ComeTrue54?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS54'
  })
  ccs54?: number;

  @Column({ nullable: true, comment: 'วันที่ 55' })
  targetDay55?: number;

  @Column({ nullable: true, comment: 'วันที่ 55' })
  ComeTrue55?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS55'
  })
  ccs55?: number;

  @Column({ nullable: true, comment: 'วันที่ 56' })
  targetDay56?: number;

  @Column({ nullable: true, comment: 'วันที่ 56' })
  ComeTrue56?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS56'
  })
  ccs56?: number;

  @Column({ nullable: true, comment: 'วันที่ 57' })
  targetDay57?: number;

  @Column({ nullable: true, comment: 'วันที่ 57' })
  ComeTrue57?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS57'
  })
  ccs57?: number;

  @Column({ nullable: true, comment: 'วันที่ 58' })
  targetDay58?: number;

  @Column({ nullable: true, comment: 'วันที่ 58' })
  ComeTrue58?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS58'
  })
  ccs58?: number;

  @Column({ nullable: true, comment: 'วันที่ 59' })
  targetDay59?: number;

  @Column({ nullable: true, comment: 'วันที่ 59' })
  ComeTrue59?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS59'
  })
  ccs59?: number;

  @Column({ nullable: true, comment: 'วันที่ 60' })
  targetDay60?: number;

  @Column({ nullable: true, comment: 'วันที่ 60' })
  ComeTrue60?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS60'
  })
  ccs60?: number;

  @Column({ nullable: true, comment: 'วันที่ 61' })
  targetDay61?: number;

  @Column({ nullable: true, comment: 'วันที่ 61' })
  ComeTrue61?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS61'
  })
  ccs61?: number;

  @Column({ nullable: true, comment: 'วันที่ 62' })
  targetDay62?: number;

  @Column({ nullable: true, comment: 'วันที่ 62' })
  ComeTrue62?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS62'
  })
  ccs62?: number;

  @Column({ nullable: true, comment: 'วันที่ 63' })
  targetDay63?: number;

  @Column({ nullable: true, comment: 'วันที่ 63' })
  ComeTrue63?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS63'
  })
  ccs63?: number;

  @Column({ nullable: true, comment: 'วันที่ 64' })
  targetDay64?: number;

  @Column({ nullable: true, comment: 'วันที่ 64' })
  ComeTrue64?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS64'
  })
  ccs64?: number;

  @Column({ nullable: true, comment: 'วันที่ 65' })
  targetDay65?: number;

  @Column({ nullable: true, comment: 'วันที่ 65' })
  ComeTrue65?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS65'
  })
  ccs65?: number;

  @Column({ nullable: true, comment: 'วันที่ 66' })
  targetDay66?: number;

  @Column({ nullable: true, comment: 'วันที่ 66' })
  ComeTrue66?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS66'
  })
  ccs66?: number;

  @Column({ nullable: true, comment: 'วันที่ 67' })
  targetDay67?: number;

  @Column({ nullable: true, comment: 'วันที่ 67' })
  ComeTrue67?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS67'
  })
  ccs67?: number;

  @Column({ nullable: true, comment: 'วันที่ 68' })
  targetDay68?: number;

  @Column({ nullable: true, comment: 'วันที่ 68' })
  ComeTrue68?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS68'
  })
  ccs68?: number;

  @Column({ nullable: true, comment: 'วันที่ 69' })
  targetDay69?: number;

  @Column({ nullable: true, comment: 'วันที่ 69' })
  ComeTrue69?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS69'
  })
  ccs69?: number;

  @Column({ nullable: true, comment: 'วันที่ 70' })
  targetDay70?: number;

  @Column({ nullable: true, comment: 'วันที่ 70' })
  ComeTrue70?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS70'
  })
  ccs70?: number;

  @Column({ nullable: true, comment: 'วันที่ 71' })
  targetDay71?: number;

  @Column({ nullable: true, comment: 'วันที่ 71' })
  ComeTrue71?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS71'
  })
  ccs71?: number;

  @Column({ nullable: true, comment: 'วันที่ 72' })
  targetDay72?: number;

  @Column({ nullable: true, comment: 'วันที่ 72' })
  ComeTrue72?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS72'
  })
  ccs72?: number;

  @Column({ nullable: true, comment: 'วันที่ 73' })
  targetDay73?: number;

  @Column({ nullable: true, comment: 'วันที่ 73' })
  ComeTrue73?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS73'
  })
  ccs73?: number;

  @Column({ nullable: true, comment: 'วันที่ 74' })
  targetDay74?: number;

  @Column({ nullable: true, comment: 'วันที่ 74' })
  ComeTrue74?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS74'
  })
  ccs74?: number;

  @Column({ nullable: true, comment: 'วันที่ 75' })
  targetDay75?: number;

  @Column({ nullable: true, comment: 'วันที่ 75' })
  ComeTrue75?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS75'
  })
  ccs75?: number;

  @Column({ nullable: true, comment: 'วันที่ 76' })
  targetDay76?: number;

  @Column({ nullable: true, comment: 'วันที่ 76' })
  ComeTrue76?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS76'
  })
  ccs76?: number;

  @Column({ nullable: true, comment: 'วันที่ 77' })
  targetDay77?: number;

  @Column({ nullable: true, comment: 'วันที่ 77' })
  ComeTrue77?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS77'
  })
  ccs77?: number;

  @Column({ nullable: true, comment: 'วันที่ 78' })
  targetDay78?: number;

  @Column({ nullable: true, comment: 'วันที่ 78' })
  ComeTrue78?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS78'
  })
  ccs78?: number;

  @Column({ nullable: true, comment: 'วันที่ 79' })
  targetDay79?: number;

  @Column({ nullable: true, comment: 'วันที่ 79' })
  ComeTrue79?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS79'
  })
  ccs79?: number;

  @Column({ nullable: true, comment: 'วันที่ 80' })
  targetDay80?: number;

  @Column({ nullable: true, comment: 'วันที่ 80' })
  ComeTrue80?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS80'
  })
  ccs80?: number;

  @Column({ nullable: true, comment: 'วันที่ 81' })
  targetDay81?: number;

  @Column({ nullable: true, comment: 'วันที่ 81' })
  ComeTrue81?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS81'
  })
  ccs81?: number;

  @Column({ nullable: true, comment: 'วันที่ 82' })
  targetDay82?: number;

  @Column({ nullable: true, comment: 'วันที่ 82' })
  ComeTrue82?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS82'
  })
  ccs82?: number;

  @Column({ nullable: true, comment: 'วันที่ 83' })
  targetDay83?: number;

  @Column({ nullable: true, comment: 'วันที่ 83' })
  ComeTrue83?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS83'
  })
  ccs83?: number;

  @Column({ nullable: true, comment: 'วันที่ 84' })
  targetDay84?: number;

  @Column({ nullable: true, comment: 'วันที่ 84' })
  ComeTrue84?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS84'
  })
  ccs84?: number;

  @Column({ nullable: true, comment: 'วันที่ 85' })
  targetDay85?: number;

  @Column({ nullable: true, comment: 'วันที่ 85' })
  ComeTrue85?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS85'
  })
  ccs85?: number;

  @Column({ nullable: true, comment: 'วันที่ 86' })
  targetDay86?: number;

  @Column({ nullable: true, comment: 'วันที่ 86' })
  ComeTrue86?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS86'
  })
  ccs86?: number;

  @Column({ nullable: true, comment: 'วันที่ 87' })
  targetDay87?: number;

  @Column({ nullable: true, comment: 'วันที่ 87' })
  ComeTrue87?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS87'
  })
  ccs87?: number;

  @Column({ nullable: true, comment: 'วันที่ 88' })
  targetDay88?: number;

  @Column({ nullable: true, comment: 'วันที่ 88' })
  ComeTrue88?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS88'
  })
  ccs88?: number;

  @Column({ nullable: true, comment: 'วันที่ 89' })
  targetDay89?: number;

  @Column({ nullable: true, comment: 'วันที่ 89' })
  ComeTrue89?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS89'
  })
  ccs89?: number;

  @Column({ nullable: true, comment: 'วันที่ 90' })
  targetDay90?: number;

  @Column({ nullable: true, comment: 'วันที่ 90' })
  ComeTrue90?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS90'
  })
  ccs90?: number;

  @Column({ nullable: true, comment: 'วันที่ 91' })
  targetDay91?: number;

  @Column({ nullable: true, comment: 'วันที่ 91' })
  ComeTrue91?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS91'
  })
  ccs91?: number;

  @Column({ nullable: true, comment: 'วันที่ 92' })
  targetDay92?: number;

  @Column({ nullable: true, comment: 'วันที่ 92' })
  ComeTrue92?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS92'
  })
  ccs92?: number;

  @Column({ nullable: true, comment: 'วันที่ 93' })
  targetDay93?: number;

  @Column({ nullable: true, comment: 'วันที่ 93' })
  ComeTrue93?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS93'
  })
  ccs93?: number;

  @Column({ nullable: true, comment: 'วันที่ 94' })
  targetDay94?: number;

  @Column({ nullable: true, comment: 'วันที่ 94' })
  ComeTrue94?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS94'
  })
  ccs94?: number;

  @Column({ nullable: true, comment: 'วันที่ 95' })
  targetDay95?: number;

  @Column({ nullable: true, comment: 'วันที่ 95' })
  ComeTrue95?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS95'
  })
  ccs95?: number;

  @Column({ nullable: true, comment: 'วันที่ 96' })
  targetDay96?: number;

  @Column({ nullable: true, comment: 'วันที่ 96' })
  ComeTrue96?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS96'
  })
  ccs96?: number;

  @Column({ nullable: true, comment: 'วันที่ 97' })
  targetDay97?: number;

  @Column({ nullable: true, comment: 'วันที่ 97' })
  ComeTrue97?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS97'
  })
  ccs97?: number;

  @Column({ nullable: true, comment: 'วันที่ 98' })
  targetDay98?: number;

  @Column({ nullable: true, comment: 'วันที่ 98' })
  ComeTrue98?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS98'
  })
  ccs98?: number;

  @Column({ nullable: true, comment: 'วันที่ 99' })
  targetDay99?: number;

  @Column({ nullable: true, comment: 'วันที่ 99' })
  ComeTrue99?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS99'
  })
  ccs99?: number;

  @Column({ nullable: true, comment: 'วันที่ 100' })
  targetDay100?: number;

  @Column({ nullable: true, comment: 'วันที่ 100' })
  ComeTrue100?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS100'
  })
  ccs100?: number;

  @Column({ nullable: true, comment: 'วันที่ 101' })
  targetDay101?: number;

  @Column({ nullable: true, comment: 'วันที่ 101' })
  ComeTrue101?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS101'
  })
  ccs101?: number;

  @Column({ nullable: true, comment: 'วันที่ 102' })
  targetDay102?: number;

  @Column({ nullable: true, comment: 'วันที่ 102' })
  ComeTrue102?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS102'
  })
  ccs102?: number;

  @Column({ nullable: true, comment: 'วันที่ 103' })
  targetDay103?: number;

  @Column({ nullable: true, comment: 'วันที่ 103' })
  ComeTrue103?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS103'
  })
  ccs103?: number;

  @Column({ nullable: true, comment: 'วันที่ 104' })
  targetDay104?: number;

  @Column({ nullable: true, comment: 'วันที่ 104' })
  ComeTrue104?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS104'
  })
  ccs104?: number;

  @Column({ nullable: true, comment: 'วันที่ 105' })
  targetDay105?: number;

  @Column({ nullable: true, comment: 'วันที่ 105' })
  ComeTrue105?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS105'
  })
  ccs105?: number;

  @Column({ nullable: true, comment: 'วันที่ 106' })
  targetDay106?: number;

  @Column({ nullable: true, comment: 'วันที่ 106' })
  ComeTrue106?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS106'
  })
  ccs106?: number;

  @Column({ nullable: true, comment: 'วันที่ 107' })
  targetDay107?: number;

  @Column({ nullable: true, comment: 'วันที่ 107' })
  ComeTrue107?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS107'
  })
  ccs107?: number;

  @Column({ nullable: true, comment: 'วันที่ 108' })
  targetDay108?: number;

  @Column({ nullable: true, comment: 'วันที่ 108' })
  ComeTrue108?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS108'
  })
  ccs108?: number;

  @Column({ nullable: true, comment: 'วันที่ 109' })
  targetDay109?: number;

  @Column({ nullable: true, comment: 'วันที่ 109' })
  ComeTrue109?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS109'
  })
  ccs109?: number;

  @Column({ nullable: true, comment: 'วันที่ 110' })
  targetDay110?: number;

  @Column({ nullable: true, comment: 'วันที่ 110' })
  ComeTrue110?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS110'
  })
  ccs110?: number;

  @Column({ nullable: true, comment: 'วันที่ 111' })
  targetDay111?: number;

  @Column({ nullable: true, comment: 'วันที่ 111' })
  ComeTrue111?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS111'
  })
  ccs111?: number;

  @Column({ nullable: true, comment: 'วันที่ 112' })
  targetDay112?: number;

  @Column({ nullable: true, comment: 'วันที่ 112' })
  ComeTrue112?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS112'
  })
  ccs112?: number;

  @Column({ nullable: true, comment: 'วันที่ 113' })
  targetDay113?: number;

  @Column({ nullable: true, comment: 'วันที่ 113' })
  ComeTrue113?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS113'
  })
  ccs113?: number;

  @Column({ nullable: true, comment: 'วันที่ 114' })
  targetDay114?: number;

  @Column({ nullable: true, comment: 'วันที่ 114' })
  ComeTrue114?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS114'
  })
  ccs114?: number;

  @Column({ nullable: true, comment: 'วันที่ 115' })
  targetDay115?: number;

  @Column({ nullable: true, comment: 'วันที่ 115' })
  ComeTrue115?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS115'
  })
  ccs115?: number;

  @Column({ nullable: true, comment: 'วันที่ 116' })
  targetDay116?: number;

  @Column({ nullable: true, comment: 'วันที่ 116' })
  ComeTrue116?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS116'
  })
  ccs116?: number;

  @Column({ nullable: true, comment: 'วันที่ 117' })
  targetDay117?: number;

  @Column({ nullable: true, comment: 'วันที่ 117' })
  ComeTrue117?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS117'
  })
  ccs117?: number;

  @Column({ nullable: true, comment: 'วันที่ 118' })
  targetDay118?: number;

  @Column({ nullable: true, comment: 'วันที่ 118' })
  ComeTrue118?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS118'
  })
  ccs118?: number;

  @Column({ nullable: true, comment: 'วันที่ 119' })
  targetDay119?: number;

  @Column({ nullable: true, comment: 'วันที่ 119' })
  ComeTrue119?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS119'
  })
  ccs119?: number;

  @Column({ nullable: true, comment: 'วันที่ 120' })
  targetDay120?: number;

  @Column({ nullable: true, comment: 'วันที่ 120' })
  ComeTrue120?: number;

  @Column({
    type: 'numeric',
    precision: 5,
    scale: 2,
    nullable: true,
    comment: 'CCS120'
  })
  ccs120?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 1' })
  ComeBurn1?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 2' })
  ComeBurn2?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 3' })
  ComeBurn3?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 4' })
  ComeBurn4?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 5' })
  ComeBurn5?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 6' })
  ComeBurn6?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 7' })
  ComeBurn7?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 8' })
  ComeBurn8?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 9' })
  ComeBurn9?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 10' })
  ComeBurn10?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 11' })
  ComeBurn11?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 12' })
  ComeBurn12?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 13' })
  ComeBurn13?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 14' })
  ComeBurn14?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 15' })
  ComeBurn15?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 16' })
  ComeBurn16?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 17' })
  ComeBurn17?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 18' })
  ComeBurn18?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 19' })
  ComeBurn19?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 20' })
  ComeBurn20?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 21' })
  ComeBurn21?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 22' })
  ComeBurn22?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 23' })
  ComeBurn23?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 24' })
  ComeBurn24?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 25' })
  ComeBurn25?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 26' })
  ComeBurn26?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 27' })
  ComeBurn27?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 28' })
  ComeBurn28?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 29' })
  ComeBurn29?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 30' })
  ComeBurn30?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 31' })
  ComeBurn31?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 32' })
  ComeBurn32?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 33' })
  ComeBurn33?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 34' })
  ComeBurn34?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 35' })
  ComeBurn35?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 36' })
  ComeBurn36?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 37' })
  ComeBurn37?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 38' })
  ComeBurn38?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 39' })
  ComeBurn39?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 40' })
  ComeBurn40?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 41' })
  ComeBurn41?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 42' })
  ComeBurn42?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 43' })
  ComeBurn43?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 44' })
  ComeBurn44?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 45' })
  ComeBurn45?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 46' })
  ComeBurn46?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 47' })
  ComeBurn47?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 48' })
  ComeBurn48?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 49' })
  ComeBurn49?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 50' })
  ComeBurn50?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 51' })
  ComeBurn51?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 52' })
  ComeBurn52?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 53' })
  ComeBurn53?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 54' })
  ComeBurn54?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 55' })
  ComeBurn55?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 56' })
  ComeBurn56?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 57' })
  ComeBurn57?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 58' })
  ComeBurn58?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 59' })
  ComeBurn59?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 60' })
  ComeBurn60?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 61' })
  ComeBurn61?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 62' })
  ComeBurn62?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 63' })
  ComeBurn63?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 64' })
  ComeBurn64?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 65' })
  ComeBurn65?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 66' })
  ComeBurn66?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 67' })
  ComeBurn67?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 68' })
  ComeBurn68?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 69' })
  ComeBurn69?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 70' })
  ComeBurn70?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 71' })
  ComeBurn71?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 72' })
  ComeBurn72?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 73' })
  ComeBurn73?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 74' })
  ComeBurn74?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 75' })
  ComeBurn75?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 76' })
  ComeBurn76?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 77' })
  ComeBurn77?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 78' })
  ComeBurn78?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 79' })
  ComeBurn79?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 80' })
  ComeBurn80?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 81' })
  ComeBurn81?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 82' })
  ComeBurn82?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 83' })
  ComeBurn83?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 84' })
  ComeBurn84?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 85' })
  ComeBurn85?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 86' })
  ComeBurn86?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 87' })
  ComeBurn87?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 88' })
  ComeBurn88?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 89' })
  ComeBurn89?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 90' })
  ComeBurn90?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 91' })
  ComeBurn91?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 92' })
  ComeBurn92?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 93' })
  ComeBurn93?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 94' })
  ComeBurn94?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 95' })
  ComeBurn95?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 96' })
  ComeBurn96?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 97' })
  ComeBurn97?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 98' })
  ComeBurn98?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 99' })
  ComeBurn99?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 100' })
  ComeBurn100?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 101' })
  ComeBurn101?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 102' })
  ComeBurn102?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 103' })
  ComeBurn103?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 104' })
  ComeBurn104?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 105' })
  ComeBurn105?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 106' })
  ComeBurn106?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 107' })
  ComeBurn107?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 108' })
  ComeBurn108?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 109' })
  ComeBurn109?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 110' })
  ComeBurn110?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 111' })
  ComeBurn111?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 112' })
  ComeBurn112?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 113' })
  ComeBurn113?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 114' })
  ComeBurn114?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 115' })
  ComeBurn115?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 116' })
  ComeBurn116?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 117' })
  ComeBurn117?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 118' })
  ComeBurn118?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 119' })
  ComeBurn119?: number;

  @Column({ nullable: true, comment: 'อ้อยไฟใหม้วันที่ 120' })
  ComeBurn120?: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
