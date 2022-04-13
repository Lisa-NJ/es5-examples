function Person(name, age) {
  var a = 0
  this.name = name
  this.age = age
  function sss() {
    a++
    document.write(a)
  }
  this.say = sss
}

var oP = new Person()
oP.say()
oP.say()
var oP1 = new Person()
oP.say() 
