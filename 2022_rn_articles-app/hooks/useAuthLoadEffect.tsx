import {useEffect} from 'react';
import {useUserState} from '../contexts/UserContext';
import authStorage from '../storages/authStorage';
import {applyToken} from '../api/client';

export default function useAuthLoadEffect() {
  const [, setUser] = useUserState();

  useEffect(() => {
    const fn = async () => {
      const auth = await authStorage.get();
      if (!auth) {
        return;
      }
      setUser(auth.user);
      applyToken(auth.jwt);
    };
    fn();
  }, [setUser]);
}
