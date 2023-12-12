import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUserDetails } from 'redux/session/selectors';
import { getUserDetails } from 'redux/session/operations';

import css from './Balance.module.scss';

export const Balance = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(selectUserDetails);
  const userBalance = userDetails ? userDetails.balance : 0;

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <div className={css.balance}>
      <p className={css.title}>YOUR BALANCE</p>
      <p className={css.amount}>PLN {userBalance}</p>
    </div>
  );
};
