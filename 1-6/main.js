//問1

let scores = [10,15,20,25];

console.log(scores.length);

for(let i = 0; i < scores.length; i++){
    if(i % 2 === 0){
        console.log(scores[i] + 'は偶数です');
    }
}

//問2
let car = {
    gass: 22.5,
    number: 1234,
};

console.log('ガソリンは' + car.gass);
console.log('ナンバーは' + car['number']);