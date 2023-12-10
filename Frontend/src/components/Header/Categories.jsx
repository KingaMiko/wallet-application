import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import { setIsModalSettingsOpen } from 'redux/global/globalSlice';
import { selectIsModalSettingsOpen } from 'redux/global/selectors';
import { createCategory } from './../../redux/finance/operations';
import { deleteUserCategory } from './../../redux/finance/operations';

import { walletInstance } from 'utils/api';

import { Button } from 'components';

import css from './Categories.module.scss';
import sprite from '../../images/icons.svg';

export const OpenSettingsModal = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const isSettingsModalOpen = useSelector(selectIsModalSettingsOpen);

  const initialValues = {
    type: false,
    category: '',
  };

  const validationSchema = Yup.object().shape({
    type: Yup.boolean(),
    category: Yup.string(),
  });

  const close = () => dispatch(setIsModalSettingsOpen(false));

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      const valuesToSend = {
        type: values.type ? 'Income' : 'Expense',
        name: values.category,
      };

      const response = await walletInstance.post('/categories', valuesToSend);

      if (response.status === 201) {
        console.log('Transaction added successfully!', response.data);
        close();
        resetForm();
        toast.success('Transaction added successfully!');
      } else {
        toast.error('Error adding transaction. Please try again.');
      }
    } catch (error) {
      console.error('Validation error:', error);
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await walletInstance.get('/categories');

        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };
    fetchCategories();
  }, []);
    
    
    const handleDeleteCategory = async (categoryId) => {
  try {
    const response = await walletInstance.delete(`/categories/${categoryId}`);
    
    if (response.status === 200) {
      
      const updatedCategories = categories.filter(category => category.id !== categoryId);
      setCategories(updatedCategories);
      toast.success('Category deleted successfully!');
    } else {
      toast.error('Error deleting category. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    toast.error('Error deleting category. Please try again.');
  }
};

  return isSettingsModalOpen ? (
    <div className={css.modal__overlay}>
          <div className={css.modal}>
              <div className={css.rightColumn}>
        <div >
          <h5 className={css.modal__title}>Add Category</h5>
          <button type="button" className={css.modal__close} onClick={close}>
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
                      onChange={e => {
                        setFieldValue('category', e.target.value);
                        setErrors({});
                      }}
                   
                    />
                    <ErrorMessage name="category" component="div" />
                  </label>
                </div>
                <div className={css.form__btn_container}>
                  <Button
                    type="submit"
                    theme="color"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    Add
                  </Button>
                  <Button type="button" theme="white" onClick={close}>
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
</div>
              <div className={css.leftColumn}>
        <div>
                  <h5 className={css.modal__title}>Your Categories</h5>
                   <div className={css.tableContainer}>
          <table>
            <thead className={css.tableHeader}>
              <tr className={css.trBackground}>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
  {categories.map(category => (
    <tr key={category.id}>
      <td>{category.name}</td>
      <td>
        <button
          type="button"
          className={css.deleteButton}
          onClick={() => handleDeleteCategory(category.id)}
        >
          X
        </button>
      </td>
    </tr>
  ))}
</tbody>
                      </table>
                      </div>
                      </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default OpenSettingsModal;
