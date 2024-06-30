import "../PopularMenu/PopularSignMenu.css"


const PopularSignMenu = ({menuItem}) => {

    const {name, image, price,  recipe} = menuItem; 
    
    return (
        <div>
            <div className="popular-single-menu-wrapper">
                <div className="popular-single-row flex justify-between gap-3 items-center">
                    <div className="popular-single-image-block">
                        <img src={image}></img>
                    </div>
                    <div className="popular-single-content">
                        <h3 className="text-3xl">{name} -------------</h3>
                        <p>{recipe}</p>
                    </div>
                    <div className="popular-single-price-block">
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularSignMenu;