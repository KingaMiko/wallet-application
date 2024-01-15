import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import {
  setIsModalSettingsOpen,
  setIsModalConfirmDeleteCategoryOpen,
} from 'redux/global/globalSlice';
import {
  selectIsModalSettingsOpen,
  selectIsModalConfirmDeleteCategoryOpen,
} from 'redux/global/selectors';
import { createCategory, deleteUserCategory } from 'redux/finance/operations';
import { selectUserCategories } from 'redux/finance/selectors';

import { Button } from 'components';
import { ModalConfirmDeleteCategory } from './ModalConfimDeleteCategory';

import css from './Categories.module.scss';
import sprite from 'images/icons.svg';

export const OpenSettingsModal = () => {
  const [categoryType, setCategoryType] = useState('Expense');
  const dispatch = useDispatch();

  const isSettingsModalOpen = useSelector(selectIsModalSettingsOpen);
  const userCategories = useSelector(selectUserCategories);

  const formInitialValues = {
    type: false,
    category: '',
  };

  const formValidationSchema = Yup.object().shape({
    type: Yup.boolean(),
    category: Yup.string(),
  });

  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);
  const isModalConfirmDeleteCategoryOpen = useSelector(
    selectIsModalConfirmDeleteCategoryOpen
  );

  const openConfirmDeleteModal = categoryId => {
    setCategoryIdToDelete(categoryId);
    dispatch(setIsModalConfirmDeleteCategoryOpen(true));
  };

  const closeConfirmDeleteModal = () => {
    dispatch(setIsModalConfirmDeleteCategoryOpen(false));
  };

  const handleDeleteCategory = () => {
    if (categoryIdToDelete) {
      dispatch(deleteUserCategory(categoryIdToDelete));
      closeConfirmDeleteModal();
    }
  };

  const close = () => dispatch(setIsModalSettingsOpen(false));

  const submit = (values, { resetForm }) => {
    const valuesToSend = {
      type: values.type ? 'Income' : 'Expense',
      name: values.category,
    };

    dispatch(createCategory(valuesToSend));
    values.category = '';
  };

  const onSetCategoryType = (catType, setFieldValueCB) => {
    setFieldValueCB('type', catType);
    setCategoryType(catType ? 'Income' : 'Expense');
  };

  return isSettingsModalOpen ? (
    <div className={css.modal__overlay}>
      <div className={css.modal}>
        <div className={css.rightColumn}>
          <div>
            <h5 className={css.modal__title}>Add Category</h5>
            <button type="button" className={css.modal__close} onClick={close}>
              <svg width="16px" height="16px">
                <use href={`${sprite}#icon-close`}></use>
              </svg>
            </button>
          </div>
          <div>
            <Formik
              initialValues={formInitialValues}
              onSubmit={submit}
              validationSchema={formValidationSchema}
            >
              {({ submit, setFieldValue, values }) => (
                <Form>
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
                        onClick={() =>
                          onSetCategoryType(!values.type, setFieldValue)
                        }
                        className={css.form__checkbox_input}
                      />
                      <div className={css.form__checkbox_custom}>
                        <div className={css.form__slider}>
                          {categoryType === 'Expense' ? '-' : '+'}
                        </div>
                      </div>
                      <span
                        htmlFor="type"
                        className={`${css.form__checkbox_label} ${
                          categoryType === 'Expense'
                            ? css.form__checkbox_label_expense
                            : null
                        }`}
                      >
                        Expense
                      </span>
                    </label>
                  </div>
                  <div className={css.form__input}>
                    <label className={css.form__label}>
                      <Field
                        type="text"
                        name="category"
                        placeholder="Add category"
                        className={css.form__category}
                        onChange={e =>
                          setFieldValue('category', e.target.value)
                        }
                      />
                      <ErrorMessage name="category" component="div" />
                    </label>
                  </div>
                  <div className={css.form__btn_container}>
                    <Button type="submit" theme="color" onClick={submit}>
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
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {userCategories
                    .filter(category => category.type === categoryType)
                    .map(category => (
                      <tr key={category._id}>
                        <td className={css.trContent}>
                          <span>{category.name}</span>

                          <svg
                            className={css.iconTransactions}
                            width="20px"
                            height="20px"
                            onClick={() => openConfirmDeleteModal(category._id)}
                          >
                            <use href={`${sprite}#icon-bin`}></use>
                          </svg>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {isModalConfirmDeleteCategoryOpen && (
          <ModalConfirmDeleteCategory
            onConfirm={handleDeleteCategory}
            onClose={closeConfirmDeleteModal}
          />
        )}
      </div>
    </div>
  ) : null;
};

export default OpenSettingsModal;
