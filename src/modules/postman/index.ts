import Axios, { AxiosRequestConfig } from 'axios';

const AxiosInstance = Axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
});

export default class Postman {
  static get = async <Response>(ep: string, config?: AxiosRequestConfig) => (await AxiosInstance.get<Response>(ep, config)).data;
  static post = async <Data, Response>(ep: string, data: Data) => await AxiosInstance.post<Data, Response>(ep, data);
}
