import { User } from "../entities/User";
import { AppDataSource } from "../dataSource";

const userRepository = AppDataSource.getRepository(User);

async function getUserByUsername(username: string): Promise<User | null> {
    // TODO: Get the user by where the username matches the parameter
    // This should also retrieve the `links` relation
    return await userRepository.findOne({ where: { username } });
}

async function addNewUser(username: string, passwordHash: string): Promise<User | null> {
    // Create New User
    let newUser = new User();
    newUser.username = username;
    newUser.passwordHash = passwordHash;

    // Save it to the database
    newUser = await userRepository.save(newUser);

    return newUser;
}

export { getUserByUsername, addNewUser }