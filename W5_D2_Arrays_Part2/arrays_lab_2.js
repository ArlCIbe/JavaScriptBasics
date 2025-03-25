let topStudents = ["Arlinda", "Quincy", "HQ", "Vontae", "Dom"]

function removeSpecific(index, array){
    array.splice(index, 1);
    console.log(array);
    return array;
}

console.log(removeSpecific(2, topStudents))

function addField(index, name, array){
    array.splice(index, 0, name);
    console.log(array);
    return array;
}

console.log(addField(1, "Katerra", topStudents));

function insertSpecific(index, name, array){
    if (index >= 0 && index <= array.length) {
        for (let i = array.length; i > index; i--) {
            array[i] = array[i - 1];
        }
        array[index] = name;
        console.log(array);
    }
    return array
}

console.log(insertSpecific(3, "Ebony", topStudents))

console.log(topStudents)