export const state = () => ({
  userModel: {}
});

export const actions = {
  setUserModel({ commit }, userModel) {
    console.log(userModel);
    commit('SET_USERMODEL', userModel);
  },
  clearUserModel() {}
};

export const mutations = {
  SET_USERMODEL(state, userModel) {
    alert();
    state.userModel = userModel;
  }
};
