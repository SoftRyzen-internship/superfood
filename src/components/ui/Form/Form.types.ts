export interface FormProps {
  title: string;
  text: string;
  formProps: {
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
  }[];
  buttonText: string;
}
