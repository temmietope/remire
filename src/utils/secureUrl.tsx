/**
 * @description takes url replaces http with https.
 */
export default (url: string): string => url.replace(/^(https?)/, 'https');
