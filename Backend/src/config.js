import dotenv from "dotenv";

// ejecutamos la libreria dotenv
dotenv.config();

export const config = {
  db: {
    URI: process.env.DB_URI,
  },
  server: {
    PORT: process.env.PORT,
  },
  JWT: {
    secret: process.env.JWT_SECRET,
    expires: process.env.JWT_EXPIRES,
  },
  
};
