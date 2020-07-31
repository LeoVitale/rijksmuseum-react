import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';

import SearchBar from './components/SearchBar';
import Collection from './components/Collection';
import {
  collectionSelector,
  getCollection,
  setCollection,
} from './redux/modules/collection';
import { useSelector, useDispatch } from 'react-redux';
import { RijksmuseumApi } from './api';

const App = () => {
  const { pictureList } = useSelector(collectionSelector);
  const dispatch = useDispatch();
  const api = new RijksmuseumApi();

  useEffect(() => {
    loadCollectionData('Rembrandts');
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      loadRemoteCollectionData('');
    }, 60000);

    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    function updateConnectionStatus() {
      if (navigator.onLine) {
        loadCollectionData('');
      }
    }

    connection.addEventListener('change', updateConnectionStatus);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const loadCollectionData = (searchTerm) => {
    const storageData = api.getFromStorage();
    if (!storageData) {
      return dispatch(getCollection(searchTerm)).then((response) => {
        api.saveOnStorage(response.data);
      });
    }

    dispatch(setCollection(storageData));
  };

  const loadRemoteCollectionData = (searchTerm) => {
    api.cleanCollectionStorage();
    loadCollectionData(searchTerm);
  };

  return (
    <Container className="App">
      <SearchBar loadCollectionData={loadRemoteCollectionData} />
      <Collection list={pictureList} />
    </Container>
  );
};

export default App;
