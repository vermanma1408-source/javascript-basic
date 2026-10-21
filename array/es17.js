/*
  ESERCIZIO RIASSUNTIVO 3 - Numeri pari

  Dato l'array [3, 8, 12, 5, 20, 7, 14]:
  - estrai solo i numeri pari (filter)
  - raddoppia ogni numero pari trovato (map)
  - restituisci il nuovo array

  Risultato: [16, 24, 40, 28]
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es17() {
  const numeri = [3, 8, 12, 5, 20, 7, 14];
  // TODO: scrivi qui la tua soluzione
  var numeri1 = numeri.filter(n => n%2 === 0)
  return numeri1.map(x => x * 2)
  
  
}

// --- NON MODIFICARE SOTTO ---
export { es17 };
