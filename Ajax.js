// @flow
/* global ActiveXObject: true */
import { pushUserIdKey } from './Config';

function _getXMLHttpRequest() {
  if (window.addEventListener) {
    return new XMLHttpRequest();
  } else {
    return new ActiveXObject('Microsoft.XMLHTTP');
  }
}

function _getFormData() {
  if (window.FormData) {
    let fd = new FormData();
    fd.enctype = 'multipart/form-data';
    return fd;
  }
  return;
}

export function fetchUserId() {
  const uri: string = 'https://www.hello.com/userid';
  const xhr: object = _getXMLHttpRequest();
  let usrId = '';

  xhr.open('GET', uri, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) usrId = xhr.responsText;
  };
  xhr.onerror = () => {
    console.error(err.message);
  };
  xhr.send();

  return usrId: string;
}

export function pushUserId(usrId) {
  const uri: string = 'https://www.hello.com/userid';
  const xhr: object = _getXMLHttpRequest();
  const fd: object = _getFormData();

  fd.append(pushUserIdKey, usrId);
  xhr.open('POST', uri, true);
  xhr.onerror = () => {
    console.error(err.message);
  };
  xhr.send(fd);
}
