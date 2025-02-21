export const formatDate = (date) => {
  if (!date) return "";

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  // Add ordinal suffix (st, nd, rd, th)
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return formattedDate.replace(/\d+/, `${day}${suffix}`);
};

// let hours = date.getHours();
// hours = hours % 12 || 12;
// const minutes = String(date.getMinutes()).padStart(2, "0");
// const amPm = hours >= 12 ? "PM" : "AM";
// ${hours}:${minutes} ${amPm}
