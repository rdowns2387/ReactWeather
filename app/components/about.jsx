var React = require('react');

//REFACTORED STATELESS ARROW FUNCTION :D!!!!

var About = (props) =>{
  return (
    <div>
      <h1 className="text-center">Welcome to the About page</h1>
      <p>This is a small test app that uses the Open Weather API to display the weather of a city via search</p>
    </div>
  );
};
module.exports = About;
