import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';

import { setIsModalAddTransactionOpen } from 'redux/global/globalSlice';
import { selectIsModalAddTransactionOpen } from 'redux/global/selectors';
import { selectUserCategories } from 'redux/finance/selectors';

import 'react-datetime/css/react-datetime.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Button } from 'components';
import * as Yup from 'yup';

import css from './ModalAddTransaction.module.scss';
import sprite from '../../../images/icons.svg';

export const AddTransactionModal = ({ addTransaction }) => {
  const initialValues = {
    type: false,
    sum: '',
    category: '',
    date: new Date(),
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string(),
    sum: Yup.number()
      .positive('Sum must be a positive number')
      .max(1000000, 'Sum must not exceed 1,000,000')
      .required('Sum is required'),
    category: Yup.string().required('Category is required'),
    date: Yup.date().required('Date is required'),
    comment: Yup.string(),
  });

  const dispatch = useDispatch();
  const isAddTransactionModalOpen = useSelector(
    selectIsModalAddTransactionOpen
  );
  const userCategories = useSelector(selectUserCategories);

  const handleCloseAddTransactionModal = () => {
    dispatch(setIsModalAddTransactionOpen(false));
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const valuesToSend = {
        sum: values.sum,
        date: values.date.toISOString(),
        type: values.type ? 'Income' : 'Expense',
        category: values.category,
        comment: values.comment,
      };
      addTransaction(valuesToSend);
    } catch (error) {
      console.error('Error adding transaction:', error);
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
                    <label className={css.form__label}>
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
                        {userCategories
                          .filter(category =>
                            values.type === true
                              ? category.type === 'Income'
                              : category.type === 'Expense'
                          )
                          .map(category => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                      </Field>
                      <ErrorMessage
                        name="category"
                        component="div"
                        className={css.error_message}
                      />
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
                      <ErrorMessage
                        name="sum"
                        component="div"
                        className={css.error_message}
                      />
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
                      <ErrorMessage
                        name="date"
                        component="div"
                        className={css.error_message}
                      />
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
