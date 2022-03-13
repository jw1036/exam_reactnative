import {useMutation} from 'react-query';
import {register} from '../api/auth';
import {AuthError} from '../api/types';
import {useUserState} from '../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import {applyToken} from '../api/client';
import authStorage from '../storages/authStorage';

export default function useRegister() {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();
  const mutation = useMutation(register, {
    onSuccess: data => {
      setUser(data.user);
      navigation.pop();
      applyToken(data.jwt);
      authStorage.set(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
      console.log(error.response?.data);
      // TODO: 구현 예정
    },
  });
  return mutation;
}
