import { AsyncStorage } from "react-native";

const address = "https://sb-api.portocred.com.br/credito-pessoal-demo/v1/";
const client_id = "b4ac3d81-dbdd-39b6-9579-e29b035f6ff0";

export default class PortoCredAPI {
  static getClientes() {
    const uri = address + 'clientes/12345678910';

    const requestInfo = {
      headers: new Headers({
        client_id
      })
    };
    return fetch(uri, requestInfo).then(res => {
      if (res.ok) return res.json();
    });
  }

  static post(method, data) {
    const uri = address + method;

    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
        client_id
      }).catch(err => err)
    };
    return fetch(uri, requestInfo)
      .then(res => {
        return res.json();
      })
      .catch(err => err);
  }
}
