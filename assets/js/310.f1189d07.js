(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{452:function(_,t,v){"use strict";v.r(t);var r=v(2),d=Object(r.a)({},function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"自定义结果集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自定义结果集","aria-hidden":"true"}},[_._v("#")]),_._v(" 自定义结果集")]),_._v(" "),v("h2",{attrs:{id:"相关资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关资料","aria-hidden":"true"}},[_._v("#")]),_._v(" 相关资料")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/data-types.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("支持的数据类型"),v("OutboundLink")],1)]),_._v(" "),v("li",[_._v("--------- 后面是协议相关-------------")]),_._v(" "),v("li",[v("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/com-query-response.html#column-type",target:"_blank",rel:"noopener noreferrer"}},[_._v("数据类型"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/com-query-response.html#packet-Protocol::ColumnDefinition",target:"_blank",rel:"noopener noreferrer"}},[_._v("列定义（响应包）"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/com-query-response.html#packet-ProtocolText::Resultset",target:"_blank",rel:"noopener noreferrer"}},[_._v("结果集"),v("OutboundLink")],1)])]),_._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),v("p",[_._v("数值类型中的强制表现的写法是 [1,2] 后面的都强制表现为前面的。\n如：[INT,INTEGER] 虽然在一些工具中可以指定这 2 个类型，但是提交之后都会强制转成 INT 类型")])]),_._v(" "),v("h2",{attrs:{id:"数字类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字类型","aria-hidden":"true"}},[_._v("#")]),_._v(" 数字类型")]),_._v(" "),v("ul",[v("li",[_._v("整数类型（精确值） - [INT,INTEGER]，SMALLINT，TINYINT，MEDIUMINT，BIGINT")]),_._v(" "),v("li",[_._v("定点类型（精确值） - [DECIMAL，NUMERIC]")]),_._v(" "),v("li",[_._v("浮点类型（近似值） - FLOAT，DOUBLE")]),_._v(" "),v("li",[_._v("比特值类型 - BIT")])]),_._v(" "),v("h3",{attrs:{id:"数字类型属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字类型属性","aria-hidden":"true"}},[_._v("#")]),_._v(" 数字类型属性")]),_._v(" "),v("p",[_._v("显示宽度：类型括号中的数值，比如 TINYINT(100); TINYINT 的取值范围是 -128~127（无符号为0~255，但是无法显示的写入127以上的数据）")]),_._v(" "),v("p",[_._v("TINYINT(100)：表定义是可以的，不会报错，但是存储的值只能是在范围内，否则报错；")]),_._v(" "),v("p",[_._v("显示宽度的定义是无上限的；")]),_._v(" "),v("p",[_._v("UNSIGNED 所有数据类型都可以选用（非标准）的属性，无符号属性；")]),_._v(" "),v("p",[_._v("无符号属性的定义："),v("code",[_._v("CREATE TABLE t1 (i1 TINYINT, i2 TINYINT UNSIGNED);")])]),_._v(" "),v("h3",{attrs:{id:"超出范围和溢出处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超出范围和溢出处理","aria-hidden":"true"}},[_._v("#")]),_._v(" 超出范围和溢出处理")]),_._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/out-of-range-and-overflow.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("官网文档"),v("OutboundLink")],1)])]),_._v(" "),v("p",[_._v("当 sql 模式处于严格模式的时候："),v("code",[_._v("SET sql_mode = 'TRADITIONAL';")]),_._v(" 超出数据类型的范围会报错；")]),_._v(" "),v("p",[v("code",[_._v("SET sql_mode = '';")]),_._v(" : 非严格模式只会把值裁剪到范围类存储，并发出警告日志")]),_._v(" "),v("h2",{attrs:{id:"时间类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#时间类型","aria-hidden":"true"}},[_._v("#")]),_._v(" 时间类型")]),_._v(" "),v("ul",[v("li",[_._v("DATE, DATETIME, TIMESTAMP")]),_._v(" "),v("li",[_._v("TIME")]),_._v(" "),v("li",[_._v("YEAR：限制为显示宽度为固定值 YEAR(4)")])]),_._v(" "),v("h2",{attrs:{id:"字符串类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型","aria-hidden":"true"}},[_._v("#")]),_._v(" 字符串类型")]),_._v(" "),v("ul",[v("li",[_._v("CHAR、VARCHAR")]),_._v(" "),v("li",[_._v("BINARY、VARBINARY")]),_._v(" "),v("li",[_._v("BLOB、TEXT")]),_._v(" "),v("li",[_._v("ENUM")]),_._v(" "),v("li",[_._v("SET")])]),_._v(" "),v("h2",{attrs:{id:"空间数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#空间数据类型","aria-hidden":"true"}},[_._v("#")]),_._v(" 空间数据类型")]),_._v(" "),v("h2",{attrs:{id:"json-数据类型（5-7-8-）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#json-数据类型（5-7-8-）","aria-hidden":"true"}},[_._v("#")]),_._v(" JSON 数据类型（5.7.8+）")]),_._v(" "),v("h2",{attrs:{id:"小总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小总结","aria-hidden":"true"}},[_._v("#")]),_._v(" 小总结")]),_._v(" "),v("ol",[v("li",[_._v("上面的数据类型有些是有强制性的默认宽度。但是在官网暂时没有找到；")]),_._v(" "),v("li",[_._v("只有字符串类型有自定义编码；")]),_._v(" "),v("li",[_._v("字符串类型中 CHAR、VARCHAR 必须要指定显示宽度")]),_._v(" "),v("li",[_._v("数值类型中 整数类型 和 比特值类型 和 定点类型 必须有显示宽度")]),_._v(" "),v("li",[_._v("时间类型只有 YEAR 有显示宽度")])]),_._v(" "),v("h2",{attrs:{id:"强制默认宽度汇总"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强制默认宽度汇总","aria-hidden":"true"}},[_._v("#")]),_._v(" 强制默认宽度汇总")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("类型")]),_._v(" "),v("th",[_._v("默认值")]),_._v(" "),v("th",[_._v("强制固定值")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("TINYINT")]),_._v(" "),v("td",[_._v("4")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("SMALLINT")]),_._v(" "),v("td",[_._v("6")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("MEDIUMINT")]),_._v(" "),v("td",[_._v("9")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("INT")]),_._v(" "),v("td",[_._v("11")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("BIGINT")]),_._v(" "),v("td",[_._v("20")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("BIT")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("DECIMAL")]),_._v(" "),v("td",[_._v("10,0")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("CHAR_string")]),_._v(" "),v("td",[_._v("255")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("VARCHAR")]),_._v(" "),v("td",[_._v("255")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("BINARY")]),_._v(" "),v("td",[_._v("255")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("VARBINARY")]),_._v(" "),v("td",[_._v("255")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("YEAR")]),_._v(" "),v("td",[_._v("4")]),_._v(" "),v("td",[_._v("4")])]),_._v(" "),v("tr",[v("td",[_._v("BLOB")]),_._v(" "),v("td",[_._v("65535")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("196605")]),_._v(" "),v("td")])])]),_._v(" "),v("h2",{attrs:{id:"数据类型-与-协议类型的映射关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据类型-与-协议类型的映射关系","aria-hidden":"true"}},[_._v("#")]),_._v(" 数据类型 与 协议类型的映射关系")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("数据类型")]),_._v(" "),v("th",[_._v("协议类型")]),_._v(" "),v("th",[_._v("字符集(默认)")]),_._v(" "),v("th",[_._v("Decimals(默认)")]),_._v(" "),v("th",[_._v("flags（server status）")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("INT")]),_._v(" "),v("td",[_._v("FIELD_TYPE_LONG (3)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("SMALLINT")]),_._v(" "),v("td",[_._v("FIELD_TYPE_SHORT (2)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("TINYINT")]),_._v(" "),v("td",[_._v("FIELD_TYPE_TINY (1)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("MEDIUMINT")]),_._v(" "),v("td",[_._v("FIELD_TYPE_INT24 (9)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("BIGINT")]),_._v(" "),v("td",[_._v("FIELD_TYPE_LONGLONG (8)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("DECIMAL")]),_._v(" "),v("td",[_._v("FIELD_TYPE_NEWDECIMAL (246)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("FLOAT")]),_._v(" "),v("td",[_._v("FIELD_TYPE_FLOAT (4)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td",[_._v("31")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("FIELD_TYPE_DOUBLE (5)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td",[_._v("31")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("BIT")]),_._v(" "),v("td",[_._v("FIELD_TYPE_BIT (16)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0020       （Unsigned: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("DATE")]),_._v(" "),v("td",[_._v("FIELD_TYPE_DATE (10)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0080       （Binary: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("DATETIME")]),_._v(" "),v("td",[_._v("FIELD_TYPE_DATETIME (12)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0080       （Binary: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("TIMESTAMP")]),_._v(" "),v("td",[_._v("FIELD_TYPE_TIMESTAMP (7)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0080       （Binary: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("TIME")]),_._v(" "),v("td",[_._v("FIELD_TYPE_TIME (11)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0080       （Binary: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("YEAR")]),_._v(" "),v("td",[_._v("FIELD_TYPE_YEAR (13)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0060 （Zero fill: Set / Unsigned: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("CHAR")]),_._v(" "),v("td",[_._v("Type: FIELD_TYPE_STRING (254)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("VARCHAR")]),_._v(" "),v("td",[_._v("FIELD_TYPE_VAR_STRING (253)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("BINARY")]),_._v(" "),v("td",[_._v("FIELD_TYPE_STRING (254)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0080       （Binary: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("VARBINARY")]),_._v(" "),v("td",[_._v("FIELD_TYPE_VAR_STRING (253)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0080       （Binary: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("BLOB")]),_._v(" "),v("td",[_._v("FIELD_TYPE_BLOB (252)")]),_._v(" "),v("td",[_._v("binary COLLATE binary (63)")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0090       （Binary: Set / Blob: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("FIELD_TYPE_BLOB (252)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0010       （Blob: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("ENUM")]),_._v(" "),v("td",[_._v("FIELD_TYPE_STRING (254)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0100       （Enum: Set）")])]),_._v(" "),v("tr",[v("td",[_._v("SET")]),_._v(" "),v("td",[_._v("FIELD_TYPE_STRING (254)")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("0x0800       （Set: Set）")])])])])])},[],!1,null,null,null);t.default=d.exports}}]);