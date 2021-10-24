class Taiyaki {

    constructor(nakami) {
        this.nakami = nakami;
    }

    nakanogu() {
        console.log(`中身は${this.nakami}です`);
    }
}

let ankoTaiyaki = new Taiyaki('あんこ');
ankoTaiyaki.nakanogu();

let creamTaiyaki = new Taiyaki('クリーム');
creamTaiyaki.nakanogu();

let cheeseTaiyaki = new Taiyaki('チーズ');
cheeseTaiyaki.nakanogu();