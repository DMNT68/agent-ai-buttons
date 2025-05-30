import dotenv from 'dotenv';

dotenv.config();

// app
export const NODE_ENV = process.env.NODE_ENV || 'dev';
export const PORT = Number(process.env.APP_PORT) || 4000;
export const RETELL_API_KEY_3MT = process.env.RETELL_API_KEY_3MT || 'agregarelaclave';
export const RETELL_API_KEY_WSC = process.env.RETELL_API_KEY_WSC || 'agregarelaclave';
export const RETELL_API_KEY_AIC = process.env.RETELL_API_KEY_AIC || 'agregarelaclave';
export const HOSTNAME = process.env.HOSTNAME || `http://localhost:${PORT}`;
export const HOSTWEB = process.env.HOSTWEB || 'http://127.0.0.1:5173';
export const TZ = process.env.TZ || 'America/Guayaquil';
export const SECRETORPRIVATEKEY = process.env.SECRETORPRIVATEKEY || 'a4pliCacionD3w3-|_|';
