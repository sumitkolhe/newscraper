const API = "https://newsripper.herokuapp.com/news?category=";

new Vue({
  el: "#app",
  data: {
    drawer: null,
    searchterm: "bitcoin",
    items: [
      { id: 0, name: `Top Headlines`, news: [] },
      { id: 1, name: `National`, news: [] },
      { id: 2, name: `World`, news: [] },
      { id: 3, name: `Business`, news: [] },
      { id: 4, name: `Science`, news: [] },
      { id: 5, name: `Sports`, news: [] },
      { id: 6, name: `Technology`, news: [] },
      { id: 7, name: `Startup`, news: [] },
      { id: 8, name: `Science`, news: [] },
      { id: 9, name: `Politics`, news: [] },
      { id: 10, name: `Automobile`, news: [] },
      { id: 11, name: `Entertainment`, news: [] },
    ],

    getNews: [],
    active: 0,
    loading:true
  },

  methods: {
    selectNews(i) {
      this.active = i;
      this.getNews = this.items[i].news;
      
    },

    formatDate(date) {
      var fields = date.split(',');
      var maindate = fields[0];
      const buildDate = new Date(maindate);
      return buildDate.toLocaleDateString("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
  },

  created() {
    
    fetch(API + "all")
      .then((res) => res.json())
      .then((res) => {
        this.items[0].news = res.data;
        this.getNews = this.items[0].news;
      })
      .catch((err) => console.log(err))
      .finally(() => (this.loading = false))
      
    
    fetch(API + "national")
      .then((res) => res.json())
      .then((res) => {
        this.items[1].news = res.data;
        this.getNews = this.items[1].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "world")
      .then((res) => res.json())
      .then((res) => {
        this.items[2].news = res.data;
        this.getNews = this.items[2].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "business")
      .then((res) => res.json())
      .then((res) => {
        this.items[3].news = res.data;
        this.getNews = this.items[3].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "science")
      .then((res) => res.json())
      .then((res) => {
        this.items[4].news = res.data;
        this.getNews = this.items[4].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "sports")
      .then((res) => res.json())
      .then((res) => {
        this.items[5].news = res.data;
        this.getNews = this.items[5].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "technology")
      .then((res) => res.json())
      .then((res) => {
        this.items[6].news = res.data;
        this.getNews = this.items[6].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "startup")
      .then((res) => res.json())
      .then((res) => {
        this.items[7].news = res.data;
        this.getNews = this.items[7].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "science")
      .then((res) => res.json())
      .then((res) => {
        this.items[8].news = res.data;
        this.getNews = this.items[8].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "politics")
      .then((res) => res.json())
      .then((res) => {
        this.items[9].news = res.data;
        this.getNews = this.items[9].news;
      })
      .catch((err) => console.log(err));

    fetch(API + "automobile")
      .then((res) => res.json())
      .then((res) => {
        this.items[10].news = res.data;
        this.getNews = this.items[10].news;
        console.log(this.items[10].news);
      })
      .catch((err) => console.log(err));

    fetch(API + "entertainment")
      .then((res) => res.json())
      .then((res) => {
        this.items[11].news = res.data;
        this.getNews = this.items[11].news;
      })
      .catch((err) => console.log(err));

     
  },
});
