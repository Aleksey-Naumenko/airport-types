const baseUrl = "https://api.iev.aero/api/flights";

export const fetchFlightsData = (date: string) => {
  return fetch(`${baseUrl}/${date}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to Fetch!!");
  });
};
