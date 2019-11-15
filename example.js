//#################################################### With Switch ################################################## 

getAnimalsSwitch = (type,name) => {
    switch (type) {
        case "Lion": 
            return `I am a Lion and my name is ${name}`
        case "Chicken": 
            return  `I am a Chicken and my name is ${name}`
        case "Leopard": 
            return `I am a Leopard and my name is ${name}`
        case "Bird": 
            return `I am a Bird and my name is ${name}`
        case "Fish": 
            return `I am a Fish and my name is ${name}`
        default:
            return "Animal not found";
    }
}
console.time("#Switch")
const nameAnimal = getAnimalsSwitch("Lion", "Alex")
console.log(nameAnimal)
console.timeEnd("#Switch")

//#################################################### With a Literal Object ############################################### 

const animals = {
    "Lion": (param)=> `I am a Lion and my name is ${param}`, 
    "Chicken": (param)=> `I am a Chicken and my name is ${param}`, 
    "Leopard": (param)=> `I am a Leopard and my name is ${param}`,
    "Bird": (param)=> `I am a Bird and my name is ${param}`,
    "Fish": (param)=> `I am a Fish and my name is ${param}`
}

const getAnimals = (type,name) => {
    return animals[type] ? animals[type](name) : "not found" 
}
console.time("#LiteralObject")
const nameAnimal2 = getAnimals('Lion',"Leoncio")
console.log(nameAnimal2)
console.timeEnd("#LiteralObject")
