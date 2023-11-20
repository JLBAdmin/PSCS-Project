// import $ from 'jquery';
import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';

import * as React from 'react';
// import 'free-jqgrid/dist/i18n/grid.locale-th.js';

declare const window: Window &
  typeof globalThis & {
    afterResize: any;
  };
declare let $: any;

export default function PlotCode(): JSX.Element {
  React.useEffect(() => {
    $.jgrid.icons.aceFontAwesome = $.extend(
      true,
      {},
      $.jgrid.icons.fontAwesome,
      {
        icons: {
          common: 'fas', // will be implemented later
          scale: '', // will be implemented later. For example as "fa-lg"
          titleVisibleGrid: 'fas fa-arrow-circle-up',
          titleHiddenGrid: 'fas fa-arrow-circle-down',
          titleIcon: 'ui-corner-all fa-title',
          close: 'fas fa-times',
          edit: 'fas fa-pencil fa-fw',
          add: 'fas fa-plus fa-fw',
          cancel: 'fas fa-fw',
          del: 'fas fa-minus-circle',
          search: 'fas fa-search fa-fw',
          refresh: 'fas fa-refresh fa-fw',
          view: 'fas fa-file-o fa-fw'
        },
        nav: {
          add: 'fa-plus-circle',
          view: 'fa-search-plus'
        },
        actions: {
          save: 'fas fa-save',
          edit: 'fas fa-edit',
          cancel: 'far fa-window-close',
          del: 'fas fa-trash-alt'
        },
        pager: {
          first: 'fa-angle-double-left',
          prev: 'fa-angle-left',
          next: 'fa-angle-right',
          last: 'fa-angle-double-right'
        },
        form: {
          prev: 'fa-angle-left',
          next: 'fa-angle-right',
          save: 'fa-check',
          cancel: 'fa-times'
        }
      }
    );

    const mydata = [
      {
        id: '10',
        invdate: '2007-10-01',
        name: 'test',
        note: 'note',
        amount: '',
        tax: '',
        closed: true,
        ship_via: 'TN',
        total: ''
      },
      {
        id: '20',
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
        id: '30',
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
        id: '40',
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
        id: '50',
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
        id: '60',
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
        id: '70',
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
        id: '80',
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
        id: '90',
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
        id: '100',
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
        id: '110',
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
        id: '120',
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
    const $grid = $('#list');
    $grid
      .jqGrid({
        ajaxGridOptions: { type: 'POST', cache: false },
        serializeGridData(postdata: { page: number }) {
          // eslint-disable-next-line no-param-reassign
          postdata.page = 1;
          return postdata;
        },
        data: mydata,
        colNames: [
          '',
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
        ],
        colModel: [
          { name: 'act', template: 'actions', width: 50 },
          {
            name: 'name',
            align: 'center',
            width: 92,
            editrules: { required: true }
          },
          {
            name: 'name',
            align: 'center',
            width: 92,
            editrules: { required: true }
          },
          {
            name: 'name',
            align: 'center',
            width: 92,
            editrules: { required: true }
          },
          {
            name: 'name',
            align: 'center',
            width: 92,
            editrules: { required: true }
          },
          {
            name: 'name',
            align: 'center',
            width: 92,
            editrules: { required: true }
          },
          {
            name: 'name',
            align: 'center',
            width: 92,
            editrules: { required: true }
          },
          {
            name: 'name',
            align: 'center',
            width: 92,
            editrules: { required: true }
          },
          {
            name: 'invdate',
            width: 72,
            align: 'center',
            sorttype: 'date',
            frozen: true
          },
          { name: 'amount', width: 56, template: 'number' },
          {
            name: 'tax',
            width: 35,
            template: 'number',
            autoResizableMinColSize: 40
          },
          { name: 'total', width: 43, template: 'number' },
          { name: 'closed', width: 49, template: 'booleanCheckboxFa' },
          {
            name: 'ship_via',
            width: 76,
            align: 'center',
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
          { name: 'total', width: 43, template: 'number' },
          { name: 'total', width: 43, template: 'number' },
          { name: 'note', width: 43, edittype: 'textarea', sortable: false }
        ],
        cmTemplate: { editable: true, autoResizable: true },
        guiStyle: 'bootstrap',
        iconSet: 'aceFontAwesome', // "fontAwesome",
        shrinkToFit: false,
        autowidth: true,
        height: '100%',
        rowNum: 10,
        rowList: [5, 10, 20],
        pager: true,
        gridview: true,
        rownumbers: true,
        autoencode: true,
        ignoreCase: true,
        sortname: 'invdate',
        viewrecords: true,
        sortorder: 'desc',
        toppager: true,
        cloneToTop: true,
        singleSelectClickMode: 'selectonly', // prevent unselect once selected rows
        gridComplete() {},
        inlineEditing: { keys: true },

        caption: 'ทดสอบการทำงานของ jQgrid',
        editurl: 'clientArray',
        // actionsNavOptions: {
        //     addUsericon: "fas fa-user-plus",
        //     addUsertitle: "Add user",
        //     deleteUsericon: "fa-user-times",
        //     deleteUsertitle: "Delete user",
        //     addToCarticon: "fa-cart-plus",
        //     addToCarttitle: "Add item to the cart",
        //     custom: [
        //        { action: "addUser", position: "first", onClick: function (options: { rowid: string; }) { alert("Add user, rowid=" + options.rowid); } },
        //        { action: "addToCart", position: "first", onClick: function (options: { rowid: string; }) { alert("Add to Cart, rowid=" + options.rowid); } },
        //         { action: "deleteUser", onClick: function (options: { rowid: string; }) { alert("Delete user, rowid=" + options.rowid); } }
        //     ]
        // },

        beforeSelectRow(rowid: any) {
          const $self = $(this);
          let i;
          // savedRows array is not empty if some row is in inline editing mode
          const savedRows = $self.jqGrid('getGridParam', 'savedRow');
          // eslint-disable-next-line no-plusplus
          for (i = 0; i < savedRows.length; i++) {
            if (savedRows[0].id !== rowid) {
              // save currently editing row
              // one can replace saveRow to restoreRow in the next line
              $self.jqGrid('saveRow', savedRows[i].id);
            }
          }
          return savedRows.length === 0; // allow selection if saving successful
        },
        ondblClickRow(rowid: any, _iRow: any, _iCol: any, e: { target: any }) {
          const $self = $(this);
          const savedRow = $self.jqGrid('getGridParam', 'savedRow');
          if (savedRow.length > 0 && savedRow[0].id !== rowid) {
            $self.jqGrid('restoreRow', savedRow[0].id);
          }
          $self.jqGrid('editRow', rowid, { focusField: e.target });
        },

        afterSetRow(options: { rowid: any }) {
          const item = $(this).jqGrid('getLocalRow', options.rowid);
          if (item != null) {
            item.dirty = true;
          }
        },
        navOptions: {
          edit: false,
          add: false,
          search: false,
          del: false,
          deltext: 'Delete',
          refresh: false,
          refreshtext: 'Refresh'
        },
        inlineNavOptions: {
          add: true,
          // addtext: "Add",
          save: false,
          savetext: 'Save',
          cancel: true,
          del: true,
          restoreAfterSelect: false
        },
        formDeleting: {
          // delete options
          url: `${window.location}/MfgTransactions_MVC/COA/Delete?`,
          beforeSubmit() {
            // get value
            const selRowId = $(this).jqGrid('getGridParam', 'selrow');
            const parametricValue = $(this).jqGrid(
              'getCell',
              selRowId,
              'ParameterValue'
            );

            // check if empty
            if (parametricValue === '') {
              return [
                false,
                'Cannot delete: No value exists for this parameter'
              ];
            }

            return [true, 'Successfully deleted'];
          },
          delData: {
            batchId() {
              return $('#BatchId').val();
            }
          },
          closeOnEscape: true,
          closeAfterDelete: true,
          width: 400,
          msg: 'Are you sure you want to delete the Parameter?',
          afterComplete(response: { responseText: any }) {
            if (response.responseText) {
              // eslint-disable-next-line no-alert
              alert('response.responseText');
            }

            // loadBatchListIntoGrid();
          }
        }
      })
      .jqGrid('navGrid')
      .jqGrid('filterToolbar', {
        autosearch: true,
        stringResult: false,
        searchOnEnter: true,
        defaultSearch: 'cn'
      })
      .jqGrid('inlineNav')
      .jqGrid('navButtonAdd', `#${$grid[0].id}_toppager_left`, {
        caption: 'Save Changed',
        buttonicon: 'fa-floppy-o',
        onClickButton() {
          const localData = $(this).jqGrid('getGridParam', 'data');
          const dirtyData = $.grep(
            localData,
            (item: { dirty: any }) => item.dirty
          );
          // eslint-disable-next-line no-console
          console.log(dirtyData);
          // eslint-disable-next-line no-alert
          alert(
            dirtyData.length > 0 ? JSON.stringify(dirtyData) : 'no dirty data'
          );
        }
      });
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
    $('jqg1_left').remove();

    // const winHeight = window.innerHeight;
    // const wHeight = winHeight - 230;
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
        const wHeight = winHeight - 170;
        $('#list').jqGrid('setGridHeight', wHeight);
      }, 100);
    });
  }, []);
  return (
    <div>
      <div style={{ margin: '5px' }}>
        <table id='list'></table>
      </div>
    </div>
  );
}
