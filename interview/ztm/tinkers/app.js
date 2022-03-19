//exercicio para fazer reverse de string
const reverse = str => {
    //check input first
    if(!str || str.length<2 || typeof str !== 'string'){
        return "hmmmmm that's not nice, please insert a string with more than two char";
    }
    return str.split('').reverse().join('');
}

console.log(reverse('x'));

//merge sorted arrays

function mergeSortedArrays(array1,array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;


    //check input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item){
        if(array2Item === undefined || array1Item < array2Item){
          mergedArray.push(array1Item);
          array1Item = array1[i];
          i++;
        }   
        else {
          mergedArray.push(array2Item);
          array2Item = array2[j];
          j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0,6,4,9], [1,99,5,3]));