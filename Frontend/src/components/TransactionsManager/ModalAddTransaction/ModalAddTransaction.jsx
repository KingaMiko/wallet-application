import * as Yup from 'yup';

import Datetime from 'react-datetime';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import 'react-datetime/css/react-datetime.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { walletInstance } from 'utils/api';

import { Button } from 'components';
import css from './ModalAddTransaction.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalAddTransactionOpen } from 'redux/global/globalSlice';
import { selectIsModalAddTransactionOpen } from 'redux/global/selectors';
import sprite from '../../../images/icons.svg';

export const AddTransactionModal = ({ addTransaction }) => {
  const initialValues = {
    type: 'false',
    sum: '',
    category: '',
    date: new Date(),
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string(),
    sum: Yup.number()
      .positive('Sum must be a positive number')
      .required('Sum is required'),
    category: Yup.string().required('Category is required'),
    date: Yup.date().required('Date is required'),
    comment: Yup.string(),
  });

  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const isAddTransactionModalOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await walletInstance.get('/categories');

        const fetchedCategories = response.data.data;
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCloseAddTransactionModal = () => {
    dispatch(setIsModalAddTransactionOpen(false));
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const valuesToSend = {
        sum: values.sum,
        date: values.date.toISOString(),
        type: values.type,
        category: values.category,
        comment: values.comment,
      };
      console.log(valuesToSend.date);
      const response = await walletInstance.post('/transactions', valuesToSend);
      if (response.status === 201) {
        console.log('Transaction added successfully!', response.data);
        addTransaction(response.data);
        toast.success('Transaction added successfully!');
      } else {
        toast.error('Error adding transaction. Please try again.');
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
      toast.error('Error adding transaction. Please try again.');
    } finally {
      setSubmitting(false);
      resetForm();
      handleCloseAddTransactionModal();
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
            <svg width="16px" height="16px">
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({
              isSubmitting,
              handleSubmit,
              setFieldValue,
              values,
              setValues,
              setErrors,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className={css.form__checkbox_container}>
                  <label className={css.form__checkbox_label}>
                    <span
                      htmlFor="type"
                      className={`${css.form__checkbox_label} ${
                        values.type === true
                          ? css.form__checkbox_label_income
                          : null
                      }`}
                    >
                      Income
                    </span>

                    <Field
                      type="checkbox"
                      name="type"
                      id="type"
                      onClick={() => {
                        setValues({
                          ...initialValues,
                          type: values.type,
                        });
                        setErrors({});
                      }}
                      className={css.form__checkbox_input}
                    />
                    <div className={css.form__checkbox_custom}>
                      <div className={css.form__slider}>
                        {values.type === false ? '-' : '+'}
                      </div>
                    </div>

                    <span
                      htmlFor="type"
                      className={`${css.form__checkbox_label} ${
                        values.type === false
                          ? css.form__checkbox_label_expense
                          : null
                      }`}
                    >
                      Expense
                    </span>
                  </label>
                </div>
                <div className={css.form__flex_container}>
                  <div className={css.form__input}>
                    <label>
                      <Field
                        as="select"
                        name="category"
                        className={`${css.form__category} ${
                          values.category !== ''
                            ? css.form__category_active
                            : null
                        }`}
                      >
                        <option hidden value="">
                          Select a category
                        </option>
                        {categories
                          .filter(category =>
                            values.type === true
                              ? category.type === 'income'
                              : category.type === 'expense'
                          )
                          .map(category => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                      </Field>
                      <ErrorMessage name="category" component="div" />
                    </label>
                  </div>
                  <div className={css.form__input_flex}>
                    <label>
                      <Field
                        type="number"
                        name="sum"
                        placeholder="0.00"
                        className={css.form__input}
                      />
                      <ErrorMessage name="sum" component="div" />
                    </label>
                    <label>
                      <Datetime
                        value={values.date}
                        onChange={date => setFieldValue('date', date)}
                        className={`${css.form__input} ${css.form__date}`}
                        dateFormat="YYYY-MM-DD"
                        timeFormat={false}
                      />
                      <span className={css.form__date_icon}></span>
                      <ErrorMessage name="date" component="div" />
                    </label>
                  </div>
                  <div className={css.form__input}>
                    <label>
                      <Field
                        as="input"
                        type="text"
                        name="comment"
                        placeholder="Comment"
                        className={css.form__input}
                      />
                    </label>
                  </div>
                </div>
                <div className={css.form__btn_container}>
                  <Button type="submit" theme="color" disabled={isSubmitting}>
                    Add
                  </Button>

                  <Button
                    type="button"
                    theme="white"
                    onClick={handleCloseAddTransactionModal}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  ) : null;
};
