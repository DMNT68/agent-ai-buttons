import axios, {AxiosResponse} from 'axios';

export const httpClientPlugin = {
    get: async (url: string) => {
        const {data} = await axios.get(url);
        return data;
        // const resp = await fetch( url );
        // return await resp.json();
    },

    post: async (url: string, body: any, headers?: any): Promise<AxiosResponse<any, any>> => {
        const {data} = await axios.post(url, body, headers);
        return data;
    },

    put: async (url: string, body: any) => {
        throw new Error('Not implemented');
    },
    delete: async (url: string) => {
        throw new Error('Not implemented');
    },
};
