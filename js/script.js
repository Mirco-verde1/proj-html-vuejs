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

      Build:[
        {
          code:'-1',
          title:'Idea Discussion',
          description:"Get teamed up with the specialist who work and teach coding for years at famous universities"
        },
        {
          code:'-2',
          title:'Web Development',
          description:"Learn to start building a webpage from scratch.You decide your own pace, course and speed"
        },
        {
          code:'-3',
          title:'System Administration',
          description:"Learners are encouraged to study the mechanism and structure of system administration"
        },
        {
          code:'-4',
          title:'Graphic Design',
          description:"Have a passion for graphic and arts? Show your talents with confidence and self-assertiveness"
        },
      ]


  },
})

Vue.config.devtools = true;
