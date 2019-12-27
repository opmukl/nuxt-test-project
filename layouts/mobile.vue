<template>
  <div>
    <nuxt class="wrap" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      deviceType: this.$ua.deviceType() == 'pc' ? 'pc' : 'mobile'
    }
  },
  head() {
    return {
      meta: [
        {
          name: 'viewport',
          content: 'width=720, user-scalable=no, target-densitydpi=device-dpi'
        }
      ]
    }
  }
}
</script>
