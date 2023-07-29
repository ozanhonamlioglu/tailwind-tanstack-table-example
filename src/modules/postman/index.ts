import Axios, { AxiosRequestConfig } from 'axios';

const AxiosInstance = Axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
});

export default class Postman {
  // TS Operator overloading example
  static get<Response>(ep: string): Promise<Response>;
  static get<Response>(ep: string, config: AxiosRequestConfig): Promise<Response>;

  static async get<Response>(ep: string, config?: AxiosRequestConfig) {
    return (await AxiosInstance.get<Response>(ep, config)).data;
  }

  static post = async <Data, Response>(ep: string, data: Data) => await AxiosInstance.post<Data, Response>(ep, data);
}
