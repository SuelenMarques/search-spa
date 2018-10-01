page('/', index);
// page('/pesquisa', pesquisa);
// page('/loading', loading);
// page('/exibePosts', exibePosts);
page();

function index() {
  $("#exibe-busca").html(showIndex());
}
