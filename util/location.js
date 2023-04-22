const GOOGLE_API_KEY = "r9032jr90jr093j";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `goolemapslink/staticmap?center=${lat},${lng}&zoom=14&size=400${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `goolemapslink/staticmap?center=${lat},${lng}&zoom=14&size=400${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.result[0].formatted_address;
  return address;
}
