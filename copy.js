function bookSearch() {
    var search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    console.log(search);




    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search + '&maxResults=20&startIndex=1',
        dataType: "json",

        success: function (data) {
            console.log(data)


            for (i = 0; i < data.items.length; i++) {
                const urlImg = data.items[i].volumeInfo.imageLinks.thumbnail;
                const urlMore = data.items[i].volumeInfo.previewLink;
                results.innerHTML += "<div class='item'>" + "<h2 class='title'>" + data.items[i].volumeInfo.title + "</h2>" + "<h3 class='bookAuth'>" + `<img class='bookImg' src = ${urlImg}>` + `<a  target="_blank" class='linkBtn' href=${urlMore}>` + 'Read more' + "</a>" + "</div>";

            }

            // ---------------------------------------------------------------------------sort

            const select = document.querySelector('.sort-select');
            select.addEventListener('change', function () {
                if (select.value == 'pageCount') {
                    const arrItems = data.items;
                    // function sortByFeedbacks(arr) {
                    // const temp = JSON.parse(JSON.stringify(arr));
                    // const temp = arr.slice();
                    // temp[1].id = '01';
                    // console.log(data.items[1]);
                    arrItems.sort((a, b) => a.volumeInfo.pageCount - b.volumeInfo.pageCount);
                    document.getElementById('results').innerHTML = "";
                    for (i = 0; i < arrItems.length; i++) {
                        const urlImg = arrItems[i].volumeInfo.imageLinks.thumbnail;
                        const urlMore = arrItems[i].volumeInfo.previewLink;
                        results.innerHTML += "<div class='item'>" + "<h2 class='title'>" + arrItems[i].volumeInfo.title + "</h2>" + "<h3 class='bookAuth'>" + `<img class='bookImg' src = ${urlImg}>` + `<a  target="_blank" class='linkBtn' href=${urlMore}>` + 'Read more' + "</a>" + "</div>";

                    }

                    console.log(arrItems);
                    // }
                    // sortByFeedbacks(arr1);


                } else {
                    console.log('err')
                }
            });

            // ---------------------------------------------------------------------------sort


        },

        type: 'GET'

    });

}


document.getElementById('button').addEventListener('click', bookSearch, false);


// document.querySelector('.btn-page-2').addEventListener('click', page2, false)

// select.addEventListener('change', function () {
//     if (select.value == 'averageRating') {
//     } else {
//         console.log(select.value)
//     }
// });



// ------------------------------------------------------debounce/throttle

const debounce = (callback, timer) => {
    let timeoutFlag = null;

    return (...args) => {
        if (timeoutFlag) {
            clearTimeout(timeoutFlag);
        }
        timeoutFlag = setTimeout(() => {
            timeoutFlag = null;
            callback(...args);
        }, timer);
    }
}

bookSearch();




const Bs = debounce(bookSearch, 5000);


document.querySelector('#search-button').addEventListener('click', bookSearch, false);

search.onkeypress = function (event) {
    if (event.key == "Enter") {
        Bs();

    }
};












