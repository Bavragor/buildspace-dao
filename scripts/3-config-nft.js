import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x8A3A01184Aa89452ABB7378F014331d49d31cd81");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Creativity has no limits",
        description: "This NFT will give you access to TShirtDAO!",
        image: readFileSync("scripts/assets/creative.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();