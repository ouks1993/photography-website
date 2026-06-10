export type Photo500px = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  width: number;
  height: number;
  category: number;
  location: string | null;
  rating: number;
  times_viewed: number;
  votes_count: number;
};

type ApiResponse = {
  photos: Photo500px[];
  total_items: number;
  total_pages: number;
};

const BASE = "https://api.500px.com/v1";
const USERNAME = "abdelmalekouksili";

export async function fetchUserPhotos(
  page = 1,
  rpp = 20
): Promise<Photo500px[]> {
  const params = new URLSearchParams({
    feature: "user",
    username: USERNAME,
    rpp: String(rpp),
    page: String(page),
    image_size: "4",
    consumer_key: "",
  });

  const res = await fetch(`${BASE}/photos?${params}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];
  const data: ApiResponse = await res.json();
  return data.photos ?? [];
}

export async function fetchPhotoById(
  id: number
): Promise<Photo500px | null> {
  const params = new URLSearchParams({
    image_size: "4",
    consumer_key: "",
  });

  const res = await fetch(`${BASE}/photos/${id}?${params}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.photo ?? null;
}

// Fetch multiple pages and return a flat list
export async function fetchAllUserPhotos(maxPages = 3): Promise<Photo500px[]> {
  const pages = await Promise.all(
    Array.from({ length: maxPages }, (_, i) => fetchUserPhotos(i + 1, 20))
  );
  return pages.flat();
}

// Build a map from photo ID → signed image_url
export function photoMap(photos: Photo500px[]): Map<number, string> {
  return new Map(photos.map((p) => [p.id, p.image_url]));
}
