export default {
    template:`
      <div>
        <h2>{{message}}</h2>
        <button @click="buttonClick">按钮</button>
      </div>
    `,
    data(){
        return {
            message:"waws"
        }
    },
    methods:{
        buttonClick(){
            alert("点击了按钮")
        }
    }
}