
import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

// using axios for all kinds of http requests
export const request = axios;

// @types/humps are installed but I don't know how to make use of them :/

export function camelizeResponse(res: any) {
  return camelizeKeys(res) as any;
}

export function decamelizeBody(body: any) {
  return decamelizeKeys(body) as any;
}

export function responseData(res: any) {
  return res.data as any;
}
