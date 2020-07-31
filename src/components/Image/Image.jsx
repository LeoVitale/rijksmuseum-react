import React from 'react';
import { StyledImage } from './styles';

const Image = ({ file }) => {
  return <StyledImage src={file} alt="file" />;
};

export default Image;
