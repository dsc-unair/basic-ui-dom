let button = document.getElementById('changeBackground')

button.addEventListener('keyup', () => {
    // action will go here
    if (document.body.style.backgroundColor == 'fuchsia'){
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'fuchsia';
    }
  })