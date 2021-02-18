new Vue({
  el:'#project',
  data:{

 // oggetto in cui ci sono i dati dell'header
 // con possibilità di espanderlo successivamente

   HeadMenu:[
     {
        name:'Home',
        content:'',
      },
     {
        name:'Pages',
        content:'',
      },
     {
        name:'Courses',
        content:'',
      },
     {
        name:'Features',
        content:'',
      },
     {
        name:'Blog',
        content:'',
      },
     {
        name:'Shop',
        content:'',
      },

      ],


  },
})

Vue.config.devtools = true;
