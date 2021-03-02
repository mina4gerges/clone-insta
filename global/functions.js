// Function to get currentDateTime e.x: 2021-03-02 11:11:00
export const getCurentDateTime = () => {
  const date = new Date();

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
