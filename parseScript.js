// fetch execution variable called jsonString
var inputString = execution.getVariable("jsonString");

// parse response variable with camunda-spin, use the Number() function
// to convert the string to a javascript Number
Number(S(inputString).prop("q").value());
