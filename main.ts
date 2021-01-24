
// class School{
//     schoolName:string = "";
//     schoolCity:string = "";
//     private schoolId:number = 0;
//     protected amountOfClasses:number = 0;
//     constructor (aSchoolName:string,aSchoolCity:string){
//         this.schoolName = aSchoolName;
//         this.schoolCity = aSchoolCity;
//     }
    
//     setSchoolId(aSchoolId:number){
//         this.schoolId = aSchoolId
//     }
//     getSchoolId(){
//         return this.schoolId
//     }

//     setAmountOfClasses(classesAmount:number){
//         this.amountOfClasses = classesAmount
//     }

//     getAmountOfClasses(){
//         return this.amountOfClasses
//     }
// }

// class Student extends School{
// nameOfStudent:string = "";
// gpaOfStudent:number = 0;
// static studentCounter:number = 0; 
// static gpaOfAllstudents:number = 0;


// constructor(studentName:string,studentGpa:number,aSchoolName:string,aSchoolCity:string){
//     super(aSchoolName,aSchoolCity)
//     this.nameOfStudent = studentName
//     this.gpaOfStudent = studentGpa
//     Student.studentCounter++
//     Student.gpaOfAllstudents += studentGpa
// }
// static calc(){
//     return this.gpaOfAllstudents/this.studentCounter
// }

// }



// let bill = new Student("david",80,"tec","lod")
// let bill1 = new Student("david",100,"tec","lod")

// console.log(Student.studentCounter);
// console.log(Student.gpaOfAllstudents);
// console.log(Student.calc());

// interface ICarDors{
//     color:string;
//     amount:number;
//     higth:number;
// }

// class Car{
//     compeny:string ="";
//     model:number = 0;
//     windows:string ="";
//     dors: ICarDors[] = [];
//     constructor(_compeny:string,_model:number,_windows:string,_dors:ICarDors[]){
//         this.compeny = _compeny
//         this.model = _model
//         this.windows = _windows
//         this.dors = _dors

//     }
// }

// Exercise: Longest Word
// Have the function findInSentence(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length. 

// Examples
// 	Input: "fun time"
// 	Output: "time"
	
// 	Input: "I love dogs"
// 	Output: "love"
// return param1.split(" ").sort(function(a, b){return b.length - a.length})[0];  


// function senLength(param1:string):string{
//   let splitWords:string[] = param1.split(" ");
//   let biggerWord:string = "";

// for (let words of splitWords) {
    
//     if (words.length > biggerWord.length)
//         biggerWord = words; 
     
    
//     }
//     return biggerWord;
// }


// senLength("fun time")
// senLength("I love dogs")

// Next: pass another parameter to findInSentence named wordSelector
// wordSelector is a reference to a function has two argumets (word1, word2) and returns a boolean
// 	Returns true if selecting the first word, false if selecting the secod word

function findInSentence(sen: string, whatToFind: (w1: number, w2: number)=> boolean): string {
    let wordsArray: string[] = sen.split(" ");
    console.log(wordsArray);
    let maxLengthWord: string = wordsArray[0];
    for (let i: number = 1; i < wordsArray.length; i++) {
      if (whatToFind(wordsArray[i].length, maxLengthWord.length)) {
        maxLengthWord = wordsArray[i];
      }
    }
    return maxLengthWord;
  }
  let howToFindBiggest = (w1: number, w2: number): boolean => {
    return w1 > w2;
  };
  let howToFindSmallest = (w1: number, w2: number): boolean => {
    return w1 < w2;
  };
  console.log(findInSentence("i love dogs", howToFindBiggest));
//  -------------------------------------------------------- 


interface IRemoteControl {
  isOn: boolean,
  temprature: number;
  power: (isOn: boolean) => void; 
  setTemparure: (temp: number) => void;
  manufacturer: string;
}


class BaseAirCondition {
  engine: string;
  fan: number;
  manufacturer: string

  constructor(arg1) {
    this.manufacturer = arg1;
  }
}

class LG extends BaseAirCondition implements IRemoteControl {
  isOn: boolean;
  temprature: number;
  power: (isOn: boolean) => void;
  setTemparure: (temp: number) => void;

  constructor() {
    super("LG AirCondition");
  }
}

class Tadiran extends BaseAirCondition implements IRemoteControl{
  isOn: boolean = false;
  temprature: number;
  power: (isOn: boolean) => void;
  setTemparure: (temp: number) => void;

  constructor() {
    super("Tadiran AirCondition");
  }
}

class RemoteControl {
  airCondition: IRemoteControl;
  pair(ac: IRemoteControl): void {
    this.airCondition = ac;
  }

  printManufacturer() {
    console.log(this.airCondition.manufacturer);
  }
}

let remoteControl = new RemoteControl();
let airCondition = new LG();
//let airCondition = new Tadiran();

remoteControl.pair(airCondition);
remoteControl.printManufacturer();
