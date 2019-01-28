var test =function (){
    console.log("Hello World")
};

var Veggie = function(name, color){
    this.name = name,
    this.color = color

};

var kiwi = new Veggie("Kiwi","green");

Veggie.prototype.legs = "I have no Legs, I'm a fruit"


console.log(kiwi.ind);
