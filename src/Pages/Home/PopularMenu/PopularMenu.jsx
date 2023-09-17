import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import UseMenu from "../../../hooks/UseMenu";
import Button from "../../../Component/Button/Button";
import { Link } from "react-router-dom";

const PopularMenu = () => {

    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <div className="w-11/12 mx-auto mb-20">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            />

            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="pt-8">
                <Link to='/menu' >
                    <Button buttonText="View Full Menu"></Button>
                </Link>
            </div>

        </div>
    );
};

export default PopularMenu;