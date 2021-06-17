const config = {
  host: process.env.NODE_ENV === "production" ? (`https://${process.env.VERCEL_URL}` || "https://portfolio-git-master-jpdjere.vercel.app/") : "http://localhost:3000"
}

export default config;