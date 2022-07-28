import axios from "axios";

export const timeStamp = "1658964521";
export const publicKey = "099fd44fbbbed9613716df1c5b100d96";

export const md5Hash = "64a32d78ec843395a39f859d21fc044c";

export const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
});
