const PUBLIC_PATH = process.env.PUBLIC_PATH ? (
                      process.env.PUBLIC_PATH.endsWith('/') ?
                        process.env.PUBLIC_PATH :
                        process.env.PUBLIC_PATH + '/'
                    ) : '/'

module.exports = {
  DEV: process.env.NODE_ENV != 'production',
  PROD: process.env.NODE_ENV == 'production',
  PUBLIC_PATH: `'${PUBLIC_PATH}'`,
  BACKEND_PORT: process.env.BACKEND_PORT || 3000,
}
