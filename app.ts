// zubair arif 16/feb/2024

// question two
var person:String = "Ali";
console.log(`Hello, ${person} would you like to learn some Python today?`)

// question three
var person2:String = "Ali";
console.log("lowercase" , person2.toLocaleLowerCase())
console.log("lowercase" , person2.toLocaleUpperCase())
console.log("lowercase" , person2)

// question four
var quote:String = "I have no special talent , i am passionately curious"
var author:String = "Albert Einstein"
console.log(`${author} once said , "${quote}"`)

// question five
var famous_person:String = "Albert Einstine"
var message:String = `${famous_person} once said I have no special talent , i am passionately curious`
console.log(message)

// question six
let person3:String = "\t \n John Doe \n \t";
console.log("Name with whitespace:" ,person3);
console.log("\nName after stripping whitespace:",person3.trim());

// question seven & eigth
console.log(6+2)
console.log(12-4)
console.log(4*2)
console.log(24/3)

// question nine
var fav_number:Number = 6;
console.log(`My Favourite Number is ${fav_number}`)

// question eleven
var names:String[] = ["Ali","Raza","Umar","Mustafa"]
names?.forEach((item)=>{
    console.log(item)
})

// question twelve
var names2:String[] = ["Ali","Raza","Umar","Mustafa"]
names2?.forEach((item)=>{
    console.log(`Hello ${item} , how are you ?`)
})

// question thirteen
var transport:String[] = ["Aqua","Civic","Mercedes"]
transport?.forEach((item)=>{
    console.log(`I would like to own a ${item} car`)
})

// question fourteen 
var guest:String[] = ["Haider","Aziz","Rizwan","Bilal","Rehan"]
guest?.forEach((item)=>{
    console.log(`I would like to invite Mr.${item} for a dinner tonight`)
})

// question fifteen 
guest?.slice(2 , guest?.length -1)?.forEach((item)=>{
    console.log(`${item} can't make tonight`)
})
guest?.splice(2 , guest?.length -1 , "Mubeen","Asif")?.forEach((item)=>{
    console.log(`I would like to invite Mr.${item} for a dinner tonight`)
   
})

// question sixteen 
console.log("Hey, i've found a new bigger table")

guest.unshift("Murtaza")
guest.splice(3,0,"Usman")
guest.push("Qasim")
guest?.forEach((item)=>{
    console.log(`I would like to invite Mr.${item} for a dinner at bigger table`)
})


// question seventeen 
console.log("Attention please! i can invite only two people for dinner.")

for(var i = 1 ; i <= guest?.length + 2 ; i++ ){
    console.log(`Dear Mr.${guest[guest?.length - i]}, i am sorry , i can't invite you for tonight's dinner`)
    guest.pop()
}

guest?.forEach((item)=>{
    console.log(`I am glad to say that Mr.${item} is still invited for a dinner at bigger table`)

})

guest?.length === 0
console.log(guest)   
