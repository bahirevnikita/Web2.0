// //Первая задача
//function one(){
	// let x1 = prompt("Введите первое число");
	// let x2 = prompt("Введите второе число");
	// let y1=x1* (1000/3600);
	// let y2=x2*(3600);
	// console.log(x1, " км/ч соответствует ", y1, "м/с");
	// console.log(x2, " м/с соответствует ", y2, "км/ч");
// }

// //Вторая задача
// function two(){
	// let a = +prompt("Введите длину одной стороный");
	// let b = +prompt("Введите длину другой стороны");
	// let c = +prompt("Ну и введите длину последней стороны");
	// if(( b + c < a) || (a + c < b) || (b + a < c))
	// {
	//     console.log("Треугольник не существует");
	// }
	// else{
	//     let p = (a+b+c)/2;
	//     let s = Math.sqrt(p*(p-a)*(p-b)*(p-c))
	//     console.log("Треугольник существует:");
	//     console.log("Периметр = ", 2*p);
	//     console.log("Площадь = ", s);
	//     console.log("Соотношение = ", 2*p/s);
	// }
// }

// // //Третья задача
// function three(){
	// let n = +prompt("Введите желаемое число");
	// for(let i = 0; i <= n; i++)
	// {
	//     if (i == 0)
	//     {
	//         console.log(i, "buzz")
	//     }
	//      if ((i % 2 == 0) && (i % 10 != 0))
	// 		{
	//         console.log(i, "buzz")
	//     }
	//     if(((i % 10 == 0) || (i % 10 == 5)) && (i != 0))
	//     {
	//         console.log(i, "fizz buzz")
	//     }
	//     else if (i % 2 == 1)
	// 		{
	//         console.log(i, "fizz")
	//     }
	// }
// }

// // //Четвёртая задача
// function four(){
	// let n = +prompt("Введите из скольки ярусов состоит ваше дерево");
	// let s ="";
	// for (let i = 1; i <= n; i++)
	// {
	//     for(let k =0;k<i;k++){
	        
	//         if (i % 2 == 1){
	//             s=s+"*";
	//         }
	//         else if ((i % 2 == 0) && (i != n)){
	//             s=s+"#";
	//         }    
	//     }
	//     if (i == n){
	//         s = s + "||";
	//     }
	//     s = s+"\n"
	    
	// }
	// console.log(s);
// }

// // //Пятая задача
// function five(){
	// let x = 44;
	// let n = +prompt("Попробуйте угадать число");
	// do{
	//     if (x > n){
	//         n = +prompt("Ваше число меньше, попробуйте ввести другое число");
	//     }
	//     if (x < n){
	//         n = +prompt("Ваше число больше, попробуйте ввести другое число");
	//     }
	//     if (x == n){
	//         console.log("Число угадано");
	//     }
	
	// }while(n !== x)
// }

// //Шесая задача
// function six(){
	// for (let i =0; i < 10; i++){
	//     let n = +prompt("Введите число n");
	//     let x = +prompt("Введите число x");
	//     let y = +prompt("Введите число y");
	//     if ((n % x == 0) && (n % y == 0)){
	//         console.log("n = ", n, "x = ", x, "y = ", y, "=> true");
	//     }
	//     else{
	//         console.log("n = ", n, "x = ", x, " y = ", y, "=> false");
	//     }
	// }
// }


// //Седьмая задача
// function seven(){
	// let n = +prompt("Введите номер месяца");
	// switch(Math.trunc(n/4)){
	//     case 0:
	//         console.log('месяц', n, '=> 1 квартал' );
	//         break;
	//     case 1:
	//         console.log('месяц', n, '=> 2 квартал' );
	//         break;
	//     case 2:
	//         console.log('месяц', n, '=> 3 квартал' );
	//         break;
	//     case 3:
	//         console.log('месяц', n, '=> 4 квартал' );
	//         break;
	//     default:
	//         console.log('error');
	//         break;
	// }
// }
// let number=+prompt("Номер задания")
// while (number!=0){
// switch (number){
//         case 1:
//             one();
//             break;
//         case 2:
//             two();
//             break;
//         case 3:
//             three();
//             break;
//         case 4:
//             four();
//             break;
//         case 5:
//             five();
//             break;
//         case 6:
//             six();
//             break;
//         case 7:
//             seven();
//             break;
//         default:
//             console.log("error");
//     }
//     number=+prompt("Номер задания")
// }

//Задача 2.1
function convertSpeed(x1, S)
{
	if(S=="toMS"){
		let y = x1/3.6;
		return `${x1} км/ч соответствует ${y} м/с`;
	}
	else if(S=="toKMH"){
		let y = x1*3.6;
		return `${x1} м/с соответствует ${y} км/ч`;
	}
	else{
		return `error`;
	}
}
function button_1()
{
	console.log(convertSpeed(prompt('Введите скорость'),prompt('toMS или toKMH')));
}


function  absValue (x){
	if (x<0){
		return x*(-1);
	}
	else{
		return x;
	}
}
function button_2()
{
	console.log(absValue(prompt('Введите желаемое число')));
}

function object(){
    let student = {
        group: 211-326,
        last_name: "Бахирев",
        first_name: "Никита"
    };
	keys = Object.keys(student);
	return `Cписок свйоств: ${Object.keys(student)[0]} ${Object.keys(student)[1]} ${Object.keys(student)[2]}
Студент ${student.first_name} ${student.last_name} ${student.group}`
}
function button_3(){
	console.log(object());
}

function four(min,max){    
    console.log(randomNumber(min,max));
}
function randomNumber(min,max){    
    return ( Math.floor(min+(Math.random() * (max-min))));
}

function getarr(){
    let arr = new Array();
    let arr1 = new Array();
    let n =+prompt("Введите длину массива");
    for (let i=0;i<n;i++){
        arr[i]=prompt("Введите желаемое число");
    }
    let k =+prompt("Колличество случайных значений¹");
    for (let i=0;i<k;i++){
        arr1.push(arr[randomNumber(0,n)]);
    }
    return arr1;
}
function button_5(){
    
    console.log(getarr());
}