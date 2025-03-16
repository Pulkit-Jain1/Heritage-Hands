// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PlusCircle, Upload, Loader } from "lucide-react";
// import { useProductStore } from "../stores/useProductStore";

// const categories = [
//     { value: "handwoven-textiles", label: "Handwoven Textiles" },
//     { value: "pottery-ceramics", label: "Pottery & Ceramics" },
//     { value: "handcrafted-jewellery", label: "Handcrafted Jewellery" },
//     { value: "wooden-craft-decor", label: "Wooden Craft Décor" },
//     { value: "handmade-leather", label: "Handmade Leather Products" },
//     { value: "traditional-paintings", label: "Traditional Paintings & Artworks" }
// ];

// const CreateProductForm = () => {
// 	const [newProduct, setNewProduct] = useState({
// 		name: "",
// 		description: "",
// 		price: "",
// 		category: "",
// 		image: "",
// 	});

// 	const { createProduct, loading } = useProductStore();

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			await createProduct(newProduct);
// 			setNewProduct({ name: "", description: "", price: "", category: "", image: "" });
// 		} catch {
// 			console.log("error creating a product");
// 		}
// 	};

// 	const handleImageChange = (e) => {
// 		const file = e.target.files[0];
// 		if (file) {
// 			const reader = new FileReader();

// 			reader.onloadend = () => {
// 				setNewProduct({ ...newProduct, image: reader.result });
// 			};

// 			reader.readAsDataURL(file); // base64
// 		}
// 	};

// 	return (
// 		<motion.div
// 			className='bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 0.8 }}
// 		>
// 			<h2 className='text-2xl font-semibold mb-6 text-emerald-300'>Create New Product</h2>

// 			<form onSubmit={handleSubmit} className='space-y-4'>
// 				<div>
// 					<label htmlFor='name' className='block text-sm font-medium text-gray-300'>
// 						Product Name
// 					</label>
// 					<input
// 						type='text'
// 						id='name'
// 						name='name'
// 						value={newProduct.name}
// 						onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
// 						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
// 						 px-3 text-white focus:outline-none focus:ring-2
// 						focus:ring-emerald-500 focus:border-emerald-500'
// 						required
// 					/>
// 				</div>

// 				<div>
// 					<label htmlFor='description' className='block text-sm font-medium text-gray-300'>
// 						Description
// 					</label>
// 					<textarea
// 						id='description'
// 						name='description'
// 						value={newProduct.description}
// 						onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
// 						rows='3'
// 						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
// 						 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 
// 						 focus:border-emerald-500'
// 						required
// 					/>
// 				</div>

// 				<div>
// 					<label htmlFor='price' className='block text-sm font-medium text-gray-300'>
// 						Price
// 					</label>
// 					<input
// 						type='number'
// 						id='price'
// 						name='price'
// 						value={newProduct.price}
// 						onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
// 						step='0.01'
// 						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
// 						py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500
// 						 focus:border-emerald-500'
// 						required
// 					/>
// 				</div>

// 				<div>
// 					<label htmlFor='category' className='block text-sm font-medium text-gray-300'>
// 						Category
// 					</label>
// 					<select
// 						id='category'
// 						name='category'
// 						value={newProduct.category}
// 						onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
// 						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md
// 						 shadow-sm py-2 px-3 text-white focus:outline-none 
// 						 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
// 						required
// 					>
// 						<option value=''>Select a category</option>
// 						{categories.map((category) => (
//     <option key={category.value} value={category.value}>
//         {category.label}
//     </option>
// ))}
// 					</select>
// 				</div>

// 				<div className='mt-1 flex items-center'>
// 					<input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
// 					<label
// 						htmlFor='image'
// 						className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
// 					>
// 						<Upload className='h-5 w-5 inline-block mr-2' />
// 						Upload Image
// 					</label>
// 					{newProduct.image && <span className='ml-3 text-sm text-gray-400'>Image uploaded </span>}
// 				</div>

// 				<button
// 					type='submit'
// 					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
// 					shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 
// 					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
// 					disabled={loading}
// 				>
// 					{loading ? (
// 						<>
// 							<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
// 							Loading...
// 						</>
// 					) : (
// 						<>
// 							<PlusCircle className='mr-2 h-5 w-5' />
// 							Create Product
// 						</>
// 					)}
// 				</button>
// 			</form>
// 		</motion.div>
// 	);
// };
// export default CreateProductForm;

import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader, Lightbulb } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import toast from "react-hot-toast";

const categories = [
    { value: "handwoven-textiles", label: "Handwoven Textiles" },
    { value: "pottery-ceramics", label: "Pottery & Ceramics" },
    { value: "handcrafted-jewellery", label: "Handcrafted Jewellery" },
    { value: "wooden-craft-decor", label: "Wooden Craft Décor" },
    { value: "handmade-leather", label: "Handmade Leather Products" },
    { value: "traditional-paintings", label: "Traditional Paintings & Artworks" }
];

const CreateProductForm = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		description: "",
		price: "",
		category: "",
		image: "",
	});

	const { createProduct, loading } = useProductStore();
	const [aiProcessing, setAiProcessing] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createProduct(newProduct);
			setNewProduct({ name: "", description: "", price: "", category: "", image: "" });
		} catch {
			console.log("error creating a product");
		}
	};

	const processImageWithGemini = async (base64Image) => {
		try {
			setAiProcessing(true);
			// Extract the base64 data part (remove the "data:image/jpeg;base64," prefix)
			const base64Data = base64Image.split(',')[1];
			
			// Make API call to your backend endpoint that will handle Gemini API
			// This assumes you'll create a proxy endpoint to protect your API key
			const response = await fetch('/api/gemini/analyze-product', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					image: base64Data,
					prompt: "You are a product listing assistant in India for an artisan marketplace. Analyze this image of a handmade product and provide: 1) A concise, attractive product title (max 50 chars), 2) A detailed product description highlighting craftsmanship, materials, and unique features (100-200 words), 3) A reasonable suggested price in INR based on similar handmade items. Format as JSON with fields: title, description, price (number only)."
				}),
			});
			
			const data = await response.json();
			
			if (data.success && data.productDetails) {
				const { title, description, price } = data.productDetails;
				
				// Update form with AI generated content
				setNewProduct(prev => ({
					...prev,
					name: title || prev.name,
					description: description || prev.description,
					price: price ? String(price) : prev.price,
				}));
				
				toast.success("AI generated product details! Feel free to edit them.");
			} else {
				throw new Error(data.message || "Failed to analyze image");
			}
		} catch (error) {
			console.error("Error processing image with Gemini:", error);
			toast.error("Couldn't generate product details. Please fill in manually.");
		} finally {
			setAiProcessing(false);
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				const base64Image = reader.result;
				setNewProduct({ ...newProduct, image: base64Image });
				
				// Process the image with Gemini AI
				processImageWithGemini(base64Image);
			};

			reader.readAsDataURL(file); // base64
		}
	};

	return (
		<motion.div
			className='bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<h2 className='text-2xl font-semibold mb-6 text-emerald-300'>Create New Product</h2>
			

			<p className='text-gray-300 mb-6 text-sm'>
    <span className='bg-emerald-900/30 border border-emerald-800 rounded-md py-1 px-2 mr-2 inline-flex items-center'>
        <span className='text-emerald-400 mr-1'>✨</span> AI Feature
    </span>
    Upload a product image and our AI will automatically suggest a title, description, and price. 
    You can edit these suggestions before final submission.
</p>


			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label htmlFor='name' className='block text-sm font-medium text-gray-300'>
						Product Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={newProduct.name}
						onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
						 px-3 text-white focus:outline-none focus:ring-2
						focus:ring-emerald-500 focus:border-emerald-500'
						required
						disabled={aiProcessing}
					/>
				</div>

				<div>
					<label htmlFor='description' className='block text-sm font-medium text-gray-300'>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={newProduct.description}
						onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
						rows='3'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
						 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 
						 focus:border-emerald-500'
						required
						disabled={aiProcessing}
					/>
				</div>

				<div>
					<label htmlFor='price' className='block text-sm font-medium text-gray-300'>
						Price
					</label>
					<input
						type='number'
						id='price'
						name='price'
						value={newProduct.price}
						onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						step='0.01'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
						py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500
						 focus:border-emerald-500'
						required
						disabled={aiProcessing}
					/>
				</div>

				<div>
					<label htmlFor='category' className='block text-sm font-medium text-gray-300'>
						Category
					</label>
					<select
						id='category'
						name='category'
						value={newProduct.category}
						onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md
						 shadow-sm py-2 px-3 text-white focus:outline-none 
						 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'
						required
						disabled={aiProcessing}
					>
						<option value=''>Select a category</option>
						{categories.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
					</select>
				</div>

				<div className='mt-1 flex items-center'>
					<input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} disabled={aiProcessing} />
					<label
						htmlFor='image'
						className={`cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${aiProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
					>
						<Upload className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{newProduct.image && !aiProcessing && <span className='ml-3 text-sm text-gray-400'>Image uploaded</span>}
					{aiProcessing && (
						<div className='ml-3 flex items-center'>
							<Loader className='h-5 w-5 text-emerald-400 animate-spin mr-2' />
							<span className='text-sm text-emerald-400'>AI analyzing product...</span>
						</div>
					)}
				</div>

				{newProduct.name && newProduct.description && newProduct.price && !aiProcessing && (
					<div className='bg-emerald-900/30 border border-emerald-800 rounded-md p-3 flex items-start'>
						<Lightbulb className='h-5 w-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0' />
						<p className='text-sm text-emerald-300'>
							AI-generated product details have been filled in. Feel free to edit them before submitting.
						</p>
					</div>
				)}

				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
					disabled={loading || aiProcessing}
				>
					{loading ? (
						<>
							<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
							Loading...
						</>
					) : (
						<>
							<PlusCircle className='mr-2 h-5 w-5' />
							Create Product
						</>
					)}
				</button>
			</form>
		</motion.div>
	);
};
export default CreateProductForm;

