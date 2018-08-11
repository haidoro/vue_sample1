Vue.component('hello-component',{
  template:'<p>Hello component!</p>'
})

var app = new Vue({
  el:'#app',
  data:{
    toggle:false,
    message:'Hello world!',
    count:10,
    user:{
      lastname:'Tahara',
      firstname:'Masaharu',
      sex:'Man'
    },
    langs: ['javascript','php','python'],
    now:''
  },
  methods:{
    onclick:function(){
      this.now = new Date().toLocaleString()
    }
  }
})
