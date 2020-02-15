// 这是node中向外暴露成员的方式

// module.exports = {}

//在ES6中，也通过规范的形式，规定了ES6中如何导入和导出模块
// ES6中导入模块，使用 import 模块名称 from ‘模块标识符’ ；这是导入css 组件等的方式 import ‘表示路径’

// 在ES6中，使用export default 和 export 向外暴露成员；
var info = {
    name:"zs",
    age:20
}
export default info

// 注意：export default 向外暴露的成员，可以使用任意的变量来接收
// 注意：在一个模块中export default只允许向外暴露一次
// 注意：在一个模块中可以同时使用export default 和export 向外暴露成员

export var title = '小星星'
export var content = 'asdsa'
// 注意：使用export向外暴露的成员，只能使用{}的形式来接收，这种形式，叫做【按需导出】
// 注意：export可以向外暴露多个成员，同时如果某些成员，我们在import的时候，不需要，则可以不再{}中定义，就是可以不接收
// 注意：使用export导出的成员，必须严格按照导出的名称用{}来接收
// 注意：使用export导出的成员，如果就想换个名称来接收，可以使用as 来起别名

// 在node中，使用var 名称 = require('模块标识符')
// module.exports 和 exports来暴露成员