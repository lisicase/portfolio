(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/ElisabethCase-PM.f1314063.pdf"},35:function(e,t,a){e.exports=a.p+"static/media/ElisabethCase-SWE.d3923445.pdf"},37:function(e){e.exports=JSON.parse('[{"id":"chronicle","title":"Chronicle","context":"INFO 340 (Client-Side Development)","timeframe":"Apr 2020 \u2013 Jun 2020","description":"Collaborated to design and develop a dynamic web app that enables users to sign in, browse books, log reading, and create lists.","project":"","tools":"HTML, CSS, JavaScript, React, Firebase","img_src":"/img/chronicle/cover2.png","alt":"Screen capture of reading log page"},{"id":"collegehub","title":"CollegeHub","context":"INFO 380 (Systems Analysis & Design)","timeframe":"Apr 2020 \u2013 Jun 2020","description":"Led team in designing a centralized resource for college applicants and ultimately developed proof of concept (on left).","project":"Stakeholder Interviews, Use Cases, Deployment Diagram, Workflow Diagram, Data Dictionary, Permissions Matrix, Product Backlog, User Stories","tools":"Figma, Apex Oracle","img_src":"/img/collegehub/cover2.png","alt":"Screen capture of table comparing colleges"},{"id":"smartstep","title":"Smart Step","context":"Rombolabs at UW Electrical & Computer Engineering","timeframe":"June 2019 \u2013 Sep 2019","description":"Worked with Astrini Sie of Rombolabs to design a smart wearable device to help people who have difficulty walking, particularly elderly and disabled people, descend stairs easily and intuitively.","project":"","tools":"MATLAB, Qualisys","img_src":"/img/smartstep/cover2.JPG","alt":"Arm wearing haptic feedback device"},{"id":"uwbreathe","title":"UW Breathe","context":"INFO 360 (Design Methods)","timeframe":"Jul 2019 \u2013 Sep 2019","description":"Created foundations for a campus map mobile website under a grant from the UW Resilience Lab. Collaborated to research, design, and develop software prototype.","project":"","tools":"HTML, CSS","img_src":"/img/uwbreathe/cover4.JPEG","alt":"Screen captures of map themes and guided practice of jogging"},{"id":"school-funding","title":"USA Education Funding","context":"INFO 201 (Technical Foundations of Informatics)","timeframe":"Apr 2019 \u2013 Jun 2019","description":"Created a web app of interactive infographics using school funding data from USA censuses.","project":"","tools":"R, Shiny","img_src":"/img/schoolfunding/cover.jpg","alt":"Map of total school revenue in 2016 for the USA"},{"id":"huskyconnect","title":"HuskyConnect","context":"INFO 200 (Intellectual Foundations of Informatics)","timeframe":"Oct 2018 \u2013 Dec 2018","description":"Collaborated to design and develop an interactive prototype for an app geared toward helping first-year university students better transition to UW by connecting with events, organizations, and other students on campus.","project":"","tools":"Figma","img_src":"/img/huskyconnect/cover.JPEG","alt":"Screen captures of the DubsTech club information and details for their Student Showcase event"}]')},38:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),c=a.n(i),l=a(20),o=(a(16),a(3)),s=a(4),u=a(6),m=a(5),p=a(7),d=(a(25),a(29)),h=a(19),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex-container"},r.a.createElement(b,{projects:this.props.projects}))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.projects.map((function(e){return r.a.createElement("span",{key:e.id},r.a.createElement(g,{id:e.id,title:e.title,context:e.context,description:e.description,project:e.project,tools:e.tools,img:e.img_src,alt:e.alt}))}));return r.a.createElement("div",{className:"col content-column",style:{alignItems:"center"}},e)}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.setState({redirectTo:n.props.id})},n.state={},n}return Object(s.a)(a,[{key:"render",value:function(){if(this.state.redirectTo)return r.a.createElement(p.a,{push:!0,to:"/portfolio/"+this.state.redirectTo});var e=r.a.createElement("span",null);""!==this.props.project&&(e=r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Project: "),this.props.project));var t=r.a.createElement("span",null);return""!==this.props.tools&&(t=r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Tools: "),this.props.tools)),r.a.createElement("div",{className:"shadow card"},r.a.createElement("div",{id:"flex-left-right"},r.a.createElement("div",{id:"flex-left"},r.a.createElement("img",{src:this.props.img,alt:this.props.alt})),r.a.createElement("div",{id:"flex-right"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.title),r.a.createElement("h6",{className:"subtitle"},this.props.context),r.a.createElement("p",{className:"card-text"},this.props.description),e,t,r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-light"},"Learn more")))))}}]),a}(n.Component),E=f,v=a(34),j=a.n(v),y=a(35),O=a.n(y),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tagline"},r.a.createElement("h1",null,"Hey there! I'm Lisi :)"),r.a.createElement("h2",{className:"subtitle"},"Informatics senior at UW seeking PM/SWE internships for summer 2021."),r.a.createElement(N,null))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:j.a,target:"_blank",rel:"noopener noreferrer",type:"button",className:"resume btn btn-light btn-sm"},"Resume - PM"),r.a.createElement("a",{href:O.a,target:"_blank",rel:"noopener noreferrer",type:"button",className:"resume btn btn-light btn-sm"},"Resume - SWE"))}}]),a}(n.Component),k=x,C=a(36),S=a.n(C),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={project:void 0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.projectId;console.log(e);var t=S.a.find(this.props.projects,{id:e});this.setState({project:t})}},{key:"render",value:function(){var e=this.state.project;return e?r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"col content-column",style:{alignItems:"center"}},r.a.createElement(I,{title:e.title,context:e.context,timeframe:e.timeframe,project:e.project,tools:e.tools}),r.a.createElement(A,{img:e.img_src,alt:e.alt,summary:e.summary}),r.a.createElement(P,{reflection:e.reflection}))):r.a.createElement("div",{className:"flex-container"},r.a.createElement("p",null,"No project specified."))}}]),a}(n.Component),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=r.a.createElement("span",null);""!==this.props.project&&(e=r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Project: "),this.props.project));var t=r.a.createElement("span",null);return""!==this.props.tools&&(t=r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,"Tools: "),this.props.tools)),r.a.createElement("header",null,r.a.createElement("h1",{className:"page-title"},this.props.title),r.a.createElement("h2",{className:"subtitle page"},this.props.context," | ",this.props.timeframe),e,t)}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-section"},"Summary"),r.a.createElement("div",{id:"flex-left-right"},r.a.createElement("div",{id:"flex-left"},r.a.createElement("img",{src:this.props.img,alt:this.props.alt})),r.a.createElement("div",{id:"flex-right"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"In this project, I..."),r.a.createElement("p",{className:"card-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius nisi urna, a consectetur tortor elementum vitae. Aenean in iaculis nulla. Suspendisse id tempus tellus. Suspendisse eleifend posuere lorem at scelerisque. Aliquam erat volutpat. Cras ultricies urna a nunc tincidunt, a laoreet ligula tincidunt. Curabitur tristique euismod lacus a egestas. Vivamus nulla tellus, molestie ut diam ut, porttitor tempor mauris. Proin a lacinia dolor, quis efficitur urna. Ut non ultricies lacus. Nullam sodales risus ipsum, congue luctus neque pellentesque non."),r.a.createElement("p",{className:"card-text"},"Pellentesque bibendum quis ante ut sodales. Curabitur hendrerit ullamcorper nibh. Praesent ac felis at nulla varius elementum quis sed sem. Phasellus justo ex, viverra non varius a, porta sed nunc. Pellentesque bibendum molestie mauris.")))))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-section"},"Reflection"),r.a.createElement("p",{className:"card-text"},"I learned..."),r.a.createElement("p",{className:"card-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius nisi urna, a consectetur tortor elementum vitae. Aenean in iaculis nulla. Suspendisse id tempus tellus. Suspendisse eleifend posuere lorem at scelerisque. Aliquam erat volutpat. Cras ultricies urna a nunc tincidunt, a laoreet ligula tincidunt. Curabitur tristique euismod lacus a egestas. Vivamus nulla tellus, molestie ut diam ut, porttitor tempor mauris. Proin a lacinia dolor, quis efficitur urna. Ut non ultricies lacus. Nullam sodales risus ipsum, congue luctus neque pellentesque non."),r.a.createElement("p",{className:"card-text"},"Pellentesque bibendum quis ante ut sodales. Curabitur hendrerit ullamcorper nibh. Praesent ac felis at nulla varius elementum quis sed sem. Phasellus justo ex, viverra non varius a, porta sed nunc. Pellentesque bibendum molestie mauris."))}}]),a}(n.Component),q=w,F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"col content-column",style:{alignItems:"center"}},r.a.createElement("div",{id:"flex-left-right"},r.a.createElement("div",{id:"flex-left"},r.a.createElement("img",{src:"/img/lisi-case.jpeg",alt:"Headshot of Lisi",style:{paddingTop:"0em"}})),r.a.createElement("div",{id:"flex-right"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"page-title"},"Hi, I'm Lisi!"),r.a.createElement(W,null),r.a.createElement(L,null),r.a.createElement(U,null))))))}}]),a}(n.Component),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-section"},"Summary"),r.a.createElement("p",{className:"card-text"},"I\u2019m a senior Interdisciplinary Honors student majoring in Informatics at UW Seattle, experienced in managing projects and programs in collaboration with various stakeholders to optimize user experience. I enjoy working in teams to analyze data, ideate, and build products in creative and intuitive ways to help people achieve their goals and accomplish positive change, particularly related to health, education, and accessibility."))}}]),a}(n.Component),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-section"},"Background"),r.a.createElement("p",{className:"card-text"},"I entered UW two years early through the Robinson Center's ",r.a.createElement("a",{className:"external-link",href:"https://robinsoncenter.uw.edu/programs/uw-academy/"},"UW Academy")," program. With so many intriguing opportunities at UW, I have participated in some amazing Registered Student Organizations (RSOs) and become involved in research, teaching, and Husky leadership. At the moment, I'm particularly enjoying programming for ",r.a.createElement("a",{className:"external-link",href:"https://synbioforeveryone.org/Home"},"Synbio for Everyone")," and continuing to teach beginning programmers as a ",r.a.createElement("a",{className:"external-link",href:"http://courses.cs.washington.edu/courses/cse14x/ta/"},"Computer Science TA"),"!"))}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"page-section"},"Fun Facts"),r.a.createElement("ul",null,r.a.createElement("li",null,"I have triple citizenship"),r.a.createElement("li",null,"I'm an Alumna of the ",r.a.createElement("a",{className:"external-link",href:"https://seattlegirlschoir.org/"},"Seattle Girls' Choir")),r.a.createElement("li",null,"I've been playing piano (privately/professionally) for 15 years")))}}]),a}(n.Component),T=F,J=a(23),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(E,Object.assign({},t,{projects:e.props.projects})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/portfolio",render:t}),r.a.createElement(p.b,{exact:!0,path:"/portfolio/portfolio",render:t}),r.a.createElement(p.b,{path:"/experience",component:D}),r.a.createElement(p.b,{path:"/portfolio/experience",component:D}),r.a.createElement(p.b,{path:"/about",component:T}),r.a.createElement(p.b,{path:"/portfolio/about",component:T}),r.a.createElement(p.b,{path:"/portfolio/:projectId",render:function(t){return r.a.createElement(q,Object.assign({},t,{projects:e.props.projects}))}}),r.a.createElement(p.a,{to:"/portfolio"})),r.a.createElement(R,null))}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("p",null,"My Experience page is currently in progress. Thank you for your patience! :)")}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(d.a,null,r.a.createElement(d.a.Brand,{href:"/"},r.a.createElement("h1",{className:"nav-name"},"ELISABETH (LISI) CASE")),r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(h.a.Link,{href:"portfolio"},"Portfolio"),r.a.createElement(h.a.Link,{href:"experience"},"Experience"),r.a.createElement(h.a.Link,{href:"about"},"About"))))}}]),a}(n.Component),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:casee@uw.edu"},r.a.createElement(J.a,{className:"contact-icon",size:"24"})),r.a.createElement("a",{href:"https://linkedin.com/in/elisabethcase"},r.a.createElement(J.c,{className:"contact-icon",size:"24"})),r.a.createElement("a",{href:"https://github.com/lisicase"},r.a.createElement(J.b,{className:"contact-icon",size:"24"}))),r.a.createElement("p",null,"Copyright \xa9 2020. All rights reserved.")))}}]),a}(n.Component),z=M;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(37);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(z,{projects:_}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.d44922c0.chunk.js.map