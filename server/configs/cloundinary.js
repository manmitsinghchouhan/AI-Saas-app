import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async () => {
    // Ensure these match your .env file exactly
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,   // Fixed spelling
        api_secret: process.env.CLOUDINARY_API_SECRET, // Fixed spelling
    });
};

export default connectCloudinary;