(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be925f3"],{1672:function(e,t,n){},2027:function(e,t,n){"use strict";var r=n("e3da"),a=n.n(r);a.a},"20d6":function(e,t,n){"use strict";var r=n("5ca1"),a=n("0a49")(6),i="findIndex",c=!0;i in[]&&Array(1)[i](function(){c=!1}),r(r.P+r.F*c,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},"26cf":function(e,t,n){},"4af2":function(e,t,n){"use strict";var r=n("1672"),a=n.n(r);a.a},7514:function(e,t,n){"use strict";var r=n("5ca1"),a=n("0a49")(5),i="find",c=!0;i in[]&&Array(1)[i](function(){c=!1}),r(r.P+r.F*c,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},"7ade":function(e,t,n){"use strict";var r=n("26cf"),a=n.n(r);a.a},"9e42":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("bread-nav",{attrs:{nav:e.nav}}),n("main-part",[n("el-tabs",{on:{"tab-click":e.onTabChange},model:{value:e.curTabIdx,callback:function(t){e.curTabIdx=t},expression:"curTabIdx"}},[n("el-tab-pane",{attrs:{label:"年级科目设置"}},[n("grade",{ref:"grade"})],1),n("el-tab-pane",{attrs:{label:"知识点设置"}},[n("knowledge",{ref:"knowledge"})],1)],1)],1)],1)},a=[],i=(n("96cf"),n("1da1")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix"},[n("el-card",{staticClass:"card card-grade"},[n("el-form",{staticClass:"form"},[e._l(e.gradeList,function(t,r){return n("el-form-item",{key:r,attrs:{label:0===r?"年级":"","label-width":"100px"}},[n("el-input",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"item.active"}],ref:"gradeInput"+r,refInFor:!0,on:{blur:function(n){e.onGradeInputBlur(n,t)}},model:{value:t.gradeName,callback:function(n){e.$set(t,"gradeName",n)},expression:"item.gradeName"}}),n("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.active,expression:"!item.active"}],staticClass:"btn-name",class:{"btn--active":t.id===e.curGradeId},attrs:{loading:t.loading},on:{click:function(n){e.querySubjectList(t)}}},[e._v(e._s(t.gradeName)+"\n        ")]),n("el-button",{staticClass:"btn-edit",attrs:{icon:"el-icon-edit",loading:t.editing},on:{click:function(n){e.doEditGrade(t,r)}}}),n("el-button",{staticClass:"btn-delete",attrs:{icon:"el-icon-delete",loading:t.deleteing},on:{click:function(n){e.doDeleteGrade(t,r)}}})],1)}),n("el-form-item",{attrs:{"label-width":"100px"}},[n("el-button",{staticClass:"btn-add",attrs:{type:"primary"},on:{click:e.doAddGrade}},[e._v("增加年级\n        ")])],1)],2)],1),e._m(0),n("el-card",{staticClass:"card card-knowledge"},[n("el-form",{staticClass:"form"},[e._l(e.subjectList,function(t,r){return n("el-form-item",{key:r,attrs:{label:0===r?"科目":"","label-width":"100px"}},[n("el-input",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"item.active"}],ref:"gradeInput"+r,refInFor:!0,on:{blur:function(n){e.onSubjectInputBlur(n,t)}},model:{value:t.subjectName,callback:function(n){e.$set(t,"subjectName",n)},expression:"item.subjectName"}}),n("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.active,expression:"!item.active"}],staticClass:"btn-name"},[e._v("\n          "+e._s(t.subjectName)+"\n        ")]),n("el-button",{staticClass:"btn-edit",attrs:{icon:"el-icon-edit",loading:t.editing},on:{click:function(n){e.doEditSubject(t)}}}),n("el-button",{staticClass:"btn-delete",attrs:{icon:"el-icon-delete",loading:t.deleteing},on:{click:function(n){e.doDeleteSubject(t,r)}}})],1)}),n("el-form-item",{attrs:{"label-width":"100px"}},[n("el-button",{staticClass:"btn-add",attrs:{type:"primary"},on:{click:e.doAddSubject}},[e._v("增加科目\n        ")])],1)],2)],1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-transfer"},[n("span",{staticClass:"el-icon-d-arrow-right"})])}],u=(n("20d6"),n("ac6a"),n("f3e2"),n("7514"),{data:function(){return{gradeList:[],curGradeId:null,subjectList:[]}},computed:{activeGrade:function(){return this.gradeList.find(function(e){return e.active})},activeSubject:function(){return this.subjectList.find(function(e){return e.active})}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.queryGradeList();case 2:return e.next=4,this.querySubjectList();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{queryGradeList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$api.queryQGradeList();case 3:t=e.sent,t.forEach(function(e){e.active=!1,e.loading=!1,e.deleteing=!1,e.editing=!1}),this.curGradeId=t[0].id,this.gradeList=t,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),doAddGrade:function(){this.activeGrade&&(this.activeGrade.active=!1),this.gradeList.push({gradeName:"",active:!0})},doDeleteGrade:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.deleteing){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.$confirm("确认删除该年级?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 5:if(t.id){e.next=8;break}return this.gradeList.splice(n,1),e.abrupt("return");case 8:return t.deleteing=!0,e.prev=9,e.next=12,this.$api.delQGrade({id:t.id});case 12:this.gradeList.splice(this.gradeList.findIndex(function(e){return e.id===e.id}),1),this.$remind("年级删除成功"),e.next=18;break;case 16:e.prev=16,e.t0=e["catch"](9);case 18:t.deleteing=!1,e.next=23;break;case 21:e.prev=21,e.t1=e["catch"](2);case 23:case"end":return e.stop()}},e,this,[[2,21],[9,16]])}));return function(t,n){return e.apply(this,arguments)}}(),doEditGrade:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.activeGrade&&(this.activeGrade.active=!1),this.$refs["gradeInput"+n][0].focus(),t.active=!0;case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),onGradeInputBlur:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n.editing){e.next=2;break}return e.abrupt("return");case 2:if(!n.id){e.next=15;break}return n.active=!1,n.editing=!0,e.prev=5,e.next=8,this.$api.updateQGrade({id:n.id,gradeName:n.gradeName});case 8:this.$remind("年级更新成功"),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](5);case 13:return n.editing=!1,e.abrupt("return");case 15:return e.prev=15,e.next=18,this.$api.addQGrade({gradeName:n.gradeName});case 18:n.id=e.sent,this.$remind("年级新增成功"),e.next=24;break;case 22:e.prev=22,e.t1=e["catch"](15);case 24:case"end":return e.stop()}},e,this,[[5,11],[15,22]])}));return function(t,n){return e.apply(this,arguments)}}(),querySubjectList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this.$loading({target:".card-knowledge",text:"科目数据加载中..."}),r=null,t&&(this.curGradeId=t.id,r=setTimeout(function(){t.loading=!0},500)),e.next=5,this.$api.queryQSubjectList({gradeId:this.curGradeId});case 5:a=e.sent,a.forEach(function(e){e.active=!1,e.deleteing=!1,e.editing=!1}),clearTimeout(r),t&&(t.loading=!1),this.subjectList=a,n.close();case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onSubjectInputBlur:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n.editing){e.next=2;break}return e.abrupt("return");case 2:if(n.id){e.next=14;break}return e.prev=3,e.next=6,this.$api.addQSubject({gradeId:this.curGradeId,subjectName:n.subjectName});case 6:n.id=e.sent,n.active=!1,this.$remind("科目新增成功"),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](3);case 13:return e.abrupt("return");case 14:return e.prev=14,n.editing=!0,e.next=18,this.$api.updateQSubject({id:n.id,gradeId:this.curGradeId,subjectName:n.subjectName});case 18:n.active=!1,n.editing=!1,this.$remind("科目更新成功"),e.next=25;break;case 23:e.prev=23,e.t1=e["catch"](14);case 25:case"end":return e.stop()}},e,this,[[3,11],[14,23]])}));return function(t,n){return e.apply(this,arguments)}}(),doEditSubject:function(e){e.active=!0},doDeleteSubject:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("确认删除该科目?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 3:if(t.id){e.next=6;break}return this.subjectList.splice(n,1),e.abrupt("return");case 6:return t.deleteing=!0,e.prev=7,e.next=10,this.$api.delQSubject({id:t.id});case 10:this.subjectList.splice(this.subjectList.findIndex(function(e){return e.id===e.id}),1),this.$remind("科目删除成功"),e.next=16;break;case 14:e.prev=14,e.t0=e["catch"](7);case 16:t.deleteing=!1,e.next=21;break;case 19:e.prev=19,e.t1=e["catch"](0);case 21:case"end":return e.stop()}},e,this,[[0,19],[7,14]])}));return function(t,n){return e.apply(this,arguments)}}(),doAddSubject:function(){this.curGradeId?(this.activeSubject&&(this.activeSubject.active=!1),this.subjectList.push({subjectName:null,active:!0})):this.$message({message:"请先选择一个年级",type:"warning"})}}}),o=u,d=(n("7ade"),n("2877")),l=Object(d["a"])(o,c,s,!1,null,"0ab5e02b",null);l.options.__file="Grade.vue";var f=l.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",{staticClass:"table"},[e._m(0),e._l(e.table.list,function(t){return n("tr",[n("td",[e._v(e._s(t.gradeName||"--"))]),n("td",[e._v(e._s(t.subjectName||"--"))]),n("td",[e._v(e._s(t.knowledgeName||"--"))]),n("td",[n("span",{staticClass:"oper",on:{click:function(n){e.doSetting(t)}}},[e._v("设置知识点")])]),n("td")])})],2),n("paging",{attrs:{data:e.table},on:{"update:data":function(t){e.table=t}}}),n("el-dialog",{attrs:{title:"设置知识点",visible:e.dialogFormVisible,width:"500px",center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{staticClass:"form",attrs:{"label-width":"90px"}},[n("el-form-item",{attrs:{label:"年级"}},[n("el-input",{attrs:{disabled:""},model:{value:e.knowledge.gradeName,callback:function(t){e.$set(e.knowledge,"gradeName",t)},expression:"knowledge.gradeName"}})],1),n("el-form-item",{attrs:{label:"科目"}},[n("el-input",{attrs:{disabled:""},model:{value:e.knowledge.subjectName,callback:function(t){e.$set(e.knowledge,"subjectName",t)},expression:"knowledge.subjectName"}})],1),n("el-form-item",{staticClass:"fwb",attrs:{label:"知识点"}}),e._l(e.knowledgeArr,function(t,r){return n("el-form-item",{key:r,attrs:{label:"知识点"+(r+1)}},[n("el-input",{model:{value:t.knowledgeName,callback:function(n){e.$set(t,"knowledgeName",n)},expression:"item.knowledgeName"}}),0!==r?n("el-button",{staticClass:"btn-delete",attrs:{icon:"el-icon-delete",loading:t.deleteing},on:{click:function(n){e.doDeleteKnowledge(t,r)}}}):e._e()],1)}),n("el-form-item",{staticClass:"oper",attrs:{label:"新增知识点"},nativeOn:{click:function(t){return e.doAddKnowledge(t)}}}),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:e.submitting},on:{click:e.doSubmit}},[e._v("提交\n        ")]),n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")])],1)],2)],1)],1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",{attrs:{width:"20%"}},[e._v("年级")]),n("th",{attrs:{width:"20%"}},[e._v("科目")]),n("th",{attrs:{width:"40%"}},[e._v("知识点")]),n("th",{attrs:{width:"20%"}},[e._v("操作")])])}],b={data:function(){return{table:{url:"/qKnowledge/queryQKnowledgeNameManagePage.do",el:".table",query:{pageNo:1,pageSize:10},list:[],total:0,noData:!0},dialogFormVisible:!1,knowledge:{},knowledgeArr:[],submitting:!1}},created:function(){this.$search(this.table)},methods:{doSetting:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.dialogFormVisible=!0,this.knowledge=t,this.knowledgeArr=[],console.log(this.knowledgeArr),e.next=6,this.$api.queryQKnowledgeInfoList({gradeId:this.knowledge.gradeId,subjectId:this.knowledge.subjectId});case 6:n=e.sent,n.length||(n=[{knowledgeName:null}]),n.forEach(function(e){e.deleteing=!1}),this.knowledgeArr=n;case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),doAddKnowledge:function(){this.knowledgeArr.push({})},doDeleteKnowledge:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.id){e.next=4;break}return this.knowledgeArr.splice(n,1),this.$remind("知识点删除成功"),e.abrupt("return");case 4:return t.deleteing=!0,e.prev=5,e.next=8,this.$api.delQKnowledgeInfo({id:t.id});case 8:this.knowledgeArr.splice(n,1),this.$remind("知识点删除成功"),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](5);case 14:t.deleteing=!1;case 15:case"end":return e.stop()}},e,this,[[5,12]])}));return function(t,n){return e.apply(this,arguments)}}(),doSubmit:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.submitting=!0,t=0,this.knowledgeArr.forEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r.id){e.next=10;break}return e.prev=1,e.next=4,n.$api.updateQKnowledgeInfo({id:r.id,knowledgeName:r.knowledgeName});case 4:e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](1);case 8:e.next=17;break;case 10:return e.prev=10,e.next=13,n.$api.addQKnowledgeInfo({gradeId:n.knowledge.gradeId,subjectId:n.knowledge.subjectId,knowledgeName:r.knowledgeName});case 13:e.next=17;break;case 15:e.prev=15,e.t1=e["catch"](10);case 17:t++,t===n.knowledgeArr.length&&(n.submitting=!1,n.$remind("知识点保存成功"),n.dialogFormVisible=!1,n.$search(n.table));case 19:case"end":return e.stop()}},e,this,[[1,6],[10,15]])}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},g=b,m=(n("4af2"),Object(d["a"])(g,h,p,!1,null,"05abf111",null));m.options.__file="Knowledge.vue";var v=m.exports,w={components:{Grade:f,Knowledge:v},data:function(){return{nav:[{name:"题库管理",path:"go(-1)"},{name:"基础设置",path:""}],curTabIdx:"0"}},methods:{onTabChange:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$refs.grade,n=this.$refs.knowledge,"0"!==this.curTabIdx){e.next=9;break}return e.next=5,t.queryGradeList();case 5:return e.next=7,t.querySubjectList();case 7:e.next=10;break;case 9:this.$search(n.table);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},k=w,x=(n("2027"),Object(d["a"])(k,r,a,!1,null,"d80d2df4",null));x.options.__file="Index.vue";t["default"]=x.exports},e3da:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2be925f3.375605ea.js.map