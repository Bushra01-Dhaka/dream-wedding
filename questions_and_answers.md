<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer B
 
<i>Here, we can see in the code above, a variable greeting is declared. after that assigned an empty object into greetign. It gives a reference error because greetign is not declared variable. And greeting will give us undefined because it is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer C 

<i>According to the code we can see a sum function that takes two parameters namely a , b . This sum function attempt to add a and b. Again this sum function is call with 1, and "2" as arguments. We know that in js we can use + operator into different data types. In that case, it will do  string concatenation and will gives "12" as a result.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer A

<i>According to the code, there is an array namely food containing ["🍕", "🍫", "🥑", "🍔"]. And there is also an object info that has one property namely favotiteFood, initially is assigned with "🍕". Then the info object's favoriteFood property is updated. But in that case, nothing is change into food array. As it console.log(food) , that's why food array will be the same as before. The result will be ['🍕', '🍫', '🥑', '🍔']</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer B

<i>There is a function sayHi() that takes a parameter and return that parameter, name. But we can see that when the function sayHi() is calling it isn't passing any argument. That's why, in the output it will show 'Hi there' but as there is no argument for name so that position it will show undefined. The result will be Hi there, undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer C

<i>Here, count variable is initialized with 0. There is an array nums, containing [0, 1, 2, 3]. forEach function is used into numbs array using an arrow function. Inside the arrow function it checks if num is truthy value, and if it is truthy then count value incremented by 1. Since in the nums array contain 0,1,2,3 where only three elements 1,2,3 is truthy, hence count becomes 3. The result is 3.</i>

</p>
</details>
