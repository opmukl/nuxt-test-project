<template>
  <PopBase
    v-show="isShow"
    :show="isShow"
    :top="300"
    :className="popName"
    animation="rotate"
    @hide="closePop()"
  >
    <p>이벤트 참여하기 처음팝업</p>
    <button type="button" @click="openPop('personal')">다음</button>
  </PopBase>
</template>

<script>
import PopBase from '@/components/shared/PopBase';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'PopTest',
  data() {
    return {
      popName: 'test'
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
    ...mapActions('popup', ['openPop', 'closePop'])
  }
};
</script>
