import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalConfirmDeleteCategoryOpen } from 'redux/global/selectors';
import { setIsModalConfirmDeleteCategoryOpen } from 'redux/global/globalSlice';

import { Button } from 'components';

import css from './ModalConfimDeleteCategory.module.scss';
import sprite from '../../images/icons.svg';

export const ModalConfirmDeleteCategory = ({ onConfirm }) => {
  const dispatch = useDispatch();
  const isModalConfirmDeleteCategoryOpen = useSelector(
    selectIsModalConfirmDeleteCategoryOpen
  );

  const handleClose = () => {
    dispatch(setIsModalConfirmDeleteCategoryOpen(false));
  };

  return isModalConfirmDeleteCategoryOpen ? (
    <div className={css.modal__overlay}>
      <div className={css.modal}>
        <div>
          <h5 className={css.modal__title}>
            Are you sure you want to delete this category?{' '}
            <p>
              Transactions associated with this category will be set to 'No
              Category' and can be edited later to assign a new category.
            </p>
          </h5>
          <button
            type="button"
            className={css.modal__close}
            onClick={handleClose}
          >
            <svg width="16px" height="16px">
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
          <div className={css.btn_container}>
            <Button type="button" theme="color" onClick={onConfirm}>
              Yes, Delete
            </Button>

            <Button type="button" theme="white" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
