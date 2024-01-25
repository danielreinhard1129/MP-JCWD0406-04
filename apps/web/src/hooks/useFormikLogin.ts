import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { loginAction } from '@/lib/features/userSlice';
import { toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';
import { baseUrl } from '@/lib/baseUrl';
import { useAppDispatch } from '@/lib/hooks';
YupPassword(yup);

const useFormikLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email cannot be empty'),

    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Your password must be at least 8 characters')
      .minLowercase(1)
      .minUppercase(1),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        const { data } = await axios.post(baseUrl + '/users/login', {
          email,
          password,
        });
        dispatch(loginAction(data.data));
        localStorage.setItem('token_auth', data.token);
        toast.success('Login success', {
          position: 'top-center',
          autoClose: 2000,
          theme: 'light',
          hideProgressBar: true,
        });
        if (data.data.role.name === 'customer') {
          console.log(data.data.role.name);
          redirect('/');
        }

        redirect('/promoters');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          toast.error(errorMsg, {
            position: 'top-center',
            autoClose: 2000,
            theme: 'light',
            hideProgressBar: true,
          });
        }
      }
    },
  });
  return formik;
};

export default useFormikLogin;
