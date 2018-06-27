//Given two integers a and b, which can be positive or negative,
//find the sum of all the numbers between including them too and return it.
//If the two numbers are equal return a or b.

function GetSum( a,b ){
  //create a place to store value of sum
  var sum = 0;
  //if a is equal to b return a
  if( a === b ){
    return a;
//or if a is less than b a will count up until eaual to b
  }else if( a < b ){
    for( a; a <= b; a++ ){
		//sum will be equal to a
      sum += a;
    }
  }else if( b < a ){
    for( b; b <= a; b++ ){
		//same as previous loop for the instance of b
      sum += b;
    }
  }
  return sum;
   //Good luck!
}
