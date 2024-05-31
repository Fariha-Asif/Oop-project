#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright("//////// "), chalk.cyanBright.bold.italic("WELCOME TO OOP PROJECT WITH FARIHA..."), chalk.blueBright("////////"));

class Student {
    name: string
    constructor (n: string){
        this.name = n
    }
}
class Person{
    students: Student[] = []
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()
console.log(chalk.magentaBright(`Welcome Guest!`));
const programStart = async (persons:Person)=>{
    do{
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: chalk.redBright("whome you want to interact with?"),
        choices: ["staff", "student", "Exit"]
    })
    if(ans.select === "staff"){
        console.log(chalk.greenBright("You approach the staff room. Please feel free to ask any question."));
    }else if(ans.select === "student"){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: chalk.redBright("Enter name which student you want to engage with:")
        })
        const student = persons.students.find(val => val.name == ans.student)
        if (!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(chalk.blueBright(`Hello I am ${name.name}. Nice to meet you!`));
            console.log(chalk.greenBright("New student added"));
            console.log(chalk.cyanBright("Current student list:"));
            console.log(persons.students);
        } else {
    console.log(chalk.blueBright(`Hello I am ${student.name}. Nice to see you again!`));
    console.log(chalk.cyanBright("Existing student list:"));
    console.log(persons.students);
    }
} else if (ans.select === "Exit"){
    console.log(chalk.magentaBright("Exiting the program"));   
    process.exit(); 
}
    } while (true);
}
programStart(persons);