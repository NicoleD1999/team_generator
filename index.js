const Engineer = require ('./lib/engineer')
const Intern = require ('./lib/intern')
const Manager = require ('./lib/manager')
const Inquirer = require ('inquirer')
const Fs = require ('fs')
const Path = require ('path')
const generateHTML = require ('./src/generateHTML')

const pathToDist = Path.resolve(__dirname, "dist")
const fileToDist = Path.join(pathToDist, 'index.html')

const teamMemberArray = []
function addManager () {
    Inquirer.prompt([
        {type:"input",
         name: "ManagerName",
         message: "What is your managers name?",
        },
        { type: "input",
        name: "ManagerID",
        message: "What is your managers ID?",
        },
        { type: "input",
          name: "ManagerEmail",
        message: "What is your managers e-mail?",
        },
        {type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        }
    ]).then(data =>{
        const ManagerInstance = new Manager (data.ManagerName, data.ManagerID, data.ManagerEmail, data.officeNumber)
        teamMemberArray.push(ManagerInstance)
        renderCards()
    })
}

function renderCards (){
    Fs.writeFileSync(fileToDist, generateHTML(teamMemberArray), "utf-8")
}

addManager()