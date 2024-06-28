export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white cursor-pointer transition-all hover:shadow-md hover:shadow-black/25">
            <div className="text-center">
                <img src="pizza.png/" className="max-h-auto max-h-24 block mx-auto" alt=""></img>
            </div>
            <h3 className="font-semibold my-2 text-xl">Peproni Pizza</h3>
            <p className="text-gray-500 text-sm">the american nightmare cody rhodes</p>
            <button className="bg-primary mt-3 text-white rounded-full px-8 py-2">Add to cart $12</button>
        </div>
    );
}