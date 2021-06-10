//Array sort in javascript !

const arrayValue = [23,61,2,5,31,33,95,56]

const sortArrayCustomWay = (array) => {

        const sizeOfArray = array.length;
        let storeValue;

        for (let i = 0; i < sizeOfArray; i++) {

            for (let j = i + 1; j < sizeOfArray; j++) {
            //For descending order only change > to <.
                if (array[i] < array[j]) {
                    storeValue = array[i];
                    array[i] = array[j];
                    array[j] = storeValue;
                }
            }
        }
    
    
    return array;

}

console.log(sortArrayCustomWay(arrayValue));
