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
        console.log('[2] Complete/Incomplete to-do item')
        console.log('[3] Edit todo item')
        console.log('[4] Delete todo item')
        console.log('[5] Exit Program')
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
        console.log('[2] Complete/Incomplete to-do item')
        console.log('[3] Edit todo item')
        console.log('[4] Delete todo item')
        console.log('[5] Exit Program')
        input = Number(prompt('> '))

        console.log('\n')
    }
    
}

promptUser()

while (input !== 5) {
    if (input === 1) {
        console.log('~ Add to-do ~')
        let todo = prompt('> ')
        list.push([todo, 'incomplete'])
    } else if (input === 2) {
        console.log('Select to-do to complete/incomplete')
        let x = Number(prompt('> '))
        if (list[x-1][1] === 'incomplete') {
            list[x-1][1] = 'complete'
        } else  {
            list[x-1][1] = 'incomplete'
        }
        console.log(list)
    } else if (input === 3) {
        console.log('Select to-do to edit')
        let x = prompt(`> `)
        console.log('Edit to-do ')
        let todo = prompt('Edit to-do > ')
        list[x-1][0] = todo
    } else if (input === 4) {
        console.log('Select to-do to delete')
        let todo = prompt('> ')
        list.splice(todo-1, 1)
    } else {
        console.log('[[ ~ INVALID CHOICE ~ ]]\n')
        console.log('============================================== \n')

    }
    promptUser()
}

// console.log(list)

console.log('Exiting Program! Hope to see you soon!')