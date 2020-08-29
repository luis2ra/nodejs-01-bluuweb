const { fruit, money } = require("./frutas");

const cowsay = require('cowsay');

fruit.forEach((fruitsss) => {
    //console.log(fruta);
    console.count(fruitsss);
});

console.log(money);

console.log(cowsay.say({
	text : "I'm a moodule",
	e : "oO",
	T : "U "
}));

