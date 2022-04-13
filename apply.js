function foo() {
  BarProp.apply(null, arguments)
}

function bar(x) {
  console.log(arguments)
}

foo(1, 2, 3, 4, 5) 