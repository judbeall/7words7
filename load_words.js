// Read the generated word list
const response = await fetch('seven_letter_words.js');
const wordListText = await response.text();
eval(wordListText);
