/**
 * Created by Yakima Teng on 2017/2/27.
 */

/**
 * mode
 * 0 for production environment
 * 1 for local test with backend developer
 * 2 for local test with online test server
 * 3 for offline test without backend server but validation available
 * 4 for offline test without backend server but validation unavailable
 */
'use strict'
const mode = 0

let config

switch (mode) {
  case 0:
    config = { simulate: false, validate: true }
    break
  case 1:
    config = { simulate: false, validate: true }
    break
  case 2:
    config = { simulate: false, validate: true }
    break
  case 3:
    config = { simulate: true, validate: true }
    break
  case 4:
    config = { simulate: true, validate: false }
    break
}

module.exports = {
  mode: mode,
  config: config
}
