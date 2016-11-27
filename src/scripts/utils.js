import Mock from 'mockjs'
import mode from './mode.js'
import $ from 'jquery'

/**
 * *********************************************************************************
 *                                                                                  *
 * mode
 * 0 for production environment
 * 1 for local test with backend developer
 * 2 for local test with online test server
 * 3 for offline local test without backend server but validation available
 * 4 for offline local test without backend server but validation unavailable
 *                                                                                  *
 ***********************************************************************************/
exports.config = (() => {
  switch (mode) {
    case 0: return { simulate: false, validate: true, wechatAvailability: true }
    case 1: return { simulate: false, validate: true, wechatAvailability: false }
    case 2: return { simulate: false, validate: true, wechatAvailability: false }
    case 3: return { simulate: true, validate: true, wechatAvailability: false }
    case 4: return { simulate: true, validate: false, wechatAvailability: false }
  }
})()

/**
 * *********************************************************************************
 *                                                                                  *
 * typeOf
 * return 'array', 'object', 'function', 'null', 'undefined', 'string', 'number'
 *                                                                                  *
 ***********************************************************************************/
const typeOf = exports.typeOf = input => {
  return ({}).toString.call(input).slice(8, -1).toLowerCase()
}

/**
 * *********************************************************************************
 *                                                                                  *
 * merge object properties
 *                                                                                  *
 ***********************************************************************************/
const merge = exports.merge = (obj, options) => {
  if (obj && options) {
    for (let p in options) {
      if (typeOf(options[p]) === 'object') {
        merge(obj[p], options[p])
      } else {
        obj[p] = options[p]
      }
    }
  }
  return obj
}

/**
 * *********************************************************************************
 *                                                                                  *
 * mock data
 *                                                                                  *
 ***********************************************************************************/
exports.mock = (url, mockData) => {
  let mockResponse
  Mock.mock(url, options => {
    if (Math.random() < 0.99) {
      mockResponse = mockData.success
    } else if (Math.random() < 0.5) {
      mockResponse = mockData.fail
    } else {
      mockResponse = mockData.error
    }
    if (mode === 3 || mode === 4) {
      // console.log(`URL: ${url}\nRES: ${JSON.stringify(mockResponse, null, '  ')}`)
    }
    return mockResponse
  })
}

/**
 * *********************************************************************************
 *                                                                                  *
 * Ajax post
 * return promise
 *                                                                                  *
 ***********************************************************************************/
exports.post = (url, requestData, options) => {
  return $.ajax(merge({
    url,
    type: 'POST',
    dataType: 'json',
    data: requestData,
    timeout: 30000
  }, options))
}

/**
 * *********************************************************************************
 *                                                                                  *
 * Ajax get
 * return promise
 *                                                                                  *
 ***********************************************************************************/
exports.get = (url, requestData, options) => {
  return $.ajax(merge({
    url,
    type: 'GET',
    dataType: 'json',
    data: requestData,
    timeout: 30000
  }, options))
}

/**
 * 获取链接地址中的查询参数的值
 * @param param
 * @returns {*}
 */
exports.getQueryString = param => {
  const reg = new RegExp('(\\?|&)' + param + '=([^&]*)(&|$)')
  const r = window.location.href.match(reg)
  if (r) return window.decodeURI(r[2])
  else return ''
}

/**
 * 将一位数转化成两位（字符串）
 * @param num
 * @returns {String}
 */
const toDouble = exports.toDouble = num => {
  num = parseInt(num)
  if (num < 10) {
    return '' + 0 + num
  } else {
    return num
  }
}

/**
 * 获取相对于当前日期的日期的字符串形式 => ' 2015-02-12'
 * @param yDiff: could be negative number, 0 refers to current year
 * @param mDiff: could be negative number, 0 refers to current month
 * @param dDiff: could be negative number, 0 refers to current date
 * @returns {string}
 */
exports.getRelativeDateStr = (yDiff, mDiff, dDiff) => {
  let date = new Date()
  let y = date.getFullYear() + yDiff
  let m = date.getMonth() + 1 + mDiff
  let d = date.getDate() + dDiff
  return '' + y + '-' + toDouble(m) + '-' + toDouble(d)
}

/**
 * Date object => ' 2015-06-06'
 * @param date
 * @returns {string}
 */
exports.dateToString = date => {
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  return '' + y + '-' + toDouble(m) + '-' + toDouble(d)
}

exports.formatDateStringToDateForIphone = dateString => {
  if (dateString && dateString.length === 19) {
    // Attention: there is a space between regular expression
    let tempArr = dateString.split(/[- :]/)
    // this date can be parsed normally in all browsers
    return new Date(tempArr[0], tempArr[1] - 1, tempArr[2], tempArr[3], tempArr[4], tempArr[5])
  }
  return new Date(0)
}
