
// debounce
const debounce = (callback) => {


    return (...args) => {


    }
}




// basic search function
function bookSearch() {
    let wrapPg = document.querySelector('.btns-pages')
    wrapPg.innerHTML = '';
    document.querySelector('#search-button').disabled = true;
    let search = document.getElementById('search').value;


    const select = document.querySelector('.sort-select');
    select.value = 'averageRating';


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




                    // returning the selector to the original volume, when you click on the pagination buttons
                    // const select = document.querySelector('.sort-select');
                    // select.value = 'averageRating';



                    let active = document.querySelector('button.pg-active');
                    if (active != null) {
                        active.classList.remove('pg-active');

                    }

                    this.classList.add('pg-active');

                    let start = (+this.innerHTML - 1) * 10;

                    // hiding unnecessary pagination buttons

                    let PgArr = Array.prototype.slice.call(Pg);
                    let Act = document.querySelector('.pg-active');
                    console.log(Act);
                    console.log(PgArr);

                    let PgNum = +Pg.innerHTML;
                    let actNum = +Act.innerHTML;
                    if (PgNum > actNum) {
                        Pg.classList.add('hide');
                    }

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
                            // ---------------------------------------------------------------------------sort

                            const select = document.querySelector('.sort-select');

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


                            // ---------------------------------------------------------------------------sort

                        },
                        type: 'GET'
                    });


                });
            }



            // --------------------------------btns pagination end
            document.querySelector('#search-button').disabled = false;

        },
        type: 'GET'

    });


}


const Bs = debounce(bookSearch);


document.querySelector('#search-button').addEventListener('click', bookSearch, false);

search.onkeypress = function (event) {
    if (event.key == "Enter") {
        Bs();

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














