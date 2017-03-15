var length = Math.round(Math.random()*1000),arr = [], oldArr =[];
for (var i = 0; i< length-1; i++) {
    var number = Math.round(Math.random()*100);
    arr.push(number);
    oldArr[i]=arr[i];
}
var arrEnd = length - 1;
for (var i=0; i<arrEnd; i++) {
    for (var j=0; j < arrEnd - i; j++) {
        if (arr[j] < arr[j+1]) {
            var min = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=min;
        }
    }
}
console.log (oldArr);
console.log (arr);
