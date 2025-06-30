import Fictiondata  from "../fiction.json"
import BookCard from "./BookCard";
export default function Fiction() {
  return (
    <div>
      <h1>Fictional Books</h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {/* Map all Fictional Books here */}
        { Fictiondata.map( (el,i) => <BookCard  author = { el.author} img ={el.img} title={el.title} year = {el.year} price={el.price}  /> )}
      </div>
    </div>
  );
}

