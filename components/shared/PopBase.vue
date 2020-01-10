<template>
  <transition name="popup__animation--fade">
    <div
      tabindex="-1"
      :style="customDuration"
      :class="['popup', `popup__${className}`]"
      @keyup.esc="onEsc"
    >
      <div
        class="popup__mask"
        v-if="mask"
        @click.self="onClickMask"
        :style="customMaskStyles"
      >
        <transition :name="`popup__animation--${animation}`">
          <div class="popup__dialog" v-show="show" :style="dialogStyle">
            <!-- basic -->
            <slot></slot>

            <!-- 기존 팝업 형식 ( type: Personal, Post ) -->
            <header
              class="popup__header"
              v-if="type == 'personal' || type == 'post'"
            >
              <div class="popup__inner">
                <slot name="header">
                  <h1>기본 타이틀</h1>
                </slot>
              </div>
            </header>
            <div
              class="popup__content"
              v-if="type == 'personal' || type == 'post'"
            >
              <div class="popup__inner">
                <slot name="content">
                  <!-- 우편번호 팝업 -->
                  <DaumPostcode
                    v-if="type == 'post'"
                    :on-complete="postComplete"
                    :animation="true"
                  />
                  <p v-else>기본 컨텐츠</p>
                </slot>
              </div>
            </div>
            <span class="popup__close" v-if="closeButton" @click="closePop()"
              >닫기</span
            >
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import DaumPostcode from 'vuejs-daum-postcode';

import { mapActions } from 'vuex';

export default {
  name: 'popup',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'dialog'
    },
    top: {
      type: Number,
      default: 50
    },
    width: {
      type: Number,
      default: 640
    },
    // height: {
    //   type: Number,
    //   default: '240'
    // },
    duration: {
      type: Number,
      default: 300
    },
    measure: {
      type: String,
      default: 'px'
    },
    animation: {
      type: String,
      default: 'zoom'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    customStyles: {
      type: Object,
      default: () => ({})
    },
    customMaskStyles: {
      type: Object,
      default: () => ({})
    }
  },
  components: { DaumPostcode },
  computed: {
    customDuration() {
      return {
        animationDuration: `${this.duration}ms`
      };
    },
    dialogStyle() {
      return {
        width: this.width + this.measure,
        top: this.top + this.measure,
        // height: this.height + this.measure,
        animationDuration: `${this.duration}ms`,
        ...this.customStyles
      };
    }
  },
  watch: {
    show(isShow) {
      isShow &&
        this.$nextTick(() => {
          this.$el.focus();
        });
    }
  },
  methods: {
    ...mapActions('popup', ['closePop']),
    onEsc() {
      if (this.show && this.closeOnEsc) {
        // this.$emit('hide');
        this.closePop();
      }
    },
    onClickMask() {
      // this.$emit('clickMask')
      if (this.closeOnClickMask) {
        // this.$emit('hide');
        this.closePop();
      }
    },
    postComplete(data) {
      console.log(data);
      let fullAddress = data.address;
      let extraAddress = '';
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      this.userModel.zipcode = data.zonecode;
      this.userModel.address = fullAddress;
      // EventBus.$emit('updateUserAddress', this.userModel)
      // this.updateUserAddress(this.userModel)
      this.openPop('personal');

      // ie에서 우편번호 팝업 관련 버그 처리
      $('#personalAddressDetail')
        .first()
        .focus();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/popup/style.scss';
</style>
