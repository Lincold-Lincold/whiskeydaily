// =======================
// WHISKEY PAGE
// =======================

const facts = [
  "Whiskey must be aged in wooden containers, usually oak.",
  "Bourbon can only be made in the United States.",
  "Scotch whisky must be aged for at least three years.",
  "The spelling 'whiskey' vs 'whisky' depends on the country.",
  "Barrel aging contributes most of a whiskey’s color and flavor."
];

const button = document.getElementById("fact-btn");
const factText = document.getElementById("whiskey-fact");

if (button && factText) {
  button.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.textContent = randomFact;
  });
}

// =======================
// LIQUORS PAGE
// =======================

const liquors = [
  {
    name: "Vodka",
    image: "images/vodka.jpg",
    description: "A clean, neutral spirit designed to highlight purity rather than strong flavor.",
    origin: "Eastern Europe",
    proof: "80–100",
    popularity: "Very High"
  },
  {
    name: "Rum",
    image: "images/rum.jpg",
    description: "A versatile spirit made from sugarcane, ranging from light and crisp to dark and rich.",
    origin: "Caribbean",
    proof: "80–100",
    popularity: "High"
  },
  {
    name: "Gin",
    image: "images/gin.jpg",
    description: "A botanical-driven spirit defined by juniper and a wide range of herbal flavors.",
    origin: "England",
    proof: "80–94",
    popularity: "High"
  },
  {
    name: "Tequila",
    image: "images/tequila.jpg",
    description: "A regulated Mexican spirit distilled from blue agave with distinct regional character.",
    origin: "Mexico",
    proof: "76–100",
    popularity: "Very High"
  },
  {
    name: "Brandy",
    image: "images/brandy.jpg",
    description: "A refined spirit distilled from wine or fruit, often aged for smoothness and depth.",
    origin: "Europe",
    proof: "80–90",
    popularity: "Medium"
  }
];

const liquorGrid = document.getElementById("liquor-grid");

if (liquorGrid) {
  liquors.forEach(liquor => {
    const card = document.createElement("article");
    card.classList.add("liquor-card");

    card.innerHTML = `
      <img src="${liquor.image}" alt="${liquor.name}">
      <div class="card-content">
        <h3>${liquor.name}</h3>
        <p class="description">${liquor.description}</p>
        <ul class="details">
          <li><strong>Origin:</strong> ${liquor.origin}</li>
          <li><strong>Typical Proof:</strong> ${liquor.proof}</li>
          <li><strong>Popularity:</strong> ${liquor.popularity}</li>
        </ul>
      </div>
    `;

    liquorGrid.appendChild(card);
  });
}

// Liquor facts
const liquorFacts = [
  "Distillation concentrates alcohol by separating ethanol from water.",
  "Gin gets its signature flavor from juniper berries.",
  "Tequila can only be produced in designated regions of Mexico.",
  "Vodka is prized for neutrality rather than flavor complexity.",
  "Many spirits develop most of their flavor during aging."
];

const liquorFactBtn = document.getElementById("liquor-fact-btn");
const liquorFactText = document.getElementById("liquor-fact");

if (liquorFactBtn && liquorFactText) {
  liquorFactBtn.addEventListener("click", () => {
    const fact = liquorFacts[Math.floor(Math.random() * liquorFacts.length)];
    liquorFactText.textContent = fact;
  });
}


// =======================
// GRAINS PAGE
// =======================

const grains = [
  {
    name: "Corn",
    image: "images/corn.jpg",
    description: "A grain known for its high sugar content and natural sweetness.",
    found: "United States, Mexico",
    usedIn: "Bourbon, Corn Whiskey",
    role: "Provides sweetness and body"
  },
  {
    name: "Barley",
    image: "images/barley.jpg",
    description: "A cereal grain prized for its enzymes and malty flavor.",
    found: "Scotland, Ireland, Europe",
    usedIn: "Scotch, Irish Whiskey, Beer",
    role: "Supplies fermentable sugars and malt character"
  },
  {
    name: "Rye",
    image: "images/rye-grain.jpg",
    description: "A hardy grain with bold, spicy characteristics.",
    found: "United States, Canada, Eastern Europe",
    usedIn: "Rye Whiskey, Some Bourbons",
    role: "Adds spice, dryness, and structure"
  },
  {
    name: "Wheat",
    image: "images/wheat.jpg",
    description: "A soft grain that produces a gentle, smooth spirit.",
    found: "Worldwide",
    usedIn: "Wheated Bourbon, Vodka",
    role: "Creates smoothness and soft mouthfeel"
  }
];

const grainGrid = document.getElementById("grain-grid");

if (grainGrid) {
  grains.forEach(grain => {
    const card = document.createElement("article");
    card.classList.add("grain-card");

    card.innerHTML = `
      <img src="${grain.image}" alt="${grain.name}">
      <div class="card-content">
        <h3>${grain.name}</h3>
        <p class="description">${grain.description}</p>
        <ul class="details">
          <li><strong>Found In:</strong> ${grain.found}</li>
          <li><strong>Used In:</strong> ${grain.usedIn}</li>
          <li><strong>Role:</strong> ${grain.role}</li>
        </ul>
      </div>
    `;

    grainGrid.appendChild(card);
  });
}
