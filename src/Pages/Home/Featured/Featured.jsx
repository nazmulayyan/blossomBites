import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='relative'>
            <div className='relative'>
                <img className='bg-cover bg-no-repeat max-h-fit' src={img} alt="" />
                <div className='bg-black opacity-60 absolute top-0 left-0 w-full h-full'></div>
            </div>
            <div className="w-11/12 mx-auto absolute top-0 left-1/2 -translate-x-1/2 text-white ">
                <SectionTitle
                    subHeading="Check it out"
                    heading="FROM OUR MENU"
                />
                <div className='flex items-center gap-6 '>
                    <img className='w-1/2 rounded-sm' src={img} alt="" />
                    <div className='text-white'>
                        <p>March 20, 2023</p>
                        <h4 className='uppercase font-semibold text-xl'>WHERE CAN I GET SOME?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;