
const Cover = ({img, title, description}) => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full px-40 py-16 bg-black opacity-70">
                    <h1 className="mb-5 text-4xl font-bold">{title}</h1>
                    <p className="mb-5 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;