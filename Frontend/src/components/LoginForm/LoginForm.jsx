import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import styles from './LoginForm.module.scss';
import { Button } from 'components';
import { passwordPattern } from 'utils/patterns';

export const LoginForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .matches(
        passwordPattern,
        'The password should contain at least one uppercase letter, one special character, and one digit'
      )
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters')
      .max(20, 'Password should be at most 20 characters'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles['login-form']}>
            <div className={styles['box']}>
              <Field
                className={styles['form-input']}
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <ErrorMessage
                className={styles['error-message']}
                name="email"
                component="div"
              />
            </div>
            <div className={styles['box']}>
              <Field
                className={styles['form-input']}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <ErrorMessage
                className={styles['error-message']}
                name="password"
                component="div"
              />
            </div>

            <Button type="button" theme="color">
              Log in
            </Button>
            <Link to="/register">
              <Button type="submit" theme="white">
                Register
              </Button>
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};
