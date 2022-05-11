//Datlon Russell
// Fri Aprl 14th
// vue movies 

// creat component with movie object propr
Vue.component('movie',{
    props: {movie: Object},
    template: 
    `<div class="card" style="width: 18rem;">
        <img v-bind:src= "'https://image.tmdb.org/t/p/w185' + movie.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <h4>{{movie.original_title}}</h4>
            <p class="card-text">{{movie.overview}}</p>
        </div>
    </div>`
    /*`<div>
    <h4>{{movie.original_title}}</h4> 
    <p>{{movie.overview}}</p> 
    <img v-bind:src= "'https://image.tmdb.org/t/p/w185' + movie.poster_path">
    </div>`*/
})

// creat new Vue instince
const app= new Vue({
    el: "#app",
    data: {
        // message
        message: "upcoming movies",

        // properites
        recmovie:    
        { },
        
        // properties
        movies: [],
    },
    // mounted function to fill properties
    mounted: function () {
        this.$nextTick(function () {
          this.useAPI();
        })
      },
    methods:{
        
        // api get
        useAPI(){
            axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=7c0def495914433614f8c6b1889d9136&language=en-US&page=1")
            .then((response) => {

                console.log(response);
                this.movies = response.data.results;
                console.log(this.movies);
            })
        },

        // change recomeded movie 
        changrec() {
            document.getElementById("recmovie").style.display = "inline";
            i = Math.floor(Math.random() * 20);
            this.recmovie = this.movies[i];
        }
    }

        

})