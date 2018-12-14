  /**
   * 设置cookie
   *
   * @param {string} cName
   * @param {string} value
   * @param {number} expiredays
   */
  export function setCookie(cName: string, value: string, expiredays: number = 7) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie =
      cName +
      '=' +
      escape(value) +
      (expiredays == null ? '' : ';expires=' + exdate.toUTCString());
  }
  /**
   * 获取cookie
   *
   * @param {string} cName
   * @returns
   */
  export function getCookie(cName: string) {
    let arr;
    const reg = new RegExp('(^| )' + cName + '=([^;]*)(;|$)');

    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }
  /**
   * 设置cookie过期
   *
   * @param {string} cName
   */
  export function delCookie(cName: string) {
    const expData = new Date();
    expData.setTime(expData.getTime() - 1);
    const cval = getCookie(cName);
    if (cval != null)
      document.cookie =
        cName + '=' + cval + ';expires=' + expData.toUTCString();
  }