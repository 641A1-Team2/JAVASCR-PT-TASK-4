function proud(array){
    let s = 1
   for (let i=0; i<array.lenght; i++){
        s=s*array[i];
    }
    return s;
}
const sample_array = [1,2,3,4,5,6,7,8,9,100];
console.log(proud(sample_array));