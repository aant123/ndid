import axios from 'axios'

export function getData(path){
    const idp = axios.get(path)
    .then(response => {
        console.log('response',response);
        console.log('response.data',response.data);
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      })
      return idp;
}
