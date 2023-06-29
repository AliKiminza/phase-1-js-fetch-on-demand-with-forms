const init = () => {
  const inputForm = document.querySelector ("form")
  inputForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    const input = document.querySelector('input#searchByID')

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then (response => response.json())
    .then (data => {
      const tittle = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      tittle.innerText = data.tittle;
      summary.innerText = data.summary;
  
    });

  });


}
document.addEventListener('DOMContentLoaded', init);