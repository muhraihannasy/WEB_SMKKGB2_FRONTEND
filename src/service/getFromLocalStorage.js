function getFromLocalStorage(name_storage) {
  const data = JSON.parse(localStorage.getItem(name_storage));

  return data;
}

export default getFromLocalStorage;
