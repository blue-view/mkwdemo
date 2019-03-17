import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        music: {}
    },
    getters: {},
    mutations: {
        playMusic(state, music) {
            this.state.music = Object.assign({}, state.music, music);
        }
    },
    actions: {
        playMusic(context,music){
            context.commit('playMusic',music);
        }
    }
})