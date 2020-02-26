// import { getToken, setToken } from '@/utils/auth'
import api from '../../api/user'

const user = {
  state: {
    userInfo: {},
    // token: getToken(),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    saveData: (state,payload) => {
      state = {
        ...state,
        ...payload
      }
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const { code, data } = api.login(userInfo);
      if(code === 1){
        commit('saveData', data);
      }
      // return new Promise((resolve, reject) => {
      //   api.login(userInfo).then(res => {
      //     if (res.code === 200) {
      //       setToken(res.data)
      //       commit('SET_TOKEN', res.data)
      //     }
      //     resolve()
      //   }).catch(err => {
      //     reject(err)
      //   })
      // })
    }
  }
}

export default user