new Vue({
  el:'#project',
  data:{


idxTestimonials: 0,
idxPoint:0,

 // oggetto che userò nella funzione backTrueOrFalse per
 // modifica background in base al dropdown del menù

backgroundTrue:{
  background:'#20ad96',
  color:'white',
},


  //imposto il mio drop-down
  showMenu:{
    show:false,
    index:true,
  },

// oggetto che userò per colorare il punto premuto nello slider
  coloredPoint:{
    color:'#3f3a64',
    'font-size': '14px'
  },


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

// latest featured Courses part
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

// Upcoming events part

 events:[
   {
     city:'Texas,US',
     event:'Storytelling Workshop',
     day:'22',
     month:'November'
   },

   {
     city:'New York,US',
     event:'Painting Art Contest 2020',
     day:'10',
     month:'October'
   },

   {
     city:'Hamburg,Germany',
     event:'International Art Fair 2020',
     day:'23',
     month:'November'
   },

   {
     city:'Illinois,US',
     event:'Street Performance: Call for Artist',
     day:'15',
     month:'December'
   },

   {
     city:'Illinois,US',
     event:'Consumer Food Safety Education Conference',
     day:'22',
     month:'July'
   },

   {
     city:'Dubai',
     event:'How meditation improve your mental health?',
     day:'12',
     month:'August'
   },

 ],

 // Praising MaxCoach part----------------

 testimonials:[

{
   students:[

     {
       logo:'-1',
       opinion: "I am free to learn at my own pace, follow my own schedule and choose the subject i like. Great study portal people like me.",
       name:'Mina Hollace',
       job:'Freelancer'

     },

     {
       logo:'-2',
       opinion: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students",
       name:'Madley Pondor',
       job:'IT specialist'

     },

     {
       logo:'-3',
       opinion: "I am happy with their arrangement of leassons and subject. They reflect a scientific investigation",
       name:'Luvic Dubble',
       job:'Private Tutor'

     },

],

},

{
   students:[

     {
       logo:'-4',
       opinion: "I am free to learn at my own pace, follow my own schedule and choose the subject i like. Great study portal people like me.",
       name:'Jack Jonson',
       job:'Java developer'

     },

     {
       logo:'-3',
       opinion: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students",
       name:'Luvic Dubble',
       job:'Private Tour'

     },

     {
       logo:'-2',
       opinion: "I am happy with their arrangement of leassons and subject. MaxCoach was my best choice.",
       name:'Luvic Dubble',
       job:'Private Tutor'

     },

],

},


{
   students:[

     {
       logo:'-2',
       opinion: "I am free to learn at my own pace, follow my own schedule and choose the subject i like. Great study portal people like me.",
       name:'Madley Pondor',
       job:'IT specialist'

     },

     {
       logo:'-4',
       opinion: "I am happy with their arrangement of leassons and subject. They reflect a scientific investigation",
       name:'Jack Jonson',
       job:'Java developer'

     },

     {
       logo:'-1',
       opinion: "I am happy with their arrangement of leassons and subject. MaxCoach was my best choice.",
       name:'Mina Hollace',
       job:'Freelancer'

     },

],

},


{
   students:[

     {
       logo:'-4',
       opinion: "I am free to learn at my own pace, follow my own schedule and choose the subject i like. Great study portal people like me.",
       name:'Jack Jonson',
       job:'Java developer'

     },

     {
       logo:'-3',
       opinion: "I am happy with their arrangement of leassons and subject. MaxCoach was my best choice.",
       name:'Madley Pondor',
       job:'IT specialist'

     },

     {
       logo:'-2',
       opinion: "I am happy with their arrangement of leassons and subject. MaxCoach was my best choice.",
       name:'Mina Hollace',
       job:'Freelancer'

     },

],

},

 ],

 // Generalità MaxCoach

 infoMaxCoach:[
   {
     address:'382 NE St # Miami,FL 331179-3899',
     phone:'+1(305)547-9909',
     open:'9am-5pm EST,Monday-Friday',
     email:'support@maxcoach.com'
   }
 ],

 // data utili per creazione menu footer

 explore:[
   {
     name:'Start here'
   },

   {
     name:'Blog'
   },

   {
     name:'About Us'
   },

   {
     name:'Success story'
   },

   {
     name:'Courses'
   },

   {
     name:'Contact Us'
   },

 ],

 information:[
   {
     name:'Membership'
   },

   {
     name:'Purchase guide'
   },

   {
     name:'Privacy policy'
   },

   {
     name:'Terms of services'
   },

 ],


},
      methods: {
// attraverso il true/false mostro o meno i drop menu
        showingMenu:function(index){
          this.showMenu.show = !this.showMenu.show
          this.showMenu.index = index
        },

        backTrueOrFalse:function(index){
          if (this.showMenu.show && this.showMenu.index === index) {
            return this.backgroundTrue;
          }
        },

        dropMenuOff:function(){
          return this.showMenu.show = false;
        },

// tramite il click avvio lo scorrimento immagini dello slider
        clickCircle:function(index){
          return this.idxTestimonials = index;
        },

// coloro i points dello slider in base all'index del point cliccato
        colorPoint:function(index){
          if (this.idxTestimonials === index) {
                return this.coloredPoint;
          }

        },
      },


})

Vue.config.devtools = true;
