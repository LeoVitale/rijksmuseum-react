import styled from 'styled-components';

export const StyledImage = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 150px;
`;
