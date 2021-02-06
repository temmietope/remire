export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-NG", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date * 1000);
