import { formDataType } from '@/types/formData';

export const convertFormDataToString = ({
  name,
  phone,
  email = '',
}: formDataType) => {
  return `
  Ім'я та прізвище: ${name}
  %0AНомер телефону: ${phone} 
  %0AПошта: ${email ? email : 'Не надано'}
  `;
};
