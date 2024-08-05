import ThemePicker from 'components/Header/ThemePicker/ThemePicker.js';
import { HeaderWrapper, UserWrapper } from './Header.styled';
import UserBlock from './UserBlock/UserBlock.js';
import BurgenMenu from './BurgerMenu/BurgerMenu.js';

const Header = () => {
  return (
    <HeaderWrapper>
      <BurgenMenu />

      <UserWrapper>
        <ThemePicker />
        <UserBlock />
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;
