const app=new Vue({
   el:'#app',
   data: {
       title: 'Merhaba',
       NewToDo: '',
       todos:[]
   },
   methods:{
       addToDo(){
           this.todos.push({
             name:this.NewToDo,
             done:false
           });
           this.NewToDo=''
       }
   }
});