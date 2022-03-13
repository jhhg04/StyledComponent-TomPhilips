import styled from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  padding: 6px;
  top: 0;
  background-image: linear-gradient(to right, #090979, #00d4ff);
  border-bottom: 3px solid #00d4ff;
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #00d4ff;
  background: white;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
  text-decoration: none;
  color: black;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to='/' isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to='/login' isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
