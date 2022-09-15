document.getElementById('btn-counting').addEventListener('click', function () {
      // let number = 0
      // let num = number + 1
      // console.log(num)
      const numberField = document.getElementById('num')
      const numberValue = numberField.innerText
      let number = parseInt(numberValue)
      number++
      numberField.innerText= number
})
