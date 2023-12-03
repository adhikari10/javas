const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.querySelector('#query').value;
  const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`);
  const data = await response.json();
  console.log(data);
});
