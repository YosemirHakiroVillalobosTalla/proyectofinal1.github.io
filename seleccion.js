

const inputQuantity=document.querySelector('.input-quantity')
const btnIncrement=document.querySelector('#increment')
const btnDecrement=document.querySelector('#decrement')


let valueByDefault=parseInt(inputQuantity.value)

//FUNCIONES CLICK

btnIncrement.addEventListener('click', ()=>{
    valueByDefault +=1
    inputQuantity.value= valueByDefault
})

btnDecrement.addEventListener('click', ()=>{
    if (valueByDefault===1){   //si llega a 0 tiene que retornar
        return
    }


    valueByDefault -=1
    inputQuantity.value= valueByDefault
})

//TOGGLE


//CONSTANTES TOGGLE TITLES
const toggleDescription= document.querySelector('.title-description')
const toggleAdditionalInformation =document.querySelector('.title-additional-information')
const toggleReviews= document.querySelector('.title-reviews')

//CONSTANTES CONTENIDO TEXTO

const contentDescription= document.querySelector('.text-description')
const contentAdditionalInformation= document.querySelector('.text-additional-information')
const contentReviews= document.querySelector('.text-reviews')

//FUNCIONES TOGGLE

toggleDescription.addEventListener('click', ()=>{
    contentDescription.classList.toggle('hidden');
});


toggleAdditionalInformation.addEventListener('click', ()=>{
    contentAdditionalInformation.classList.toggle('hidden');
});


toggleReviews.addEventListener('click', ()=>{
    contentReviews.classList.toggle('hidden');
});

