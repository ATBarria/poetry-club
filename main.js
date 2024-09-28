// Task 1 done

// Task 2
function frontDoorPassword(word = "") {
  const index = word.length;
  const firstLetter = word.slice(0, 1).toUpperCase();
  const endWord = word.substring(1, index).toLowerCase();
  console.log(firstLetter + endWord);
  return firstLetter + endWord;
}

frontDoorPassword("DOG");

// Task 3
