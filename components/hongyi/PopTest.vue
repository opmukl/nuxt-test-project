<template>
  <PopBase v-show="isShow" :show="isShow" :className="popName">
    <p>{{ userModel.name }}님 안녕하세요</p>
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
    ...mapState({ userModel: state => state.userModel.userModel }),
    isShow() {
      return this.currentPop == this.popName;
    }
  },
  methods: {}
};
</script>
