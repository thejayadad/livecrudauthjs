'use server'
import { z } from "zod"
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ClientSchema = z.object({
    name: z.string().min(1, "Name is required....."),
    total: z.preprocess(
        (value) => {
            const parsedValue = parseFloat(value as string)
            return isNaN(parsedValue) ? undefined : parsedValue;
        },
        z.number({
            required_error: "Total is required",
            invalid_type_error: "Total must be a number",
        }).positive("Total must be positive.")
    ),
    userEmail: z.string().min(1, "Useremail is required"),
    status: z.enum(['paid', 'unpaid'], {errorMap: () => ({message: "Status is either paid or unpaid"})})
})

export async function createClient(prevState: unknown, formData: FormData){
    const validatedFields = ClientSchema.safeParse(
        Object.fromEntries(formData.entries())
    )
    if(!validatedFields.success){
        return {
            error: validatedFields.error.flatten().fieldErrors,
        }
    }
    const {name, status, total, userEmail} = validatedFields.data
    try {
        await prisma.client.create({
            data: {
                name, status, total, userEmail
            }
        })
    } catch (error) {
        console.log("Error creating Client " + error)
        return {error: {message: ['Failed to create a client']}}
    }
    revalidatePath("/")
    redirect("/")

}