import axios from 'axios'


function empty() {}
const defaultOption = {
  success: empty,
  error: empty,
  data: {},
  url: ''
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


function downFile(result, fileName = 'xxx') {
  var blob = new Blob([result], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
  });　　
  var downloadElement = document.createElement('a');　　
  var href = window.URL.createObjectURL(blob);　　
  downloadElement.href = href;　　
  downloadElement.download = `${fileName}.xlsx`;　　
  document.body.appendChild(downloadElement);　　
  downloadElement.click();　　
  document.body.removeChild(downloadElement);　　
  window.URL.revokeObjectURL(href);
}

export default function(option) {
  // var option = Object.assign({}, defaultOption, option);
  // const token = Cookies.get("token");
  // if (!option.noChangeTime && option.data.starttime) {
  //     option.data.starttime += ' 00:00:00'
  // }
  // if (!option.noChangeTime && option.data.startTime) {
  //     option.data.startTime += ' 00:00:00'
  // }
  // if (!option.noChangeTime && option.data.starTime) {
  //     option.data.starTime += ' 00:00:00'
  // }
  // if (!option.noChangeTime && option.data.endtime) {
  //     option.data.endtime += ' 23:59:59'
  // }
  // if (!option.noChangeTime && option.data.endTime) {
  //     option.data.endTime += ' 23:59:59'
  // }
  // option.data.token = this.gettoken();
  // option.data.token = '3418225f-9780-4789-a9f8-614f564ce901';
  // window.AndroidJs.showLoading();
  var self = this;
  axios({
    method: 'POST',
    url: option.url,
    headers: {
      'Content-Type': 'application/json',
    },
    data: option.data,
    responseType: option.downloadFile ? 'blob' : 'json'
  }).then(function(response) {
    // window.AndroidJs.dismissLoading()
    console.log(response);
    const {
      data
    } = response;
    if (response.status == 200) {
      if (option.downloadFile) {
        downFile(response.data, option.fileName);
        option.success();
        return;
      }
      if (data.status == 1) {
        option.success(data);
      } else if (data.status == 0) {
        // window.AndroidJs.showToast(data.msg || "网络连接错误")
        if (data.errorCode === "0002") {
          // window.AndroidJs.jumpLogin()
        }
        if (data.errorCode === "0003") {
          window.location.href = `${window.__env__config__.homeurl}`;
        }
      } else {
        // window.AndroidJs.showToast(data.msg || "网络连接错误")
        option.error(data.msg || '请求失败');

      }
    } else {
      // window.AndroidJs.showToast(data.msg || "网络连接错误")
      option.error(data.msg || '请求失败');
      // alert(error);
    }
  }).catch(function(error) {
    // window.AndroidJs.dismissLoading()
    // window.AndroidJs.showToast("网络连接错误")
    // alert(error);
    option.error('请求失败');
    console.log(error);
  });
}