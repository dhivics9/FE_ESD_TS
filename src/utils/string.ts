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

export function formatDateEvent(dateStr: string){
  // Extract date components using regex
  const match = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return "Invalid Date";
  
  const [_, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
