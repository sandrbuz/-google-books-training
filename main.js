function bookSearch() {
    let wrapPg = document.querySelector('.btns-pages')
    wrapPg.innerHTML = '';
    document.querySelector('#search-button').disabled = true;
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

            // let wrapPg = document.querySelector('.btns-pages')
            let notesOnPage = 10;
            let countOfItems = Math.ceil(data.totalItems / notesOnPage);

            for (j = 1; j <= countOfItems; j++) {
                let btn = document.createElement('button');
                btn.innerHTML = j;
                wrapPg.appendChild(btn);
                btn.classList.add('page');
            }

            let btnFirst = document.querySelectorAll('.page');
            btnFirst[0].classList.add('pg-active');

            let Pg = document.querySelectorAll('.page');
            for (let k = 0; k < Pg.length; k++) {
                Pg[k].addEventListener('click', function () {


                    let active = document.querySelector('button.pg-active');
                    if (active != null) {
                        active.classList.remove('pg-active');

                    }

                    this.classList.add('pg-active');

                    let start = (+this.innerHTML - 1) * 10;

                    let search = document.getElementById('search').value;
                    document.getElementById('results').innerHTML = "";
                    $.ajax({
                        url: "https://www.googleapis.com/books/v1/volumes?q=" + search + `&maxResults=10&startIndex=${start}`,
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


                });
            }



            // --------------------------------btns pagination
            document.querySelector('#search-button').disabled = false;

        },
        type: 'GET'

    });


}
// func bookSearch


document.querySelector('#search-button').addEventListener('click', bookSearch, false);

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














