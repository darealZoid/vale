const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2) 
        if (entry2.isIntersecting) {
            entry2.target.classList.add('show2');
        } else {
            entry2.target.classList.remove('show2');
        }
    });
});
