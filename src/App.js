import Card from "./components/card/card.component";
import "./App.css";

const cards = [
  {
    id:1,
    heading:"Fotoğrafçılığa Giriş",
    date:"22 Ekim 2024",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkJOjArE1J1SU0l7LxUa7ddUpzZJzYAlh8Q&s",
    text: "Fotoğrafçılık, Kullanılacak düzene göre farklı sistemleri içermekle beraber, görüntü sensörü (fotoğraf makinesi, video kamera vs), film, karanlık oda, lens ve ışık kullanarak, gözle görebildiğimiz cisim ve şekilleri, film ya da dijital ortam üzerine kaydederek görüntü oluşturma işidir. İşlevsel uygulamaları nedeniyle bir zanaat olduğu gibi, estetik yönüyle bir sanat olarak kabul edilir."
  },
  {
    id:2,
    heading:"Android Uygulamalar",
    date:"15 Ekim 2024",
    img: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/HeroHomepage_2880x1200.width-1200.format-webp.webp",
    text: "Fotoğrafçılık, Kullanılacak düzene göre farklı sistemleri içermekle beraber, görüntü sensörü (fotoğraf makinesi, video kamera vs), film, karanlık oda, lens ve ışık kullanarak, gözle görebildiğimiz cisim ve şekilleri, film ya da dijital ortam üzerine kaydederek görüntü oluşturma işidir. İşlevsel uygulamaları nedeniyle bir zanaat olduğu gibi, estetik yönüyle bir sanat olarak kabul edilir."
  },
];

const App = () => {
  return (
    <div className="container">
      {
        cards.map((card) => <Card key={card.id} card ={card}/>)
      }
    </div>
  );
}

export default App;
