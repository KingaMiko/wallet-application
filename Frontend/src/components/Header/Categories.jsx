import * as Yup from 'yup';
import Datetime from 'react-datetime';
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import 'react-datetime/css/react-datetime.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { walletInstance } from 'utils/api';
import { Button } from 'components';
import css from './Categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalSettingsOpen } from 'redux/global/globalSlice';
import { selectIsModalSettingsOpen } from 'redux/global/selectors';
import sprite from '../../images/icons.svg';

export const OpenSettingsModal = ({ isOpen, handleClose, openSettings }) => {
  const initialValues = {
    type: false,
    category: '',
  };

  const [categories, setCategories] = useState([]);
  const [newCategories, setNewCategories] = useState([]);

  const validationSchema = Yup.object().shape({
    type: Yup.string(),
    sum: Yup.number()
      .typeError('Amount must be a number')
      .required('Amount is required')
      .positive('Amount must be a positive number'),
    date: Yup.date().required('Date is required'),
    comment: Yup.string(),
  });

  const dispatch = useDispatch();
  const isSettingsModalOpen = useSelector(selectIsModalSettingsOpen);

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

  const handleCloseSettingsModal = () => {
    dispatch(setIsModalSettingsOpen(false));
    handleClose();
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      console.log(values);
      const valuesToSend = {
        sum: values.sum,
        type: values.type ? 'Income' : 'Expense',
        category: values.category,
      };

      const response = await walletInstance.post(
        '/categories',
        valuesToSend
      );

      if (response.status === 201) {
        console.log('Transaction added successfully!', response.data);
        openSettings(response.data);
        handleCloseSettingsModal();
        resetForm();
        toast.success('Transaction added successfully!');
      } else {
        toast.error('Error adding transaction. Please try again.');
      }
    } catch (error) {
      console.error('Validation error:', error);
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach((e) => {
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

  return isOpen ? (
    <div className={css.modal__overlay}>
      <div className={css.modal}>
        <div>
          <h5 className={css.modal__title}>Add Category</h5>
          <button
            type="button"
            className={css.modal__close}
            onClick={handleCloseSettingsModal}
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
                        setFieldValue('type', !values.type);
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
                <div className={css.form__input}>
                  <label>
                    <Field
                      type="text"
                      name="category"
                      placeholder="Add category"
                      className={css.form__category}
                      
                      onChange={(e) => {
                        setFieldValue('category', e.target.value);
                        setErrors({});
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim() !== '') {
                          setNewCategories([...newCategories, e.target.value.trim()]);
                          setFieldValue('category', '');
                        }
                      }}
                    />
                    <ErrorMessage name="category" component="div" />
                  </label>
                </div>
                <div className={css.form__btn_container}>
                  <Button type="submit" theme="color" disabled={isSubmitting} onClick={handleSubmit}>
                    Add
                  </Button>
                  <Button
                    type="button"
                    theme="white"
                    onClick={handleCloseSettingsModal}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        
        <div>
          <h5 className={css.modal__title}>Your Categories</h5>
          <table>
            <thead>
              <tr>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {newCategories.map((category, index) => (
                <tr key={index}>
                  <td>{category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
};

export default OpenSettingsModal;
