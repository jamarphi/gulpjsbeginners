var tuna = [
    {
        name: 'Jamar',
        age: 20
    },
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Jane',
        age: 23
    }
];

var newArr = tuna.map(function(profile){
    var tempProfile = profile;
    tempProfile.favoriteFood = 'pizza';
    return tempProfile;
});
console.log(newArr);
var finalArr = newArr;
finalArr.push({name: 'Tom',age: 23,favoriteFood: 'pasta'});
console.log(finalArr);