import http from 'k6/http';

export const options = {
	vus: 5,
	duration: '30s'
};

export default () => {
  http.get('http://api:3000/soma?n1=1110&n2=734');
};