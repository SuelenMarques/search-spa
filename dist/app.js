$(document).ready(() => {
 const btnBusca = document.getElementById('btn-busca');
 btnBusca.addEventListener('click', trazBusca);
});


let docs = [];

function buscaPalavra() {
 return document.getElementById('campo-busca').value;
}

function erro() {
 console.log('erro');
}

function trazBusca(event) {
 event.preventDefault();

 const url =
 `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaPalavra()}&api-key=ef59206ddbcd4e36bd8ecc49f6751e9a`;

 $.ajax({
   type: 'GET',
   url,
   success: carregaPosts,
   error: erro
 })
}

function carregaPosts(data) {
 docs = data.response.docs;
 exibePosts();
}


function exibePosts() {
  loading();
 let exibeBusca = document.getElementById('exibe-busca');
 exibeBusca.innerHTML = `
 <div class="area-noticia">${docs.map(doc => `
   <div class="noticia">
     <h3>${doc.headline.main}</h3>
     <p>${doc.snippet}</p>
   </div>
   `).join('')}
 </div>`;
}


// gif de carregamento
function loading() {
   let exibeLoading = document.getElementById('exibe-busca');
 exibeLoading.innerHTML = `
    <div class="loading-screen d-flex align-items-center justify-content-center">
      <img class="img-loading" src="./dist/img/loading.gif">
    </div>
  `
}


function showIndex() {
  let exibeIndex = document.getElementById('exibe-busca');
 exibeIndex.innerHTML =`
    <div class="index-content d-flex justify-content-around align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block " src="./dist/img/cj-nyc-hero-1.jpg" alt="First slide">
            <a href='/pesquisa'>
          </div>
      </div>
    </div>
  `
}

