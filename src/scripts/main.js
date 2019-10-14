const myDog = {
    name : "Steve",
    species: "Lab",
    nicknames: ["Stevie", "boy", "Stever"],
    age: 7,
    favoriteToys: [],
    play: function (toy) {
        if (toy = "rubber"){
            this.favoriteToys.push(toy);
        }
    },
    growl: function (emotion) {
        window.alert("Steve is growling" + " " + emotion)
    },
    hungry: function (amount) {
        window.alert("Steve is drooling" + " " + amount)
    },
    playful: function(action) {
        window.alert("Steve is" + action + " ")
    }
}
myDog.favoriteToys.push('ball');
console.log(myDog.favoriteToys);