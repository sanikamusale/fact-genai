const factButton = document.getElementById('factButton');
const factDisplay = document.getElementById('factDisplay');
const dogTypeSelect = document.getElementById('dogType');
const dogGenderSelect = document.getElementById('dogGender');

const facts = {
  all: {
    any: [
      "A dog's sense of smell is at least 40 times better than a human's.",
      "Dogs can be trained to detect certain diseases in humans, like cancer.",
      "The average dog can understand around 165 words.",
      "Dogs sweat through their paws.",
      "A dog's nose print is unique, much like a human's fingerprint.",
      "The Basenji is the only dog breed that doesn't bark; instead, they yodel.",
      "Dogs have three eyelids.",
      "Dogs can see in color, though not as vividly as humans.",
      "The world's smallest dog breed is the Chihuahua.",
      "Dogs curl up in a ball when they sleep to protect their vital organs."
    ],
    male: [
      "Male dogs are often larger than females of the same breed.",
      "Male dogs are sometimes more prone to marking territory."
    ],
    female: [
      "Female dogs can have multiple litters of puppies in their lifetime.",
      "Female dogs typically live longer than male dogs."
    ]
  },
  goldenRetriever: {
    any: [
      "Golden Retrievers are known for their gentle and friendly temperament.",
      "Golden Retrievers excel as guide dogs and therapy dogs.",
      "Golden Retrievers have a water-repellent coat."
    ],
    male: [
      "Male Golden Retrievers are often more playful.",
      "Male Golden Retrievers need consistent training."
    ],
    female: [
      "Female Golden Retrievers are known to be more nurturing.",
      "Female Golden Retrievers are often easier to train."
    ]
  },
  germanShepherd: {
    any: [
      "German Shepherds are highly intelligent and trainable.",
      "German Shepherds are often used as police and military dogs.",
      "German Shepherds originated in Germany in the late 19th century."
    ],
    male: [
      "Male German Shepherds are often more protective.",
      "Male German Shepherds require a strong owner."
    ],
    female: [
      "Female German Shepherds are often more gentle with children.",
      "Female German Shepherds are very loyal."
    ]
  },
  poodle: {
    any: [
      "Poodles come in three sizes: standard, miniature, and toy.",
      "Poodles are hypoallergenic due to their non-shedding coats.",
      "Poodles were originally bred as water retrievers."
    ],
    male: [
      "Male Poodles are often more outgoing.",
      "Male Poodles can be more independent."
    ],
    female: [
      "Female Poodles are often more sensitive.",
      "Female Poodles are very intelligent."
    ]
  },
  labrador: {
    any: [
      "Labradors are one of the most popular dog breeds in the world.",
      "Labradors are known for their friendly and outgoing personalities.",
      "Labradors are often used as guide and service dogs."
    ],
    male: [
      "Male Labradors are often more energetic.",
      "Male Labradors need lots of exercise."
    ],
    female: [
      "Female Labradors are often more calm.",
      "Female Labradors are great family pets."
    ]
  },
  bulldog: {
    any: [
      "Bulldogs are known for their wrinkly faces and pushed-in noses.",
      "Bulldogs are typically gentle and courageous.",
      "Bulldogs need special care to prevent overheating."
    ],
    male: [
      "Male Bulldogs can be more stubborn.",
      "Male Bulldogs require early socialization."
    ],
    female: [
      "Female Bulldogs are often more affectionate.",
      "Female Bulldogs are very loyal."
    ]
  },
  beagle: {
    any: [
      "Beagles were originally bred for hunting rabbits.",
      "Beagles have an excellent sense of smell.",
      "Beagles are known for their happy and curious nature."
    ],
    male: [
      "Male Beagles are often more food-motivated.",
      "Male Beagles need consistent training."
    ],
    female: [
      "Female Beagles are often more independent.",
      "Female Beagles are great family pets."
    ]
  }
};

factButton.addEventListener('click', generateFact);

function generateFact() {
  const selectedDogType = dogTypeSelect.value;
  const selectedDogGender = dogGenderSelect.value;

  const factArray = facts[selectedDogType][selectedDogGender];
  const randomIndex = Math.floor(Math.random() * factArray.length);
  factDisplay.textContent = factArray[randomIndex];
}
