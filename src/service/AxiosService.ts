import axios, { AxiosResponse } from 'axios';
import log from 'util/log';

const TIMEOUT = 10000;

export const getString = async (url: string): Promise<string> => {
  const res: AxiosResponse<string> | void = await axios
    .get(url, { timeout: TIMEOUT })
    .catch(error => {
      const msg = `unable to load ${url}: ${error}`;
      log.error(msg);

      throw Error(msg);
    });

  return String(res.data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getJSON = async (url: string): Promise<any> => {
  const res: AxiosResponse<object> | void = await axios
    .get(url, { timeout: TIMEOUT })
    .catch(error => {
      const msg = `unable to load ${url}: ${error}`;
      log.error(msg);

      throw Error(msg);
    });

  return res.data;
};
