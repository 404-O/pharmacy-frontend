import Image from "next/image";
import { Product } from "@/types/product";

// const productData: Product[] = [
//   {
//     image: "/images/product/product-01.png",
//     name: "Apple Watch Series 7",
//     category: "Electronics",
//     price: 296,
//     sold: 22,
//     profit: 45,
//   },
//   {
//     image: "/images/product/product-02.png",
//     name: "Macbook Pro M1",
//     category: "Electronics",
//     price: 546,
//     sold: 12,
//     profit: 125,
//   },
//   {
//     image: "/images/product/product-03.png",
//     name: "Dell Inspiron 15",
//     category: "Electronics",
//     price: 443,
//     sold: 64,
//     profit: 247,
//   },
//   {
//     image: "/images/product/product-04.png",
//     name: "HP Probook 450",
//     category: "Electronics",
//     price: 499,
//     sold: 72,
//     profit: 103,
//   },
// ];

const TableTwo = () => {
    return (
        <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
            <div className="px-4 py-6 md:px-6 xl:px-9">
                <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
                    My Pharmacies
                </h4>
            </div>

            <div className="px-4 py-4.5 md:px-6 2xl:px-7.5">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-3">
                    <thead className="bg-gray-50 dark:bg-dark-2">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                #
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Pharmacy Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Address
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-dark dark:divide-dark-3">
                        {/* Example row */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                1
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                Pharmacy A
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                123 Main St
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                email@example.com
                            </td>
                            <td className="px-6 py-4  whitespace-nowrap text-sm font-medium">
                                <a
                                    href="#"
                                    className="text-indigo-600 px-4 hover:text-indigo-900"
                                >
                                    Edit
                                </a>
                                <a href="#"
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                        {/* More rows... */}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default TableTwo;
