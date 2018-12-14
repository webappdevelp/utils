/**
 * 格式化日期
 * @param time 时间戳
 * @param format 格式：例如：YYYY-MM-DD hh:mm:ss
 */
export function formatDate(
  time: number,
  format = 'YYYY-MM-DD hh:mm:ss'
): string {
  if (!time) {
    return '';
  }
  const timer =
    JSON.stringify(time).length < 13 ? new Date(time * 1000) : new Date(time);
  const timerObj: any = {
    'Y+': timer.getFullYear(),
    'M+': timer.getMonth() + 1,
    'D+': timer.getDate(),
    'h+': timer.getHours(),
    'm+': timer.getMinutes(),
    's+': timer.getSeconds()
  };
  Object.keys(timerObj).forEach((key: string) => {
    const reg = new RegExp(`(${key})`);
    if (reg.test(format)) {
      format = format.replace(
        reg,
        key === 'Y+'
          ? timerObj[key]
          : `00${JSON.stringify(timerObj[key])}`.substr(-2)
      );
    }
  });
  return format;
}

/**
 * 倒计时
 *
 * @param {HTMLElement} el
 * @param {Function} [callback]
 */
export function cutTimeDown(
  el: HTMLElement,
  callback?: Function,
  times: number = 30
) {
  var interval: any = null,
    cutTime: number = times || 30;

  el.textContent = cutTime + '秒';
  interval = setInterval(function() {
    if (cutTime < 2) {
      cutTime = 30;
      clearInterval(interval);
      interval = null;
      el.textContent = '获取验证码';
      if (callback && callback instanceof Function) {
        callback();
      }
      return;
    }
    cutTime--;
    el.textContent = cutTime + '秒';
  }, 1000);
}
