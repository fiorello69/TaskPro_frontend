import ThemePicker from './ThemePicker/ThemePicker';
import UserBlock from './UserBlock/UserBlock';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { HeaderStyled, LeftContainer, RightContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <RightContainer>
        <BurgerMenu />
      </RightContainer>

      <LeftContainer>
        <ThemePicker />
        <UserBlock />
      </LeftContainer>
    </HeaderStyled>
  );
};

export default Header;
