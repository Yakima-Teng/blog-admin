/**
 * *********************************************************************************
 *                                                                                  *
 * 获取订单列表
 * url: /wechat/policyManage/toActivity/1
 * params:
 * openId: 'o0702w5QgNpoYrC_pDgpzlHep8tU'
 * 回参：
 * 订单号：policyNo
 * 保险公司：insuranceCompany
 * 车主姓名：ownerName
 * 日期：createDate
 * 状态：orderStatus
 * 总价：premium
 *                                                                                  *
 ***********************************************************************************/
// const success = {
// 	"transCode": null,
// 	"responseBody": [{
// 		"id": "ff80808158672dc301586acd72610051",
// 		"premium": "3133.00",
// 		"ownerName": "钱亚军",
// 		"detailedCompareId": "ff80808158672dc301586acbce3f0049",
// 		"userId": "ff8080815819e3d0015819f91da50004",
// 		"orderStatus": "0",
// 		"vciPremium": 3133.0,
// 		"iciPremium": 0.0,
// 		"travelTax": 0.0,
// 		"phone": "13636487395",
// 		"insuranceCompany": "5",
// 		"remark": "你几点",
// 		"address": "内蒙古-通辽-你们",
// 		"postCode": null,
// 		"autoLicense": "沪FB6555",
// 		"policyNo": "DD2016111610004",
// 		"autoUser": null,
// 		"createDate": "2016-11-16 09:43:18.0",
// 		"updateDate": "2016-11-16 09:43:18.0",
// 		"isUsed": "1",
// 		"payStatus": "2",
// 		"actualPayAmount": 100.0
// 	}],
// 	"costTime": null,
// 	"errorCode": "A0000000",
// 	"errorMsg": "成功",
// 	"status": null
// }

const success = {
	"transCode": null,
	"responseBody": [{
		"id": "ff8080815871a9b001587228ac2b0087",
		"dealId": null,
		"premium": "2689.02",
		"ownerName": "刘敏",
		"detailedCompareId": "ff8080815871a9b001587223e3ef0084",
		"userId": "ff808081586cdb6f01587196271e02b6",
		"orderStatus": "1",
		"vciPremium": 2689.02,
		"iciPremium": 0,
		"travelTax": 0,
		"phone": "13501883494",
		"insuranceCompany": "1",
		"remark": "",
		"address": "上海-上海-你好",
		"postCode": null,
		"autoLicense": "沪H01297",
		"policyNo": "DD2016111710008",
		"autoUser": null,
		"createDate": "2016-11-17 20:00:17.0",
		"updateDate": "2016-11-17 20:00:17.0",
		"isUsed": "1",
		"payStatus": "2",
		"actualPayAmount": 2600
	}],
	"costTime": null,
	"errorCode": "A0000000",
	"errorMsg": "成功",
	"status": null
}

const fail = {
	"transCode": null,
	"responseBody": null,
	"costTime": null,
	"errorCode": "A0000003",
	"errorMsg": "系统异常！请稍后再试！",
	"status": null
}

const error = {}

export default {
	success,
	fail,
	error
}