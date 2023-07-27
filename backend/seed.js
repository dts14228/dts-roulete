// seed.js
const mongoose = require("mongoose");
const Case = require("./models/Case");
const Item = require("./models/Item");

// Connect to MongoDB (make sure your MongoDB connection string is correct)
const connectionString =
  "mongodb+srv://test:Pa5word123@cluster0.528uhwu.mongodb.net/";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create sample items
const itemsData = [
  {
    name: "Lulu",
    image: "https://i.imgur.com/cXQ3ouo.png",
    probability: 10,
    rarity: "yellow",
  },
  {
    name: "Flamengo",
    image: "https://i.imgur.com/gWRTVsj.png",
    probability: 20,
    rarity: "yellow",
  },
  {
    name: "Neko Arc",
    image: "https://i.imgur.com/w1ZWflp.png",
    probability: 35,
    rarity: "red",
  },
  {
    name: "Nando",
    image: "https://i.imgur.com/ghHRL4M.png",
    probability: 50,
    rarity: "red",
  },
  {
    name: "Gahara",
    image: "https://i.imgur.com/d8idpfd.png",
    probability: 70,
    rarity: "purple",
  },
  {
    name: "Gaguejadora",
    image: "https://i.imgur.com/X8oYaV7.png",
    probability: 85,
    rarity: "blue",
  },
  {
    name: "mt foda",
    image: "https://i.imgur.com/FxYdtSW.png",
    probability: 100,
    rarity: "blue",
  },
  {
    name: "snke",
    image: "https://i.imgur.com/0iwjG0k.png",
    probability: 120,
    rarity: "blue",
  },
];

// Save items to the database
Item.insertMany(itemsData)
  .then((items) => {
    console.log("Items inserted:", items);

    const caseData = {
      title: "VIP Case", // Здесь добавлено поле "title"
      description: "God please give me nando i beg you",
      image: "https://i.imgur.com/Y8NPlJ2.png",
      price: 100, // Здесь добавлено поле "price"
      items: items.map((item) => item._id),
    };

    // Save the case to the database
    return Case.create(caseData);
  })
  .then((caseDocument) => {
    console.log("Case inserted:", caseDocument);
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    mongoose.disconnect();
  });