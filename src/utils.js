var utils = {
  getNewArr(arrs) {
    //数组对象提取value数组
    let newArr = arrs.map((item) => {
      let curKey = Object.keys(item) //Object.keys可以提取出对象中的key值,注意取出的key是数组
      return item[curKey[0]]
    })
    return newArr
  },
  /**
   * 对象数组修改键名
   * arr：数组
   * keyObj : 需要修改的键名
   * 格式
   * { 原始键名,'更改键名'
   * }
   **/
  replaceObjectKey(arr, keyObj) {
    arr.forEach((item, index) => {
      Object.keys(item).forEach((itemKey) => {
        const newKey = keyObj[itemKey]
        if (newKey) {
          item[newKey] = item[itemKey]
          // 删除原始key名
          delete item[itemKey]
        }
      })
    })
    return arr
  },
  /**
   * 对象数组找到最大值
   *
   **/
  // getNewArrObj(arr, value) {
  //   // console.log('value: ', value)
  //   // let NewValue = Math.max(...arr.map((x) => x.id))
  //   let NewValue = Math.max(
  //     ...arr.map((x) => {
  //       x.value
  //     })
  //   )
  //   return NewValue
  // }
  /**
   * 截取浏览器url拼接参数
   *
   **/
  parseUrl(url) {
    // 找到url中的第一个?号
    var parse = url.substring(url.indexOf('?') + 1),
      params = parse.split('&'),
      len = params.length,
      item = [],
      param = {}
    for (var i = 0; i < len; i++) {
      item = params[i].split('=')
      param[item[0]] = item[1]
    }
    return param
  },
  /**
   * 多维取数组最大值
   **/
  getArrMax(arr) {
    // 数组扁平化
    arr = arr.flat(Infinity)
    return Math.max(...arr)
  },
  /**
   * 多维取数组最小值
   **/
  getArrMin(arr) {
    // 数组扁平化
    arr = arr.flat(Infinity)
    return Math.min(...arr)
  },
  /**
   * 前端处理大数
   **/
  UtilHandleBigData(data, callback, pageSize = 100) {
    console.time('列表时间')
    let totalCount = data.length // 共多少条
    let currentPageNumber = 1 // 当前页数
    let totalPageNumer = Math.ceil(totalCount / pageSize) //可分多少页,就是分割为多少个小数组
    let handler = () => {
      let start = (currentPageNumber - 1) * pageSize
      let end = currentPageNumber * pageSize
      let currentData = data.slice(start, end) // 当前页的数据
      if (typeof callback === 'function') {
        callback(currentData, {
          totalCount,
          totalPageNumer,
          currentPageNumber,
          pageSize
        })
      }
      console.log(
        `共${totalCount}条,共${totalPageNumer}页,当前第${currentPageNumber}条`
      )
      if (currentPageNumber < totalPageNumer) {
        window.requestAnimationFrame(handler)
      }
      currentPageNumber++
      console.timeEnd('列表时间')
    }
    handler()
  },
  /**
   * 数组转对象数组
   * 第一个参数为一个纯数组，第二个为name所需要的值
   **/
  createData(list, prefix) {
    return Object.keys(list).map((val) => ({
      name: prefix,
      value: list[val]
    }))
  },
  /**
   * 生成随机范围数组
   * 1、长度 2、最小值 3、最大值
   **/
  randArray2(len, min, max) {
    return Array(len)
      .fill(1)
      .map((v) => Math.floor(Math.random() * (max - min)) + min)
  }
}

export default utils
