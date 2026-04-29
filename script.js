const fortune1 = "Your going to be a millionaire";
const fortune2 = "You'll be a employed Junior software engineer by june";
const fortune3 = "crawfish season will extend another month";
const fortune4 = "You will soon find 100$ on the ground";
const fortune5 = "Travel season will soon will be returning for you";

const randomNumber = Math.floor(Math.random() * 5 ) + 1; // this should make it between 1-5
const selectedFortune = 
randomNumber === 1 ? fortune1 :
randomNumber === 2 ? fortune2 :
randomNumber === 3 ? fortune3 :
randomNumber === 4 ? fortune4 :
fortune5; // ternary operator 


console.log(selectedFortune);


