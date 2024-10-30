const app = new Vue({
  el:"#app",
  data:{
    books:[
      {
        id:1,
        name:"《算法导论》",
        public:"2006-09",
        price:85.00,
        count:1
      },{
        id:2,
        name:"《UNIX编程艺术》",
        public:"2006-02",
        price:59.00,
        count:1
      },{
        id:3,
        name:"《编程珠玑》",
        public:"2008-10",
        price:39.00,
        count:1
      },{
        id:4,
        name:"《算法导论》",
        public:"2006-03",
        price:128.00,
        count:1
      }
    ]},
    methods:{
      add:function(index){
          this.books[index].count++
      },
      sub:function(index){
          this.books[index].count--
      },
      removeBook(index){
        this.books.splice(index,1)
      }
    },
    computed:{
      totalPrice(){
        var totalprice = 0
        for(var i=0;i<this.books.length;i++){
            totalprice += this.books[i].price * this.books[i].count
        }
        return totalprice
      }
    },
    filters:{
      showPrice(price){
          return "￥" + price.toFixed(2)
      }
    }
})