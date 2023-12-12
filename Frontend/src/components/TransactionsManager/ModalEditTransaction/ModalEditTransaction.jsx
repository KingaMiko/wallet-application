import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import { toast } from 'react-toastify';

import { setIsModalEditTransactionOpen } from 'redux/global/globalSlice';
import { selectIsModalEditTransactionOpen } from 'redux/global/selectors';
import { selectUserCategories } from 'redux/finance/selectors';
import { updateTransaction } from 'redux/finance/operations';

import { Button } from 'components';

import 'react-datetime/css/react-datetime.css';
import sprite from '../../../images/icons.svg';
import css from './ModalEditTransaction.module.scss';

export const EditTransactionModal = ({
  editedTransaction,
  onTransactionUpdate,
}) => {
  const initialValues = {
    type: editedTransaction ? editedTransaction.type === 'Income' : false,
    sum: editedTransaction ? editedTransaction.sum : '',
    category: editedTransaction ? editedTransaction.category : '',
    date: editedTransaction ? new Date(editedTransaction.date) : new Date(),
    comment: editedTransaction ? editedTransaction.comment : '',
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string(),
    sum: Yup.number()
      .typeError('Amount must be a number')
      .required('Amount is required')
      .positive('Amount must be a positive number'),
    date: Yup.date().required('Date is required'),
    category: Yup.string().required('Category is required'),
    comment: Yup.string(),
  });

  const dispatch = useDispatch();
  const isEditTransactionModalOpen = useSelector(
    selectIsModalEditTransactionOpen
  );
  const userCategories = useSelector(selectUserCategories);

  const handleCloseEditTransactionModal = () => {
    dispatch(setIsModalEditTransactionOpen(false));
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const transactionData = {
        transactionID: editedTransaction._id,
        sum: values.sum,
        date: values.date.toISOString().split('T')[0],
        type: values.type ? 'Income' : 'Expense',
        category: values.category,
        comment: values.comment,
      };

      await dispatch(updateTransaction(transactionData));

      onTransactionUpdate();

      toast.success('Transaction updated successfully!');
    } catch (error) {
      console.error('Error updating transaction:', error);
      toast.error('Error updating transaction. Please try again.');
    } finally {
      setSubmitting(false);
      resetForm();
      handleCloseEditTransactionModal(false);
    }
  };

  return isEditTransactionModalOpen ? (
    <div className={css.modal__overlay}>
      <div className={css.modal}>
        <div>
          <h5 className={css.modal__title}>Edit Transaction</h5>
          <button
            type="button"
            className={css.modal__close}
            onClick={handleCloseEditTransactionModal}
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
                        <option selected value={editedTransaction.categoryId}>
                          {editedTransaction.category}
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
                    Edit
                  </Button>

                  <Button
                    type="button"
                    theme="white"
                    onClick={handleCloseEditTransactionModal}
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
