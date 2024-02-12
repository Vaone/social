import {FC} from 'react';
import styled from 'styled-components';

const Header: FC = () =><StyledHeader>Header</StyledHeader>

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 50px;
  background-color: rgba(12, 13, 15, 0.7);
  font-size: 0.833333rem;
  font-weight: 500;
  color: white;
  position: fixed;
  left: 0px;
  z-index: 3;
`;