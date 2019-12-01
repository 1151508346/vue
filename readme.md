
安装一个本地的server
npm intall json-server

启动配置

script:{
	"json:server":"json-server --watch db.json"
}


npn run json:server
对db.json文件进行获取



vue 搭建项目组件开发跨域
	1.config>index.js
		proxyTable:{

		'/apis': {
        // 测试环境
        target: 'https://www.baidu.com/',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            '^/apis': ''   //需要rewrite重写的,
        }  
	}
	/*注意：下面配置方法貌似是在vue 3.0版本以上使用*/
	2.项目目录下创建vue.config.js
		module.exports = {
			devServer:{
				proxy:"http://localhost:3030",
			}
		}

vueRouter传递参数

	<router-link  to="/a/10"></router-link>

	var router  = {
		template:"<div>{{$route.params.id}}</div>"
	}
	var router = new VueRouter({
		path:"./a/:id",
		component:router1
		})

	<router-link  :to='{name:"aname",params:{id:10}}'></router-link>

	var router  = {
		template:"<div>{{$route.params.id}}</div>"
	}
	var router = new VueRouter({
		path:"./a/:id",
		component:router1
		})

---------------------------------------------------------------------------------

		<router-link  to="/a?name=jack"></router-link>

	var router  = {
		template:"<div>{{$route.query.name}}</div>"
	}
	var router = new VueRouter({
		path:"./a",
		nane:"aname"
		component:router1
		})


		<router-link  :to="{path:'/a'},query:{name:'123'}}></router-link>
		var router  = {
			template:"<div>{{$route.query.name}}</div>"
		}
		var router = new VueRouter({
			path:"./a",
			nane:"aname"
			component:router1
			})




