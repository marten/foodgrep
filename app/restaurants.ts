import { groupBy } from "lodash";
import type { Restaurant } from "./types";

// prettier-ignore
export const restaurants: Restaurant[] = [
  {
    id: "piccola-roma-beilen",
    name: "Piccola Roma",
    location: "Beilen",
    phone: "0593 52 72 88",
    menu: [
      {"category": "Pizze", "id":  1, "name": "Bambini", "description": "kinderpizza met tomatensaus, kaas, ham of salami", "price": "€ 5,50"},
      {"category": "Pizze", "id":  2, "name": "margherita", "description": "tomatensaus, kaas", "price": "€ 9,50"},
      {"category": "Pizze", "id":  3, "name": "Napoletana", "description": "tomatensaus, kaas, ansjovis & kappertjes", "price": "€ 11,00"},
      {"category": "Pizze", "id":  4, "name": "Funghi", "description": "tomatensaus, kaas & champignons", "price": "€ 11,00"},
      {"category": "Pizze", "id":  5, "name": "Prosciutto", "description": "tomatensaus, kaas & ham", "price": "€ 11,00"},
      {"category": "Pizze", "id":  6, "name": "Salame", "description": "tomatensaus, kaas & salami", "price": "€ 11,00"},
      {"category": "Pizze", "id":  7, "name": "Tonno", "description": "tomatensaus, kaas & tonijn", "price": "€ 12,50"},
      {"category": "Pizze", "id":  8, "name": "Campagnola", "description": "tomatensaus, kaas, champignons, ham, paprika & uien", "price": "€ 13,00"},
      {"category": "Pizze", "id":  9, "name": "Quattro stagioni", "description": "tomatensaus, kaas, champignons, ham, salami, ansjovis, olijven & kappertjes", "price": "€ 13,75"},
      {"category": "Pizze", "id": 10, "name": "Mista", "description": "tomatensaus, kaas, champignons, ham, salami, gerookte zalm & garnalen", "price": "€ 13,75"},
      {"category": "Pizze", "id": 11, "name": "Salsiccia sardo", "description": "tomatensaus, buffelmozzarella, Sardijnse salami, kappertjes, verse tomaat & knoflook pikant!", "price": "€ 15,50"},
      {"category": "Pizze", "id": 12, "name": "Peperone", "description": "tomatensaus, kaas, champignons, paprika, uien & spaanse pepers", "price": "€ 13,75"},
      {"category": "Pizze", "id": 13, "name": "Calzone", "description": "dubbelgeslagen pizza met tomatensaus, kaas, ham & salami", "price": "€ 14,50"},
      {"category": "Pizze", "id": 14, "name": "Costa smeralda", "description": "tomatensaus, kaas, zalm, 4 gamba’s, ananas, ui & spaanse pepers", "price": "€ 17,50"},
      {"category": "Pizze", "id": 15, "name": "Carbonara", "description": "tomatensaus, kaas, ham, salami, spek & rosbief", "price": "€ 14,50"},
      {"category": "Pizze", "id": 16, "name": "Frutti di mare", "description": "tomatensaus, kaas, gerookte zalm, garnalen, mosselen & ansjovis", "price": "€ 16,00"},
      {"category": "Pizze", "id": 17, "name": "Pizza de buongustaio", "description": "voor fijnproevers met tomatensaus, kaas, champignons, salami, fricandeau, asperges, paprika, gorgonzola & ossenhaas", "price": "€ 17,00"},
      {"category": "Pizze", "id": 18, "name": "Sardagnola", "description": "tomatensaus, buffelmozzarella, tonijn, garnalen, paprika, ui & knoflook", "price": "€ 15,00"},
      {"category": "Pizze", "id": 19, "name": "Funghi alla marinara", "description": "tomatensaus, kaas, champignons, gerookte zalm, garnalen & mosselen", "price": "€ 15,00"},
      {"category": "Pizze", "id": 20, "name": "Fantasia carne", "description": "fantasie van de kok (vlees)", "price": "€ 13,75"},
      {"category": "Pizze", "id": 21, "name": "Svedese", "description": "tomatensaus, kaas, ham, ui & ei", "price": "€ 13,00"},
      {"category": "Pizze", "id": 22, "name": "Vegetariana", "description": "tomatensaus, kaas, champignons, asperges, artisjokken, paprika, olijven & ui", "price": "€ 13,75"},
      {"category": "Pizze", "id": 23, "name": "Del re", "description": "pizza van de koning met tomatensaus, kaas, champignons, ham, salami, spek, fricandeau, paprika, ananas, ossenhaas & spaanse pepers", "price": "€ 17,00"},
      {"category": "Pizze", "id": 24, "name": "Pizza alla gorgonzola", "description": "tomatensaus, kaas, ham, salami, asperges, gorgonzola, basilicum & verse groene peperkorrels", "price": "€ 15,25"},
      {"category": "Pizze", "id": 25, "name": "Romina", "description": "tomatensaus, kaas, champignons, ham, fricandeau, gerookte zalm, asperges, paprika, olijven & ui", "price": "€ 15,25"},
      {"category": "Pizze", "id": 26, "name": "Chiara", "description": "tomatensaus, kaas, ham, paprika, ui, ananas & verse tomaat", "price": "€ 13,75"},
      {"category": "Pizze", "id": 27, "name": "Gamberi", "description": "tomatensaus, kaas, garnalen, paprika, basilicum & knoflook", "price": "€ 15,50"},
      {"category": "Pizze", "id": 28, "name": "Vongole", "description": "tomatensaus, kaas, garnalen, vongole (schelpdieren), paling, krab, ansjovis & ui", "price": "€ 16,00"},
      {"category": "Pizze", "id": 29, "name": "Della sirena", "description": "pizza van de zeemeermin met tomatensaus, kaas, gerookte zalm, mosselen, vongole, 3 gamba’s & ui", "price": "€ 16,50"},
      {"category": "Pizze", "id": 30, "name": "Quattro formaggi", "description": "tomatensaus, kaas, ham, mozzarella, gorgonzola, gruyere, verse groene peperkorrels & basilicum", "price": "€ 15,50"},
      {"category": "Pizze", "id": 31, "name": "Sardo", "description": "tomatensaus, kaas, ham, artisjokken, mozzarella, gorgonzola, pecorino & olijven", "price": "€ 16,00"},
      {"category": "Pizze", "id": 32, "name": "Piccola Roma", "description": "tomatensaus, kaas, champignons, ham, artisjokken, asperges, ansjovis, olijven & ui", "price": "€ 14,25"},
      {"category": "Pizze", "id": 33, "name": "Olandese", "description": "tomatensaus, kaas, ham, spek, fricandeau, asperges, ui & ei", "price": "€ 14,25"},
      {"category": "Pizze", "id": 34, "name": "Salmone e funghi", "description": "tomatensaus, kaas, champignons, gerookte zalm & citroen", "price": "€ 13,00"},
      {"category": "Pizze", "id": 35, "name": "Mediterrana", "description": "tomatensaus, kaas, salami, ananas, parika, gorgonzola", "price": "€ 13,00"},
      {"category": "Pizze", "id": 36, "name": "Piëtra", "description": "tomatensaus, kaas, tonijn, spek, ui & knoflook pikant", "price": "€ 14,25"},
      {"category": "Pizze", "id": 37, "name": "Pizzaiola", "description": "tomatensaus, kaas, ossenhaas, mozzarella, kappertjes, olijven, oregano, basilicum & groene peperkorrels", "price": "€ 16,50"},
      {"category": "Pizze", "id": 38, "name": "Mamma mia", "description": "tomatensaus, kaas, champignons, fricandeau, gorgonzola, mozzarella, ananas & spaanse pepers", "price": "€ 17,00"},
      {"category": "Pizze", "id": 39, "name": "Arcobaleno", "description": "tomatensaus, kaas, gorgonzola, mozzarella, paprika & ananas", "price": "€ 16,50"},
      {"category": "Pizze", "id": 40, "name": "Fantasia pesce", "description": "fantasie van de kok (vis)", "price": "€ 17,00"},
      {"category": "Pizze", "id": 41, "name": "Raffaella", "description": "tomatensaus, kaas, ham, salami, asperges, paprika, ui & ei", "price": "€ 14,25"},
      {"category": "Pizze", "id": 42, "name": "Quattro stagioni", "description": "tomatensaus, kaas, champignons, ham, salami, artisjokken, paprika, speciale olijven & kappertjes", "price": "€ 14,25"},
      {"category": "Pizze", "id": 43, "name": "Roberto", "description": "tomatensaus, kaas, champignons, tonijn, asperges, paling, peterselie & knoflook pikant", "price": "€ 16,50"},
      {"category": "Pizze", "id": 44, "name": "Vegetariana con", "description": "tomatensaus, kaas, champignons, artisjok, asperges, peer, frutta e gorgonzola ananas, paprika, gorgonzola, olijven, ui & spaanse pepers", "price": "€ 16,50"},
      {"category": "Pizze", "id": 45, "name": "Antonio", "description": "tomatensaus, kaas, ham, salami, spek, gorgonzola & spaanse pepers", "price": "€ 15,50"},
      {"category": "Pizze", "id": 46, "name": "Romagnola", "description": "tomatensaus, buffelmozzarella, gerookte zalm, rucola, parmezaanse kaas & balsamico azijn", "price": "€ 15,50"},
      {"category": "Pizze", "id": 47, "name": "Gianna", "description": "tomatensaus, kaas, champignons, ham, tonijn, asperges, paprika, verse tomaten & knoflook", "price": "€ 15,50"},
      {"category": "Pizze", "id": 48, "name": "Tropicale", "description": "tomatensaus, kaas, gorgonzola, mozzarella, mango, kiwi, parmaham & 3 gamba’s", "price": "€ 16,50"},
      {"category": "Pizze", "id": 49, "name": "Calzone speciale", "description": "dubbelgeslagen pizza met tomatensaus, kaas, ham, salami, fricandeau, spek & paprika", "price": "€ 15,50"},
      {"category": "Pizze", "id": 50, "name": "Vesuvio", "description": "tomatensaus, kaas, champignons & salami", "price": "€ 11,50"},
      {"category": "Pizze", "id": 51, "name": "Vulcano", "description": "tomatensaus, kaas, champignons & ham", "price": "€ 11,50"},
      {"category": "Pizze", "id": 52, "name": "Della nonna", "description": "tomatensaus, kaas, mozzarella, venkelsalami, knoflook & pikant", "price": "€ 13,25"},
      {"category": "Pizze", "id": 53, "name": "Dell ‘nonno", "description": "tomatensaus, kaas, mozzarella, ansjovis, paprika, kappertjes, tonijn & knoflook", "price": "€ 13,75"},
      {"category": "Pizze", "id": 54, "name": "Hawaii", "description": "tomatensaus, kaas, ham & ananas", "price": "€ 11,50"},
      {"category": "Pizze", "id": 55, "name": "Montanara", "description": "tomatensaus, kaas, champignons, ham & salami", "price": "€ 12,75"},
      {"category": "Pizze", "id": 56, "name": "Con frutta", "description": "vruchtenpizza met o.a. tomatensaus, kaas, banaan, ananas, kiwi & peer", "price": "€ 13,75"},
      {"category": "Pizze", "id": 57, "name": "Al capone", "description": "tomatensaus, kaas, champignons, salami, asperges, paprika, parmezaanse kaas, ossenhaas, gorgonzola & spaanse pepers", "price": "€ 17,00"},
      {"category": "Pizze", "id": 58, "name": "Santa Lucia speciale", "description": "tomatensaus, kaas, champignons, ham, salami, artisjokken, asperges, ui & spaanse pepers", "price": "€ 14,75"},
      {"category": "Pizze", "id": 59, "name": "Paesana", "description": "van het platteland met tomatensaus, kaas, champignons, ham, salami, spek & ui", "price": "€ 14,75"},
      {"category": "Pizze", "id": 60, "name": "Bandito", "description": "tomatensaus, kaas, champignons, salami, asperges, parmezaanse kaas, gorgonzola, ossenhaas, bolognesesaus & spaanse pepers", "price": "€ 17,00"},
      {"category": "Pizze", "id": 61, "name": "Capriciosa speciale", "description": "tomatensaus, kaas, champignons, ham, salami, zalm, garnalen, paprika, ui, olijven & ansjovis", "price": "€ 16,00"},
      {"category": "Pizze", "id": 62, "name": "Carbonara speciale", "description": "tomatensaus, kaas, ham, salami, spek, rosbief, ui & ei", "price": "€ 15,25"},
      {"category": "Pizze", "id": 63, "name": "Fantasia vegetariano", "description": "fantasie van de kok (vegetarisch)", "price": "€ 15,50"},
      {"category": "Pizze", "id": 64, "name": "Bolognese", "description": "bolognesesaus met gehakt & kaas", "price": "€ 11,00"},
      {"category": "Pizze", "id": 65, "name": "Rosaria", "description": "tomatensaus, kaas, parmaham, rucola, parmezaanse kaas, olijf olie & balsamico azijn", "price": "€ 15,50"},

      { "category": "Antipasti (voorgerechten)", "id": "A", "name": "Panini burro", "description": "pizzabroodjes met kruidenboter", "price": "5.50" },
      {"category": "Antipasti (voorgerechten)", "id":"B", "name": "Prosciutto e melone", "description": "parmaham met meloen", "price": "€ 11,00"},
      {"category": "Antipasti (voorgerechten)", "id":"C", "name": "Antipasto della casa", "description": "gemengd voorgerecht met o.a. parmaham, salami", "price": "€ 13,00"},
      {"category": "Antipasti (voorgerechten)", "id":"D", "name": "Salade", "price": "€ 4,50"},
      {"category": "Antipasti (voorgerechten)", "id":"E", "name": "Tonijnsalade", "price": "€ 6,50 "},

      {"category": "Spaghetti/maccheroni", "id": "A", "name": "Bolognese", "description": "tomatensaus met o.a. gehakt, Parmezaanse kaas", "price": "€ 1,50"},
      {"category": "Spaghetti/maccheroni", "id": "B", "name": "Alla Carbonara", "description": "roomsaus met ham, spek, uien, ei, knoflook, peterselie, Parmezaanse kaas", "price": "€ 11,50"},
      {"category": "Spaghetti/maccheroni", "id": "C", "name": "Alla Gorgonzola", "description": "roomsaus met gorgonzola, mozzarella, tomaat, Parmezaanse kaas, knoflook en peterselie", "price": "€ 12,50"},
      {"category": "Spaghetti/maccheroni", "id": "D", "name": "Con Tonno", "description": "tonijn, peterselie, knoflook, witte wijn", "price": "€ 12,00"},
      {"category": "Spaghetti/maccheroni", "id": "E", "name": "Alla Zingara", "description": "champignons, uien, paprika, peterselie, tomaat, knoflook, spaanse pepers en parmezaanse kaas", "price": "€ 12,50"},
      {"category": "Spaghetti/maccheroni", "id": "F", "name": "Alla arrabiata", "description": "tomatensaus, pikant!, peterselie, knoflook", "price": "€ 10,50"},

      {"category": "Verse deeggerechten", "id": "A", "name": "Tortellini", "description": "maccheroni gevuld met vlees met bolognese saus en Parmezaanse kaas", "price": "€ 13,00"},
      {"category": "Verse deeggerechten", "id": "B", "name": "Ravioli", "description": "maccheroni gevuld met vlees met bolognese saus en Parmezaanse kaas", "price": "€ 12,50"},
      {"category": "Verse deeggerechten", "id": "C", "name": "Ravioli 4 formaggi", "description": "maccheroni kussentjes gevuld met vlees in 4 soorten kaas met roomsaus", "price": "€ 13,50"},
      {"category": "Verse deeggerechten", "id": "D", "name": "Lasagna", "description": "bolognese saus met bechamel, kaas, salami", "price": "€ 12,50"},
      {"category": "Verse deeggerechten", "id": "E", "name": "Lasagna gorgonzola", "description": "bolognesesaus met bechamel, kaas, salami, gorgonzola kaas", "price": "€ 13,50"},

      {"category": "Vleesgerechten", "id": "A", "name": "Scaloppa al vino bianco", "description": "plakjes varkenshaas gebakken in witte wijn met roomsaus", "price": "€ 19,00"},
      {"category": "Vleesgerechten", "id": "B", "name": "Scaloppa alla marsala", "description": "plakjes varkenshaas gebakken in witte wijn en marsala – zoet!", "price": "€ 19,00"},
      {"category": "Vleesgerechten", "id": "C", "name": "Scaloppa alla gorgonzola", "description": "plakjes varkenshaas gebakken in witte wijn met gorgonzola roomsaus", "price": "€ 20,00"},
      {"category": "Vleesgerechten", "id": "D", "name": "Scaloppa alla bolognese", "description": "plakjes varkenshaas gebakken in witte wijn met bolognesesaus", "price": "€ 19,00"},
      {"category": "Vleesgerechten", "id": "E", "name": "Scaloppa alla zingara", "description": "plakjes varkenshaas gebakken in witte wijn met champignons, uien, paprika in tomatensaus – beetje pikant!", "price": "€ 19,00"},
      {"category": "Vleesgerechten", "id": "F", "name": "Scaloppa ai funghi", "description": "plakjes varkenshaas in witte wijn roomsaus met champignons", "price": "€ 19,00"},
      {"category": "Vleesgerechten", "id": "G", "name": "Filetto alla griglia", "description": "geroosterde ossenhaas met knoflook, peterselie", "price": "€ 27,50"},
      {"category": "Vleesgerechten", "id": "H", "name": "Filetto ai funghi", "description": "geroosterde ossenhaas met champignons, room, witte wijn, cognac", "price": "€ 28,00"},
      {"category": "Vleesgerechten", "id": "I", "name": "Filetto alla’arrabiata", "description": "ossenhaas, knoflook, peterselie, tomatensaus, pepers, beetje room", "price": "€ 28,00"},
      {"category": "Vleesgerechten", "id": "J", "name": "Entrecôte alla griglia", "description": "geroosterde entrecôte met knoflook, peterselie", "price": "€ 21,00"},
      {"category": "Vleesgerechten", "id": "K", "name": "Entrecôte ai funghi", "description": "geroosterde entrecôte met champignons, knoflook, peterselie in roomsaus", "price": "€ 22,00"},
      {"category": "Vleesgerechten", "id": "L", "name": "Pollo al vino bianco", "description": "kipfilet in witte wijn met roomsaus", "price": "€ 18,00"},
      {"category": "Vleesgerechten", "id": "M", "name": "Pollo alla gorgonzola", "description": "kipfilet in witte wijn met gorgonzola saus", "price": "€ 18,50"},
      {"category": "Vleesgerechten", "id": "N", "name": "Pollo alla bolognese", "description": "kipfilet in witte wijn met bolognesesaus", "price": "€ 18,50"},
      {"category": "Vleesgerechten", "id": "O", "name": "Pollo all’ arrabiata", "description": "kipfilet in witte wijn met pittige! tomatensaus", "price": "€ 18,50"},

      {"category": "Visgerechten", "id": "A", "name": "Gamberoni al vino bianco", "description": "grote garnalen met knoflook, peterselie in witte wijn roomsaus. Met aardappelschijfjes, gemengde salade en broodjes.", "price": "€ 21,50"},
      {"category": "Visgerechten", "id": "B", "name": "Gamberoni alla pescatora", "description": "grote garnalen in tomatensaus met knoflook, peterselie, spaanse pepers. Met aardappelschijfjes, gemengde salade en broodjes.", "price": "€ 21,50"},
      {"category": "Visgerechten", "id": "C", "name": "Gamberoni alla gorgonzola", "description": "grote garnalen met witte wijn roomsaus, knoflook, peterselie in gorgonzola roomsaus. Met aardappelschijfjes, gemengde salade en broodjes.", "price": "€ 22,50"},
      {"category": "Visgerechten", "id": "D", "name": "Gamberoni arrosto", "description": "grote geroosterde garnalen met knoflook, peterselie, citroen. Met aardappelschijfjes, gemengde salade en broodjes.", "price": "€ 21,00"}
    ]
  },
  {
    id: "ni-hao-beilen",
    name: "Ni Hao",
    location: "Beilen",
    menu: [
      {category: "Bijgerechten", id: 1, name: "Kroepoek", price: "3.00"},
      {category: "Bijgerechten", id: 2, name: "Cassave Kroepoek", price: "3.00"},
      {category: "Bijgerechten", id: 3, name: "Loempia", price: "4.90"},
      {category: "Bijgerechten", id: 4, name: "Kip Loempia", price: "5.20"},
      {category: "Bijgerechten", id: 5, name: "Loempia met Babi Pangang", price: "7.20"},
      {category: "Bijgerechten", id: 6, name: "Loempia met Rundvlees", price: "7.50"},
      {category: "Bijgerechten", id: 7, name: "Loempia met 2 stokjes Saté", price: "7.20"}
    ]
  },
  {
    id: "kleine-moghul",
    name: "De Kleine Moghul",
    location: "Groningen",
    menu: [
    ]
  }
];

export const restaurantsByLocation = groupBy(restaurants, (r) => r.location);

export const getRestaurant = (id: string) => {
  const match = restaurants.find((restaurant) => restaurant.id === id);
  if (!match) throw new Error("Not found");
  return match;
};
