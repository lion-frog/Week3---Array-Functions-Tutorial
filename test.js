console.log('any text');
var test = ['firstName ' , ' lastName']
console.log(test);
function car (params) {
    console.log ('\nrunning car function...', params) //\n creates line breaks
for (let i = 0; i < params.length; i++ ){
    console.log (i, 'specific element...', params [i]) //

}

}

//calling the function
car(test)