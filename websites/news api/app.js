$(document).ready(function () {
    var news = $(".news").html();
    $.ajax({
        type: "GET",
        url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ab5902bd7d174272a97d663785f218c8",
        dataType: "JSON",
        success: function (response) {
            response.articles.forEach(element => {
                $(".news").html(news += `
            <div class="card p-3 m-3" style="width: 18rem;">
  <img class="card-img-top" src="${element.urlToImage}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.description}</p>
    <a href="${element.url}" class="btn btn-danger"target="_blank">Read More</a>
  </div>
    </div>
                `);

                console.log(element);
            });
        }
    });
});