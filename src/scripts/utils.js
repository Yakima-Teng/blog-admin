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
