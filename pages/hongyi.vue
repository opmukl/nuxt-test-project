<template>
  <div class="hongyi">
    <!-- <Video></Video> -->
    <button @click="openPop('personal')">개인정보팝업</button>

    <PopPersonal :imageUrl="imageUrl"></PopPersonal>
    <PopPost :imageUrl="imageUrl">
      <template #header>
        우편번호찾기 홍이장군
      </template>
    </PopPost>
    <PopTest></PopTest>
  </div>
</template>

<style lang="scss" scoped>
.hongyi {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // height: 1000px;
}
</style>

<script>
import PopPost from '@/components/shared/PopPost';
import Video from '@/components/hongyi/Video';
import PopPersonal from '@/components/hongyi/PopPersonal';
import PopTest from '@/components/hongyi/PopTest';

import { mapActions } from 'vuex';

export default {
  name: 'HongYi',
  components: { Video, PopPersonal, PopPost, PopTest },
  layout: 'mobile',
  head: {
    title: '홍이장군'
  },
  data() {
    return {
      imageUrl:
        'https://lguplus-event.s3.amazonaws.com/static/lostanimalpark/image'
    };
  },
  methods: {
    ...mapActions('popup', ['openPop'])
  },
  computed: {}
};
</script>
