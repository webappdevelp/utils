// 获取客户端系统环境
export function getPlatForm() {
  return window.navigator.userAgent.indexOf('Android') > -1 ||
    window.navigator.userAgent.indexOf('Adr') > -1
    ? 'Android'
    : 'ios';
}
