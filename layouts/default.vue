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
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
}
</style>