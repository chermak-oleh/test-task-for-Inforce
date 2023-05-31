/* eslint-disable import/no-cycle */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function request<T>(
  url: string,
  method = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };
  const BASE_URL = 'http://localhost:5000/products';

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options)
    .then(response => response.json());
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string, data: any) => request(url, 'DELETE', data),
};
