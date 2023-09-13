import axios from "axios";

const serachImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization:
				"Client-ID LIWb03wqZ__8iU1m-RzaZ7Ouq2sVyjVToRGGLGMW3DA",
		},
		params: {
			query: term,
		},
	});

    
	return response.data.results;
};

export default serachImages;
