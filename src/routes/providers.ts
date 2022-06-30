import type { RequestHandler } from "./__types/providers";

type Provider = {
    id: number;
    name: string;
    address: string;
};

let providers: Provider[] = [
    {
        id: 0,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 1,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 2,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 3,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 4,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 5,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 6,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 7,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 8,
        name: 'Some provider',
        address: 'Address'
    }

];

const redirect = {
    status: 303,
    headers: {
        location: '/providers'
    }
};

export const get: RequestHandler = async () => {

    return {
        body: {
            providers
        }
    }

};

export const post: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    const id = Number(form.get("id"));

    providers[id] = {
        id: Number(form.get("id")),
        name: String(form.get("name")),
        address: String(form.get("address"))
    };

    return {
        status: 200
    };

};

export const del: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    const id = Number(form.get("id"));

    /*     providers = providers.filter((v) => {
    
            if (v.id === id) {
                return false
            }
            return true
    
        }); */

    delete providers[id];

    return {
        status: 200
    }

};

export const put: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    providers.push({
        id: Number(form.get("id")),
        name: String(form.get("name")),
        address: String(form.get("address"))
    });

    return {

    }

};