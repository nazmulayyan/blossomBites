const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:w-3/12 mx-auto  pt-20">
            <p className="text-yellow-500 pb-3">{subHeading}</p>
            <h4 className="text-3xl  font-semibold mb-16 pb-2 border-b-2 border-black">{heading}</h4>
        </div>
    );
};

export default SectionTitle;
