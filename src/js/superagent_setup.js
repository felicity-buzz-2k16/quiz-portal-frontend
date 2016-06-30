import request from 'superagent-use'
import { getPath } from './helpers'

var prefix;
if (DEV) prefix = require('superagent-prefix')('http://localhost:3000/api');
else prefix = require('superagent-prefix')(getPath('/api'));

request.use(prefix)
request.use(req => req.type('form'))

window.request = request
