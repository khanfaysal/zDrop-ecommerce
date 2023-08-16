
const Filters = () => {
    const filterData = [
        {id:1,name: "Out of Stock", deleteIcon: "remove.png"},
        {id:2,name: "Size: XL", deleteIcon: "remove.png"}
    ]
    return (
        <div className="filter">
            <p className="aside-category-heading">Filters</p>
            {
                filterData.map((singleFilterData) => {
                    return (
                        <div className="filter-wrapper" key={singleFilterData.id}>
                            <div className="filter-wrapper-inner">
                            <p className="filter-option">{singleFilterData.name}</p>
                            <img className="remove-icon" src={singleFilterData.deleteIcon} alt="" />
                            </div>
                        </div>
                    )
                })
            }
         
                <p className="remove-all">Clear all</p>
          
        </div>
    );
};

export default Filters;