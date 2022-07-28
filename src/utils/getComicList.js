import { api, md5Hash, publicKey, timeStamp } from "./api";

export default async ( setComicList,params) => {
      const res = await api.get(
        `comics?ts=${timeStamp}&apikey=${publicKey}&hash=${md5Hash}&orderBy=title${params || ''}`
      );
      setComicList(res.data.data);
}