/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import 'free-jqgrid';
import 'free-jqgrid/dist/css/ui.jqgrid.min.css';
// import 'free-jqgrid/dist/i18n/grid.locale-th';
import 'jquery-ui-dist/jquery-ui';

import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as XLSX from 'xlsx';

import { filterToolbarOptions } from '@/components/jquery-ui/filterToolbar';

import { recreateFilterToolbar } from '../jquery-ui/datepicker';
import { initSelect2 } from '../jquery-ui/select2';

declare const window: Window &
  typeof globalThis & {
    afterResize: any;
  };
declare const $: any;

const quota = ({
  impData,
  colModel,
  colNames,
  subColModel,
  subColNames,
  isTable,
  isAction,
  isOption,
  isImport,
  isExport,
  isCaption,
  isZone,
  isAdd,
  isAddress,
  isNotify,
  isGroup,
  isSubGrid,
  isHeader
}: any) => {
  const router = useRouter();

  useEffect(() => {
    if (impData) {
      if (typeof window !== 'undefined') {
        masterGrid();
      }
    }
  }, [colModel, colNames]);
  // eslint-disable-next-line no-console
  const token = getCookie('ps-jwt');
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`
    }
  };

  const masterGrid = () => {
    const $grid = $('#list');
    let lastSel: any;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let add_data = false;
    let removeAnyOption;
    let groupingView: any;
    let actionsOptions: any;
    if (isGroup === true) {
      groupingView = {
        groupField: ['zone'],
        groupColumnShow: [false],
        groupText: ['<b>{0}</b>'],
        groupCollapse: false,
        showSummaryOnHide: false,
        groupOrder: ['asc'],
        groupSummary: [true],
        groupDataSorted: true
      };
    } else {
      // eslint-disable-next-line unused-imports/no-unused-vars
      groupingView = '';
    }

    if (isAction === true) {
      actionsOptions = {
        addUsericon: 'fa-print',
        addUsertitle: 'พิมพ์ บสอ-บสช',
        addToCarticon: 'fa-map-marker',
        addToCarttitle: 'แสดงแผนที่',
        custom: [
          {
            action: 'addUser',
            position: 'first',
            onClick(options: any) {
              window.open(
                `${router.basePath}/api/${isTable}s/print/${$grid.jqGrid(
                  'getCell',
                  options.rowid,
                  'quota'
                )}/${$grid.jqGrid(
                  'getCell',
                  options.rowid,
                  'request_num'
                )}/${$grid
                  .jqGrid('getCell', options.rowid, 'cropYear')
                  .substring(4, 7)}`,
                '_blank'
              );
            }
          },
          {
            action: 'addToCart',
            position: 'first',
            onClick(options: any) {
              window.open(
                `${router.basePath}/maps/${$grid.jqGrid(
                  'getCell',
                  options.rowid,
                  'quota'
                )}`,
                '_blank'
              );
            }
          }
        ]
      };
    } else if (isAddress === true) {
      actionsOptions = {
        addUsericon: 'fa-print',
        addUsertitle: 'ประวัติชาวไร่',
        addToCarticon: 'fa-map-marker',
        addToCarttitle: 'ปักหมุดบ้าน',
        custom: [
          {
            action: 'addToCart',
            position: 'first',
            onClick(options: any) {
              window.open(
                `${router.basePath}/maps/${$grid.jqGrid(
                  'getCell',
                  options.rowid,
                  'AddressGPS'
                )}`,
                '_blank'
              );
            }
          },
          {
            action: 'addUser',
            position: 'first',
            onClick(options: any) {
              window.open(
                `${router.basePath}/api/${isTable}/print/${$grid.jqGrid(
                  'getCell',
                  options.rowid,
                  'Code'
                )}`,
                '_blank'
              );
            }
          }
        ]
      };
    } else if (isNotify === true) {
      actionsOptions = {
        addUsericon: 'fa-print',
        addUsertitle: 'ประวัติชาวไร่',
        addToCarticon: 'fa-map-marker',
        addToCarttitle: 'ปักหมุดบ้าน',
        custom: [
          {
            action: 'addToCart',
            position: 'first',
            onClick(options: any) {
              window.open(
                `${router.basePath}/maps/${$grid.jqGrid(
                  'getCell',
                  options.rowid,
                  'Location'
                )}`,
                '_blank'
              );
            }
          }
        ]
      };
    } else {
      actionsOptions = '';
    }

    $.extend($.jgrid.search, {
      closeAfterSearch: true,
      closeAfterReset: true,
      overlay: 0,
      recreateForm: true,
      closeOnEscape: true,
      afterChange: removeAnyOption,
      beforeShowSearch: removeAnyOption
    });

    $grid
      .jqGrid({
        autowidth: true,
        height: '100%',
        datatype: 'local',
        contentType: 'application/json; charset-utf-8',
        data: impData,
        colModel,
        colNames,
        cmTemplate: { autoResizable: true, editable: false },
        autoResizing: { compact: true, resetWidthOrg: true },
        guiStyle: 'bootstrap',
        iconSet: 'fontAwesome',
        loadtext: 'Loading...',
        rowNum: 100,
        rowList: [100, 500, 700],
        autoencode: true,
        toppager: true,
        viewrecords: true,
        // scrollOffset: 1,
        pager: '#pager',
        shrinkToFit: false,
        forceFit: true,
        loadonce: true,
        // fromServer: true,
        // reloadAfterSubmit: true,
        // forceClientSorting: true, // local sorting and filtering data loaded from the server
        // singleSelectClickMode: 'selectonly', // prevent unselect once selected rows
        closeOnEscape: true, // Closes the popup on pressing escape key
        ignoreCase: true, // Case insensitive search
        gridview: true, // renders data more faster??
        // responsive: true,
        editurl: 'clientArray',
        actionsNavOptions: actionsOptions,
        beforeProcessing(response: { colModelOptions: any }) {
          const $self = $(this);
          const options = response.colModelOptions;
          let p;
          let needRecreateSearchingToolbar = false;
          if (options != null) {
            // eslint-disable-next-line no-restricted-syntax
            for (p in options) {
              // eslint-disable-next-line no-prototype-builtins
              if (options.hasOwnProperty(p)) {
                if (options[p].edittype === 'select') {
                  options[p].editoptions.dataInit = initSelect2;
                }
                if (options[p].stype === 'select') {
                  options[p].searchoptions.dataInit = initSelect2;
                }
                $self.jqGrid('setColProp', p, options[p]);
                if (this.ftoolbar) {
                  // filter toolbar exist
                  needRecreateSearchingToolbar = true;
                }
              }
            }
            if (needRecreateSearchingToolbar) {
              $self.jqGrid('destroyFilterToolbar');
              $self.jqGrid('filterToolbar', filterToolbarOptions);
            }
          }
        },
        afterAddRow() {
          recreateFilterToolbar.call(this);
          // $(this).trigger('reloadGrid', [{ current: true, fromServer: true }]);
        },
        afterSetRow() {
          // router.reload();
          recreateFilterToolbar.call(this);
          // $(this).trigger('reloadGrid', [{ current: true, fromServer: true }]);
          // $('#list')
          //   .jqGrid('setGridParam', { datatype: 'json' })
          //   .trigger('reloadGrid');
          // return [true, '']; // no error
        },
        afterDelRow() {
          recreateFilterToolbar.call(this);
          $(this).trigger('reloadGrid', [{ current: true, fromServer: true }]);
        },
        ondblClickRow(id: any, _ri: any, _ci: any): void {
          // edit the row and save it on press "enter" key
          // var rowData = $(this).jqGrid("getLocalRow");
          // alert(JSON.stringify(rowData));
          $grid.jqGrid('editRow', id, true, null, null, 'clientArray');
          if (id && id !== lastSel) {
            $grid.restoreRow(lastSel);
            lastSel = id;
          }
          $(this).editRow(id, true);
        },
        rownumbers: true,
        sortname: 'updatedAt',
        sortorder: 'desc',
        searching: { defaultSearch: 'cn', searchOperators: true },
        caption: isCaption || '',
        threeStateSort: true,
        subGrid: isSubGrid || false,
        subGridOptions: {
          // hasSubgrid(options: any) {
          //   return parseFloat(options.data.tax) > 20;
          // }
          // const localRowData = $grid.jqGrid('getCell', row_id, 'subZone');
        },
        subGridRowExpanded(subgridDivId: any, rowId: any) {
          const subgridTableId = `${subgridDivId}_t`;
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const pager_id = `p_${subgridTableId}`;
          $(`#${subgridDivId}`).html(
            `<table id='${subgridTableId}'></table> <div id='${pager_id}'></div>`
          );
          const localRowData = $grid.jqGrid('getCell', rowId, 'subZone');
          $(`#${subgridTableId}`).jqGrid({
            datatype: 'json',
            url: `${router.basePath}/api/quotas/get-budget/${localRowData}`,
            colNames: subColNames,
            colModel: subColModel,
            footerrow: true,
            userDataOnFooter: true,
            loadComplete() {
              // eslint-disable-next-line @typescript-eslint/naming-convention
              const colSumArea_contract = $(`#${subgridTableId}`).jqGrid(
                'getCol',
                'area_contract',
                false,
                'sum'
              );
              // eslint-disable-next-line @typescript-eslint/naming-convention
              const colSumTon_contract = $(`#${subgridTableId}`).jqGrid(
                'getCol',
                'ton_contract',
                false,
                'sum'
              );
              // eslint-disable-next-line @typescript-eslint/naming-convention
              const colSumBudget_contract = $(`#${subgridTableId}`).jqGrid(
                'getCol',
                'budget_contract',
                false,
                'sum'
              );
              // eslint-disable-next-line @typescript-eslint/naming-convention
              const colSumArea_prove = $(`#${subgridTableId}`).jqGrid(
                'getCol',
                'area_prove',
                false,
                'sum'
              );
              // eslint-disable-next-line @typescript-eslint/naming-convention
              const colSumTon_prove = $(`#${subgridTableId}`).jqGrid(
                'getCol',
                'ton_prove',
                false,
                'sum'
              );
              // eslint-disable-next-line @typescript-eslint/naming-convention
              const colSumBudget_prove = $(`#${subgridTableId}`).jqGrid(
                'getCol',
                'budget_prove',
                false,
                'sum'
              );
              // eslint-disable-next-line @typescript-eslint/naming-convention
              const colSumMCSS_AreaCount = $(`#${subgridTableId}`).jqGrid(
                'getCol',
                'MCSS_AreaCount',
                false,
                'sum'
              );
              // eslint-disable-next-line @typescript-eslint/naming-convention
              const colSumLoanCurrent = $(`#${subgridTableId}`).jqGrid(
                'getCol',
                'LoanCurrent',
                false,
                'sum'
              );
              $(`#${subgridTableId}`).jqGrid('footerData', 'set', {
                FullName: 'Total',
                area_contract: colSumArea_contract,
                ton_contract: colSumTon_contract,
                budget_contract: colSumBudget_contract,
                area_prove: colSumArea_prove,
                ton_prove: colSumTon_prove,
                budget_prove: colSumBudget_prove,
                MCSS_AreaCount: colSumMCSS_AreaCount,
                LoanCurrent: colSumLoanCurrent
              });
            }
          });
        },
        grouping: isGroup,
        groupingView,
        footerrow: true,
        userDataOnFooter: true,
        loadComplete() {
          const colSumTargetAll = $grid.jqGrid(
            'getCol',
            'TargetAll',
            false,
            'sum'
          );
          const colSumTargetNewArea = $grid.jqGrid(
            'getCol',
            'TargetNewArea',
            false,
            'sum'
          );
          const colSumTargetCaneStump = $grid.jqGrid(
            'getCol',
            'TargetCaneStump',
            false,
            'sum'
          );
          const colSumTargetDemolishStump = $grid.jqGrid(
            'getCol',
            'TargetDemolishStump',
            false,
            'sum'
          );
          const colSumTargetCaneTon = $grid.jqGrid(
            'getCol',
            'TargetCaneTon',
            false,
            'sum'
          );
          const colSumAreaContract = $grid.jqGrid(
            'getCol',
            'AreaContract',
            false,
            'sum'
          );
          const colSumTonContract = $grid.jqGrid(
            'getCol',
            'TonContract',
            false,
            'sum'
          );
          const colSumBudgetContract = $grid.jqGrid(
            'getCol',
            'BudgetContract',
            false,
            'sum'
          );

          const colSumAreaUse = $grid.jqGrid('getCol', 'AreaUse', false, 'sum');
          const colSumTonUse = $grid.jqGrid('getCol', 'TonUse', false, 'sum');
          const colSumBudgetUse = $grid.jqGrid(
            'getCol',
            'BudgetUse',
            false,
            'sum'
          );
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const colSumMCSS_AreaCont = $grid.jqGrid(
            'getCol',
            'MCSS_AreaCont',
            false,
            'sum'
          );
          // const colSumAreaUse = $grid.jqGrid('getCol', "AreaUse", false, 'sum');
          // const colSumAreaUse = $grid.jqGrid('getCol', "AreaUse", false, 'sum');

          const avePercentage = colSumTargetAll / (colSumMCSS_AreaCont * 100);
          $grid.jqGrid('footerData', 'set', {
            surveyName: 'Total',
            TargetAll: colSumTargetAll,
            TargetNewArea: colSumTargetNewArea,
            TargetCaneStump: colSumTargetCaneStump,
            TargetDemolishStump: colSumTargetDemolishStump,
            TargetCaneTon: colSumTargetCaneTon,
            AreaContract: colSumAreaContract,
            TonContract: colSumTonContract,
            BudgetContract: colSumBudgetContract,
            AreaUse: colSumAreaUse,
            TonUse: colSumTonUse,
            BudgetUse: colSumBudgetUse,
            MCSS_AreaCont: colSumMCSS_AreaCont,
            PercenWork: avePercentage
          });
        },
        // navOptions: {
        //   add: true,
        //   edit: true,
        //   del: false
        // },
        inlineNavOptions: {
          add: isAdd,
          addParams: {
            position: 'last', // เพิ่มข้อมูลแถวบนสุดเสมอ
            startId: 1,
            rowID(options: any) {
              // eslint-disable-next-line no-plusplus
              return $grid.getRowData().length + options.startId;
            },
            useDefValues: true,
            addRowParams: {
              // the parameters of editRow used to edit new row
              keys: true,
              async oneditfunc() {
                add_data = true;
              },
              async aftersavefunc(rowid: any): Promise<void> {
                // eslint-disable-next-line no-alert
                // alert(`new row with rowid=${rowid} are added.`);
                const item = $(this).jqGrid('getLocalRow', rowid);
                if (item != null) {
                  if (isTable === 'budget') {
                    $grid.jqGrid('setRowData', rowid, { zone: isZone }); // กำหนดวันที่ตอนเพิ่มข้อมูล
                  }
                  if (isTable === 'cost') {
                    $grid.jqGrid('setRowData', rowid, { UserId: isZone }); // กำหนดวันที่ตอนเพิ่มข้อมูล
                  }
                  await axios
                    .post(`${router.basePath}/api/${isTable}/new`, item, config)
                    .then((res) => {
                      if (res && res.status === 201) {
                        // eslint-disable-next-line no-alert
                        alert(`item created at ${res.data.createdAt}`);
                        router.reload();
                      }
                    })
                    // eslint-disable-next-line no-console
                    .catch((error) => console.log(error));
                }
              }
            }
          }
        },
        inlineEditing: {
          keys: true,
          position: 'afterSelected',
          // defaultFocusField: 'quota',
          // focusField: 'quota',
          async oneditfunc() {
            add_data = false;
          },
          async aftersavefunc(rowid: any): Promise<void> {
            const item = $(this).jqGrid('getLocalRow', rowid);
            if (item != null) {
              // console.log(item.id)
              if (add_data === true) {
                if (isTable === 'budget') {
                  $grid.jqGrid('setRowData', rowid, { zone: isZone }); // กำหนดวันที่ตอนเพิ่มข้อมูล
                }
                if (isTable === 'cost') {
                  $grid.jqGrid('setRowData', rowid, { UserId: isZone }); // กำหนดวันที่ตอนเพิ่มข้อมูล
                }
                await axios
                  .post(`${router.basePath}/api/${isTable}/new`, item, config)
                  .then((res) => {
                    if (res && res.status === 201) {
                      // eslint-disable-next-line no-alert
                      alert(`item created at ${res.data.createdAt}`);
                      router.reload();
                    }
                  })
                  // eslint-disable-next-line no-console
                  .catch((error) => console.log(error));
                // eslint-disable-next-line no-console
              } else {
                // eslint-disable-next-line no-console
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
                    }
                  })
                  // eslint-disable-next-line no-console
                  .catch((error) => console.log(error));
                // alert(`1 item updated at ${res.data.updatedAt}`);
              }
            }
          }
        },
        formDeleting: {
          closeOnEscape: true,
          closeAfterDelete: true,
          reloadAfterSubmit: false,
          // url: "${pageContext.request.contextPath}/billing/saveItem",
          drag: true,
          width: 400,
          msg: 'Are you sure you want to delete the Parameter?',
          beforeShowForm() {
            // $("delmodlist").dialog().hide();
          },

          onclickSubmit: async (): Promise<void> => {
            const selRowId = $('#list').jqGrid('getGridParam', 'selrow');
            // await axios.delete(`/api/emp/` + selRowId, config).then(res => {
            //   if (res && res.status === 200) {
            //     alert(`1 item deleted at ${res.data.deletedAt}`);
            //   }
            // })
            //   .catch(error => alert(error));
            // eslint-disable-next-line no-console
            console.log(selRowId);
          }
          // afterComplete: function () {
          //    alert('')
          // },
        }
      })
      .jqGrid('setFrozenColumns')
      .jqGrid('filterToolbar', filterToolbarOptions)
      .jqGrid('inlineNav', isOption)
      // .jqGrid('navGrid', {
      //   edit: true,
      //   edittext: 'Edit',
      //   add: true,
      //   addtext: 'Add',
      //   del: true,
      //   deltext: 'Del',
      //   search: false,
      //   view: true,
      //   viewtext: 'View',
      //   refresh: true,
      //   refreshtext: 'Refresh'
      // })
      .jqGrid('gridResize')
      .jqGrid('navButtonAdd', `#${$grid[0].id}_toppager_left`, {
        caption: '',
        title: 'Toggle Searching Toolbar',
        buttonicon: 'fa fa-search',
        onClickButton() {
          this.toggleToolbar();
          // $grid.trigger('reloadGrid');
          // router.reload();
          // eslint-disable-next-line no-underscore-dangle
          if ($.isFunction(this.p._complete)) {
            if ($('.ui-search-toolbar', this.grid.hDiv).is(':visible')) {
              $('.ui-search-toolbar', this.grid.fhDiv).show();
            } else {
              $('.ui-search-toolbar', this.grid.fhDiv).hide();
            }
          }
        }
      });
    if (isExport === true) {
      $('#list').navButtonAdd(`#${$grid[0].id}_toppager_left`, {
        title: 'Export to Excel',
        caption: '',
        position: 'last',
        buttonicon: 'fa fa-file-excel-o',
        onClickButton() {
          const filename = `${isCaption}.xlsx`;
          const data = $(this).jqGrid('getGridParam', 'lastSelectedData');
          let i;
          let item;
          const dataAsArray = [colNames];

          if (isTable === 'target') {
            // eslint-disable-next-line no-plusplus
            for (i = 0; i < data.length; i++) {
              // eslint-disable-next-line unused-imports/no-unused-vars
              item = data[i];
              dataAsArray.push([
                item.act,
                item.cropYear,
                item.targetManager,
                item.zone,
                item.subZone,
                item.surveyName,
                item.targetAll,
                item.targetNewArea,
                item.targetCaneStump,
                item.targetDemolishStump,
                item.targetCaneTon,
                item.updatedAt
              ]);
            }
          }

          // eslint-disable-next-line @typescript-eslint/naming-convention
          const ws_name = 'SheetJS';
          const wb: any = XLSX.utils.book_new();
          const ws = XLSX.utils.aoa_to_sheet(dataAsArray);
          XLSX.utils.book_append_sheet(wb, ws, ws_name);
          XLSX.writeFile(wb, filename);
        }
      });
    }
    $grid[0].toggleToolbar();
    // check import
    if (isImport === true) {
      $('#list').navButtonAdd(`#${$grid[0].id}_toppager_left`, {
        title: 'impport data',
        caption: '',
        position: 'last',
        buttonicon: 'fa fa-database',
        async onClickButton() {
          const data = $(this).jqGrid('getGridParam', 'lastSelectedData');
          let i;
          // $('#list').jqGrid('clearGridData');
          await axios.delete(`${router.basePath}/api/${isTable}/delete`);
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
    }

    $('#list').navButtonAdd(`#${$grid[0].id}_toppager_left`, {
      title: 'Reload',
      caption: '',
      position: 'last',
      buttonicon: 'fa fa-refresh',
      onClickButton() {
        router.reload();
        // $('#list')
        //   .jqGrid('setGridParam', { datatype: 'json' })
        //   .trigger('reloadGrid');
        // return [true, '']; // no error

        // eslint-disable-next-line @typescript-eslint/naming-convention
      }
    });
    if (isHeader === true)
      $grid.setGroupHeaders({
        useColSpanStyle: true,
        groupHeaders: [
          {
            numberOfColumns: 2,
            titleText: 'อ้อยสด',
            startColumnName: 'truck0'
          },
          {
            numberOfColumns: 2,
            titleText: 'ไฟไหม้',
            startColumnName: 'truck1'
          },
          {
            numberOfColumns: 2,
            titleText: 'รวมทั้งหมด',
            startColumnName: 'truck'
          }
        ]
      });

    // if (impData) {
    //   // eslint-disable-next-line no-plusplus
    //   for (let n = 0; n < impData.length; n++) {
    //     $grid.jqGrid('addRowData', n + 1, impData[n]);
    //   }
    // }

    // }
    // remove some double elements from one place which we not need double
    const topPagerDiv = $(`#${$grid[0].id}_toppager`)[0]; // "#list_toppager"
    $(`#edit_${$grid[0].id}_top`, topPagerDiv).remove(); // "#edit_list_top"
    $(`#del_${$grid[0].id}_top`, topPagerDiv).remove(); // "#del_list_top"
    $(`#search_${$grid[0].id}_top`, topPagerDiv).remove(); // "#search_list_top"
    $(`#refresh_${$grid[0].id}_top`, topPagerDiv).remove(); // "#refresh_list_top"
    $(`#${$grid[0].id}_toppager_center`, topPagerDiv).remove(); // "#list_toppager_center"
    $('.ui-paging-info', topPagerDiv).remove();

    // const bottomPagerDiv = $('div#pager')[0];
    // $(`#add_${$grid[0].id}`, bottomPagerDiv).remove(); // "#add_list"

    // make more place for navigator buttons be rwducing the width of the right part
    const pagerIdSelector = $grid.jqGrid('getGridParam', 'pager');
    $(`${pagerIdSelector}_right`).width(100);

    $('#pager_left').remove();

    const winHeight = window.innerHeight;
    const wHeight = winHeight - 230;
    $('#list').jqGrid('setGridHeight', wHeight);

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
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const winHeight = window.innerHeight;
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const wHeight = winHeight - 230;
        $('#list').jqGrid('setGridHeight', wHeight);
      }, 100);
    });
  };
  return (
    <>
      <table id='list' />
      <div id='pager' />
    </>
  );
};

export default quota;
