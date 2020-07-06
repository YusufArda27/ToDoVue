const app=new Vue({
   el:'#app',
   data: {
       title: 'Merhaba'
   },
   methods:{
       addToDo(){
           console.log('form submitted');
       }
   }
});