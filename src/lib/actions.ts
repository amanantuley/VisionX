'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  camera: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactState = {
  errors?: {
    name?: string[];
    email?: string[];
    camera?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function submitEnquiry(prevState: ContactState, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    camera: formData.get('camera'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to submit enquiry. Please check the fields.',
    };
  }
  
  // Here you would typically save the data to Firestore
  console.log('New enquiry submitted:');
  console.log(validatedFields.data);

  // Revalidate path if you were displaying enquiries, not needed here
  // revalidatePath('/admin/enquiries');

  return {
    message: 'Success',
  };
}
