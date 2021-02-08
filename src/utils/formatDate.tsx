/**
 * @description pretty format iso date
 */
export const formatDate = (date: Date | string | number): string =>
  new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
