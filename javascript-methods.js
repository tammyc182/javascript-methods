/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let new_array = [];
  let len = this.length;
  for (let i = 0; i < len; i++) 
  { 
    if (this[i] === undefined) continue;
    new_array[i] = callbackFn(this[i], i, this); 
  }
  return new_array;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let pass_test = [];
  let index = 0;   // if the array is modified
  let len = this.length;
  for (let i = 0; i < len; i++) 
  { 
    if (this[i] === undefined) continue;
    if(callbackFn(this[i], i, this) === true)
    {
      pass_test[index] = this[i]; 
      index++;
    }
  }
  return pass_test;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  let len = this.length;
  for (let i = 0; i < len; i++) 
  {
    if (this[i] === undefined) continue;
    if(callbackFn(this[i], i, this) === true)
      return true; 
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  let len = this.length;
  for (let i = 0; i < len; i++) 
  {
    if (this[i] === undefined) continue;
    if(callbackFn(this[i], i, this) === false)
      return false; 
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  if (this.length === 0)
    throw new TypeError("myReduce of empty array with no initial value");
  let value = this[0];
  let len = this.length;
  for (let i = 1; i < len; i++) 
  {
    if (this[i] === undefined) continue;
    value = callbackFn(value, this[i], i, this);
  }
  return value;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++) 
    if(this[i] === searchElement)
      return true;
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  if (searchElement === undefined)
    return -1;
  for (let i = 0; i < this.length; i++) 
  {
    if (this[i] === undefined) continue;
    if(this[i] === searchElement)
      return i;
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  if (searchElement === undefined)
    return -1;
  for (let i = this.length-1; i >= 0; i--) 
  {
    if (this[i] === undefined) continue;
    if(this[i] === searchElement)
      return i;
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  let return_arr = [];
  let index = 0;
  for (const prop in object) 
  {
    //if the object is an array, the for..in inherits the array prototypes 
    if(prop==='myMap' || prop==='myFilter' || prop==='mySome' || prop==='myEvery' || 
    prop==='myReduce' || prop==='myIncludes' || prop==='myIndexOf' || prop==='myLastIndexOf' || prop ==='myValues')
      continue;
    return_arr[index] = prop;
    index++;
  }
  return return_arr;
};

// VALUES //
Object.myValues = function(object) {
  let return_arr = [];
  let index = 0;
  for (const prop in object) 
  {
    // if the object is an array, the for..in inherits the array prototypes 
    if(prop==='myMap' || prop==='myFilter' || prop==='mySome' || prop==='myEvery' || 
    prop==='myReduce' || prop==='myIncludes' || prop==='myIndexOf' || prop==='myLastIndexOf' || prop ==='myKeys')
      continue;
    return_arr[index] = object[prop];
    index++;
  }
  return return_arr;
};
