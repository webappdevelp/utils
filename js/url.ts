/**
 * 获取url参数
 * @param name 参数名
 */
export function getQueryString(
  name: string,
  url: string = window.location.search.substr(1)
) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = url.match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
