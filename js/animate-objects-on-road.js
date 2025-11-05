"use strict";

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
  getRedCar.addEventListener("click", () => {
    soundRedCar.play();
  });
}

if (getPoliceCar) {
  getPoliceCar.addEventListener("click", () => {
    soundPoliceCar.play();
  });
}

if (getBlueCar) {
  getBlueCar.addEventListener("click", () => {
    soundBlueCar.play();
  });
}
