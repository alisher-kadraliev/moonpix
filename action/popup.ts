"use server"

import db from '@/lib/db'
import { revalidatePath } from 'next/cache';

export async function getPopUp(){
    const popUp = await db.popUp.findMany()
    if (!popUp) {
        return "No popup available";
    }
    return popUp
}


export async function getPopUpLast() {
    const popUp = await db.popUp.findMany({
        orderBy: { createdAt: 'desc' }, // Sort by creation date in descending order
        take: 1, // Limit to the last created pop-up
    });
    if (popUp.length === 0) { // Check if the array is empty
        return "No popup available";
    }
    return popUp[0]; // Return the last created pop-up
}

export async function createPost(formData: FormData) {
    
    // Check for required fields first
    if (!formData.get('bgColor') || !formData.get('textColor')) {
        return {
            error: "Please fill in the required fields"
        };
    }

    await db.popUp.create({
        data: {
            bgColor: formData.get('bgColor') as string,
            textColor: formData.get('textColor') as string,
        },
    });

    // Return success message after creation
    return {
        success: "Kurulum başarılı"
    };
    
    revalidatePath('/');
};

