function add(numb_1, numb_2){
    return numb_1 + numb_2
}

console.log(add(8,8))
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function multiply(mult_numb_1, mult_numb_2){
        let multi = 0
        for(let i = 0; i < mult_numb_2; i++){
            multi = (add(multi, mult_numb_1))
        }
        return multi
}

console.log(multiply(5, 5))
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function power(x, n){
    let expo = 1
    for(let i = 0; i < n; i++){
        expo = multiply(expo, x)
    }
    return expo
}

console.log(power(2, 8))
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function factorial(numb){
    let result = 1
    for(let i = 1; i <= numb; i++){
          result = multiply(result, i)
    }
    return result
}
console.log(factorial(6))
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');