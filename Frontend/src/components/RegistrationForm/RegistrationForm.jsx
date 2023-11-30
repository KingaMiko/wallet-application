import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './RegistrationForm.module.scss';

export const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(12, 'Name should be at most 12 characters'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters')
      .max(12, 'Password should be at most 12 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
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
            <button type="submit">Register</button>

            <button type="button">Log in</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
