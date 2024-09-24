let minPriceInput = document.querySelector('#minPrice')
let minRangePrice = document.querySelector('#minRangePrice')
let maxPriceInput = document.querySelector('#maxPrice')
let maxRangePrice = document.querySelector('#maxRangePrice')

minPriceInput.value = minRangePrice.value
maxPriceInput.value = maxRangePrice.value

function syncInputs(rangeInput, numberInput) {
  rangeInput.addEventListener('input', function() {
    numberInput.value = this.value
  })
  numberInput.addEventListener('input', function() {
    rangeInput.value = this.value
  })
}

syncInputs(minPriceInput, minRangePrice)
syncInputs(maxPriceInput, maxRangePrice)

