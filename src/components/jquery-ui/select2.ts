import 'select2/dist/css/select2.css';
import 'select2';

declare let $: any;

export const initSelect2 = (element: any) => {
  setTimeout(() => {
    $(element)
      .select2({
        // add "ui-widget" class to have the same font-family like in jQuery UI Theme
        // add "ui-jqdialog" class to have font-size:11px like in other items of jqGrid form
        dropdownCssClass: 'ui-widget ui-jqdialog'
      })
      .prev('.select2-container')
      .find('>.select2-choice')
      .find('>.select2-arrow')
      .css('background-color', 'transparent');
    $(element)
      .on('select2-open', () => {
        $(element)
          .prev('.select2-container')
          .find('>.select2-choice')
          .addClass('ui-state-default');
      })
      // eslint-disable-next-line func-names
      .on('select2-close', function (this: any): void {
        $(this)
          .prev('.select2-container')
          .find('>.select2-choice')
          .removeClass('ui-state-default');
      });
  }, 50);
};
