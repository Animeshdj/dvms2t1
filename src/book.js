import { useState } from "react";
import { useFavoriteContext } from "./FavoriteContext";
import { BookSummary } from "./BookSummary";
export const Book = (props) => {
  const { toggleFavorite, favoriteBooks } = useFavoriteContext();
  const [showSummary, setShowSummary] = useState(false);

  const handleToggleFavorite = () => {
    toggleFavorite(props);
  };

  const {
    book_type,
    title,
    authors,
    page_count,
    series_name,
    published_works,
    summary,
  } = props;
  const isFavorite = favoriteBooks.some((book) => book.title === title);

  const handleSummary = () => {
    setShowSummary(!showSummary);
  };

  return (
    <article className="book">
      <img src={published_works[0].cover_art_url} alt="" />
      <div className="title-div" onClick={handleSummary}>
        {title}
      </div>
      <div>By - {authors}</div>
      <div>Genre - {book_type}</div>
      <div>Series - {series_name}</div>
      <div className="page-count">Page count - {page_count}</div>
      <div className="checkbox-container">
        Favorite -
        <input
          type="checkbox"
          className="book-checkbox"
          checked={isFavorite}
          onChange={handleToggleFavorite}
        />
      </div>
      {showSummary && <BookSummary summary={summary} />}
    </article>
  );
};
