
const address = "https://sb-api.portocred.com.br/credito-pessoal-demo/v1/";
const client_id = "b4ac3d81-dbdd-39b6-9579-e29b035f6ff0";

export default class PortoCredAPI {
  static getClient() {
    const uri = address + 'clientes/12345678910';

    const requestInfo = {
      headers: new Headers({
        client_id
      })
    };
    return fetch(uri, requestInfo).then(res => {
      return res.json();
    });
  }

  static getPropose(number) {
    const uri = address + `propostas/${number}/status`;

    const requestInfo = {
      headers: new Headers({
        client_id
      })
    };
    return fetch(uri, requestInfo).then(res => {
      return res.json();
    });
  }
}
