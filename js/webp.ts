  /**
   * 检测当前浏览器是否支持webp图片格式
   *
   * @param {Function} callback
   */
  export function checkWebP(callback: Function) {
    var hasWebp = false;
    if (window.localStorage) {
      hasWebp = !!window.localStorage.getItem('webp');
      if (!hasWebp) {
        var img = new Image();
        img.onload = function() {
          hasWebp = img.width > 0 && img.height > 0;
          window.localStorage.setItem('webp', JSON.stringify(hasWebp));
          if (callback && callback instanceof Function) {
            callback(hasWebp);
          }
        };
        img.onerror = function() {
          if (callback && callback instanceof Function) {
            callback(hasWebp);
          }
        };
        img.src =
          'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
      } else if (callback && callback instanceof Function) {
        callback(hasWebp);
      }
    }
  }