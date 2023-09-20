import { z } from "zod";

const User = z.object({
  url: z.string().min(8),
  name: z.string(),
  age: z.number().min(2).max(3).optional(),
});

type TheUser = Omit<z.infer<typeof User>, "age">;

const user: TheUser = { url: "galamo@gmail.com", name: "" };

// Create type from infered interface

const Profile = z
  .object({
    firstName: z.string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    }),

    lastName: z.string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    }),

    mobileNumber: z.number({
      required_error: "Mobile number is required",
      invalid_type_error: "Mobile number must be a number",
    }),

    confirmMobileNumber: z.number({}),
  })
  .refine((data) => data.mobileNumber === data.confirmMobileNumber, {
    message: "Oops! Phone numbers doesnt match",
  });

type MyPerson = z.infer<typeof Profile>;


// ==============================================================================