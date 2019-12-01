请求的数据存入到store对象中
例如请求的数据

data = {name:"Jack",age:20,sex:female},
this.$store.commit('adddata',data);

const mutations = {
	adddata:function(state,data){
		state.list = data;
	}
}
const state = {
	list:[],
}
此时list就存入了请求的数据

