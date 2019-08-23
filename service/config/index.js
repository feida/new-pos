/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */
let NODE_ENV = process.env.NODE_ENV;
NODE_ENV = NODE_ENV ? NODE_ENV.toLowerCase() : null;

if(NODE_ENV != 'dev' && NODE_ENV != 'exe' && NODE_ENV != 'box'&& NODE_ENV != 'ios'){
    throw new Error('NODE_ENV must be "dev" or "exe" or "box" or "ios"');
}
const config  = require('./' + NODE_ENV);
module.exports = config;