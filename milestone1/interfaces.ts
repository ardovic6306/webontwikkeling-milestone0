export interface Auto {
    id: number;
    model: string;
    category: string;
    brandId: number;
    image: string;
    year: number;
    price: number;
    mileageKm: number;
    electric: boolean;
    bodyType: string;
    features: string[];
    addedOn: string;
    description: string;
}

export interface Merk {
    id: number;
    name: string;
    country: string;
}