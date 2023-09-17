
const MenuItems = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div>
            <div className="flex gap-6 md:mb-0 mb-8">
                <img className="w-[100px]  rounded-tr-3xl rounded-bl-3xl " src={image} alt="" />
                <div>
                    <div className="flex justify-between ">
                        <h4 className="uppercase font-semibold">{name}  _______________</h4>
                        <p className="text-yellow-600">${price}</p>
                    </div>
                    <p className="opacity-80">{recipe}</p>

                </div>
                    
            </div>
            
        </div>
    );
};

export default MenuItems;