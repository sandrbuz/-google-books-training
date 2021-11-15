function bookSearch() {
    var search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    console.log(search);





    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",


        success: function (data) {

            let itemsCount = data.totalItems;


            for (j = 0; j < 5; j++) {

                $.ajax({
                    url: "https://www.googleapis.com/books/v1/volumes?q=" + search + `&maxResults=40&startIndex=${j}`,
                    dataType: "json",


                    success: function (data) {
                        console.log(data)

                        for (i = 0; i < data.items.length; i++) {
                            const urlImg = data.items[i].volumeInfo.imageLinks.thumbnail;
                            const urlMore = data.items[i].volumeInfo.previewLink;
                            results.innerHTML += "<div class='item'>" + "<h2 class='title'>" + data.items[i].volumeInfo.title + "</h2>" + "<h3 class='bookAuth'>" + `<img class='bookImg' src = ${urlImg}>` + `<a  target="_blank" class='linkBtn' href=${urlMore}>` + 'Read more' + "</a>" + "</div>";

                        }





                    },

                    type: 'GET'

                });

            }




        },

        type: 'GET'

    });


















}
// func bookSearch


document.querySelector('#button').addEventListener('click', bookSearch, false);

search.onkeypress = function (event) {
    if (event.key == "Enter") {
        bookSearch();
    }
};














