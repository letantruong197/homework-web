
function phuongtrinhbac1(a,b){
    return x = -b/a
}
console.log(phuongtrinhbac1(2,3))
function phuongtrinhbac2(a,b,c){
    let denta = b*b-4*a*c
    if(denta<0){
        console.log("Phương trình vô nghiệm")
    }else{
        let d = -b+Math.sqrt(denta)
        let e = -b-Math.sqrt(denta)
        let x1 = d/2*a
        let x2 = e/2*a
        console.log(`x1 = ${x1}, x2= ${x2}`)
    }
}
phuongtrinhbac2(1,-3,2)
let tiendien = {
    Bac1: 1.484,
    Bac2: 1.533,
    Bac3: 1.786,
    Bac4: 2.242,
    Bac5: 2.503,
    Bac6: 2.587,
}
 let loaichim = {
     chimcanhcut:{
         canh: 2,
         khanangbay: false,
         noisong: "Bac cuc",
     },
     chimse:{
         canh:2,
         khanangbay: true,
         noisong: "ChauAu",
         thanhinh: "map map"
     },
     chimbocau:{
         canh:2, 
         khanangbay: true,
         noisong: "trencay",
         maulong: "den,trang"
     },
     chimsao:{
         canh:2,
         khanangbay: true,
         noisong:"trong long",
         khanangnhaitiengnguoi: true
     },
     chimvet:{
         canh:2,
         khanangbay:true,
         maulong:"nhieu mau",
         noisong: "nhiet doi"
     }
 }