const loadAllNews = async () => {
      const url = `https://openapi.programming-hero.com/api/news/categories`;
      const res = await fetch(url);
      const data = await res.json();
      setAllNews(data.data.news_category);
      // try {
            
      // }
      // catch{
      //       console.log(error);
      // }
}

const setAllNews = data => {
      // console.log(data)
      const newsMenu = document.getElementById('news-menu');
      for (const news of data) {
            const li = document.createElement('li');

            li.innerHTML = `
            <a onclick = "loadNewses('${news.category_id}')" class = "nav-link href="#">${news.category_name}
            `
            newsMenu.appendChild(li)
      }
}

const loadNewses = async (id, name) => {
      loadingSpinner(true);
      const url = `https://openapi.programming-hero.com/api/news/categories/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      displayNewses(data.data, name)
}

const displayNewses = (data, name) => {
      const newsContainer = document.getElementById('news-container');
      newsContainer.textContent = '';

      const quantityNewsPortal = document.getElementById('quantity-field')
      quantityNewsPortal.value = data.length;
      quantityNewsPortal.innerHTML = `
            <p>${quantityNewsPortal.value} items Found for this Category ${name}</p>
      `;
      //No news found
      const noNews = document.getElementById('no-news-found');
      if (data.length === 0) {
            noNews.classList.remove('d-none');
      }
      else {
            noNews.classList.add('d-none');
      }
      loadingSpinner(false);
      // display news
      data.forEach(news => {
            // console.log(news)
            const newsDiv = document.createElement('div');
            newsDiv.classList.add('card')
            newsDiv.classList.add('mb-3')
            newsDiv.innerHTML = `

            <div class="card" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
      </div>
            `
      })



}

const loadingSpinner = (isLoading) => {
      const spinnerDiv = document.getElementById('spinner');
      if (isLoading === true) {
            spinnerDiv.classList.remove('d-none');

      }
      else {
            spinnerDiv.classList.add('d-none');
      }
}

//load news details






loadAllNews()