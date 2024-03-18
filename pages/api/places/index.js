import dbConnect from "@/db/connect";
import Location from "@/db/models/Locations";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const locations = await Location.find({});
    return response.status(200).json(locations);
  }

  if (request.method === "POST") {
    const location = await Location.create(request.body);
    return response.status(200).json("Posted");
  }

  if (request.method === "PUT") {
    const updatedLocation = await request.body;
    await Location.findByIdAndUpdate(id, updatedLocation);

    return response.status(200).json("Updated");
  }
}
