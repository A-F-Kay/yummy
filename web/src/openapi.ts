import { AuthApi } from './api';
import { SocialApi } from './api';

export const api = {
  social: new SocialApi(),
  auth: new AuthApi()
};
