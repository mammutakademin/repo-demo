// 2 Är följande if sats true eller false?
// let a = 1;
// let b = '1';
// console.log(a == b)// true or false

// let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."
// console.log(sentence.length)

// let agentY = "Editha";
// console.log(`Hej ${agentY} din gullig bibimbap!`);

// 12 Lägg till en frukt i början och en frukt i slutet på arrayen.
// const fruits = ['tomato', 'dragon fruit', 'avocado', 'cucumber', 'olive'];
// fruits.unshift('apple');
// console.log(fruits);

// fruits.push('guava');
// console.log(fruits);

// 13 I ovanstående fruktarray, plocka bort första och sista frukten.
// fruits.splice(1, fruits.length-2)
// console.log(fruits);

// fruits.shift(0);
// console.log(fruits);

// fruits.pop(fruits.length-1);
// console.log(fruits);

// let fruits = ['apple', 'orange', 'pear', 'kiwi']
// fruits.splice(2, 0, 'chili pepper', 'zuccini')
// console.log(fruits);

// 14 I följande array, sätt in två nya frukter på index 2.
// let fruits = ['apple', 'orange', 'pear', 'kiwi']
// fruits[0] = 'tomato'
// console.log(fruits);

// 15 Klona följande array och ändra första frukten till pineapple.
// let fruits = ['apple', 'orange', 'pear', 'kiwi']
// let clone = [...fruits]
// clone[0] = 'pineapple'
// console.log(clone);

// 16 Sortera följande array i fallande ordning.
// let num = [1,5,78,7,122,3,4,65,40,2,8]
// num.sort( (a,b) => b - a)
// console.log(num)

// 16 Sortera följande array i ascending order.
// let num = [1,5,78,7,122,3,4,65,40,2,8]
// num.sort( (a,b) => a - b)
// console.log(num)

// 17 Lägg ihop följande arrayer.
// let a = [1,2,3];
// let b = [4,5,6];
// let ab = [...a, ...b]
// console.log(ab)

// let a = [1,2,3];
// let b = [4,5,6];
// let ab = a.concat(b)
// console.log(ab)

// 18 Mixa följande arrayer där varannan är från array a och varanan från array b.
// let a = ['My', 'has', 'many', 'open'];
// let b = ['brain', 'too', 'tabs', '!'];
// let ab = [];
// for(let i=0; i < a.length; i++){
//     ab.push(a[i], b[i])
// }
// console.log(ab)

// let a = ['My', 'has', 'many', 'open', 'need', '!'];
// let b = ['brain', 'too', 'tabs', 'I','coffee'];
// let ab = []
// let largest = Math.max(a.length, b.length)
// for(let i = 0; i < largest; i++){
//   if(a[i]){ 
//     ab.push(a[i]) 
//   } 
//   if(b[i]){ 
//     ab.push(b[i]) 
//   } 
// }
// console.log(ab)

// 19 Merga in array a i array b på index 2.
// let a = [1,2,7,8,9,10];
// let b = [3,4,5,6];
// b.splice(2, 0, ...a);
// console.log(b)

// 20 Gör alla namn i array names till versaler.
// let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
// let namesUpp = [];
// for(let i = 0; i < names.length; i++){
//     namesUpp.push(names[i].toUpperCase());
// }
// console.log(namesUpp)

// let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
// for(let i = 0; i < names.length; i++){
//   names[i] = names[i].toUpperCase()
// }
// console.log(names)

// 21 Filtrera fram samtliga personer som är 30 år eller äldre.
let names = [
    { name: 'sixten', age: 32 },
    { name: 'Eva',    age: 19 }, 
    { name: 'Ali',    age: 67 },
    { name: 'Kim',    age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
    ];
    console.log(names)