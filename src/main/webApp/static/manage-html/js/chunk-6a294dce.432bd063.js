(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a294dce"],{"2caf":function(t,s,a){var e=a("5ca1");e(e.S,"Array",{isArray:a("1169")})},"36bd":function(t,s,a){"use strict";var e=a("4bf8"),i=a("77f1"),r=a("9def");t.exports=function(t){var s=e(this),a=r(s.length),n=arguments.length,l=i(n>1?arguments[1]:void 0,a),c=n>2?arguments[2]:void 0,o=void 0===c?a:i(c,a);while(o>l)s[l++]=t;return s}},"422a":function(t,s,a){"use strict";var e=a("aab8"),i=a.n(e);i.a},"6c7b":function(t,s,a){var e=a("5ca1");e(e.P,"Array",{fill:a("36bd")}),a("9c6c")("fill")},"759f":function(t,s,a){"use strict";var e=a("5ca1"),i=a("0a49")(3);e(e.P+e.F*!a("2f21")([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},9170:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index"},[a("bread-nav",{attrs:{nav:t.nav}}),a("main-part",[a("div",{staticClass:"btn-block"},[a("div",{staticClass:"btn-main mr15",on:{click:function(s){t.showBatchDialog()}}},[t._v("批量设置")]),a("div",{staticClass:"btn-main-deepen",on:{click:function(s){t.showDialog()}}},[t._v("新增班级")])]),a("search-box",{attrs:{searchData:t.searchData,table:t.table}}),a("resize-table",[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{width:"5%"}},[a("el-checkbox",{model:{value:t.checkAll,callback:function(s){t.checkAll=s},expression:"checkAll"}})],1),a("th",{attrs:{width:"8%"}},[t._v("年级")]),a("th",{attrs:{width:"10%"}},[t._v("班级")]),a("th",{attrs:{width:"10%"}},[t._v("类型")]),a("th",{attrs:{width:"10%"}},[t._v("班主任")]),a("th",{attrs:{width:"12%"}},[t._v("班主任手机号")]),a("th",{attrs:{width:"15%"}},[t._v("班主任助理")]),a("th",{attrs:{width:"12%"}},[t._v("班助手机号")]),a("th",{attrs:{width:"10%"}},[t._v("状态")]),a("th",{attrs:{width:"8%"}},[t._v("操作")])])]),a("tbody",t._l(t.table.list,function(s,e){return a("tr",[a("td",[a("el-checkbox",{model:{value:t.checkboxList[e],callback:function(s){t.$set(t.checkboxList,e,s)},expression:"checkboxList[key]"}})],1),a("td",[t._v(t._s(s.grade))]),a("td",[t._v(t._s(s.aliasName))]),a("td",[t._v(t._s(t.$enums.ClassType.getName(s.classType)))]),a("td",[s.advisers&&s.advisers.length>0?a("p",[t._v(t._s(s.advisers[0].name))]):a("p",[t._v("--")])]),a("td",[s.advisers&&s.advisers.length>0?a("p",[t._v(t._s(s.advisers[0].phone))]):a("p",[t._v("--")])]),a("td",[s.assistants&&s.assistants.length>0?a("div",t._l(s.assistants,function(s){return a("p",[t._v(t._s(s.name))])})):a("p",[t._v("--")])]),a("td",[s.assistants&&s.assistants.length>0?a("div",t._l(s.assistants,function(s){return a("p",[t._v(t._s(s.phone))])})):a("p",[t._v("--")])]),a("td",[t._v(t._s(t.$enums.ClassStatus.getName(s.classStatus)))]),a("td",[a("span",{staticClass:"oper",on:{click:function(a){t.showDialog(s)}}},[t._v("编辑")])])])}))])]),a("no-data",{directives:[{name:"show",rawName:"v-show",value:!t.table.noData,expression:"!table.noData"}]}),a("paging",{attrs:{data:t.table},on:{"update:data":function(s){t.table=s}}}),a("el-dialog",{staticClass:"dialog",attrs:{title:t.title,visible:t.dialog,width:"540px"},on:{"update:visible":function(s){t.dialog=s}}},[a("div",{staticClass:"item"},[a("span",{staticClass:"title imp"},[t._v("班级状态")]),a("el-radio-group",{model:{value:t.form.classStatus,callback:function(s){t.$set(t.form,"classStatus",s)},expression:"form.classStatus"}},t._l(t.$enums.ClassStatus.list,function(s,e){return a("el-radio",{key:e,attrs:{label:s.value,border:""}},[t._v("  "+t._s(s.label)+"  ")])}))],1),a("div",{staticClass:"item"},[a("span",{staticClass:"title imp"},[t._v("班级类型")]),a("el-radio-group",{model:{value:t.form.classType,callback:function(s){t.$set(t.form,"classType",s)},expression:"form.classType"}},t._l(t.$enums.ClassType.list,function(s,e){return a("el-radio",{key:e,attrs:{label:s.value,border:""}},[t._v(t._s(s.label))])}))],1),a("div",{staticClass:"item"},[a("span",{staticClass:"title imp"},[t._v("班级名称")]),a("el-input",{staticClass:"input-class",attrs:{type:"number",placeholder:"请输入班级名称"},model:{value:t.form.className,callback:function(s){t.$set(t.form,"className",s)},expression:"form.className"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.form.className,expression:"form.className"}],staticClass:"text"},[t._v(t._s(t.form.gradeId<4?"初":"高")+t._s(t.form.className))])],1),a("div",{staticClass:"item"},[a("span",{staticClass:"title imp"},[t._v("所属年级")]),a("el-select",{staticClass:"input",attrs:{"default-first-option":"",filterable:""},model:{value:t.form.gradeId,callback:function(s){t.$set(t.form,"gradeId",s)},expression:"form.gradeId"}},t._l(t.searchData[0].option,function(t){return a("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})}))],1),a("div",{staticClass:"item"},[a("span",{staticClass:"title imp"},[t._v("班主任")]),a("el-select",{staticClass:"input",attrs:{filterable:"","default-first-option":"",remote:"",clearable:"","reserve-keyword":"",placeholder:"请输入教职工关键词","remote-method":t.getStaff,loading:t.loading},model:{value:t.form.adviserIds,callback:function(s){t.$set(t.form,"adviserIds",s)},expression:"form.adviserIds"}},t._l(t.staffList,function(s){return a("el-option",{key:s.id,attrs:{label:s.name,disabled:-1!==t.form.assistantIds.indexOf(s.id),value:s.id}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(s.name))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(s.idCard)+"/"+t._s(s.phone))])])}))],1),a("div",{staticClass:"item"},[a("span",{staticClass:"title"},[t._v("班主任助理")]),a("el-select",{staticClass:"input",attrs:{multiple:"",filterable:"","default-first-option":"",remote:"",clearable:"","reserve-keyword":"",placeholder:"请输入教职工关键词","remote-method":t.getStaff,loading:t.loading},model:{value:t.form.assistantIds,callback:function(s){t.$set(t.form,"assistantIds",s)},expression:"form.assistantIds"}},t._l(t.staffList,function(s){return a("el-option",{key:s.id,attrs:{disabled:s.id===t.form.adviserIds,label:s.name,value:s.id}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(s.name))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(s.idCard)+"/"+t._s(s.phone))])])}))],1),a("div",{staticClass:"btns"},[a("div",{staticClass:"btn-submit btn-add-save mr15",on:{click:function(s){t.addClass()}}},[t._v("提交")]),a("div",{staticClass:"btn-clear",on:{click:function(s){t.dialog=!1}}},[t._v("取消")])])]),a("el-dialog",{staticClass:"dialog",attrs:{title:"批量设置",visible:t.batchDialog,width:"540px"},on:{"update:visible":function(s){t.batchDialog=s}}},[a("div",{staticClass:"item"},[a("span",{staticClass:"title imp"},[t._v("班级状态")]),a("el-radio-group",{model:{value:t.bathForm.classStatus,callback:function(s){t.$set(t.bathForm,"classStatus",s)},expression:"bathForm.classStatus"}},t._l(t.$enums.ClassStatus.list,function(s,e){return a("el-radio",{key:e,attrs:{label:s.value,border:""}},[t._v("  "+t._s(s.label)+"  ")])}))],1),a("div",{staticClass:"item"},[a("span",{staticClass:"title imp"},[t._v("所属年级")]),a("el-select",{staticClass:"input",attrs:{"default-first-option":"",clearable:"",filterable:""},model:{value:t.bathForm.gradeId,callback:function(s){t.$set(t.bathForm,"gradeId",s)},expression:"bathForm.gradeId"}},t._l(t.searchData[0].option,function(t){return a("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})}))],1),a("div",{staticClass:"btns"},[a("div",{staticClass:"btn-submit mr15",on:{"~click":function(s){t.setClass()}}},[t._v("提交")]),a("div",{staticClass:"btn-clear",on:{click:function(s){t.batchDialog=!1}}},[t._v("取消")])])])],1)],1)},i=[],r=(a("2caf"),a("6c7b"),a("7f7f"),a("759f"),a("ac6a"),a("f3e2"),a("96cf"),a("1da1")),n={data:function(){return{nav:[{name:"班级管理",path:""}],searchData:[{type:"select",title:"所属年级",model:"gradeId",option:[]},{type:"select",title:"班级状态",model:"classStatus",option:this.$enums.ClassStatus.list},{type:"input",placeholder:"班级名称"}],checkboxList:[!1],loading:!1,title:"新增班级",dialog:!1,table:{url:"/class/queryClassPage.do",el:".table",total:0,noData:!0,list:[],query:{classStatus:null,gradeId:null,keywords:null}},staffList:[],form:{className:"",classStatus:"UN_GRADUATED",classType:"PARALLEL_CLASS",gradeId:"",adviserIds:[],assistantIds:[]},batchDialog:!1,bathForm:{classStatus:"UN_GRADUATED",gradeId:1,classIds:[]}}},methods:{showDialog:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(s){var a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getStaff();case 2:s?(this.title="编辑班级",this.form={classId:s.classId,className:s.className,classStatus:s.classStatus,gradeId:s.gradeId,classType:s.classType,adviserIds:null,assistantIds:[]},s.advisers&&s.advisers.forEach(function(t){a.staffList.push(t)}),s.assistants&&s.assistants.forEach(function(t){a.staffList.push(t)}),s.advisers&&(this.form.adviserIds=s.advisers[0].id),s.assistants&&s.assistants.length&&s.assistants.forEach(function(t){a.form.assistantIds.push(t.id)})):(this.title="新增班级",this.form={className:"",classStatus:"UN_GRADUATED",classType:"PARALLEL_CLASS",gradeId:1,adviserIds:null,assistantIds:[]}),this.dialog=!0;case 4:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}(),showBatchDialog:function(){var t=this;this.checkboxList.some(function(t){return t})?(this.batchDialog=!0,this.bathForm.classIds=[],this.checkboxList.forEach(function(s,a){s&&t.bathForm.classIds.push(t.table.list[a].classId)}),this.bathForm.classStatus="UN_GRADUATED",this.bathForm.gradeId=null):this.$message.warning("请选择班级")},setClass:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.bathForm.classStatus){t.next=3;break}return this.$message.warning("请设置班级状态"),t.abrupt("return");case 3:if(this.bathForm.gradeId){t.next=6;break}return this.$message.warning("请选择年级"),t.abrupt("return");case 6:return t.next=8,this.$ajax({url:"/class/batchUpdateClass.do",query:this.bathForm});case 8:this.$remind("设置成功"),this.$search(this.table),this.batchDialog=!1;case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),addClass:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s,a,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!isNaN(this.form.className)){t.next=3;break}return this.$message.warning("班级名称必须为数字"),t.abrupt("return");case 3:if(this.form.classStatus){t.next=6;break}return this.$message.warning("请选择班级状态"),t.abrupt("return");case 6:if(this.form.gradeId){t.next=9;break}return this.$message.warning("请选择所属年级"),t.abrupt("return");case 9:if(this.form.adviserIds){t.next=12;break}return this.$message.warning("请选择班主任"),t.abrupt("return");case 12:return s=JSON.parse(JSON.stringify(this.form)),s.adviserIds=[s.adviserIds],a="/class/addClass.do",e="新增成功",this.form.classId&&(a="/class/updateClass.do",e="编辑成功"),t.next=19,this.$ajax({url:a,el:".btn-add-save",noText:!0,query:s});case 19:this.$search(this.table),this.$remind(e),this.dialog=!1;case 22:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getGradeList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax({url:"/grade/queryGradeList.do"});case 2:s=t.sent,this.searchData[0].option=[],s.forEach(function(t){a.searchData[0].option.push({label:t.name,value:t.id})});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getStaff:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(s){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(""===s){t.next=9;break}return this.loading=!0,t.next=4,this.$ajax({url:"/user/queryStaffPage.do",query:{keywords:s,pageNo:1,pageSize:15}});case 4:a=t.sent,this.loading=!1,this.staffList=a.list,t.next=10;break;case 9:this.staffList=[];case 10:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}()},watch:{"table.list":function(){this.checkboxList=new Array(this.table.list.length).fill(!1)}},computed:{checkAll:{get:function(){return this.checkboxList.length>0&&this.checkboxList.every(function(t){return t})},set:function(t){this.checkboxList=new Array(this.table.list.length).fill(t)}}},mounted:function(){this.checkboxList=new Array(this.table.list.length).fill(!1),this.$search(this.table),this.getGradeList()}},l=n,c=(a("422a"),a("2877")),o=Object(c["a"])(l,e,i,!1,null,"57242632",null);o.options.__file="Index.vue";s["default"]=o.exports},aab8:function(t,s,a){}}]);
//# sourceMappingURL=chunk-6a294dce.432bd063.js.map