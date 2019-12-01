import Vuex from "vuex";
import Vue from "vue";
import { ADD, CHANEGDATA} from "./mutation-type"
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:0,
        age:30
    },
    mutations:{
        [ADD]:function(state,data){
            state.vuexData = data
            // console.log(data)
        },
        [CHANEGDATA](state,payload){
            state.vuexData.name = "bbbb"
            console.log(payload)
        }
        /**
         * // （改变state只能在mutation中）
         // state.count += 100;
         // state.count+=123;
         //info能被加入到响应式系统中 info一开始不在state中 
         //如果通过state.info="xinxi" 方式的话不会调用响应式系统
         //但是如何在执行上面这句代码的话，通过调用了响应式系统的时候,info属性就会被加入到响应式系统中去
         /**
          * 例如
          * state.info = "xinxi";
          * state.count+=123
          * 因为count一开始就被加入到了响应式系统中，（count一开始就存在与state中，因此会调用响应式系统加info加入到其中去）
          */
            // Vue.set(state,"info","xinxi") 
        //    Vue.delete(state,"age"); 通过次方法能够监控到view的更改
        // delete state.age //能删除但是不能监控到view中
        
    },
    getters:{
        changeVuexDataName(state){
            // console.log(state)
           var newData =  JSON.stringify(state.vuexData);
            newData = JSON.parse(newData)
            newData.name = "bbbbbb"
            return newData
        },
        change2VuexDataName(state,getters){
           return getters.changeVuexDataName.name 
        },
        changeCount(state){

            
            return state.count
        }
    },
    /**
     * action 用于异步操作
     *      如果您在mutation中进行异步操作改变state中的数据的时候，视图上看不出来错误，
     *      但是在vuedevTool工具中是不能捕捉到在mutation中进行异步操作而改变的state数据
     * 如果进行异步操作来修改state中的数据的时候一定要放在action;
     * 例如
     *  mutation:{
     *      add(state){
     *         state.count+=1
     *      } 
     *  }
     *  action ：{
     *      change:function(context){
     *          context.commit("add")
     *      }
     * }
     */
    actions:{
        changeInfo(context){
            //context 指的是store对象
        }
    },
    modules:{
        A:{
            state:{},
            mutations:{},
            getters:{},
            actions:{
                changeSelf(context){
                    //context 指向A module
                }
            }
        }
    }
    
})