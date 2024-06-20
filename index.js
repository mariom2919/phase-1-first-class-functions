// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback(); // Call the provided callback function
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    // Named function definition
    function namedFunction() {
      return "This is a named function!";
    }
    return namedFunction; // Return the named function
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return () => "This is an anonymous function!";  // Return anonymous function using arrow syntax
  }
  
  // Call the functions
  receivesAFunction(function() {
    console.log("Callback function called!");
  });
  
  const returnedNamedFunction = returnsANamedFunction();
  console.log(returnedNamedFunction()); // Call the returned named function
  
  const returnedAnonymousFunction = returnsAnAnonymousFunction();
  console.log(returnedAnonymousFunction()); // Call the returned anonymous function
  