const loaderUtils = require("loader-utils");
/**
 * loader Function
 * @param {String} content 文件内容
 */
module.exports = function(content){
  const options = loaderUtils.getOptions(this);
  console.log('***options***', options)
  console.log('***this data***', this.data.value)
  return "{1111111111};" + content

}

module.exports.pitch = (remaining, preceding, data) => {
  console.log('***remaining***', remaining)
  console.log('***preceding***', preceding)
  // data会被挂在到当前loader的上下文this上在loaders之间传递
  data.value = "test"
}