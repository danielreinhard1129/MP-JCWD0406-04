'use client';

import axios, { AxiosError } from 'axios';
import { Button, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name cannot be empty'),
  lastName: yup.string().required('Last name cannot be empty'),
  username: yup.string().required('Username cannot be empty'),
  email: yup
    .string()
    .email('invalid email address')
    .required('Email cannot be empty'),
  password: yup
    .string()
    .required('Password cannot be empty')
    .min(6)
    .minLowercase(1)
    .minUppercase(1),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password') ?? ''], 'Password must match')
    .required('Password cannot be empty'),
});

const FormRegister = () => {
  const baseUrl = 'http://localhost:8000/api';
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(baseUrl + '/users/register', {
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
        alert('Register Success');
        router.push('/login');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          alert(errorMsg);
        }
      }
    },
  });
  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <TextInput
          id="email"
          type="email"
          placeholder="Email address"
          required
          shadow={false}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <TextInput
          id="firstName"
          type="text"
          placeholder="First Name"
          required
          shadow={false}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          color={
            formik.errors.firstName && formik.touched.firstName
              ? 'failure'
              : 'gray'
          }
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.firstName}
          </p>
        )}
      </div>
      <div className="mb-4">
        <TextInput
          id="lastName"
          type="text"
          placeholder="Last Name"
          required
          shadow={false}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.lastName}
          </p>
        )}
      </div>
      <div className="mb-4">
        <TextInput
          id="username"
          type="text"
          placeholder="Username"
          required
          shadow={false}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.username}
          </p>
        )}
      </div>

      <div className="mb-4">
        <div className="relative">
          <TextInput
            id="password"
            type={show ? 'text' : 'password'}
            placeholder="Enter Password"
            required
            shadow={false}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute inset-y-0 right-0 flex items-center bg-transparent text-sm font-medium text-gray-700 hover:text-black focus:outline-none"
            style={{ margin: '6px' }}
          >
            {show ? 'Hide' : 'Show'}
          </Button>
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.password}
          </p>
        )}
      </div>
      <div className="mb-4">
        <div className="relative">
          <TextInput
            id="confirmPassword"
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm Password"
            required
            shadow={false}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <Button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute inset-y-0 right-0 flex items-center bg-transparent text-sm font-medium text-gray-700 hover:text-black focus:outline-none"
            style={{ margin: '6px' }}
          >
            {showConfirm ? 'Hide' : 'Show'}
          </Button>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.confirmPassword}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
      >
        Create account
      </Button>
      <p className="text-sm">
        Already have an account?
        <Link href="/login" className="font-bold hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
