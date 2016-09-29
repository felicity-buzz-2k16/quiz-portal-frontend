import request from 'superagent-use'
import { getPath } from './helpers'

var prefix;
if (DEV) prefix = require('superagent-prefix')(`http://localhost:${BACKEND_PORT}/api`);
else prefix = require('superagent-prefix')(getPath('/api'));

request.use(prefix)
request.use(req => req.type('form'))

window.request = request
