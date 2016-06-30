import request from 'superagent-use'
import { getPath } from './helpers'
import auth from './auth'

var prefix;
if (DEV) prefix = require('superagent-prefix')('http://localhost:3000/api');
else prefix = require('superagent-prefix')(getPath('/api'));

request.use(prefix)
request.use(req => req.type('form'))
request.use(req => auth.token && req.set('Authorization', auth.token))

window.request = request
