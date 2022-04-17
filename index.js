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


Inquirer.prompt([
    {type:"list",
     name: "AddEmployee",
     message: "What kind of employee would you like to add?",
     choices: ["Manager", "Intern", "Engineer"]
    },
]) 





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

function addIntern () {
    Inquirer.prompt([
        {type:"input",
         name: "InternName",
         message: "What is your interns name?",
        },
        { type: "input",
        name: "InternID",
        message: "What is your interns ID?",
        },
        { type: "input",
          name: "InternEmail",
        message: "What is your interns e-mail?",
        },
        {type: "input",
        name: "SchoolName",
        message: "What is your interns school?",
        }
    ]).then(data =>{
        const InternInstance = new Intern (data.InternName, data.InternID, data.InternEmail, data.SchoolName)
        teamMemberArray.push(InternInstance)
        renderCards()
    })
}

function addEngineer () {
    Inquirer.prompt([
        {type:"input",
         name: "EngineerName",
         message: "What is your engineers name?",
        },
        { type: "input",
        name: "EngineerID",
        message: "What is your engineers ID?",
        },
        { type: "input",
          name: "EngineerEmail",
        message: "What is your engineers e-mail?",
        },
        {type: "input",
        name: "GitHub",
        message: "What is your engineers github username??",
        }
    ]).then(data =>{
        const EngineerInstance = new Engineer (data.EngineerName, data.EngineerID, data.EngineerEmail, data.GitHub)
        teamMemberArray.push(EngineerInstance)
        renderCards()
    })
}

function renderCards (){
    Fs.writeFileSync(fileToDist, generateHTML(teamMemberArray), "utf-8")
}

