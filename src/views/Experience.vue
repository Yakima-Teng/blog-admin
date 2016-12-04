<template>
  <transition name="fade">
    <div class="experience">
      <div v-for="item in experience" :class="{ 'ignore' : !item.important }" class="item-normal">
        <header class="item-header">{{item.title}}</header>
        <article class="item-details">
          <p v-for="detail in item.details" :class="{ 'ignore' : !detail.important }" class="item-detail">{{detail.text}}</p>
        </article>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'experience',
    data () {
      return {
        experience: [
          {
            title: '2015.12-NOW',
            important: true,
            details: [
              {
                text: '任职上海优保网络科技有限公司·前端开发岗',
                important: true
              },
              {
                text: '公司规模比较小，团队构成：1名JAVA直属领导+3名JAVA后端+1名前端+1名设计+1名测试',
                important: false
              },
              {
                text: '期间负责公司微信项目和PC端后台管理系统的前端开发',
                important: true
              },
              {
                text: '期间领导主动帮我申请过加薪（被北京总部以入职不到一年为由回绝）',
                important: false
              },
              {
                text: '期间获得过团队一年仅一个的优秀名额',
                important: false
              },
              {
                text: '期间前公司一位非本部领导曾询问是否有意向去安徽子公司组建药品注册团队',
                important: false
              }
            ]
          },
          {
            title: '2015.07-2015.10',
            important: false,
            details: [
              {
                text: '自学前端，主要是看书敲代码，不喜欢看视频学',
                important: false
              },
              {
                text: '期间前公司一个合作公司的领导得知我已离开前公司后曾询问是否有意向加入其团队',
                important: false
              }
            ]
          },
          {
            title: '2013.10-2015.07',
            important: false,
            details: [
              {
                text: '任职浙江普洛康裕制药有限公司·国际药品注册岗',
                important: false
              },
              {
                text: '该公司为上市公司，位列最新的2015年度中国制药工业百强榜第40名，约有员工两千人，本科小三百，硕士小四十，博士小十（含1省千人）',
                important: false
              },
              {
                text: '工作内容：注册文件的组织、申报；与国外注册当局/代理、终端用户沟通',
                important: false
              },
              {
                text: '期间以英语作为主要工作语言',
                important: false
              },
              {
                text: '期间曾经历WHO、FDA审计（当然不是核心参与人员，只是列于相关人员名单中，毕竟还嫩^_^）',
                important: false
              },
              {
                text: '期间有次公司组织为期近三个月的外教培训，一共16个名额，其中大小领导占了12个名额，剩下的4个名额中3个是硕士',
                important: false
              },
              {
                text: '期间曾获公司羽毛球团体第二，气排球团体第一，篮球团体第二',
                important: false
              },
              {
                text: '期间曾徒步50km',
                important: false
              }
            ]
          },
          {
            title: '学生时代',
            important: false,
            details: [
              {
                text: '2003年跳级到初中，瞒着父母去参加升学考试的',
                important: false
              },
              {
                text: '2006年保送到高中，据说是初中母校多年来破天荒保送到县一中的，保送考试前大部分老师也认为我们是去打酱油的',
                important: false
              },
              {
                text: '2009年就读沈阳药科大学药学（食品药学方向）专业，一本院校，非211/985，在制药行业与211/985同等待遇计算薪酬，期间剃过两次光头',
                important: false
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
