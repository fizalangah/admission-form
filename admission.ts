import inquirer from "inquirer";
import chalk from "chalk";
let courses:string[] = ["computerCourse","ITCourse","WebdevelopmentCourse"]

async function admissionForm() {
    console.log(chalk.yellow.bold(`online admission form`))
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your full name:',
            validate: (input) => {
                return input !== '' ? true : 'Please enter your name';
            },
        },
        {
            type: 'input',
            name: 'age',
            message: 'Enter your age:',
            validate: (input) => {
                const age = parseInt(input);
                return !isNaN(age) && age >= 0 ? true : 'Please enter a valid age';
            },
        },
        {
            type: 'list',
            name: 'gender',
            message: 'Select your gender:',
            choices: ['Male', 'Female', 'Other'],
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
            validate: (input) => {
                // Very basic email validation
                return /\S+@\S+\.\S+/.test(input) ? true : 'Please enter a valid email address';
            },
        },
        {
            type: 'input',
            name: 'phone',
            message: 'Enter your phone number (optional):',
        },

        {name: "course",
        type: "checkbox",
        message: "chose your course",
        choices: courses,

        }
    ]);

    console.log('\nAdmission Form:');
    console.log('Name:', chalk.blue( answers.name))
    console.log('Age:',chalk.blue( answers.age));
    console.log('Gender:',chalk.blue( answers.gender));
    console.log('Email:', chalk.blue( answers.email));
    if (answers.phone) {
        console.log('Phone:', chalk.blue( answers.phone));
    }
    console.log('course:', chalk.blue(answers.course))
}

admissionForm();

