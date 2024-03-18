import Location from "@/db/models/Locations";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const location = await Location.findById(id);

    console.log("DATA LOCATION!", location);
    return response.status(200).json(location);
  }
}
