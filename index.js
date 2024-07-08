const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased() {
  // Split the tutorial title into individual words
  // Capitalize the first letter of each word.
  // Join the capitalized words back into a single string
  return tutorials.map(function (tutorial) {
    const words = tutorial.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const titleCaseTutorial = capitalizedWords.join(' ');

    return titleCaseTutorial;
  });
}

titleCased();


