import axios from 'axios';
import { API_ALL_COUNTRIES, API_REGION, API_COUNTRY_NAME } from '../config';

export default class CountriesService {

    static getCountries(): Promise<[]> {
        return axios
        .get(API_ALL_COUNTRIES)
        .then(response => response.data)
        .catch(error => this.handleError(error));
    }

    static getCountriesRegion(region: string): Promise<Object|null> {
        return axios
        .get(API_REGION + region)
        .then(response => response.data)
        .catch(error => this.handleError(error));
    }

    static getCountryByName(name: string): Promise<Object|null> {
        return axios
        .get(API_COUNTRY_NAME + name)
        .then(response => response.data[0])
        .catch(error => this.handleError(error));
    }

    // static updateobject(object: object): Promise<Object> {
    //     return axios
    //     .update
    // }

    // static addobject(object: object): Promise<object> {
    //     return axios
    //     .post(url, {
    //     ...object,
    //     })
    //     .then(response => response.data)
    //     .catch(error => this.handleError(error))
    // }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error):void {
        console.error(error)
    }

}