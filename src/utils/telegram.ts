const baseUrl =
  'https://api.telegram.org/bot6758194750:AAE1vGGfsHJWBmAsiUw46u7Gnx0uTAwhSqs/';

export const sendData = async (formData: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=-4274694677&text=${formData}`;
  const response = await fetch(url);
  if (!response.ok) {
    await Promise.reject();
  }
};
