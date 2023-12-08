import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from 'redux/session/operations';
import { selectPatterns } from 'redux/global/selectors';

import styles from './RegistrationForm.module.scss';
import { Button, Input } from 'components';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patterns = useSelector(selectPatterns);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        new RegExp(patterns.namePattern.pattern),
        patterns.namePattern.description
      )
      .required('Name is required')
      .min(3, 'Name should be at least 3 characters')
      .max(20, 'Name should be at most 20 characters'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .matches(
        new RegExp(patterns.passwordPattern.pattern),
        patterns.passwordPattern.description
      )
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters')
      .max(20, 'Password should be at most 20 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;

    dispatch(signUp({ name, email, password }));
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
          <Form className={styles['registration-form']} autoComplete="off">
            <Input
              type="text"
              name="name"
              placeholder="First name"
              iconID="icon-baseline-account_box"
              title="Enter your name (3 to 20 characters)"
            />

            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              iconID="icon-baseline-email"
              title="Provide a valid email address"
            />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              iconID="icon-baseline-lock"
              title="Password (6 to 20 characters, must include one capital letter, a number and a special character)"
            />

            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              autoComplete="off"
              iconID="icon-baseline-lock"
              title="Confirm your password (must match the above password)"
            />

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
