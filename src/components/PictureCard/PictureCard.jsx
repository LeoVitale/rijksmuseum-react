import React from 'react';
import BlobImage from '../BlobImage';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Card } from './styles';

const PictureCard = ({ id, headerImage, title, longTitle }) => {
  return (
    <Card key={id}>
      <BlobImage url={headerImage.url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {longTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PictureCard;
