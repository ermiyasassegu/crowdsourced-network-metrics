// eslint-disable-next-line unicorn/prefer-module
module.exports = api => {
  api.cache(true)
  return {
    presets: [ 'babel-preset-expo' ]
  }
}
