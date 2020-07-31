import styled from 'styled-components';
import MUIInputBase from '@material-ui/core/InputBase';

export const InputBase = styled(MUIInputBase)`
  padding: ${({ theme }) => theme.spacing(0, 2, 0, 2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 100%;
`;
