/*
storage封装
*/

const STORAGE_KEY = 'mall'

export default {
  setItem(key, value, module_name) {
    /* 如果模块名称(user)存在，先获取模块名称的值*/
    if (module_name) {
      // let val = this.getStorage()[module_name];
      let val = this.getItem(module_name);
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage();
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }


  },
  getItem(key, module_name) {
    /* 如果模块名称(user)存在 获取模块名称的值*/
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val(key)
    }
    return this.getStorage()[key]

  },
  getStorage() {
    /* 浏览器中存储格式：user是module_name
      "mall": "{"user": "{"username":"chloe","age": 29, "sex": "woman"}"}"
      并以Json字符串的形式存储
    */
    return JSON.stringify(window.sessionStorage.getItem(STORAGE_KEY || "{}"))
  },
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      if (!val[module_name]) return;
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }

}
