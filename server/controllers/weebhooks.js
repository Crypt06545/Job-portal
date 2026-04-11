import { Webhook } from "svix";
import { ApiResponse } from "../utils/ApiResponse.js"; // Assuming your file path
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOKS_SECRET;

    const svix_id = req.headers["svix-id"];
    const svix_timestamp = req.headers["svix-timestamp"];
    const svix_signature = req.headers["svix-signature"];

    const payload = JSON.stringify(req.body);
    const wh = new Webhook(WEBHOOK_SECRET);

    // 1. Declare evt here
    let evt;

    try {
      evt = wh.verify(payload, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (err) {
      console.error("Error verifying webhook:", err);
      // throw new ApiError(400, "Error occurred -- unable to verify webhook");
    }

    // 2. Use evt.data and evt.type (the verified data)
    const { data, type } = evt;

    switch (type) {
      case "user.created": {
        console.log("User created with ID:", data.id);

        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          profilePictureUrl: data.image_url,
          resume: "",
        };

        await User.create(userData);
        break;
      }

      case "user.updated": {
        const updateData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          profilePictureUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, { $set: updateData });

        console.log(`User ${data.id} updated successfully`);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }

    // 3. This one response at the end handles everything
    return res.status(200).json(new ApiResponse(200, {}, "Webhook received"));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};
