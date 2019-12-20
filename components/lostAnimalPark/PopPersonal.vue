<template>
  <PopBase
    v-show="isShow"
    :show="isShow"
    :className="popName"
    :type="popName"
    :top="100"
    @hide="closePop()"
    :imageUrl="imageUrl"
  >
    <template #header>
      <h1 class="line">
        <img :src="`${imageUrl}/popup/tl-personal.png`" alt="정보입력" />
      </h1>
    </template>
    <template #content>
      <img :src="`${imageUrl}/popup/con-personal.png`" alt="" />
      <PersonalForm
        :id="'event1'"
        :phoneCorpAuth="false"
        :address="false"
        :imageUrl="imageUrl"
        :agreements="{
          type: 'img',
          list: ['개인 정보 수집, 취급 및 위탁 동의 안내'],
          checkboxSize: [50, 50, 10]
        }"
      >
        <template #nameNotice>
          <img :src="`${imageUrl}/popup/txt-nameNotice.png`" />
        </template>
      </PersonalForm>
      <button>다음</button>
    </template>
  </PopBase>
</template>

<script>
import PopBase from '@/components/shared/PopBase';
import PersonalForm from '@/components/shared/PersonalForm';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'PopPersonal',
  data() {
    return {
      userModel: {
        parentName: ''
      },
      popName: 'personal'
    };
  },
  props: {
    imageUrl: {
      type: String,
      default: ''
    }
  },
  components: { PopBase, PersonalForm },
  computed: {
    ...mapState({ currentPop: state => state.popup.currentPop }),
    isShow() {
      return this.currentPop == this.popName;
    }
  },
  methods: {
    ...mapActions('popup', ['closePop'])
  }
};
</script>

<style lang="scss">
$lap-image-url: 'https://lguplus-event.s3.amazonaws.com/static/lostanimalpark/image';

.popup__personal {
  .popup__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 170px;
    @include background(
      $lap-image-url + '/popup/bg-header.jpg',
      $position: center top
    );
    text-align: center;
  }

  .popup__inner {
    width: 560px;
    margin: 0 auto;
  }

  .info {
    &__group {
      font-size: 0;
      label {
        width: 180px;
        height: 80px;
        font-size: 0;
      }
      input {
        width: calc(100% - 180px - 2px);
        height: 80px;
        font-size: 0;
        margin: 0;
        padding: 0 20px;
        border: 1px solid #dddecd;
        border-radius: 5px;
        font-size: 22px;
        line-height: 80px;
        vertical-align: middle;
      }
    }
    &__item {
      display: flex;
    }
    &__name {
      flex-wrap: wrap;
      label {
        background: url($lap-image-url+'/popup/txt-name.png');
      }
      img {
        flex: 1;
      }
    }
    &__phone {
      background: url($lap-image-url+'/popup/txt-phone.png');
    }
    &__phone {
      background: url($lap-image-url+'/popup/txt-phone.png');
    }
    &__parentPhone {
      background: url($lap-image-url+'/popup/txt-phone2.png');
    }
  }

  .agree__group {
    .btn__agreeDetail {
      width: 226px;
      height: 84px;
      background: url($lap-image-url+'/popup/btns.png') 0 -151px no-repeat;
    }
  }
}
</style>

<style lang="scss" scoped>
@import '~@/assets/scss/pages/mimaskstick/_variables.scss';
.popup__personal {
  .popup__inner {
    width: 600px;
    margin: 0 auto;
  }
  input {
    height: 50px;
  }
  .phone-corp,
  .popbtn__phone-auth,
  .popbtn__zipcode {
    width: 190px;
    flex: 0 0 190px;
    margin-left: 8px;
    font-size: 25px;
    vertical-align: middle;
  }

  .phone-corp {
    display: inline-block;
  }

  .popbtn__phone-auth,
  .popbtn__zipcode {
    color: #fff;
    background: $colorBrown;
  }
}
</style>
