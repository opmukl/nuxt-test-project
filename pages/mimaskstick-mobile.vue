<template>
  <div class="mimaskstick">
    <h1>미마스크스틱 페이지</h1>

    <div class="btn__group">
      <button @click="openPop('test')" class="btn__open">
        test팝업 (기본팝업)
      </button>
      <button @click="openPop('personal')">개인정보팝업</button>
    </div>

    <section class="section visual">
      <div class="section__inner">
        <div class="a11y-hidden">
          <h1>당신의 피부가 힘내야 하는 날은 언제인가요?</h1>
          <p>피부가 힘내야 하는 특별한 날, 동인비 #홍삼가득 #하루전팩</p>
        </div>
      </div>
    </section>
    <section></section>

    <!-- Popups -->
    <PopTest></PopTest>
    <PopPersonal></PopPersonal>
    <PopPost></PopPost>
  </div>
</template>

<script>
import PopPersonal from '@/components/mimaskstick/PopPersonal'
import PopPost from '@/components/shared/PopPost'
import PopTest from '@/components/mimaskstick/PopTest'

import { mapActions } from 'vuex'

export default {
  // asyncData(context) {
  //   let deviceType = context.$ua.deviceType()
  //   if (deviceType == 'smartphone') deviceType = 'mobile'
  //   return { deviceType }
  // },
  name: 'Mimaskstick',
  components: { PopTest, PopPersonal, PopPost },
  layout: 'mobile',
  methods: {
    ...mapActions('popup', ['openPop'])
  },
  created() {
    console.log(this.deviceType)
  }
}
</script>

<style lang="scss">
// 하위 컴포넌트 관련 scss 작성은 scoped 속성을 주면 적용되지 않습니다
@import '~@/assets/scss/popup/zoom.scss';

// 이벤트 style
@import '~@/assets/scss/pages/mimaskstick/style-m.scss';
</style>

