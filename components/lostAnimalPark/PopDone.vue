<template>
  <PopBase
    v-show="isShow"
    :show="isShow"
    :className="popName"
    :top="100"
    :imageUrl="imageUrl"
  >
    완료팝업
  </PopBase>
</template>

<script>
import PopBase from '@/components/shared/PopBase';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'PopDone',
  data() {
    return {
      popName: 'done'
    };
  },
  props: {
    imageUrl: {
      type: String,
      default: ''
    }
  },
  components: { PopBase },
  computed: {
    ...mapState({ currentPop: state => state.popup.currentPop }),
    isShow() {
      return this.currentPop == this.popName;
    }
  }
};
</script>

<style lang="scss">
.popup__done {
  .popup {
    &__dialog {
      padding: 100px 0;
      text-align: center;
    }
  }
}
</style>
