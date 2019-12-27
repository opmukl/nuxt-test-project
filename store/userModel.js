export const state = () => ({
  userModel: {}
});

export const actions = {
  setUserModel() {}
};

export const mutations = {
  SET_USERMODEL(state, userModel) {
    state.userModel = userModel;
  }
};
