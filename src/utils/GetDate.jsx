export const fixDate = (dateStringData) => {
  const dateString = dateStringData;

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.toLocaleString("en", { month: "long" });
  const day = date.getDate();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
};
