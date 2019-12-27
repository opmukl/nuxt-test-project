<template>
  <PopBase
    v-show="isShow"
    :show="isShow"
    :className="popName"
    :type="popName"
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
  name: 'PopDefault',
  data() {
    return {
      popName: 'default'
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
  },
  methods: {
    ...mapActions('popup', ['openPop', 'closePop'])
  }
};
</script>
