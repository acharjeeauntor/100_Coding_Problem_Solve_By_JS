// How to count Vowels and Consonants in Js String Word

var sentence = "How many vowels in this String"
let trimedSentence = sentence.replace(/\s+/g, '').toLowerCase()
let splitedSentence = trimedSentence.split('')
let count=0;
splitedSentence.forEach((x)=>{
    if(x==='a'|| x==='e'||x==='i'||x==='o'||x==='u'){
        count++
    }
})
console.log(`Number of vowels in String: ${count}`)
