const API_URL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3f74a7f41d3e4dbf6468881437d9c2be&page=1";
const IMG_URL="https://image.tmdb.org/t/p/w500";
const SEARCH_URL="https://api.themoviedb.org/3/search/movie?&api_key=3f74a7f41d3e4dbf6468881437d9c2be&query=";
const movieContainer=document.querySelector(".movie-container");
const input=document.querySelector(".input");
const btn=document.getElementById("search");

// btn.addEventListener('click',()=>{
//    console.log(input.value);
// });

input.addEventListener("input",()=>{
    liveSearch(input.value);
})


async function popularLoad(url){
let getMovie=await fetch(url)
let data=await getMovie.json();
console.log(data.results);

load(data.results);

}

popularLoad(API_URL);

  
const load=(movies)=>{
    movieContainer.innerHTML="";
movies.forEach((movie,index) => {
    // console.log(movie.original_title);
    const card=document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML=` <div class="movie-card">
      <img src=${IMG_URL+movie.poster_path} alt="Movie Poster">
      <div class="movie-details">
        <div class="movie-title">${movie.original_title}</div>
        <div class="movie-info">${movie.release_date}</div>
      </div>
    </div>`

    movieContainer.appendChild(card);
});


}

const liveSearch=async(keyword)=>{
    if(keyword){
const movies= await fetch(SEARCH_URL+keyword); 
const data=await movies.json();
load(data.results);
    }
    else{
       popularLoad(API_URL); 
    }

}