import blogCards from "../../data/blogCard.json";
import BlogSlider from "./BlogSlider";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-content">
        <p className="blog-heading">LATEST BLOGS</p>
        <p className="blog-paragraph">
          This is a place devoted to giving you deeper insight into the news,
          trends, people and technology behind Bing.
        </p>
      </div>
      <BlogSlider />
      <div className="blog-card-wrapper">
        {
            blogCards.map((blogCard) => {
                const {id,image, cardHeading,cardParagraph} = blogCard;
                return (
                    <div key={id} className="blog-card">
                    <div className="card-icon">
                        <img src={image} alt="product image" />
                    </div>
                    <h2 className="card-heading">{cardHeading}</h2>
                    <p className="card-paragraph">
                      {cardParagraph}
                    </p>
                  </div>
                )
            })
        }
    </div>
    </div>
  );
};

export default Blog;
