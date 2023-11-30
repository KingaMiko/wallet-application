import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './RegistrationForm.module.scss';

export const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={styles['registration-form']}>
            <Field type="text" name="name" placeholder="First name" />
            <ErrorMessage name="name" component="div" />

            <Field type="email" name="email" placeholder="E-mail" />
            <ErrorMessage name="email" component="div" />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
            <ErrorMessage name="password" component="div" />

            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              autoComplete="off"
            />
            <ErrorMessage name="confirmPassword" component="div" />

            <button type="submit">Register</button>

            <button type="button">Log in</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
