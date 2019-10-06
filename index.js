function f() {
    try{
        console.log("1s后执行中");
        throw new Error("错误信息");
    } catch (err) {
        console.log(err)
    }
  
  
}

try {
  setTimeout(f, 1000);
} catch (err) {
  console.log(err);
} finally {
  console.log("执行了吗？");
}
