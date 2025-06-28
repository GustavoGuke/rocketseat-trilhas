"use server";

import { Timestamp } from "firebase-admin/firestore";
import { db } from "../lib/firebase";
import { auth } from "../lib/auth";

export async function createLink(link: string) {
    
    const session = await auth();

    try {
        if (!session?.user) return
        await db.collection("profiles").doc(link).set({
            userId: session.user.id,
            totalVisits: 0,
            createdAt: Timestamp.now().toMillis()
        });

        return true
    } catch (error) {
        return false
    }
}