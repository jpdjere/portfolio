const config = {
  host: process.env.NODE_ENV === "production" ? process.env.VERCEL_URL : "http://localhost:3000"
}

export default config;