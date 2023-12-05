import React from 'react';
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import { toast } from 'react-toastify';
import 'react-datetime/css/react-datetime.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';

import { Button } from 'components';
import css from './ModalAddTransaction.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalAddTransactionOpen } from 'redux/global/globalSlice';
import { selectIsModalAddTransactionOpen } from 'redux/global/selectors';

export const AddTransactionModal = ({ isOpen, handleClose }) => {
  const initialValues = {
    transactionType: false,
    amount: '',
    category: '',
    date: new Date(),
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .typeError('Amount must be a number')
      .required('Amount is required')
      .positive('Amount must be a positive number'),
    date: Yup.date().required('Date is required'),
    category: Yup.string().required('Category is required'),
  });

  const dispatch = useDispatch();
  const isAddTransactionModalOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

  const handleCloseAddTransactionModal = () => {
    console.log('Closing AddTransactionModal');

    dispatch(setIsModalAddTransactionOpen(false));
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      console.log('Form values:', values); // Trzeba zmienić na dodanie transakcji w API
      resetForm();
      toast.success('Transaction added successfully!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach(e => {
          errors[e.path] = e.message;
        });
        setErrors(errors);
      } else {
        toast.error('Error adding transaction. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return isAddTransactionModalOpen ? (
    <div className={css.modal__overlay}>
      <div className={css.modal}>
        <div>
          <h5 className={css.modal__title}>Add Transaction</h5>
          <button
            type="button"
            className={css.modal__close}
            onClick={handleCloseAddTransactionModal}
          >
            x
          </button>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, handleSubmit, setFieldValue, values }) => (
              <Form onSubmit={handleSubmit}>
                <div className={css.form__checkbox_container}>
                  <label className={css.form__checkbox_label}>
                    <span
                      htmlFor="transactionType"
                      className={css.form__checkbox_label}
                    >
                      Income
                    </span>

                    <Field
                      type="checkbox"
                      name="transactionType"
                      id="transactionType"
                      className={css.form__checkbox_input}
                    />
                    <div className={css.form__checkbox_custom}>
                      <div className={css.form__slider}></div>
                    </div>

                    <span
                      htmlFor="transactionType"
                      className={css.form__checkbox_label}
                    >
                      Expense
                    </span>
                  </label>
                </div>

                {values.transactionType === false && (
                  <div className={css.form__input}>
                    <label>
                      <Field
                        as="select"
                        name="category"
                        className={css.form__category}
                      >
                        <option disabled value="">
                          Select a category
                        </option>
                        <option value="category1">Main expenses</option>
                        <option value="category2">Products</option>
                        <option value="category3">Car</option>
                        <option value="category4">Self care</option>
                        <option value="category5">Child care</option>
                        <option value="category6">Household products</option>
                        <option value="category7">Education</option>
                        <option value="category8">Leisure</option>
                      </Field>
                      <ErrorMessage name="category" component="div" />
                    </label>
                  </div>
                )}

                <div className={css.form__input_flex}>
                  <div>
                    <label>
                      <Field type="number" name="amount" placeholder="0.00" />
                      <ErrorMessage name="amount" component="div" />
                    </label>
                  </div>

                  <div>
                    <label>
                      <Datetime
                        value={values.date}
                        onChange={date => setFieldValue('date', date)}
                      />
                      <ErrorMessage name="date" component="div" />
                    </label>
                  </div>
                </div>
                <div className={css.form__input}>
                  <label>
                    <Field as="textarea" name="comment" placeholder="Comment" />
                  </label>
                </div>
                <Button type="submit" theme="color" disabled={isSubmitting}>
                  Add
                </Button>

                <Button type="button" theme="white">
                  Cancel
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  ) : null;
};
