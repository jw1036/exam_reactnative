import firestore from '@react-native-firebase/firestore';

export const userCollection = firestore().collection('users');

export function createUser({id, displayName, photoURL}) {
  return userCollection.doc(id).set({
    id,
    displayName,
    photoURL,
  });
}

export async function getUser(id) {
  const doc = await userCollection.doc(id).get();
  return doc.data();
}
