
//Welcom :1ere page
//Home:2eme page
//sectionchoosen: 3eme page



//Selecting HTML Elements:
let welcomePage=document.querySelector(".welcome-page");

let rulesPage=document.querySelector(".rules-page");

let play=document.querySelector(".play");

let rules=document.querySelector(".rules");

let links=document.querySelectorAll(".main-page a");

let sections =document.querySelectorAll("section");

let mainPage=document.getElementsByClassName("main-page ")[0];

let btnBack=document.querySelector(".rules-page input")


//Start Welcom-Page
function fromWelcomToMain(){

    mainPage.classList.add("desactivated");
    rulesPage.classList.add("desactivated");
    
    play.onclick=function(){

        let mainClass=this.getAttribute("href").split("#")[1];

        let main= document.querySelector(`.${mainClass}`);

        main.classList.remove("desactivated");

        welcomePage.classList.add("desactivated");

    }

}

 fromWelcomToMain();

 function fromMainToWelcom(){
    let arrowBack=document.querySelector(".main-page .header i");
    arrowBack.onclick=function(){
        mainPage.classList.add("desactivated");
        welcomePage.classList.remove("desactivated");
    }
 }

 fromMainToWelcom();





 function FromWelcomToRules(){

    mainPage.classList.add("desactivated");

    rules.onclick=function(){

        let rulesClass=this.getAttribute("href").split("#")[1];
        
        let toRules= document.querySelector(`.${rulesClass}`);

        toRules.classList.remove("desactivated");

        welcomePage.classList.add("desactivated");

    }

 }

FromWelcomToRules();
//End Welcom-Page


// Start Rules-page:
function fromRulesPageToWelcom(){
    let arrow=document.querySelector(".rules-page i");

    arrow.onclick=function(){

        rulesPage.classList.add("desactivated");

        welcomePage.classList.remove("desactivated");
    }
}

fromRulesPageToWelcom()
// End Rules-page:




// Start Main-Page:
function fromHomeToSectionChosen(){

    for(let i=0;i<sections.length;i++){

        sections[i].classList.add("desactivated");
    }

for(let i=0;i<links.length;i++){

links[i].addEventListener("click",function(){

mainPage.classList.add("desactivated");

let ClassFromHref=links[i].getAttribute("href").split("#")[1];

for(let i=0;i<sections.length;i++){

    if(sections[i].classList.contains(`${ClassFromHref}`)){
    
        sections[i].classList.remove("desactivated");

        let container=document.querySelector(`section.${ClassFromHref} .container`)

        container.style.backgroundColor=`var(--main-color-${ClassFromHref})`;
                
        getDataFromJsonFile(choosingURL(ClassFromHref),ClassFromHref);
    
        fromSectionToHome(ClassFromHref);
        
        //hide final div

        let finalElts =document.querySelectorAll(`.${ClassFromHref} .final .finalElt`);

        finalElts.forEach((elt)=>{
         elt.classList.add("desactivated");
    });
    
    } 
    }

}
)
}
}

fromHomeToSectionChosen();

function choosingURL(ClassFromHref){

let url;


let exitIcon=document.querySelector(`.${ClassFromHref} .exit-button i`);

let heartIcon=document.querySelector(`.${ClassFromHref} .heartCorner i`);

let finalMsgs=document.querySelectorAll(`.${ClassFromHref} .final h2`);


if(ClassFromHref==="sport"){

    url="sport.json";

    exitIcon.style.color="#3b4803 ";
    heartIcon.style.color="#3b4803";

    finalMsgs.forEach((elt)=>{
         elt.style.color="#3b4803";
    })
}

if(ClassFromHref==="travel"){

    url="travel.json";

    exitIcon.style.color="#07495b";
    heartIcon.style.color="#07495b";
    finalMsgs.forEach((elt)=>{
        elt.style.color="#07495b";
   })
}

if(ClassFromHref==="art"){

    url="art.json";
   
    exitIcon.style.color="#8b1f04";
    heartIcon.style.color="#8b1f04";
    finalMsgs.forEach((elt)=>{
        elt.style.color="#8b1f04";
   })
}

if(ClassFromHref==="science"){

    url="science.json";

    exitIcon.style.color="#b36c03";
    heartIcon.style.color="#b36c03";
    finalMsgs.forEach((elt)=>{
        elt.style.color="#b36c03";
   })
}

if(ClassFromHref==="literature"){

    url="literature.json";

    exitIcon.style.color="#6a5e46 ";
    heartIcon.style.color="#6a5e46 ";
    finalMsgs.forEach((elt)=>{
        elt.style.color="#6a5e46";
   })
}

return url;

}

//End Main-Page


// Start Sections:
function fromSectionToHome(ClassFromHref){

    let section=document.getElementById(`${ClassFromHref}`);

    let exitButton=document.querySelector(`.${ClassFromHref} i`);

    exitButton.style.cursor="pointer";

    let MainQuestion=document.querySelector(`.${ClassFromHref} .question`);

    let questionCounter=document.querySelector(`.${ClassFromHref} .question-counter`);
    
    let answers =document.querySelector(`.${ClassFromHref} .answers`);
    
    let bullets=document.querySelector(`.${ClassFromHref} .bullets`);
    
    let btnSubmit=document.querySelector(`.${ClassFromHref} .foot input`);
    
    let nbrCorrectAnswer =document.querySelector(`.${ClassFromHref} .nbr-correct-answer`)
    
    let imgContent=document.querySelector(`.${ClassFromHref} .img-content`)
         
    let finalElts =document.querySelectorAll(`.${ClassFromHref} .final .finalElt`);  

    let audios =document.querySelectorAll(`.${ClassFromHref} .final audio`);

    let listOfAnswers =document.querySelector(`.${ClassFromHref} .listOfAnswers`);


    exitButton.addEventListener("click",function(){
            
           imgContent.innerHTML='';

           MainQuestion.innerHTML='';

           questionCounter.innerHTML='';

           listOfAnswers.innerHTML='';

           bullets.innerHTML='';
           
            counter=0;

           for(let i=0;i<sections.length;i++){

            sections[i].classList.add("desactivated");

            }

    clearInterval(countDownIterval);

    mainPage.classList.remove("desactivated");

    finalElts.forEach((elt)=>{
        elt.classList.add("desactivated");
    });

    audios.forEach((elt)=>{
        elt.classList.add("paused");
        elt.pause();
    });

    })

}



let counter=0;

function getDataFromJsonFile(url,section){

    //Declarations:

    let MainQuestion=document.querySelector(`.${section} .question`);
    
    let questionCounter=document.querySelector(`.${section} .question-counter`);
    
    let answers =document.querySelector(`.${section} .answers`);

    let listOfAnswers =document.querySelector(`.${section} .listOfAnswers`);



    let foot=document.querySelector(`.${section} .foot`);

    let bullets=document.querySelector(`.${section} .bullets`);
    
    let btnSubmit=document.querySelector(`.${section} .foot input`);
    
    let nbrCorrectAnswer =document.querySelector(`.${section} .nbr-correct-answer`)
    
    let imgContent=document.querySelector(`.${section} .img-content`);

    let timer=document.querySelector(`.${section} .time-counter`);

    let heartCorner=document.querySelector(`.${section} .heartCorner`);

    let final=document.querySelector(`.${section} .final `);



    let myRequest=new XMLHttpRequest();

    myRequest.open("GET",`${url}`);
    myRequest.send();

    myRequest.onreadystatechange=function(){
        if(myRequest.status===200 && myRequest.readyState===4){

        let dataArray=JSON.parse(myRequest.responseText);
               
        let dataArrayLength= dataArray.length;

        nbrCorrectAnswer.innerHTML=`${0}`;

        nbrCorrectAnswer.classList.add("nbrCorr");

        timer.classList.add("timer");
        
        hearts=0;

        heartCorner.classList.remove("desactivated");

        foot.classList.remove("desactivated");

        // btnSubmit.classList.remove("desactivated");

        addDataToHTMLPage(dataArray[counter],dataArrayLength,section,MainQuestion,questionCounter,timer,answers,bullets,btnSubmit,nbrCorrectAnswer,imgContent);
            
        chooseAnswer(dataArray[counter],dataArrayLength,btnSubmit,nbrCorrectAnswer);
      
        countDownTimer(dataArray[counter],dataArrayLength,btnSubmit,9,timer);
        
        CreateBullets(section,dataArrayLength,bullets);


            if(counter<dataArrayLength){
            
                btnSubmit.onclick=function(){
            
                counter++;

                imgContent.innerHTML='';
    
                MainQuestion.innerHTML='';
    
                questionCounter.innerHTML='';
    
                listOfAnswers.innerHTML='';
    
                addDataToHTMLPage(dataArray[counter],dataArrayLength,section,MainQuestion,questionCounter,timer,answers,bullets,btnSubmit,nbrCorrectAnswer,imgContent);
           
                chooseAnswer(dataArray[counter],dataArrayLength,btnSubmit,nbrCorrectAnswer);
                
                countDownTimer(dataArray[counter],dataArrayLength,btnSubmit,9,timer);

                handlingBullets(section);    
                
                emptyingLastPage(timer,heartCorner,foot,bullets,btnSubmit,dataArrayLength);

                showingResult(dataArrayLength,section);


            }

        }

        

    
        

      }
     }
    }



function addDataToHTMLPage(obj,dataArrayLength,section,MainQuestion,questionCounter,timer,answers,bullets,btnSubmit,nbrCorrectAnswer,imgContent){

if(counter<dataArrayLength){

//Append Image:
let imageURL=obj.img;

let image=document.createElement("img");

image.src=`${imageURL}`;

imgContent.appendChild(image);

//Append Question:
let qst =obj.question;

MainQuestion.innerHTML=`${qst}`;

//Append Questions-counter:
questionCounter.innerHTML=`question ${counter+1} of ${dataArrayLength}`;


//Append Answers:

let listOfAnswers=document.querySelector(`.${section} .listOfAnswers`);

for(let i=1;i<=4;i++){

    let input =document.createElement("input");

    answerValue=obj[`answer_${i}`];

    input.type="button";

    input.value=`${answerValue}`;

    listOfAnswers.appendChild(input);
}


//Append Initial Apperance of time which is 10
timer.innerHTML="10";

}
}


function CreateBullets(section,dataArrayLength,bullets){
//Append spans To Bullets:
if(counter<dataArrayLength){
for(let i=0;i<dataArrayLength;i++){
    
    let span =document.createElement("span");

    bullets.appendChild(span);

//coloring first element by default from that moment we open the page
    if(i===0){
        let firstSpan=document.querySelector(`.bullets span`);
        firstSpan.classList.add(`${choosingColorForBullets(section)}`);
    }
}
}
}


function emptyingLastPage(timer,heartCorner,foot,bullets,btnSubmit,dataArrayLength){

if(counter===dataArrayLength){

    timer.innerHTML='';

    bullets.innerHTML='';

    // foot.innerHTML='';

    foot.classList.add("desactivated");

    heartCorner.classList.add("desactivated");
    
    // btnSubmit.classList.add("desactivated");

}
}






let hearts=0;


function chooseAnswer(obj,dataArrayLength,btnSubmit,nbrCorrectAnswer){
    //je n'ai pas entrer par answers en parametres

    //explication a cause de sortie je vide les answers recendant pas de inputs inside so il selection celle de setion ouverte

    let answersArray=document.querySelectorAll(".answers input");

    let correctAudio=document.querySelector(".answers .correct-audio");

    let wrongAudio=document.querySelector(".answers .wrong-audio");

        if(counter<dataArrayLength){

            btnSubmit.classList.add("desactivated");

        for(let i=0;i<4;i++){
        
           answersArray[i].onclick=function(){
            
            clearInterval(countDownIterval);
        
            let correctAnswer=obj.right_answer;

            if(this.value===correctAnswer){
                hearts++;
                this.classList.add("correct");
                correctAudio.play();
            }

            else{
                this.classList.add("incorrect")
                wrongAudio.play();
            
            for(let j=0;j<4;j++){
                if(answersArray[j].value===correctAnswer){
                    answersArray[j].classList.add("correct");
                   }    
                  }
                } 

            for(let j=0;j<4;j++){      
                answersArray[j].disabled=true;
             }

            updatingHeartsCounter(hearts,nbrCorrectAnswer);

            btnSubmit.classList.remove("desactivated");
           }
       }

       correctAudio.pause();

       correctAudio.currentTime=0;//to let audio back to time=0; then it begin from 0 next time not pursue the lecture

       wrongAudio.pause();

       wrongAudio.currentTime=0;

    }

}



function updatingHeartsCounter(nbrHearts,nbrCorrectAnswer){
  
    nbrCorrectAnswer.innerHTML=`${nbrHearts}`;


}


let countDownIterval;


function countDownTimer(obj,dataArrayLength,btnSubmit,duration,timer){

let answersArray=document.querySelectorAll(".answers input");

if(counter<dataArrayLength){
  
    let correctAnswer=obj.right_answer;

    countDownIterval=setInterval(function(){
     
     timer.innerHTML=`${duration}`;

     duration--;

    if(duration < 0){
        clearInterval(countDownIterval);

        for(let j=0;j<4;j++){
            if(answersArray[j].value===correctAnswer){
                answersArray[j].classList.add("correct");
                btnSubmit.classList.remove("desactivated");
               }    
              }
             


        for(let j=0;j<4;j++){      
            answersArray[j].disabled=true;
         
        }
    }

    },1000)
}

}

function handlingBullets(section){
        
    let bulletsSpans = document.querySelectorAll(".bullets span");
    let arrayOfSpans = Array.from(bulletsSpans);
    arrayOfSpans.forEach((span, index) => {
      if (counter === index) {
        span.classList.add(`${ choosingColorForBullets(section)}`);

    }
    });

    }

function choosingColorForBullets(section){
    
    let handlingClass;

    if(section==="sport"){

        handlingClass="BulletsForSport";
    }
    
    if(section==="travel"){
    
        handlingClass="BulletsForTravel";

    }
    
    if(section==="art"){
         
        handlingClass="BulletsForArt";
    
    }

    
    if(section==="science"){
    
        handlingClass="BulletsForScience";

    }
    
    if(section==="literature"){

        handlingClass="BulletsForLiterature";
    
    }

    return handlingClass;
}

function gettingResult(dataArrayLength){

    let result;

        if(hearts===dataArrayLength){
            result="win";
        }

        if(hearts===8||hearts===9){

            result="very-good";

        }

        if(hearts===6||hearts===7){

            result="good";

        }

        
        if(hearts===5){

            result="not-bad";

        }

        if(hearts<5){

            result="next-time";

        }

        return result;

}


function showingResult(dataArrayLength,section){
    
    if(counter===dataArrayLength){

    let resultClass=gettingResult(dataArrayLength);

    let resultElement=document.querySelector(`.${section} .final .${resultClass}`);

    let scoreDiv=document.querySelector(`.${section} .final .${resultClass} .score`);

    scoreDiv.innerHTML=`You Answered ${hearts} From ${dataArrayLength}`;

    resultElement.classList.remove("desactivated");

    let resultElementAudio=document.querySelector(`.${section} .final .${resultClass} audio`);

    resultElementAudio.play();
}

}


// End Sections
