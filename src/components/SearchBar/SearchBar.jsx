import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextInput from '../TextInput';
import { Container } from './styles';
import { Grid } from '@material-ui/core';

const SearchBar = ({ loadCollectionData }) => {
  const [term, setTerm] = useState('Rembrandts');

  const searchTerm = () => {
    loadCollectionData(term);
  };

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}>
        <Grid item xs>
          <TextInput
            value={term}
            variant="outlined"
            onChange={(e) => setTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={searchTerm} variant="contained" color="primary">
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBar;
