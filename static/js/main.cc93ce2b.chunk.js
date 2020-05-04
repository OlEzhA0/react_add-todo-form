(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),s=a.n(r),c=a(8),i=a(5),l=a(1),u=a(2),d=a(4),m=a(3),h=(a(14),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={currentValue:"",currentChooseUserValue:"",currentStatus:!1,errorInput:!1,errorSelect:!1},e.handleInput=function(t){var a=e.state,n=a.errorInput,o=a.currentValue;e.setState({currentValue:t.target.value}),n&&o.length>=3&&e.setState({errorInput:!1})},e.chooseStatusTodo=function(){e.setState((function(e){return{currentStatus:!e.currentStatus}}))},e.chooseUserName=function(t){var a=e.props.users.find((function(e){return e.id===+t.target.value}));e.setState({currentChooseUserValue:a.id})},e.resetState=function(){e.setState((function(){return{currentValue:"",currentChooseUserValue:"",currentStatus:!1,hiddenHint:!1}}))},e.validation=function(){var t=e.state,a=t.currentValue,n=t.currentChooseUserValue,o=t.currentStatus;"string"===typeof a&&a.length>=4&&"number"===typeof n&&"boolean"===typeof o&&e.addNewTodo(),("string"!==typeof a||a.length<=3)&&e.setState((function(){return{errorInput:!0}})),"number"!==typeof n&&e.setState((function(){return{errorSelect:!0}}))},e.addNewTodo=function(){var t=e.state,a=t.currentValue,n=t.currentChooseUserValue,o=t.currentStatus,r=e.props,s=r.users,c=r.changeTodo,i=r.nextId,l={userId:n,id:i,title:a,completed:o,executant:s.find((function(e){return e.id===n}))};e.resetState(),c(l)},e.checkSelectError=function(){var t=e.state,a=t.currentChooseUserValue,n=t.currentStatus;t.errorSelect&&""!==a&&""!==n&&e.setState((function(){return{errorSelect:!1}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.users,a=this.state,n=a.currentValue,r=a.currentChooseUserValue,s=a.currentStatus,c=a.errorSelect,i=a.errorInput;return this.checkSelectError(),o.a.createElement("form",{className:"todo__form form",onSubmit:function(t){t.preventDefault(),e.validation()}},o.a.createElement("div",{className:"form__wrap"},o.a.createElement("label",{htmlFor:"newTask"},"Write a new task: "),o.a.createElement("input",{type:"text",id:"newTask",value:n,onChange:this.handleInput})),o.a.createElement("div",{className:"form__wrap"},o.a.createElement("label",{htmlFor:"chooseUser"},"Choose a user: "),o.a.createElement("select",{id:"chooseUser",value:r,onChange:this.chooseUserName},o.a.createElement("option",{value:"",hidden:!0},"Choose here"),t.map((function(e){return o.a.createElement("option",{value:e.id,key:e.id},e.name)})))),o.a.createElement("div",{className:"form__wrap"},o.a.createElement("label",{htmlFor:"chooseStatus"},"Select status for new todo: "),o.a.createElement("input",{type:"checkbox",id:"chooseStatus",className:"chooseStatus",checked:s,onClick:this.chooseStatusTodo})),o.a.createElement("button",{type:"button",onClick:this.validation},"Add todo"),i&&o.a.createElement("p",{className:"form__hint"},"Please, write 4 or more symbols"),c&&o.a.createElement("p",{className:"form__hint2"},"Please, select both field"))}}]),a}(o.a.Component)),p=function(e){var t=e.todos,a=e.changeStatusComplete;return o.a.createElement("div",{className:"todo__container"},t.map((function(e){return o.a.createElement("div",{className:"todo__added",key:e.id},o.a.createElement("p",{className:"todo__title"},o.a.createElement("span",{className:"todo__id"},e.id,"."),e.title),o.a.createElement("p",{className:"todo__executant"},"Holder:",o.a.createElement("span",{className:"todo__executant-name"},e.executant.name)),o.a.createElement("div",{className:"todo__check-status"},o.a.createElement("label",{htmlFor:"completeStatus",className:"todo__status"},"Completed status:"),o.a.createElement("input",{type:"checkbox",className:"todo__checkbox",checked:e.completed,onChange:function(){return a(e.id)}}),e.completed?o.a.createElement("p",{className:"todo__done todo__is-complete"},"Is done. Congratulations!"):o.a.createElement("p",{className:"todo__done--not todo__is-complete"},"Task is not completed!")))})))},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],f=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:f.map((function(e){return Object(i.a)({},e,{executant:b.find((function(t){return t.id===e.userId}))})})),nextId:f.length+1},e.changeStatusComplete=function(t){var a=e.state.todos;e.setState((function(){return{todos:a.map((function(e){return Object(i.a)({},e,{completed:e.id===t?!e.completed:e.completed})}))}}))},e.changeTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(c.a)(e.todos),[t]),nextId:e.nextId+1}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.hiddenHint,n=e.nextId;return console.log(t),o.a.createElement("div",{className:"App todo"},o.a.createElement(h,{hiddenHint:a,chooseUserName:this.chooseUserName,users:b,addNewTodo:this.addNewTodo,changeTodo:this.changeTodo,nextId:n}),o.a.createElement(p,{todos:t,changeStatusComplete:this.changeStatusComplete}))}}]),a}(o.a.Component);s.a.render(o.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.cc93ce2b.chunk.js.map