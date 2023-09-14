// Question 1:
for(counter = 1; counter <= 10; counter++)
{
    console.log(counter);
}

// Question 2:

for(counter = 2; counter <= 20; counter++)
{
    if(counter % 2 === 0)
    {
        console.log(counter);
    }
}

// Question 3:

let sumOfAllIntegers = 0;
let temp = 0;
while(temp <= 100)
{
    
    sumOfAllIntegers = temp + sumOfAllIntegers;
    temp++;
}
console.log(sumOfAllIntegers);

// Question 4:

const numbers = [5, 10, 77, 27, 62];

let sumOfNumbersInArray = 0;
for(counter = 0; counter < numbers.length; counter++)
{
    sumOfNumbersInArray = sumOfNumbersInArray + numbers[counter];
}

console.log(sumOfNumbersInArray);

