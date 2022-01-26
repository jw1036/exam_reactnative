import { initializeApp } from 'firebase/app';
import config from '../../firebase.json';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const app = initializeApp(config);

const auth = getAuth();

export const login = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
