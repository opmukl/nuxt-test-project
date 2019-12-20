<template>
  <div class="mimaskstick">
    <h1>미마스크스틱 페이지</h1>

    <div class="btn__group">
      <button @click="openPop('test')" class="btn__open">
        test팝업 (기본팝업)
      </button>
      <button @click="openPop('personal')">개인정보팝업</button>
    </div>
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
  name: 'Mimaskstick',
  components: { PopTest, PopPersonal, PopPost },
  methods: {
    ...mapActions('popup', ['openPop'])
  }
}
</script>

<style lang="scss">
// 하위 컴포넌트 관련 scss 작성은 scoped 속성을 주면 적용되지 않습니다
@import '~@/assets/scss/popup/zoom.scss';
</style>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 3000px;
  background: rgba(17, 206, 196, 197);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  b .btn__group {
    width: 100%;
  }
}
</style>
