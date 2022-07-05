import { AppDataSource } from "$lib/data-source"
import { User } from "$lib/entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


export type ProviderType = {
    id: number;
    name: string;
    address: string;
};

export class Provider {

    private providers: ProviderType[] = [];

    create(provider: ProviderType) {

        this.providers.push(provider);
    }

    create_blk(providers: ProviderType[]) {

        this.providers.push(...providers);
    }

    read() {

        return this.providers;
    }

    update(provider: ProviderType) {

        this.providers[provider.id] = provider;
    }

    delete(provider: ProviderType) {

        delete this.providers[provider.id];
    }

}

export const provider = new Provider();

provider.create_blk([
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

]);