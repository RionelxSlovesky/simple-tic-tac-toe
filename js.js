console.log('workin')
const check = document.getElementsByClassName('check')
const board = document.getElementById('board')

let count = 0

board.addEventListener('click', event => {

        const p = document.createElement('p')
        if(count%2==0) {
            p.innerText = 'X'
            count++
        }else{
            p.innerText = 'O'
            count++
        }
        
        event.target.innerHTML = ''
        event.target.appendChild(p)

})


