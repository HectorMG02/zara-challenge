import styled from 'styled-components';
import typography from '../../theme/typography';
import { PropTypes } from './types';

const NativeText = styled.p.withConfig({
  shouldForwardProp: (prop) => !['level'].includes(prop),
})<PropTypes>`
  ${({ level }) => typography[level]};
`;

export const S = {
    NativeText,
}