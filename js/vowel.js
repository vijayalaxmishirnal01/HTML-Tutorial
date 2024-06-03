//code : is the char a vowel or a consonant?
function vowelconsonant(char){
    var v=['a','e','i','o','u']
    if(v.includes(char.toLowerCase())){
        console.log("It's a vowel.")
        }else{
            console.log("It's a consonant.")
            }
}
vowelconsonant("a")
vowelconsonant("E")
vowelconsonant("b")