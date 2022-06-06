const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const calculate = document.querySelector('#calculate')
const yourBMI = document.querySelector('#yourBMI')
let p = document.querySelector('p')
let result = document.querySelector('.result')

calculate.addEventListener('click', function() {
 if(height.value != '' && weight.value != '') {
  //let result = Number(weight.value / (height.value * height.value) * 10000)
  let result = Number(weight.value / (height.value/100 * height.value/100))
  yourBMI.innerHTML = `Your BMI is: <span>${result.toFixed(2)}</span>`
  console.log(result);
    if(result < 18.5) {
     p.textContent = 'You are underweight! Eating three times per day healthy foods rich in proteins, carbohydrates and fats combined with exercises and a healthy lifestyle can help to gain better weight'
     p.style.color = 'orange'
    } else if(result >= 18.5 && result < 24.9) {
     p.textContent = 'You are within your normal weight. Keep it up!'
     p.style.color = 'green'
    } else if(result >= 25 && result < 29.9) {
     p.textContent = 'You are overweight! Walking 10 000 steps a day can help lower weight and your BMI, without stressing your body wist vigorous cardios.'
     p.style.color = 'orangered'
    } else if(result >= 30) {
     p.textContent = 'You are obese!!! Healthier eating habits and lifestyle are strongly recommended. Exercising on a daily basis is of great importance. Walk and use steps in every possible occasion.'
     p.style.color = 'red'
     p.style.fontStyle = 'i'
    }
 } else {
   if(height === '' || isNaN(height)) {
    return (yourBMI.innerHTML = `Please Enter Height!!!`)
   } else if (weight === '' || isNaN(weight)) {
    return (yourBMI.innerHTML = `Please Enter Weight!!!`)
   }else if(height === '' && weight === '') {
    your.innerHTML = 'Please enter your Height and Weight!'
   }
 }

 height.value = ''
 weight.value = ''
 weight.focus()
})
