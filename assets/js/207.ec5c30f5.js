(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{732:function(t,a,v){"use strict";v.r(a);var s=v(2),e=Object(s.a)({},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"内核级知识点之-doc-value-初步探秘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内核级知识点之-doc-value-初步探秘","aria-hidden":"true"}},[t._v("#")]),t._v(" 内核级知识点之 doc value 初步探秘")]),t._v(" "),v("p",[v("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[v("template",{slot:"header"}),v("template",{slot:"footer"})],2)],1),t._v(" "),v("ul",[v("li",[t._v("倒排索引： 搜索的时候使用")]),t._v(" "),v("li",[t._v("正排索引：排序的时候使用，看到每个 document 的每个 field，然后进行排序，所谓的正排索引，其实就是doc values")])]),t._v(" "),v("p",[t._v("在建立索引的时候，一方面会建立倒排索引，以供搜索用；一方面会建立正排索引，也就是 doc values，以供排序，聚合，过滤等操作使用")]),t._v(" "),v("p",[t._v("doc values 是被保存在磁盘上的，此时如果内存足够，os 会自动将其缓存在内存中，性能还是会很高；如果内存不足够，os 会将其写入磁盘上")]),t._v(" "),v("h2",{attrs:{id:"倒排索引回顾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引回顾","aria-hidden":"true"}},[t._v("#")]),t._v(" 倒排索引回顾")]),t._v(" "),v("p",[t._v("比如：")]),t._v(" "),v("p",[t._v("doc1: hello world you and me\ndoc2: hi, world, how are you")]),t._v(" "),v("p",[t._v("倒排索引可能如下：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("word")]),t._v(" "),v("th",[t._v("doc1")]),t._v(" "),v("th",[t._v("doc2")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("hello")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("world")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("*")])]),t._v(" "),v("tr",[v("td",[t._v("you")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("*")])]),t._v(" "),v("tr",[v("td",[t._v("and")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("me")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("hi")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("*")])]),t._v(" "),v("tr",[v("td",[t._v("how")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("*")])]),t._v(" "),v("tr",[v("td",[t._v("are")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("*")])])])]),t._v(" "),v("p",[t._v("query string：hello you --\x3e hello, you")]),t._v(" "),v("p",[t._v("hello --\x3e doc1\nyou --\x3e doc1,doc2")]),t._v(" "),v("p",[t._v("在倒排索引中就匹配到了。")]),t._v(" "),v("h2",{attrs:{id:"正排索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正排索引","aria-hidden":"true"}},[t._v("#")]),t._v(" 正排索引")]),t._v(" "),v("p",[t._v("doc1: hello world you and me")]),t._v(" "),v("p",[t._v("doc2: hi, world, how are you")]),t._v(" "),v("p",[t._v("sort by age")]),t._v(" "),v("div",{staticClass:"language-json line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-json"}},[v("code",[t._v("doc1"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jack"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"age"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ndoc2"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tom"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"age"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("table",[v("thead",[v("tr",[v("th",[t._v("document")]),t._v(" "),v("th",[t._v("name")]),t._v(" "),v("th",[t._v("age")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("doc1")]),t._v(" "),v("td",[t._v("jack")]),t._v(" "),v("td",[t._v("27")])]),t._v(" "),v("tr",[v("td",[t._v("doc2")]),t._v(" "),v("td",[t._v("tom")]),t._v(" "),v("td",[t._v("30")])])])]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("疑问")]),t._v(" "),v("p",[t._v("还是没有明白，怎么用来排序的，对于正排索引来说，搜索到所有的文档之后，再按照文档中的字段排序不行么？")]),t._v(" "),v("p",[t._v("那么正排索引和平时 mysql 中的类似，直接获取 document 然后按照字段排序。")]),t._v(" "),v("p",[t._v("这两个貌似是一样的？")])])])},[],!1,null,null,null);a.default=e.exports}}]);