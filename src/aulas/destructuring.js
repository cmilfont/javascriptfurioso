module.exports = (objeto, arr, str) => {

  if (str) {
    const [, api, id, status] = str.split('/');
    return { api, id, status };
  }

  if (Array.isArray(arr)) {
    const [name, cpf, idade] = arr;
    return { name, cpf, idade };
  }

  const { name } = objeto;

  return name;
}
