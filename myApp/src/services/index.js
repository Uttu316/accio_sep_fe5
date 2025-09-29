import { API_DOMAIN } from "./serviceContants";

export const api = async (config) => {
  try {
    const { endpoint } = config;
    const URL = API_DOMAIN + endpoint;
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
