import Postman from 'modules/postman';
import { ALL_CAPSULES } from 'types/endpoints';
import { Capsule } from './types';

export default class Capsules {
  static all = () => Postman.get<Array<Capsule>>(ALL_CAPSULES);
}
