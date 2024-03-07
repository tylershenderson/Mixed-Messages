const greeting = [["Hello","Goodbye"],["Aloha","Aloha"],["Bonjour","Au revoir"],["Ciao","Ciao ciao"],["Shalom","Lehitra'ot"],["Howdy","Adios"]];
const punctuation =["," , "." , "." , "!" , "?"]
const action = ["listening to music while working" , "enjoying a cup of coffee and reading" , "taking a break and stretching my legs" , "brainstorming ideas for a new project" , "researching for an upcoming presentation"];
const feeling = ["feeling content and at peace" , "overwhelmed with excitement for the upcoming event" , "experiencing a sense of calm and relaxation" , "feeling a bit anxious about the upcoming deadline" , "filled with joy and gratitude for the blessings in my life"];
const time = ["mid-afternoon, nearing the end of the workday" , "early evening, with the sun beginning to set" , "late at night, well past midnight" , "early morning, just past sunrise" , "currently 3:00 PM in the afternoon"];
const weather = ["clear skies and a gentle breeze" , "hot and humid, with temperatures soaring into the high 90s" , "foggy with limited visibility" , "snowing lightly, and the temperature is below freezing" , "raining heavily with thunderstorms in the area"];


function chooseRandomfromArray(input){
  let index = Math.floor(Math.random() * input.length);
  return input[index];
  }


var choose =  chooseRandomfromArray
let randgreeting = chooseRandomfromArray(greeting)

function createRandomMessage(){
    let randgreeting = chooseRandomfromArray(greeting)
     const message = `${randgreeting[0]}! I'm currently ${chooseRandomfromArray(action)}, and I'm ${chooseRandomfromArray(feeling)}. It's ${chooseRandomfromArray(time)}, and the weather is ${chooseRandomfromArray(weather)}! ${randgreeting[1]}!` 
    //const message = `${choose(greeting)[0]}! I'm currently ${choose(action)}, and I'm ${choose(feeling)}. It's ${choose(time)}, and the weather is ${choose(weather)}! ${choose(greeting)[1]}!`
    return message
}
console.log(createRandomMessage())