import React from 'react';

interface Item {
    id: string;
    name: string;
    image: string;
    description: string;
    editAction: (id: string) => void;
    deleteAction: (id: string) => void;
    backgroundImage: string;
}

interface ReusableCardListProps {
    items: Item[];
    title: string;
    editAction: (id: string) => void;
    deleteAction: (id: string) => void;
    backgroundImage: string;
}

const ReusableCardList: React.FC<ReusableCardListProps> = ({
                                                               items,
                                                               title,
                                                               editAction,
                                                               deleteAction,
                                                               backgroundImage,
                                                           }) => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.length > 0 ? (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                            style={{ backgroundImage: `url(${backgroundImage})` }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-4">
                                <h1 className="font-bold text-lg">{item.name}</h1>
                                <p className="text-gray-600">{item.description}</p>
                                <div className="mt-4 flex justify-between">
                                    <button
                                        onClick={() => editAction(item.id)}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteAction(item.id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No items available. Add some items!</p>
                )}
            </div>
        </div>
    );
};

export default ReusableCardList;
