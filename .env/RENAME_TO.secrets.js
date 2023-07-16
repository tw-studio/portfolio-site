//
//  .secrets.js
//  Secrets for development and testing ONLY
//
//  For PRODUCTION secrets on AWS, put these parameters into SSM Parameter Store
//  via the AWS CLI (must be configured)
//
//  Important: Parameter names must begin with SSM_PATH environment variable's
//             value, set in .env/common.env.js (default: '/portfolio-site/prod/')
//
//  For example to put jwtSubMain into SSM Parameter Store:
//    $ aws ssm put-parameter \
//      --name '/portfolio-site/prod/jwtSubMain' \
//      --value 'parameter-value' \
//      --type 'SecureString'
//
//  To verify the parameter:
//    $ aws ssm get-parameters \
//      --name '/portfolio-site/prod/jwtSubMain' \
//      --with-decryption
//
//  To verify all parameters under path:
//    $ aws ssm get-parameters-by-path \
//      --path '/portfolio-site/prod/' \
//      --recursive
//      --with-decryption
//
//  To change the parameter:
//    $ aws ssm put-parameter \
//      --name '/portfolio-site/prod/jwtSubMain' \
//      --value 'new-parameter-value' \
//      --type 'SecureString' \
//      --overwrite

// ADD these to SSM Parameter Store (local and prod values can differ):
const hostname = 'localhost'                // set to domain name in prod (this local value never read)
const jwtAud = 'localhost'                  // set to domain name in prod
const jwtIss = 'localhost'                  // set to domain name in prod
const jwtSubGuest = 'guest'                 // unique value for guest variation
const jwtSubMain = 'main_site'              // unique value for main variation
const secretCookie = ''                     // secret for signing cookie; blank to disable signing
const secretJWT = 'secretJWT secret'        // signed secret for JWT
const secretKeyGuest = 'guest password'     // password for guest variation
const secretKeyMain = 'main password'       // password for main variation
const useDatabase = '0'                     // set to '1' to enable database (also set cdkUseDatabase in cdk's .env/.secrets.js)
const useNextKey = '1'                      // set to '1' to require NextKey to access site. '0' serves main variation without NextKey, but supports site switching at loginPath

// ALSO ADD these to SSM Parameter Store (must match cdk/portfolio-site-cdk/.env/.secrets.js):
//
//   /portfolio-site/prod/dbProdDatabaseName  (e.g. 'portfolio_site_db')
//   /portfolio-site/prod/dbProdPassword      (your database password)
//   /portfolio-site/prod/dbProdPort          (e.g. '6432')
//   /portfolio-site/prod/dbProdUser          (e.g. 'portfolio_site_user')

// DON'T add these to SSM parameter store:
const dbDevPassword = 'change_this_password_right_away!'
const ghaRepoName = '' // only set if repo name different from app name
const rootPwd = '' // absolute path to project root for dev and testing
const useHttpsFromS3 = '' // ignored in dev & test; set by cdk secrets for prod
const useHttpsLocal = '0' // set to '1' to enable https in dev & test (run pnpm https:local:setup)

module.exports = {
  dbDevPassword,
  ghaRepoName,
  hostname,
  jwtAud,
  jwtIss,
  jwtSubGuest,
  jwtSubMain,
  rootPwd,
  secretCookie,
  secretJWT,
  secretKeyGuest,
  secretKeyMain,
  useDatabase,
  useHttpsFromS3,
  useHttpsLocal,
  useNextKey,
}
