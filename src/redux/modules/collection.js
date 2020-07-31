import { createStructuredSelector } from 'reselect';

// CONSTANT

const COLLECTION_REQUEST = 'tacx/collection/COLLECTION_REQUEST';
const COLLECTION_SUCCESS = 'tacx/collection/COLLECTION_SUCCESS';
const COLLECTION_FAILURE = 'tacx/collection/COLLECTION_FAILURE';

const SET_COLLECTION = 'tacx/collection/SET_COLLECTION';

// INITIAL STATE
const initialState = {
  isLoading: false,
  isError: false,
  pictureList: [],
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case COLLECTION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case COLLECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        pictureList: [...action?.payload?.data?.artObjects],
      };
    case COLLECTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case SET_COLLECTION:
      return {
        ...state,
        pictureList: [...action?.payload?.data?.artObjects],
      };
    default:
      return state;
  }
};

// ACTIONS

export const setCollection = (collectionData) => ({
  type: SET_COLLECTION,
  payload: { data: collectionData },
});

// THUNKS
export const getCollection = (searchTerm) => ({
  types: [COLLECTION_REQUEST, COLLECTION_SUCCESS, COLLECTION_FAILURE],
  promise: (client) =>
    client.get('/collection', {
      params: { q: searchTerm },
    }),
});

/*
  SELECTOR
*/

export const collectionSelector = createStructuredSelector({
  pictureList: (state) => state.collection.pictureList,
  isLoading: (state) => state.collection.isLoading,
  isError: (state) => state.collection.isError,
});
