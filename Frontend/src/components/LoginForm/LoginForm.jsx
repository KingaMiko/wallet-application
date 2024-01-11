import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from 'redux/session/operations';
import { selectPatterns } from 'redux/global/selectors';

import styles from './LoginForm.module.scss';
import { Button, Input } from 'components';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patterns = useSelector(selectPatterns);

  const initialValues = {
    email: '',
    password: '',
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

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles['login-form']} autoComplete="off">
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              iconID="icon-baseline-email"
              title="Enter your name"
            />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              iconID="icon-baseline-lock"
              title="Enter your password"
            />

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
          </Form>
        )}
      </Formik>
    </>
  );
};
