//問１
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven() {
    console.log(num + 'は偶数です');
}
let num = numbers.filter( value => ((value % 2) === 0) )

isEven();

//問２
class car {
    constructor(gass,number) {
        this.gass = gass;
        this.number = number; 
    }

    getNumGas() {
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.number}です。`);
    }
}

let toyotacar = new car('40L',1234);

toyotacar.getNumGas();