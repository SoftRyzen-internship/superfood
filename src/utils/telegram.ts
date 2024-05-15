const baseUrl =
  'https://api.telegram.org/bot6944623656:AAGrMEvUKLDTQFcIuLRqIFwjP4gGEkjola8/';

export const sendData = async (formData: string) => {
  console.log(formData);
  const url = `${baseUrl}sendMessage?chat_id=-4281489460&text=${formData}`;
  const response = await fetch(url);
  console.log('response', response);
};
