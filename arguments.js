//行参 和 arguments 存在映射关系
function test(x, y, a) {
  arguments[2] = 10
  console.log(a);
}

test(1, 2, 4) 