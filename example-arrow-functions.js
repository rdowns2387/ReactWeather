/*
GREET EXAMPLE

var names = [
  'Ryan',
  'Mo',
  'Kristi',
  'Jessica',
  'Mia'
]

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log('arrowFuncSMALL', name));

var returnMe = (name) => name + '!';

console.log(returnMe('RiRi'));

var person = {
  name: 'RiRi',
  greet: function(){
      names.forEach((name) =>{
        console.log(this.name + ' says hi to ' + name);
      });
  }
};

person.greet();*/


//Challenge

function add(a,b){
  return a + b;
}

//addStatement
var addStatement = (a,b) => {
  return a + b;
}

console.log(addStatement(1,3));

//addExpression
var addExpression = (a,b) => a+b; //Arrow functions automagically returns
console.log(addExpression(12323,535996));
