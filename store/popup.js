export const state = () => ({
  currentPop: '',
  beforePop: ''
  // isLoading: false
});

export const actions = {
  openPop({ commit }, popName) {
    commit('OPEN_POP', popName);

    const scrollTop = $(window).scrollTop();
    setTimeout(() => {
      $('.popup').css('top', scrollTop);
    }, 50);
  },
  closePop({ commit }) {
    commit('CLOSE_POP');
  },
  updateUserAddress() {}
};

export const mutations = {
  OPEN_POP(state, popName) {
    console.log(popName);
    state.currentPop = popName;
  },
  CLOSE_POP(state) {
    state.currentPop = '';
  }
};
