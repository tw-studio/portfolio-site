// 
// common.env.js
// 
const ghaRepoName = process.env.GHA_REPO_NAME ?? ''

const envCommon = {
  GHA_REPO_NAME: ghaRepoName,
  HOSTNAME: 'localhost',
  JWT_ALG: 'HS512',
  JWT_AUD: '',
  JWT_EXP_IN_SEC: 604800,  // 1 day = 86400; 1 week = 604800
  JWT_ISS: '',
  JWT_NAME: 'access_token',
  JWT_SUB_GUEST: '',
  JWT_SUB_MAIN: '',
  KEY_NAME: 'theKey',
  LOCKPAGE_EXPORT_DIR: 'lockpage/export',
  LOCKPAGE_PUBLIC_DIR: 'lockpage/public',
  NEXT_PUBLIC_LOGIN_PATH: '/enter/',
  NODE_TLS_REJECT_UNAUTHORIZED: '1',
  REGION: 'us-west-2',
  ROOT_PWD: '.',
  SECRET_COOKIE: '',
  SECRET_JWT: '',
  SECRET_KEY_MAIN: '',
  SECRET_KEY_GUEST: '',
  SSM_PATH: '/portfolio-site/prod/',
  USE_DATABASE: '',
  USE_HTTPS_FROM_S3: '',
  USE_HTTPS_LOCAL: '0',
  USE_NEXTKEY: '',
}

module.exports = envCommon
