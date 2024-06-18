import {auth} from "@clerk/nextjs"
import prismadb from "./prismadb"
import { MAX_FREE_COUNT } from "@/constants"

export const increaseApiCount = async () => {
    const {userId} =auth();
    if(!userId) return;
    const user = await prismadb.userApiLimit.findUnique({where:{userId}});
    if(user) {
        await prismadb.userApiLimit.update({where:{userId},data:{count:user.count+1}});
    }
    else {
        await prismadb.userApiLimit.create({data:{userId,count:1}});
    }
}

export const userHasLimit = async () => {
    const {userId} =auth();
    if(!userId) return;
    const user = await prismadb.userApiLimit.findUnique({where:{userId}});
    if(user && user.count >= MAX_FREE_COUNT) {
        return false;
    }
    return true;
}

export const getApiCount = async () => {
    const {userId} =auth();
    if(!userId) return 0;
    const user = await prismadb.userApiLimit.findUnique({where:{userId}});
    if(user) {
        return user.count;
    }
    return 0;
}