import { v2 } from 'cloudinary';
import { location } from '../restaurents/schemas/restaurent.schema';
const nodeGeoCoder = require('node-geocoder');
export class ApiFeatures {

static async getRestaurentLocation(address) {
    try {
        const Optionas = {
            provider: process.env.GEOCODER_PROVIDER,
            httpAdapter: 'https',
            apiKey: process.env.GEOCODER_API_KEY,
            formatter: null
        }

        const geocoder = nodeGeoCoder(Optionas);
        const loc = await geocoder.geocode(address);
        const location: location = {
            type: 'Point',
            coordinates: [loc[0].longitude, loc[0].latitude],
            formattedAddress: loc[0].formattedAddress,
            street: loc[0].streetName,
            city: loc[0].city,
            state: loc[0].stateCode,
            zipcode: loc[0].zipcode,
            country: loc[0].countryCode
        }
        return location
    } catch (error) {
        return null;
    }
}


static async upload(id,files) {

    return new Promise((resolve, reject) => {
        v2.uploader.upload(files, (error, result) => {
            
        })
    })
}
}