import axios from "axios";

// API 1: Usuario
export const userApi = axios.create({
  baseURL: 'https://rimac-front-end-challenge.netlify.app/api/user.json',
  timeout: 10000,
});

// API 2: Planes
export const plansApi = axios.create({
  baseURL: 'https://rimac-front-end-challenge.netlify.app/api/plans.json',
  timeout: 10000,
});