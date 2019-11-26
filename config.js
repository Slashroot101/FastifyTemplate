module.exports = {
  db: {
    host: process.env.dbHost || 'localhost',
    dialect: 'mssql',
    maxConnectionSockets: 10,
    minConnectionSockets: 5,
    connectionAcquisitionRate: 30000,
    databaseName: process.env.dbName || '',
    username: process.env.adminUser || '',
    password: process.env.password || '<YourStrong@Passw0rd>',
    connectionIdleRate: 10000,
    port: 1433,
    //DO NOT TURN THIS TO TRUE YOU WILL DROP EVERY TABLE
    forceTableCreation: false,
    shouldLog: true,
  },
  shouldFastifyLog: true,
  serverHost:  process.env.serverAddress || '0.0.0.0' ,
  port: process.env.port || '3001',
};
