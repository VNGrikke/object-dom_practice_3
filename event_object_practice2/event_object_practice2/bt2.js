let searchBar = document.getElementById("searchBar");
let i = 1;
searchBar.onclick = function(){
    i++
    if(i%2===0){
        searchBar.classList.add('width'); 
        searchBar.classList.remove('noWidth');
    }
    else {
        searchBar.classList.add('noWidth');

    }
//    searchBar.classList.toggle('width');
//    searchBar.classList.toggle('noWidth');
    console.log(i);
}
