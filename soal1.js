// soal1.js

const geometry = require('./geometry');

// Menggunakan modul untuk menghitung luas dan keliling persegi
const sisiPersegi = 5;
console.log("Luas persegi:", geometry.luasPersegi(sisiPersegi));
console.log("Keliling persegi:", geometry.kelilingPersegi(sisiPersegi));

// Menggunakan modul untuk menghitung luas dan keliling persegi panjang
const panjangPersegiPanjang = 4;
const lebarPersegiPanjang = 6;
console.log("Luas persegi panjang:", geometry.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
console.log("Keliling persegi panjang:", geometry.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
