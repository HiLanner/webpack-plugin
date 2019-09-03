
const loaderUtils = require("loader-utils");
/**
 * loader Function
 * @param {String} content 文件内容
 */
module.exports = function(content){
  // const options = loaderUtils.getOptions(this);
  //   console.log('***options***', options)
  // return "{cslcslcsl};" + content
  var callback = this.async();
  asyncGetData(content, function(err, res) {
    callback(err, res)
  })

}

function asyncGetData (content, cb) {
  setTimeout(function(){
    cb(false,`{cslcslcsl};${content}` )
  }, 1000)
}