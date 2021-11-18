function bookSearch() {
    let search = document.getElementById('search').value;
    document.getElementById('results').innerHTML = "";
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search + `&maxResults=10&startIndex=1`,
        dataType: "json",


        success: function (data) {
            console.log(data)

            for (i = 0; i < data.items.length; i++) {
                const urlImg = data.items[i].volumeInfo.imageLinks.thumbnail;
                const urlMore = data.items[i].volumeInfo.previewLink;
                results.innerHTML += "<div class='item'>" + "<h2 class='title'>" + data.items[i].volumeInfo.title + "</h2>" + "<h3 class='bookAuth'>" + `<img class='bookImg' src = ${urlImg}>` + `<a  target="_blank" class='linkBtn' href=${urlMore}>` + 'Read more' + "</a>" + "</div>";

            }
            let wrap = document.querySelector('.btns-pages')
            for (k = 10; k < data.totalItems; k + 10) {
                let Pg = document.createElement('button');
                Pg.style.color = 'blue';
                Pg.style.width = '100px';
                Pg.style.height = '100px';
                Pg.innerHTML = 'wtf';
                wrap.innerHTML = Pg;


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


// pagination-------------------------------------------------------------------------------
// let btnPage2 = document.querySelector('.btn-page-2');
// let btnPage3 = document.querySelector('.btn-page-3');
// function page2() {
//     let search = document.getElementById('search').value;
//     document.getElementById('results').innerHTML = "";
//     $.ajax({
//         url: "https://www.googleapis.com/books/v1/volumes?q=" + search + '&maxResults=10&startIndex=10',
//         dataType: "json",


//         success: function (data) {
//             console.log(data)

//             for (i = 0; i < data.items.length; i++) {
//                 const urlImg = data.items[i].volumeInfo.imageLinks.thumbnail;
//                 const urlMore = data.items[i].volumeInfo.previewLink;
//                 results.innerHTML += "<div class='item'>" + "<h2 class='title'>" + data.items[i].volumeInfo.title + "</h2>" + "<h3 class='bookAuth'>" + `<img class='bookImg' src = ${urlImg}>` + `<a  target="_blank" class='linkBtn' href=${urlMore}>` + 'Read more' + "</a>" + "</div>";

//             }

//         },
//         type: 'GET'
//     });
// }
// function page3() {
//     let search = document.getElementById('search').value;
//     document.getElementById('results').innerHTML = "";
//     $.ajax({
//         url: "https://www.googleapis.com/books/v1/volumes?q=" + search + '&maxResults=10&startIndex=30',
//         dataType: "json",


//         success: function (data) {
//             console.log(data)

//             for (i = 0; i < data.items.length; i++) {
//                 const urlImg = data.items[i].volumeInfo.imageLinks.thumbnail;
//                 const urlMore = data.items[i].volumeInfo.previewLink;
//                 results.innerHTML += "<div class='item'>" + "<h2 class='title'>" + data.items[i].volumeInfo.title + "</h2>" + "<h3 class='bookAuth'>" + `<img class='bookImg' src = ${urlImg}>` + `<a  target="_blank" class='linkBtn' href=${urlMore}>` + 'Read more' + "</a>" + "</div>";

//             }

//         },
//         type: 'GET'
//     });
// }
// btnPage2.addEventListener('click', page2, false);
// btnPage3.addEventListener('click', page3, false);

// pagination-------------------------------------------------------------------------------














