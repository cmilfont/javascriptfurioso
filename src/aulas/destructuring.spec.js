const destructuring = require('./destructuring.js');

describe("Aprendendo sobre destructuring", () => {

  it("Criar variáveis a partir de um json", () => {
    const json = {
      name: 'Milfont'
    }
    expect(destructuring(json)).toEqual('Milfont');
  });

  it("Criar variáveis a partir de um array", () => {
    const name = "Milfont";
    const cpf = "78006325593";
    const idade = 39
    const arr = [name, cpf, idade];
    expect(destructuring(null, arr)).toEqual({ name, cpf, idade });
  });

  it("Criar objeto a partir de uma string", () => {
    const url = "/users/3467/active";
    expect(destructuring(null, null, url)).toEqual({ api: 'users', id: '3467', status: 'active' });
  });

  it('Criar objeto com uma sobra de argumentos a partir de um array', () => {
    const url = "/users/3467/company/3456/address";
    expect(destructuring(null, null, url)).toEqual({ api: 'users', id: '3467', status: 'company', options: [ '3456', 'address'] });
  });

});
