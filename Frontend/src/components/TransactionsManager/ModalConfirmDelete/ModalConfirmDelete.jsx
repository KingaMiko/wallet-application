import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalConfirmDeleteOpen } from 'redux/global/selectors';
import { setIsModalConfirmDeleteOpen } from 'redux/global/globalSlice';

import { Button } from 'components';

import css from './ModalConfirmDelete.module.scss';
import sprite from '../../../images/icons.svg';

export const ModalConfirmDelete = ({ onConfirm }) => {
  const dispatch = useDispatch();
  const isModalConfirmDeleteOpen = useSelector(selectIsModalConfirmDeleteOpen);

  const handleClose = () => {
    dispatch(setIsModalConfirmDeleteOpen(false));
  };

  return isModalConfirmDeleteOpen ? (
    <div className={css.modal__overlay}>
      <div className={css.modal}>
        <div>
          <h5 className={css.modal__title}>
            Are you sure you want to delete this transaction?{' '}
            <p>*This action cannot be undone.</p>
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
