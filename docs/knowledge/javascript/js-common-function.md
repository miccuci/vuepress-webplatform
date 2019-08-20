# js常用对象方法
---

### 参考库
[js对象标准库](https://wangdoc.com/javascript/stdlib/index.html)

### Object对象
1. Object.keys()    获取对象所有key值 
```
var obj = {
  p1: 123,
  p2: 456
};
Object.keys(obj) // ["p1", "p2"]
```
2. Object.defineProperties()   在一个对象上定义新的属性或修改现有属性，并返回该对象。
```
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

obj.p // 123

obj.p = 246;
obj.p // 123
```
3. Object.assign() 拷贝对象
```
var obj = Object.assign({},obj1,obj2); // 浅拷贝
```

### Array对象
1. join() 
```
var a = [1, 2, 3, 4];

a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"
```
2. slice() 
```
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
```
3. splice()
```
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]

var a = [1, 1, 1];
a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
```
4. sort()
```
var a = [
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28  }
]
a.sort(function (o1, o2) {
  return o1.age - o2.age;
})
// [
//   { name: "李四", age: 24 },
//   { name: "王五", age: 28  },
//   { name: "张三", age: 30 }
// ]
```
5. map()
```
var numbers = [1, 2, 3];
var newNums = numbers.map(function (n) {
  return n + 1;
});
newNums // [2, 3, 4]
```
6. forEach() 
不能return不能break
7. filter()
```
var a= [1, 2, 3, 4, 5]
a=a.filter(function (elem, index, arr) {
  return index % 2 === 0;
});
a // [1, 3, 5]
```
### String对象
1. slice() substr()
```
'JavaScript'.slice(0, 4) // "Java"
```
2. split()
```
'a,b,c'.split(',') // ["a", "b", "c"]
```