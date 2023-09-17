import img from '../../../assets/home/chef-service.jpg'

const BlossomBites = () => {
    return (
        <div className='relative mb-20'>
            <img className="w-full" src={img} alt="" />
            <div className="absolute md:py-12 py-5 px-5 md:px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-1/2 bg-white z-10 text-center rounded-tr-3xl rounded-bl-3xl">
                <h4 className='font-semibold text-xl md:text-3xl'>BLOSSOM BITES</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatem ut at facilis nesciunt eligendi deleniti commodi consequuntur natus dolore.</p>
            </div>
        </div>
    );
};

export default BlossomBites;