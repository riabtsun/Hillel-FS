let minPriceInput = document.querySelector('#minPrice')
let minRangePrice = document.querySelector('#minRangePrice')
let maxPriceInput = document.querySelector('#maxPrice')
let maxRangePrice = document.querySelector('#maxRangePrice')


minPriceInput.value = minRangePrice.value
maxPriceInput.value = maxRangePrice.value
minRangePrice.addEventListener('change', () => {
  setPriceValues(minPriceInput, minRangePrice)
})
maxRangePrice.addEventListener('change', () => {
  setPriceValues(maxPriceInput, maxRangePrice)
})

function setPriceValues(priceInput, priceRange) {
  priceInput.value = priceRange.value
  priceInput.input = priceRange.value
  priceRange.addEventListener('change', () => {
    priceInput.value = priceRange.value
    checkCorrectPrice(priceInput.value, priceRange.value)
  })
  priceInput.addEventListener('input',()=>{
    priceRange.value = priceInput.value
  })
  priceInput.addEventListener('change',()=>{
    priceRange.value = priceInput.value
  })
}

function checkCorrectPrice(priceInput, priceRange) {
  Number(priceInput) < Number(priceRange) && alert('Please choose correct price')
  console.log(priceInput, priceRange, 'hi')
}

