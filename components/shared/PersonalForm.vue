<template>
  <form @submit.prevent>
    <div class="info__group">
      <!-- <dl v-for="(item, idx) in infoItems" :key="idx">
        <dt>
          {{ item.name }}
        </dt>
        <dd></dd>
      </dl> -->
      <div class="info__item info__name" :style="{ order: `${order[0]}` }">
        <label for="infoName">이름</label>
        <input type="text" name="name" id="infoName" v-model="userModel.name" />
        <select
          name="phoneCorp"
          id="phoneCorp"
          class="phone__corp"
          @change="changeCorp($event)"
          v-if="phoneCorpAuth == true"
        >
          <option value="null" selected disabled>통신사 선택</option>
          <option value="SKT">SKT</option>
          <option value="KTF">KT</option>
          <option value="LGT">LG U+</option>
          <option value="SKM">SKT 알뜰폰</option>
          <option value="KTF">KT 알뜰폰</option>
          <option value="LGT">LG U+ 알뜰폰</option>
        </select>
        <slot name="nameNotice"></slot>
      </div>

      <div class="info__item info__phone" :style="{ order: `${order[1]}` }">
        <label for="infoPhone">연락처</label>
        <input
          type="tel"
          name="phone"
          maxlength="11"
          placeholder="'-'없이 입력해주세요"
          id="infoPhone"
          v-model="userModel.phone"
        />
        <button
          type="button"
          class="popBtn popBtn__phone-auth"
          @click="sendKmcAuth()"
          v-if="phoneCorpAuth == true"
        >
          <label for="infoZipcode">인증번호 발송</label>
        </button>
        <slot name="phoneNotice"></slot>
      </div>

      <div
        class="info__item info__address"
        :style="{ order: `${order[2]}` }"
        v-if="address == true"
      >
        <label for="infoAddressDetail">주소</label>
        <input
          type="text"
          name="zipcode"
          readonly
          id="infoZipcode"
          class="zipcode__input"
          v-model="userModel.zipcode"
        />
        <button
          type="button"
          @click="openPop('post')"
          class="popBtn popBtn__zipcode"
        >
          우편번호찾기
        </button>
        <input
          type="text"
          name="address"
          id="infoAddress"
          class="address__input"
          readonly
          v-model="userModel.address"
        />
        <input
          type="text"
          name="addressDetail"
          id="infoAddressDetail"
          class="address__input"
          placeholder="상세주소를 입력해주세요"
          v-model="userModel.addressDetail"
        />
        <slot name="addressNotice"></slot>
      </div>
    </div>

    <div class="agree__group">
      <!-- <p>
        <label for="agreeAll">
          <input type="checkbox" id="agreeAll" />
          전체동의
        </label>
      </p> -->
      <p class="agree__item" v-for="(agree, idx) in agreements.list" :key="idx">
        <label :for="`${id}Agree${idx}`">
          <input
            type="checkbox"
            :id="`${id}Agree${idx}`"
            v-model="agreeList[idx]"
          />
          <i
            class="irCheckbox"
            v-if="agreements.type == 'img'"
            :style="{
              width: `${agreements.checkboxSize[0]}px`,
              height: `${agreements.checkboxSize[1]}px`,
              marginRight: `${agreements.checkboxSize[2]}px`,
              backgroundImage: `url(${imageUrl}/popup/checkbox.png)`,
              backgroundPositionY: 'top'
            }"
          >
          </i>
          <img
            v-if="agreements.type == 'img'"
            :src="`${imageUrl}/popup/txt-agree.png`"
            :alt="agree"
          />
          <span v-else>{{ agree }}</span>
        </label>
        <button
          class="btn__agreeDetail"
          :class="{ fs0: agreements.type == 'img' }"
          @click="openPop(`${id}Agree${idx}`)"
        >
          {{ agree }} 자세히 보기
        </button>
      </p>
      <p class="agree__item" v-if="phoneCorpAuth == true">
        <label for="">
          <input type="checkbox" id="agreePhoneCorpAuth1" />
          (간편인증서비스) 서비스 이용 동의
        </label>
        <button class="btn__agreeDetail">자세히 보기</button>
      </p>
      <p class="agree__item" v-if="phoneCorpAuth == true">
        <label for="">
          <input type="checkbox" id="agreePhoneCorpAuth2" />
          (간편인증서비스) 개인정보 수집 및 이용 동의
        </label>
        <button class="btn__agreeDetail">자세히 보기</button>
      </p>
    </div>
    <button type="button" @click="nextStep">다음</button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PersonalForm',
  props: {
    id: {
      type: String,
      default: false
    },
    infoItems: {
      type: Object,
      default: () => {}
    },
    nextPop: {
      type: String,
      default: false
    },
    name: {
      type: Boolean,
      default: true
    },
    phone: {
      type: Boolean,
      default: true
    },
    phoneCorpAuth: {
      type: Boolean,
      default: false
    },
    address: {
      type: Boolean,
      default: true
    },
    agreements: {
      type: Object,
      default: () => {
        return {
          type: 'img',
          list: [],
          checkboxSize: [20, 20]
        };
      }
    },
    imageUrl: {
      type: String,
      default: false
    },
    order: {
      type: Array,
      default: () => {
        return [1, 2, 3];
      }
    }
  },
  data() {
    return {
      userModel: {
        name: '',
        phoneCorp: null,
        phone: '',
        zipcode: '',
        address: '',
        addressDetail: '',
        agreeList: [false, false, false, false],
        agree0: false,
        agree1: false,
        agree2: false,
        agree3: false
      }
    };
  },
  mounted() {
    // EventBus.$on("updateUserAddress", userAddress => {
    //   this.userModel.zipcode = userAddress.zipcode;
    //   this.userModel.address = userAddress.address;
    //   console.log(this.userModel);
    // });
  },
  computed: {},
  methods: {
    ...mapActions('popup', ['openPop']),
    ...mapActions('userModel', ['setUserModel']),
    nextStep() {
      this.setUserModel(this.userModel);
      this.$emit('nextStep');
    },
    sendKmcAuth() {},

    confirmKmcAuth() {
      //인증번호 확인
      // let kcmNum = new FormData()
      // kcmNum.append('authNo', this.kmcAuth.number)
      // this.$axios
      //   .post('/api/kmc/save', kcmNum)
      //   .then(res => {
      //     if (res.data.result === true) {
      //       alert('인증이 완료되었습니다.')
      //       //인증번호 입력칸 hide, dimm show
      //       this.kmcAuth.isAuth = true
      //     } else {
      //       alert(res.data.message)
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err.error)
      //   })
    }
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
.fs0 {
  font-size: 0;
}
.info__group {
  display: flex;
  flex-direction: column;
  .info__address {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .address__input {
    width: 100%;
  }
}
.agree__group {
  .agree__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    label {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0;
    width: 1px;
    height: 1px;
    opacity: 0.1;
    &:checked ~ .irCheckbox {
      background-position-y: bottom !important;
    }
  }

  .irCheckbox {
    display: inline-block;
    overflow: hidden;
  }
}
</style>
