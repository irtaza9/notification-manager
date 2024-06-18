import { z } from "zod";
import { getBrowser, getBrowserOS } from "./getEnviromentDetail";
// import { onesignalAppIdRegex } from "./constants";

export const messageSchema = z.object({
  txt_employee_id: z.string().nonempty(),
  token: z.string().nonempty(),
  platform: z.literal(getBrowserOS()),
  device: z.string().nonempty(getBrowser()),
  lst_employees: z.array(
    z.object({
      txt_employee_id: z.string().nonempty(),
    })
  ),
  ser_service_id: z.string().nonempty(),
  txt_notification_title: z.string().nonempty(),
  txt_notification_description: z.string().nonempty(),
  is_scheduled: z.string().nonempty(),
  dte_scheduled_date: z.string().nonempty(),
  txt_sender_id: z.string().nonempty(),
  operation: z.literal("SEND_NOTIFICATIONS_TO_EMPLOYESS"),
});

export const userloginSchema = z.object({
  txt_employee_id: z
    .string({ message: "Must be 25 or fewer characters long" })
    .regex(/^[A-Za-z0-9.]+$/, {
      message: "Must only contain alphanumeric characters",
    }),
  txt_employee_password: z
    .string()
    .min(8, { message: "Must be at least 8 characters long" }),
});

export const otpschema = z.object({
  txt_pin: z.string().max(6, { message: "Must be 6 characters long" }),
  txt_employee_id: z.string({ message: "Invalid type of employee id" }),
  token: z.string({ message: "Invalid token" }),
});

export const stepOneSchema = z.string().min(5).max(50);

export const steptwoSchema = z.string();
