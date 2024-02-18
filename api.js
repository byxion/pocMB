import axios from 'axios';

// Non fonctionnelle car localhost
export const wordpressApi = axios.create({
    baseURL: 'http://localhost/wp-json/custom-api/v1/',
});

export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});
