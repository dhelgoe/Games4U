const words = [
  "Elephant",
  "Bicycle",
  "Sunshine",
  "Chocolate",
  "Rainbow",
  "Guitar",
  "Diamond",
  "Tornado",
  "Galaxy",
  "Vampire",
  "Pizza",
  "Thunder",
  "Fireworks",
  "Ocean",
  "Soccer",
  "Whisper",
  "Mountain",
  "Dragon",
  "Telescope",
  "Moonlight",
  "Robot",
  "Potion",
  "Hurricane",
  "Jazz",
  "Blossom",
  "Enigma",
  "Lollipop",
  "Dinosaur",
  "Acrobat",
  "Treasure",
  "Samurai",
  "Marshmallow",
  "Blizzard",
  "Puzzle",
  "Unicorn",
  "Marshmallow",
  "Zenith",
  "Serenade",
  "Pixel",
  "Velvet",
  "Ferrari",
  "Cucumber",
  "Butterfly",
  "Sapphire",
  "Zephyr",
  "Marathon",
  "Candle",
  "Raindrop",
  "Firefly",
  "Comet",
  "Breeze",
  "Harmony",
  "Echo",
  "Quasar",
  "Majesty",
  "Cascade",
  "Lullaby",
  "Meadow",
  "Radiance",
  "Wonder",
  "Cherish",
  "Serenity",
  "Zodiac",
  "Fantasy",
  "Oracle",
  "Marvel",
  "Mystic",
  "Rhapsody",
  "Whimsy",
  "Opal",
  "Cascade",
  "Tranquil",
  "Harmony",
  "Velvet",
  "Nebula",
  "Paradise",
  "Fable",
  "Twinkle",
  "Vivid",
  "Delight",
  "Eclipse",
  "Sizzle",
  "Jubilee",
  "Bamboo",
  "Galaxy",
  "Bliss",
  "Majestic",
  "Radiant",
  "Blossom",
  "Celestial",
  "Melody",
  "Enchanted",
  "Enigma",
  "Ethereal",
  "Fascinate",
  "Glimmer",
  "Harmonize",
  "Illusion",
  "Jasmine",
  "Kaleidoscope",
  "Luminous",
  "Mesmerize",
  "Nirvana",
  "Oasis",
  "Paradox",
  "Quintessence",
  "Rapture",
  "Surreal",
  "Tranquility",
  "Utopia",
  "Vortex",
  "Whisper",
  "Zest",
  "Zen",
  "Breeze",
  "Carnival",
  "Dream",
  "Frost",
  "Glow",
  "Haven",
  "Imagination",
  "Journey",
  "Kismet",
  "Lucky",
  "Mystify",
  "Nurture",
  "Optimism",
  "Pleasure",
  "Quest",
  "Radiate",
  "Savor",
  "Thrill",
  "Uplift",
  "Vibrant",
  "Whimsical",
  "Xanadu",
  "Yearn",
  "Zing",
  "Racecar",
  "Mercedes",
  "Antalope",
  "Lion",
  "Tiger",
  "Elephant",
  "Giraffe",
  "Monkey",
  "Kangaroo",
  "Koala",
  "Panda",
  "Zebra",
  "Leopard",
  "Cheetah",
  "Horse",
  "Wolf",
  "Fox",
  "Bear",
  "Rabbit",
  "Squirrel",
  "Dolphin",
  "Whale",
  "Shark",
  "Octopus",
  "Jellyfish",
  "Seahorse",
  "Starfish",
  "Lobster",
  "Crab",
  "Oyster",
  "Eagle",
  "Hawk",
  "Falcon",
  "Owl",
  "Pelican",
  "Swan",
  "Peacock",
  "Penguin",
  "Parrot",
  "Flamingo",
  "Hummingbird",
  "Snake",
  "Crocodile",
  "Alligator",
  "Turtle",
  "Frog",
  "Lizard",
  "Chameleon",
  "Koala",
  "Kangaroo",
  "Platypus",
  "Polar Bear",
  "Sloth",
  "Gorilla",
  "Orangutan",
  "Polar Bear",
  "Penguin",
  "Hippopotamus",
  "Rhino",
  "Gazelle",
  "Antelope",
  "Camel",
  "Giraffe",
  "Pig",
  "Sheep",
  "Goat",
  "Cow",
  "Buffalo",
  "Deer",
  "Moose",
  "Elephant",
  "Zebra",
  "Kangaroo",
  "Koala",
  "Ostrich",
  "Emu",
  "Kookaburra",
  "Cassowary",
  "Gibbon",
  "Raccoon",
  "Meerkat",
  "Possum",
  "Chimpanzee",
  "Squirrel",
  "Dingo",
  "Lemur",
  "Wombat",
  "Wallaby",
  "Bison",
  "Jaguar",
  "Cheetah",
  "Leopard",
  "Gazelle",
  "Gnu",
  "Hedgehog",
  "Armadillo",
  "Tapir",
  "Otter",
  "Beaver",
  "Seal",
  "Walrus",
  "Porcupine",
  "Koala",
  "Platypus",
  "Lemming",
  "Gorilla",
  "Orangutan",
  "Bonobo",
  "Quokka",
  "Quoll",
  "Numbat",
  "Bilby",
  "Bandicoot",
  "Ford",
  "Toyota",
  "Nissan",
  "Hybrid",
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Pineapple",
  "Mango",
  "Peach",
  "Pear",
  "Cherry",
  "Blueberry",
  "Raspberry",
  "Kiwi",
  "Avocado",
  "Tomato",
  "Potato",
  "Carrot",
  "Broccoli",
  "Lettuce",
  "Spinach",
  "Cucumber",
  "Onion",
  "Garlic",
  "Pepper",
  "Eggplant",
  "Zucchini",
  "Mushroom",
  "Corn",
  "Pumpkin",
  "Cabbage",
  "Cauliflower",
  "Celery",
  "Radish",
  "Asparagus",
  "Artichoke",
  "Peanut",
  "Almond",
  "Cashew",
  "Walnut",
  "Coconut",
  "Hazelnut",
  "Pistachio",
  "Olive",
  "Lemon",
  "Lime",
  "Grapefruit",
  "Pomegranate",
  "Cantaloupe",
  "Honeydew",
  "Fig",
  "Date",
  "Raisin",
  "Prune",
  "Apricot",
  "Cranberry",
  "Blackberry",
  "Currant",
  "Plum",
  "Guava",
  "Passionfruit",
  "Melon",
  "Nectarine",
  "Starfruit",
  "Lychee",
  "Jackfruit",
  "Dragonfruit",
  "Durian",
  "Persimmon",
  "Quince",
  "Papaya",
  "Pawpaw",
  "Tangerine",
  "Kumquat",
  "Carambola",
  "Plantain",
  "Chestnut",
  "Breadfruit",
  "Squash",
  "Yam",
  "Beet",
  "Turnip",
  "Parsnip",
  "Ginger",
  "Soybean",
  "Lentil",
  "Chickpea",
  "Bean",
  "Pea",
  "Corn",
  "Rice",
  "Quinoa",
  "Barley",
  "Oat",
  "Wheat",
  "Millet",
  "Sorghum",
  "Buckwheat",
  "Couscous",
  "Pasta",
  "Noodle",
  "Biscuit",
  "Bagel",
  "Croissant",
  "Muffin",
  "Donut",
  "Pancake",
  "Waffle",
  "Toast",
  "Sandwich",
  "Burger",
  "Hotdog",
  "Pizza",
  "Taco",
  "Burrito",
  "Sushi",
  "Ramen",
  "Pho",
  "Stir-fry",
  "Salad",
  "Soup",
  "Stew",
  "Curry",
  "Pilaf",
  "Risotto",
  "Casserole",
  "Lasagna",
  "Meatball",
  "Steak",
  "Chicken",
  "Fish",
  "Shrimp",
  "Crab",
  "Lobster",
  "Pork",
  "Bacon",
  "Ham",
  "Sausage",
  "Salami",
  "Pepperoni",
  "Turkey",
  "Duck",
  "Lamb",
  "Beef",
  "Veal",
  "Egg",
  "Cheese",
  "Milk",
  "Yogurt",
  "Butter",
  "Cream",
  "Honey",
  "Sugar",
  "Salt",
  "Pepper",
  "Cinnamon",
  "Vanilla",
  "Cocoa",
  "Coffee",
  "Tea",
  "Juice",
  "Soda",
  "Water",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "Wisconsin",
  "Wyoming",
  "Merlot",
  "Chardonnay",
  "Cabernet",
  "Riesling",
  "Pinot",
  "Syrah",
  "Sauvignon",
  "Malbec",
  "Zinfandel",
  "Grenache",
  "Tempranillo",
  "Moscato",
  "Malbec",
  "Stout",
  "Ale",
  "Hefeweizen",
  "Scotch",
  "Bourbon",
  "Vodka",
  "Belgian",
  "Blonde",
  "Shadow",
  "Barleywine",
  "Spotify",
  "Magnesium",
  "Promotion",
  "Hydro",
  "Seduction",
  "Envelope",
  "Minute",
  "Second",
  "Mastercard",
  "Rolex",
  "Controller",
  "Nintendo",
  "Playstation",
  "Fidget",
  "Stressball",
  "Hatchet",
  "Crowbar",
  "Taser",
  "Lasso",
];



console.log(words);

const maxWrongGuesses = 8;
let wrongGuesses = 0;
let answer = "";
let guessedLetters = [];
let winSteak = 0;
const winImageUrl = "winner-illustration.jpg";

function startGame() {
  // Choose a random word from the words array
  answer = words[Math.floor(Math.random() * words.length)];

  // Initialize guessedLetters array with underscores and spaces
  guessedLetters = answer.split("").map(char => {
    if (char === " ") {
      return " ";
    } else {
      return "_";
    }
  });

  // Display the word on the screen with underscores for the unguessed letters
  document.getElementById("word").innerHTML = guessedLetters.join(" ");

  // Display the number of letters in the word
  document.getElementById("message").innerHTML = `The word has ${answer.length} letters.`;

  // Enable the input field and button
  const guessInput = document.getElementById("guess");
  guessInput.disabled = false;
  guessInput.focus();
  document.querySelector("form input[type='submit']").disabled = false;

  // Add an event listener to the form
  document.querySelector("form").addEventListener("submit", guessLetter);
}

function guessLetter(event) {
  event.preventDefault();

  // Get the value of the guess input
  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.charAt(0).toLowerCase();

  // Clear the guess input
  guessInput.value = "";

  // Check if the guess is a letter
  if (!/[a-z]/.test(guess)) {
    document.getElementById("message").innerHTML = "Please enter a letter from a to z.";
    return;
  }

  // Check if the letter has already been guessed
  if (guessedLetters.includes(guess)) {
    document.getElementById("message").innerHTML = "You have already guessed that letter.";
    return;
  }

  // Update the guessedLetters array and the displayed word
  let letterFound = false;
  let updatedWord = "";
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].toLowerCase() === guess) {
      guessedLetters[i] = answer[i];
      letterFound = true;
    }
    updatedWord += guessedLetters[i] + " ";
  }

  // Display the updated word on the screen
  document.getElementById("word").innerHTML = updatedWord;

  // Check if the user has won the game
  if (!guessedLetters.includes("_")) {
    document.getElementById("message").innerHTML = "Congratulations, you won!";
    guessInput.disabled = true;
    document.querySelector("form input[type='submit']").disabled = true;
    return;
  }

  // Check if the letter is not in the word
  if (!letterFound) {
    // Update the wrongGuesses counter
    wrongGuesses++;

    // Display the updated wrongGuesses counter on the screen
    document.getElementById("guesses").innerHTML = `Wrong guesses: ${wrongGuesses}/${maxWrongGuesses}`;

    // Check if the user has lost the game
    if (wrongGuesses === maxWrongGuesses) {
      document.getElementById("message").innerHTML = `Sorry, you lost. The word was "${answer}".`;
      guessInput.disabled = true;
      document.querySelector("form input[type='submit']").disabled = true;
      return;
    }
  }

  // Add the guessed letter to the guessedLetters array
  guessedLetters.push(guess);

  // Display a message to make another guess
  document.getElementById("message").innerHTML = "Guess another letter.";
}



// event listener for restart button 
document.getElementById("restart").addEventListener("click", restartGame);

function restartGame() {
  location.reload();
}

// start the game on page reload
startGame();




