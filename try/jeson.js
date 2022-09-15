const loadAllNews = async () => {
      const url = `https://openapi.programming-hero.com/api/news/categories`;
      const res = await fetch(url);
      const data = await res.json();
      setAllNews(data.data.news_category)
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

const displayNewses = (data, name) => {
      const newsContainer = document.getElementById('news-container');
      newsContainer.textContent = '';

      const quantityNewsPortal = document.getElementById('quantity-field')
      quantityNewsPortal.value = data.length;
      quantityNewsPortal.innerHTML = `
            <p>${quantityNewsPortal.value} items Found for this Category ${name}</p>
      `;
}

loadAllNews()