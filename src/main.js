//find button
var button = document.getElementById("submit");

//BEGIN buttonClick listener function
var onButtonClick = function () {


// collect form input
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var weightInKg = (weight / 2.2);
  var height = document.getElementById("height").value;
  var heightInMeters = (height / 39.370);
  var bodyfat = (document.getElementById("bodyfat").value / 100);
  var gender = document.getElementById("gender").value;
  var goal = document.getElementById("goal").value;

// set some equation variables
  var fatMass = (weightInKg * bodyfat);
  var fatFreeMass = (weightInKg - fatMass);


// validate form input
  if ((weight && bodyfat) || (age && weight && height && gender)) {

// define calorie function
    if (gender == "male") {
      var genderValue = 1;
    } else if (gender == "female") {
      var genderValue = 0;
    }
    var rmrCunningham = (500 + (22 * fatFreeMass));
    var rmrWeightBased = ((11.936 * weightInKg) + (587.728 * heightInMeters) - (8.129 * age) + (191.027 * genderValue) + 29.279);
    function getCalories(weight, goal) {
      if (goal == "cut") {
        if (bodyfat) {
          return rmrCunningham * 0.8;
        } else {
          return rmrWeightBased * 0.8;
        }
      } else if (goal == "maintain") {
        if (bodyfat) {
          return rmrCunningham;
        } else {
          return rmrWeightBased;
        }
      } else if (goal == "bulk") {
        if (bodyfat) {
          return rmrCunningham * 1.2;
        } else {
          return rmrWeightBased * 1.2;
        }
      }
    }

// define protein function
    function getProtein(weight, goal, yourProteinMin, yourProteinMax) {
      var strengthProtein = (weight * 0.82);
      if ((strengthProtein > yourProteinMax)) {
        return ((yourProteinMin + yourProteinMax) / 2);
      } else {
        return strengthProtein;
      }
    }

// calculate variables
    var yourCalories = (Math.round((getCalories(weight, goal)) / 10) * 10);
    var yourCaloriesMin = yourCalories - 50;
    var yourCaloriesMax = yourCalories + 50;
    var yourProteinMin = Math.round((yourCalories / 4) * 0.1);
    var yourProteinMax = Math.round((yourCalories / 4) * 0.35);
    var yourProteinRda = Math.round(getProtein(weight, goal, yourProteinMin, yourProteinMax));
    var yourFatMin = Math.round((yourCalories / 9) * 0.2);
    var yourFatRda = Math.round((yourCalories / 9) * 0.275);
    var yourFatMax = Math.round((yourCalories / 9) * 0.35);
    var yourSfaMax = Math.round((yourCalories / 9) * 0.06);
    var yourPufaMin = Math.round((yourCalories / 9) * 0.05);
    var yourPufaMax = Math.round((yourCalories / 9) * 0.1);
    var yourPufaRda = Math.round((yourPufaMin + yourPufaMax) / 2);
    var yourn3PufaMin = Math.round((yourCalories / 9) * 0.005);
    var yourn3PufaMax = Math.round((yourCalories / 9) * 0.02);
    var yourn3PufaRda = Math.round((yourn3PufaMin + yourn3PufaMax) / 2);
    var yourn6PufaMin = yourn3PufaMin;
    var yourn6PufaMax = yourn3PufaMax * 4;
    var yourn6PufaRda = Math.round((yourn6PufaMin + yourn6PufaMax) / 2);
    var yourMufaMin = Math.round((yourCalories / 9) * 0.15);
    var yourMufaRda = (yourFatRda - yourPufaRda);
    var yourMufaMax = Math.round((yourCalories / 9) * 0.2);
    var yourCarbsMin = Math.round((yourCalories / 4) * 0.45);
    var yourCarbsRda = Math.round(((yourCalories - (yourFatRda * 9)) - (yourProteinRda * 4)) / 4);
    var yourCarbsMax = Math.round((yourCalories / 4) * 0.65);
    var yourFiberMin = (Math.round(yourCalories / 1000) * 14);
    var yourFiberRda = yourFiberMin;


// update table data based on form input
    document.getElementById("yourCaloriesMin").textContent = yourCaloriesMin + " kcal";
    document.getElementById("yourCaloriesRda").textContent = yourCalories + " kcal";
    document.getElementById("yourCaloriesMax").textContent = yourCaloriesMax + " kcal";
    document.getElementById("yourProteinMin").textContent = yourProteinMin + "g";
    document.getElementById("yourProteinRda").textContent = yourProteinRda + "g";
    document.getElementById("yourProteinMax").textContent = yourProteinMax + "g";
    document.getElementById("yourCarbsMin").textContent = yourCarbsMin + "g";
    document.getElementById("yourCarbsRda").textContent = yourCarbsRda + "g";
    document.getElementById("yourCarbsMax").textContent = yourCarbsMax + "g";
    document.getElementById("yourFiberMin").textContent = yourFiberMin + "g";
    document.getElementById("yourFiberRda").textContent = yourFiberRda + "g";
    document.getElementById("yourFatMin").textContent = yourFatMin + "g";
    document.getElementById("yourFatRda").textContent = yourFatRda + "g";
    document.getElementById("yourFatMax").textContent = yourFatMax + "g";
    document.getElementById("yourSfaMax").textContent = yourSfaMax + "g";
    document.getElementById("yourPufaMin").textContent = yourPufaMin + "g";
    document.getElementById("yourPufaRda").textContent = yourPufaRda + "g";
    document.getElementById("yourPufaMax").textContent = yourPufaMax + "g";
    document.getElementById("yourn3PufaMin").textContent = yourn3PufaMin + "g";
    document.getElementById("yourn3PufaRda").textContent = yourn3PufaRda + "g";
    document.getElementById("yourn3PufaMax").textContent = yourn3PufaMax + "g";
    document.getElementById("yourn6PufaMin").textContent = yourn6PufaMin + "g";
    document.getElementById("yourn6PufaRda").textContent = yourn6PufaRda + "g";
    document.getElementById("yourn6PufaMax").textContent = yourn6PufaMax + "g";
    document.getElementById("yourMufaMin").textContent = yourMufaMin + "g";
    document.getElementById("yourMufaRda").textContent = yourMufaRda + "g";
    document.getElementById("yourMufaMax").textContent = yourMufaMax + "g";

//end form validation
  } else {
    alert ("More information needed");
  }

//END buttonClick listener function
};

// attach event listener to button
button.addEventListener("click", onButtonClick);
