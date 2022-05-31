let search = document.getElementById("searchbar")

search.addEventListener("keypress", function(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        let q = search.value;
        window.open('http://google.com/search?q='+q, '_blank')
    }
});
