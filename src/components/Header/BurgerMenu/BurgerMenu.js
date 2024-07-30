import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledButton, StyledSvg } from './BurgerMenu.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Aside } from 'components/Sidebar/Sidebar.styled';
import sprite from '../../../images/sprite.svg';
import { selectIsMenuOpen } from '../../../redux/menuMode/menuModeSelectors.js';
import {
  closeMenuMode,
  openMenuMode,
} from '../../../redux/menuMode/menuModeSlice.js';

const BurgerMenu = () => {
  const menuMode = useSelector(selectIsMenuOpen);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(menuMode ? closeMenuMode() : openMenuMode());
  };

  return (
    <div>
      <StyledButton onClick={toggleSidebar}>
        <StyledSvg>
          <use href={sprite + '#icon-menu'} width="24" />
        </StyledSvg>
      </StyledButton>

      <Aside $isOpen={menuMode}>
        <Sidebar />
      </Aside>
    </div>
  );
};

export default BurgerMenu;
