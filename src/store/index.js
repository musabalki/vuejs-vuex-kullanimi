import {createStore} from 'vuex'
import {userModule} from "./userModule"

export default createStore({
    state:{
        ad:"mb",
        list:[1,2,3]
    },
    actions:{
        //dispatch
        //api istekleri asenkron işlemler
        yeniSayiEkle(context,sayi){
            //{commit}
            context.commit("sayiyiGuncelle",sayi)
        }
    },
    mutations:{ 
        //commit
        sayiyiGuncelle(state,payload){
            state.list.push(payload)
        }
        //state güncelleyen fonksiyonlar
    },
    getters:{
        //state geriye döndürür
        getAd(state){
            return state.ad
        },
        getList(state){
            return state.list
        }
    },
    modules:{
        //modüler bir yapı kurar
        userModule
    }
})