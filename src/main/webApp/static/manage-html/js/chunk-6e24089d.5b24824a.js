(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e24089d"],{"0a53":function(t,e,i){},"259e":function(t,e,i){},"28a5":function(t,e,i){i("214f")("split",2,function(t,e,n){"use strict";var s=i("aae3"),a=n,o=[].push,u="split",r="length",c="lastIndex";if("c"=="abbc"[u](/(b)*/)[1]||4!="test"[u](/(?:)/,-1)[r]||2!="ab"[u](/(?:ab)*/)[r]||4!="."[u](/(.?)(.?)/)[r]||"."[u](/()()/)[r]>1||""[u](/.?/)[r]){var l=void 0===/()??/.exec("")[1];n=function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!s(t))return a.call(i,t,e);var n,u,d,p,b,h=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?4294967295:e>>>0,_=new RegExp(t.source,m+"g");l||(n=new RegExp("^"+_.source+"$(?!\\s)",m));while(u=_.exec(i)){if(d=u.index+u[0][r],d>f&&(h.push(i.slice(f,u.index)),!l&&u[r]>1&&u[0].replace(n,function(){for(b=1;b<arguments[r]-2;b++)void 0===arguments[b]&&(u[b]=void 0)}),u[r]>1&&u.index<i[r]&&o.apply(h,u.slice(1)),p=u[0][r],f=d,h[r]>=v))break;_[c]===u.index&&_[c]++}return f===i[r]?!p&&_.test("")||h.push(""):h.push(i.slice(f)),h[r]>v?h.slice(0,v):h}}else"0"[u](void 0,0)[r]&&(n=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});return[function(i,s){var a=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,a,s):n.call(String(a),i,s)},n]})},3253:function(t,e,i){"use strict";var n=i("259e"),s=i.n(n);s.a},"38ba":function(t,e,i){},4514:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isPaperPage?t._e():i("bread-nav",{attrs:{nav:t.nav}}),i("div",{staticClass:"card"},[i("div",{staticClass:"search"},[i("div",{staticClass:"search-item"},[i("p",{staticClass:"search-item__title"},[t._v("试题类型")]),i("el-select",{attrs:{disabled:!t.isAddPage},on:{change:t.onQuestionTypeChange},model:{value:t.submit.questionType,callback:function(e){t.$set(t.submit,"questionType",e)},expression:"submit.questionType"}},t._l(t.$enums.QuestionType.list,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),i("div",{staticClass:"search-item"},[i("p",{staticClass:"search-item__title"},[t._v("年级")]),i("el-select",{on:{change:t.onGradeChange},model:{value:t.submit.gradeId,callback:function(e){t.$set(t.submit,"gradeId",e)},expression:"submit.gradeId"}},t._l(t.gradeList,function(t,e){return i("el-option",{key:e,attrs:{label:t.gradeName,value:t.id}})}))],1),i("div",{staticClass:"search-item"},[i("p",{staticClass:"search-item__title"},[t._v("科目")]),i("el-select",{attrs:{loading:t.subjectLoading},on:{change:t.onSubjectChange},model:{value:t.submit.subjectId,callback:function(e){t.$set(t.submit,"subjectId",e)},expression:"submit.subjectId"}},t._l(t.subjectList,function(t,e){return i("el-option",{key:e,attrs:{label:t.subjectName,value:t.id}})}))],1),i("div",{staticClass:"search-item"},[i("p",{staticClass:"search-item__title"},[t._v("难度系数")]),i("el-select",{model:{value:t.submit.difficultLevel,callback:function(e){t.$set(t.submit,"difficultLevel",e)},expression:"submit.difficultLevel"}},t._l(t.difficultLevelList,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),i("div",{staticClass:"search-item search-item--knowledge"},[i("p",{staticClass:"search-item__title"},[t._v("知识点")]),i("el-select",{attrs:{loading:t.knowledgeLoading,multiple:"","default-first-option":"",filterable:""},model:{value:t.submit.knowledgeIds,callback:function(e){t.$set(t.submit,"knowledgeIds",e)},expression:"submit.knowledgeIds"}},t._l(t.knowledgeList,function(t,e){return i("el-option",{key:e,attrs:{label:t.knowledgeName,value:t.id}})}))],1)]),i("div",{staticClass:"section"},[i("h1",{staticClass:"section__title"},[t._v("题干")]),!t.id||t.id&&t.submit.titleContent?i("wang-editor",{attrs:{content:t.submit.titleContent,height:"200px"},on:{"update:content":function(e){t.$set(t.submit,"titleContent",e)}}}):t._e()],1),"SELECT"===t.submit.questionType?i("v-select",{attrs:{submit:t.submit}}):t._e(),"BLANK"===t.submit.questionType?i("blank",{attrs:{submit:t.submit}}):t._e(),"TRUEORFALSE"===t.submit.questionType?i("true-or-false",{attrs:{submit:t.submit}}):t._e(),"ANSWER"===t.submit.questionType?i("answer",{attrs:{submit:t.submit}}):t._e(),"WORDS"===t.submit.questionType?i("words",{attrs:{"child-question-list":t.submit.childQuestionAddList}}):t._e(),"COMBINATION"===t.submit.questionType?i("div",{staticClass:"section"},[t._m(0),t.submit.childQuestionAddList&&t.submit.childQuestionAddList.length?i("div",{staticClass:"section__content bg-gray"},t._l(t.submit.childQuestionAddList,function(e,n){return i("div",{key:n},[i("h1",{staticClass:"section__title"},[t._v("题干"+t._s(n+1))]),i("wang-editor",{attrs:{"auto-adjust-tool-bar-visible":"",content:e.titleContent},on:{"update:content":function(i){t.$set(e,"titleContent",i)}}}),"SELECT"===e.questionType?i("v-select",{attrs:{submit:e}}):t._e(),"BLANK"===e.questionType?i("blank",{attrs:{submit:e}}):t._e(),"TRUEORFALSE"===e.questionType?i("true-or-false",{attrs:{submit:e}}):t._e(),"ANSWER"===e.questionType?i("answer",{attrs:{submit:e}}):t._e()],1)})):t._e(),i("el-dropdown",{on:{command:t.doAddBigQuestion}},[i("el-button",{staticClass:"btn-submit",attrs:{type:"primary"}},[t._v("\n          添加试题"),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.comboQuestionType,function(e,n){return i("el-dropdown-item",{key:n,attrs:{command:e.value}},[t._v("\n            "+t._s(e.label)+"\n          ")])}))],1)],1):t._e(),i("el-button",{staticClass:"btn-submit",attrs:{loading:t.submitting},on:{click:t.doSubmit}},[t._v("\n      "+t._s(t.id?"更新":"新增")+"\n    ")])],1)],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"section__title"},[i("span",[t._v("小题")]),i("span",{staticClass:"section__subtitle"},[t._v("选择录入的题型，并按格式输入题目，保存后将录入题目")])])}],a=(i("a481"),i("28a5"),i("6d67"),i("96cf"),i("1da1")),o=(i("57e7"),i("7f7f"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[i("h1",{staticClass:"section__title"},[i("span",[t._v("选项")]),i("span",{staticClass:"section__subtitle"},[t._v("单/多选题的选项范围从2至20")]),i("span",{staticClass:"section__btn",on:{click:t.doAddOption}},[t._v("添加选项")])]),i("div",{staticClass:"section__content"},t._l(t.submit.questionOptionList,function(e,n){return i("div",{key:n,staticClass:"section__question"},[i("el-radio",{attrs:{label:String.fromCharCode(n+65)},model:{value:t.submit.answerContent,callback:function(e){t.$set(t.submit,"answerContent",e)},expression:"submit.answerContent"}}),i("wang-editor",{ref:"wang-editor"+n,refInFor:!0,attrs:{"auto-adjust-tool-bar-visible":"",height:"40px",content:e.optionContent},on:{"update:content":function(i){t.$set(e,"optionContent",i)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:n>1,expression:"idx > 1"}],staticClass:"el-icon-delete",on:{click:function(e){t.doDeleteOption(n)}}})],1)}))])}),u=[],r={props:{submit:{type:Object,required:!0}},methods:{doAddOption:function(){this.submit.questionOptionList.push({optionContent:""})},doDeleteOption:function(t){var e=this;String.fromCharCode(t+65)!==this.submit.answerContent?(this.submit.questionOptionList.splice(t,1),setTimeout(function(){for(var i=0;i<e.submit.questionOptionList.length;i++)e.$refs["wang-editor"+t][0].reRender()},0)):this.$message({message:"当前选项是答案, 不能删除",type:"warning"})}}},c=r,l=(i("4ea7"),i("2877")),d=Object(l["a"])(c,o,u,!1,null,"7d698232",null);d.options.__file="Select.vue";var p=d.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[i("h1",{staticClass:"section__title"},[i("span",[t._v("答案")]),i("span",{staticClass:"section__subtitle"},[t._v("请填写每个填空的答案")]),i("span",{staticClass:"section__btn",on:{click:t.doAddOption}},[t._v("添加答案")])]),i("div",{staticClass:"section__content"},t._l(t.submit.questionOptionList,function(e,n){return i("div",{key:n,staticClass:"section__question"},[i("span",{staticClass:"el-checkbox"},[t._v(t._s(n+1))]),i("wang-editor",{ref:"wang-editor"+n,refInFor:!0,attrs:{"auto-adjust-tool-bar-visible":"",content:e.optionContent},on:{"update:content":function(i){t.$set(e,"optionContent",i)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:n>0,expression:"idx > 0"}],staticClass:"el-icon-delete",on:{click:function(e){t.doDeleteOption(n)}}})],1)}))])},h=[],m={props:{submit:{type:Object,required:!0}},methods:{doAddOption:function(){this.submit.questionOptionList||(this.submit.questionOptionList=[]),this.submit.questionOptionList.push({optionContent:""})},doDeleteOption:function(t){var e=this;this.submit.questionOptionList.splice(t,1),setTimeout(function(){for(var i=0;i<e.submit.questionOptionList.length;i++)e.$refs["wang-editor"+t][0].reRender()},0)}}},f=m,v=(i("3253"),Object(l["a"])(f,b,h,!1,null,"36381eee",null));v.options.__file="Blank.vue";var _=v.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[t._m(0),i("div",{staticClass:"section__content"},[i("el-radio-group",{model:{value:t.submit.answerContent,callback:function(e){t.$set(t.submit,"answerContent",e)},expression:"submit.answerContent"}},[i("el-radio",{attrs:{label:"正确"}},[t._v("正确")]),i("el-radio",{attrs:{label:"错误"}},[t._v("错误")])],1)],1)])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"section__title"},[i("span",[t._v("答案")]),i("span",{staticClass:"section__subtitle"},[t._v("请选择正确或错误")])])}],w={props:{submit:{type:Object,required:!0}}},L=w,k=(i("ca96"),Object(l["a"])(L,C,g,!1,null,"412b8a3e",null));k.options.__file="TrueOrFalse.vue";var O=k.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[t._m(0),i("div",{staticClass:"section-content"},[i("wang-editor",{attrs:{height:"120px",content:t.submit.answerContent},on:{"update:content":function(e){t.$set(t.submit,"answerContent",e)}}})],1)])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"section__title"},[i("span",[t._v("答案")]),i("span",{staticClass:"section__subtitle"},[t._v("请填写正确答案")])])}],q={props:{submit:{type:Object,required:!0}}},$=q,Q=(i("a406"),Object(l["a"])($,y,x,!1,null,"800c89a6",null));Q.options.__file="Answer.vue";var I=Q.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[t._m(0),i("div",{staticClass:"section__content bg-gray"},[t._l(t.childQuestionList,function(e,n){return i("div",{key:n,staticClass:"section"},[i("div",{staticClass:"section__title"},[i("span",[t._v(t._s(n+1))]),i("span",{staticClass:"section__btn",on:{click:function(e){t.doDeleteChildQuestion(n)}}},[t._v("删除")]),i("span",{staticClass:"section__btn",on:{click:function(e){t.doAddChildQuestionOption(n)}}},[t._v("添加选项")])]),i("div",{staticClass:"section-content"},t._l(e.questionOptionList,function(s,a){return i("div",{key:a,staticClass:"section__question"},[i("el-radio",{attrs:{label:String.fromCharCode(a+65)},model:{value:e.answerContent,callback:function(i){t.$set(e,"answerContent",i)},expression:"childQuestion.answerContent"}}),i("el-input",{model:{value:s.optionContent,callback:function(e){t.$set(s,"optionContent",e)},expression:"option.optionContent"}}),i("i",{directives:[{name:"show",rawName:"v-show",value:a>1,expression:"optionIdx > 1"}],staticClass:"el-icon-delete",on:{click:function(e){t.doDeleteChildQuestionOption(n,a)}}})],1)}))])}),i("el-button",{attrs:{type:"primary"},on:{click:t.doAddChildQuestion}},[t._v("添加小题\n    ")])],2)])},j=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"section__title"},[i("span",[t._v("小题")]),i("span",{staticClass:"section__subtitle"},[t._v("录入各小题选项")])])}],A={props:{childQuestionList:{type:Array,required:!0}},methods:{doAddChildQuestionOption:function(t){var e=this.childQuestionList[t].questionOptionList;e.push({optionContent:""})},doDeleteChildQuestion:function(t){this.childQuestionList.splice(t,1)},doDeleteChildQuestionOption:function(t,e){this.childQuestionList[t].questionOptionList.splice(e,1)},doAddChildQuestion:function(){this.childQuestionList.push({questionType:"SELECT",titleContent:null,answerContent:null,questionOptionList:[{optionContent:""},{optionContent:""},{optionContent:""},{optionContent:""}]})}}},E=A,S=(i("7110"),Object(l["a"])(E,T,j,!1,null,"e5b706e2",null));S.options.__file="Words.vue";var R=S.exports,N={components:{"v-select":p,Blank:_,TrueOrFalse:O,Answer:I,Words:R},data:function(){var t=this;return{nav:[{name:"题库管理",path:"go(-1)"},{name:t.$route.params.id?"编辑试题":"添加试题",path:""}],id:null,gradeList:[],subjectLoading:!1,subjectList:[],difficultLevelList:[{label:"1.0",value:1},{label:"2.0",value:2},{label:"3.0",value:3},{label:"4.0",value:4},{label:"5.0",value:5},{label:"6.0",value:6}],knowledgeLoading:!1,knowledgeList:[],trueOrFalse:"正确",submit:{questionType:"",gradeId:null,subjectId:null,difficultLevel:null,knowledgeIds:[],titleContent:null,answerContent:null,questionOptionList:t.createOptionItem(2),childQuestionAddList:[]},submitting:!1,comboQuestionType:[{label:"选择题",value:"SELECT"},{label:"填空题",value:"BLANK"},{label:"作文题",value:"COMPOSITION"},{label:"解答题",value:"ANSWER"},{label:"判断题",value:"TRUEORFALSE"}]}},props:{questionId:{},questionType:{}},computed:{isAddPage:function(){return"QuestionAdd"===this.$route.name},isPaperPage:function(){return"PaperAdd"===this.$route.name||"PaperEdit"===this.$route.name},isCombinationQuestion:function(){var t=["COMBINATION","WORDS"];return t.indexOf(this.$route.query.questionType)>-1||t.indexOf(this.submit.questionType)>-1||t.indexOf(this.questionType)>-1}},created:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.id=this.isPaperPage?this.questionId:this.$route.params.id,this.queryGradeList(),!this.isAddPage){t.next=4;break}return t.abrupt("return");case 4:this.$nextTick(Object(a["a"])(regeneratorRuntime.mark(function t(){var i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.$loading({target:".card",text:"试题详情获取中..."}),!e.isCombinationQuestion){t.next=7;break}return t.next=4,e.$api.getQuestionCombinationDetailInfo({id:e.id});case 4:e.submit=t.sent,t.next=13;break;case 7:return t.next=9,e.$api.getQuestionDetailInfo({id:e.id});case 9:n=t.sent,"BLANK"===n.questionType&&(n.answerContent?n.questionOptionList=n.answerContent.split(e.$conf.blankQuestionSplitStr).map(function(t,e){return{optionContent:t}}):n.questionOptionList=[]),n.knowledgeIds||(n.knowledgeIds=[]),e.submit=n;case 13:i.close(),e.querySubjectList(),e.queryKnowledgeList();case 16:case"end":return t.stop()}},t,this)})));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{createOptionItem:function(t){for(var e=[],i=0;i<t;i++)e.push({optionContent:""});return e},createQuestionOption:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.submit.questionType;switch(t){case"SELECT":return this.createOptionItem(2);case"BLANK":return this.createOptionItem(1);case"WORDS":return this.createOptionItem(4);default:return this.createOptionItem(0)}},queryGradeList:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.queryQGradeList({});case 2:this.gradeList=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),querySubjectList:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.subjectLoading=!0,t.next=3,this.$api.queryQSubjectList({gradeId:this.submit.gradeId});case 3:this.subjectList=t.sent,this.subjectLoading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),queryKnowledgeList:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.knowledgeLoading=!0,t.next=3,this.$api.queryQKnowledgeInfoList({gradeId:this.submit.gradeId,subjectId:this.submit.subjectId});case 3:e=t.sent,e||(e=[]),this.knowledgeList=e,this.knowledgeLoading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onQuestionTypeChange:function(t){this.submit.questionOptionList=this.createQuestionOption(),this.submit.childQuestionAddList=[],"WORDS"===t&&this.submit.childQuestionAddList.push({questionType:"SELECT",titleContent:null,answerContent:null,questionOptionList:this.createOptionItem(4)})},onGradeChange:function(t){this.submit.subjectId=null,null===t?this.subjectList=[]:this.querySubjectList()},onSubjectChange:function(){this.queryKnowledgeList(),this.submit.knowledgeIds=[]},doAddBigQuestion:function(t){this.submit.childQuestionAddList.push({questionType:t,titleContent:null,answerContent:null,questionOptionList:this.createQuestionOption(t)})},warningMessage:function(t){return this.$message({message:t,type:"warning"})},doSubmit:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.submit,e.questionType){t.next=6;break}return this.warningMessage("请先选择试题类型"),t.abrupt("return");case 6:if(e.gradeId){t.next=11;break}return this.warningMessage("请先选择年级"),t.abrupt("return");case 11:if(e.subjectId){t.next=16;break}return this.warningMessage("请先选择科目"),t.abrupt("return");case 16:if(e.difficultLevel){t.next=21;break}return this.warningMessage("请先选择难度"),t.abrupt("return");case 21:e.titleContent||this.warningMessage("请先填写题干");case 22:if("SELECT"!==e.questionType){t.next=26;break}if(e.answerContent){t.next=26;break}return this.warningMessage("请先选择一个答案"),t.abrupt("return");case 26:if("BLANK"===this.submit.questionType&&(this.submit.answerContent=this.submit.questionOptionList.map(function(t){return t.optionContent}).join(this.$conf.blankQuestionSplitStr)),this.submitting=!0,!this.isAddPage){t.next=45;break}if(t.prev=29,!this.isCombinationQuestion){t.next=35;break}return t.next=33,this.$api.addCombinationQuestionInfo(this.submit);case 33:t.next=37;break;case 35:return t.next=37,this.$api.addQuestionInfo(this.submit);case 37:this.$remind("新增成功"),this.$router.replace({name:"QuestionList"}),t.next=43;break;case 41:t.prev=41,t.t0=t["catch"](29);case 43:t.next=74;break;case 45:if(!this.isPaperPage){t.next=60;break}return i=this.isCombinationQuestion?this.$api.addCombinationQuestionInfo:this.$api.addQuestionInfo,n=null,t.prev=48,t.next=51,i(this.submit);case 51:n=t.sent,t.next=56;break;case 54:t.prev=54,t.t1=t["catch"](48);case 56:this.$emit("editQuestion",n),this.$emit("editQuestion",n),t.next=74;break;case 60:if(t.prev=60,!this.isCombinationQuestion){t.next=66;break}return t.next=64,this.$api.updateCombinationQuestionInfo(this.submit);case 64:t.next=68;break;case 66:return t.next=68,this.$api.updateQuestionInfo(this.submit);case 68:this.$remind("更新成功"),this.$router.replace({name:"QuestionList"}),t.next=74;break;case 72:t.prev=72,t.t2=t["catch"](60);case 74:this.submitting=!1;case 75:case"end":return t.stop()}},t,this,[[29,41],[48,54],[60,72]])}));return function(){return t.apply(this,arguments)}}()}},P=N,D=(i("6b2d"),Object(l["a"])(P,n,s,!1,null,"3cec620a",null));D.options.__file="Add.vue";e["default"]=D.exports},"4ea7":function(t,e,i){"use strict";var n=i("38ba"),s=i.n(n);s.a},"6b2d":function(t,e,i){"use strict";var n=i("a2b4"),s=i.n(n);s.a},7110:function(t,e,i){"use strict";var n=i("0a53"),s=i.n(n);s.a},a2b4:function(t,e,i){},a406:function(t,e,i){"use strict";var n=i("c7be"),s=i.n(n);s.a},bdad:function(t,e,i){},c7be:function(t,e,i){},ca96:function(t,e,i){"use strict";var n=i("bdad"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-6e24089d.5b24824a.js.map