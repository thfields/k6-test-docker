import http from 'k6/http';

export default () => {
  http.get('http://api:3000/soma?n1=1500&n2=600');
};
