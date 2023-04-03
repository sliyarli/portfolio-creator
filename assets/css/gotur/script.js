// const accordion = document.getElementsByClassName('accordion')

// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         let panel = this.nextElementSibling

//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + 'px' 
//         }
//     })
// }

const btns = document.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('active');

        if (current.length > 0) {
            current[0].className = current[0].className.replace(' active', '')
        }

        this.className += ' active'
    })
}