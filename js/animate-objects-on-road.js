"use strict";

// Opretter vores data-struktur med et array som indeholder JS objekter
const carInfo = [
  {
    className: "car1",
    carBrand: "Ford",
    carModel: "Mustang",
    releaseYear: 1984,
    color: "Red",
    fuelType: "Diesel",
  },
  {
    className: "car2",
    carBrand: "Chevrolet",
    carModel: "Camaro",
    releaseYear: 1967,
    color: "Black & White",
    fuelType: "Petrol",
  },
  {
    className: "car3",
    carBrand: "Dodge",
    carModel: "Charger",
    releaseYear: 1970,
    color: "Blue",
    fuelType: "Petrol",
  },
];

// Venter med at køre JS koden indtil hele HTML-siden er indlæst
document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip"); // Finder tooltip id og gemmer det i en variabel
  // Funktion der viser tooltip med biloplysninger'
  // Parameter: html - den tekst indeholdende html-tags som vi vil vise i tooltip'en
  function showTooltip(html) {
    if (tooltip) {
      tooltip.innerHTML = html; // Indsætter teksten i tooltip'en
      tooltip.classList.add("is-visible"); // Gør tooltip'en synlig med css klassen
      setTimeout(function () {
        tooltip.classList.remove("is-visible"); // Fjerner synligheds-klassen efter 8 sekunder
      }, 8000);
    }
  }

  // Tilføjer event listeners til hver bil baseret på data-strukturen
  carInfo.forEach((car) => {
    document.querySelectorAll("." + car.className).forEach((elem) => { // Vælger alle elementer med den givne className
      elem.addEventListener("mouseover", () => {
        const carDetails = `<strong>${car.carBrand}</strong><br>
        Model: ${car.carModel}<br>
        Release Year: ${car.releaseYear}<br>
        Color: ${car.color}<br>
        Fuel Type: ${car.fuelType}`; // Opretter HTML teksten med biloplysninger
        showTooltip(carDetails);
      });
    });
  });

  // Hent DOM elementer
  const getRedCar = document.getElementById("redCar");
  const getPoliceCar = document.getElementById("policeCar");
  const getBlueCar = document.getElementById("blueCar");

  const sun = document.querySelector(".sun");
  const scene = document.querySelector(".scene");

  // Opretter lydobjekter
  const soundRedCar = new Audio();
  soundRedCar.src = "../sound/red-car-horn.wav";
  const soundPoliceCar = new Audio();
  soundPoliceCar.src = "../sound/police-car-sound.wav";
  const soundBlueCar = new Audio();
  soundBlueCar.src = "../sound/blue-car-sound.wav";

  // Funktion til at afspille lyd ved klik på bil
  if (getRedCar) {
    getRedCar.style.cursor = "pointer"; // Ændrer cursor til pointer ved hover
    getRedCar.addEventListener("click", () => {
      soundRedCar.play();
    });
  }

  if (getPoliceCar) {
    getPoliceCar.style.cursor = "pointer";
    getPoliceCar.addEventListener("click", () => {
      soundPoliceCar.play();
    });
  }

  if (getBlueCar) {
    getBlueCar.style.cursor = "pointer";
    getBlueCar.addEventListener("click", () => {
      soundBlueCar.play();
    });
  }

  // Funktion til at ændre fra dag til nat ved klik på solen
  if (sun && scene) {
    sun.addEventListener("click", () => {
      scene.classList.toggle("night");
    });
  }
});
