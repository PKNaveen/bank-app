'use server'

import {createAdminClient, createSessionClient} from "@/lib/server/appwrite";
import {parseStringify} from "@/lib/utils";
import {signInProps, SignUpParams} from "@/types";
import {ID} from "node-appwrite";
import {cookies} from "next/headers";

export const signIn = async ({ email, password }: signInProps) => {
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(email, password);

        return parseStringify(session)
    } catch (error) {
        console.error('Error', error);
    }
}
export const signUp = async (userData:SignUpParams) =>{
    const { email, firstName, lastName,password } = userData;
    try {
        const {account, database} = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            `${firstName} ${lastName}`
        )
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount);
    }
    catch (error) {
        console.error("Error", error)
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();


        return parseStringify(user);
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();

        cookies().delete('appwrite-session');

        await account.deleteSession('current');
    } catch (error) {
        return null;
    }
}
