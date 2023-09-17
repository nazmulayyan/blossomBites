import Button from "../../../Component/Button/Button";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import img from '../../../assets/menu/salad-bg.jpg'

const ChefRecommend = () => {
    return (
        <div className="w-11/12 mx-auto mb-20">
            <SectionTitle
                subHeading="Should Try-"
                heading="CHEF RECOMMENDS"
            />

            <div className="grid md:grid-cols-3 gap-6">

                <div className="text-center bg-gray-100 rounded-sm pb-8">
                    <img className="" src={img} alt="" />
                    <h4 className="text-xl font-semibold pt-4">Caeser Salad</h4>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <Button buttonText="View Full Menu"></Button>
                </div>

                <div className="text-center bg-gray-100 rounded-sm pb-8">
                    <img className="" src={img} alt="" />
                    <h4 className="text-xl font-semibold pt-4">Caeser Salad</h4>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <Button buttonText="View Full Menu"></Button>
                </div>

                <div className="text-center bg-gray-100 rounded-sm pb-8">
                    <img className="" src={img} alt="" />
                    <h4 className="text-xl font-semibold pt-4">Caeser Salad</h4>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <Button buttonText="View Full Menu"></Button>
                </div>

            </div>

        </div>
    );
};

export default ChefRecommend;