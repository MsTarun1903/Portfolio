const infoBox = document.getElementById("Transition-box");
const colors = ["#3D30A2","#B15EFF","#FFA33C","#FFFB73","#80B3FF","#F99417"];
const skills = ["🖥️Programming","🧑🏼‍🎓Engineerning Student","🏏Cricket","📱Mobile Gamer","🎧Music","🦾Team Player"];

// This will print the skills array to the console

setInterval(()=>{
  const randomBoxColor = colors[Math.floor(Math.random() * colors.length)];
  infoBox.style.backgroundColor = randomBoxColor;
},3000)

setInterval(()=>{
  const randomText = skills[Math.floor(Math.random()* skills.length)];
  infoBox.innerHTML = `<span class="animated-text">${randomText}</span>`; 
},3000)

const techStack = document.getElementById("tech");
const technologies = ["JS","REACT","MONGO","SQL","GIT","PYTHON","TS"];
const techColors = ["yellow","Blue","Green","red","orange","Yellow","aqua"];
setInterval(()=>{
  const randomIndex = Math.floor(Math.random() * technologies.length);
  const randomTech = technologies[randomIndex];
  const randomColor = techColors[randomIndex];
  techStack.innerHTML = `<span class="tech-animation" style="color: ${randomColor};">${randomTech}</span>`;  
},2000)