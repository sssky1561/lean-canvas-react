import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL: baseURL }), options);
  return instance;
}

console.log(
  'import.meta.env.VITE_API_BACE_URL :',
  import.meta.env.VITE_API_BACE_URL,
);

// export const canvases = create(
//   'https://json-server-vercel-dusky-eta.vercel.app/canvases/',
// );

// );
// export const canvases = create(
//   `${import.meta.env.VITE_API_BACE_URL}/canvases/`,
// );
// export const canvases = create('http://localhost:8000/canvases/');
export const canvases = create(
  `${import.meta.env.VITE_API_BACE_URL}/canvases/`,
);
