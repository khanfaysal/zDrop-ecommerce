const Star = () => {
    const RatingData = [
        {id:1,name: "★★★★★"},
        {id:2,name: "★★★★★"},
        {id:3,name: "★★★"},
        {id:4,name: "★★"},
        {id:5,name: "★"}
    ]
    return (
        <div className="rating">
            <p className="aside-category-heading">Star</p>
            {
                RatingData.map((singleRatingData) => {
                    return (
                        <div className="rating-wrapper" key={singleRatingData.id}>
                            <div className="rating-wrapper-inner">
                                <input type="radio" name="rating" />
                                <p className="rating-option" style={{color: "#00b55b"}}>{singleRatingData.name}</p>
                            </div>
                        </div>
                    )
                })
            }    
        </div>
    );
};

export default Star;
