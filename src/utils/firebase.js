import { initializeApp } from 'firebase/app';
import config from '../../firebase.json';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const app = initializeApp(config);

const auth = getAuth();

export const login = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const uploadImage = async uri => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const storage = getStorage();
  const storageRef = ref(storage, `/profile/${auth.currentUser.uid}/photo.png`);
  const metadata = { contentType: 'image/png' };
  const snapshot = await uploadBytes(storageRef, blob, metadata);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};

export const signup = async ({ email, password, name, photoUrl }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const storageUrl = photoUrl.startsWith('https')
    ? photoUrl
    : await uploadImage(photoUrl);
  await updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: storageUrl,
  });
  return user;
};
