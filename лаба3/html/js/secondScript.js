const object= JSON.parse(localStorage.getItem('object')); 
let object1 = JSON.parse(localStorage.getItem('object1')) || [];

console.log("objectSecondPage", object1)
if(object) { 
    
    const container = document.querySelector('.object'); 
    const select = document.querySelector('select'); 
    object.forEach((item) => { 
        const itemContainer = document.createElement('div'); 
        const option = document.createElement('option'); 
        itemContainer.classList = 'item'; 
        option.innerText = item.personName; 
 
        Object.keys(item).forEach(key => { 
            const child = document.createElement('div'); 
            child.innerHTML = item[key]; 
            itemContainer.appendChild(child); 
        }) 
 
        container.appendChild(itemContainer); 
        select.appendChild(option); 
        console.log(item);
    }) 
}
if(object1) { 
    
    const container = document.querySelector('.object1'); 
    object1 =object1.reverse(); 

    object1.forEach((item) => { 
        const itemContainer = document.createElement('div'); 
        const option = document.createElement('option'); 
        console.log(option)
        itemContainer.classList = 'item'; 
        option.innerText = item.personName; 
 
        Object.keys(item).forEach(key => { 
            const child = document.createElement('div'); 
            child.innerHTML = item[key]; 
            itemContainer.appendChild(child); 
        }) 
 
        container.appendChild(itemContainer); 

        console.log(item);

    }) 
}

function clearAll() {
    window.close();
    
    localStorage.clear();
}