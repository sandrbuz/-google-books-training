function bookSearch() {
    var search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    console.log(search);

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search + '&maxResults=10',
        dataType: "json",

        success: function (data) {
            console.log(data)

            for (i = 0; i < data.items.length; i++) {
                const urlImg = data.items[i].volumeInfo.imageLinks.thumbnail;
                const urlMore = data.items[i].volumeInfo.previewLink;
                // results.innerHTML += "<h2 class='title'>" + data.items[i].volumeInfo.title + "</h2>";
                // results.innerHTML += "<h3 class='bookAuth'>" + data.items[i].volumeInfo.authors + "</h3>";
                // results.innerHTML += `<img class='bookImg' src = ${urlImg}>`;
                // results.innerHTML += `<a  target="_blank" class='linkBtn' href=${urlMore}>` + 'Read more' + "</a>";
                results.innerHTML += "<div class='item'>" + "<h2 class='title'>" + data.items[i].volumeInfo.title + "</h2>" + "<h3 class='bookAuth'>" + `<img class='bookImg' src = ${urlImg}>` + `<a  target="_blank" class='linkBtn' href=${urlMore}>` + 'Read more' + "</a>" + "</div>";






            }



            const select = document.querySelector('.sort-select');
            select.addEventListener('change', function () {
                if (select.value == 'pageCount') {
                    const arr1 = data.items
                    function sortByFeedbacks(arr) {
                        const temp = JSON.parse(JSON.stringify(arr));
                        // const temp = arr.slice();
                        // temp[1].id = '01';
                        // console.log(data.items[1]);
                        temp.sort((a, b) => a.volumeInfo.ratingCount > b.volumeInfo.ratingCount ? 1 : -1);
                    }
                    sortByFeedbacks(arr1);

                } else {
                    console.log('err')
                }
            });


        },
        type: 'GET'

    });
}

document.getElementById('button').addEventListener('click', bookSearch, false);



// select.addEventListener('change', function () {
//     if (select.value == 'averageRating') {
//     } else {
//         console.log(select.value)
//     }
// });








// тестовый коммит






