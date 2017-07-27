/*function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Austin', function(err, temp){
  if (err) {
    console.log ('error', err);
  } else {
    console.log ('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    }, 1000);

  });
}

getTempPromise('Austin').then(function (temp){
  console.log('Promise success', temp);
}, function (err){
  console.log('Promise error', err);
});
*/
//Challenge Area

function addPromise (a, b){
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b ==='number'){
      resolve (a+b);
    }else {
      reject('A and B need to be numbers');
    }
  });
}

addPromise(1,68).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error',err);
});

addPromise('andrew',9).then(function(sum){
  console.log('this should not show up');
}, function(err){
  console.log('this should appear',err)
});
