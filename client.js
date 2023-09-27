
let inputValue = document.getElementById('names'),
    getNames = document.getElementById('myname'),
    clickBtn = document.getElementById('btn');



clickBtn.addEventListener('click', async () => {

    if(inputValue.value !== ''){
        
          const data = await fetch('http://localhost:5000/api/names', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputValue.value),
        });
        if (data.ok) {
            getNames.innerHTML = data.json(data)

        }
        else {
            getNames.innerHTML = 'No matching name found!';
            getNames.style.color = 'red';


        }
    
    }
    
    else {
            getNames.innerHTML = 'Input value cannot be empty!';
            getNames.style.color = 'red';

    }
    
    inputValue.value = '';
})

clickBtn.addEventListener('click', async () => {

    if(inputValue.value !== ''){
        
          const data = await fetch('http://localhost:5000/api/names', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        });
        if (data.ok) {
            getNames.innerHTML = data.json(data)

        }
        else {
            getNames.innerHTML = 'No matching name found!';
            getNames.style.color = 'red';


        }
    
    }
    
    else {
            getNames.innerHTML = 'Input value cannot be empty!';
            getNames.style.color = 'red';

    }
    
    inputValue.value = '';
})
