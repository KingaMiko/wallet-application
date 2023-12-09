
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import css from './Header.module.css';
import { selectIsAuth, selectUser } from 'redux/session/selectors';
import { logOut } from 'redux/session/operations';
import { Logo } from 'components/Logo/Logo';
import axios from 'axios';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut())
      .then(() => {
        localStorage.removeItem('authToken');
        clearAuthHeader();
        navigate('/login');
      })
      .catch(error => {
        console.error('Błąd wylogowania:', error);
      });
  };

  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [selectedType, setSelectedType] = useState('income'); 

  const [categories, setCategories] = useState([]);

  const openSettingsModal = () => {
    setSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setSettingsModalOpen(false);
    setNewCategory('');
    setSelectedType('income');
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories(prevCategories => [
        ...prevCategories,
        { id: Date.now(), name: newCategory, type: selectedType }
      ]);

      setNewCategory('');
      setSelectedType('income'); 
    }
  };

  

  return (
    <header className={css.headerContainer}>
      <div className={css.headerWrapper}>
        <Logo />
        <button onClick={openSettingsModal}>Settings</button>

        {isSettingsModalOpen && (
          <div className={css.modalOverlay}>
            <div className={css.modalContent}>
              <span className={css.closeModal} onClick={closeSettingsModal}>&times;</span>
              <h2>Settings</h2>

              {}
              <div>
                <label>
                  <input
                    type="radio"
                    value="income"
                    checked={selectedType === 'income'}
                    onChange={() => setSelectedType('income')}
                  />
                  Income
                </label>
                <label>
                  <input
                    type="radio"
                    value="expense"
                    checked={selectedType === 'expense'}
                    onChange={() => setSelectedType('expense')}
                  />
                  Expense
                </label>
              </div>

              {}
              <input
                className={css.inputCategory}
                type="text"
                placeholder="Enter category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button className={css.buttonAdd} onClick={handleAddCategory}>Add Category</button>

              {}
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(category => (
                    <tr key={category.id}>
                      <td>{category.id}</td>
                      <td>{category.name}</td>
                      <td>{category.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className={css.headerSide}>
          {isAuth && (
            <p className={css.headerSideText}>{user.name ?? 'Hello'}</p>
          )}
          {isAuth ? (
            <button className={css.headerLogout} onClick={handleLogout}>
              <p className={css.headerSideText}>Exit</p>
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;