/* eslint-disable react-hooks/rules-of-hooks */
import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';
import 'free-jqgrid/dist/i18n/grid.locale-th';
import 'jquery-ui-dist/jquery-ui';

import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import {
  filterToolbarOptions,
  removeAnyOption
} from '../jquery-ui/filterToolbar';

declare const window: Window &
  typeof globalThis & {
    afterResize: any;
  };
declare const $: any;
let nav: object;

export const date = new Date();
export const dayTH = date.toLocaleDateString('eu-EU');

const quota = ({
  impData,
  colModel,
  colNames,
  isTable,
  isCaption,
  isGrid,
  isOuter,
  isGroup,
  isInlineNav,
  isImport,
  isTopPager
}: //
any) => {
  const router = useRouter();
  const $gridRef = useRef<any | null>(null);
  let lastSel: any;

  // eslint-disable-next-line no-console
  const token = getCookie('ps-jwt');
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isInlineNav === false) {
        nav = {
          edit: false,
          cancel: false,
          save: false,
          add: false
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      $gridRef.current = $(`#${isGrid}`);
      $gridRef.current.jqGrid({
        autowidth: true,
        height: '100%',
        datatype: 'local',
        contentType: 'application/json; charset-utf-8',
        data: impData,
        colNames,
        colModel,
        cmTemplate: { autoResizable: true, editable: false },
        autoResizing: { compact: true, resetWidthOrg: true },
        iconSet: 'fontAwesome',
        guiStyle: 'bootstrap',
        rowNum: 30,
        rowList: [30, 100, '10000:All'],
        // toolbar: [true, 'top'],
        viewrecords: true,
        autoencode: true,
        sortable: true,
        toppager: isTopPager,
        rownumbers: true,
        shrinkToFit: false,
        forceFit: true,
        loadonce: true,
        closeOnEscape: true, // Closes the popup on pressing escape key
        ignoreCase: true, // Case insensitive search
        gridview: true, // renders data more faster??
        // scrollOffset: 1,
        pager: $(`#pager`),
        editurl: 'clientArray',
        grouping: isGroup,
        groupingView: {
          groupField: ['ReportGrp', 'Seq1Name'],
          groupColumnShow: [true, true],
          groupText: ['<b style=display: inline-block;width: 130px;>{0}</b>'],
          groupOrder: ['asc', 'asc', 'asc'],
          groupSummary: [true, false],
          groupSummaryPos: ['header', 'header', 'header'],
          groupCollapse: false,
          groupDataSorted: true
        },
        footerrow: true,
        userDataOnFooter: true,
        loadComplete() {
          const colSumT = $gridRef.current.jqGrid(
            'getCol',
            'TotalCurrent',
            false,
            'sum'
          );
          const colSumA = $gridRef.current.jqGrid(
            'getCol',
            'AmountTotal',
            false,
            'sum'
          );
          const colSumB = $gridRef.current.jqGrid(
            'getCol',
            'Budgets',
            false,
            'sum'
          );
          $gridRef.current.jqGrid('footerData', 'set', {
            surveyName: 'Total',
            TotalCurrent: colSumT,
            AmountTotal: colSumA,
            Budgets: colSumB
          });
        },
        afterAddRow() {
          // eslint-disable-next-line no-console
          // console.log(dayTH);
          // $(this).trigger('reloadGrid', [{ current: true, fromServer: true }]);
        },
        afterSetRow(options: any) {
          // $(this).jqGrid('setRowData', options.rowid, {
          //   TranDate: dayTH
          // });
          const item = $(this).jqGrid('getLocalRow', options.rowid);
          if (item != null) {
            item.dirty = true;
            // eslint-disable-next-line no-console
            // console.log(item);
          }
        },
        inlineNavOptions: nav,
        inlineEditing: {
          keys: true,
          // defaultFocusField: 'MainAccount',
          focusField: 'MainAccount',
          // async oneditfunc() {
          //   //  $gridRef.current.jqGrid('setRowData', rowid, { TranDate: dayTH });
          //   // eslint-disable-next-line no-console
          //   // console.log('dsjfkdsjf');
          // },
          async aftersavefunc(rowid: any): Promise<void> {
            const item = $(this).jqGrid('getLocalRow', rowid);
            if (item != null) {
              // $gridRef.current.jqGrid('setRowData', rowid, { TranDate: dayTH });
              // eslint-disable-next-line no-restricted-globals
              if (isNaN(item.id) === true) {
                // eslint-disable-next-line no-console
                // console.log('add');
                await axios
                  .post(`${router.basePath}/api/${isTable}/new`, item, config)
                  .then((res) => {
                    if (res && res.status === 201) {
                      // eslint-disable-next-line no-alert
                      alert(`item created at ${res.data.createdAt}`);
                      router.reload();
                    } else if (res && res.status === 200) {
                      // eslint-disable-next-line no-alert
                      alert(`Erorr: ${res.data.msg}`);
                      // router.reload();
                    }
                  })
                  // eslint-disable-next-line no-console
                  .catch((error) => console.log(error));
              } else {
                // eslint-disable-next-line no-console
                // console.log('edit');
                await axios
                  .put(
                    `${router.basePath}/api/${isTable}/update/${item.id}/`,
                    item,
                    config
                  )
                  .then((res) => {
                    if (res && res.status === 200) {
                      // eslint-disable-next-line no-alert
                      alert(`1 item updated at ${res.data.updatedAt}`);
                      router.reload();
                    } else {
                      // eslint-disable-next-line no-alert
                      alert(`Erorr: ${res.data.msg}`);
                    }
                  })
                  // eslint-disable-next-line no-console
                  .catch((error) => console.log(error));
              }
            }
          }
        },
        singleSelectClickMode: 'selectonly', // prevent unselect once selected rows
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

        ondblClickRow(id: any, rowid: any, _ci: any): void {
          $gridRef.current.jqGrid(
            'editRow',
            id,
            true,
            null,
            null,
            'clientArray'
          );
          if (id && id !== lastSel) {
            $gridRef.current.restoreRow(lastSel);
            lastSel = id;
          }
          // $(this).editRow(id, true);
          $(this).jqGrid('editRow', rowid);
        },
        sortname: 'updatedAt',
        sortorder: 'desc',
        caption: `${isCaption}`
      });
    }
  }, [impData]);

  useEffect(() => {
    $.extend($.jgrid.search, {
      closeAfterSearch: true,
      closeAfterReset: true,
      overlay: 0,
      recreateForm: true,
      closeOnEscape: true,
      afterChange: removeAnyOption,
      beforeShowSearch: removeAnyOption
    });
    $gridRef.current.jqGrid('setFrozenColumns');
    $gridRef.current.jqGrid('sortableRows');
    $gridRef.current.jqGrid('filterToolbar', filterToolbarOptions);
    $gridRef.current.jqGrid('inlineNav');
    $gridRef.current.jqGrid('gridResize');
    if (isImport === true) {
      $gridRef.current.jqGrid('navButtonAdd', {
        title: 'impport data',
        caption: 'นำเข้าข้อมูล',
        buttonicon: 'fa fa-table',
        async onClickButton() {
          let i;
          const data = $(this).jqGrid('getGridParam', 'lastSelectedData');
          // eslint-disable-next-line no-plusplus
          for (i = 0; i < data.length; i++) {
            // eslint-disable-next-line no-await-in-loop
            await axios
              .post(`${router.basePath}/api/${isTable}/new`, data[i], config)
              .then((res) => {
                if (res && res.status === 201) {
                  // eslint-disable-next-line no-console
                  console.log(`item created at ${res.data.createdAt}`);
                }
              })
              // eslint-disable-next-line no-console
              .catch((error) => console.log(`Server Error ${error}`));
          }
        }
      });

      $gridRef.current.jqGrid('navButtonAdd', {
        title: 'Delete data',
        caption: 'ลบข้อมูล',
        buttonicon: 'fa fa-trash',
        async onClickButton() {
          await axios
            .delete(`${router.basePath}/api/${isTable}/delete`)
            .then((res) => {
              // eslint-disable-next-line no-alert
              alert(`${res.data.msg}`);
            })
            // eslint-disable-next-line no-console
            .catch((error) => console.log(`Server Error ${error}`));
          // const localData = $gridRef.current.jqGrid('getGridParam', 'data');
          // const dirtyData = $.grep(localData, (item: any): any => item.dirty);
          // // eslint-disable-next-line no-console
          // console.log(
          //   dirtyData.length > 0 ? JSON.stringify(dirtyData) : 'no dirty data'
          // );
        }
      });
    }
    // $(`#t_${$.jgrid.jqID($gridRef.current[0].id)}`).append(
    //   $(
    //     '<div><label for="globalSearchText">Global search in grid for:&nbsp;</label><input id="globalSearchText" type="text"></input>&nbsp;<button id="globalSearch" type="button">Search</button></div>'
    //   )
    // );
    // $('#globalSearchText').keypress((e: any) => {
    //   const key = e.charCode || e.keyCode || 0;
    //   if (key === 13) {
    //     // 13
    //     $('#globalSearch').click();
    //   }
    // });

    // $('#globalSearch').click(function () {
    //   // eslint-disable-next-line no-alert
    //   alert($('#globalSearchText').val());
    // });

    $(`#${isOuter}`).show();
    $gridRef.current[0].toggleToolbar();
  }, []);

  useEffect(() => {
    // remove some double elements from one place which we not need double
    const topPagerDiv = $(`#${$gridRef.current[0].id}_toppager`)[0]; // "#list_toppager"
    $(`#edit_${$gridRef.current[0].id}_top`, topPagerDiv).remove(); // "#edit_list_top"
    $(`#del_${$gridRef.current[0].id}_top`, topPagerDiv).remove(); // "#del_list_top"
    $(`#search_${$gridRef.current[0].id}_top`, topPagerDiv).remove(); // "#search_list_top"
    $(`#refresh_${$gridRef.current[0].id}_top`, topPagerDiv).remove(); // "#refresh_list_top"
    $(`#${$gridRef.current[0].id}_toppager_center`, topPagerDiv).remove(); // "#list_toppager_center"
    $('.ui-paging-info', topPagerDiv).remove();

    // const bottomPagerDiv = $('div#pager')[0];
    // $(`#add_${$grid[0].id}`, bottomPagerDiv).remove(); // "#add_list"

    // make more place for navigator buttons be rwducing the width of the right part
    const pagerIdSelector = $gridRef.current.jqGrid('getGridParam', 'pager');
    $(`${pagerIdSelector}_right`).width(100);

    $('#pager_left').remove();
    setTimeout(() => {
      const jqGridWrapperId = `#gbox_${$gridRef.current.attr('id')}`;
      window.afterResize = setTimeout(() => {
        $gridRef.current.setGridWidth($(jqGridWrapperId).parent().width());
        const winHeight = window.innerHeight;
        const wHeight = winHeight - 300;
        $gridRef.current.jqGrid('setGridHeight', wHeight);
        $(window).on('resize', () => {
          $gridRef.current.setGridWidth($(jqGridWrapperId).parent().width());

          $gridRef.current.jqGrid('setGridHeight', wHeight);
        });
      }, 1000);
    });
  }, []);

  return (
    <>
      <div id={isOuter} style={{ margin: -5, display: 'none' }}>
        <table id={isGrid} />
        <div id='pager' />
      </div>
    </>
  );
};

export default quota;
