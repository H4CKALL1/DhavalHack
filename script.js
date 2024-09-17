function generatePasswords() {
  // Helper function to pick a random value from comma-separated inputs
  const getRandomValue = (input) => {
    const values = input.split(',').map(val => val.trim());
    return values[Math.floor(Math.random() * values.length)];
  };

  const firstname = getRandomValue(document.getElementById('firstname').value);
  const secondname = getRandomValue(document.getElementById('secondname').value);
  const age = getRandomValue(document.getElementById('age').value);
  const birthdate = getRandomValue(document.getElementById('birthdate').value);
  const nickname = getRandomValue(document.getElementById('nickname').value);
  const petname = getRandomValue(document.getElementById('petname').value);
  const brothername = getRandomValue(document.getElementById('brothername').value);
  const phone = getRandomValue(document.getElementById('phone').value).slice(-4); // Use last 4 digits
  const rollnumber = getRandomValue(document.getElementById('rollnumber').value);
  const favouritehero = getRandomValue(document.getElementById('favouritehero').value);
  const favouriteperson = getRandomValue(document.getElementById('favouriteperson').value);
  const favouritebike = getRandomValue(document.getElementById('favouritebike').value);
  const favouritecar = getRandomValue(document.getElementById('favouritecar').value);
  const socialmedia = getRandomValue(document.getElementById('socialmedia').value);

  const passwordLength = parseInt(document.getElementById('passwordLength').value);
  const numPasswords = parseInt(document.getElementById('numPasswords').value);

  if (!passwordLength || !numPasswords) {
    alert("Please specify both password length and number of passwords.");
    return;
  }

  const passwordComponents = [
    firstname, secondname, age, birthdate, nickname, petname, brothername, 
    phone, rollnumber, favouritehero, favouriteperson, 
    favouritebike, favouritecar, socialmedia
  ];

  const generatedPasswords = [];
  
  for (let i = 0; i < numPasswords; i++) {
    // Shuffle components to create randomness
    const shuffledComponents = passwordComponents.sort(() => 0.5 - Math.random()).join('');
    
    // Ensure password is within the desired length
    const password = shuffledComponents.slice(0, passwordLength);
    
    generatedPasswords.push(password);
  }

  // Display the generated passwords with hacker-style animation
  document.getElementById('passwordResult').innerHTML = `
    <h4>Generated Passwords:</h4>
    <ul>${generatedPasswords.map(pwd => `<li>${pwd}</li>`).join('')}</ul>
  `;
}