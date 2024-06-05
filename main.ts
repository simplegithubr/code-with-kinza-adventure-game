#! /usr/bin/evn node

import inquirer from "inquirer";
class Player{
    name: string
    feul:number = 100
    constructor(name:string){
        this.name = name

    }
    fuelDecrease(){
        let feul = this.feul - 25
        this.feul = feul
     }
     fuelnecrease(){
        this.feul = 100

     }
}

class Opponent{
    name: string
    feul:number = 100
    constructor(name:string){
        this.name = name

    }
    fuelDecrease(){
        let feul = this.feul - 25
        this.feul = feul

    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please Enter your name"
    }
])
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponend",
        choices: ["Skelton", "Alien", "Zombie"]
    }
])
let P1 = new Player (player.name)
let O1 = new Opponent (opponent.select)

do{
    //Skelton
    if(opponent.select === "Skelton"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Potion","Run For your Life.."]
            }
        ])
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.feul}`)
                console.log(`${O1.name} fuel is ${O1.feul}`)
                if(P1.feul <= 0){
                    console.log("You Loose, Better Luck Next Time")
                    process.exit()

                }
            }
            if(num <= 0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.feul}`)
                console.log(`${O1.name} fuel is ${O1.feul}`)
                if(O1.feul <= 0){
                    console.log("You Win")
                    process.exit()
                }
            }

        }
        if(ask.opt == "Drink Potion"){
            P1.fuelnecrease()
            console.log(`You Drink Health Portion your Fuel is ${P1.feul}`)
        }
        if(ask.opt == "Run For your Life.."){
            console.log("You Loose, Better Luck Next Time")
            process.exit()
        }
    }

    //Alien
    if(opponent.select === "Alien"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Potion","Run For your Life.."]
            }
        ])
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.feul}`)
                console.log(`${O1.name} fuel is ${O1.feul}`)
                if(P1.feul <= 0){
                    console.log("You Loose, Better Luck Next Time")
                    process.exit()

                }
            }
            if(num <= 0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.feul}`)
                console.log(`${O1.name} fuel is ${O1.feul}`)
                if(O1.feul <= 0){
                    console.log("You Win")
                    process.exit()
                }
            }

        }
        if(ask.opt == "Drink Potion"){
            P1.fuelnecrease()
            console.log(`You Drink Health Portion your Fuel is ${P1.feul}`)
        }
        if(ask.opt == "Run For your Life.."){
            console.log("You Loose, Better Luck Next Time")
            process.exit()
        }
    }

    //Zombie
    if(opponent.select === "Zombie"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Potion","Run For your Life.."]
            }
        ])
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.feul}`)
                console.log(`${O1.name} fuel is ${O1.feul}`)
                if(P1.feul <= 0){
                    console.log("You Loose, Better Luck Next Time")
                    process.exit()

                }
            }
            if(num <= 0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.feul}`)
                console.log(`${O1.name} fuel is ${O1.feul}`)
                if(O1.feul <= 0){
                    console.log("You Win")
                    process.exit()
                }
            }

        }
        if(ask.opt == "Drink Potion"){
            P1.fuelnecrease()
            console.log(`You Drink Health Portion your Fuel is ${P1.feul}`)
        }
        if(ask.opt == "Run For your Life.."){
            console.log("You Loose, Better Luck Next Time")
            process.exit()
        }
    }
}
while(true)