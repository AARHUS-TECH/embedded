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

## Problem stillinger
Da vi begyndte og tænke på hvilke sensorer vi skulle have med i vores løsning fik vi en masse spørgsmål som blandt andet. 

## Proff of concept
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
2. Få lavet en arduino der blinker for at få en fornemmelse af det
3. 

## Binary System
det binere system er det system som computere operere i, med det menes der at computere foretager beregninger og behandler data bestående af 1 og 0.
En byte består af 8 bits som gør at en byte kan indeholde 256 forskellige værdiger, 
bits kan f.eks. indeholde data til repræsentation af et bogstav i et tekstdokument. 

## Convert T
Convert t initialisere en temperatur læsning og den data den læser er lageret i en 2 byte hurtig intern hukommelse (Scratchpad). Efter den data er lageret går sensoren tilbage til et low power mode inden for 10 mikrosekunder. Efter det skal der laves en strong pullup i den tid sensoren skal læse temperatur, elles virker sensoren ikke. Strong pullup er når sensoren får mere strøm så den kan få præcise målinger

## Sensorer / udstyr


