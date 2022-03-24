module.exports = [
  {
    "name": "default",
    "type": "mysql",
    "port": 3306,
    "host": process.env.MYSQL_HOST,
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "migrations": [
      "./src/shared/infra/typeorm/migrations/*.ts",
      "dist/shared/infra/typeorm/migrations/*.js"
    ],
    "entities": [
      "./src/models/**/entities/*.ts",
      "dist/models/**/entities/*.js"
    ],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    },
  },
  {
    "name": "mongo",
    "type": "mongodb",
    "url": process.env.MONGODB_URI,
    "database": process.env.MONGODB_NAME,
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    "entities": [
      "./src/models/typeorm/schemas/*.ts",
      "dist/models/typeorm/schemas/*.js",
    ]
  }
];