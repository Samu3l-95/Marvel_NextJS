import md5 from "md5";
import service from "../api/rest";

const publicKey = "b910af608771ce83a03fa59695309529";
const privateKey = "3543cca034f464a504ac51ff97f51f7821398e67";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const GetApi = async (props) => {
 return await service.getRest(
    `/public/series?ts=${time}&apikey=${publicKey}&hash=${hash}`
  );
};
