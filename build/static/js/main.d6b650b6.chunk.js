(this["webpackJsonpgoogle-books-react"]=this["webpackJsonpgoogle-books-react"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),s=(a(65),a(5)),i=a(6),l=a(8),u=a(9),p=a(46),m=a.n(p),h=a(32),d=a.n(h),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:d.a.searchDiv},o.a.createElement("input",{className:d.a.searchBar,placeholder:"Enter title...",value:this.props.searchText,onChange:this.props.setSearchText}))}}]),a}(n.Component),g=a(47),f=a.n(g),v=a(58),k=a(21),E=a.n(k),y=a(28),O=a.n(y);O.a.initializeApp({apiKey:"AIzaSyDBa_z_k4Fc-jmoUNLV0l_uwVo7nmXQTW0",authDomain:"books-86df2.firebaseapp.com",databaseURL:"https://books-86df2.firebaseio.com",projectId:"books-86df2",storageBucket:"books-86df2.appspot.com",messagingSenderId:"611327615155",appId:"1:611327615155:web:da445cdbca854346dc90c6",measurementId:"G-9F9SH54N69"});var j={google:new O.a.auth.GoogleAuthProvider},w=O.a.firestore(),_=O.a,C=a(104),D=a(103),I=a(52),x=a(48),N=a(49),S=a.n(N),B=a(19),M=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("p",{className:S.a.navItem,onClick:this.props.toggleMenu},o.a.createElement(B.a,{to:this.props.route},this.props.name))}}]),a}(n.Component),L=a(34),A=a.n(L),z=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("header",{className:A.a.appHeader},o.a.createElement("h1",null,"Book finder"),o.a.createElement("nav",null,o.a.createElement("ul",{className:A.a.navList},o.a.createElement(M,{route:"google-books-react",name:"Home"}),o.a.createElement(M,{route:"/private/mycabinet",name:"MyCab"}))))}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={show:!1},e.handleSave=function(t){t.preventDefault(),w.collection("google-books").add(Object(v.a)({},e.props.bookData,{addedBy:e.props.user.uid})).then((function(){console.log("It worked!"),alert("Saved to your cabinet!")}))},e}return Object(i.a)(a,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this.props.bookData.volumeInfo;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:E.a.bookContainer,key:this.props.bookData.id},o.a.createElement("img",{src:null!=e.imageLinks?e.imageLinks.thumbnail:"http://tiny.cc/vuzxlz",alt:"not working",className:E.a.coverImage}),o.a.createElement(x.a,{icon:I.a,onClick:this.handleSave,className:E.a.icon}),o.a.createElement("div",null,o.a.createElement(C.a,{variant:"dark",size:"sm",onClick:this.handleModal,style:{width:"100px",margin:"auto"}},"More info")),o.a.createElement(D.a,{show:this.state.show,onHide:this.handleModal},o.a.createElement(D.a.Header,{closeButton:!0}," Modal test "),o.a.createElement("div",{className:E.a.firstPartModal},o.a.createElement("img",{src:null!=e.imageLinks?e.imageLinks.thumbnail:"http://tiny.cc/vuzxlz",alt:"not working",className:E.a.coverImage}),o.a.createElement("div",null,o.a.createElement("p",{className:E.a.title},this.title),o.a.createElement("p",null,"--- by ---"),o.a.createElement("p",null,e.authors),o.a.createElement("p",null,"Publisher: ",this.props.bookData.publisher),o.a.createElement("p",null,"Total pages: ",this.props.bookData.pageCount))),o.a.createElement("div",{className:E.a.description},this.props.bookData.description))))}},{key:"title",get:function(){var e=this.props.bookData.volumeInfo.title;return e.length>40?e.substring(0,40)+"...":e}}]),a}(n.Component),H=a(55),P=a.n(H),F=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.props.bookData?o.a.createElement("section",{className:P.a.card},this.props.bookData.map((function(t){return o.a.createElement(T,{bookData:t,key:t.id,user:e.props.user})}))):o.a.createElement("h1",null,"Loading data..."))}}]),a}(n.Component),W=a(56),Y=a.n(W),G=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this.props.signIn,className:Y.a.google},o.a.createElement("button",null,"Sign in with google"))}}]),a}(n.Component),R=a(57),V=a.n(R),J=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={myCards:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.collection("google-books").where("addedBy","==",this.props.user.uid).get().then((function(t){var a=t.docs.map((function(e){return e.data()}));e.setState({myCards:a})}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"My Cabinet"),o.a.createElement("section",{className:V.a.card},this.state.myCards.map((function(e){return o.a.createElement(T,{bookData:e,key:e.id})}))))}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.user?this.props.children:(B.d.navigate("/login"),null)}}]),a}(n.Component),K=function(){return o.a.createElement("h2",null,"Not Found")},U=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={user:null},e.signIn=function(){_.auth().signInWithPopup(j.google).then((function(t){e.setState({user:t.user}),console.log(e.state.user)})).catch((function(e){console.log(e)}))},e.signOut=function(){_.auth().signOut().then((function(){e.setState({user:null}),B.d.navigate("/login")}))},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(B.c,null,o.a.createElement(B.b,{noThrow:!0,from:"/",to:"google-books-react"}),o.a.createElement(F,{path:"google-books-react",bookData:this.props.bookData,user:this.state.user}),o.a.createElement(G,{path:"login",signIn:this.signIn}),o.a.createElement(q,{path:"private",user:this.state.user},o.a.createElement(J,{path:"mycabinet",user:this.state.user,signOut:this.signOut})),o.a.createElement(K,{default:!0}))}}]),a}(n.Component),X=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={books:[],searchText:"",filteredBook:[],urlAPI:"https://www.googleapis.com/books/v1/volumes?"},e.setSearchText=function(t){t.preventDefault();var a=t.target.value;f.a.get("".concat(e.state.urlAPI,"q=").concat(a,"+intitle&key=").concat("AIzaSyDScmM5ENVC7uIPYNLWGz1711wVjAlc9MM","&maxResults=40")).then((function(t){e.setState({books:t.data.items,filteredBook:t.data.items})})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:m.a.wrapper},o.a.createElement("header",null,o.a.createElement(z,null),o.a.createElement(b,{setSearchText:this.setSearchText})),o.a.createElement(U,{bookData:this.state.filteredBook}))}}]),a}(n.Component);a(99),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,a){e.exports={bookContainer:"Book_bookContainer__YKHGh",coverImage:"Book_coverImage__3jZpc",icon:"Book_icon__2pOxr"}},32:function(e,t,a){e.exports={searchDiv:"Searchbar_searchDiv__utLRa",searchBar:"Searchbar_searchBar__oH1Ts"}},34:function(e,t,a){e.exports={navList:"Header_navList__1Ba3Y"}},46:function(e,t,a){e.exports={wrapper:"App_wrapper__1rqsP"}},49:function(e,t,a){},55:function(e,t,a){e.exports={card:"Booklist_card__3x3sX"}},56:function(e,t,a){e.exports={google:"Login_google__2YxWd"}},57:function(e,t,a){e.exports={card:"MyCab_card__1RZYJ"}},60:function(e,t,a){e.exports=a(100)},65:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.d6b650b6.chunk.js.map