export interface CheckboxProps {
  label: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  error: any;
  name: string;
  register: any;
}
