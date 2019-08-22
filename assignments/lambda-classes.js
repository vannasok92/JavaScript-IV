// CODE here for your Lambda Classes
class Person{
    constructor(perosnAttr){
        this.newName = perosnAttr.name;
        this.newLocation = perosnAttr.location;
    }//constructor
    speak(){
        return`Hello my name is ${this.newName}, 
        i am from ${this.newLocation}.`;
    }//speak
}//person class

class Instructors extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.newSpacialty = instructorAttr.specialty;
        this.favLang = instructorAttr.favLanguage;
        this.newCatchPhrase = instructorAttr.catchPhrase;
    }//constructor
    demo(subject){
        this.newSub = subject; //////////////////////////////////
        return `Today we are learning about ${this.newSub}`;
    }//demo
    grade(){
        return `${this.newName} receives a perfect score on ${this.newSub}`;
    }//grade
}//Instructors class

class Student extends Person{
    constructor(studAttr){
        super(studAttr);
        this.lastBG = studAttr.previousBackground;
        this.classname = studAttr.className;
        this.favSub = studAttr.favSubject; //array
    }//constructor
    listsSubjects(){
        
        this.favSub.forEach(favSubject => console.log(favSubject));
        
    }//list sub
    PRAssignment(){
        return `${this.newName} has submitted a PR for ${this.newSub}.`;
    }//pr assignment
    sprintChallenge(){
        return `${this.newName} has begun sprint challenge on ${this.newSub}.`;
    }//sprint challenge
}//student class

class ProjectManager extends Instructors{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
        this.channel = pmAttr.channel;
    }
    standup(){
        return `${this.gradClassName} announces to ${this.channel}, @channel standy times!.`;
    }
    debugsCode(){
        returm `${this.gradClassName} debugs ${this.newName}'s code on ${this.newSub}.`;
    }
}// pm class

// person :
const personOne = new Person({
    name: 'Sam',
    location: 'Los Angeles',
});
const personTwo = new Person({
    name: 'Shang',
    location: 'Lakewood',
});

// instructors
const anson = new Instructors({
    name: 'Anson',
    location: 'LA',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `everything`,
  });
const fred = new Instructors({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'Java',
    specialty: 'back-end',
    catchPhrase: `Don't forget the homies`
});

//students
const studentOne = new Student({
    name: 'student one',
    previousBackground: 'web design',
    className: 'web 23',
    favSub: ['HTML','CSS', 'JS'], 
});

//PM 
const tlOne = new ProjectManager({
    name: 'TL 1',
    gradClassName: 'web 23',
    favInstructor: 'Anson',
    channel: 'web23_help',

});
const tlTwo = new ProjectManager({
    name: 'TL 2',
    gradClassName: 'web 23',
    favInstructor: 'Fred',
    channel: 'web23_ah',
});

console.log(personOne.speak());
console.log(anson.demo("javascript 4"));
//console.log(studentOne.listsSubjects()); //////////
console.log(studentOne.PRAssignment());
console.log(tlOne.standup());
//console.log(tlTwo.debugsCode()); /////////