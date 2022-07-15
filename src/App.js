import './App.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Card from './components/Card';
import data from './Data';
function App() {
  const cards = data.map(
    (item)=>{
      return <Card 
         key={item.id}
         img={item.coverImg}
         title={item.title}
         price={item.price}
         rating={item.stats.rating}
         reviewCount={item.stats.reviewCount}
         country={item.location}
         openSpots={item.openSpots}
      />
    }
  )
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
}

export default App;

