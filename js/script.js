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
        }
      ],

  //imposto il mio drop-down
  showMenu:{
    show:false,
    index:true,
  },


  // Construct row data
  Construct:[
    {
      title:'Multiple Platforms Supported for Teaching & Studying',
     text:"MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device."
   },
    {
      title:'Multiple course participation at the same time',
     text:"MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device."
   },
    {
      title:'Track Study Progress & Deliver Prompt Feedback',
     text:"MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device."
   },


 ],

 // oggetti che userò nella funzione backTrueOrFalse per
 // modifica background in base al dropdown del menù
backgroundTrue:{
  background:'#20ad96',
  color:'white',
},

backgroundFalse:{
  background:'black',
}
 },

      methods: {

        showingMenu:function(index){
          this.showMenu.show = !this.showMenu.show
          this.showMenu.index = index
          console.log(this.showMenu.show);
          console.log(this.showMenu.index);
        },

        backTrueOrFalse:function(index){
          if (this.showMenu.show && this.showMenu.index === index) {
            return this.backgroundTrue;
          }
        }


      },


})

Vue.config.devtools = true;
