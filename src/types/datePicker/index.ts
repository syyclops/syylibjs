type DatePickerProps = {
  value: {
    d: string;
    m: string;
    y: string;
  };
  onSet: ({ d, m, y }: { d: string; m: string; y: string }) => void;
  inputWidth?: string;
  inputHeight?: string;
  pickerWidth?: string;
  pickerHeight?: string;
};

export { DatePickerProps };
