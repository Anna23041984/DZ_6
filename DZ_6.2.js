/*Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне 
лише числових елементів даного масиву.*/

function calculateArr() {
    let ownArray = ['qwr', 'qwe', 'rew', 'fbd', 'sdv', 1, 8, 7, 5, 4, 9];
    let sum = 0;
    let count = 0;

    for(let i = 0; i < ownArray.length; i++){
        // ownArray[i] = parseInt(ownArray[i]);
        if (!isNaN(ownArray[i])) {
            count += 1;
            sum += ownArray[i];
        }
        console.log(count);
        // console.log(sum);
    }
    return  itog = sum / count;
}

let result = calculateArr();
alert(result);