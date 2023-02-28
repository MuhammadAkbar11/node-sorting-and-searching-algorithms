import inquirer from "inquirer";

const numbers = [];

async function main() {
  while (true) {
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
      const { count } = await inquirer.prompt({
        type: "number",
        name: "count",
        message: "Masukkan jumlah angka yang ingin dimasukkan:",
      });
      if (!count) {
        console.log("Input salah, silakan coba lagi!");
      } else {
        for (let i = 0; i < count; i++) {
          const { number } = await inquirer.prompt({
            type: "number",
            name: "number",
            message: `Masukkan angka ke-${i + 1}:`,
          });
          numbers.push(number);
        }
        console.log(`List angka saat ini : ${numbers.join(", ")} \n`);
      }
    } else if (choice === 2) {
      const sortedNumbers = sorting(numbers);
      console.log(`Hasil sorting: ${sortedNumbers.join(", ")} \n`);
    } else if (choice === 3) {
      const { key } = await inquirer.prompt({
        type: "number",
        name: "key",
        message: "Masukkan angka yang ingin dicari:",
      });

      const index = searching(numbers, key);

      if (index !== -1) {
        console.log(`Angka ${key} ditemukan pada index ke-${index}. \n`);
      } else {
        console.log(`Angka ${key} tidak ditemukan. \n`);
      }
    } else if (choice === 4) {
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
