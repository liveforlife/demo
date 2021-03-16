
let a =0;
let b = async function(){
    a = a + await 10;
    debugger
    console.log('2',a)
}
b()
a++
console.log('1',a)