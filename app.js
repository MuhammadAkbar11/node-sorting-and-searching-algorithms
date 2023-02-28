import inquirer from "inquirer";

const numbers = [];

async function main() {
  while (true) {
    // Meminta pengguna untuk memilih menu dari daftar menu yang tersedia menggunakan method inquirer.prompt
    const { choice } = await inquirer.prompt({
      type: "list",
      name: "choice",
      message: "Silakan pilih menu:",
      choices: [
        {
          name: "1. Input Angka",
          value: 1,
        },
        {
          name: "2. Sorting",
          value: 2,
        },
        {
          name: "3. Searching",
          value: 3,
        },
        {
          name: "4. Selesai",
          value: 4,
        },
      ],
    });

    if (choice === 1) {
      // jika memilih menu nomor 1, maka akan meminta untuk memasukkan jumlah angka yang ingin di input
      const { count } = await inquirer.prompt({
        type: "number",
        name: "count",
        message: "Masukkan jumlah angka yang ingin dimasukkan:",
      });
      // Jika variabel count = false || undefined, menampilkan pesan "Input salah, silakan coba lagi!" di console
      if (!count) {
        console.log("Input salah, silakan coba lagi!");
      } else {
        // Jika count adalah sebuah angka, menapilkan prompt untuk memasukkan dan menyimpan angka-angka tersebut di dalam array numbers
        for (let i = 0; i < count; i++) {
          const { number } = await inquirer.prompt({
            type: "number",
            name: "number",
            message: `Masukkan angka ke-${i + 1}:`,
          });
          numbers.push(number);
        }
        // Menampilkan list angka yang sudah diinput di console
        console.log(`List angka saat ini : ${numbers.join(", ")} \n`);
      }
    } else if (choice === 2) {
      // Jika memilih menu nomor 2, melakukan pengurutan angka-angka yang sudah diinput menggunakan fungsi sorting dan menampilkan hasilnya di console
      const sortedNumbers = sorting(numbers);
      console.log(`Hasil sorting: ${sortedNumbers.join(", ")} \n`);
    } else if (choice === 3) {
      // Jika memilih menu nomor 3,  menapilkan prompt untuk memasukkan sebuah angka yang ingin dicari di dalam array numbers menggunakan fungsi searching
      const { key } = await inquirer.prompt({
        type: "number",
        name: "key",
        message: "Masukkan angka yang ingin dicari:",
      });

      const index = searching(numbers, key);

      // Jika angka yang dicari ditemukan, menampilkan pesan "Angka [key] ditemukan pada index ke-[index]." di console, jika tidak ditemukan, menampilkan pesan "Angka [key] tidak ditemukan." di console
      if (index !== -1) {
        console.log(`Angka ${key} ditemukan pada index ke-${index}. \n`);
      } else {
        console.log(`Angka ${key} tidak ditemukan. \n`);
      }
    } else if (choice === 4) {
      // Jika memilih menu nomor 4, akan menutup program
      console.log("Terima kasih!");
      break;
    }
  }
}

// Implementasi algoritma sorting (Quick Sort)
function sorting(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return sorting(left).concat(pivot, sorting(right));
}

// Implementasi algoritma searching (Linear Search)
function searching(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }

  return -1;
}

// jalankan program
main();
