
class Compiler{
    constructor(el,vm){
        //判断el属性是不是一个元素，如果不是元素，那就获取它
        this.el = this.isElementNode(el)? el:document.querySelector(el);
        //获取当前节点中的元素，将其放在内存中
        let fragment = node2Fragment(this.le);
        this.vm = vm;
        //把节点中的内容进行替换
        //编译模板，用数据编译
        this.compile(fragment);
        this.el.appendChild(fragment)



    }
    isDrective(attrName){
        return attrName.startWith("v-")
    }
    compileElement(node){
        let attributes = node.attributes; //类数组
        [...attributes].forEach(attr=>{
                //value : expr 给value起别名
            let {name,value:expr} = attr;
            if(this.isDrective(name)){ //v-bind v-model
                let [,directive] = name.split("-");
                CompileUtil[directive](expr,node,this.vm);

            }
        })
    }
    compileText(node){
        let content = node.textContent;
        if(/\{\{(.+?)\}\}/.text(content)){
            CompileUtil["text"](node,content,this.vm); //{{a}} {{b}}
        }

    }
    //核心的编译方法
    compile(node){
        let childNodes = node.childNodes;
        [...childNodes].forEach(child=>{
            if(this.isElementNode(child)){
                this.compileElement(child)
                //如果是元素的话，需要把自己传进去，再去遍历子节点
                this.compile(child)
            }else{
                this.compileText(node)
            }
        })

    }
    //判断是不是元素节点
    isElementNode(node){
        return node.nodeType === 1;
    }
    //把el中的元素移到内存中取
    node2Fragment(node){
        //创建一个文档碎片
        let fragement = document.createDocumentFragment()
        let firstChild ;

        if(firstChild = node.firstChild){
            //appendChild 具有移动性
            fragement.appendChild(firstChild)
        }
        return fragement
    }
}
let CompileUtil = {
    getVal(vm,expr){
       return expr.split(".").reduce((data,current)=>{
            return data[current];
        },vm.$data)
    },
    model(node,expr,vm){
            let value = this.getVal(vm,expr)
            let fn = this.updater["modelUpdater"];
            fn(node,value);

    },
    text(node,expr,vm){ //  {{a}} {{b}}
            let fn  = this.updater["textUptater"];
            var content = expr.replace(/\{\{(.+?)\}\}/g,function(...args){
                return this.getVal(args[1]);
            })
            fn(node,content);
    },
    html(){

    },
    updater:{
        modelUpdater(node,value){
            node.value = value;
        },
        htmlUpdater(){

        },
        textUptater(node,value){
            node.textContent = value;
        }
    }
}


class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;

        if(this.$el){
            new Compiler(this.$el,this)
        }
    }
}