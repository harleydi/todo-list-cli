const prompt = require('prompt-sync')({sigint: true})


let list = []
let input = ''
let status = false
// let name = prompt('name > ')

/* -------------------------------- MAIN MENU ------------------------------- */

console.log(`\n ~ Welcome! ~`)
console.log('\n==============================================\n')



function promptUser() {
    if (list.length === 0) {
        console.log(`Your to-do list is empty.\n`)
        console.log('\n ~ Make a Selection ~')
        console.log('\n[1] Create a to-do item')
        console.log('[2] Complete to-do item')
        console.log('[3] Exit Program')
        input = Number(prompt('> '))
        console.log('\n') 
    } else {
        console.log('\n')
        console.log('\n')
        console.log('============================================== \n')
        console.log(`You have ${list.length} item(s)`)

        for (let i = 0; i < list.length; i++) {
            console.log(`${i+1}. [${list[i][1]}] ${list[i][0]}`)
        }
        console.log('\n')
        console.log('\n ~ Make a Selection ~')
        console.log('\n[1] Create a to-do item')
        console.log('[2] Complete to-do item')
        console.log('[3] Exit Program')
        input = Number(prompt('> '))

        console.log('\n')
    }
    
}

promptUser()

while (input !== 3) {
    if (input === 1) {
        console.log('~ Add to-do ~')
        let todo = prompt('> ')
        list.push([todo, 'incomplete'])
    } else if (input === 2) {
        console.log('Select to-do to complete')
        let x = Number(prompt('> '))
        list[x-1][1] = 'complete'
        console.log(list)
    } else {
        console.log('[[ ~ INVALID CHOICE ~ ]]\n')
        console.log('============================================== \n')

    }
    promptUser()
}

// console.log(list)

console.log('Exiting Program! Hope to see you soon!')