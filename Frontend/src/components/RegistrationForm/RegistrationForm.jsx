import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/session/operations';

import styles from './RegistrationForm.module.scss';
import { Button } from 'components';
import { passwordPattern, namePattern } from 'utils/patterns';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(namePattern, 'Name can only contains letters')
      .required('Name is required')
      .min(3, 'Name should be at least 3 characters')
      .max(20, 'Name should be at most 20 characters'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .matches(
        passwordPattern,
        'The password should contain at least one uppercase letter, one special character, and one digit'
      )
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters')
      .max(20, 'Password should be at most 20 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(
      signUp({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles['registration-form']}>
            <div className={styles['box']}>
              <Field
                className={styles['form-input']}
                type="text"
                name="name"
                placeholder="First name"
              />
              <ErrorMessage
                className={styles['error-message']}
                name="name"
                component="div"
              />
            </div>
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
            <div className={styles['box']}>
              <Field
                className={styles['form-input']}
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                autoComplete="off"
              />
              <ErrorMessage
                className={styles['error-message']}
                name="confirmPassword"
                component="div"
              />
            </div>
            <Button type="submit" theme="color">
              Register
            </Button>

            <Button
              type="button"
              theme="white"
              onClick={() => navigate('/login')}
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
