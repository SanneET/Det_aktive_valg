# Brug af Fetch til dynamisk videoindlæsning
Her arbejeder vi med fetch til at hente JSON-data og dynamisk opdatere kilden til en <video>-element i html. Funktionen setVideoSource() anvender fetch til at hente en JSON-fil, som indeholder stien til en videofil. Når stien er hentet, sættes den som kilde til videoen, som derefter afspilles automatisk.

### Funktioner i javascript
1. Funktionen setVideoSource() bruger fetch til at hente JSON-data fra filen json/jsondata.json.
2. Indlæsning af video fra JSON-data: data[2].videoSalat bruges til at hente stien til videoen fra JSON-objektet.
3. Opdatering af <video>-elementet: Den hentede videostien tilføjes som en ny kilde til video-elementet på siden, hvorefter videoen afspilles.
4. Tidsforsinket UI-opdatering: Efter 47 sekunder tilføjes CSS-klassen show til et element med id="flexId