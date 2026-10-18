import readline from "readline-sync";
import { autos, merken } from "./data";
import { Auto, Merk } from "./interfaces";

function toonAlleAutos(): void {
    console.log("\nAlle auto's:\n");

    for (const auto of autos) {
        console.log("- " + auto.model + " (" + auto.id + ")");
    }
}

function filterOpId(id: number): void {
    const auto = autos.find(function (auto) {
        return auto.id === id;
    });

    if (auto) {
        const merk = merken.find(function (merk) {
            return merk.id === auto.brandId;
        });

console.log("\nAuto gevonden:");
        console.log("ID: " + auto.id);
        console.log("Model: " + auto.model);
        console.log("Categorie: " + auto.category);

        if (merk) {
            console.log("Merk: " + merk.name);
            console.log("Land van merk: " + merk.country);
        } else {
            console.log("Merk: Onbekend");
            console.log("Land van merk: Onbekend");
        }

        console.log("Bouwjaar: " + auto.year);
        console.log("Prijs: €" + auto.price);
        console.log("Kilometerstand: " + auto.mileageKm + " km");
        console.log("Elektrisch: " + auto.electric);
        console.log("Carrosserie: " + auto.bodyType);
        console.log("Afbeelding: " + auto.image);
        console.log("Kenmerken: " + auto.features.join(", "));
        console.log("Toegevoegd op: " + auto.addedOn);
        console.log("Beschrijving: " + auto.description);
    } else {
        console.log("Er bestaat geen auto met dit ID.");
    }
}

function startApp(): void {
    let keuze = "";

    while (keuze !== "3") {
        console.log("\nWelkom bij de auto viewer!");
        console.log("1. Toon alle auto's");
        console.log("2. Zoek een auto op ID");
        console.log("3. Afsluiten");

        keuze = readline.question("Kies een optie: ");

        if (keuze === "1") {
            toonAlleAutos();
        } else if (keuze === "2") {
            const invoer = readline.question("Geef het ID van de auto: ");
            const id = Number(invoer);

            filterOpId(id);
        } else if (keuze === "3") {
            console.log("Tot ziens!");
        } else {
            console.log("Ongeldige keuze. Probeer opnieuw.");
        }
    }
}

startApp();