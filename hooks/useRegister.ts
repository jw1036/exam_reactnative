import {useMutation} from 'react-query';
import {register} from '../api/auth';
import {AuthError} from '../api/types';

export default function useRegister() {
  const mutation = useMutation(register, {
    onSuccess: data => {
      console.log(data);
      // TODO: 구현 예정
    },
    onError: (error: AuthError) => {
      console.log(error);
      // TODO: 구현 예정
    },
  });
  return mutation;
}
