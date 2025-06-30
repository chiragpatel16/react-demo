import NonFictiondata from "../nonfiction.json"
import BookCard from "./BookCard";
export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Book</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
         { NonFictiondata.map( (el,i) => <BookCard  author = { el.author} img ={el.img} title={el.title} year = {el.year} price={el.price}  /> )}
      </div>
    </div>
  );
}
