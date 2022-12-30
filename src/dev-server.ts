import * as dotenv from 'dotenv';
const result = dotenv.config();
console.log(result.parsed)
require('./server');
