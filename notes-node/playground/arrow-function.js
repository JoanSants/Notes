//var square = (x) => {
//    return x*x;
//}

var square = x => x*x;

console.log(square(9));

var user = {
    name:'Joan',
    sayHi: () => {
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt(){
        console.log(`Hi ${this.name}`)
    }
}

user.sayHiAlt();