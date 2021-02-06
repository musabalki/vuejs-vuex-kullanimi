export const userModule = {
    state:{
        kullanici:"yeni kullanici"
    },
    actions:{
        login({commit},user){
            if(user.name==="admin" && user.password==="admin"){
                commit("sayiyiGuncelle",user)
            }
        }
    },
    mutations:{ 
        setUser(state,payload){
            state.kullanici=payload
        }
    },
    getters:{
        getUser(state){
            return state.kullanici
        }
    },
}