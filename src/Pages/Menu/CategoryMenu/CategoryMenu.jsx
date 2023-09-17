import { Link } from 'react-router-dom';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import Button from '../../../Component/Button/Button';

const CategoryMenu = ({ items, title, img, description}) => {
    return (
        <div className="mb-10">
            {title && <Cover title={title} img={img} description={description}></Cover>}
            <div className="md:grid grid-cols-2 gap-6 w-11/12 mx-auto mt-10">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`} className='flex justify-center mt-10'>
                <Button buttonText="View Full Menu"></Button>
            </Link>
        </div>
    );
};

export default CategoryMenu;