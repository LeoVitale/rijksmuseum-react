import React from 'react';
import PictureCard from '../PictureCard';
import Grid from '@material-ui/core/Grid';

const Collection = ({ list }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      spacing={3}>
      {list?.map((picture) => (
        <Grid item>
          <PictureCard {...picture} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Collection;
