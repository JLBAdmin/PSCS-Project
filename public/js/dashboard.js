export const days = [
  "1", 
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "90",
  // "91",
  // "92",
  // "93",
  // "94",
  // "95",
  // "96",
  // "97",
  // "98",
  // "99",
  // "100"
]

export const Capacity = [
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000, 34000,
  34000
];


  // eslint-disable-next-line @typescript-eslint/no-shadow
  const backDay = 1;
   const newDate = new Date(Date.now()-backDay*24*60*60*1000);

   export const toDate = newDate.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // weekday: 'long',
  })


export const CapacityLable = ['ประสิทธิภาพ', 'แผนเข้าหีบ', 'เข้าหีบจริง'];

export  const cropYear = ['2565/66', '2566/67', '2567/68', '2568/69', '2569/70'];
export  const planLable = [
    'เป้าหมายหีบ',
    'ประเมินอ้อย',
    'เข้าหีบจริง',
    'ส่วนต่างอ้อย'
  ];

export const ComeTrue = [2300000, 2800000, 3200000, 3600000, 4000000, 0]

export const areaLable = [
    'เป้าหมายพื้นที่',
    'พื่นที่เสียหาย',
    'พื้นที่คงเหลือ',
    'ส่วนต่างพื้นที่'
  ];

