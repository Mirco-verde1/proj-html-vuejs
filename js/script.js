new Vue({
  el:'#project',
  data:{

 // oggetto in cui ci sono i dati dell'header
 // con possibilità di espanderlo successivamente

   headMenu:[
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

      build:[
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
  construct:[
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

 // oggetto che userò nella funzione backTrueOrFalse per
 // modifica background in base al dropdown del menù
backgroundTrue:{
  background:'#20ad96',
  color:'white',
},

results:[
  {
    result:'finisched sessions',
    numbers:'1.926'
  },

  {
    result:'enrolled learners',
    numbers:'3.092+'
  },

  {
    result:'online instructors',
    numbers:'200'
  },

  {
    result:'satisfaction rate',
    numbers:'100%'
  }
],


 teachers:[
  { code:'_1',
   logo:'Blanche',
   name:'Blache Fields',
   job:'Learning to Write as a professional Author',
   lessons:'20',
   students:'50',
   cost:'$40.00'
},
  { code:'_2',
   logo:'Maggie',
   name:'Maggie Strickland',
   job:'Customer-centric Info-Tech Strategies',
   lessons:'24',
   students:'769',
   cost:'free'
},
  { code:'_3',
   logo:'Maggie',
   name:'Maggie Strickland',
   job:'Open Programming Courses for Everyone:Python',
   lessons:'17',
   students:'62',
   cost:'$19.00'
},
  { code:'_4',
   logo:'Blanche',
   name:'Blache Fields',
   job:'Academic Listening and Note-taking',
   lessons:'14',
   students:'67',
   cost:'$26.00'
},
  { code:'_5',
   logo:'Blanche',
   name:'Blache Fields',
   job:'Master jQuery in a Short Period of Time',
   lessons:'6',
   students:'51',
   cost:'$39.00'
},
  { code:'_6',
   logo:'Blanche',
   name:'Blache Fields',
   job:'Introduction to Javascript for Beginners',
   lessons:'14',
   students:'76',
   cost:'$59.00'
}
 ],
},
      methods: {
// attraverso il true/false mostro o meno i drop menu
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
        },

        dropMenuOff:function(){
          return this.showMenu.show = false;
        },

      },


})

Vue.config.devtools = true;
