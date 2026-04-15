import { Webhook } from "svix";
import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js"; // adjust paths as needed
import { ApiResponse } from "../utils/ApiResponse.js";

export const clerkWebhooks = async (req, res) => {
  try {
    // Verify the request is genuinely from Clerk using Svix signature headers
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    // console.log(whook);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      // Fired when a new user signs up via Clerk
      case "user.created": {
        const user = await User.create({
          _id: data.id,
          name: `${data.first_name} ${data.last_name}`.trim(),
          email: data.email_addresses[0].email_address,
          image: data.image_url,
          resumeUrl: "",
        });

        return res
          .status(201)
          .json(new ApiResponse(201, user, "User created successfully"));
      }

      // Fired when a user updates their profile in Clerk
      case "user.updated": {
        const user = await User.findByIdAndUpdate(
          data.id,
          {
            name: `${data.first_name} ${data.last_name}`.trim(),
            email: data.email_addresses[0].email_address,
            image: data.image_url,
          },
          { new: true },
        );

        return res
          .status(200)
          .json(new ApiResponse(200, user, "User updated successfully"));
      }

      // Fired when a user deletes their Clerk account
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);

        return res
          .status(200)
          .json(new ApiResponse(200, null, "User deleted successfully"));
      }

      // Acknowledge unhandled event types so Clerk doesn't keep retrying
      default:
        return res
          .status(200)
          .json(new ApiResponse(200, null, `Unhandled event type: ${type}`));
    }
  } catch (error) {
    console.error("Clerk webhook error:", error.message);
    throw new ApiError(400, "Webhook verification failed", [error.message]);
  }
};
