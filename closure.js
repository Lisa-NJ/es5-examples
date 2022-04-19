function test() {
  var arr = []
  for (var i = 0; i < 10; i++) {
    arr[i] = function () {
      console.log(i + '')
    }
  }
  return arr
}
var myArr = test()

for (var j = 0; j < 10; j++) {
  myArr[j]()
} //=> 10 10 10 ... 10

//--------------------------------------
function testImprove() {
  var arr = []
  for (var i = 0; i < 10; i++) {
    (function (j) {
      arr[j] = function () {
        console.log(j + '')
      }
    }(i))

  }
  return arr
}
var myArr1 = testImprove()

for (var j = 0; j < 10; j++) {
  myArr1[j]()
} //=> 0 1 3 ... 9