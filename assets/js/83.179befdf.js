(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{358:function(t,e,a){t.exports=a.p+"assets/img/markdown-img-paste-20190113215801435.b8fdeab6.png"},734:function(t,e,a){"use strict";a.r(e);var r=a(2),s=Object(r.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"分布式搜索引擎内核解密之-query-phase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式搜索引擎内核解密之-query-phase","aria-hidden":"true"}},[t._v("#")]),t._v(" 分布式搜索引擎内核解密之 query phase")]),t._v(" "),r("p",[r("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[r("template",{slot:"header"}),r("template",{slot:"footer"})],2)],1),t._v(" "),r("h2",{attrs:{id:"query-phase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-phase","aria-hidden":"true"}},[t._v("#")]),t._v(" query phase")]),t._v(" "),r("ol",[r("li",[t._v("搜索请求发送到某一个 coordinate node，构构建一个 priority queue，长度以 paging 操作 from 和 size 为准，默认为 10")]),t._v(" "),r("li",[t._v("coordinate node 将请求转发到所有 shard，每个 shard 本地搜索，并构建一个本地的 priority queue")]),t._v(" "),r("li",[t._v("各个 shard 将自己的 priority queue 返回给 coordinate node，并构建一个全局的 priority queue")])]),t._v(" "),r("p",[t._v("这个流程就叫 query phase （查询阶段）")]),t._v(" "),r("p",[r("img",{attrs:{src:a(358),alt:""}})]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("这个过程还是经典的做法，有一个节点来做聚合，所以就会有单节点聚合占用资源过多的情况发生")])]),t._v(" "),r("h2",{attrs:{id:"replica-shard-如何提升搜索吞吐量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#replica-shard-如何提升搜索吞吐量","aria-hidden":"true"}},[t._v("#")]),t._v(" replica shard 如何提升搜索吞吐量")]),t._v(" "),r("p",[t._v("一次请求要打到所有 shard 的一个 replica/primary 上去，如果每个 shard 都有多个 replica，那么同时并发过来的搜索请求可以同时打到其他的 replica 上去")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("疑问")]),t._v(" "),r("p",[t._v("还是同步问题，这个还是不知道 es 是怎么保证在快速同步的，并且查询还没有问题的？不明白")])])])},[],!1,null,null,null);e.default=s.exports}}]);