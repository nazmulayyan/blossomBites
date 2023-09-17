import { useState } from "react";
import FoodCard from "../../../Component/Foodcard/FoodCard";

const OrderTab = ({ items }) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = items.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const hasPreviousPage = currentPage > 1;
    const hasNextPage = endIndex < items.length;

    return (
        <div>
            <div className="md:grid grid-cols-3 gap-6">
                {itemsToDisplay.map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`${!hasPreviousPage ? "bg-gray-800 text-white" : "bg-gray-300"
                        } mr-2 px-4 py-2 rounded-sm`}
                    disabled={!hasPreviousPage}
                >
                    Previous
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`${!hasNextPage ? "bg-gray-800 text-white" : "bg-gray-300"
                        } ml-2 px-4 py-2 rounded-sm`}
                    disabled={!hasNextPage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default OrderTab;
