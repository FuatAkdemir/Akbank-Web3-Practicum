// This code takes a number from the user and prints whether the sum of the digits of the number is odd or even.

// The function that calculates whether the sum of the digits of the entered number is odd or even
function oddishOrEvenish(num){
    let sum = 0
    for (let i = 0; i < num.length; i++) {
    	let digit =+ num[i]
        sum += digit
    }
    return sum % 2 == 1 ? "tektir." : "çifttir."
}

// Get number from user
while(1){
    var num = prompt("Sayı giriniz: ")
    if(isNaN(num)){
        // if num is not a number
        alert("Lütfen sayı giriniz!")
    }
    else break
}

// Printing the calculated result
alert("Girilen sayının rakamları toplamı " + oddishOrEvenish(num))

