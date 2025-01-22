import http from 'k6/http';

export const options = {
	stages: [
    		{ duration: '2s', target: 200 }, // ramp-up
    		{ duration: '30s', target: 200 }, // stable
    		{ duration: '2s', target: 0 }, // ramp-down 
  	],
};

export default () => {
  http.get('http://api:3000/soma?n1=5000&n2=700');
};