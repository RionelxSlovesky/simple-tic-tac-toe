console.log('workin')
const check = document.getElementsByClassName('check')
const board = document.getElementById('board')

let count = 0   // for determinging X or O
let val = 0

// assigning value to each check divisions
for(const chk of check) {
    chk.value = val
    val++
}

let player1 = []
let player2 = []

board.addEventListener('click', event => {

        if(event.target.hasChildNodes()) {
            return;
        }

        const p = document.createElement('p')

        if(count%2==0) {
            p.innerText = 'X'
            player1.push(event.target.value)
            count++
        }else{
            p.innerText = 'O'
            player2.push(event.target.value)
            count++
        }
        
        event.target.innerHTML = ''
        event.target.appendChild(p)
        console.log(player1)
        console.log(player2)
        

})




