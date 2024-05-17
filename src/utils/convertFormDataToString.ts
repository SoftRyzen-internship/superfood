import { formDataType } from '@/types/formData';

export const convertFormDataToString = ({
  name,
  email = '',
  phone,
  privacyPolicy,
}: formDataType) => {
  return `
  \nІм'я та прізвище: ${name}
  \nНомер телефону: ${phone}
  \nПошта: ${email ? email : 'Не надано'}
  `;
};
