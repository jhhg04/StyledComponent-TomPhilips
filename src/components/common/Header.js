import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  padding: 16px;
  top: 0;
  background: #eeeeee;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </HeaderWrapper>
  );
}
