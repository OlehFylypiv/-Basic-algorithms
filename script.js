function insertionSort(unsortedList) {  
    var len = unsortedList.length;
    for (var i = 0; i < len; i++) {
        var tmp = unsortedList[i]; /*Copy of the current element.*/ 
        
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            /*Shift the number*/
            unsortedList[j + 1] = unsortedList[j];
        }
        /*Insert the copied number at the correct position*/
        /*in sorted part. */ 
        unsortedList[j + 1] = tmp;
    }

    
}


var unsortedList= [];
var lenght = prompt('Enter lenght of array');
    for (var k =0; k<lenght; k++){
        var arr = [prompt('Enter element #'+k)];
          unsortedList[k] = +arr;
    }


 

insertionSort(unsortedList);  
alert (unsortedList);
/*console.log(unsortedList);*/ 