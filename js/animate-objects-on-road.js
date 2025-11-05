"use strict";

// Hent DOM elementer
const getRedCar = document.getElementById("redCar");
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");

const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");

// Opretter lydobjekter
const soundRedCar = new Audio("sound/red-car-horn.wav");
const soundPoliceCar = new Audio("sound/police-car-sound.wav");
const soundBlueCar = new Audio("sound/blue-car-sound.wav");