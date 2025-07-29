export function serverLink(value: any) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  return `${API_URL}${value.url}`;
}
