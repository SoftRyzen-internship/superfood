export const sendData = async (formData: string): Promise<void> => {
  const url = `${process.env.NEXT_PUBLIC_TELEGRAM_BASE_URL}sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID}&text=${formData}`;
  const response = await fetch(url);
  if (!response.ok) {
    await Promise.reject();
  }
};
