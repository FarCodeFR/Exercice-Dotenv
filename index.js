// charger les variables d'environnement !
import "dotenv/config";

// Récupérer les variables depuis process.env

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Afficher le message

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
