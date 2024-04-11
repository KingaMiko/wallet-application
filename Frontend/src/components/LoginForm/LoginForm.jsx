import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from 'redux/session/operations';
import { selectPatterns } from 'redux/global/selectors';
import { clearErrorAction } from 'redux/session/sessionSlice';

import styles from './LoginForm.module.scss';
import { Button, Input } from 'components';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patterns = useSelector(selectPatterns);
  const error = useSelector(state => state.session.error);

  const initialValues = {
    email: '',
    password: '',
  };

  const testCredentials = {
    email: 'kinga.mikola@gmail.com',
    password: 'TestTest1+',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .matches(
        new RegExp(patterns.passwordPattern.pattern),
        patterns.passwordPattern.description
      )
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters')
      .max(20, 'Password should be at most 20 characters'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { email, password } = values;

      await dispatch(signIn({ email, password })).unwrap();
      resetForm();
    } catch (error) {
      console.error('Login fail:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const resetError = () => {
    if (error) {
      dispatch(clearErrorAction());
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formikProps => (
        <Form className={styles['login-form']} autoComplete="off">
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            iconID="email-icon"
            autoComplete="email"
            onFocus={resetError}
          />
          <Input
            type="password"
            name="password"
            iconID="password-icon"
            placeholder="Password"
            autoComplete="current-password"
            onFocus={resetError}
          />
          {error && <div className={styles['error-message']}>{error}</div>}
          <Button type="submit" theme="color">
            Log in
          </Button>
          <Button
            type="button"
            theme="white"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
          <Button
            type="button"
            theme="color"
            onClick={() => {
              formikProps.setFieldValue('email', testCredentials.email);
              formikProps.setFieldValue('password', testCredentials.password);
              setTimeout(formikProps.submitForm, 0);
            }}
          >
            USE TEST ACOUNT
          </Button>
        </Form>
      )}
    </Formik>
  );
};
