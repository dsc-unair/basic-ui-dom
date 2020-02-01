let button = document.getElementById('changeBackground')
let input = document.getElementById('changeHeaderColor')

button.addEventListener('click', () => {
    // action will go here
    if (document.getElementsByTagName('h1')[0].style.textAlign == 'center'){
        document.getElementsByTagName('h1')[0].style.textAlign='left';
        document.body.style.backgroundColor = '#fff'
    } else {
        document.getElementsByTagName('h1')[0].style.textAlign='center';
        document.body.style.backgroundColor = 'fuchsia'
    }
    
  })

  input.addEventListener('change', () => {
    // action will go here
    document.body.style.backgroundColor = input.value;  
  })