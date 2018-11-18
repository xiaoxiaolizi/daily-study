// 1.1 javascript 语言核心

// 变量是表示值的一个符号名字
// 变量是通过var 关键字声明的
var x;  // 声明一个变量x

// 值可以通过等号赋值给变量
x = 0;  // 现在变量的x值为0;
x       // => 0: 通过变量获取值

// javascript 支持多种数据类型
x = 1;  // 数字
x = 0.01;  // 整数和实数共用一种数据类型
x = "hello world";  // 由双引号内的文本构成的字符串
x = 'javascript';  // 单引号内的文本同样构成字符串
x = true;  // 布尔值
x = false;  // 另一个布尔值
x = null;  // null是一个特殊的值，意思是空
x = undefined; // undefined和null非常相似


// javascript 中的最重要的类型就是对象
// 对象是名/值对的集合，或字符串到值映射的集合
var book = {  // 对象是由花括号扩起来的
    topic: "Javascript",  // 属性topic的值是“Javscript”
    fat: true  // 属性fat的值是true
}  // 右花括号标记了对象的结束

// 通过‘.’或‘[]’来访问对象属性
book.topic  // => "Javascript"
book["fat"]  // => true:另外一个获取属性的方式
book.author = "Flanagan";  // 通过赋值创建一个新属性
book.contents = [];  // {} 是一个空对象，它没有属性

// Javascript同样支持数组（以数字为索引的列表）
var primes = [2, 3, 5, 7];  // 拥有4个值的数组：由“[”和“]”划定边界
primes[0]  // => 2:数组中的第一个元素（索引为0）;
primes.length // => 4:数组中的元素个数
primes[primes.length - 1]  // => 7:数组中的最后一个元素
primes[4] = 9;  // 通过赋值来添加新元素
primes[4] = 11; // 或通过赋值来改变已有的元素
var empty = [];  // []是空数组，它具有0个元素
empty.length  // => 0

// 数组和对象中都可以包含另一个数组或对象；
var points = [  // 具有两个元素的数组
    {x: 0, y: 0},  // 每个元素都是一个对象
    {x: 1, y: 1}
];
var data = {  // 一个包含两个属性的对象
    trial1: [[1, 2], [3, 4]],  // 每一个属性都是对象
    trial2: [[2, 3], [4, 5]]  // 数组的元素也是数组
};


// 运算符作用于操作数，生成一个新的值
// 最常见的是算术运算符
3 + 2  // => 5: 加法
3 - 2  // => 1: 减法
3 * 2  // => 6: 乘法
3 / 2  // => 1.5: 除法
points[1].x - points[0].x  // => 1: 更复杂的操作数也能照常工作
"3" + "2"  // => "32": 可以完成加法运算也可以作字符串连接

// Javascript 定义了一些算术运算符的简写形式
var count = 0;  // 定义一个变量
count++;  // 自增1
count--;  // 自减1
count += 2;  // 自增2: 和“count = count + 2;” 写法一样
count *= 3;  // 自乘3: 和“count = count * 3;” 写法一样
count 


// 相等关系运算符用来判断两值是否相等
// 不等、大于、小于运算符的运算结果是true或false
var x = 2, y = 3;  // 这里的 = 等号是赋值的意思，不是比较相等
x == y  // => false: 相等
x != y  // => true: 不等
x < y   // => true: 小于
x <= y  // => true: 小于等于
x > y   // => false: 大于
x >= y  // => false: 大于等于
"two" == "three"  // => false: 两个字符串不相等
"two" > "three"  // => true: "tw"在字母表中的索引大于"th"
false == (x > y)  // => true: false 和 false 相等

// 逻辑运算符是对布尔值的合并或求反
(x == 2) && (y == 3)  // => true: 两个比较都是true, &&表示 "与"
(x > 3) || (y < 3)  // => false: 两个比较不都是true, || 表示 "或"
!(x == y)  // => true: !求反



// 函数是一段带有参数的Javascript代码端，可以多次调用
function plus1(x) {  // 定义了名为plus1的一个函数，带有参数x
    return x+1;  // 返回一个比传入的参数大的值
}  // 函数的代码块是由花括号包裹起来的部分
plus1(y)  // => 4: y为3, 调用函数的结果为3+1

var square = function(x) {  // 函数是一种值，可以赋值给变量
    return x*x;  // 计算函数的值
}  // 分号标识了赋值语句的结束
square(plus1(y))  // => 16: 在一个表达式中调用两个函数

// 当函数赋值给对象的属性，我们称为 "方法",所有的Javascript 对象都含有方法
var a = [];  // 创建一个空数组
a.push(1, 2, 3);  // push()方法向数组中添加元素
a.reverse();  // 另一个方法，将数组元素的次序反转

// 我们也可以定义自己的方法， "this"关键字是定义方法的对象的引用，这里的例子是上文中提到的包含两个点位置信息的数组
points.dist = function() {  // 定义一个方法用来计算两点之间的距离
    var p1 = this[0];  // 通过this获得对当前数组的引用
    var p2 = this[1];  // 并取得调用的数组的俩个元素
    var a = p2.x - p1.x;  // x坐标抽上的距离
    var b = p2.y - p1.y;  // y坐标抽上的距离
    return Math.sqrt(a * a + b * b);  // 勾股定理 用法Math.sqrt()来计算平方根
}
points.dist()  // => 1.44: 求的两个点之间的距离

// 这些Javascript 语句使用该语法包含条件判断和循环
// 使用里类似C、C++、Java和其他语言的语法
function abs(x) {  // 求绝对值的函数
    if(x >= 0) {  // if 语句...
        return x;  // 如果比较结果为true则执行这里的代码
    }  // 子句的结束 
    else {  // 当if条件不满足时执行else子句
        return - x;
    }  // 如果分支中只有一条语句，花括号是可以省略的
} // 注意if/else中嵌套的return 语句

function factorial(n) {  // 计算阶乘的函数
    var product = 1;  // 给product赋值为1
    while (n > 1) {  // 当()内的表达式为true时循环执行{}内的代码
        product *= n;  // "product = product * n"的简写形式
        n--;  // "n = n - 1;"的简写形式
    } // 循环结束
    return product; // 返回product
}
factorial(4)  // => 24: 1*4*3*2

function factorial2(n) {  // 实现循环的另一种写法
    var i, product = 1;  // 给product赋值为1
    for (i = 2; i <= n; i++)  // 将i从2自增至n
     product *= i;  // 循环体，当循环体中只有一句代码，可以省略{}
     return product;  // 返回计算好的jie ssjies
}
factorial2(5)  // => 120: 1*2*3*4*5

// 定义一个构造函数以初始化一个新的Point 对象
function Point(x, y) {
    this.x = x;  // 按照惯例，构造函数均以大写字母开始
    this.y = y;  // 关键字this指代初始化的实例
}  // 不需要return

// 使用new 关键字和构造函数来创建一个实例
var p = new Point(1, 1); // 平面几何中的点(1, 1);

// 通过给构造函数的prototype对象赋值来给Point对象定义方法
Point.prototype.r = function() {  // 返回 x 平方 + y 平方 的平方根
    return Math.sqrt(this.x * this.x + this.y * this.y)  // this 指代调用这个方法的对象
}

// Point的实例对象p (以及所有的Point实例对象) 继承了方法 r()
p.r();  // => 1.414...