import packageConfig from './package.json'

module.exports = {
  apps: [{
    name: packageConfig.name,
    script: './dist/src/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    // max_memory_restart: '2G',
    log_type: 'raw',
    out_file: '/dev/null',
    error_file: '/dev/null',
    env: {
      NODE_ENV: 'production',
    }
  }]
}
