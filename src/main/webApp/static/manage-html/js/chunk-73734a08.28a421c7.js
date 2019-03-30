(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73734a08"],{2415:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"teacher-edit"},[i("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"80px"}},[i("div",{staticClass:"separated-text"},[e._v("基本信息")]),i("el-form-item",{staticClass:"item",attrs:{label:"姓名",prop:"name"}},[i("el-input",{staticClass:"input",attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{staticClass:"item",attrs:{label:"性别"}},[i("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.$enums.Sex.list,function(t,a){return i("el-radio",{key:a,attrs:{label:t.value,border:""}},[e._v(e._s(t.label)+"    ")])}))],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"出生年月"}},[i("el-date-picker",{staticClass:"input",attrs:{"picker-options":e.pickerOptions,type:"date",placeholder:"选择日期"},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}}),i("span",{staticClass:"append"},[e._v(e._s(e.age)+"岁")])],1),i("el-form-item",{staticClass:"item",attrs:{label:"当前状态",prop:"jobStatus"}},[i("el-radio-group",{model:{value:e.form.jobStatus,callback:function(t){e.$set(e.form,"jobStatus",t)},expression:"form.jobStatus"}},e._l(e.$enums.JobStatus.list,function(t,a){return i("el-radio",{key:a,attrs:{label:t.value,border:""}},[e._v(e._s(t.label)+"\n        ")])}))],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"身份证号"}},[i("el-input",{attrs:{maxLength:18,placeholder:"请输入身份证号"},model:{value:e.form.idCard,callback:function(t){e.$set(e.form,"idCard",t)},expression:"form.idCard"}})],1),i("el-form-item",{staticClass:"item",attrs:{label:"联系电话",prop:"phone"}},[i("el-input",{attrs:{maxLength:11,placeholder:"请输入联系电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"民族"}},[i("el-select",{staticClass:"input",attrs:{filterable:"","default-first-option":""},model:{value:e.form.folk,callback:function(t){e.$set(e.form,"folk",t)},expression:"form.folk"}},e._l(e.nationList,function(e){return i("el-option",{key:e.id,attrs:{label:e.nation,value:e.id}})}))],1),i("el-form-item",{staticClass:"item",attrs:{label:"籍贯"}},[i("el-input",{attrs:{placeholder:"请输入籍贯"},model:{value:e.form.residence,callback:function(t){e.$set(e.form,"residence",t)},expression:"form.residence"}})],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"政治面貌"}},[i("el-select",{staticClass:"input",attrs:{clearable:""},model:{value:e.form.politicsStatus,callback:function(t){e.$set(e.form,"politicsStatus",t)},expression:"form.politicsStatus"}},e._l(e.$enums.PoliticsStatus.list,function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})}))],1),i("el-form-item",{staticClass:"item",attrs:{label:"加入时间"}},[i("el-date-picker",{staticClass:"input",attrs:{"picker-options":e.pickerOptions,type:"date",placeholder:"选择加入时间"},model:{value:e.form.joinPartyTime,callback:function(t){e.$set(e.form,"joinPartyTime",t)},expression:"form.joinPartyTime"}})],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"第一学历"}},[i("el-select",{staticClass:"input",attrs:{clearable:""},model:{value:e.form.firstEducation,callback:function(t){e.$set(e.form,"firstEducation",t)},expression:"form.firstEducation"}},e._l(e.$enums.Education.list,function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})}))],1),i("el-form-item",{staticClass:"item",attrs:{label:"最高学历"}},[i("el-select",{staticClass:"input",attrs:{clearable:""},model:{value:e.form.highestEducation,callback:function(t){e.$set(e.form,"highestEducation",t)},expression:"form.highestEducation"}},e._l(e.$enums.HighestEducation.list,function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})}))],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"毕业时间"}},[i("el-date-picker",{staticClass:"input",attrs:{"picker-options":e.pickerOptions,type:"date",placeholder:"选择毕业时间"},model:{value:e.form.graduateTime,callback:function(t){e.$set(e.form,"graduateTime",t)},expression:"form.graduateTime"}})],1),i("el-form-item",{staticClass:"item",attrs:{label:"毕业院校"}},[i("el-input",{attrs:{placeholder:"请输入毕业院校"},model:{value:e.form.graduateSchool,callback:function(t){e.$set(e.form,"graduateSchool",t)},expression:"form.graduateSchool"}})],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item long-label",attrs:{label:"参加工作时间"}},[i("el-date-picker",{staticClass:"input",attrs:{"picker-options":e.pickerOptions,type:"date",placeholder:"参加工作时间"},model:{value:e.form.joinWorkTime,callback:function(t){e.$set(e.form,"joinWorkTime",t)},expression:"form.joinWorkTime"}}),i("span",{staticClass:"append"},[e._v(e._s(e.workYears)+"年")])],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"来校时间"}},[i("el-date-picker",{staticClass:"input",attrs:{"picker-options":e.pickerOptions,type:"date",placeholder:"请选择来校时间"},model:{value:e.form.joinSchoolTime,callback:function(t){e.$set(e.form,"joinSchoolTime",t)},expression:"form.joinSchoolTime"}}),i("span",{staticClass:"append"},[e._v(e._s(e.schoolYears)+"年")])],1),i("el-form-item",{staticClass:"item long-label",attrs:{label:"原工作单位"}},[i("el-input",{attrs:{placeholder:"请输入原工作单位"},model:{value:e.form.lastWorkUnit,callback:function(t){e.$set(e.form,"lastWorkUnit",t)},expression:"form.lastWorkUnit"}})],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"职称"}},[i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",{attrs:{width:"40%"}},[e._v("职称名称")]),i("th",{attrs:{width:"40%"}},[e._v("评定时间")]),i("th",{attrs:{width:"20%"}},[e._v("操作")])])]),i("tbody",[e._l(e.form.teacherTitleList,function(t,a){return i("tr",[i("td",[e._v(e._s(e.$enums.TeacherTitleType.getName(t.title)))]),i("td",[e._v(e._s(e._f("substrTime")(t.acquireTime)))]),i("td",[i("span",{staticClass:"oper",on:{click:function(t){e.form.teacherTitleList.splice(a,1)}}},[e._v("删除")])])])}),i("tr",{directives:[{name:"show",rawName:"v-show",value:e.showTitleForm,expression:"showTitleForm"}]},[i("td",[i("el-select",{staticClass:"input",attrs:{"default-first-option":"",size:"small",filterable:"",clearable:""},model:{value:e.titleForm.title,callback:function(t){e.$set(e.titleForm,"title",t)},expression:"titleForm.title"}},e._l(e.$enums.TeacherTitleType.list,function(t){return i("el-option",{key:t.value,attrs:{disabled:e.disabledOption(t),value:t.value,label:t.label}})}))],1),i("td",[i("el-date-picker",{staticClass:"input",attrs:{size:"small","picker-options":e.pickerOptions,type:"date",placeholder:"请选择评定时间"},model:{value:e.titleForm.time,callback:function(t){e.$set(e.titleForm,"time",t)},expression:"titleForm.time"}})],1),i("td",[i("span",{staticClass:"oper",on:{click:e.addTitle}},[e._v("完成")]),i("span",{staticClass:"oper",on:{click:function(t){e.showTitleForm=!1,e.titleForm.title=e.titleForm.time=null}}},[e._v("删除")])])]),i("i",{staticClass:"icon el-icon-circle-plus",on:{click:function(t){e.showTitleFormFun()}}})],2)])]),i("div",{staticClass:"clear"}),i("div",{staticClass:"separated-text"},[e._v("在校信息")]),i("el-form-item",{staticClass:"item",attrs:{label:"所属部门",prop:"orgIds"}},[i("el-input",{staticClass:"input",attrs:{disabled:"",placeholder:"请选择所属部门"},model:{value:e.selectedDepName.join(),callback:function(t){e.$set(e.selectedDepName,"join()",t)},expression:"selectedDepName.join()"}},[i("el-button",{staticClass:"hand",attrs:{slot:"append"},on:{click:e.showDepDialog},slot:"append"},[e._v("选择部门")])],1)],1),i("el-form-item",{staticClass:"item",attrs:{label:"编制",prop:"formationType"}},[i("el-select",{staticClass:"input",attrs:{"default-first-option":"",clearable:"",filterable:""},model:{value:e.form.formationType,callback:function(t){e.$set(e.form,"formationType",t)},expression:"form.formationType"}},e._l(e.$enums.FormationType.list,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"年级"}},[i("el-select",{staticClass:"input",model:{value:e.form.gradeId,callback:function(t){e.$set(e.form,"gradeId",t)},expression:"form.gradeId"}},e._l(e.gradeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),i("el-form-item",{staticClass:"item",attrs:{label:"教授科目"}},[i("el-select",{staticClass:"input",attrs:{"default-first-option":"",filterable:"",multiple:""},model:{value:e.form.courseIdList,callback:function(t){e.$set(e.form,"courseIdList",t)},expression:"form.courseIdList"}},e._l(e.subjectList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"岗位",prop:"teacherPositionList"}},[i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",{attrs:{width:"40%"}},[e._v("岗位名称")]),i("th",{attrs:{width:"20%"}},[e._v("操作")])])]),i("tbody",[e._l(e.form.teacherPositionList,function(t,a){return i("tr",[i("td",[e._v(e._s(e.getPositionName(a)))]),i("td",[i("span",{staticClass:"oper",on:{click:function(t){e.form.teacherPositionList.splice(a,1)}}},[e._v("删除")])])])}),i("tr",{directives:[{name:"show",rawName:"v-show",value:e.positionForm,expression:"positionForm"}]},[i("td"),i("td",[i("span",{staticClass:"oper",on:{click:e.addPosition}},[e._v("完成")]),i("span",{staticClass:"oper",on:{click:function(t){e.positionForm=!1,e.position=[]}}},[e._v("删除")])])]),i("i",{staticClass:"icon el-icon-circle-plus",on:{click:function(t){e.positionForm=!0}}})],2)])]),i("div",{staticClass:"clear"}),i("div",{staticClass:"separated-text"},[e._v("家庭信息")]),i("el-form-item",{staticClass:"item",attrs:{label:"家庭电话"}},[i("el-input",{attrs:{maxLength:11,type:"tel",placeholder:"请输入家庭电话"},model:{value:e.form.homeTel,callback:function(t){e.$set(e.form,"homeTel",t)},expression:"form.homeTel"}})],1),i("div",{staticClass:"clear"}),i("el-form-item",{staticClass:"item",attrs:{label:"子女信息"}},[i("table",{staticClass:"table long-table"},[i("thead",[i("tr",[i("th",{attrs:{width:"15%"}},[e._v("子女姓名")]),i("th",{attrs:{width:"13%"}},[e._v("性别")]),i("th",{attrs:{width:"12%"}},[e._v("年龄")]),i("th",{attrs:{width:"22%"}},[e._v("学校或单位")]),i("th",{attrs:{width:"25%"}},[e._v("备注")]),i("th",{attrs:{width:"13%"}},[e._v("操作")])])]),i("tbody",[e._l(e.form.teacherChildList,function(t,a){return i("tr",[i("td",[e._v(e._s(t.name))]),i("td",[e._v(e._s(e.$enums.Sex.getName(t.sex)))]),i("td",[e._v(e._s(t.age))]),i("td",[e._v(e._s(t.unit))]),i("td",[e._v(e._s(t.remark))]),i("td",[i("span",{staticClass:"oper",on:{click:function(t){e.form.teacherChildList.splice(a,1)}}},[e._v("删除")])])])}),i("tr",{directives:[{name:"show",rawName:"v-show",value:e.showChildForm,expression:"showChildForm"}]},[i("td",[i("el-input",{attrs:{size:"small",placeholder:"子女姓名"},model:{value:e.childForm.name,callback:function(t){e.$set(e.childForm,"name",t)},expression:"childForm.name"}})],1),i("td",[i("el-select",{attrs:{size:"small"},model:{value:e.childForm.sex,callback:function(t){e.$set(e.childForm,"sex",t)},expression:"childForm.sex"}},e._l(e.$enums.Sex.list,function(e){return i("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})}))],1),i("td",[i("el-input",{attrs:{type:"tel",size:"small",placeholder:"年龄"},model:{value:e.childForm.age,callback:function(t){e.$set(e.childForm,"age",t)},expression:"childForm.age"}})],1),i("td",[i("el-input",{attrs:{size:"small",placeholder:"学校或单位"},model:{value:e.childForm.unit,callback:function(t){e.$set(e.childForm,"unit",t)},expression:"childForm.unit"}})],1),i("td",[i("el-input",{attrs:{size:"small",placeholder:"备注"},model:{value:e.childForm.remark,callback:function(t){e.$set(e.childForm,"remark",t)},expression:"childForm.remark"}})],1),i("td",[i("span",{staticClass:"oper",on:{click:e.addChild}},[e._v("完成")]),i("span",{staticClass:"oper",on:{click:function(t){e.showChildForm=!1}}},[e._v("删除")])])]),i("i",{staticClass:"icon el-icon-circle-plus",on:{click:function(t){e.showChildFormFun()}}})],2)])])],1),i("el-dialog",{staticClass:"dep-dialog",attrs:{visible:e.depDialog,width:"400px"},on:{"update:visible":function(t){e.depDialog=t}}},[i("div",{staticClass:"dep-form"},[i("p",{staticClass:"title"},[e._v(e._s(e.depTitle))]),i("div",{staticClass:"content"},[i("item",{attrs:{data:e.depData,selectedDep:e.selectedDep,selectedDepName:e.selectedDepName},on:{"update:selectedDep":function(t){e.selectedDep=t},"update:selectedDepName":function(t){e.selectedDepName=t}}})],1)]),i("div",{staticClass:"btns"},[i("div",{staticClass:"btn-submit",on:{click:function(t){e.depDialog=!1}}},[e._v("关闭")])])]),i("div",{staticClass:"btns mt15 mb30"},[i("div",{staticClass:"btn-submit btn-add mr15",on:{click:function(t){e.doSubmit()}}},[e._v(e._s(e.$route.query.id?"保存":"提交"))]),i("div",{staticClass:"btn-clear",on:{click:function(t){e.$router.go(-1)}}},[e._v("返回")])])],1)},s=[],r=(i("28a5"),i("6d67"),i("7f7f"),i("ac6a"),i("f3e2"),i("96cf"),i("1da1")),l=(i("78ce"),i("6762"),i("2fdb"),i("5967")),n={components:{item:l["a"]},data:function(){var e=this,t=function(t,i,a){0===e.selectedDepName.length?a(new Error("请选择所属部门")):a()},i=function(t,i,a){e.position&&e.position.length?a():e.form.teacherPositionList.length>0?a():a(new Error("请选择岗位"))};return{editPage:this.$route.path.includes("addEdit"),detailPage:this.$route.path.includes("detail"),subjectList:[],gradeList:[],form:{name:"",sex:"Male",jobStatus:"SERVING",orgIds:[1],courseIdList:[],gradeId:"",idCard:"",phone:"",birthday:null,age:null,folk:"",residence:"",teacherPositionList:[],joinPartyTime:null,politicsStatus:null,firstEducation:null,highestEducation:null,graduateTime:null,graduateSchool:"",joinWorkTime:null,workYears:"",joinSchoolTime:null,lastWorkUnit:"",teacherTitleList:[],homeTel:"",formationType:null,teacherChildList:[]},rules:{teacherPositionList:{required:!0,validator:i,trigger:"change"},name:{required:!0,message:"请输入姓名",trigger:"blur"},formationType:{required:!0,message:"请选择编制",trigger:"change"},jobStatus:{required:!0,message:"请选择状态",trigger:"change"},orgIds:{required:!0,validator:t,trigger:"change"},phone:[{required:!0,message:"请输入联系电话",trigger:"blur"},{min:11,max:11,message:"长度为11位数字",trigger:"blur"}]},showTitleForm:!1,titleForm:{title:"",time:null},showChildForm:!1,childForm:{name:"",sex:"Male",unit:"",remark:"",age:""},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},depDialog:!1,depTitle:"",depData:[],selectedDep:[],selectedDepName:[],nationList:[],positionForm:!1,position:[],positionList:[]}},methods:{getNationList:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/common/queryNationList.do"});case 2:this.nationList=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getPositionName:function(e){var t="",i=this.form.teacherPositionList[e];return this.positionList.forEach(function(e){e.value===i.firstPositionId&&(t+=e.label,e.children&&e.children.forEach(function(e){e.value===i.secondPositionId&&(t+="/"+e.label)}))}),t},getPosition:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/dict/queryTeacherPositionCascade.do"});case 2:this.positionList=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getAllDep:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=function(e,t){return e.forEach(function(e){e.tier=t,e.status=!1,e.subOrgList.length>0&&i(e.subOrgList,t+1)}),e},e.next=3,this.$ajax({url:"/org/queryOrganizationTree.do",query:{orgTypes:["ADMIN_ORG","TEACH_ORG"]}});case 3:t=e.sent,this.depTitle=t.orgName,this.depData=i(t.subOrgList,1);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),disabledOption:function(e){for(var t=this.form.teacherTitleList,i=0;i<t.length;i++)if(e.value===t[i].title)return!0;return!1},getGradeList:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/grade/queryGradeList.do"});case 2:this.gradeList=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getSubject:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/teachGroupCourse/queryCourseList.do"});case 2:t=e.sent,this.subjectList=t;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showDepDialog:function(){this.depDialog=!0,this.depTitle||this.getAllDep()},showTitleFormFun:function(){this.showTitleForm=!0},addTitle:function(){this.titleForm.title?this.titleForm.time||"RANK_UNDECIDED"===this.titleForm.title?(this.form.teacherTitleList.push({title:this.titleForm.title,acquireTime:this.titleForm.time?this.titleForm.time.$Format("yyyy-MM-dd")+" 00:00:00":null}),this.showTitleForm=!1,this.$refs.form.clearValidate(["teacherTitleList"]),this.titleForm={title:"",time:null}):this.$message.warning("请输入评定时间"):this.$message.warning("请输入职称名称")},addPosition:function(){this.position?(this.form.teacherPositionList.push({firstPositionId:this.position[0],secondPositionId:this.position[1]||null}),this.positionForm=!1,this.position=[]):this.$message.warning("请选择岗位")},showChildFormFun:function(){this.showChildForm=!0},addChild:function(){this.childForm.name?this.childForm.age&&isNaN(parseInt(this.childForm.age))?this.$message.warning("年龄请输入正整数"):parseInt(this.childForm.age)<0?this.$message.warning("年龄请输入正整数"):(this.form.teacherChildList.push(this.childForm),this.showChildForm=!1,this.childForm={name:"",sex:"Male",unit:"",remark:"",age:""}):this.$message.warning("请输入姓名")},getDetail:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/teacher/getTeacherDetail.do",query:{id:this.$route.query.id}});case 2:t=e.sent,t.courseIdList=t.courseList.map(function(e){return e.id}),this.selectedDep=[],this.selectedDepName=[],t.orgList.forEach(function(e){i.selectedDep.push(e.id),i.selectedDepName.push(e.name)}),this.form=t;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),doSubmit:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=JSON.parse(JSON.stringify(i.form)),!(t.residence&&t.residence.length>20)){e.next=4;break}return i.$message.warning("籍贯不能超过20个字符"),e.abrupt("return");case 4:if(!(t.graduateSchool&&t.graduateSchool.length>16)){e.next=7;break}return i.$message.warning("毕业院校不能超过16个字符"),e.abrupt("return");case 7:if(!(t.lastWorkUnit&&t.lastWorkUnit.length>20)){e.next=10;break}return i.$message.warning("原工作单位不能超过20个字符"),e.abrupt("return");case 10:return t.orgIds=i.selectedDep,t.birthday&&(t.birthday=new Date(t.birthday).$Format("yyyy-MM-dd")+" 00:00:00"),t.joinPartyTime&&(t.joinPartyTime=new Date(t.joinPartyTime).$Format("yyyy-MM-dd")+" 00:00:00"),t.graduateTime&&(t.graduateTime=new Date(t.graduateTime).$Format("yyyy-MM-dd")+" 00:00:00"),t.joinWorkTime&&(t.joinWorkTime=new Date(t.joinWorkTime).$Format("yyyy-MM-dd")+" 00:00:00"),t.joinSchoolTime&&(t.joinSchoolTime=new Date(t.joinSchoolTime).$Format("yyyy-MM-dd")+" 00:00:00"),a="/teacher/addTeacher.do",s="新增成功",i.$route.query.id&&(a="/teacher/updateTeacher.do",s="修改成功"),e.next=21,i.$ajax({url:a,el:".btn-add",noText:!0,query:t});case 21:i.$remind(s),i.$router.push("/personnel/teacher");case 23:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),e.next=3,this.$refs.form.validate(function(e){if(!e)return i.$message.warning("请将必填项填写完整"),!1;t()});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computedYear:function(e){if(!e)return"--";var t=new Date(e).$Format("yyyy-MM-dd"),i=(new Date).$Format("yyyy-MM-dd"),a=parseInt(t.split("-")[0]),s=parseInt(i.split("-")[0]),r=parseInt(t.split("-")[1]),l=parseInt(i.split("-")[1]),n=parseInt(t.split("-")[2]),o=parseInt(i.split("-")[2]);o>n?l++:l--,l>r&&s++;var c=s-a-1;return c>=0?c:0}},computed:{age:function(){return this.computedYear(this.form.birthday)},workYears:function(){return this.computedYear(this.form.joinWorkTime)},schoolYears:function(){return this.computedYear(this.form.joinSchoolTime)}},mounted:function(){this.$route.query.id&&this.getDetail(),this.getPosition(),this.getSubject(),this.getGradeList(),this.getNationList()}},o=n,c=(i("faaf"),i("2877")),u=Object(c["a"])(o,a,s,!1,null,"77d3a8b0",null);u.options.__file="Form.vue";t["a"]=u.exports},"243d":function(e,t,i){"use strict";var a=i("9a3c"),s=i.n(a);s.a},"28a5":function(e,t,i){i("214f")("split",2,function(e,t,a){"use strict";var s=i("aae3"),r=a,l=[].push,n="split",o="length",c="lastIndex";if("c"=="abbc"[n](/(b)*/)[1]||4!="test"[n](/(?:)/,-1)[o]||2!="ab"[n](/(?:ab)*/)[o]||4!="."[n](/(.?)(.?)/)[o]||"."[n](/()()/)[o]>1||""[n](/.?/)[o]){var u=void 0===/()??/.exec("")[1];a=function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return r.call(i,e,t);var a,n,d,m,p,h=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,g=void 0===t?4294967295:t>>>0,b=new RegExp(e.source,f+"g");u||(a=new RegExp("^"+b.source+"$(?!\\s)",f));while(n=b.exec(i)){if(d=n.index+n[0][o],d>v&&(h.push(i.slice(v,n.index)),!u&&n[o]>1&&n[0].replace(a,function(){for(p=1;p<arguments[o]-2;p++)void 0===arguments[p]&&(n[p]=void 0)}),n[o]>1&&n.index<i[o]&&l.apply(h,n.slice(1)),m=n[0][o],v=d,h[o]>=g))break;b[c]===n.index&&b[c]++}return v===i[o]?!m&&b.test("")||h.push(""):h.push(i.slice(v)),h[o]>g?h.slice(0,g):h}}else"0"[n](void 0,0)[o]&&(a=function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)});return[function(i,s){var r=e(this),l=void 0==i?void 0:i[t];return void 0!==l?l.call(i,r,s):a.call(String(r),i,s)},a]})},"2fdb":function(e,t,i){"use strict";var a=i("5ca1"),s=i("d2c8"),r="includes";a(a.P+a.F*i("5147")(r),"String",{includes:function(e){return!!~s(this,e,r).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,i){var a=i("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[a]=!1,!"/./"[e](t)}catch(s){}}return!0}},5967:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},e._l(e.treeData,function(t){return i("div",[i("div",{class:["item",{hand:t.subOrgList.length||1===t.parentOrgId}],style:{paddingLeft:25*(t.tier-1)+10+"px"},on:{click:function(e){t.status=!t.status}}},[i("i",{class:[{rotate:t.status},"el-icon-caret-right"],style:{visibility:t.subOrgList.length?"visible":"hidden"}}),i("el-checkbox",{attrs:{value:e.judge(t.orgId)},on:{change:function(i){e.changeDep(t)}}},[i("span",[e._v(e._s(t.orgName))])])],1),i("el-collapse-transition",[i("item",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"item.status"}],attrs:{selectedDepName:e.selectedDepName,selectedDep:e.selectedDep,data:t.subOrgList}})],1)],1)}))},s=[],r=(i("57e7"),i("5488")),l=i.n(r),n={components:{elCollapseTransition:l.a},props:["data","selectedDep","selectedDepName"],name:"item",data:function(){return{}},computed:{treeData:function(){return this.data},treeSelectedDep:function(){return this.selectedDep},treeSelectedDepName:function(){return this.selectedDepName||[]}},methods:{changeDep:function(e){var t=this.treeSelectedDep.indexOf(e.orgId);-1===t?(this.treeSelectedDep.push(e.orgId),this.treeSelectedDepName.push(e.orgName)):(this.treeSelectedDep.splice(t,1),this.treeSelectedDepName.splice(t,1)),this.$emit("update:selectedDep",this.treeSelectedDep),this.$emit("update:selectedDepName",this.treeSelectedDepName)},judge:function(e){return-1!==this.treeSelectedDep.indexOf(e)}},mounted:function(){}},o=n,c=(i("243d"),i("2877")),u=Object(c["a"])(o,a,s,!1,null,"97780030",null);u.options.__file="Item.vue";t["a"]=u.exports},6762:function(e,t,i){"use strict";var a=i("5ca1"),s=i("c366")(!0);a(a.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"78ce":function(e,t,i){var a=i("5ca1");a(a.S,"Date",{now:function(){return(new Date).getTime()}})},"9a3c":function(e,t,i){},d2c8:function(e,t,i){var a=i("aae3"),s=i("be13");e.exports=function(e,t,i){if(a(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(s(e))}},e567:function(e,t,i){},faaf:function(e,t,i){"use strict";var a=i("e567"),s=i.n(a);s.a}}]);
//# sourceMappingURL=chunk-73734a08.28a421c7.js.map