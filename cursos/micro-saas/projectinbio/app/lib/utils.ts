import imageCompression from "browser-image-compression";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function sanitizeLink(link?: string) {
    if (!link) return "";

    return link
        .replace(/\s/g, "")
        .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,ˆ.<>\/?]+/, "")
        .toLocaleLowerCase();
  }

export async function compressFiles(files: File[]) {
    const compressPromises = files.map(async (file) => {
        try {
            return await compressImage(file);
        } catch (error) {
            console.error(error);
        }
    })

    return (await Promise.all(compressPromises)).filter((file) => file !== null);
}

export const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,

        }
        imageCompression(file, options).then((compressedFile) => {
            resolve(compressedFile);
        })
    })
}