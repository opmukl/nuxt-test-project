<template>
  <PopBase
    v-show="isShow"
    :show="isShow"
    :className="popName"
    :type="popName"
    :top="100"
    @hide="openPop('personal')"
  >
    <template #header>
      <h1 class="line">
        <img
          src="https://donginbi-event.s3.amazonaws.com/mimaskstick/images/shared/tl-post.png"
          alt="우편번호"
        />

        이렇게넣은거구
      </h1>
    </template>
  </PopBase>
</template>

<script>
import PopBase from '@/components/shared/PopBase';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'PopPost',
  data() {
    return {
      popName: 'post'
    };
  },
  components: { PopBase },
  computed: {
    ...mapState({ currentPop: state => state.popup.currentPop }),
    isShow() {
      return this.currentPop == this.popName;
    }
  },
  methods: {
    ...mapActions('popup', ['openPop'])
  }
};
</script>

<style lang="scss">
.mimaskstick .popup.post .popup__content .popup__inner {
  padding: 0;
}
</style>
