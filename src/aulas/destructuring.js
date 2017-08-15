/* Destructuring Assigment */
module.exports = (objeto, arr, str) => {

  if (str) {
    const [, api, id, status, ...options] = str.split('/');
    if (status !== 'active') {
      return { api, id, status, options };
    }
    return { api, id, status };
  }

  if (Array.isArray(arr)) {
    const [name, cpf, idade] = arr;
    return { name, cpf, idade };
  }

  const { name } = objeto;

  return name;
}
