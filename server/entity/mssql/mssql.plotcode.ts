import { ViewColumn, ViewEntity } from 'typeorm';

// @Index(["id"])
@ViewEntity('BudgetView')
// eslint-disable-next-line import/prefer-default-export, @typescript-eslint/naming-convention
export class BudgetView {
  @ViewColumn()
  Id!: number;

  @ViewColumn()
  Code?: number;

  @ViewColumn()
  GisCode?: string;

  @ViewColumn()
  Name?: string;

  @ViewColumn()
  บริการปลูกไถบำรุงตอ?: string;

  @ViewColumn()
  สถานะรับเงิน?: string;

  @ViewColumn()
  พื้นที่ไร่จดแจ้ง?: number;

  @ViewColumn()
  พื้นที่ไร่GIS?: number;

  @ViewColumn()
  เอกสารสิทธิ์!: string;

  @ViewColumn()
  ประเภทพื้นที่!: string;

  @ViewColumn()
  ชนิดดิน?: string;

  @ViewColumn()
  ความยาวเฉลี่ยร่องเฉลี่ย?: number;

  @ViewColumn()
  ประเภทอ้อย?: string;

  @ViewColumn()
  วันปลูกตัด?: string;

  @ViewColumn()
  พันธุ์อ้อย?: string;

  @ViewColumn()
  ระยะร่อง?: string;

  @ViewColumn()
  คาดการณ์ตันไร่!: number;

  @ViewColumn()
  ประสิทธิภาพแหล่งน้ำ?: string;

  @ViewColumn()
  บ่อบาดาล?: string;

  @ViewColumn()
  สระเก็บน้ำ?: string;

  @ViewColumn()
  ชลประทานรัฐ?: string;

  @ViewColumn()
  ลำห้วยธรรมชาติ?: string;

  @ViewColumn()
  ปีการผลิต?: number;

  @ViewColumn()
  โควตา?: number;

  @ViewColumn()
  ชื่อสกุล?: string;

  @ViewColumn()
  ZoneList?: string;

  @ViewColumn()
  โควต้าใช้งาน?: string;

  @ViewColumn()
  เขต?: string;

  @ViewColumn()
  สายนักสำรวจ?: number;

  @ViewColumn()
  ชื่อนักสำรวจ?: string;

  @ViewColumn()
  สถานะแปลง?: string;

  @ViewColumn()
  หมายเหตุ?: string;

  @ViewColumn()
  สัญญาเลขที่!: number;

  @ViewColumn()
  CenterPoint?: string;

  @ViewColumn()
  ที่อยู่!: string;

  @ViewColumn()
  Bonsucro?: string;

  @ViewColumn()
  PolygonPoint?: string;

  @ViewColumn()
  SubQuota?: number;
}
