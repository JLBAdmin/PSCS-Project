// eslint-disable-next-line prettier/prettier
declare let $: any;

export const removeAnyOption = ($form: {
  find: (arg0: string) => {
    (): any;
    new (): any;
    each: { (arg0: (this: any) => void): void; new (): any };
  };
}) => {
  // eslint-disable-next-line func-names
  $form.find('select.input-elm').each(function (this: any): void {
    $(this).find("option[value='']").remove();
  });
  return true; // for beforeShowSearch only
};

export const filterToolbarOptions = {
  defaultSearch: 'cn',
  stringResult: true,
  searchOperators: false,
  autosearch: true,
  searchOnEnter: false,
  multipleSearch: true,
  multipleGroup: true,
  closeOnEscape: true
};
