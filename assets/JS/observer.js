document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visibler')
            }
        })
    }, { threshold: 1})

    document.querySelectorAll('#social .row').forEach(row => {
        observer.observe(row)
    })
})