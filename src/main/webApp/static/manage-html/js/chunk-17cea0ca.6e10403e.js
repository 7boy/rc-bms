(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17cea0ca"],{"44be":function(e,t,a){"use strict";var i=a("c195"),n=a.n(i);n.a},a787:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plan"},[a("div",{staticClass:"table-box"},[a("el-input",{staticClass:"mr10",attrs:{placeholder:"请输入：区段作业面"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getData()}},model:{value:e.table.query.condition.workSegmentName,callback:function(t){e.$set(e.table.query.condition,"workSegmentName",t)},expression:"table.query.condition.workSegmentName"}}),a("el-input",{attrs:{placeholder:"请输入：作业区间"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getData()}},model:{value:e.table.query.condition.mileageSegmentName,callback:function(t){e.$set(e.table.query.condition,"mileageSegmentName",t)},expression:"table.query.condition.mileageSegmentName"}}),a("el-date-picker",{attrs:{type:"datetimerange",size:"mini","start-placeholder":"开始时间","end-placeholder":"结束时间","default-time":["12:00:00"]},model:{value:e.table.query.condition.workDate,callback:function(t){e.$set(e.table.query.condition,"workDate",t)},expression:"table.query.condition.workDate"}}),a("div",{staticClass:"btn-main ",on:{click:e.getData}},[e._v("查   询")]),a("div",{staticClass:"btn-main btn-add",on:{click:function(t){e.showDialog("add")}}},[e._v("新建作业面")]),a("table",{staticClass:"table",attrs:{cellspacing:"0"}},[e._m(0),e._l(e.table.list,function(t,i){return a("tr",[a("td",[e._v(e._s(i+1+(e.table.query.currentPage-1)*e.table.query.pageSize))]),a("td",[e._v(e._s(t.roleName))]),a("td",{attrs:{title:t.roleDesc}},[e._v(e._s(t.roleDesc))]),a("td",[e._v(e._s("00"===t.roleType?"默认":"自定义"))]),a("td",[e._v(e._s(new Date(t.createTime).$Format("yyyy-MM-dd hh:mm:ss")))]),a("td",[a("span",{staticClass:"oper"},[e._v("修改")]),a("span",{staticClass:"col"}),a("span",{staticClass:"oper",on:{click:function(a){e.remove(t)}}},[e._v("删除")])])])})],2),a("el-pagination",{staticClass:"pagination",attrs:{"page-size":e.table.query.pageSize,"current-page":e.table.query.currentPage,layout:"prev, pager, next, jumper",total:e.table.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.table.query,"currentPage",t)}}})],1),a("el-dialog",{attrs:{modal:!1,center:"",title:e.title,visible:e.dialog,width:"480px"},on:{"update:visible":function(t){e.dialog=t}}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"96px","label-position":"left"}},[a("el-form-item",{attrs:{label:"作业区间"}},[a("el-select",{model:{value:e.addEditCofing.query.mileageSegmentId,callback:function(t){e.$set(e.addEditCofing.query,"mileageSegmentId",t)},expression:"addEditCofing.query.mileageSegmentId"}},e._l(e.mileageSegment,function(e){return a("el-option",{attrs:{value:e.id,label:e.mileageSegmentName}})}))],1),a("el-form-item",{attrs:{label:"作业面"}},[a("el-checkbox",[e._v("上行")]),e._v("\n        k "),a("el-input",{staticClass:"short"}),e._v("\n        + "),a("el-input",{staticClass:"small"}),e._v("\n        - k "),a("el-input",{staticClass:"short"}),e._v("\n        + "),a("el-input",{staticClass:"small"}),a("el-checkbox",{staticClass:"ml5"},[e._v("下行")])],1),a("el-form-item",{attrs:{label:"作业时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"}}),a("el-time-picker",{staticClass:"time-picker",attrs:{"is-range":"",size:"mini","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"}}),a("i",{staticClass:"icon el-icon-plus"})],1),a("el-form-item",{attrs:{label:"安全员"}},[a("el-input-number",{staticClass:"mr5",attrs:{size:"mini","controls-position":"right",min:1,max:1e4}}),a("span",[e._v("人")])],1),a("el-form-item",{attrs:{label:"防护员"}},[a("el-input-number",{staticClass:"mr5",attrs:{size:"mini","controls-position":"right",min:1,max:1e4}}),a("span",[e._v("人")])],1),a("el-form-item",{attrs:{label:"现场人员人数"}},[a("el-input-number",{staticClass:"mr5",attrs:{size:"mini","controls-position":"right",min:1,max:1e4}}),a("span",[e._v("人")])],1),a("el-form-item",{attrs:{label:"提交人"}},[a("el-input",{staticClass:"w130",attrs:{disabled:"",value:e.userName}})],1),a("el-form-item",{attrs:{label:"提交时间"}},[a("el-date-picker",{attrs:{disabled:"",type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),a("el-form-item",{attrs:{label:"规划安全区域"}},[a("div",{staticClass:"btn-set"},[e._v("规划安全区域")])])],1),a("div",{staticClass:"btns mt25"},[a("div",{staticClass:"btn-main mr15",on:{click:function(t){e.editRole()}}},[e._v("提交")]),a("div",{staticClass:"btn-main",on:{click:function(t){e.dialog=!1}}},[e._v("关闭")])])],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",{attrs:{width:"7%"}},[e._v("序号")]),a("th",{attrs:{width:"12%"}},[e._v("区段作业面")]),a("th",{attrs:{width:"12%"}},[e._v("作业区间")]),a("th",{attrs:{width:"12%"}},[e._v("作业时间")]),a("th",{attrs:{width:"8%"}},[e._v("安全员人数")]),a("th",{attrs:{width:"8%"}},[e._v("防护员人数")]),a("th",{attrs:{width:"8%"}},[e._v("现场员人数")]),a("th",{attrs:{width:"9%"}},[e._v("提交人")]),a("th",{attrs:{width:"12%"}},[e._v("提交时间")]),a("th",{attrs:{width:"12%"}},[e._v("操作")])])}],r=(a("96cf"),a("1da1")),s=JSON.parse(localStorage.getItem("userInfo")).username,l={name:"Plan",data:function(){return{table:{url:"/workSegment/list",loading:".table",list:[],total:0,query:{condition:{workSegmentName:"",mileageSegmentName:"",workDate:""},currentPage:1,pageSize:this.$conf.PAGES}},addEditCofing:{url:"",query:{mileageSegmentId:null}},value1:new Date,userName:s,visible:!1,title:"新建自定义角色",dialog:!1,mileageSegment:[]}},methods:{showDialog:function(e,t){this.dialog=!0,this.checkedKeys=[],this.title="新建自定义角色",this.roleList.query={roleName:"",roleDesc:"",authorities:[]}},getData:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax(this.table);case 2:t=e.sent,this.table.list=t.pageItems,this.table.total=t.totalCount;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),remove:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("您确认删除该角色吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:return e.next=4,this.$ajax({url:"/role/delete",query:{id:t.id}});case 4:this.$remind("删除成功"),this.getData();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),editRole:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="","修改自定义角色"===this.title?(t="修改成功",this.roleList.url="/role/update"):(t="新建成功",this.roleList.url="/role/add"),this.roleList.query.authorities=this.checkedKeys,this.roleList.query.authorities.length){e.next=6;break}return this.$message.warning("请设置权限"),e.abrupt("return");case 6:if(this.roleList.query.roleName){e.next=9;break}return this.$message.warning("请输入角色名称"),e.abrupt("return");case 9:return e.next=11,this.$ajax(this.roleList);case 11:this.$remind(t),this.dialog=!1,this.table.query={condition:{roleName:""},currentPage:1,pageSize:this.$conf.PAGES},this.getData();case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleCurrentChange:function(e){this.table.query.currentPage=e,this.getData()},getMileageSegment:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/mileageSegment/all"});case 2:t=e.sent,this.mileageSegment=t.list;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},mounted:function(){this.getData(),this.getMileageSegment()}},o=l,c=(a("44be"),a("2877")),u=Object(c["a"])(o,i,n,!1,null,"5f7aa136",null);u.options.__file="Plan.vue";t["default"]=u.exports},c195:function(e,t,a){}}]);
//# sourceMappingURL=chunk-17cea0ca.6e10403e.js.map