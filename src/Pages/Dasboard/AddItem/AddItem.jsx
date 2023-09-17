import { MdOutlineFileUpload } from "react-icons/md";

const AddItem = () => {
    return (
        <div>
            <form className="py-5 px-8 bg-white rounded-sm">
                <label className="font-semibold" htmlFor="recipeName">Recipe Name *</label><br />
                <input className="w-full bg-gray-200 py-2 px-3 outline-yellow-600 rounded-sm mt-2 mb-3" type="text" placeholder="recipe name" /><br />

                <div className="flex justify-between">
                    <div className="w-1/2 mr-2">
                        <label className="font-semibold" htmlFor="recipeName">Category *</label><br />
                        <select name="" id="" className="w-full bg-gray-200 py-2 px-3 outline-yellow-600 rounded-sm mt-2">
                            <option disabled selected>category</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="w-1/2 ml-3">
                        <label className="font-semibold" htmlFor="recipeName">Price *</label><br />
                        <input className="w-full bg-gray-200 py-2 px-3 outline-yellow-600 rounded-sm mt-2 mb-3" type="number" placeholder="price" /><br />
                    </div>
                </div>
                <label className="font-semibold" htmlFor="RecipeDetails">Recipe Details</label><br />
                <textarea className="w-full bg-gray-200 py-2 px-3 outline-yellow-600 rounded-sm mt-2 mb-3 h-28" name="" id="RecipeDetails" placeholder="recipe details"></textarea>

                <label className="py-2 px-3 bg-gray-200 rounded-sm font-semibold capitalize flex items-center w-40" htmlFor="uploadBtn"> <MdOutlineFileUpload className="text-2xl"/> upload Image</label>
                <input className="hidden" id="uploadBtn" type="file" />
                <input type="submit" value='Add Items' />



            </form>
        </div>
    );
};

export default AddItem;