'use strict'

window.addEventListener('DOMContentLoaded', () => {
   const btnWelcome = document.querySelector('.welcome__button'),
        btnChoice = document.querySelectorAll('.choice__button'),
        welcomeSection = document.querySelector('.welcome'),
        choiceSection = document.querySelector('.choice'),
        generateSection = document.querySelector('.generate'),
        btnCopy = document.querySelector('#copy'),
        btnGenerate = document.querySelector('#generate'),
        input = document.querySelector('.generate__input')

   function copyInputValue(item) {
      item.select()
      document.execCommand('copy')
   }

   btnCopy.addEventListener('click', () => {
      copyInputValue(input)
   })

   btnWelcome.addEventListener('click', () => {
         welcomeSection.classList.toggle('active')
         choiceSection.classList.toggle('active')
   })

   btnChoice.forEach(btn => {
      btn.addEventListener('click', (e) => {
         choiceSection.classList.toggle('active')
         generateSection.classList.toggle('active')
         let number = +e.target.innerText

         const symbols = "0123456789ABCDEFGHIefghijklmnopqrJKLMNOPQR!@#$%&*%:,;_STUVWXYZ0123456789abcdstuvwxyz!$;%:?*#_"
         const numbers = "0123456789"

         function generatePassword(num,symbol) {
            let randomPassword = "";
            for (let i = 0; i < num; i++){
               let random = Math.floor(Math.random() * symbol.length); 
               randomPassword += symbol[random]
            }
            return randomPassword
         }
         
         if(number > 4) {
            btnGenerate.addEventListener('click', () => {
               input.value =  generatePassword(number, symbols)
            })
         } else {
            btnGenerate.addEventListener('click', () => {
               input.value =  generatePassword(number, numbers)
            })
         }
      })
   })
})




