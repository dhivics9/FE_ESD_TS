// convert yyyy-mm-dd to dd month year
export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${day} ${month} ${year}`;
}

export function formatDateType(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}