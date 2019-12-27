<template>
  <div class="lostanimalpark">
    <h1>멸종동물 페이지</h1>

    <div class="btn__group">
      <button @click="openPop('personal')">개인정보팝업</button>
    </div>

    <PopPersonal :imageUrl="imageUrl"></PopPersonal>
    <PopPost :imageUrl="imageUrl"></PopPost>
    <PopDone></PopDone>
  </div>
</template>

<script>
import PopPost from '@/components/shared/PopPost';
import PopPersonal from '@/components/lostAnimalPark/PopPersonal';
import PopDone from '@/components/lostAnimalPark/PopDone';

import { mapActions } from 'vuex';

export default {
  name: 'LostAnimalPark',
  components: { PopPersonal, PopPost, PopDone },
  data() {
    return {
      imageUrl:
        'https://lguplus-event.s3.amazonaws.com/static/lostanimalpark/image'
    };
  },
  methods: {
    ...mapActions('popup', ['openPop'])
  }
};
</script>

<style lang="scss">
// 하위 컴포넌트 관련 scss 작성은 scoped 속성을 주면 적용되지 않습니다
@import '~@/assets/scss/popup/zoom.scss';
</style>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 3000px;
  background: #3f51b5;
}
</style>
