const getSleepHours = day => {
  if (day === 'monday') {
    return 6;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 6;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 11;
  } else if (day === 'sunday') {
    return 10;
	} else {
    return "Error!"
  }
};

const getActualSleepHours = () => 7 + 6 + 7 + 9 + 5 + 6 + 11;

const getIdealSleepHours = idealHours => idealHours * 7;

const  calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); 
  
  if (actualSleepHours === idealSleepHours) { console.log("You've hit your target sleep hours of " + (idealSleepHours) + " Hours! Good Job!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You've overslept " + (actualSleepHours - idealSleepHours) + ", do you have a headache?");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("How are you not dead? You should get more sleep. You are getting: " + (idealSleepHours - actualSleepHours) + " hours too little sleep, go get some rest");
  }
}
   console.log(calculateSleepDebt())   
//console.log(getIdealSleepHours())
//console.log(getActualSleepHours())