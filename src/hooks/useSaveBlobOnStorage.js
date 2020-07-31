export default function useSaveBlobOnStorage(fileUri) {
  const file = localStorage.getItem(fileUri);

  if (file) {
    console.log('veio do cache');
    return { file };
  }
  console.log('não veio do cache');

  localStorage.setItem(fileUri, fileUri);
  return { file: fileUri };
}
