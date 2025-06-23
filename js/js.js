//Завдання 1
//Отримати загальну суму балансу (поле balance) всіх користувачів.
const user = [
  { name: "Alice", balance: 3200 },
  { name: "Bob", balance: 4100 },
  { name: "Charlie", balance: 5800 },
  { name: "David", balance: 5000 },
  { name: "Eva", balance: 2816 },
];
const calculateTotalBalance = (user) => user.reduce((acc, value) => acc += value.balance, 0)
console.log(calculateTotalBalance(user));


//Завдання 2
//Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

 const users = [
      {name: "Sharlene Bush",friends: ["Briana Decker", "Goldie Gentry"],},
      {name: "Elma Head",friends: ["Goldie Gentry"],},
      {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry"],},
      {name: "Ross Vazquez",friends: ["Marilyn Mcintosh"],},
    ];
    const getUsersWithFriend = (users, friendName) => users.filter((user) => user.friends.includes(friendName)).map((user) => user.name)
    console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
    console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


//Завдання 3
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
const userc = [
  { name: "Sharlene Bush", friends: ["Briana Decker", "Goldie Gentry"] },
  { name: "Elma Head", friends: ["Goldie Gentry"] },
  {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry", "Ross Vazquez"] },
  {name: "Ross Vazquez",friends: ["Marilyn Mcintosh","Elma Head","Carey Barr","Blackburn Dotson",]},
  { name: "Moore Hensley", friends: [] },
  { name: "Carey Barr", friends: ["Sharlene Bush"] },
  { name: "Blackburn Dotson", friends: ["Elma Head", "Ross Vazquez"] },
];

const getNamesSortedByFriendsCount = userc => [...userc].sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);
 
console.log(getNamesSortedByFriendsCount(userc));
[ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Завдання 4
// Отримати масив всіх умінь всіх користувачів(поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const userg = [
  { name: "Alice", skills: ["html", "css", "js"] },
  { name: "Bob", skills: ["css", "react", "nodejs"] },
  { name: "Charlie", skills: ["nodejs", "express", "mongo"] },
];
const getSortedUniqueSkills = (userg) => {
  const alldSkils = userg.flatMap((user) => user.skills);
  const deleteUser = alldSkils.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);
  return deleteUser.sort();
};
console.log(getSortedUniqueSkills(userg));