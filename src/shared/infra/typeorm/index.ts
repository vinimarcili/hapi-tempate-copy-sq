import { Connection, createConnections, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection[]> => {
  try {
    const defaultMySQLOptions = await getConnectionOptions("default");
    const defaultMongoOptions = await getConnectionOptions("mongo");
    
    return createConnections([
      Object.assign(defaultMySQLOptions, {
        database: defaultMySQLOptions.database,
      }),
      Object.assign(defaultMongoOptions, {
        database: defaultMongoOptions.database,
      }),
    ]);
  } catch (err) {
    console.log(err)
  }
};