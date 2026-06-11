export type Collection = "wetlands" | "forest" | "coast" | "open";

export type LocalPhoto = {
  src: string;
  alt: string;
  title: string;
  latin: string | null;
  location: string;
  collection: Collection;
};

function photo(
  src: string,
  title: string,
  latin: string | null,
  location: string,
  collection: Collection
): LocalPhoto {
  return { src, alt: `${title} — ${location}`, title, latin, location, collection };
}

export const collections: { key: Collection | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "wetlands", label: "Wetlands" },
  { key: "forest", label: "Atlas & Forest" },
  { key: "coast", label: "Coast & Sea" },
  { key: "open", label: "Open Country" },
];

export const allPhotos: LocalPhoto[] = [
  photo("/images/GK3A1929-Enhanced-SR.jpg", "Greater Flamingos in Flight", "Phoenicopterus roseus", "Sebkha wetlands, Algeria", "wetlands"),
  photo("/images/GK3A1991-Enhanced-SR.jpg", "Greater Flamingos Feeding", "Phoenicopterus roseus", "Sebkha wetlands, Algeria", "wetlands"),
  photo("/images/_00A7078-Enhanced-NR-Edit.jpg", "Common Kingfisher", "Alcedo atthis", "Atlas foothill stream, Algeria", "wetlands"),
  photo("/images/GK3A1635-Edit.jpg", "Barbary Partridge", "Alectoris barbara", "Algerian scrubland", "open"),
  photo("/images/_00A5182-Edit-2.jpg", "Common Firecrest", "Regulus ignicapilla", "Atlas cedar forest, Algeria", "forest"),
  photo("/images/_00A5447-Enhanced-NR.jpg", "Ridges of the Atlas", null, "Atlas Blidéen, Algeria", "forest"),
  photo("/images/GK3A1996-Enhanced-NR.jpg", "Flamingos in the Shallows", "Phoenicopterus roseus", "Sebkha wetlands, Algeria", "wetlands"),
  photo("/images/GK3A0048-Edit.jpg", "Melodious Warbler in Song", "Hippolais polyglotta", "Atlas woodland, Algeria", "forest"),
  photo("/images/GK3A0091-Edit.jpg", "Great Tit", "Parus major", "Atlas Blidéen, Algeria", "forest"),
  photo("/images/GK3A1383-Enhanced-SR.jpg", "Black Redstart", "Phoenicurus ochruros", "Northern Algeria", "open"),
  photo("/images/GK3A1435.jpg", "African Blue Tit", "Cyanistes teneriffae ultramarinus", "Atlas woodland, Algeria", "forest"),
  photo("/images/GK3A2552-Enhanced-NR.jpg", "Firecrest With Nesting Feather", "Regulus ignicapilla", "Atlas cedar forest, Algeria", "forest"),
  photo("/images/GK3A4226.jpg", "Great Cormorant", "Phalacrocorax carbo", "Algerian wetlands", "wetlands"),
  photo("/images/GK3A4936.jpg", "Graceful Prinia", "Prinia gracilis", "Algerian reedbeds", "wetlands"),
  photo("/images/GK3A6475.jpg", "Mistle Thrush", "Turdus viscivorus", "Atlas cedar forest, Algeria", "forest"),
  photo("/images/GK3A7148-Edit.jpg", "Common Kestrel", "Falco tinnunculus", "Algerian coast", "coast"),
  photo("/images/GK3A7373-2.jpg", "Trawler and Gulls", null, "Mediterranean coast, Algeria", "coast"),
  photo("/images/GK3A7600-Enhanced-SR.jpg", "Yelkouan Shearwater", "Puffinus yelkouan", "Off the Algerian coast", "coast"),
  photo("/images/GK3A9194-Edit.jpg", "Sardinian Warbler", "Curruca melanocephala", "Algerian maquis", "open"),
  photo("/images/GK3A9831-Edit.jpg", "African Blue Tit", "Cyanistes teneriffae ultramarinus", "Northern Algeria", "forest"),
  photo("/images/_00A0077-Edit.jpg", "Atlas Long-legged Buzzard", "Buteo rufinus cirtensis", "Atlas Blidéen, Algeria", "open"),
  photo("/images/_00A1379-Edit.jpg", "Young Yellow-legged Gull", "Larus michahellis", "Algerian beach", "coast"),
  photo("/images/2M8A5050-Enhanced-NR.jpg", "Eurasian Jay", "Garrulus glandarius cervicalis", "Atlas cedar forest, Algeria", "forest"),
  photo("/images/2M8A6927-Enhanced-NR.jpg", "Mistle Thrush in the Cedars", "Turdus viscivorus", "Atlas cedar forest, Algeria", "forest"),
  photo("/images/2M8A8407-Enhanced-NR.jpg", "White Wagtail", "Motacilla alba", "Algerian shore", "coast"),
  photo("/images/_00A5914-Edit.jpg", "Mediterranean Chameleon", "Chamaeleo chamaeleon", "Algerian coastal scrub", "open"),
  photo("/images/_00A8097-Edit.jpg", "Blue Tit Gathering Nest Material", "Cyanistes teneriffae ultramarinus", "Algerian reedbed", "wetlands"),
  photo("/images/_00A8233-Edit.jpg", "Small White on Wild Mustard", "Pieris rapae", "Algerian meadow", "open"),
  photo("/images/_00A8414-Edit-3.jpg", "Eurasian Hoopoe", "Upupa epops", "Northern Algeria", "open"),
  photo("/images/_00A8698-Enhanced-NR.jpg", "Maghreb Owl", "Strix mauritanica", "Atlas cedar forest, Algeria", "forest"),
  photo("/images/_00A9182-Enhanced-NR-Edit-2.jpg", "Golden Oriole", "Oriolus oriolus", "Eucalyptus grove, Algeria", "forest"),
  photo("/images/GK3A2635.jpg", "Purple Heron", "Ardea purpurea", "Algerian wetlands", "wetlands"),
  photo("/images/GK3A3055.jpg", "Short-toed Snake Eagle", "Circaetus gallicus", "Northern Algeria", "open"),
  photo("/images/GK3A3278.jpg", "Whiskered Tern", "Chlidonias hybrida", "Algerian wetlands", "wetlands"),
  photo("/images/GK3A5161.jpg", "Western Swamphen", "Porphyrio porphyrio", "Algerian wetlands", "wetlands"),
  photo("/images/GK3A7404.jpg", "Sardinian Warbler", "Curruca melanocephala", "Northern Algeria", "open"),
  photo("/images/_00A9793-Edit.jpg", "Western Marsh Harrier", "Circus aeruginosus", "Algerian wetlands", "wetlands"),
];
