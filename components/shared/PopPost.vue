<template>
  <PopBase
    v-show="isShow"
    :show="isShow"
    :className="popName"
    :type="popName"
    :top="100"
  >
    <template #header>
      <slot name="header">
        <h1>우편번호 찾기 기본 타이틀</h1>
      </slot>
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
