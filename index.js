"use strict";

const onlinePlayers = document.querySelector(".header__online--total");
const playingPlayers = document.querySelector(".header__playing--total");

const random = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

const numberFormatting = (x) =>
	x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

onlinePlayers.innerHTML = numberFormatting(random(20000000, 28000000));
playingPlayers.innerHTML = numberFormatting(random(5000000, 7000000));
