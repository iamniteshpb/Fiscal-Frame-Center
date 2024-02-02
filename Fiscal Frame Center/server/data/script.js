import { kpis, transactions, products } from "./data.js";
import fs from "fs"

fs.writeFileSync("./kpis.json", JSON.stringify(kpis))
fs.writeFileSync("./tranx.json", JSON.stringify(transactions))
fs.writeFileSync("./product.json", JSON.stringify(products))