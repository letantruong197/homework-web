let ex1 = [1,2,3,4,5]
console.log (`${Boolean(ex1) == true} exercise 1` )
//chuyển các giá trị dạng mảng thành boolean sau đó so sánh với true//
console.log (`${ex1 == true} exercise 1` )
// so sáng mảng với boolean , khác giá trị => false //
let ex2 = [0,5,6,7,8,9]
for(i = 0 ; i < ex2.length; i++){
    console.log ( `${ex2[i] == true} (a/ exercise 2 compare ex2[${i}] vs true )` )
} 
//so sánh mảng ex2 với true , khác giá trị => false //
for(i = 0 ; i < ex2.length; i++){
    console.log ( `${Boolean(ex2[i]) === true} (b/ exercise 2 compare ex2[${i}] vs true )` )
} 
// giống nhau kiểu dữ liệu và các giá trị trong mảng >0 => true 
let ex3 = [2,3,5,7]
let ex3string = "2,3,5,7"
console.log(ex3 == ex3string)
// chuyển đổi cùng kiểu dữ liệu và so sánh các giá trị , các giá trị giống nhau => true
console.log(ex3 === ex3string)
// khác kiểu dữ liệu => false
let ex4 = 4214.5125
let ex4arr = [342,342,4561,4214.5125,4214.3500]
for(i = 0 ; i < ex4arr.length;i++){
    console.log(`${ex4arr[i] == ex4} (a/ exercise 2 compare ex4rr[${i}] vs 4214.5125 ( ex 4 ) )`)
}
//so sánh các giá trị của mảng với ex4 nếu = => true nếu không = => false
for(i = 0 ; i < ex4arr.length;i++){
    console.log(`${ex4arr[i] === ex4} (b/ exercise 2 compare ex4rr[${i}] vs 4214.5125 ( ex 4 ) )`)
}
// so sánh kiểu dữ liệu và giá trị , cùng kiểu dữ liệu khác giá trị => false , cùng kiểu dữ liệu cùng giá trị => true
let a1=[3,5]
let a2=[3,5]
console.log(`${String(a1) == String(a2)} (exercuse 5 compare a1 vs a2 => true)`)
// chuyển đổi các mảng thành chuỗi sau đó so sánh giá trị , giống giá trị => true
console.log(`${String(a1) === String(a2)} (exercuse 5 compare a1 vs a2 => true)`)
// chuyển đổi các mảng thành chuổi sau đó so sánh giá trị, giống giá trị + kiểu dữ liệu => true