const { Pool } = require('pg');

const pool = new Pool({
  user: 'u3f4jo9tma4qhn',
  host: 'c7gljno857ucsl.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
  database: 'd94loorj4ih9su',
  password: 'p80d26b47c12c8a0a02bb981b3f73877e3b09b5a57966dbcb6ca1a01fb06d591e',
  port: 5432, 
  dialect: "postgres",
  ssl: false
});
module.exports = pool;
