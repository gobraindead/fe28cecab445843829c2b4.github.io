// Contact (Base64 encoded): aGVsbG9AYnJhaW5kZWFkLmNjCg==
var ROFLMAO = [
"total prick, tries to get tk'd to ban top frags, forcing them to spin and afk. total troll ~victim of ban central",
"have fun on the main menu bro ~/id/b1adedancer",
"boutta make my exit booyah ~not /id/1un4r",
"i'm living in your head rent free right now ~/id/1un4r",
"gonna drain my gang uh oh ~guy who got kick centraled",
"i can rank you guys up ~bottom fragger"
];
var OMALFOR = [
"",
"https://steamcommunity.com/id/b1adedancer",
"https://steamcommunity.com/id/1un4r",
"https://steamcommunity.com/id/1un4r",
"",
""
];
setTimeout(function(){
var yeah = Math.floor(Math.random()*6);
document.getElementById("title").innerHTML=ROFLMAO[yeah];
if (OMALFOR[yeah]!=="") {
document.getElementById("hre").href=OMALFOR[yeah];
}
},1);
