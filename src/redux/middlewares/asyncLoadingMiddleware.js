export const setLoader = (loading = [], resource) => {
  if (loading.includes(resource)) return [...loading];
  return [...loading, resource];
};

export const removeLoader = (loading = [], resource) => {
  if (!loading.includes(resource)) return [...loading];
  return [...loading.filter((_resource) => _resource !== resource)];
};

function createAsyncLoadingMiddleware() {
  return ({ getState }) => (next) => (action) => {
    const { resource, type, module } = action;

    if (!resource || !module) return next(action);
    const { loading } = getState()[module];

    if (
      !type.includes('REQUEST') &&
      !type.includes('SUCCESS') &&
      !type.includes('ERROR')
    ) {
      console.warn(
        `action: ${action.type} has a resource but isn't a valid async action (REQUEST/SUCCESS/ERROR)`
      );
      return next(action);
    }

    const loadingList = (type.endsWith('REQUEST') ? setLoader : removeLoader)(
      loading,
      resource
    );

    return next({ ...action, loading: loadingList });
  };
}

const asyncLoadingMiddleware = createAsyncLoadingMiddleware();
export default asyncLoadingMiddleware;
