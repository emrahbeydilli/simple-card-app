import './App.css';
import Card from './components/card/card';
import { cards } from "./database/db";

function App() {
  // App componentine özgü matematiksel ve mantıksal işlemler

  
  // App componentin döndürdüğü kullanıcı arayüzü (UI)
  return (
    <div className='container'>
      {
        cards.map((card)=> <Card key={card.id} card={card}/>)
      }
    </div>
  );
}

export default App;
