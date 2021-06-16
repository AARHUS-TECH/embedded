## Projekt "Styring af Væksthus"
Dette projekt går ud på at vi skal lave styring til et drivhus og et hønsehus, til at lave projektet skal vi bruge en form for arduino der kommunikere med en cloudløsning og cloudløsningen sender data til et WebInterface. 

Styringen i drivhuset indebære:
- fugtighedssensorer i jorden, til at overvåge at jorden ikke bliver for tør.
- fugtighedssensorer til at regulere fugtigheden i luften inde i drivhuset.
- 2 moterer, en til hver vindue, dette skal kunne indstilles efter brugeren behov f.eks. at hvis det blæser skal det åbne lidt i den side vinden kommer fra og helt i den anden side.

Styringen i hønsehuset indebære: 
- lyssensor, dette skal være en mulighed for brugeren at indstille lågen til at åbne når det er lyst og lukke når det er mørkt.
- tidssensor til at kunne indstille lågen til at åbne på et bestemt tidspunkt, dette skal også kunne indstilles af brugeren.
- en form for et signal, når lågen lukker til at lokke hønsene ind i huset igen. 
- en counter til at informere brugeren om hvor mange hønse der er gået igennem lågen. 

## Spørgsmål Til Opgaven
- Hvor hurtigt skal de blæse for at vores vindue åbner?
- Indstillinger af vinduer (fuld, medium, lav)?
- Startpunkt for vinduer, starter de altid som lukket?
- Hvor meget skal vinduerne kunne åbnes for at de ikke går i stykker?
- Hvor lang tid skal vinduerne være åben?
- Hvor fugtigt skal drivhuset være?
- Skal hønse døren køre på tid eller lys?
- Hvad sker der hvis en høne bliver lukket udenfor?


## Proof of concept
Til at starte med vil vi gerne lave et "Proof of concept", et "Proof of concept" er at man laver en lille version af opgaven først, for at se om det egentlig er muligt og så også for at finde evt. oversete problemstillinger. 
I vores proff of concept vil vi: 
- simulere moterne med en blinkende LED, 
- Vandpumperne vil flytte vand fra en kop til en anden kop.
- Håndteringen af vind vil vi bruge en blæser

## WBS
I starten var vi lidt overvældet at opgaven, da vi aldrig rigtigt havde arbejdet med teknologierne før, derfor lavede vi en (Work Breakdown Structure)
også Kaldet en WBS. Dette går ud på at vi bryder hovedopgaven op i flere delmål, dette gør opgaven nemmere at overskue, på den måde at man
kan skære nogle ting fra som man så laver senere i delmålende. vores WBS ser sådan her ud: 
1. Skabt overblik over opgaven 
    - Problemformulering
    - løsningsforslag
    - Udstyr 
    - Teknologier
2. Få lavet en arduino der blinker med en enkelt LED for at få en fornemmelse af det
3. Få en sensor af gangen til at virke
    - Starte med fugtighedssensor 
    - Få Temperatur sensoren til at outputte data
    - Få sensorne til hønselågen til at virke 
    - Få vindstationen til at outputte data 
4. Finde ud af hvordan vi skal få flere sensorer til at snakke sammen 
5. begynde og kigge på en cloudløsning 
6. 
7. få cloudløsningen op og køre
8. begynde at bygge webinterfacet der kommunikere med clouden 
9. UserTest
10. Rettelser 
11. UserApprovel 
12. Rapportskrivning

## Binary System IKKE FÆRDIG
det binere system er det system som computere operere i, med det menes der at computere foretager beregninger og behandler data bestående af 1 og 0.
En byte består af 8 bits som gør at en byte kan indeholde 256 forskellige værdiger, 
bits kan f.eks. indeholde data til repræsentation af et bogstav i et tekstdokument. 

## Convert T
Convert t initialisere en temperatur læsning og den data den læser er lageret i en 2 byte hurtig intern hukommelse (Scratchpad). Efter den data er lageret går sensoren tilbage til et low power mode inden for 10 mikrosekunder. Efter det skal der laves en strong pullup i den tid sensoren skal læse temperatur, elles virker sensoren ikke. Strong pullup er når sensoren får mere strøm så den kan få præcise målinger

## Sensorer / udstyr
3 motorere
- 2 til vinduerne til drivhuset
- 1 til lågen på hønsehuset 
2 vandpumper
- Disse skal bruges til at vande bedende og regulere fugtigheden 
4 fugtighedssensorer 
- 2 i bedende til at regulere fugtigheden i jorden 
- 2 til at måle fugtigheden i drivhuset
1 vindstation
- bruges til at måle vinden
1 timer
- til at indstille til lågen i hønsehuset 
1 buzzer 
- signal til at signalere at nu lukker lågen snart 
1 lyssensor 
- til at indstille til lågen i hønsehuset 

## Cloud
Formålet med at involvere en cloud er at vi vil bruge den til at opbevare data fra vores arduinoer,
Vores clound skal opbevare data, sende data til vores interface og komunikere med vores arduinoer med kommandoer som vores cloud får fra vores interface.
Til vores cloudløsning vil vi gerne bruge Azure IoT Hub, (den gratis version). 
I Azure vil vi kunne connecte vores sensore og kommunikere med dem også

## Kredsløb
I opbygningen af vores projekt vil vi gerne lave 4 forskellige kredsløb. vi vil gerne have 3 kredsløb i drivhuset og et i hønsehuset.
drivhuset:
- hvert af de 2 bede i drivhuset skal køre på et seperat kredsløb, Det betyder at der vil være 1 kredsløb til hver fugtighedssensor som måler jordens fugtighed
- så vil Temperatursensoren, Vindmålern, de 2 Motore, og fugtighedssensorne køre på et andet kredsløb. 
- Hønsegården vil køre på en 3 kredsløb.
 


