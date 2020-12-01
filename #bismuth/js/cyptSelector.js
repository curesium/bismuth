function run() {
  // Write the selected cryptSelector to variable
  let cyrptSelector = document.querySelector('#cryptSelector');

  // Run the encrypt function when encrypt is selected
  if (cryptSelector == 'encrypt') {
    encrypt();
  };

  // Run the decrypt function when decrypt is selected
  if (cryptSelector == 'decrypt') {
    decrypt();
  };
}
