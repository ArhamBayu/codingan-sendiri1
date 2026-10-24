const nama = ('ARHAM BAYU FIRDAUS');
let usia = 25;

function generateBiodata() {
    if (usia >10 && usia <18) {
        console.log('anda remaja');
    }
    else if (usia >18 && usia <30) {
        console.log('anda dewasa');
    }
    else if (usia >30 && usia <40) {
        console.log('anda sudah tua bro HAHAHAHAHA');
    }
    else {
        console.log('anda gologan yang mana nich brokuuu');
    }
}

console.log(nama);
console.log(usia);

generateBiodata()