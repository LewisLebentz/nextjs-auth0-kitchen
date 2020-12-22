/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SignInWithAuth0 } from './instance';

export default function createDummyBrowserInstance(): SignInWithAuth0 & { isBrowser: boolean } {
  return {
    isBrowser: true,
    handleLogin: () => {
      throw new Error('The handleLogin method can only be used from the server side');
    },
    handleLogout: () => {
      throw new Error('The handleLogout method can only be used from the server side');
    },
    handleCallback: () => {
      throw new Error('The handleCallback method can only be used from the server side');
    },
    handleProfile: () => {
      throw new Error('The handleProfile method can only be used from the server side');
    },
    getSession: () => {
      throw new Error('The getSession method can only be used from the server side');
    },
    getAccessToken: () => {
      throw new Error('The tokenCache method can only be used from the server side');
    },
    withApiAuth: () => {
      throw new Error('The withApiAuth method can only be used from the server side');
    },
    withPageAuth: () => {
      throw new Error('The tokenCache method can only be used from the server side');
    }
  };
}