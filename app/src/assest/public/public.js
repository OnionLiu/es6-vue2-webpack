class common {
  constructor () {

  }

  // get user device 
  getUserDevice() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
    var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
    var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
    var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
    var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
    var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
    var bIsAndroid = sUserAgent.match(/android/i) == 'android';

    if(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid ){
      return true; // mobile
    } else {
      return false;
    }
  }
  // set font size of user device width
  setPublicFontSize (psdWidth) {
    let deviceWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.availWidth;

    document.querySelector('html').style.fontSize = deviceWidth / (psdWidth/100) + 'px';
  }
  // set cookie
  setCookie (key, value, expireDays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expireDays); // 以天为单位
    document.cookie = key + "=" + JSON.stringify(value) + ((expireDays === null) ? "" : ";expires=" + exdate.toGMTString());
  }
  // get cookie
  getCookie (key) {
    let arr,
        reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
 
    if(arr = document.cookie.match(reg)) {
      return JSON.parse(arr[2]);
    } else {
      return "";
    }
  }
  // get URL params
  getUrlParam (name) {
    let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
  }
  // alert detail
  alertDetail (text, callBack) {
    // bg
    let alertDetailBg = document.createElement("div");
    alertDetailBg.setAttribute("id", "alertDetailBg");
    alertDetailBg.addEventListener("click", function (event) {
      alertDetailClose(event);
    })
    // content
    let alertDetailContent = document.createElement("div"),
        alertDetailCloseBtn = document.createElement("button"),
        alertDetailConfirmBtn = document.createElement("button");

    alertDetailContent.setAttribute("id", "alertDetailContent");
    // close
    alertDetailCloseBtn.setAttribute("id", "alertDetailClose");
    alertDetailCloseBtn.addEventListener("click", function (event) {
      alertDetailClose(event);
    })
    alertDetailCloseBtn.innerText = "x";
    // confirm
    alertDetailConfirmBtn.setAttribute("id", "alertDetailConfirm");
    alertDetailConfirmBtn.addEventListener("click", function (event) {
      alertDetailClose(event);
    })
    alertDetailConfirmBtn.innerText = "确定";
    // 推入内容
    alertDetailContent.innerHTML = `
      <p>${text}</p>
    `;
    alertDetailContent.appendChild(alertDetailCloseBtn);
    alertDetailContent.appendChild(alertDetailConfirmBtn);
    document.body.appendChild(alertDetailBg);
    document.body.appendChild(alertDetailContent);

    // close event function
    function alertDetailClose (event) {
      event.stopPropagation();
      document.body.removeChild(alertDetailContent);
      document.body.removeChild(alertDetailBg);
      if (typeof callBack === 'function') {
        callBack();
      }
    }
  }
  // timestamp to time
  timestampToTime(timestamp) {
    let date = new Date(timestamp * 1000);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y + M + D + h + m + s;
  }
  // 
  getUserIfOnline(url) {
    // 检测用户是否登录
    if (publicFunObj.getCookie("loginInfo")) {
      // 检测用户设备
      if (publicFunObj.userDevice()) {
      //   let localHref = (url === "/") ? '/mobileLayout' : url.replace('pcLayout', 'mobileLayout');
      //   if (url !== localHref) {
      //     window.location.href = '#' + localHref;
      //   }
      //   return "mobile";
      // } else {
      //   let localHref = (url === "/") ? '/pcLayout' : url.replace('mobileLayout', 'pcLayout');
      //   if (url !== localHref) {
      //     window.location.href = '#' + localHref;
      //   }
      //   return "pc";
      }
    } else {
      window.location.href = "#/login";
    }
  }
  // 
  dataPagination(pageNum, data) {
    let rtnData = {},
        rtnDataIndex = 0;
    if (pageNum*10 < data.length && pageNum*10 + 10 <= data.length) {
      for (let i = pageNum; i < pageNum + 10; i++) {
        rtnData[rtnDataIndex] = data[i];
        rtnDataIndex++;
      }
      return rtnData;
    } else if (pageNum*10 < data.length && pageNum*10 + 10 > data.length) {
      for (let i = pageNum; i < pageNum + (data.length - pageNum) ; i++) {
        rtnData[rtnDataIndex] = data[i];
        rtnDataIndex++;
      }
      return rtnData;
    } else {

    }
  }
}

export default common;
