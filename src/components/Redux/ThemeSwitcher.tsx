import React from 'react';
import "./style.css"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/types';
import { toggleTheme } from '../../store/themeSlice';

const ThemeSwitcher: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const className = `wrapper background-${theme}`;

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={className}>
      <h2>Theme: {theme}</h2>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
