import axios from "axios";

export const timeStamp = "1658964521";
const primaryKey = "52fd39d2114c3a1236614401f03b4bf5cf00fbd2";
export const publicKey = "099fd44fbbbed9613716df1c5b100d96";

export const md5Hash = "64a32d78ec843395a39f859d21fc044c";

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
});
