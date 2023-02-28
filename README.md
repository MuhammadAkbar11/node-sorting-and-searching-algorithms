# Examples of Sorting and Searching Algorithms Using Node.js CLI

## Flowchart

```sql
START
|
|--- INPUT "Pilih menu: 1. Input Angka 2. Sorting 3. Searching"
|
|--- IF menu = 1
|     |
|     |--- INPUT "Masukkan jumlah angka yang akan diinput"
|     |
|     |--- FOR i = 1 to n
|     |    |
|     |    |--- INPUT "Masukkan angka ke-" i
|     |    |
|     |    |--- ADD angka to array
|     |
|     |--- END FOR
|
|--- ELSE IF menu = 2
|     |
|     |--- SORT array using any sorting algorithm
|     |
|     |--- OUTPUT "Hasil sorting: [angka1, angka2, ..., angkaN]"
|
|--- ELSE IF menu = 3
|     |
|     |--- INPUT "Masukkan angka yang akan dicari"
|     |
|     |--- SEARCH angka in array using any searching algorithm
|     |
|     |--- IF angka found
|     |    |
|     |    |--- OUTPUT "Angka ditemukan"
|     |    |
|     |    |--- ELSE
|     |         |
|     |         |--- OUTPUT "Angka tidak ditemukan"
|     |
|     |--- END IF
|
|--- END IF
|
END

```


<br>


## Pseudocode

```sql
START

menu = INPUT("Pilih menu: 1. Input Angka 2. Sorting 3. Searching")

IF menu = 1
   n = INPUT("Masukkan jumlah angka yang akan diinput")
   array = []
   FOR i = 1 to n
      angka = INPUT("Masukkan angka ke-" i)
      array.ADD(angka)
   END FOR
ELSE IF menu = 2
   SORT(array)
   OUTPUT("Hasil sorting:", array)
ELSE IF menu = 3
   angka = INPUT("Masukkan angka yang akan dicari")
   found = SEARCH(array, angka)
   IF found
      OUTPUT("Angka ditemukan")
   ELSE
      OUTPUT("Angka tidak ditemukan")
   END IF
END IF

END

```