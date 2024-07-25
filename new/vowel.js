let ch = prompt("Enter a character: ").toLowerCase();
let vowels = "aeiou";

// vowels.include(ch)
if(vowels.search(ch) != -1) {
    document.write("vowel")
} else {
    document.write("consonant")
}