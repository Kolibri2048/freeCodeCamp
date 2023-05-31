// Task
// Следующая функция предназначена для создания двумерного массива со mстроками и nстолбцами нулей. К сожалению, он не дает ожидаемого результата,
//  потому что переменная rowне инициализируется повторно (не устанавливается обратно в пустой массив) во внешнем цикле. Исправьте код,
//   чтобы он возвращал правильный массив нулей 3x2, который выглядит как [[0, 0], [0, 0], [0, 0]].
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  


  
  //Soll 
  function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrixSol = zeroArray(3, 2);
  console.log(matrix);

  //Outpoot
  [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]