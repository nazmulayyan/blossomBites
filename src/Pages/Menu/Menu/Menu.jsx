import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import CategoryMenu from '../CategoryMenu/CategoryMenu';
const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <div>

                <Helmet>
                    <title>Blossom Bites | Menu</title>
                </Helmet>

                <Cover img={menuImg} title='OUR MENU' description='Would you Like To Try A Dish'></Cover>

                {/* offered items */}
                <SectionTitle
                    subHeading="Don't Miss"
                    heading="TODAY'S OFFER"
                />
                <CategoryMenu items={offered}></CategoryMenu>

                {/* dessert items */}
                <CategoryMenu items={dessert} title='DESSERT' img={desertImg} description='Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette'></CategoryMenu>

                {/* pizza items */}
                <CategoryMenu items={pizza} title='PIZZA' img={pizzaImg} description='Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette'></CategoryMenu>

                {/* salad items */}
                <CategoryMenu items={salad} title='SALAD' img={saladImg} description='Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette'></CategoryMenu>

                {/* soup items */}
                <CategoryMenu items={soup} title='SOUP' img={soupImg} description='Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette'></CategoryMenu>


            </div>

        </div>

    );
};

export default Menu;