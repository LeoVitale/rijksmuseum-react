import React from 'react';
import useSaveBlobOnStorage from '../../hooks/useSaveBlobOnStorage';
import Image from '../Image';

const BlobImage = ({ url }) => {
  const { file } = useSaveBlobOnStorage(url);
  return <Image file={file} />;
};

export default BlobImage;
