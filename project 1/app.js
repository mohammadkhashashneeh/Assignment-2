// Java script program that uses some the Array method 

let languageArr =["Arabic", "English", "German", "Turkish", "Japanese", "Spanish", 1, 2, 3];

// 1. toString() method: بتحول أي عنصر من عناصر ال arr الى str مفصولات ب",". 

console.log(languageArr.toString());
    

// 2. pop() method: بتشيل آخر عنصر من ال arr وبترجعلي اياه 

console.log(languageArr.pop()); // arr before pop
console.log(languageArr); // arr after pop


// 3. join() method: برجعلي ال arr ل str وبفصل بينهم بفاصل مخصص أنا بختارو

console.log(languageArr.join("|"));


// 4. push() method: بتضيف عنصر أو اكثر بنهاية ال arr

console.log(languageArr.push("Armenian"));
console.log(languageArr.push("Chinese", 14, 4));
console.log(languageArr);


// 5. shift() method: بشيلي أول عنصر من ال arr وبرجعلي اياه

console.log(languageArr.shift());
console.log(languageArr);


// 6. unshift() method : بضبف عنصر او أكثر في بداية ال arr

console.log(languageArr.unshift("Italian", 6 ,7));
console.log(languageArr);


// 7. slice() method: بتقسم ال arr ل arr ثاني 

console.log(languageArr.slice(6));
console.log(languageArr.slice(6,9));


// 8. splice() method: بتشيل أي عنصر من ال arr

console.log(languageArr.splice(3));


// 9. foreach() method: for loop بتتعامل مع كل عنصر من ال arr

languageArr.forEach((i) => {
    console.log(i);
});


// 10. includes() method: بتتأكد اذا ال arr بحتوي على عنصر معين وبترجع bool value 

console.log(languageArr.includes(6));
