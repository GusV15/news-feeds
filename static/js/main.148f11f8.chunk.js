(this["webpackJsonpgustavo-velasquez"]=this["webpackJsonpgustavo-velasquez"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/technical_difficulties.d94af8cb.jpg"},21:function(e,n,t){e.exports=t.p+"static/media/loading.337899df.svg"},34:function(e,n,t){e.exports=t.p+"static/media/news-room.b3826011.png"},35:function(e,n,t){e.exports=t.p+"static/media/search.7484088f.svg"},36:function(e,n,t){e.exports=t.p+"static/media/searchBlocked.3ec51afb.svg"},40:function(e,n,t){e.exports=t.p+"static/media/cancel.9bf4b416.svg"},41:function(e,n,t){e.exports=t.p+"static/media/previous.248e9359.svg"},42:function(e,n,t){e.exports=t.p+"static/media/previousBlocked.1619d2cb.svg"},43:function(e,n,t){e.exports=t.p+"static/media/next.093cce66.svg"},44:function(e,n,t){e.exports=t.p+"static/media/nextBlocked.3ac47e47.svg"},45:function(e,n,t){e.exports=t.p+"static/media/twitter.a57ea219.svg"},46:function(e,n,t){e.exports=t.p+"static/media/facebook.700dba70.svg"},47:function(e,n,t){e.exports=t.p+"static/media/instagram.fc23b902.svg"},49:function(e,n,t){e.exports=t(61)},55:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(30),i=t.n(o),c=t(1),l=t(16),s=function(e,n,t){t(p(!0)),t(f(!1)),fetch("".concat(n).concat(e)).then((function(e){if(!e.ok)throw Error(e.statusText);return t(p(!1)),e})).then((function(e){return e.json()})).then((function(e){return t(g(e))})).catch((function(e){return t(f(!0))}))},u=function(e){return function(n){return s(e,"https://api.canillitapp.com/news/category/",n)}},m=function(e){return function(n){return s(e,"https://api.canillitapp.com/latest/",n)}},d=function(e){return function(n){return s(e,"https://api.canillitapp.com/search/",n)}},p=function(e){return{type:"REQUESTING_NEWS",inProgress:e}},f=function(e){return{type:"REQUESTING_ERROR",isError:e}},g=function(e){return{type:"REQUESTING_SUCCESS",news:e}},h={isError:!1,inProgress:!1,news:[],limit:10,offset:0,currentPage:1,blocked:"previous"},b=Object(l.c)({resultNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0,t=e,r=t.currentPage,a=t.offset,o=t.limit;switch(n.type){case"REQUESTING_SUCCESS":if(e=h,"Dise\xf1o"===n.news[0].category){var i=n.news.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{bayes_category_id:6})}));return Object(c.a)(Object(c.a)({},e),{},{news:i})}return Object(c.a)(Object(c.a)({},e),{},{news:n.news});case"GO_PREVIOUS_PAGE":var l=Object(c.a)(Object(c.a)({},e),{},{offset:a-o,currentPage:r-1,blocked:""});return l.currentPage>=l.news.length/l.limit?l=Object(c.a)(Object(c.a)({},l),{},{blocked:"next"}):l.offset<=0&&(l=Object(c.a)(Object(c.a)({},l),{},{blocked:"previous"})),l;case"GO_NEXT_PAGE":var s=Object(c.a)(Object(c.a)({},e),{},{offset:a+o,currentPage:r+1,blocked:""});return s.currentPage>=s.news.length/s.limit?s=Object(c.a)(Object(c.a)({},s),{},{blocked:"next"}):s.offset<=0&&(s=Object(c.a)(Object(c.a)({},s),{},{blocked:"previous"})),s;default:return e}},requestingNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUESTING_NEWS":return Object(c.a)(Object(c.a)({},e),{},{inProgress:n.inProgress});default:return e}},requestingError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUESTING_ERROR":return Object(c.a)(Object(c.a)({},e),{},{isError:n.isError});default:return e}}}),w=t(3),x=(t(55),t(11)),E=t(12),y=t(15),v=t(14),j=t(9),k=t(13),O=t(4),N=t(34),_=t.n(N),G=t(35),P=t.n(G),C=t(36),S=t.n(C);function z(){var e=Object(w.a)(['\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  min-height: 105px;\n  height: auto;\n  background-color: var(--bg-main-color);\n  border-bottom: 0.1em solid #e5e5e5;\n  .logo-container {\n    margin-left: 4em;\n  }\n  .logo-container h2 {\n    font-size: 1.05em;\n    font-weight: 500;\n    letter-spacing: 0.04em;\n    color: var(--title-color);\n  }\n  .logo-container img {\n    width: 3em;\n    height: 50px;\n  }\n  .search-container {\n    display: flex;\n    margin-right: 4em;\n  }\n  .search-container input[type="text"] {\n    min-width: 12%;\n    height: 40px;\n    line-height: 40px;\n    font-size: 0.9em;\n    margin-right: 1.7em;\n    padding-left: 1em;\n    border: 1px solid #c4c4c4;\n    outline: none;\n    border-radius: 7px;\n  }\n  .search-container input[type="text"]:focus {\n    border: 1px solid var(--main-color);\n  }\n  .search-container input[type="image"] {\n    width: 40px;\n    height: 40px;\n    margin-left: -15px;\n    border: none;\n    outline: none;\n  }\n  @media screen and (max-width: 530px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    .logo-container,\n    .search-container {\n      margin: 1em 0;\n    }\n  }\n']);return z=function(){return e},e}var R=O.a.header(z()),B=function(e){Object(y.a)(t,e);var n=Object(v.a)(t);function t(){var e;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={keyword:""},e.setKeyword=function(n){var t=n.target.value;return e.setState({keyword:t})},e.searchNews=function(n){n.preventDefault(),e.props.onGetByKeyword(e.state.keyword)},e}return Object(E.a)(t,[{key:"render",value:function(){var e=this,n=this.state.keyword;return a.a.createElement(R,null,a.a.createElement("div",{className:"logo-container"},a.a.createElement("a",{href:"/",alt:"news-room"},a.a.createElement("img",{src:_.a,alt:"news-room"})),a.a.createElement("h2",null,"News Feeds")),a.a.createElement("div",{className:"search-container"},a.a.createElement("form",{onSubmit:this.searchNews},a.a.createElement("input",{type:"text",placeholder:"Buscar noticias",value:n,onChange:this.setKeyword})),a.a.createElement(k.b,{to:"/search/".concat(n),onClick:function(){return e.props.onGetByKeyword(n)}},a.a.createElement("input",{onClick:this.searchNews,type:"image",src:n?P.a:S.a,disabled:!n,alt:"search-news"}))))}}]),t}(r.Component),X=Object(j.b)(null,(function(e){return{onGetByKeyword:function(n){return e(d(n))}}}))(B),U=function(){var e=new Date,n=e.getDate(),t=e.getMonth()+1,r=e.getFullYear();return 1===n.toString().length&&(n="0"+n),1===t.toString().length&&(t="0"+t),"".concat(r,"-").concat(t,"-").concat(n)},T=[{id:1,category:"pol\xedtica"},{id:2,category:"internacionales"},{id:3,category:"tecnolog\xeda"},{id:4,category:"espect\xe1culos"},{id:5,category:"deportes"},{id:6,category:"dise\xf1o"}];function D(){var e=Object(w.a)(["\n  width: 100%;\n  min-height: 65px;\n  .categories-list {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n    list-style: none;\n    text-transform: uppercase;\n  }\n  .categories-list > * {\n    width: 12%;\n    height: 65px;\n    line-height: 65px;\n    text-decoration: none;\n    color: var(--text-main-color);\n    font-size: 0.9em;\n    font-weight: 500;\n  }\n  .categories {\n    color: var(--main-color);\n  }\n  .categories-list > *:hover {\n    transform: scale(1.02);\n    transition-duration: 0.2s;\n  }\n  @media screen and (max-width: 930px) {\n    .categories-list > * {\n      width: 25%;\n    }\n  }\n  @media screen and (max-width: 670px) {\n    .categories-list {\n      display: flex;\n      flex-flow: column wrap;\n      justify-content: center;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    .categories-list {\n      display: flex;\n      flex-flow: column wrap;\n      justify-content: center;\n      align-items: center;\n    }\n    .categories-list > * {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 35px;\n    }\n  }\n"]);return D=function(){return e},e}var q=O.a.section(D()),I=function(e){Object(y.a)(t,e);var n=Object(v.a)(t);function t(){return Object(x.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props,n=e.onGetByCategory,t=e.onGetByDate;return a.a.createElement(q,null,a.a.createElement("div",{className:"categories-list"},a.a.createElement(k.c,{exact:!0,to:"/",onClick:function(){return t(U())},activeClassName:"categories"},"Home"),T.map((function(e){var t=e.id,r=e.category;return a.a.createElement(k.c,{exact:!0,to:"/categories/".concat(t),key:t,activeClassName:"categories",onClick:function(){return n(t)}},r)}))))}}]),t}(r.Component),L=Object(j.b)(null,(function(e){return{onGetByCategory:function(n){return e(u(n))},onGetByDate:function(n){return e(m(n))}}}))(I),A=t(2),K=t(18),Q=t.n(K);function M(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 30%;\n  margin: 1em;\n  padding: 0;\n  border-radius: 5px;\n  background-color: #ffffff;\n  border: 1px solid #ededf0;\n  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  text-decoration: none;\n  :hover {\n    transform: scale(1.01);\n  }\n  a {\n    text-decoration: none;\n  }\n  .category__container {\n    position: absolute;\n    background: rgba(252, 75, 99, 0.6);\n    color: #ffffff;\n    text-transform: uppercase;\n    padding: 4px 14px;\n    border-top-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    font-size: 14px;\n    z-index: 10;\n  }\n  img {\n    height: 200px;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    background: #f0f0f0;\n    background-size: cover;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n  }\n  .description__container {\n    width: 100%;\n    height: 200px;\n  }\n  .description__container .source {\n    margin-top: 10px;\n    font-weight: 400;\n    font-size: 18px;\n    color: #82899e;\n  }\n  .source__container span {\n    color: #8289b7;\n    font-size: 1.2em;\n    margin: 5px 2px;\n  }\n  p {\n    font-size: 1.2em;\n    font-weight: 600;\n    color: #3b4359;\n    margin: 0.7em;\n    min-height: 90px;\n    text-align: left;\n  }\n  p:hover {\n    color: var(--main-color);\n    -webkit-transition: color 150ms ease;\n    transition: color 150ms ease;\n  }\n  @media screen and (max-width: 960px) {\n    width: 42%;\n  }\n  @media screen and (max-width: 600px) {\n    width: 60%;\n  }\n  @media screen and (max-width: 500px) {\n    width: 80%;\n  }\n  @media screen and (max-width: 430px) {\n    width: 90%;\n  }\n"]);return M=function(){return e},e}var F=O.a.div(M()),H=function(e){var n=e.category,t=e.img,r=e.title,o=e.sourceName,i=e.sourceURL;return a.a.createElement(F,null,a.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",alt:i},a.a.createElement("div",{className:"category__container"},n),a.a.createElement("img",{src:t,alt:o,onError:function(e){return null===e.target.onerror&&(e.target.src=Q.a)},loading:"lazy"}),a.a.createElement("div",{className:"description__container"},a.a.createElement("p",null,r),a.a.createElement("div",{className:"source__container"},a.a.createElement("span",null,o)))))},J=t(40),V=t.n(J);function W(){var e=Object(w.a)(["\n  width: 100%;\n  min-height: 265px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  font-weight: 600;\n  border-top: 0.08em solid #e5e5e5;\n  img {\n    width: 3em;\n    padding-right: 0.5em;\n  }\n"]);return W=function(){return e},e}var Y=O.a.div(W()),Z=function(e){var n=e.messageError;return a.a.createElement(Y,null,a.a.createElement("img",{src:V.a,alt:"error"}),a.a.createElement("p",null,n))},$=t(21),ee=t.n($),ne=t(41),te=t.n(ne),re=t(42),ae=t.n(re),oe=t(43),ie=t.n(oe),ce=t(44),le=t.n(ce);function se(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  height: 50px;\n  margin-top: 1.2em;\n  & > * {\n    width: 3.7em;\n    height: 50px;\n    line-height: 50px;\n  }\n  span {\n    width: 2.3em;\n    margin: 0 0.3em;\n    font-size: 1.4em;\n    font-weight: 600;\n    background-color: #ffd2d5;\n    border-radius: 50%;\n  }\n  input {\n    border: none;\n    outline: none;\n    border-radius: 0.5em;\n  }\n"]);return se=function(){return e},e}var ue=O.a.div(se()),me=Object(j.b)((function(e){var n=e.resultNews;return{currentPage:n.currentPage,blocked:n.blocked}}),(function(e){return{onPreviousPage:function(){return e({type:"GO_PREVIOUS_PAGE"})},onNextPage:function(n){return e({type:"GO_NEXT_PAGE"})}}}))((function(e){var n=e.currentPage,t=e.blocked,r=e.onPreviousPage,o=e.onNextPage;return a.a.createElement(ue,{blocked:t},a.a.createElement("input",{type:"image",disabled:"previous"===t,onClick:function(){r(),window.scrollTo(0,0)},src:"previous"===t?ae.a:te.a,alt:"previous"}),a.a.createElement("span",null,n),a.a.createElement("input",{type:"image",disabled:"next"===t,onClick:function(){o(),window.scrollTo(0,0)},src:"next"===t?le.a:ie.a,alt:"next"}))}));function de(){var e=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-top: 1.5em;\n  min-height: 320px;\n  background-color: var(--bg-secondary-color);\n  border-top: 0.1em solid #e5e5e5;\n  .loading-container {\n    display: block;\n    width: 6em;\n    height: 6em;\n    margin: 1em auto;\n    -webkit-animation: 1s rotar linear infinite;\n    animation: 1s rotar linear infinite;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n  }\n\n  @keyframes rotar {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes rotar {\n    from {\n      -webkit-transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return de=function(){return e},e}function pe(){var e=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--bg-secondary-color);\n  border-top: 0.1em solid #e5e5e5;\n  padding-bottom: 2em;\n  .news__container {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    max-width: 1110px;\n    padding-top: 1.5em;\n  }\n"]);return pe=function(){return e},e}var fe=O.a.section(pe()),ge=O.a.div(de()),he=function(e){Object(y.a)(t,e);var n=Object(v.a)(t);function t(){return Object(x.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.match.url.includes("categories")?this.props.onGetByCategory(this.props.match.params.id):this.props.match.url.includes("search")&&this.props.onGetByKeyword(this.props.match.params.keyword)}},{key:"render",value:function(){var e=this.props,n=e.hasError,t=e.isLoading,r=e.news,o=e.offset,i=e.limit;return n?a.a.createElement("div",{className:"container"},a.a.createElement("h6",null,"Error en la busqueda de noticias.")):t?a.a.createElement(ge,null,a.a.createElement("img",{className:"loading-container",src:ee.a,alt:"loading"})):r.length?a.a.createElement(fe,null,a.a.createElement("div",{className:"news__container"},r.slice(o,o+i).map((function(e){return a.a.createElement(H,{key:e.news_id,img:e.img_url?e.img_url:Q.a,title:e.title,sourceName:e.source_name,category:e.category?e.category:"GENERAL",sourceURL:e.url})}))),a.a.createElement(me,null)):a.a.createElement(Z,{messageError:"No se encontraron noticias con la palabra ingresada"})}}]),t}(r.Component),be=Object(j.b)((function(e){var n=e.resultNews,t=e.requestingError,r=e.requestingNews;return{news:n.news,hasError:t.hasError,isLoading:r.inProgress,offset:n.offset,limit:n.limit}}),(function(e){return{onGetByCategory:function(n){return e(u(n))},onGetByKeyword:function(n){return e(d(n))}}}))(he);function we(){var e=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-top: 1.5em;\n  min-height: 320px;\n  background-color: var(--bg-secondary-color);\n  border-top: 0.1em solid #e5e5e5;\n  .loading-container {\n    display: block;\n    width: 6em;\n    height: 6em;\n    margin: 1em auto;\n    -webkit-animation: 1s rotar linear infinite;\n    animation: 1s rotar linear infinite;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n  }\n\n  @keyframes rotar {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes rotar {\n    from {\n      -webkit-transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return we=function(){return e},e}function xe(){var e=Object(w.a)(["\n  background-color: #f5f5f5;\n  border-top: 0.1em solid #e5e5e5;\n  padding-bottom: 2em;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  .news__container {\n    max-width: 1108px;\n    margin: auto;\n    padding-top: 1.5em;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n  }\n"]);return xe=function(){return e},e}var Ee=O.a.section(xe()),ye=O.a.div(we()),ve=function(e){Object(y.a)(t,e);var n=Object(v.a)(t);function t(){var e;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).componentDidMount=function(){e.props.onGetByDate(U())},e}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props,n=e.news,t=e.hasError,r=e.isLoading;return t?a.a.createElement("div",{className:"container"},a.a.createElement("h6",null,"Error en la busqueda de noticias.")):r?a.a.createElement(ye,null,a.a.createElement("img",{className:"loading-container",src:ee.a,alt:"loading"})):a.a.createElement(Ee,null,a.a.createElement("div",{className:"news__container"},n.slice(0,10).map((function(e){return a.a.createElement(H,{key:e.news_id,img:e.img_url?e.img_url:Q.a,title:e.title,sourceName:e.source_name,category:e.category?e.category:"HOME",sourceURL:e.url})}))))}}]),t}(r.Component),je=Object(j.b)((function(e){var n=e.resultNews,t=e.requestingError,r=e.requestingNews;return{news:n.news,hasError:t.hasError,isLoading:r.inProgress}}),(function(e){return{onGetByDate:function(n){return e(m(n))}}}))(ve),ke=function(){return a.a.createElement(A.c,null,a.a.createElement(A.a,{exact:!0,path:"/",component:je}),a.a.createElement(A.a,{path:"/categories/:id",component:be}),a.a.createElement(A.a,{path:"/search/:keyword",component:be}),a.a.createElement(A.a,null,a.a.createElement(Z,{messageError:"No existe la ruta ingresa"})))},Oe=t(45),Ne=t.n(Oe),_e=t(46),Ge=t.n(_e),Pe=t(47),Ce=t.n(Pe);function Se(){var e=Object(w.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-content: center;\n  height: auto;\n  border-top: 0.1em solid #e5e5e5;\n  & > * {\n    height: 120px;\n    list-style: none;\n    font-size: 0.8em;\n    margin-top: 1.5em;\n    line-height: 1.8em;\n  }\n  .title {\n    font-weight: 700;\n    font-size: 1em;\n    letter-spacing: 0.1em;\n    color: #000000;\n  }\n  .col-3 {\n    display: flex;\n    flex-flow: column;\n  }\n  .col-3 li.title {\n    height: 30px;\n  }\n  ul li img {\n    width: 2em;\n  }\n  ul > :nth-child(n + 2) {\n    color: #eb5151;\n    cursor: pointer;\n  }\n  .copyright {\n    width: 100%;\n    height: auto;\n    margin-top: 1em;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: center;\n    border-top: 0.1em solid #e5e5e5;\n  }\n  .copyright p {\n    font-size: 1.1em;\n    font-weight: 500;\n    padding: 0.5em;\n  }\n  @media screen and (max-width: 700px) {\n    & > * {\n      width: 30%;\n    }\n  }\n  @media screen and (max-width: 560px) {\n    & > * {\n      width: 45%;\n    }\n    .copyright {\n      width: 100%;\n    }\n    .copyright p {\n      font-size: 0.9em;\n    }\n  }\n  @media screen and (max-width: 450px) {\n    flex-flow: column wrap;\n    & > * {\n      width: 100%;\n    }\n  }\n  @media screen and (max-width: 400px) {\n    & > * {\n      width: 100%;\n    }\n    .copyright p {\n      font-size: 0.8em;\n    }\n  }\n"]);return Se=function(){return e},e}var ze=O.a.footer(Se()),Re=function(){return a.a.createElement(ze,null,a.a.createElement("ul",{className:"col-1"},a.a.createElement("li",{className:"title"},"La empresa"),a.a.createElement("li",null,"\xbfQuienes Somos?"),a.a.createElement("li",null,"Empleo"),a.a.createElement("li",null,"Prensa")),a.a.createElement("ul",{className:"col-2"},a.a.createElement("li",{className:"title"},"Trabaja en News Feeds"),a.a.createElement("li",null,"Perfiles vacantes"),a.a.createElement("li",null,"Dejanos tus datos"),a.a.createElement("li",null,"Grupo de profesionales")),a.a.createElement("ul",{className:"col-2"},a.a.createElement("li",{className:"title"},"M\xe1s"),a.a.createElement("li",null,"Atenci\xf3n al Cliente"),a.a.createElement("li",null,"Preguntas Frecuentes"),a.a.createElement("li",null,"Condiciones Generales"),a.a.createElement("li",null,"Sitios recomendados")),a.a.createElement("ul",{className:"col-3"},a.a.createElement("li",{className:"title"},"Seguinos"),a.a.createElement("li",null,a.a.createElement("img",{src:Ne.a,alt:"twitter"})),a.a.createElement("li",null,a.a.createElement("img",{src:Ge.a,alt:"facebook"})),a.a.createElement("li",null,a.a.createElement("img",{src:Ce.a,alt:"instagram"}))),a.a.createElement("ul",{className:"col-4"},a.a.createElement("li",{className:"title"},"Contactanos"),a.a.createElement("li",null,"0810-222-XXXX"),a.a.createElement("li",null,"011 15-XXXX-XXXX"),a.a.createElement("li",null,"4643-XXXX")),a.a.createElement("div",{className:"copyright"},a.a.createElement("p",null,"Copyright \xa92020 by News Feeds, todos los derechos reservados.")))};function Be(){var e=Object(w.a)(["\n  text-align: center;\n"]);return Be=function(){return e},e}function Xe(){var e=Object(w.a)(['\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n']);return Xe=function(){return e},e}var Ue=O.a.body(Xe()),Te=O.a.div(Be()),De=function(){return a.a.createElement(Ue,null,a.a.createElement(Te,null,a.a.createElement(X,null),a.a.createElement(L,null),a.a.createElement(ke,null),a.a.createElement(Re,null)))},qe=t(48),Ie=Object(l.d)(b,Object(l.a)(qe.a)),Le=document.getElementById("root");i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j.a,{store:Ie},a.a.createElement(k.a,{basename:"/news-feeds"},a.a.createElement(De,null)))),Le)}},[[49,1,2]]]);
//# sourceMappingURL=main.148f11f8.chunk.js.map