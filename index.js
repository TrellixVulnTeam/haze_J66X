"use strict";

// Selectors
const onlinePlayers = document.querySelector(".header__online--total");
const playingPlayers = document.querySelector(".header__playing--total");

// Function to get random number
const random = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

// Function to format number adding commas
const numberFormatting = (x) =>
	x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// Changing innerHTML of online and active players
onlinePlayers.innerHTML = numberFormatting(random(20000000, 28000000));
playingPlayers.innerHTML = numberFormatting(random(5000000, 7000000));
