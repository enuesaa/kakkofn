type FlowUIOption = { name: string } & (FlowUINoOption|FlowUITextOption|FlowUISelectOption)
type FlowUINoOption = {
  type: 'no',
  config: {},
}
type FlowUITextOption = {
  type: 'text';
  config: {
    default: string
    multiline: boolean // default false
  }
};
type FlowUISelectOption = {
  type: 'select';
  config: {
    default: string
    selection: string[]
  }
};

