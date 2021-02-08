/**
 * @description capitalize and replace underscore
 */
export const capitalize = (str: string): string =>
  str[0].toUpperCase() + str.slice(1).replaceAll('_', ' ');
