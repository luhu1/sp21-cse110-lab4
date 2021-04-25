## Part 1a 
1. Line 9 prints 20 
2. Line 13 prints 20 
3. Line 9 prints 20 
4. Nothing printed in line 13. The code returned an error because the result is not defined since the let declared the variable 'result' only in the block statment which means in the else statement, result is undefined.
5. Nothing printed by line 9. The code returned an error because const 'result' cannot be redefined. Which means that if line 7 was gone, then result would be 0. 
6. Nothing printed by line 13. The code returned an error because just like for question 5, the error happened because the const 'result' cannot be redefined in line 7. 
    
## Part 1b
1. Line 12 prints out 3 because the function is finding 'i'. 'i' is the number of times the for loop runs and it is the size of the array [100, 200, 300] which is 3. 
2. Line 13 will print out 150 because the function is finding 'discountedPrice'. 'discountedPrice' is a var that will give the discount price by multiplying the price with 1-discount. The discountedPRice is able to update itself so the the very last time discountedPrice is updated, will be printed. This time 300 is the last price that the for loop runs through so 300 *(1-0.5) = 150. 
3. Line 14 prints out 150 because the function is finding 'finalPrice'. 'finalPrice' is a var that is initialized as 0, then it is the final price where the discounted Price is multiplied by 100 and rounded then divided by 100. Since this is a 'var' the finalPrice will continue to update as the for loop runs therefore the very last price in the array is the used where discoutnedPrice is 150.  and 150 *100 rounded / 100 = 150. 
4. This function will return an array called discounted. This array will be 'finalPrice' of each of the prices using the given discount. In this example, array that will be returned is [50, 100, 150]. 
5. Line 12 will not print out anything. The code will cause an error because the 'i' is not defined. Since i is a let that is defined in the for loop, 'i' will only be defined in the for loop so since the console.log is not in the for loop, there is an error that says that 'i' is not defined.  
6. Line 13 will not print out anything.The code will cause an error because the 'discountedPrice' is not defined. Since 'discountedPrice' is a let that is defined in the for loop, 'discountedPrice' will only be defined in the for loop. The console.log is not in the for loop, so an error will say that 'discountedPrice' is not defined. 
7. Line 14 prints out 150 because the function is finding 'finalPrice'. 'finalPrice' is a let that is initialized as 0, at the beggining of the function then it is the final price where the discounted Price is multiplied by 100 and rounded then divided by 100. Since this is a 'var' the finalPrice will continue to update as the for loop runs therefore the very last price in the array is the used where discoutnedPrice is 150.  and 150 *100 rounded / 100 = 150.  
8. This function will return an array called discounted. This array will be a 'finalPrice' of each of the prices using the given discount. In this example, array that will be returned is [50, 100, 150]. 
9. Line 11 will not print out anything. THe code causes an error because the 'i' in the for loop is defined as a let which means that it is only defined in the for loop and not outside of it. Since the console.log is outside of the for loop, there will be an error where the 'i' is not defined.
10. Line 12 will print out 3 because the function is finding the 'length'. the length is const and is defined at the beginning of the function. The length is set as prices.length which is the size of the prices. Therfore the console should be printing out 3. 
11.  This function will return an array called 'discounted'. This array will be the discountedPrice of each of the prices using the given discount. In this example, array that will be returned is [50, 100, 150].
12.  a. student.name 
     b. student['Grad Year']
     c. student.greeting()
     d. student['Favorite Teacher'].name
     e. student.courseLoad[0]  
13. a. '3' + 2 = '32' since integers map to their exact string reperesntatio. 
    b. '3' - 2 = 1
    c. 3 + null = 3 
    d. '3' + null = '3null'
    e. true + 3 = 4 since true maps to 1 
    f. false + null = 0
    g. '3' + undefined = '3undefined' 
    h. '3' - undefined = 'NaN' 

14. a. '2' > 1              true, since string '2' becones a number 2
    b. '2' < '12'           false, since compares letter by letter starting from the first characters.  
    c. 2 == '2'             true, since '2' becomes a number 2 
    d. 2 === '2'            false, since the values are of differnt types
    e. true == 2            false, since true becomes the number 1 
    f. true == Boolean(2)   true, since at least one of the comparison is true.
15. THe difference between the '==' and '===' operators is that "==" is a non strict equality test where as long as they equal eachother, it's true. "===" is for strict equality test where it will check to see if the type is the same. 
16. code in JS file part1b-question16.js
17. The result will be tha newArr = [2, 4, 6]. So we first go to the function modifyArray since it is being called. Then in the for loop, it will go through the array which is [1, 2, 3]. Then in that for loop, it will push callback(array[i]) where the callback is replaced with doSomething. So the for loop is actually executing newArr.push(doSomething(array[i])). And in doSomething(num), it is just multiplying the number by two so the modifyArray is just multiplying all the numbers in the original array by 2. 
18. code in JS file 
19. The output of the code is that it will print out 1, then 4, then 3, and then 2. 