#! /usr/bin/env node

import inquirer from "inquirer";

console.log("*** Most Welcome ***");

let myTable = true ;

// Our Full Code Will be in While Loop

while(myTable){

    let myInput = await inquirer.prompt(
        [
            {
                name : "num",
                type : "number",
                message : "Enter Your Number"
            }
        ]
    )
     let myNum = myInput.num ;

    if(myNum){
        console.log(`Here is the Table Of ${myNum}`);

        for(let i = 1 ; i <= 10; i++){
            console.log(`${myNum} X ${i} = ${myNum * i}`);     
        } 
    }else{
        console.log("Please Enter input in Numerical Form");
    }
    
    // Asking User If he Wants tO Print Table Again

    let againPrint = await inquirer.prompt(
        [
            {
                name : "askUsr",
                type : "confirm",
                message : "Do You Want to Print Another Table??",
                default : false
            }
        ]
    );
    if(againPrint.askUsr === false){
        myTable = false ;
        console.log(" \n Thank You For Using This Table Generator Program .. ");
    }
}
