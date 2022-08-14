"use strict";

//ՎԱՐԺՈՒԹՅՈՒՆՆԵՐ

// 1․ ստեղծեք ֆունկցիա, որը կկարողանա գտնել եռանկյունու մակերեսը, և հաշվարկել 
// կողմերի երկարությունը որը պետք է հավասար լինի 5ի, 6ի և 7

function calculateТriangleАrea(a, b, c) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
//console.log(calculateТriangleАrea(5, 6, 7));




// 2․ ստեղծեք ֆունկցիա, որը պատահականության սկզբունքով կգեներացնի 1 – 10 թվերը, 
// և յուզեռին կասի, որպեսզի յուզեռը գուշակի ֆունկցիայի կողմից գեներացված թիվը, 
// բացի դա պետք է ունենաք երկու փոփոխական, առաջինում պետք է գրեք թե քանի անգամ է 
// յուզեռը ճիշտ պատասխանել, իսկ երկրորդում թե քանի անգամ է սխալ պատասխանել 

function guessNumber() {
    let answer = "";
    let rightAnswers = 0;
    let wrongAnswers = 0;
    while (answer !== "exit") {
        const num = Math.floor((Math.random() * 10) + 1);
        answer = prompt("Dear user please guess the number, or enter 'exit' to end the game");  
        if (num == answer) {
          rightAnswers++;
        } else {
          wrongAnswers++;
        }
        console.log(`Dear user you have ${rightAnswers} right answers / ${wrongAnswers} wrong answers`);
    }
};
//guessNumber();




// 3․ ստեղծեք ֆունկցիա, որը երկու կաշխատի այնպես, որ սթրինգի ամեն նոր բառի առաջին տառը սկսվի մեծատառով

function toUpperFirstLetters(str) {
    //variant 1
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1).toLowerCase();
    }
    str = arr.join(" ");    
    return str;

    //variant 2
    /* return str.split(" ").map(function(c) {
        return c.substring(0, 1).toUpperCase() + c.substring(1).toLowerCase();
    }).join(" "); */
}
//console.log(toUpperFirstLetters("thE capItal city oF armeniA iS YereVan"));




// 4․ ստեղծեք ֆունկցիա, որը կկարողանա հասկանալ Հայերեն այբուբենը, ու նախադասությունների 
// մեջից կառանձնացի ձայնավոր տառերը

function getVowells(str) {
    const armenianAlphabet = ["ա", "բ", "գ", "դ", "ե", "զ", "է", "ը", "թ", "ժ", "ի", "լ", "խ", "ծ", "կ", "հ", "ձ", "ղ", "ճ", "մ", "յ", "ն", "շ", "ո", "չ", "պ", "ջ", "ռ", "ս", "վ", "տ", "ր", "ց", "ւ", "փ", "ք", "և", "օ", "ֆ"];
    const armVowelLetters = ["ա", "է", "ե", "ը", "ի", "օ", "ո", "ւ"];
    let textVowels = armVowelLetters.join("");
    let vowels = [];
    let lowerStr = str.toLowerCase();

    for(let i = 0; i < lowerStr.length; i++) {
        if((textVowels.search(lowerStr[i]) !== -1 && lowerStr.substring(i+1, i+2) !== "ւ")) {
            lowerStr[i] === "ւ" ? vowels.push("ու") : vowels.push(lowerStr[i]);
        }      
    }    
    return vowels;
}
//console.log(getVowells("Ճանաչել Զիմաստություն և Զխրատ, Իմանալ Զբանս Հանճարոյ"));




// 5․ ստեղծեք ֆունկցիա, որը որպես արգումենտ կստանա զանգված, ու կստուգի զանգվածի բոլոր այթմները, 
// ստեգուլ բացի նա պետք է ֆիլտրի ամեն ինչ և թողնի միայն դրական թվերը, ու եթե դրական թվերը կրկնվեն, 
//ապա գումարի իրար հետո ջնջի, կրկնողվերը ու որպես նոր արժեք դնի զանգվածի ամենավերջին

function changeArray(array) {
    let a = [];
    let sum = 0;
    let forPush = [];
    let count = 1;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            a.push(array[i]);
        }
    }    
    for (let i = 0; i < a.length-1; i++) {    
        let del ;    
        for (let j = i+1; j < a.length; j++) {
            if(a[i] === a[j]) {
                count++;
                del = i;
                a.splice(j, 1); 
                j--;
            }            
        }            
        if(count > 1) {
            sum = a[i] * count;
            forPush.push(sum);
            if(del !== undefined) {
                a.splice(del, 1);
                i--;
            }            
            sum = 0;
            count = 1;
        }
    }
    const res = [...a, ...forPush];
    return res;
}
//console.log(changeArray([-7, 1, 3, -2, 8, 1, -6, 61, -5, 99, 1, 8, 1, 8, 1]));




// 6․ ստեղծեք ֆունկցիա, որը պետք ա ստանա 2 արգումենտ, առաջինը սթրինգ, իսկ երկրորդը չափման միավոր, 
//ու էդ ֆունկցիան ցանկացած տողի վրա օգտագործելով պետք ա տառերը կտրվեն ու վերադարձնի միայն թիվը, 
//օրինակ “sadsaddsa156pxsadsd” պետք է վերադարձնի միայն 156 ու վերջից ավելացնի չափման միավորը

function splitNumber(str, unit) {
    let res = "";
    str.split("").forEach(function(item) {
        if(!isNaN(item)) {
            res += item;
        }
    });    
    return res += unit;
}
//console.log(splitNumber("sadsaddsa156pxsadsd", "kg"));




// ՈՉ ՊԱՐՏԱԴԻՐ, ԲԱՐԴ
// 7․  ստեղծեք ֆունկցիա, որը որպես արգումենտ կստանա ինչ-որ տառեր, ու էդ տառերով ռանդոմ կերպով ձեզ 
// կվերադարձնի բառեր (ցանկացած լեզվով)

function randomWords(str) {
    let randomText = "";
    let randWords = [];
    let result = [];
    //let counter = 0;
    const readyWords = ["name", "me", "face", "camel", "leaf", "clean", "neck", "fake", "man", "all", "knee",
    "mane", "lake", "fee", "male", "lane", "came", "cake", "fale", "fall", "calk", "ace", "ecma", "am", "lama",
    "lana", "female", "fema", "fence", "fennel", "feel", "fear", "fan", "far", "fair", "fame","fact", "amen", "ankle", 
    "mean", "make", "mall"];

    while(result.length < 3) {
        const countOfRandomWords = 20;
        for(let i = 0; i < countOfRandomWords; i++) { 
            let wordLength = Math.floor((Math.random() * 5) + 2);
            for(let k = 0; k < wordLength; k++) {        
                randomText += str[Math.floor((Math.random() * str.length))];
            }
            randWords.push(randomText);
            randomText = "";
        }

        for(let i = 0; i < randWords.length; i++) {
            for(let j = 0; j < readyWords.length; j++) {
                if(randWords[i] === readyWords[j]) {
                    result.push(randWords[i]);
                }            
            }            
        }
        //console.log(counter++);
    }    
    console.log(randWords);
    return result;
}
//console.log(randomWords(["n", "a", "m", "e", "c", "l", "f", "k"]));




