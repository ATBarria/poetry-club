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

// Task 3 done. It was much easier. I did the hard version using arrays

const CODE_WORK = [
  "Compilers intensily bestow",
  "On commencing without ego",
  "Different processes ajar",
  "Exit with zero quick",
];

const expectedLetters = ["w", "o", "r", "k"];
const items = [];
CODE_WORK.forEach((item) => {
  const index = item.length;
  console.log(items.push(item[index - 1]));
});

console.log(items);

export function backDoorResponse(line = []) {
  const items = [];
  line.forEach((item) => {
    const index = item.length;
    items.push(item[index - 1]);
  });
  console.log(items);
  return items;
}

backDoorResponse("hallo");
