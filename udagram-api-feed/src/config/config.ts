
export const config = {
  database: {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASS,
    "name": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
  },
  aws: {
    "region": process.env.AWS_REGION,
    "profile": process.env.AWS_PROFILE,
    "media_bucket": process.env.AWS_BUCKET
  },
  url: process.env.URL,
  jwt: {
    "secret": "helloworld"
  }
  // "prod": {
  //   "username": "",
  //   "password": "",
  //   "database": "udagram_prod",
  //   "host": "",
  //   "dialect": "postgres"
  // }
}
