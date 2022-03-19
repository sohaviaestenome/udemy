
//----------------------ARRAYS----------------------------------

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


// ----------------------------HASH TABLES-------------------------------------

//Hash table Class
class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }
    
    keys(){
      const keysArray = [];
      console.log(this.data.length);
      for (let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  myHashTable.keys()