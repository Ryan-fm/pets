import Vue from 'vue'
import { basename } from 'path';

// locaStorage 存储数据
Vue.prototype.getDate = function (name) {
    try {
        return JSON.parse(localStorage.getItem(name))
    } catch (error) {
        return localStorage.getItem(name)
    }
}
Vue.prototype.setData = function (name,value) {
    if(name) {
        if(typeof value === 'string') {
            localStorage.setItem(name,value);
        }else {
            localStorage.getItem(name,JSON.stringify(value))
        }
    }
}

// session 存储数据
Vue.prototype.getSession = function (name) {
    try {
        return JSON.parse(sessionStorage.getItem(name));
      } catch (err) {
        return sessionStorage.getItem(name);
      }
}
Vue.prototype.setSession = function(name, value) {
    // sessionStorage
    if (name) {
      if (typeof value === 'string') {
        sessionStorage.setItem(name, value);
      } else {
        sessionStorage.setItem(name, JSON.stringify(value));
      }
    }
  }