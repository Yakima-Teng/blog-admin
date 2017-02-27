import Mock from 'mockjs'
import mode from './mode.js'
import $ from 'jquery'

/**
 * typeOf
 * return 'array', 'object', 'function', 'null', 'undefined', 'string', 'number'
 */
const typeOf = input => {
  return ({}).toString.call(input).slice(8, -1).toLowerCase()
}

/**
 * merge object properties
 */
const merge = (obj, options) => {
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
 * print log
 * @param text: string
 */
const doLog = text => {
  if (window && window.console && window.console.log && mode !== 0) {
    window.console.log(text)
  }
}

/**
 * mock data
 * @param url
 * @param mockData
 * @param shouldLog
 */
const doMock = (url = '/', mockData = {}, shouldLog = true) => {
  let mockResponse
  Mock.mock(url, options => {
    if (Math.random() < 0.8) {
      mockResponse = mockData.success
    } else if (Math.random() < 0.5) {
      mockResponse = mockData.fail
    } else {
      mockResponse = mockData.error
    }

    if (shouldLog === true) {
      doLog(`URL: ${url}\nRES: ${JSON.stringify(mockResponse, null, 2)}`)
    }

    return mockResponse
  })
}

/**
 * return promise for post request
 * @param url
 * @param requestData
 * @param options
 * @returns {*}
 */
const doPost = (url = '/', requestData, options) => {
  return $.ajax(merge({
    url,
    type: 'POST',
    dataType: 'json',
    data: requestData,
    timeout: 60000
  }, options))
}

/**
 * return promise for get request
 * @param url
 * @param requestData
 * @param options
 * @returns {*}
 */
const doGet = (url, requestData, options) => {
  return $.ajax(merge({
    url,
    type: 'GET',
    dataType: 'json',
    data: requestData,
    timeout: 60000
  }, options))
}

/**
 * transfer one-digit number to two-digits number, prefixed with '0'
 * @param num
 * @returns {*}
 */
const toDouble = num => {
  num = parseInt(num)
  return num < 10 ? ('' + 0 + num) : num
}

/**
 * get date string, in form of 'yyyy-mm-dd',
 * relative to the current date, as per the specified date difference
 * @param yDiff
 * @param mDiff
 * @param dDiff
 * @returns {string}
 */
const getRelativeDateStr = (yDiff = 0, mDiff = 0, dDiff = 0) => {
  const date = new Date()
  const y = date.getFullYear() + yDiff
  const m = date.getMonth() + 1 + mDiff
  const d = date.getDate() + dDiff
  return `${y}-${toDouble(m)}-${toDouble(d)}`
}

/**
 * transfer instance of Date object to string in form of "yyyy-mm-dd"
 * @param date
 * @returns {string}
 */
const dateToString = (date = new Date()) => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}-${toDouble(m)}-${toDouble(d)}`
}

/**
 * transfer timestamp to string in format of 'yyyy-mm-dd'
 * @param timestamp
 */
const timestampToString = timestamp => dateToString(new Date(timestamp))

/**
 * transfer date string in format of 'yyyy-mm-dd hh:mm:ss' to date object,
 * compatible with IOS devices
 * @param dateString
 * @returns {Date}
 */
const fullStringToDate = dateString => {
  if (dateString && dateString.length === 19) {
    const tempArr = dateString.split(/[-\s:]/)
    // some IOS devices don't support to create date instance by means of new Date('yyyy-mm-dd hh:mm:ss')
    return new Date(tempArr[0], tempArr[1] - 1, tempArr[2], tempArr[3], tempArr[4], tempArr[5])
  }
  return new Date(0)
}

/**
 * transfer date string in format of 'yyyy-mm-dd' to date object,
 * compatible with IOS devices
 * @param dateString
 * @returns {Date}
 */
const stringToDate = dateString => {
  if (dateString && dateString.length === 10) {
    const tempArr = dateString.split(/[-]/)
    // some IOS devices don't support to create date instance by means of new Date('yyyy-mm-dd hh:mm:ss')
    return new Date(tempArr[0], tempArr[1] - 1, tempArr[2])
  }
}

/**
 * judge whether is an IOS device or not
 */
const isIOS = () => (/iphone/i).test(navigator.userAgent.toLowerCase())

/**
 * get 'text' corresponding to specified 'value'in array whose elements look like { value: '', text: '' }
 * @param options
 * @param value
 * @returns {*}
 */
const getOptionText = (options, value) => {
  for (let elem of options) {
    if (elem.value === value) {
      return elem.text
    }
  }
  return value
}

const timestampToFullString = timestamp => {
  if (/^-?[0-9]+$/.test(timestamp) === false) {
    return timestamp
  }
  timestamp = parseInt(timestamp)
  const d = new Date(timestamp)
  const year = new Date(timestamp)
  const month = toDouble(d.getMonth() + 1)
  const day = toDouble(d.getDate())
  const hour = toDouble(d.getHours())
  const minute = toDouble(d.getMinutes())
  const second = toDouble(d.getMinutes())
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

const doSum = arr => {
  let tempSum = arr.reduce((preVal, curVal, idx, array) => {
    return parseFloat(preVal) + parseFloat(curVal || 0)
  }, 0)
  return isNaN(tempSum) ? '' : updateNumber(tempSum)
}

const updateNumber = num => {
  num = '' + num

  // remove spaces
  num = num.replace(/\s/g, '')

  if (!validateNumber(num)) {
    return ''
  }

  // in case of more than two decimal place,
  // truncate decimal place from the third on (including the third decimal space)
  if (/^[0-9]+\.[0-9]{3,}$/.test(num)) {
    num = num.replace(/^([0-9]+\.[0-9]{2})[0-9]{1,}$/, '$1')
  }

  // in case of number ending with '0' in decimal place, truncate the '0'
  if (/^[0-9]+\.[^0]0$/.test(num)) {
    num = num.replace(/^([0-9]+\.[^0])0$/, '$1')
  }

  // in case of all decimal number being '0' or no decimal place exists but dot symbol exists,
  // retain the integer part
  if (/\.[0]*$/.test(num)) {
    num = num.replace(/\.[0]*$/, '')
  }
  return num
}

const calculateTextWidth = (text, fontSize = '14px') => {
  const $sensor = $(`<pre>${text}</pre>`).css({
    'display': 'none',
    'font-size': fontSize
  })
  $('body').append($sensor)
  const width = $sensor.width()
  $sensor.remove()
  // avoid too small width for input field
  return width < 40 ? 40 : width
}

const validatePhone = phone => /^1[3-8]\d{9}$/.test(phone)

const validateNumber = num => /(^[1-9][0-9]*$)|(^[1-9][0-9]*\.[0-9]+$)|(^0$)|(^0\.[0-9]+$)/.test(num)

export {
  typeOf,
  merge,
  doLog,
  doMock,
  doPost,
  doGet,
  toDouble,
  getRelativeDateStr,
  dateToString,
  timestampToString,
  fullStringToDate,
  stringToDate,
  isIOS,
  getOptionText,
  timestampToFullString,
  doSum,
  updateNumber,
  calculateTextWidth,
  validatePhone,
  validateNumber
}
