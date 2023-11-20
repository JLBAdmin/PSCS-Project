import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';

import * as React from 'react';
// import "free-jqgrid/dist/i18n/grid.locale-th.js";
import XLSX from 'xlsx';

declare const window: Window &
  typeof globalThis & {
    afterResize: any;
  };
declare const $: any;

export default function TestFrozen(): JSX.Element {
  const mydata = [
    {
      id: '1',
      invdate: '2007-10-01',
      name: 'test',
      note: 'note',
      amount: '200.00',
      tax: '10.00',
      closed: true,
      ship_via: 'TN',
      total: '210.00'
    },
    {
      id: '2',
      invdate: '2007-10-02',
      name: 'test2',
      note: 'note2',
      amount: '300.00',
      tax: '20.00',
      closed: false,
      ship_via: 'FE',
      total: '320.00'
    },
    {
      id: '3',
      invdate: '2007-09-01',
      name: 'test3',
      note: 'note3',
      amount: '400.00',
      tax: '30.00',
      closed: false,
      ship_via: 'FE',
      total: '430.00'
    },
    {
      id: '4',
      invdate: '2007-10-04',
      name: 'test4',
      note: 'note4',
      amount: '200.00',
      tax: '10.00',
      closed: true,
      ship_via: 'TN',
      total: '210.00'
    },
    {
      id: '5',
      invdate: '2007-10-31',
      name: 'test5',
      note: 'note5',
      amount: '300.00',
      tax: '20.00',
      closed: false,
      ship_via: 'FE',
      total: '320.00'
    },
    {
      id: '6',
      invdate: '2007-09-06',
      name: 'test6',
      note: 'note6',
      amount: '400.00',
      tax: '30.00',
      closed: false,
      ship_via: 'FE',
      total: '430.00'
    },
    {
      id: '7',
      invdate: '2007-10-04',
      name: 'test7',
      note: 'note7',
      amount: '200.00',
      tax: '10.00',
      closed: true,
      ship_via: 'TN',
      total: '210.00'
    },
    {
      id: '8',
      invdate: '2007-10-03',
      name: 'test8',
      note: 'note8',
      amount: '300.00',
      tax: '20.00',
      closed: false,
      ship_via: 'FE',
      total: '320.00'
    },
    {
      id: '9',
      invdate: '2007-09-01',
      name: 'test9',
      note: 'note9',
      amount: '400.00',
      tax: '30.00',
      closed: false,
      ship_via: 'TN',
      total: '430.00'
    },
    {
      id: '10',
      invdate: '2007-09-08',
      name: 'test10',
      note: 'note10',
      amount: '500.00',
      tax: '30.00',
      closed: true,
      ship_via: 'TN',
      total: '530.00'
    },
    {
      id: '11',
      invdate: '2007-09-08',
      name: 'test11',
      note: 'note11',
      amount: '500.00',
      tax: '30.00',
      closed: false,
      ship_via: 'FE',
      total: '530.00'
    },
    {
      id: '12',
      invdate: '2007-09-10',
      name: 'test12',
      note: 'note12',
      amount: '500.00',
      tax: '30.00',
      closed: false,
      ship_via: 'FE',
      total: '530.00'
    }
  ];

  const ColName = [
    'รหัสบรรทุก',
    'ทะเบียนรถ',
    'เจ้าของรถ',
    'อัตราบรรทุก',
    'ค่าบรรทุกสะสม',
    'นน.อ้อยสะสม',
    'จำนวนเที่ยว',
    'เบิกน้ำมันสะสม',
    'หนี้สิน',
    'หักนี้ได้'
  ];
  React.useEffect(() => {
    const $grid = $('#list');
    const numberTemplate = {
      formatter: 'number',
      align: 'right',
      sorttype: 'number',
      editrules: { number: true, required: true },
      searchoptions: {
        sopt: ['eq', 'ne', 'lt', 'le', 'gt', 'ge', 'nu', 'nn', 'in', 'ni']
      }
    };

    $.jgrid.icons.aceFontAwesome = $.extend(true, {
      icons: {
        common: 'fas', // will be implemented later
        scale: '', // will be implemented later. For example as "fa-lg"
        titleVisibleGrid: 'fas fa-arrow-circle-up',
        titleHiddenGrid: 'fas fa-arrow-circle-down',
        titleIcon: 'ui-corner-all fa-title',
        close: 'fas fa-times',
        edit: 'fas fa-pencil fa-fw',
        add: 'fas fa-plus fa-fw',
        cancel: 'fas fa-ban',
        del: 'fas fa-minus-circle',
        search: 'fas fa-search fa-fw',
        refresh: 'fas fa-refresh fa-fw',
        view: 'fas fa-file-o fa-fw'
      },
      nav: {
        add: 'fas fa-plus-circle',
        cancel: 'fas fa-ban',
        view: 'fas fa-search-plus'
      },
      actions: {
        save: 'fas fa-save',
        edit: 'fas fa-edit',
        cancel: 'far fa-window-close',
        del: 'fas fa-trash-alt'
      },
      pager: {
        first: 'fas fa-angle-double-left',
        prev: 'fas fa-angle-left',
        next: 'fas fa-angle-right',
        last: 'fas fa-angle-double-right'
      },
      form: {
        prev: 'fa-angle-left',
        next: 'fa-angle-right',
        save: 'fa-check',
        cancel: 'fa-times'
      }
    });

    $grid
      .jqGrid({
        datatype: 'local',
        data: mydata,
        colNames: ColName,
        colModel: [
          {
            name: 'name',
            align: 'center',
            editable: true,
            width: 99,
            editrules: { required: true },
            frozen: true
          },
          {
            name: 'invdate',
            width: 99,
            align: 'center',
            sorttype: 'date',
            frozen: true,
            formatter: 'date',
            formatoptions: { newformat: 'd-M-Y' },
            editable: true
            // datefmt: "d-M-Y",
            // editoptions: { dataInit: initDateEdit },
            // searchoptions: {
            //   sopt: ["eq", "ne", "lt", "le", "gt", "ge"],
            //   dataInit: initDateSearch,
            // },
          },
          {
            name: 'amount',
            width: 99,
            editable: true,
            template: numberTemplate
          },
          {
            name: 'tax',
            width: 99,
            editable: true,
            template: numberTemplate
          },
          { name: 'total', width: 60, template: numberTemplate },
          {
            name: 'closed',
            width: 99,
            align: 'center',
            editable: true,
            formatter: 'checkbox',
            edittype: 'checkbox',
            editoptions: { value: 'Yes:No', defaultValue: 'Yes' },
            stype: 'select',
            searchoptions: {
              sopt: ['eq', 'ne'],
              value: ':Any;true:Yes;false:No'
            }
          },
          {
            name: 'ship_via',
            width: 99,
            align: 'center',
            editable: true,
            formatter: 'select',
            edittype: 'select',
            editoptions: {
              value: 'FE:FedEx;TN:TNT;IN:Intim',
              defaultValue: 'IN'
            },
            stype: 'select',
            searchoptions: {
              sopt: ['eq', 'ne'],
              value: ':Any;FE:FedEx;TN:TNT;IN:IN'
            }
          },
          {
            name: 'note',
            width: 99,
            sortable: false,
            editable: true,
            edittype: 'textarea'
          },
          {
            name: '11',
            width: 99,
            sortable: false,
            editable: true,
            edittype: 'textarea'
          },
          {
            name: '1/',
            width: 99,
            sortable: false,
            editable: true,
            edittype: 'textarea'
          }
        ],
        iconSet: 'fontAwesome',
        guiStyle: 'bootstrap',
        rowNum: 10,
        rowList: [5, 10, 20, '10000:All'],
        pager: true,
        // toppager: true,
        cloneToTop: true,
        gridview: true,
        rownumbers: true,
        autoencode: true,
        sortname: 'invdate',
        viewrecords: true,
        sortorder: 'desc',
        height: 'auto',
        shrinkToFit: false,
        autowidth: true,
        threeStateSort: true,
        caption: 'The grid, which uses predefined formatters and templates',
        footerrow: true,
        userDataOnFooter: true,
        loadComplete() {
          const colSum = $grid.jqGrid('getCol', 'amount', false, 'sum');
          $grid.jqGrid('footerData', 'set', { amount: colSum });
        },
        inlineEditing: {
          keys: true
        },
        inlineNavOptions: {
          add: true,
          addtext: 'เพิ่ม',
          save: false,
          savetext: 'Save',
          cancel: true,
          canceltext: 'ยกเลิก',
          del: true,
          restoreAfterSelect: false
        },
        formEditing: {
          width: 'auto',
          closeOnEscape: true,
          closeAfterEdit: true,
          savekey: [true, 13]
        },
        searching: {
          // showQuery: true,
          // width: 550,
          multipleSearch: true,
          multipleGroup: true,
          closeOnEscape: true,
          searchOnEnter: true,
          searchOperators: true
        },
        navOptions: {
          edit: false,
          add: false,
          search: false,
          del: false,
          deltext: 'Delete',
          refresh: false,
          refreshtext: 'Refresh'
        }
        //                subGrid: true,
        // subGridRowExpanded: function (subgridDivId: any, rowid: string) {
        // 	$("#" + $.jgrid.jqID(subgridDivId))
        //         	.html("Simple subgrid data for the row with rowid=<strong>" +
        //             		rowid + "</strong>");
        // }
      })
      .jqGrid('setFrozenColumns')
      .jqGrid('navGrid')
      .jqGrid('filterToolbar', {
        autosearch: true,
        stringResult: false,
        searchOnEnter: true,
        defaultSearch: 'cn'
      })
      .jqGrid('inlineNav')
      .jqGrid('navButtonAdd', {
        caption: 'ส่งออก',
        buttonicon: 'fas fa-file-excel',
        title: 'Export to Excel(.XLSX)',
        onClickButton() {
          const filename = 'plotcode.xlsx';
          const data = $(this).jqGrid('getGridParam', 'lastSelectedData');
          let i;
          let item;
          const dataAsArray = [
            [
              'ปีการผลิต',
              'เขต',
              'นักส่งเสริม',
              'รหัสแปลง',
              'ขนาดพี้นที่',
              'รูปพื้นที่',
              'พันธุ์อ้อย',
              'แหล่งน้ำ',
              'ประเภทดิน',
              'เหมาะปลูกอ้อย',
              'ที่ตั้งแปลง',
              'หมู่บ้าน',
              'ตำบล',
              'อำเภอ',
              'จังหวัด',
              'Notes'
            ]
          ];

          // eslint-disable-next-line no-plusplus
          for (i = 0; i < data.length; i++) {
            item = data[i];
            dataAsArray.push([
              item.name,
              new Date(item.invdate),
              item.amount,
              item.tax,
              item.total,
              item.closed,
              item.ship_via
            ]);
          }

          // eslint-disable-next-line @typescript-eslint/naming-convention
          const ws_name = 'SheetJS';
          const wb = XLSX.utils.book_new();
          const ws = XLSX.utils.aoa_to_sheet(dataAsArray);
          XLSX.utils.book_append_sheet(wb, ws, ws_name);
          XLSX.writeFile(wb, filename);
        }
      });

    // .jqGrid("remapColumnsByName", ["name", "invdate", "subgrid"], true);

    // remove some double elements from one place which we not need double
    const topPagerDiv = $(`#${$grid[0].id}_toppager`)[0]; // "#list_toppager"
    $(`#edit_${$grid[0].id}_top`, topPagerDiv).remove(); // "#edit_list_top"
    $(`#del_${$grid[0].id}_top`, topPagerDiv).remove(); // "#del_list_top"
    $(`#search_${$grid[0].id}_top`, topPagerDiv).remove(); // "#search_list_top"
    $(`#refresh_${$grid[0].id}_top`, topPagerDiv).remove(); // "#refresh_list_top"
    $(`#${$grid[0].id}_toppager_center`, topPagerDiv).remove(); // "#list_toppager_center"
    $('.ui-paging-info', topPagerDiv).remove();

    const bottomPagerDiv = $('div#pager')[0];
    $(`#add_${$grid[0].id}`, bottomPagerDiv).remove(); // "#add_list"

    // make more place for navigator buttons be rwducing the width of the right part
    const pagerIdSelector = $grid.jqGrid('getGridParam', 'pager');
    $(`${pagerIdSelector}_right`).width(95);

    $('#pager_left').remove();
    $('#jqg1_left').remove();

    // const winHeight = window.innerHeight;
    // const wHeight = winHeight - 150;
    // $('#list').jqGrid('setGridHeight', wHeight);

    // On Resize
    $(window).resize(() => {
      if (window.afterResize) {
        clearTimeout(window.afterResize);
      }

      window.afterResize = setTimeout(() => {
        /**
          After Resize Code
          .................
      * */
        $('#list').jqGrid('setGridWidth', $('.ui-jqgrid').parent().width());
        // $('#list').jqGrid('setGridHeight',$(window).innerHeight());
        const winHeight = window.innerHeight;
        const wHeight = winHeight - 150;
        $('#list').jqGrid('setGridHeight', wHeight);
      }, 300);
    });
  }, []);
  return (
    <>
      <table id='list'></table>
    </>
  );
}
