import { useLogic } from './logic';
import { Container, MenuButton } from './styles';
import { Props } from './types';
import { Avatar } from '../Avatar';
import { Menu } from '../Menu';

export function Header({ className, url, onSignOut }: Props) {
  const {
    handleOnMouseEnter,
    handleOnMouseLeave,
    isMenuDropDownOpen,
    timeOutRef,
    setMenuDropDownOpen,
  } = useLogic();

  return (
    <Container className={className}>
      <MenuButton
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <Avatar url={url} />
        {isMenuDropDownOpen && (
          <Menu
            onSignOut={onSignOut}
            onMouseEnter={() => {
              clearTimeout(timeOutRef.current);
            }}
            onMouseLeave={() => {
              setMenuDropDownOpen(false);
            }}
          />
        )}
      </MenuButton>
    </Container>
  );
}
