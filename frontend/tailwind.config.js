// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		colors: {
		  emerald: {
			50: '#f0f9ff',
			100: '#e0f2fe',
			200: '#bae6fd',
			300: '#7dd3fc',
			400: '#38bdf8',
			500: '#0ea5e9',
			600: '#0284c7',
			700: '#0369a1',
			800: '#075985',
			900: '#0c4a6e',
			950: '#082f49',
		  }
		}
	  },
	},
	plugins: [],
  };
  



//   /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 	  extend: {
// 		colors: {
// 		  emerald: {
// 			50: '#f0f7ff',  // Lightest blue - almost white
// 			100: '#e0f2fe', // Very light blue
// 			200: '#bae6fd', // Light blue
// 			300: '#7dd3fc', // Medium light blue
// 			400: '#38bdf8', // Sky blue
// 			500: '#0ea5e9', // Primary blue
// 			600: '#0284c7', // Medium blue
// 			700: '#0369a1', // Deep blue
// 			800: '#075985', // Dark blue
// 			900: '#0c4a6e', // Very dark blue
// 			950: '#082f49', // Almost navy
// 		  },
// 		  // Gold accent color for special elements
// 		  accent: {
// 			300: '#fcd34d', // Light gold
// 			400: '#fbbf24', // Gold
// 			500: '#f59e0b', // Deep gold
// 		  }
// 		}
// 	  },
// 	},
// 	plugins: [],
//   };