<template>
  <transition name="slide">
    <div class="content">
      <div v-for="item in content" :class="{ 'ignore' : !item.important }" class="item-normal">
        <header class="item-header">{{item.title}}</header>
        <article class="item-details">
          <p v-for="detail in item.details" :class="{ 'ignore' : !detail.important }" class="item-detail" v-html="detail.text"></p>
        </article>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'pointTwo',
    data () {
      return {
        content: [
          {
            title: '1. 发球',
            important: true,
            details: [
              {
                text: '如果他发球后场不到位，网前偏高，或者有些点不会发，就可以施以打击。',
                important: true
              },
              {
                text: '比如说发球后场不到位可以考虑下压+平高过顶+劈掉的组合。',
                important: true
              },
              {
                text: '网前偏高采取轻放和猛扑。',
                important: true
              },
              {
                text: '有些点不会发那么集中精神准备另外的点就好了',
                important: true
              }
            ]
          },
          {
            title: '2. 高球',
            important: true,
            details: [
              {
                text: '高远和平远差不多是基础球了，很多业余单打打不好也是这些球打不好，真的，认真脸。',
                important: true
              },
              {
                text: '现在林丹，虽然我不是很喜欢他，但是不得不说，高球就打的很好，弧度控制很棒。',
                important: true
              },
              {
                text: '可以参林丹打索尼，2016新加坡公开赛。哈哈因为林某人输了哇哈哈哈。不过控球还是很不错。',
                important: true
              },
              {
                text: '高球打得好基本上在于弧度很好，平高要求压顶，也就是说，过你顶，但是后退的时候又不能很好地上手击球。高远要求垂直落，这种球只有互拉或者被动解围才会打吧。。。',
                important: true
              },
              {
                text: '如果他这些球打不好，那么注意拦截平高，高远不到二线肯定攻击他。怎么攻击，看对于发球里面的说法。',
                important: true
              },
              {
                text: '对了，如果他高球没法从一点打到两个底线底角的话，那么你的跑动可以大大减少。',
                important: true
              }
            ]
          },
          {
            title: '3. 连贯',
            important: true,
            details: [
              {
                text: '连贯一般看后场两点击球完后身体的重心的跟随程度。如果打完球能够立即回动，重心始终在脚之间的话，那么连贯就还不错。',
                important: true
              },
              {
                text: '然后看他前后连贯，是否后场上前场能两步到位，抢到网前高点。如果这个能力不好，前后拉动。',
                important: true
              },
              {
                text: '如果他转身不是很快，这个反映在回蹬步伐不够迅速，也就是落地没蹬起来，和蹬起的第一步转身不够到位，中间还要转的话。',
                important: true
              },
              {
                text: '那么多打他两个底线小对角。',
                important: true
              }
            ]
          },
          {
            title: '4. 看对方攻击',
            important: true,
            details: [
              {
                text: '对方攻击：',
                important: true
              },
              {
                text: '一致性好不好。我这边有一个师兄单打很屌在于头顶那一条直线平高杀球以及劈掉一致性很强。很容易被晃倒。',
                important: true
              },
              {
                text: '要是不好，看他习惯，打直线还是斜线。习惯杀那种冲的球还是尖的球，连续攻击能力如何，有没有杀球转吊球能力。',
                important: true
              },
              {
                text: '要是没有，防守压力会小很多。要是有的话，别瞎起高球，尽量采取放网加平高不给他攻击时间，当然这么跑你也会很累。也就是主动提速。或者你可以考虑变速。也就是说，用时间差（参考澳元希望）打对方。落到一个你刚好能把球打过去的点之前的所有点都是可出球的点，没必要最高点打，这样打一个时间差对方也不好攻击你。',
                important: true
              }
            ]
          },
          {
            title: '5. 看对方防守习惯',
            important: true,
            details: [
              {
                text: '挡对角还是直线还是挑起来。到位么。对于追身的处理怎么样。防守覆盖面积大不大？防守习惯是直线还是斜线：当然，两条线你没法一样的注意力。',
                important: true
              },
              {
                text: '还有，吃不吃吊，吃快吊还是尖一些的吊。',
                important: true
              }
            ]
          },
          {
            title: '6. 看对方装备',
            important: true,
            details: [
              {
                text: '鞋底滑不滑。这样的。。。。',
                important: true
              },
              {
                text: '要是这货今天貌似不停地擦手汗，那么他很有可能抓不住球拍，尽量让他打快速发力的球，质量会差很多，比如平抽快挡打多一些，然后可以考虑给他杀几个。那个时候等他感觉抓不住拍子的时候自然会想吊吧。',
                important: true
              }
            ]
          },
          {
            title: '参考资料',
            important: true,
            details: [
              {
                text: '文章来源：<a href="https://www.zhihu.com/question/36372360?sort=created" class="global-link">羽毛球单打时如何观察对方弱点并给予针对？</a>',
                important: true
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .profile {}
</style>
