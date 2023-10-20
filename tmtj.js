let myjokes = [
  "What falls, but never needs a bandage? The rain.",
  "I was going to tell you a joke about boxing but I forgot the punch line.",
  "I'm not a fan of spring cleaning. Let's be honest, I'm not into summer, fall, or winter cleaning either.",
  "Why did the egg hide? It was a little chicken.",
  "What did the dirt say to the rain? If you keep this up, my name will be mud!",
  "Why couldn't the sunflower ride its bike? It lost its petals.",
  "What's an egg's favorite vacation spot? New Yolk City.",
  "I ate a sock yesterday. It was very time-consuming.",
  "What kind of candy do astronauts like? Mars bars.",
  "I wanted to buy some camo pants but couldn't find any.",
  "I ordered a chicken and an egg from Amazon. I'll let you know.",
  "What month is the shortest of the year? May, it only has three letters.",
  "What did the snail who was riding on the turtle's back say? Wheeeee!",
  "I was going to tell a time traveling joke, but you guys didn't like it.",
  "What do you call a lazy kangaroo? A pouch potato.",
  "I used to run a dating service for chickens, but I was struggling to make hens meet.",
  "Why do we tell actors to 'break a leg?' Because every play has a cast.",
  "What does a pig put on dry skin? Oinkment.",
  "What do you call it when a snowman throws a tantrum? A meltdown.",
  "My uncle named his dogs Timex and Rolex. They're his watch dogs.",
  "Did you hear about the guy whose left side was cut off? He's all right now.",
  "How do you open a banana? With a mon-key.",
  "Q. Why did the PowerPoint Presentation cross the road? A. To get to the other slide.",
  "Don't use 'beef stew' as a computer password. It's not stroganoff.",
  "Q. What is the biggest lie in the entire universe? A. 'I have read and agree to the Terms & Conditions.'",
  "Q. What do you call it when you have your mom's mom on speed dial? A. Instagram.",
  "Q. What should you do after your Nintendo game ends in a tie? A. Ask for a Wii-match!",
  "Why are iPhone chargers not called Apple Juice?!",
  "Q. How does a computer get drunk? A. It takes screenshots.",
  "PATIENT: Doctor, I need your help. I'm addicted to checking my Twitter! DOCTOR: I'm so sorry, I don't follow.",
];
len = myjokes.length - 1;
// joke.innerHTML = myjokes[index].joke;
let element = document.getElementById("joke");
function render() {
  let ran = Math.floor(Math.random() * len);
  if (element.innerHTML == `<h3>${myjokes[ran]}</h3>`) {
    render();
    return 1;
  }
  element.innerHTML = "<h3>" + myjokes[ran] + "</h3>";
  return 1;
}
render();
