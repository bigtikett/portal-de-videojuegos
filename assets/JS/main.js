document.addEventListener('DOMContentLoaded', (event) => {

    let input = document.querySelector('.search-input')
    let btn_search = document.querySelector('.navbar-button')

    btn_search.addEventListener('click', () => {
        let visible = document.querySelector('.visible')

        if (visible) {
            input.style.width = '0'
            input.classList.remove('visible')

        }else {
            input.style.width = '200px'
            input.classList.add('visible')
        }
        
    })
})