/**
 * Created by mtc on 2018/6/21.
 */
/**
 * js深浅拷贝
 * */


var obj = {
    arr: [1,2,3,4],
    fun: function(){
        console.log(123)
    },
    date: new Date(),
    reg: /正则/ig
};

//var obj1 = JSON.parse(JSON.stringify(obj));
function deepCopy(obj){
    let newObj = new Object();
    for(let attr in obj) {
        newObj[attr] = obj[attr];
    }
    return newObj;
}

var newObj = deepCopy(obj);
newObj.arr = [1,1,1,1];

console.log(obj);
console.log(newObj);
