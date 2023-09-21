const galleryReducer = (state, action) => {
    switch(action.type) {
        case "LOADING_IMAGES":
            return {
                ...state,
                isLoading: true,
            }

        case "GET_GALLERY_IMAGES":
            return {
                ...state,
                isLoading: false,
                galleryImages: action.payload
            }
    }

}

export default galleryReducer;