export const OrderPopup = ({ name, finalCost, onClose }: { name: string; finalCost: number; onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">Order Placed Successfully!</h2>
      <p className="text-gray-600 mb-6">
        Thank you {name} for your purchase. Your order has been received. Please pay ₹{finalCost} to the delivery person.
      </p>
      <button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white cursor-pointer px-4 py-2 rounded">
        Go to Home
      </button>
    </div>
  </div>
);
