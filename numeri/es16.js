/*
  ESERCIZIO RIASSUNTIVO 2 - Media voti

  Dati i voti 7, 8, 6, 9, 8:
  - calcola la somma
  - calcola la media
  - arrotonda la media all'intero più vicino

  Restituisci: { somma: 38, media: 7.6, mediaArrotondata: 8 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es16() {
  const voti = [7, 8, 6, 9, 8];
  const somma = 7 + 8 + 6 + 9 + 8
  const media = somma/5
  const mediaArrotondata = Math.round(media)
  // TODO: scrivi qui la tua soluzione
  return {somma, media, mediaArrotondata}
}

// --- NON MODIFICARE SOTTO ---
export { es16 };
