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
            // --------------------------------btns pagination

            let wrap = document.querySelector('.btns-pages')
            let notesOnPage = 10;
            let countOfItems = Math.ceil(data.totalItems / notesOnPage);

            for (j = 1; j <= countOfItems; j++) {
                let btn = document.createElement('button');
                btn.innerHTML = j;
                wrap.appendChild(btn);
                btn.classList.add('page');
            }
            let Pg = document.querySelectorAll('.page');

            Pg.addEventListener('click', function () {
                let pageNum = +this.innerHTML;
                console.log(pageNum)
            });
            // --------------------------------btns pagination
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














