
const phoneBookContainer = document.getElementById('phoneBookContainer');
const button = document.getElementById('submit');
const search = document.getElementById('search');
const selectOrder = document.getElementById('selectOrder');



const phoneBook = new Map();
let isA_ZOrder = true;
let searchValue = "";

const creatPhoneDiv = (name,phone)=>{
    const contactDivContainer = document.createElement('div');
    const nameAndPhone = document.createElement('div');
    const buttonRemove = document.createElement('button')
    nameAndPhone.innerHTML = `${name} - ${phone}`;
    buttonRemove.innerHTML = "Remove";
    buttonRemove.addEventListener('click',()=>{
        phoneBook.delete(name);
        renderPhoneBookContainer();
    })
    contactDivContainer.appendChild(nameAndPhone);
    contactDivContainer.appendChild(buttonRemove);
    return contactDivContainer;
}

const renderPhoneBookContainer = ()=>{
    phoneBookContainer.innerHTML = "";
    let phoneBookArray = [...phoneBook].filter(([key,value])=>{
        return key.includes(searchValue);
    })

    phoneBookArray.sort(([aKey, aValue],[bKey,bValue])=>{
        if (isA_ZOrder)
        {
            if(aKey>bKey)   return 1;
            if (aKey<bKey) return -1;
            return 0;
        }
        else
        {
            if(aKey>bKey)   return -1;
            if (aKey<bKey) return 1;
            return 0;
        }
    })

    for ([name,phone] of phoneBookArray)
    {
        phoneBookContainer.appendChild(creatPhoneDiv(name,phone))
    }
}

button.addEventListener('click',(event)=>{
    event.preventDefault();
    const name = document.getElementById('name');
    const phoneNumber = document.getElementById('phoneNumber');
    alert(name.value+','+ phoneNumber.value)
    const inputName = name.value.trim().toLowerCase();
    let inputPhoneNumber = phoneNumber.value.trim();
    if(inputPhoneNumber.includes(' '))
    {
        alert('Invalid Phone Number')
        return;
    }
    
    while (inputPhoneNumber.includes('-'))
    {
        
        inputPhoneNumber = inputPhoneNumber.replace('-',"");
        alert(inputPhoneNumber);
    }
   
    phoneBook.set(inputName,inputPhoneNumber);
    renderPhoneBookContainer();
    name.value="";
    phoneNumber.value="";
 
   
})

selectOrder.addEventListener('change',()=>{
    isA_ZOrder = (selectOrder.value === 'A-Z')? true: false;
    renderPhoneBookContainer();
})
search.addEventListener('input',()=>{
    searchValue = search.value.trim().toLowerCase();
    renderPhoneBookContainer();
})
