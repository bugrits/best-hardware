export const API_HOST =
  process.env.NODE_ENV === "production"
    ? "http://vijao.link:5000"
    : "http://localhost:5000";
