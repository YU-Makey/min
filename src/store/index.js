import { createStore } from 'vuex'
import { ElMessage } from 'element-plus'
export default createStore({
  state: {
    data:[]
  },
  getters: {
  },
  mutations: {
   add(state,data){
    let arr = state.data.findIndex(item=>item.name == data.name)
    if(arr == -1){
      ElMessage({
        message: '添加成功',
        type: 'success',
    })
      state.data.push({...data,lev:1})
    }else{
      ElMessage.error('已经添加')
     }
   },
   del(state,i){
     state.data.splice(i,1)
   }
  },
  actions: {
  },
  modules: {
  }
})
