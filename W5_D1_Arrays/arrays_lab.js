let TEST = []

let leaders = []

const names = ["Matthew", "Dom", "Ebony", "Shakyra", "Vontae", "Quincy", "Izzy", "Layla"]
for (let i = 0; i < names.length; i++) {
    leaders.push(names[i]);
}

let student2 = leaders[1]

console.log(student2)

console.log(leaders[1])

function updateField(index, newName) {
    if(index >= 0 && index < leaders.length) {
    leaders[index] = newName
}}

updateField(3, "Moussa")

console.log(leaders)

console.log(leaders[0])

console.log(leaders[leaders.length - 1])

function specificValue(index){
    if(index >= 0 && index < leaders.length){
        return(leaders[index])
    }
 }

 console.log(specificValue(6))

 console.log(leaders)