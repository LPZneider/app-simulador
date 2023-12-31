const entidad = new Map();

const abecedario = "abcdefghijklmnopqrstuvwxyz".split("");

const descripcion = [
  "Pérdida de 1-3 centímetros no deformante",
  "Pérdida de 1-3 centímetros deformante",
  "Pérdida de 3 a 10 centímetros no deformante",
  "Pérdida de 3 a 10 centímetros deformante",
  "Pérdida de más de 10 centímetros no deformante",
  "Pérdida de más de 10 centímetros deformante",
];
const indices = [[1], [2], [2, 4], [5, 8], [6, 9], [10, 16]];
for (let i = 0; i < descripcion.length; i++) {
 
    entidad.set("1-100" + abecedario[i - 1], {
      descripcion: descripcion[i],
      indice: "1-100" + abecedario[i - 1],
      indiceLesion: indices[i],
    });
  
}
const entidad2 = new Map();

const codigos = [
  "1-011",
  "1-012",
  "1-013",
  "1-014",
  "1-015",
  "1-016",
  "1-017",
  "1-018",
  "1-019",
  "1-020",
  "1-021",
  "1-023",
  "1-024",
  "1-025",
  "1-026",
  "1-027",
  "1-028",
  "1-29",
  "1-30",
  "1-31",
  "1-011c",
  "1-042",
  "1-051",
  "1-052",
  "1-061",
  "1-062",
  "1-063",
  "1-071",
  "1-072",
  "1-081",
  "1-082",
  "1-083",
  "1-084",
  "1-085",
  "1-086",
  "1-87",
  "1-88",
  "1-089",
  "1-090",
  "1-091",
  "1-092",
  "1-093",
  "1-094",
  "1-095",
  "1-106",
  "1-107",
  "1-108",
  "1-109",
  "1-110",
  "1-111",
  "1-112",
  "1-113",
  "1-114",
  "1-124",
  "1-125",
  "1-126",
  "1-127",
  "1-128",
  "1-138",
  "1-139",
  "1-140",
  "1-141",
  "1-142",
  "1-143",
  "1-153",
  "1-154",
  "1-155",
  "1-156",
  "1-157",
  "1-158",
  "1-168",
  "1-169",
  "1-170",
  "1-171",
  "1-172",
  "1-173",
  "1-174",
  "1-175",
  "1-176",
  "1-186",
  "1-187",
  "1-188",
  "1-189",
  "1-190",
  "1-191",
  "1-192",
  "1-202",
  "1-203",
  "1-204",
  "1-205",
  "1-206",
  "1-216",
  "1-217",
  "1-218",
  "1-219",
  "1-220",
  "1-221",
  "1-222",
  "1-223",
  "2-001",
  "3-002",
  "2-003",
  "2-004",
  "2-005",
  "2-006",
  "2-007",
  "2-008",
  "2-18",
  "2-19",
  "2-20",
  "2-21",
  "2-22",
  "2-032",
  "2-033",
  "2-034",
  "2-035",
  "2-45",
  "2-46",
  "2-056",
  "2-057",
  "2-058",
  "2-059",
  "2-060",
  "2-061",
  "2-062",
  "2-063",
  "3-001",
  "3-002",
  "3-003",
  "3-004",
  "3-005",
  "3-015",
  "3-016",
  "3-017",
  "3-027",
  "3-028",
  "3-029",
  "3-030",
  "3-040",
  "4-001",
  "4-011",
  "4-021",
  "4-022",
  "4-023",
  "4-024",
  "4-025",
  "4-035",
  "4-045",
  "4-055",
  "4-065",
  "4-075",
  "4-085",
  "4-095",
  "4-105",
  "4-115",
  "4-125",
  "4-135",
  "4-145",
  "4-155",
  "4-165",
  "4-175",
  "4-176",
  "4-177",
  "4-178",
  "4-179",
  "4-189",
  "4-190",
  "4-191",
  "4-192",
  "4-193",
];
const descripcion2 = [
  "Lesiones de los huesos propios con estenosis nasal unilateral",
  "Lesiones de los huesos propios con estenosis nasal",
  "Pérdida parcial de un maxilar superior según su extensión y repercusión funcional",
  "Perdida total de un maxilar superior",
  "Pérdida parcial de los maxilares superiores según extensión y repercusión funcional",
  "Pérdida total de los maxilares superiores",
  "Fracturas múltiples con consolidación Viciosa de los maxilares superiores malar arco zigomático, huesos de la nariz bóveda palatina, órbita sin mayor repercusión funcional estética.",
  "Pérdida de los maxilares superiores, malararco zigomático, huesos de la nariz bóvedapalatina , órbita y partes blandas",
  "pérdida parcial de la bóveda palatina según su extensión y el compromiso de la arcada dentaría:",
  "Pérdida parcial de la bóveda palatina",
  "Pérdida de substancias , de la bóveda palatina y del velo del paladar",
  "Pérdida parcial del maxilar inferior con marcada repercusión funcional, según su extensión , deformación y alteración de la función.",
  "Pérdida total del maxilar inferior",
  "Trastornos de la masticación por lesiones de las articulaciones temporo -mandibulares. Sin pérdida de substancia ósea",
  "Perdida de los maxilares superiores y de la mandibula",
  "Otras lesiones óseas de la cara que produzcan deformaciones o alteraciones funcionales",
  "Pérdidas hasta de 5 piezas dentarías. Únicamente prótesis por la sanidad respectiva",
  "Pérdida traumática de más de 5 piezas dentarías con prótesis y masticación deficiente, proporcionalmente al número de piezas perdidas",
  "Pérdidas total de la dentadura de origen traumático y prótesis",
  "Lesiones severas de los maxilares , con amputación parcial o total de la lengua con graves trastornos de la deglución y del lenguaje.",

  "Lesiones o afecciones que determinen alteraciones de los movimientos normales del cuello o dolor con o sin signos radiológicos de origen traumático:",
  "Lesiones o afecciones que determinen alteraciones de los movimientos normales del cuello o dolor con o sin signos radiológicos de origen degenerativo",
  "Lesiones o afecciones esternales , condrocostales, vertebrales dorsales sin repercusión funcional",
  "Lesiones o afecciones esternales , condrocostales, vertebrales dorsales con repercusión funcional",
  "Lesiones o afecciones de la columna lumbar, incluyendo las dos últimas vértebras dorsales sin repercusión funcional",
  "Lesiones o afecciones de la columna lumbar, incluyendo las dos últimas vértebras dorsales con repercusión funcional",
  "Discitis , síndrome del causal estrecho o postelaminectomía y otras lesiones de este 3 tipo no contempladas",
  "Lesiones o afecciones de los huesos de la pelvis o de las articulaciones sacroilíacas, sacrococígeas y pubianas con alteración u con recuperación funcional",
  " Lesiones o afecciones de los huesos de la pelvis o de las articulaciones sacroilíacas, sacrococígeas y pubianas con alteración u sin recuperación funcional",
  "Lesiones o afecciones con dolor o limitación de los movimientos del hombro , de etiología traumática",
  "Lesiones o afecciones con dolor o limitación de los movimientos del hombro , con etiología degenerativa:",
  "lesiones o afecciones claviculares",
  "Luxación recidivante de la articulación del hombro , inoperable o reproducida después de intervención quirúrgica",
  "Hombro balante por amplia resección o pérdida considerable de sustancia ósea (posibilidad de aparato ortopédico)",
  "Lesiones o afecciones del brazo con deformidad ósea y alteraciones de las partes blandas",
  "Lesiones o afecciones que produzcan inmovilidad completa de la articulación del hombro",
  "Pérdida anatómica total del miembro superior",
  "Pérdida anatómica del antebrazo con conservación funcional del codo",
  "Lesiones o afecciones que produzcan alteraciones o limitación de la movilidad del codo",
  "Lesiones o afecciones que produzcan Anquilosis de la articulación del codo:",
  "Limitación o abolición de los movimientos de pronosupinación del antebrazo",
  "Lesiones o afecciones del antebrazo según la deformidad ósea y la alteración de las partes blandas",
  "Lesiones o afecciones que produzcan alteraciones o limitaciones de los movimientos del puño",
  "Pérdida anatómica de ambos miembros superiores",
  "Pérdida anatómica o funcional de una mano",
  "Pérdida anatómica o funcional de las dos manos.",
  "Lesiones o afecciones de la palma o el dorso de la mano según la deformidad ósea, la alteración de las partes blandas y la repercusión en la dinámica de la mano",
  "Perdida de Cuatro (4) dedos y sus metacarpianos",
  "Pérdida de cuatro (4) dedos",
  "Perdida de tres (3 ) dedos y sus metacarpianos ",
  "Perdida de tres (3 ) dedos",
  "Perdida de dos (2 ) dedos y sus metacarpianos ",
  "Perdida de dos (2 ) dedos",
  "Perdida	anatómica	del	pulgar	y	del metacarpiano correspondiente",
  "Perdida anatómica o funcional del pulgar",
  "Perdida anatómica o funcional de la segunda falange",
  "Anquilosis	metacarpofalángica	o interfalangica",
  "Anquilosis carpometacarpiana del pulgar",
  "Pérdida anatómica o funcional",
  "Pérdida	anatómica o funcional de las dos ultimas falanges",
  "Pérdida anatómica de la falange ungueal.",
  "Anquilosis metacarpo falángica",
  "Anquilosis	de	las	articulaciones interfalángicas",
  "Anquilosis de una articulación interfalángica",
  "Pérdida anatómica o funcional",
  "Pérdida anatómica de las dos (2) últimas falanges",
  "Pérdida anatómica de la falange ungueal",
  "Anquilosis metacarpofalángica.",
  "Anquilosis de las articulaciones interfalángicas.",
  "Anquilosis de una articulación interfalángica",
  "Lesiones o afecciones que alteran la función de las dos articulaciones coxofemorales",
  "Lesiones o afecciones que alteran la función de una articulación coxofemoral",
  "Lesiones o afecciones que produzcan inmovilidad completa de las dos articulaciones coxofemorales",
  "Lesiones o afecciones que produzcan inmovilidad completa de una articulación coxofemoral",
  "Lesiones o afecciones del muslo según la alteración ósea y las partes blandas",
  "Perdida anatómica total de los dos(2) miembros inferiores",
  "Pérdida anatómica de los dos /2) miembros inferiores",
  "Pérdida anatómica de un miembro inferior",
  "Lesiones o afecciones que produzcan asimetría longitudinal de los miembros inferiores",
  "Perdida anatómica de una (1) pierna por desarticulación de la rodilla.",
  "Pérdida anatómica de una (1) pierna con conservación funcional de la rodilla y con muñón para prótesis.",
  "Lesiones o afecciones que inmovilicen las dos articulaciones de las rodillas ",
  "Lesiones o afecciones que inmovilicen una rodilla",
  "Lesiones o afecciones que produzcan alteración de la función de las dos (2 ) rodillas ",
  "Lesiones o afecciones que produzcan alteración de la función de una rodilla…",
  "Lesiones o afecciones de la pierna según el grado de alteración ósea y de las piernas blandas",
  "Perdida anatómica total del pie ( amputación de Symes )",
  "Amputación del antepie con prótesis cosmética",
  "Anquilosis del Pie ",
  "Lesiones o afecciones que produzcan alteraciones de la función de la articulación tibiotarsiana o del tarso posterior",
  "Lesiones o afecciones en la planta y del dorso del pie según la deformidad ósea, la alteración de las partes blandas y la repercusión en la dinámica del pie",
  "Pérdida de los cinco (5) artejos de ambos pies",
  "Pérdida de los cinco (5) artejos de un pie",
  "Perdida del grueso artejo de ambos pies",
  "Perdida del grueso artejo de un pie",
  "Perdida de los artejos , excepto el gran artejo",
  "Pérdida total de la falange distal del grueso artejo",
  "Seudoartrocis no susceptibles de tratamiento",
  "Ostemielitis no susceptible de tratamiento en cualquier localización",
  "Dermatitis atópica",
  "Alérgica nasal",
  "Polinosis",
  "Urticaria y angiodema",
  "Dermatitis por contacto",
  "Hipersensibilidad bacteriana",
  "Asma de etiología alérgica",
  "Alergia Física",
  "Contraindicación quirúrgica",
  "Hipertiroidismo",
  "Hipotiroidismo",
  "Hiperparatiroidismo ",
  "Hipoparatiroidismo ",
  "Acromegalia:",
  "Diabetes insípida",
  "Caquexia de Simmons",
  "Síndrome o enfermedad de Cushing",
  "Enfermedad de Addison:",
  "Feocromositoma",
  "Gota con deformación articular",
  "Diabetes Mellitus:",
  "Estre tropical o enfermedad de Tee",
  "Esteatorrea idiopática o enfermedad de Whispple",
  "Enfermedad de Wilson - Brocq",
  "Hemocromatosis",
  "Porfirias",
  "Enfermedades maníaco-depresiva",
  "Episodios sicóticos agudos",
  "Sicosis reactiva",
  "Sicosis esquizofrénicas crónicas",
  "Estados paranoides",
  "Demencia senil después de los 65 años",
  "Demencia presenil antes de los 65 años",
  "Otras sicosis: Deterioro mental por lesiones cerebrales irreversibles ",
  "Neurosis depresiva",
  "Neurosis histérica",
  "Neurosis obsesiva compulsiva",
  "Neurosis hipocondría",
  "Depresión reactiva",
  "Afasia expresiva, receptiva o global",
  "Ataxias cualquiera que sea su origen",
  "Parkinsonismos Unilateral Derecho",
  "Parkinsonismos Unilateral Izquierdo",
  "Parkinsonismos Bilateral",
  "Coreas crónicas y/o coreatetosis",
  "Distonías musculares y/o hemibalismo",
  "Síndrome convulsivos",
  "Alteraciones del trigémino, cualquiera que sea su origen",
  "Alteraciones del nervio facial, cualquiera que sea su origen ( FACIAL )",
  "Alteraciones del nervio facial, cualquiera que sea su origen ( GLOSOFARINGEO)",
  "Alteraciones del nervio glosofaríngeo, cualquiera que sea su origen",
  "Alteraciones del nervio neumogástrico, cualquiera que sea su origen",
  "Alteraciones del nervio espinal, cualquiera que sea su origen",
  "Alteraciones del nervio hipogloso, cualquiera que sea su origen",
  "Cuadriplejías, cualquiera que sea causa u origen",
  "Paraplejías, cualquiera que sea causa u origen",
  "Hemiplejías, cualquiera que sea causa u origen",
  "Monoplejías, cualquiera que sea su causa u origen",
  "Paraparesias, cualquiera que sea su causa u origen",
  "Monoparesias, cualquiera que sea su causa u origen",
  "Hemiparesia, cualquiera que sea su causa u origen",
  "Ciática",
  "Lesiones o afecciones del nervio ciático común",
  "Lesiones o afecciones del nervio crural",
  "Lesiones o afecciones del nervio ciático poplíteo externo o perone",
  "Lesiones o afecciones del nervio ciático poplíteo interno posterior",
  "Lesiones o afecciones aisladas de los nervios circunflejos, músculo cutáneo o sensitivos colaterales del plexo braquial",
  "Lesiones o afecciones del nervio radial",
  "Lesiones o afecciones del nervio medio, según el grado de alteración motora, sensitiva o trófica",
  "Lesiones o afecciones del nervio cubital, según el grado de alteración motora, sensitiva o trófica",
  "Alteraciones de la sensibilidad superficial o profunda en los miembros superiores o inferiores, con signos objetivos",
];

const indices2 = [
  [2],
  [5],
  [6, 10],
  14,
  [11, 14],
  [19],
  [14],
  [20],
  [3, 6],
  [10],
  [4, 8, 12],
  [10, 14],
  [20],
  [4, 7, 14],
  [21],
  [3, 6, 9],
  [4],
  [4],
  [5],
  [21],
  [4, 8, 12],
  [2, 4, 6],
  [1, 4, 9],
  [4, 8, 12],
  [1, 5, 10],
  [5, 10, 15],
  [3, 6, 9],
  [5, 10, 15],
  [1, 5, 10],
  [2, 4, 8],
  [2, 4],
  [3],
  [9, 10],
  [13, 14],
  [2, 6],
  [11, 12],
  [19, 20],
  [14, 15],
  [2, 6, 9],
  [10, 12],
  [2, 4, 8],
  [3, 4],
  [1, 4],
  [2, 6],
  [14, 15],
  [1, 2],
  [2, 5, 10],
  [14, 15],
  [11, 12],
  [11, 12],
  [10, 11],
  [9, 11],
  [8, 10],
  [1, 8],
  [6, 7],
  [3, 4],
  [1, 2],
  [5, 8],
  [5, 6],
  [3, 4],
  [1],
  [4, 5],
  [3, 4],
  [1],
  [4, 5],
  [2, 3],
  [1],
  [4, 5],
  [2, 3],
  [1],
  [9, 12, 15],
  [8],
  [20],
  [13],
  [6, 9],
  [21],
  [20, 21],
  [19, 20],
  [2, 5, 9],
  [20],
  [19],
  [10, 16],
  [8, 15],
  [7, 10, 13],
  [7],
  [2, 6],
  [14, 20],
  [10, 14],
  [6, 8, 10],
  [4, 7, 10],
  [6, 9, 10],
  [10],
  [7],
  [6],
  [4],
  [1, 3, 4],
  [0.1],
  [10],
  [12],
  [5],
  [6, 8],
  [4],
  [6],
  [8],
  [8],
  [4, 8, 19],
  [5],
  [8],
  [12],
  [5],
  [9, 15, 21],
  [8, 19],
  [3, 8, 21],
  [3, 6, 21],
  [13, 17, 21],
  [13, 17, 21],
  [10, 14, 19],
  [21],
  [5, 9],
  [10],
  [15, 21],
  [10, 14, 19],
  [10, 14, 19],
  [6, 10, 21],
  [6, 10, 21],
  [5, 8, 12],
  [8, 19],
  [10, 19],
  [5],
  [18, 21],
  [8, 14, 21],
  [19],
  [21],
  [9, 14, 21],
  [4],
  [2],
  [2],
  [2],
  [5, 14],
  [9, 14, 21],
  [4, 12, 21],
  [8],
  [7],
  [9, 13, 19],
  [9, 13, 19],
  [5, 11, 19],
  [4, 14, 21],
  [8, 14, 21],
  [8, 14, 21],
  [9, 15, 21],
  [6, 10, 15],
  [8, 12, 16],
  [21],
  [21],
  [20],
  [6, 10, 14],
  [8, 12, 19],
  [6, 12],
  [5, 8, 12],
  [10, 14],
  [11, 14, 21],
  [3, 7, 10],
  [2, 5, 10],
  [2, 5, 10],
  [2, 5, 8],
  [2, 4, 6],
  [5, 9, 13],
  [5, 9, 13],
  [5, 9, 13],
  [5, 8, 11],
];

for (let i = 0; i < codigos.length; i++) {
  entidad2.set(codigos[i], {
    descripcion: descripcion2[i],
    indice: codigos[i],
    indiceLesion: indices2[i],
  });
}
const entidadFusionada = new Map([...entidad, ...entidad2]);

export { entidadFusionada };
