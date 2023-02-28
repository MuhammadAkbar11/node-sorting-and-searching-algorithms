import rdline from "readline";

const readline = rdline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [];

const sort = array => {
  // Implementasi algoritma sorting (bubble sort)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(`Hasil sorting: [${array}]`);
};

const search = (array, num) => {
  // Implementasi algoritma searching (binary search)
  let left = 0;
  let right = array.length - 1;
  let found = false;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === num) {
      found = true;
      break;
    } else if (array[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (found) {
    console.log("Angka ditemukan");
  } else {
    console.log("Angka tidak ditemukan");
  }
};

const inputAngka = (n, index = 0) => {
  if (index === n) {
    return main();
  }
  readline.question(`Masukkan angka ke-${index + 1}: `, angka => {
    array.push(parseInt(angka));
    inputAngka(n, index + 1);
  });
};

const main = () => {
  readline.question(
    `Pilih menu
1. Input Angka
2. Sorting
3. Searching
4. Selesai
Masukan Pilihan [1/2/3/4] : `,
    menu => {
      if (menu === "1") {
        readline.question("Masukkan jumlah angka yang akan diinput: ", n => {
          inputAngka(parseInt(n));
        });
      } else if (menu === "2") {
        sort(array);
        main();
      } else if (menu === "3") {
        readline.question("Masukkan angka yang akan dicari: ", num => {
          search(array, parseInt(num));
          main();
        });
      } else {
        console.log("Input salah, silakan coba lagi");
        main();
      }
    }
  );
};

main();
