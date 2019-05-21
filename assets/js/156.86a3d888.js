(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{590:function(_,v,r){"use strict";r.r(v);var e=r(2),t=Object(e.a)({},function(){var _=this,v=_.$createElement,r=_._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"_010-redis-的-rdb-和-aof-两种持久化机制的优劣势对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_010-redis-的-rdb-和-aof-两种持久化机制的优劣势对比","aria-hidden":"true"}},[_._v("#")]),_._v(" 010. redis 的 RDB 和 AOF 两种持久化机制的优劣势对比")]),_._v(" "),r("p",[r("TOC",{class:"table-of-contents",attrs:{"list-type":"ul","include-level":[2,3]}},[r("template",{slot:"header"}),r("template",{slot:"footer"})],2)],1),_._v(" "),r("h2",{attrs:{id:"rdb-持久化机制的优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdb-持久化机制的优点","aria-hidden":"true"}},[_._v("#")]),_._v(" RDB 持久化机制的优点")]),_._v(" "),r("ol",[r("li",[r("p",[_._v("适合做冷备")]),_._v(" "),r("p",[_._v("RDB 会生成多个数据文件，每个数据文件都代表了某一个时刻中 redis 的数据，这种多个数据文件的方式，非常适合做冷备，可以将这种完整的数据文件发送到一些远程的安全存储上去，如云上，以预定好的备份策略来定期备份 redis 中的数据")])]),_._v(" "),r("li",[r("p",[_._v("性能影响小")]),_._v(" "),r("p",[_._v("能让 redis 对外提供的读写服务不受影响，因为 redis 主进程只需要 fork 一个子进程，让子进程执行磁盘 IO 操作来进行 RDB 持久化即可")])]),_._v(" "),r("li",[r("p",[_._v("数据恢复快")]),_._v(" "),r("p",[_._v("相对于 AOF 持久化机制来说，直接基于 RDB 数据文件来重启和恢复 redis 进程，更加快速。")]),_._v(" "),r("p",[_._v("因为 AOF，存放的指令日志，做数据恢复的时候，其实是要回放和执行所有的指令日志，来恢复出来内存中的所有数据的")]),_._v(" "),r("p",[_._v("RDB 就是一份数据文件，恢复的时候，直接加载到内存中即可")])])]),_._v(" "),r("p",[_._v("RBD 做冷备的优点？")]),_._v(" "),r("ul",[r("li",[_._v("RDB 生成多个文件，每个文件都代表了某一个时刻的完整的数据快照")]),_._v(" "),r("li",[_._v("AOF 只有一个文件，但是你可以，每隔一定时间，去 copy 一份这个文件出来")])]),_._v(" "),r("p",[_._v("那么 RDB 做冷备，优势在哪儿呢？由 redis 去控制固定时长生成快照文件的事情，比较方便; 而 AOF，还需要自己写一些脚本去做这个事情，且在最坏的情况下，提供数据恢复的时候，速度比 AOF 快，所以 RDB 特别适合做冷备份，冷备")]),_._v(" "),r("h2",{attrs:{id:"rdb-持久化机制的缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdb-持久化机制的缺点","aria-hidden":"true"}},[_._v("#")]),_._v(" RDB 持久化机制的缺点")]),_._v(" "),r("ol",[r("li",[r("p",[_._v("在故障时，数据丢得多")]),_._v(" "),r("p",[_._v("一般来说，RDB 数据快照文件，都是每隔 5 分钟，或者更长时间生成一次，一旦 redis 进程宕机，那么会丢失最近 5 分钟的数据（因为在内存中还未来得及导出到磁盘）")]),_._v(" "),r("p",[_._v("这个问题也是 rdb 最大的缺点，就是不适合做第一优先的恢复方案，如果你依赖 RDB 做第一优先恢复方案，会导致数据丢失的比较多")])]),_._v(" "),r("li",[r("p",[_._v("性能影响？")]),_._v(" "),r("p",[_._v("什么鬼？上面说优点的时候说是性能影响小，这里缺点又提到了？")]),_._v(" "),r("p",[_._v("以下一段话根本理解不了，")]),_._v(" "),r("p",[_._v("RDB 每次在 fork 子进程来执行 RDB 快照数据文件生成的时候，如果数据文件特别大，可能会导致对客户端提供的服务暂停数毫秒，或者甚至数秒。一般不要让 RDB 的间隔太长，否则每次生成的 RDB 文件太大了，对 redis 本身的性能可能会有影响的")])])]),_._v(" "),r("h2",{attrs:{id:"aof-持久化机制的优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aof-持久化机制的优点","aria-hidden":"true"}},[_._v("#")]),_._v(" AOF 持久化机制的优点")]),_._v(" "),r("ol",[r("li",[r("p",[_._v("在故障时，数据丢得少")]),_._v(" "),r("p",[_._v("一般 AOF 会每隔 1 秒，通过一个后台线程执行一次 fsync 操作，保证 os cache 中的数据写入磁盘中，最多丢失 1 秒钟的数据")])]),_._v(" "),r("li",[r("p",[_._v("AOF 文件写入性能高")]),_._v(" "),r("p",[_._v("AOF 日志文件以 append-only 模式写入，所以没有任何磁盘寻址的开销，写入性能非常高，而且文件不容易破损，即使文件尾部破损，也很容易修复(官方提供了一个修复工具)")])]),_._v(" "),r("li",[r("p",[_._v("rewrite 操作对 redis 主线程影响较小")]),_._v(" "),r("p",[_._v("AOF 日志文件即使过大的时候，出现后台重写操作，也不会影响客户端的读写。因为在 rewrite log 的时候，会对其中的数据进行压缩，创建出一份需要恢复数据的最小日志出来。再创建新日志文件的时候，老的日志文件还是照常写入。当新的 merge 后的日志文件 ready 的时候，再交换新老日志文件即可。")]),_._v(" "),r("p",[_._v("关于这里我实在是没有想到要怎么去做，因为写入的是指令，那么知道当前内存中的存的是哪些指定的数据呢？")])]),_._v(" "),r("li",[r("p",[_._v("AOF 文件内容比较容易阅读")]),_._v(" "),r("p",[_._v("这个特性非常适合做灾难性的误删除的紧急恢复。比如某人不小心用 flushall 命令清空了所有数据，只要这个时候后台 rewrite 还没有发生，那么就可以立即拷贝 AOF 文件，将最后一条 flushall 命令给删了，然后再将该 AOF 文件放回去，就可以通过恢复机制，自动恢复所有数据")])])]),_._v(" "),r("h2",{attrs:{id:"aof-持久化机制的缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aof-持久化机制的缺点","aria-hidden":"true"}},[_._v("#")]),_._v(" AOF 持久化机制的缺点")]),_._v(" "),r("ol",[r("li",[r("p",[_._v("日志文件稍大")]),_._v(" "),r("p",[_._v("对于同一份数据来说，AOF 日志文件通常比 RDB 数据快照文件更大")])]),_._v(" "),r("li",[r("p",[_._v("性能稍低")]),_._v(" "),r("p",[_._v("AOF 开启后，支持的写 QPS 会比 RDB 支持的写 QPS 低，因为 AOF 一般会配置成每秒 fsync 一次日志文件，当然，每秒一次 fsync，性能也还是很高的")])]),_._v(" "),r("li",[r("p",[_._v("发生过 BUG")]),_._v(" "),r("p",[_._v("以前 AOF 发生过 bug，就是通过 AOF 记录的日志，进行数据恢复的时候，没有恢复一模一样的数据出来。所以说，类似 AOF 这种较为复杂的基于命令日志 /merge/ 回放的方式，比基于 RDB 每次持久化一份完整的数据快照文件的方式，更加脆弱一些，容易有 bug。不过 AOF 就是为了避免 rewrite 过程导致的 bug，因此每次 rewrite 并不是基于旧的指令日志进行 merge 的，而是基于当时内存中的数据进行指令的重新构建，这样健壮性会好很多。")]),_._v(" "),r("p",[_._v("说 rewrite 非常复杂，因为是基于当时内存中已有数据进行构建指令达到压缩日志文件的目的，反正我是想不出来怎么实现的")])]),_._v(" "),r("li",[r("p",[_._v("数据恢复较慢")]),_._v(" "),r("p",[_._v("前面都说了，不适合做冷备，数据恢复基于指令稍慢")])])]),_._v(" "),r("h2",{attrs:{id:"rdb-和-aof-到底该如何选择"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rdb-和-aof-到底该如何选择","aria-hidden":"true"}},[_._v("#")]),_._v(" RDB 和 AOF 到底该如何选择")]),_._v(" "),r("ol",[r("li",[r("p",[_._v("不要仅仅使用 RDB，因为那样会导致你丢失很多数据")])]),_._v(" "),r("li",[r("p",[_._v("也不要仅仅使用 AOF，因为那样有两个问题")]),_._v(" "),r("p",[_._v("第一，你通过 AOF 做冷备，没有 RDB 做冷备，来的恢复速度更快;")]),_._v(" "),r("p",[_._v("第二，RDB 每次简单粗暴生成数据快照，更加健壮，可以避免 AOF 这种复杂的备份和恢复机制的 bug")])]),_._v(" "),r("li",[r("p",[_._v("综合使用 AOF 和 RDB 两种持久化机制")]),_._v(" "),r("p",[_._v("用 AOF 来保证数据不丢失，作为数据恢复的第一选择;")]),_._v(" "),r("p",[_._v("用 RDB 来做不同程度的冷备，在 AOF 文件都丢失或损坏不可用的时候，还可以使用 RDB 来进行快速的数据恢复")])])]),_._v(" "),r("p",[_._v("结论就是：都用，AOF 作为第一恢复方式，RDB 后补")])])},[],!1,null,null,null);v.default=t.exports}}]);