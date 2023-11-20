// eslint-disable-next-line prettier/prettier
declare let $: any;

export const initDateEdit = (elem: any) => {
  const d = new Date();
  d.setDate(d.getDate());
  const toDay = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear() + 543}`;
  $(elem).datepicker({
    dateFormat: 'dd/mm/yy',
    autoSize: true,
    changeYear: true,
    changeMonth: true,
    showWeek: true,
    // isBuddhist: true,
    minDate: new Date(),
    defaultDate: toDay,
    dayNames: [
      'อาทิตย์',
      'จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์'
    ],
    // yearRange: "-1:+1",
    dayNamesMin: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
    monthNames: [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม'
    ],
    monthNamesShort: [
      'ม.ค.',
      'ก.พ.',
      'มี.ค.',
      'เม.ย.',
      'พ.ค.',
      'มิ.ย.',
      'ก.ค.',
      'ส.ค.',
      'ก.ย.',
      'ต.ค.',
      'พ.ย.',
      'ธ.ค.'
    ],
    beforeShow() {
      $('.ui-datepicker').css('font-size', 12);
    }
    // onSelect: function (dateText: any, inst: any) { $grid[0].triggerToolbar(); }
  });
};
export const initDateSearch = (elem: any) => {
  setTimeout(() => {
    initDateEdit(elem);
  }, 50);
};

// eslint-disable-next-line func-names
const initDatepicker = function (this: any, elem: any, options: any): void {
  const self = this;
  const $elem = $(elem);
  const $gBox = $(this).closest('.ui-jqgrid');
  const filterOnSelect = () => {
    setTimeout(() => {
      self.triggerToolbar();
    }, 0);
  };
  const triggerInputChangeOnSelect = () => {
    $elem.change();
  };

  if ($gBox.hasClass('ui-jqgrid-bootstrap')) {
    // uses bootstrap-datepicker.js
    $elem.datepicker({
      format: 'dd-M-yyyy',
      buttonImageOnly: true,
      buttonText: 'Select date',
      calendarWeeks: true,
      clearBtn: true,
      todayBtn: true,
      todayHighlight: true,
      toDay: new Date()
      // monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    });
    // fix position of the datepicker
    // eslint-disable-next-line func-names
    $elem.bind('show', function (this: any) {
      const $datepicker = $('body>.datepicker-dropdown');
      if ($gBox.length > 0 && $datepicker.length > 0) {
        $datepicker.css(
          'top',
          this.getBoundingClientRect().top +
            window.pageYOffset +
            $(this).outerHeight()
        );
      }
    });
  } else {
    // use jQuery UI datepicker
    $elem.datepicker({
      dateFormat: 'dd-M-yy',
      // monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
      buttonImageOnly: true,
      buttonText: 'Select date',
      autoSize: true,
      changeYear: true,
      changeMonth: true,
      showButtonPanel: true,
      showWeek: true,
      toDay: new Date(),
      onSelect:
        options.mode === 'filter' ? filterOnSelect : triggerInputChangeOnSelect
    });
  }
};
// eslint-disable-next-line func-names
const initAutocomplete = function (this: any, elem: any, cmName: any) {
  $(elem).autocomplete({
    source: $(this).jqGrid('getUniqueValueFromColumnIndex', cmName),
    delay: 0,
    minLength: 0
  });
};
// eslint-disable-next-line func-names
const recreateFilterToolbar = function (this: any): void {
  $(this)
    // .jqGrid("destroyFilterToolbar")
    .jqGrid('filterToolbar');
};
// eslint-disable-next-line func-names
const updateAutocompleteSource = function (this: any, cmName: string): void {
  const newUniqueValues = $(this).jqGrid(
    'getUniqueValueFromColumnIndex',
    cmName
  );
  $(`#gs_${this.id}_${cmName}`).autocomplete(
    'option',
    'source',
    newUniqueValues
  );
};

const addOneDay = (date = new Date()) => {
  date.setDate(date.getDate() + 1);

  return date;
};

export {
  addOneDay,
  initAutocomplete,
  initDatepicker,
  recreateFilterToolbar,
  updateAutocompleteSource
};
