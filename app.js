const correctAns = ["A","A","B","A"];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    let score = 0;
    const userAns = [ form.q1.value, form.q2.value, form.q3.value,form.q4.value];

    userAns.forEach((ans,index)=>{
        if(ans ===correctAns[index])
        {
            score += 25;
        }
    });

    //Show Result
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

});
