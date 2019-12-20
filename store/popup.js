export const state = () => ({
  currentPop: ''
  // isLoading: false
});

export const mutations = {
  OPEN_POP(state, popName) {
    state.currentPop = popName;
  },
  CLOSE_POP(state) {
    state.currentPop = '';
  }
};

export const actions = {
  openPop({ commit }, popName) {
    console.log(popName);
    // state.dimm = true;
    setTimeout(() => {
      commit('OPEN_POP', popName);
      const scrollTop = $(window).scrollTop();
      setTimeout(() => {
        $('.popup').css('top', scrollTop);
      }, 50);
    }, 200);
  },
  closePop({ commit }) {
    commit('CLOSE_POP');
  },
  updateUserAddress() {}
};
