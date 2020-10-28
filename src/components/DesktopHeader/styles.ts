import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
  background: var(--color-header);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`

`;

const generalIconCss = css`
  width: 24px;
  height: 24px;
`;

export const LinkedinIcon = styled(GrLinkedin)`
  ${generalIconCss}  
`;

export const SearchInput = styled.input`

`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCss}
`;

export const NotificationIcon = styled(AiOutlineBell)`
  ${generalIconCss}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  ${generalIconCss}
`;
