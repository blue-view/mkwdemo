import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        playPrama: {
            music:{
                pic:'',
                title:'',
                lrc:'',
                url:'',
                author:''
            },
            list:[]
        }
    },
    getters: {},
    mutations: {
        playMusic(state, playPrama) {
            this.state.playPrama = Object.assign({}, state.playPrama, playPrama);
        }
    },
    actions: {
        playMusic(context,playPrama){
            context.commit('playMusic',playPrama);
        }
    }
})