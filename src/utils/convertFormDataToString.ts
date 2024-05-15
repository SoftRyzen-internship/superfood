import { formDataTypes } from "@/types/formData";

export const convertFormDataToString = ({
  name,
  email = '',
  phone,
  privacyPolicy,
}: formDataTypes) => {
  return `
  \nІм'я та прізвище: ${name}
  \nНомер телефону: ${phone}
  \nПошта: ${email ? email : 'Не надано'}
  \nЗгода на обробку даних: ${privacyPolicy ? 'Згідний(а)' : 'Не згідний(а)'}
  `;
};
