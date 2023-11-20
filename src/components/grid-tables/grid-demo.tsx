import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';
// import 'free-jqgrid/dist/i18n/grid.locale-th';
import 'jquery-ui-dist/jquery-ui';

import { useEffect } from 'react';

declare const window: any &
  typeof globalThis & {
    afterResize: any;
  };
// eslint-disable-next-line unused-imports/no-unused-vars
declare const $: any;

const mydata = [
  {
    id: '1',
    invdate: '2007-10-01',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '2',
    invdate: '2007-10-02',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '3',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '4',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '5',
    invdate: '2007-10-05',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '6',
    invdate: '2007-09-06',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '7',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '8',
    invdate: '2007-10-03',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '9',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '10',
    invdate: '2007-10-01',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '11',
    invdate: '2007-10-02',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '12',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '13',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '14',
    invdate: '2007-10-05',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '15',
    invdate: '2007-09-06',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  },
  {
    id: '16',
    invdate: '2007-10-04',
    name: 'test',
    note: 'note',
    amount: '200.00',
    tax: '10.00',
    total: '210.00'
  },
  {
    id: '17',
    invdate: '2007-10-03',
    name: 'test2',
    note: 'note2',
    amount: '300.00',
    tax: '20.00',
    total: '320.00'
  },
  {
    id: '18',
    invdate: '2007-09-01',
    name: 'test3',
    note: 'note3',
    amount: '400.00',
    tax: '30.00',
    total: '430.00'
  }
];

const reports = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (mydata) {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        masterGrid();
      }
    }
  }, []);

  const masterGrid = () => {
    /* jslint devel: true, browser: true, plusplus: true */

    const $grid = $('#list');
    const initDateSearch = (elem: any) => {
      setTimeout(() => {
        $(elem).datepicker({
          dateFormat: 'dd-M-yy',
          autoSize: true,
          // showOn: 'button', // it dosn't work in searching dialog
          changeYear: true,
          changeMonth: true,
          showButtonPanel: true,
          showWeek: true,
          onSelect() {
            if (this.id.substr(0, 3) === 'gs_') {
              setTimeout(() => {
                $grid[0].triggerToolbar();
              }, 50);
            } else {
              // to refresh the filter
              $(this).trigger('change');
            }
          }
        });
      }, 100);
    };

    const numberSearchOptions = [
      'eq',
      'ne',
      'lt',
      'le',
      'gt',
      'ge',
      'nu',
      'nn',
      'in',
      'ni'
    ];
    const numberTemplate = {
      formatter: 'number',
      align: 'right',
      sorttype: 'number',
      searchoptions: { sopt: numberSearchOptions }
    };
    const myDefaultSearch: any = 'cn';
    const getColumnIndex = (grid: any, columnIndex: any) => {
      const cm = grid.jqGrid('getGridParam', 'colModel');
      let i;
      const l = cm.length;
      // eslint-disable-next-line no-plusplus
      for (i = 0; i < l; i++) {
        if ((cm[i].index || cm[i].name) === columnIndex) {
          return i; // return the colModel index
        }
      }
      return -1;
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const refreshSerchingToolbar = (grid: any, myDefaultSearch: string) => {
      const postData = grid.jqGrid('getGridParam', 'postData');
      let filters;
      let i;
      let l;
      let rules;
      let rule;
      let iCol;
      const cm = $grid.jqGrid('getGridParam', 'colModel');
      let cmi;
      let control;
      let tagName;

      // eslint-disable-next-line no-plusplus
      for (i = 0, l = cm.length; i < l; i++) {
        control = $(`#gs_${$.jgrid.jqID(cm[i].name)}`);
        if (control.length > 0) {
          tagName = control[0].tagName.toUpperCase();
          if (tagName === 'SELECT') {
            // && cmi.stype === "select"
            control.find("option[value='']").attr('selected', 'selected');
          } else if (tagName === 'INPUT') {
            control.val('');
          }
        }
      }

      if (
        typeof postData.filters === 'string' &&
        typeof $grid[0].ftoolbar === 'boolean' &&
        $grid[0].ftoolbar
      ) {
        filters = $.parseJSON(postData.filters);
        if (
          filters &&
          filters.groupOp === 'AND' &&
          typeof filters.groups === 'undefined'
        ) {
          // only in case of advance searching without grouping we import filters in the
          // searching toolbar
          rules = filters.rules;
          // eslint-disable-next-line no-plusplus
          for (i = 0, l = rules.length; i < l; i++) {
            rule = rules[i];
            iCol = getColumnIndex($grid, rule.field);
            if (iCol >= 0) {
              cmi = cm[iCol];
              control = $(`#gs_${$.jgrid.jqID(cmi.name)}`);
              if (
                control.length > 0 &&
                (((typeof cmi.searchoptions === 'undefined' ||
                  typeof cmi.searchoptions.sopt === 'undefined') &&
                  rule.op === myDefaultSearch) ||
                  (typeof cmi.searchoptions === 'object' &&
                    $.isArray(cmi.searchoptions.sopt) &&
                    cmi.searchoptions.sopt.length > 0 &&
                    cmi.searchoptions.sopt[0] === rule.op))
              ) {
                tagName = control[0].tagName.toUpperCase();
                if (tagName === 'SELECT') {
                  // && cmi.stype === "select"
                  control
                    .find(`option[value='${$.jgrid.jqID(rule.data)}']`)
                    .attr('selected', 'selected');
                } else if (tagName === 'INPUT') {
                  control.val(rule.data);
                }
              }
            }
          }
        }
      }
    };

    const cm = [
      // {name: 'id', index: 'id', width: 70, align: 'center', sorttype: 'int', formatter: 'int'},
      {
        name: 'invdate',
        index: 'invdate',
        width: 75,
        align: 'center',
        sorttype: 'date',
        formatter: 'date',
        editable: true,
        formatoptions: { newformat: 'd-M-Y' },
        datefmt: 'd-M-Y',
        searchoptions: {
          sopt: ['eq', 'ne'],
          dataInit: initDateSearch
        }
      },
      { name: 'name', index: 'name', width: 65 },
      {
        name: 'amount',
        index: 'amount',
        width: 75,
        template: numberTemplate
      },
      { name: 'tax', index: 'tax', width: 52, template: numberTemplate },
      {
        name: 'total',
        index: 'total',
        width: 60,
        search: false,
        template: numberTemplate
      },
      {
        name: 'closed',
        index: 'closed',
        width: 67,
        align: 'center',
        formatter: 'checkbox',
        edittype: 'checkbox',
        editoptions: { value: 'Yes:No', defaultValue: 'Yes' },
        stype: 'select',
        searchoptions: { sopt: ['eq', 'ne'], value: ':Any;true:Yes;false:No' }
      },
      {
        name: 'ship_via',
        index: 'ship_via',
        width: 95,
        align: 'center',
        formatter: 'select',
        edittype: 'select',
        editoptions: {
          value: 'FE:FedEx;TN:TNT;IN:Intim',
          defaultValue: 'Intime'
        },
        stype: 'select',
        searchoptions: {
          sopt: ['eq', 'ne'],
          value: ':Any;FE:FedEx;TN:TNT;IN:Intim'
        }
      },
      { name: 'note', index: 'note', width: 60, sortable: false }
    ];
    const saveObjectInLocalStorage = (storageItemName: string, object: any) => {
      if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem(storageItemName, JSON.stringify(object));
      }
    };
    const removeObjectFromLocalStorage = (storageItemName: any) => {
      if (typeof window.localStorage !== 'undefined') {
        window.localStorage.removeItem(storageItemName);
      }
    };
    // eslint-disable-next-line consistent-return
    const getObjectFromLocalStorage = (storageItemName: any) => {
      if (typeof window.localStorage !== 'undefined') {
        return JSON.parse(window.localStorage.getItem(storageItemName));
      }
    };
    const myColumnStateName = 'ColumnChooserAndLocalStorage2single.colState';
    let idsOfSelectedRows: any[];
    const saveColumnState = (perm: any) => {
      const colModel = $grid.jqGrid('getGridParam', 'colModel');
      let i;
      const l = colModel.length;
      let colItem: any;
      let cmName: any;
      const postData = $grid.jqGrid('getGridParam', 'postData');
      const columnsState: any = {
        search: $grid.jqGrid('getGridParam', 'search'),
        page: $grid.jqGrid('getGridParam', 'page'),
        sortname: $grid.jqGrid('getGridParam', 'sortname'),
        sortorder: $grid.jqGrid('getGridParam', 'sortorder'),
        permutation: perm,
        selectedRows: idsOfSelectedRows,
        colStates: {}
      };
      const { colStates } = columnsState;

      if (typeof postData.filters !== 'undefined') {
        columnsState.filters = postData.filters;
      }

      // eslint-disable-next-line no-plusplus
      for (i = 0; i < l; i++) {
        colItem = colModel[i];
        cmName = colItem.name;
        if (cmName !== 'rn' && cmName !== 'cb' && cmName !== 'subgrid') {
          colStates[cmName] = {
            width: colItem.width,
            hidden: colItem.hidden
          };
        }
      }
      saveObjectInLocalStorage(myColumnStateName, columnsState);
    };
    let myColumnsState: any;
    const restoreColumnState = (colModel: any) => {
      let colItem;
      let i;
      const l = colModel.length;
      let colStates;
      let cmName;
      const columnsState = getObjectFromLocalStorage(myColumnStateName);

      if (columnsState) {
        colStates = columnsState.colStates;
        // eslint-disable-next-line no-plusplus
        for (i = 0; i < l; i++) {
          colItem = colModel[i];
          cmName = colItem.name;
          if (cmName !== 'rn' && cmName !== 'cb' && cmName !== 'subgrid') {
            // eslint-disable-next-line no-param-reassign
            colModel[i] = $.extend(true, {}, colModel[i], colStates[cmName]);
          }
        }
      }
      return columnsState;
    };
    const updateIdsOfSelectedRows = (id: any, isSelected: any) => {
      const index = $.inArray(id, idsOfSelectedRows);
      if (!isSelected && index >= 0) {
        idsOfSelectedRows.splice(index, 1); // remove id from the list
      } else if (index < 0) {
        idsOfSelectedRows.push(id);
      }
    };
    let firstLoad = true;
    // eslint-disable-next-line @typescript-eslint/no-redeclare, prefer-const
    myColumnsState = restoreColumnState(cm);
    const isColState =
      typeof myColumnsState !== 'undefined' && myColumnsState !== null;
    idsOfSelectedRows =
      isColState && typeof myColumnsState.selectedRows !== 'undefined'
        ? myColumnsState.selectedRows
        : [];

    $grid.jqGrid({
      datatype: 'local',
      data: mydata,
      colNames: [
        /* 'Inv No', */ 'Date',
        'Client',
        'Amount',
        'Tax',
        'Total',
        'Closed',
        'Shipped via',
        'Notes'
      ],
      guiStyle: 'bootstrap',
      iconSet: 'fontAwesome',
      toolbar: [true, 'top'],
      colModel: cm,
      cmTemplate: { autoResizable: true, editable: false },
      autoResizing: { compact: true, resetWidthOrg: true },
      rowNum: 10,
      rowList: [5, 10, 20],
      pager: '#pager',
      gridview: true,
      page: isColState ? myColumnsState.page : 1,
      search: isColState ? myColumnsState.search : false,
      postData: isColState ? { filters: myColumnsState.filters } : {},
      sortname: isColState ? myColumnsState.sortname : 'invdate',
      sortorder: isColState ? myColumnsState.sortorder : 'desc',
      rownumbers: true,
      ignoreCase: true,
      multiselect: true,
      shrinkToFit: false,
      viewrecords: true,
      cellEdit: true, // TRUE = turns on celledit for the grid.
      cellsubmit: 'clientArray',
      editurl: 'clientArray',
      caption: 'The usage of localStorage to save jqGrid preferences',
      height: 'auto',
      onSelectRow(id: any, isSelected: any) {
        updateIdsOfSelectedRows(id, isSelected);
        saveColumnState.call($grid, $grid[0].p.remapColumns);
      },
      onSelectAll(aRowids: any, isSelected: any) {
        let i;
        let count;
        let id;
        // eslint-disable-next-line no-plusplus
        for (i = 0, count = aRowids.length; i < count; i++) {
          id = aRowids[i];
          updateIdsOfSelectedRows(id, isSelected);
        }
        saveColumnState.call($grid, $grid[0].p.remapColumns);
      },
      loadComplete() {
        // highlightFilteredData.call(this);
        const $this = $(this);
        let i;
        let count;

        if (firstLoad) {
          firstLoad = false;
          if (isColState) {
            $this.jqGrid('remapColumns', myColumnsState.permutation, true);
          }
          if (typeof this.ftoolbar !== 'boolean' || !this.ftoolbar) {
            // create toolbar if needed
            $this.jqGrid('filterToolbar', {
              stringResult: true,
              searchOnEnter: true,
              defaultSearch: myDefaultSearch
            });
          }
        }
        refreshSerchingToolbar($this, myDefaultSearch);
        // eslint-disable-next-line no-plusplus
        for (i = 0, count = idsOfSelectedRows.length; i < count; i++) {
          $this.jqGrid('setSelection', idsOfSelectedRows[i], false);
        }
        saveColumnState.call($this, this.p.remapColumns);
      },
      resizeStop() {
        saveColumnState.call($grid, $grid[0].p.remapColumns);
      }
    });
    $.extend($.jgrid.search, {
      multipleSearch: true,
      multipleGroup: true,
      recreateFilter: true,
      closeOnEscape: true,
      closeAfterSearch: true,
      overlay: 0
    });

    $grid.jqGrid('navGrid', '#pager', { edit: false, add: false, del: false });
    $grid.jqGrid('navButtonAdd', '#pager', {
      caption: '',
      buttonicon: 'ui-icon-calculator',
      title: 'choose columns',
      onClickButton() {
        $(this).jqGrid('columnChooser', {
          done(perm: any) {
            if (perm) {
              this.jqGrid('remapColumns', perm, true);
              saveColumnState.call(this, perm);
            }
          }
        });
      }
    });
    $grid.jqGrid('navButtonAdd', '#pager', {
      caption: '',
      buttonicon: 'ui-icon-closethick',
      title: "clear saved grid's settings",
      onClickButton() {
        removeObjectFromLocalStorage(myColumnStateName);
        window.location.reload();
      }
    });
  };
  return (
    <>
      <table id='list' />
      <div id='pager' />
    </>
  );
};

export default reports;
