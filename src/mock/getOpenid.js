/**
 * *********************************************************************************
 *                                                                                  *
 * 获取openid
 * params:
 * code: '021WBuNZ11emkY0g6dPZ1C7uNZ1WBuNF'
 *                                                                                  *
 ***********************************************************************************/
const success = {
  costTime: 100,
  errorCode: 'A0000000',
  errorMsg: null,
  responseBody: {
    // 开发号openid
    // openid: 'o-nXEwE_i0DmQmcu2qPbdZMYjk4s'
    // 测试号openid
    // openid: 'o0702w5QgNpoYrC_pDgpzlHep8tU'
    openid: 'o0702wwW47VPw1WC9xpTTIQNofZE'
  },
  status: 200,
  transCode: null
}

const fail = {}

const error = {}

export default {
  success,
  fail,
  error
}
