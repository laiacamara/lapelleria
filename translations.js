const translations = {
    ca: {
        // Navegació
        nav_home: "Inici",
        nav_weekly: "Menú Setmanal",
        nav_carta: "La Carta",
        nav_gallery: "Galeria",
        nav_opinions: "Opinions",
        nav_contact: "On som & Reserves",
        nav_book_btn: "Reservar",

        // Hero
        hero_tagline: "bona gent, bones tapes",
        hero_desc: "Sente't com a casa en el nostre acollidor bar de tapes al centre històric de Caldes de Montbui. Productes de qualitat i cuina casolana amb passió.",
        hero_view_menu: "Veure la Carta",
        hero_book_table: "Reservar Taula",

        // Widget d'estat (calcular JS)
        status_open: "OBERT ARA",
        status_closed: "TANCAT ARA",
        status_enjoy: "Vine a gaudir de la carta!",
        status_closing_at: "Tanquem a les",
        status_opening_tomorrow: "obrim demà a les",
        status_opening_next: "obrim",
        status_tomorrow: "demà",
        status_on_monday: "dilluns",
        status_on_wednesday: "demecre", // o dimecres
        status_today: "Avui",

        // Dies setmana curt (Widget)
        day_0: "diumenge",
        day_1: "dilluns",
        day_2: "dimarts",
        day_3: "dimecres",
        day_4: "dijous",
        day_5: "divendres",
        day_6: "dissabte",

        // Menú Setmanal
        weekly_subtitle: "Fresquet, Variat i Casolà",
        weekly_title: "El Menú Setmanal",
        weekly_board_subtitle: "Menú de Migdia",
        weekly_board_inclusion: "* Inclou pa, aigua o copa de vi",
        weekly_primers: "Primers",
        weekly_segons: "Segons",
        weekly_postres: "Postres",
        weekly_half_menu: "Opció de mig menú: <strong>11€</strong>",
        weekly_sencer: "Sencer",

        // La Carta
        carta_subtitle: "Tria, comparteix i gaudeix",
        carta_title: "La Nostra Carta",
        
        // Filtres
        filter_all: "Tot",
        filter_tapes: "Les Tapes",
        filter_plats: "Els Plats",
        filter_coques: "Les Coques",
        filter_entrepans: "Entrepans",
        filter_vermut: "Packs Vermut",
        filter_infantil: "Per als més petits",

        // Etiquetes dieta
        badge_featured: "Destacat de la casa",
        badge_new: "Novetats",
        badge_recomanat: "Recomanat",
        badge_picant: "Toc picant",
        badge_veggie: "Vegetarià",
        badge_spicy: "Picant",
        badge_gf: "Sense gluten",
        badge_vermut_qty: "Ideal 2 persones",

        // Productes Carta
        item_brioche_title: "Brioix amb tàrtar de salmó",
        item_brioche_desc: "Pa brioix mantegós i torrat amb una base de ruca, tàrtar de salmó marinat fresc i decorat amb gotes de formatge crema i sèsam negre.",
        
        item_gambes_title: "Gambes a l'allet & Zamburinyes",
        item_gambes_desc: "Gambes saltades amb alls laminats daurats i un toc de bitxo. També oferim saboroses zamburinyes individuals gratinades amb salsa de marisc fina.",

        item_braves_title: "Braves de La Pelleria",
        item_braves_desc: "Patates tallades a daus, cruixents per fora i toves per dins, amb la nostra salsa brava secreta picanteta i allioli casolà.",

        item_ous_title: "Ous estrellats amb pernil",
        item_ous_desc: "Base de patates fregides a rodanxes, ous de pagès ferrats trencats per sobre i encenalls de pernil ibèric de gla de primera qualitat.",

        item_croquetes_title: "Croquetes casolanes (unitat)",
        item_croquetes_desc: "Massa super cremosa elaborada a mà. Sabors disponibles: Cua de bou, Secret amb mel, Rostit tradicional, o Verdures amb formatge de cabra.",

        item_torreznos_title: "Torreznos cruixents",
        item_torreznos_desc: "Panceta de porc de Sòria rostida i fregida a alta temperatura per aconseguir una pellassa hiper cruixent i un interior melós.",

        item_fingers_title: "Fingers de pollastre casolans",
        item_fingers_desc: "Tires de pit de pollastre marinades amb herbes, arrebossades amb panko japonès súper cruixent i servides amb salsa de mel i mostassa.",

        item_gildes_title: "Dúo de gildes clàssiques",
        item_gildes_desc: "La tapa basca per excel·lència. Dues broquetes d'oliva verda farcida, anxova del Cantàbric en salaó i bitxo d'Ibarra en vinagre (guindilla).",

        item_seitons_title: "Seitons en vinagre",
        item_seitons_desc: "Seitons frescos marinats en vinagre de vi blanc, all i julivert picat, banyats en oli d'oliva verge extra.",

        item_anxoves_title: "Anxoves de l'Escala",
        item_anxoves_desc: "Filets de primera qualitat en salaó, servits sobre una base de tomàquet ratllat i un rajolí d'oli d'oliva.",

        item_russa_title: "Amanida russa tradicional",
        item_russa_desc: "Patata, pastanaga i ou bullits, barrejats amb bona tonyina del Nord, maionesa suau i decorat amb olives i tires de pebrot escalivat.",

        item_escalivada_title: "Escalivada amb anxoves",
        item_escalivada_desc: "Pebrot vermell, albergínia i ceba rostits a la llenya i pelats a mà, amanits amb oli i coberts amb filets d'anxova premium.",

        item_hummus_title: "Hummus de curri casolà",
        item_hummus_desc: "Puré cremós de cigrons i tahina aromatitzat amb espècies de curri i llimona, servit amb pa de pita calent per dipejar.",

        item_taula_pernil_title: "Taula de pernil ibèric",
        item_taula_pernil_desc: "Generosa taula de pernil ibèric de gla tallat fi, acompanyat de llesques de pa de pagès amb tomàquet i oli.",

        item_taula_embotits_title: "Taula d'embotits de Caldes",
        item_taula_embotits_desc: "Selecció d'embotits artesanals locals de la comarca: llonganissa, bull blanc i negre, i xoriç sec amb pa amb tomàquet.",

        item_taula_formatges_title: "Taula de formatges nacionals",
        item_taula_formatges_desc: "Formatges variats de cabra, ovella, vaca i un blau intens, acompanyats de melmelades casolanes i fruits secs torrats.",

        item_musclos_title: "Musclos a la marinera",
        item_musclos_desc: "Musclos frescos de roca cuinats al vapor amb ceba, all, tomàquet i una reducció de vi blanc lleugerament picant.",

        // Plats
        item_amanida_burrata_title: "Amanida de tomàquets amb burrata",
        item_amanida_burrata_desc: "Tomàquets madurs de km 0, pesto fresc d'alfàbrega, burrata de búfala italiana de 150g cremosa i pinyons torrats.",

        item_parmentier_bolets_title: "Parmentier amb bolets i ou ferrat",
        item_parmentier_bolets_desc: "Puré de patates cremós estil Robuchon, barreja de bolets de temporada saltats i un ou ecològic ferrat a sobre amb tòfona ratllada.",

        item_hamburguesa_title: "Hamburguesa de vedella \"La Pelleria\"",
        item_hamburguesa_desc: "200g de carn de vedella seleccionada a la graella, canonges, encenalls de formatge manxec curat i maionesa amb aroma de tòfona.",

        item_galta_title: "Galta de porc guisada",
        item_galta_desc: "Galta de porc desossada cuinada lentament amb vi negre del Vallès i verdures, molt melosa, sobre base de puré de patata.",

        item_canelo_marisc_title: "Caneló XXL de marisc",
        item_canelo_marisc_desc: "Gran caneló farcit de rap, gambes i lluç amb una beixamel fina de marisc gratinat amb formatge emmental.",

        item_tartar_salmo_title: "Tàrtar de salmó clàssic",
        item_tartar_salmo_desc: "Daus de salmó marinat, ceba tendra, tàperes i alvocat picat amb salsa soja i un toc de mostassa de Dijon, servit amb torrades primes.",

        // Coques
        item_coca_pork_title: "Coca de pulled pork i cheddar",
        item_coca_pork_desc: "Coca de fleca fina cruixent coberta de carn de porc especiada i esfilagarsada amb salsa barbacoa, formatge cheddar fos i ceba cruixent.",

        item_coca_botifarra_title: "Coca de botifarra i escalivada",
        item_coca_botifarra_desc: "La combinació perfecta catalana. Botifarra de Caldes esparracada a la graella sobre tires de pebrot i albergínia escalivats.",

        item_coca_escalivada_title: "Coca d'escalivada i anxoves",
        item_coca_escalivada_desc: "Massa de coca untada amb oli d'oliva verge, una bona base d'escalivada fumada i coronada amb anxoves de l'Escala.",

        item_coca_salmo_title: "Coca de salmó, alvocat i burrata",
        item_coca_salmo_desc: "Refrescant i gourmet. Salmó fumat selecte, làmines d'alvocat, burrata trencada a sobre i un rajolí de vinagreta de fruits secs.",

        item_coca_pernil_title: "Coca de pernil ibèric",
        item_coca_pernil_desc: "Pa de coca artesanal de Caldes de Montbui ben cruixent amb tomàquet de penjar, cobert amb fines tallades de pernil ibèric de gla.",

        // Entrepans
        item_entrep_llom_title: "Entrepà de llom i formatge",
        item_entrep_llom_desc: "Llom de porc a la planxa sucós, formatge fos en pa cruixent tipus flauta acabat de torrar.",

        item_pepito_title: "Pepito de vedella",
        item_pepito_desc: "Bistec de vedella molt tendre, marcat a alta temperatura amb all ratllat i pebrot verd fregit opcional.",

        item_entrep_pollastre_title: "Pit de pollastre amb maionesa",
        item_entrep_pollastre_desc: "Pit de pollastre planxa amb enciam fresc, tomàquet i salsa maionesa suau.",

        item_baco_title: "Entrepà de bacó i formatge",
        item_baco_desc: "Bacó fumat cruixent a la planxa amb formatge emmental fos.",

        item_xistorra_title: "Entrepà de xistorra",
        item_xistorra_desc: "Xistorra de Navarra a la graella, ben calenta i amb tot el seu sabor intens.",

        item_llonganissa_title: "Entrepà de llonganissa de Caldes",
        item_llonganissa_desc: "Llonganissa artesanal local de curació òptima amb pa untat de tomàquet i oli.",

        item_truita_francesa_title: "Entrepà de truita francesa",
        item_truita_francesa_desc: "Truita francesa feta al moment amb dos ous de gallines felices, en pa amb tomàquet suau.",

        item_truita_farcida_title: "Entrepà de truita farcida",
        item_truita_farcida_desc: "Truita sucosa farcida de formatge emmental, pernil dolç de qualitat o bacó al gust.",

        item_bikini_title: "Bikini clàssic",
        item_bikini_desc: "El de tota la vida. Pa de motlle torrat amb abundant mantega, pernil dolç i formatge fos.",

        item_bull_blanc_title: "Entrepà de bull blanc",
        item_bull_blanc_desc: "Bull blanc artesanal el·laborat per xarcuters locals, acompanyat de pa amb tomàquet.",

        item_bull_negre_title: "Entrepà de bull negre",
        item_bull_negre_desc: "Embotit tradicional de sang (\"bull negre\") de sabor característic i textura fantàstica.",

        item_xoric_title: "Entrepà de xoriç ibèric",
        item_xoric_desc: "Xoriç ibèric curat d'aroma intens amb pa amb tomàquet de penjar.",

        item_formatge_manxec_title: "Entrepà de formatge manxec",
        item_formatge_manxec_desc: "Abundants talls de formatge manxec curat amb pa amb tomàquet i un toc d'oli d'oliva verge.",

        // Packs Vermut
        item_vermut_fred_title: "Pack Vermut Fred",
        item_vermut_fred_desc: "Combina el migdia. Inclou 2 begudes a escollir (canyes Estrella Damm ben fredes, refresc o vermut de l'aixeta), patates xip cruixents, olives farcides selectes i una llauna d'escopinyes en salsa.",

        item_vermut_calent_title: "Pack Vermut Calent",
        item_vermut_calent_desc: "Pack complet que inclou 2 begudes, una ració calenta de les nostres braves, una ració de torreznos cruixents i la tapeta especial del dia.",

        // Infantil
        item_infantil_burger_title: "Hamburguesa infantil amb patates",
        item_infantil_burger_desc: "Hamburguesa de vedella de 100g fàcil de menjar, amb formatge cheddar fos, bacó cruixent i patates fregides.",

        item_infantil_croquetes_title: "Croquetes amb patates",
        item_infantil_croquetes_desc: "Tres croquetes súper cremoses de pollastre casolà acompanyades de patates fregides.",

        item_infantil_fingers_title: "Fingers de pollastre amb patates",
        item_infantil_fingers_desc: "Tires de pit de pollastre arrebossades ben cruixents, servides amb patates rodones i tomàquet.",

        item_infantil_pit_title: "Pit de pollastre planxa amb patates",
        item_infantil_pit_desc: "Filet de pit de pollastre tendre cuinat a la planxa, acompanyat de patates casolanes.",

        // Galeria
        gallery_subtitle: "Així ens veiem",
        gallery_title: "La Galeria",
        gallery_vermut: "Pack Vermut Fred",
        gallery_brioche: "Brioix de Salmó",
        gallery_barra: "Darrere la Barra",
        gallery_gambes: "Gambes i Zamburinyes",

        // Opinions
        opinions_subtitle: "Què diuen de nosaltres",
        opinions_title: "Opinions dels nostres clients",
        review_1_text: "«Les millors braves i el brioix de salmó és espectacular. L'ambient és acollidor i el servei excel·lent.»",
        review_2_text: "«Un descobriment increïble al centre de Caldes. El vermut fred és una delícia i les tapes són súper casolanes. Tornarem segur!»",
        review_3_text: "«Un lloc molt acollidor amb personal amable i menjar local increïble. La coca de pulled pork és imprescindible. Molt recomanable!»",
        opinions_cta_btn: "Deixa la teva opinió a Google",

        // Reserves
        reserves_subtitle: "T'esperem amb els braços oberts",
        reserves_title: "On som & Reserves",
        booking_card_title: "Reserva la teva taula",
        
        // Formulari
        lbl_booking_name: "Nom complet *",
        lbl_booking_phone: "Telèfon de contacte *",
        lbl_booking_date: "Data de la reserva *",
        lbl_booking_time: "Hora *",
        lbl_booking_guests: "Nombre de comensals *",
        lbl_booking_message: "Comentaris / Al·lèrgies",
        ph_booking_name: "El vostre nom",
        ph_booking_phone: "Ex: 600 000 000",
        ph_booking_guests: "Ex: 4",
        ph_booking_message: "Indica'ns si tens alguna al·lèrgia, si necessites trona per a nadó, etc.",
        booking_info_note: "* En enviar la petició, el nostre equip comprovarà la disponibilitat de taules i us confirmarà la reserva per telèfon.",
        booking_submit_btn: "Enviar petició de reserva",

        // Info lateral
        horaris_title: "Els nostres Horaris",
        horaris_days_1: "Dilluns i Dimarts",
        horaris_days_2: "Dimecres a Divendres",
        horaris_days_3: "Dissabte i Diumenge",
        
        contact_title: "Dades de Contacte",
        contact_address_lbl: "Adreça física",
        contact_phone_lbl: "Telèfon de reserves",
        contact_instagram_lbl: "Instagram",
        
        map_title: "Com arribar",

        // Footer
        footer_quote: "La Pelleria, com a casa.",
        footer_bottom: "&copy; 2026 La Pelleria - Caldes de Montbui. Tots els drets reservats. Fet amb <span>🖤</span> per a la bona gent."
    },
    
    es: {
        // Navegación
        nav_home: "Inicio",
        nav_weekly: "Menú Semanal",
        nav_carta: "La Carta",
        nav_gallery: "Galería",
        nav_opinions: "Opiniones",
        nav_contact: "Dónde estamos & Reservas",
        nav_book_btn: "Reservar",

        // Hero
        hero_tagline: "buena gente, buenas tapas",
        hero_desc: "Siéntete como en casa en nuestro acogedor bar de tapas en el centro histórico de Caldes de Montbui. Productos de calidad y cocina casera con pasión.",
        hero_view_menu: "Ver la Carta",
        hero_book_table: "Reservar Mesa",

        // Widget de estado
        status_open: "ABIERTO AHORA",
        status_closed: "CERRADO AHORA",
        status_enjoy: "¡Ven a disfrutar de la carta!",
        status_closing_at: "Cerramos a las",
        status_opening_tomorrow: "abrimos mañana a las",
        status_opening_next: "abrimos",
        status_tomorrow: "mañana",
        status_on_monday: "el lunes",
        status_on_wednesday: "el miércoles",
        status_today: "Hoy",

        // Días semana
        day_0: "domingo",
        day_1: "lunes",
        day_2: "martes",
        day_3: "miércoles",
        day_4: "jueves",
        day_5: "viernes",
        day_6: "sábado",

        // Menú Semanal
        weekly_subtitle: "Fresco, Variado y Casero",
        weekly_title: "El Menú Semanal",
        weekly_board_subtitle: "Menú de Mediodía",
        weekly_board_inclusion: "* Incluye pan, agua o copa de vino",
        weekly_primers: "Primeros",
        weekly_segons: "Segundos",
        weekly_postres: "Postres",
        weekly_half_menu: "Opción de medio menú: <strong>11€</strong>",
        weekly_sencer: "Entero",

        // La Carta
        carta_subtitle: "Elige, comparte y disfruta",
        carta_title: "Nuestra Carta",
        
        // Filtros
        filter_all: "Todo",
        filter_tapes: "Las Tapas",
        filter_plats: "Los Platos",
        filter_coques: "Las Coques",
        filter_entrepans: "Bocadillos",
        filter_vermut: "Packs Vermut",
        filter_infantil: "Para los más pequeños",

        // Etiquetas dieta
        badge_featured: "Destacado de la casa",
        badge_new: "Novedades",
        badge_recomanat: "Recomendado",
        badge_picant: "Toque picante",
        badge_veggie: "Vegetariano",
        badge_spicy: "Picante",
        badge_gf: "Sin gluten",
        badge_vermut_qty: "Ideal 2 personas",

        // Productos Carta
        item_brioche_title: "Brioche con tártar de salmón",
        item_brioche_desc: "Pan brioche mantecoso y tostado con una base de rúcula, tártar de salmó marinado fresco y decorado con gotas de queso crema y sésamo negro.",
        
        item_gambes_title: "Gambas al ajillo & Zamburiñas",
        item_gambes_desc: "Gambas salteadas con ajos laminados dorados y un toque de guindilla. También ofrecemos sabrosas zamburiñas individuales gratinadas con salsa de marisco fina.",

        item_braves_title: "Bravas de La Pelleria",
        item_braves_desc: "Patatas cortadas a dados, crujientes por fuera y tiernas por dentro, con nuestra salsa brava secreta picante y alioli casero.",

        item_ous_title: "Huevos estrellados con jamón",
        item_ous_desc: "Base de patatas fritas a rodajas, huevos de corral fritos rotos por encima y virutas de jamón ibérico de bellota de primera calidad.",

        item_croquetes_title: "Croquetas caseras (unidad)",
        item_croquetes_desc: "Masa súper cremosa elaborada a mano. Sabores disponibles: Rabo de toro, Secreto con miel, Asado tradicional, o Verduras con queso de cabra.",

        item_torreznos_title: "Torreznos crujientes",
        item_torreznos_desc: "Panceta de cerdo de Soria asada y frita a alta temperatura para conseguir una corteza hiper crujiente y un interior meloso.",

        item_fingers_title: "Fingers de pollo caseros",
        item_fingers_desc: "Tiras de pechuga de pollo marinadas con hierbas, rebozadas con panko japonés súper crujiente y servidas con salsa de miel y mostaza.",

        item_gildes_title: "Dúo de gildas clásicas",
        item_gildes_desc: "La tapa vasca por excelencia. Dos brochetas de aceituna verde rellena, anchoa del Cantábrico en salazón y guindilla de Ibarra en vinagre.",

        item_seitons_title: "Boquerones en vinagre",
        item_seitons_desc: "Boquerones frescos marinados en vinagre de vino blanco, ajo y perejil picado, bañados en aceite de oliva virgen extra.",

        item_anxoves_title: "Anchoas de L'Escala",
        item_anxoves_desc: "Filetes de primera calidad en salazón, servidos sobre una base de tomate rallado y un chorrito de aceite de oliva.",

        item_russa_title: "Ensaladilla rusa tradicional",
        item_russa_desc: "Patata, zanahoria y huevo hervidos, mezclados con buen atún del Norte, mayonesa suave y decorada con aceitunas y tiras de pimiento escalivado.",

        item_escalivada_title: "Escalivada con anchoas",
        item_escalivada_desc: "Pimiento rojo, berenjena y cebolla asados a la leña y pelados a mano, aliñados con aceite y cubiertos con filetes de anchoa premium.",

        item_hummus_title: "Hummus de curry casero",
        item_hummus_desc: "Puré cremoso de garbanzos y tahina aromatizado con especias de curry y limón, servido con pan de pita caliente para dipear.",

        item_taula_pernil_title: "Tabla de jamón ibérico",
        item_taula_pernil_desc: "Generosa tabla de jamón ibérico de bellota cortado fino, acompañado de rebanadas de pan de payés con tomate y aceite.",

        item_taula_embotits_title: "Tabla de embutidos de Caldes",
        item_taula_embotits_desc: "Selección de embutidos artesanales locales de la comarca: salchichón, \"bull\" blanco y negro, y chorizo seco con pan con tomate.",

        item_taula_formatges_title: "Tabla de quesos nacionales",
        item_taula_formatges_desc: "Quesos variados de cabra, oveja, vaca y un azul intenso, acompañados de mermeladas caseras y frutos secos tostados.",

        item_musclos_title: "Mejillones a la marinera",
        item_musclos_desc: "Mejillones frescos de roca cocinados al vapor con cebolla, ajo, tomate y una reducción de vino blanco ligeramente picante.",

        // Plats
        item_amanida_burrata_title: "Ensalada de tomates con burrata",
        item_amanida_burrata_desc: "Tomates maduros de km 0, pesto fresco de albahaca, burrata de búfala italiana de 150g cremosa y piñones tostados.",

        item_parmentier_bolets_title: "Parmentier con setas y huevo frito",
        item_parmentier_bolets_desc: "Puré de patatas cremoso estilo Robuchon, mezcla de setas de temporada salteadas y un huevo ecológico frito encima con trufa rallada.",

        item_hamburguesa_title: "Hamburguesa de ternera \"La Pelleria\"",
        item_hamburguesa_desc: "200g de carne de ternera seleccionada a la parrilla, canónigos, virutas de queso manchego curado y mayonesa con aroma de trufa.",

        item_galta_title: "Carrillera de cerdo guisada",
        item_galta_desc: "Carrillera de cerdo deshuesada cocinada lentamente con vino tinto del Vallès y verduras, muy melosa, sobre base de puré de patata.",

        item_canelo_marisc_title: "Canelón XXL de marisco",
        item_canelo_marisc_desc: "Gran canelón relleno de rape, gambas y merluza con una bechamel fina de marisco gratinado con queso emmental.",

        item_tartar_salmo_title: "Tártar de salmón clásico",
        item_tartar_salmo_desc: "Dados de salmón marinado, cebolleta, alcaparras y aguacate picado con salsa de soja y un toque de mostaza de Dijon, servido con tostadas finas.",

        // Coques
        item_coca_pork_title: "Coca de pulled pork y cheddar",
        item_coca_pork_desc: "Coca de panadería fina y crujiente cubierta de carne de cerdo especiada y deshilachada con salsa barbacoa, queso cheddar fundido y cebolla crujiente.",

        item_coca_botifarra_title: "Coca de butifarra y escalivada",
        item_coca_botifarra_desc: "La combinación perfecta catalana. Butifarra de Caldes desmenuzada a la parrilla sobre tiras de pimiento y berenjena asados.",

        item_coca_escalivada_title: "Coca de escalivada y anchoas",
        item_coca_escalivada_desc: "Masa de coca untada con aceite de oliva virgen, una buena base de escalivada ahumada y coronada con anchoas de L'Escala.",

        item_coca_salmo_title: "Coca de salmón, aguacate y burrata",
        item_coca_salmo_desc: "Refrescante y gourmet. Salmón ahumado selecto, láminas de aguacate, burrata rota encima y un chorrito de vinagreta de frutos secos.",

        item_coca_pernil_title: "Coca de jamón ibérico",
        item_coca_pernil_desc: "Pan de coca artesanal de Caldes de Montbui muy crujiente con tomate de colgar, cubierto con finas lonchas de jamón ibérico de bellota.",

        // Entrepans
        item_entrep_llom_title: "Bocadillo de lomo y queso",
        item_entrep_llom_desc: "Lomo de cerdo a la plancha jugoso, queso fundido en pan crujiente tipo flauta recién tostado.",

        item_pepito_title: "Pepito de ternera",
        item_pepito_desc: "Filete de ternera muy tierno, marcado a alta temperatura con ajo rallado y pimiento verde frito opcional.",

        item_entrep_pollastre_title: "Pechuga de pollo con mayonesa",
        item_entrep_pollastre_desc: "Pechuga de pollo a la plancha con lechuga fresca, tomate y salsa mayonesa suave.",

        item_baco_title: "Bocadillo de bacon y queso",
        item_baco_desc: "Bacon ahumado crujiente a la plancha con queso emmental fundido.",

        item_xistorra_title: "Bocadillo de chistorra",
        item_xistorra_desc: "Chistorra de Navarra a la parrilla, bien caliente y con todo su sabor intenso.",

        item_llonganissa_title: "Bocadillo de salchichón de Caldes",
        item_llonganissa_desc: "Salchichón artesanal local de curación óptima con pan untado de tomate y aceite.",

        item_truita_francesa_title: "Bocadillo de tortilla francesa",
        item_truita_francesa_desc: "Tortilla francesa hecha al momento con dos huevos de gallinas felices, en pan con tomate suave.",

        item_truita_farcida_title: "Bocadillo de tortilla rellena",
        item_truita_farcida_desc: "Tortilla jugosa rellena de queso emmental, jamón dulce de calidad o bacon al gusto.",

        item_bikini_title: "Bikini clásico",
        item_bikini_desc: "El de toda la vida. Pan de molde tostado con abundante mantequilla, jamón dulce y queso fundido.",

        item_bull_blanc_title: "Bocadillo de bull blanco",
        item_bull_blanc_desc: "Embutido tradicional blanco (\"bull blanc\") elaborado por charcuteros locales, acompañado de pan con tomate.",

        item_bull_negre_title: "Bocadillo de bull negro",
        item_bull_negre_desc: "Embutido tradicional de sangre (\"bull negre\") de sabor característico y textura fantástica.",

        item_xoric_title: "Bocadillo de chorizo ibérico",
        item_xoric_desc: "Chorizo ibérico curado de aroma intenso con pan con tomate de colgar.",

        item_formatge_manxec_title: "Bocadillo de queso manchego",
        item_formatge_manxec_desc: "Abundantes lonchas de queso manchego curado con pan con tomate y un toque de aceite de oliva virgen.",

        // Packs Vermut
        item_vermut_fred_title: "Pack Vermut Frío",
        item_vermut_fred_desc: "Combina el mediodía. Incluye 2 bebidas a elegir (cañas Estrella Damm bien frías, refresco o vermut de grifo), patatas chip crujientes, aceitunas rellenas selectas y una lata de berberechos en salsa.",

        item_vermut_calent_title: "Pack Vermut Caliente",
        item_vermut_calent_desc: "Pack completo que incluye 2 bebidas, una ración caliente de nuestras bravas, una ración de torreznos crujientes y la tapita especial del día.",

        // Infantil
        item_infantil_burger_title: "Hamburguesa infantil con patatas",
        item_infantil_burger_desc: "Hamburguesa de ternera de 100g fácil de comer, con queso cheddar fundido, bacon crujiente y patatas fritas.",

        item_infantil_croquetes_title: "Croquetas con patatas",
        item_infantil_croquetes_desc: "Tres croquetas súper cremosas de pollo casero acompañadas de patatas fritas.",

        item_infantil_fingers_title: "Fingers de pollo con patatas",
        item_infantil_fingers_desc: "Tiras de pechuga de pollo empanadas muy crujientes, servidas con patatas redondas y tomate.",

        item_infantil_pit_title: "Pechuga de pollo plancha con patatas",
        item_infantil_pit_desc: "Filete de pechuga de pollo tierna cocinada a la plancha, acompañado de patatas caseras.",

        // Galeria
        gallery_subtitle: "Así nos vemos",
        gallery_title: "La Galería",
        gallery_vermut: "Pack Vermut Frío",
        gallery_brioche: "Brioche de Salmón",
        gallery_barra: "Detrás de la Barra",
        gallery_gambes: "Gambas y Zamburiñas",

        // Opinions
        opinions_subtitle: "Qué dicen de nosotros",
        opinions_title: "La opinión de nuestros clientes",
        review_1_text: "«Las mejores bravas y el brioche de salmón es espectacular. El ambiente es acogedor y el servicio excelente.»",
        review_2_text: "«Un descubrimiento increíble en el centro de Caldes. El vermut frío es una delicia y las tapas son súper caseras. ¡Volveremos seguro!»",
        review_3_text: "«Un lugar muy acogedor con personal amable y comida local increíble. La coca de pulled pork es imprescindible. ¡Muy recomendable!»",
        opinions_cta_btn: "Deja tu opinión en Google",

        // Reserves
        reserves_subtitle: "Te esperamos con los brazos abiertos",
        reserves_title: "Dónde estamos & Reservas",
        booking_card_title: "Reserva tu mesa",
        
        // Formulario
        lbl_booking_name: "Nombre completo *",
        lbl_booking_phone: "Teléfono de contacto *",
        lbl_booking_date: "Fecha de la reserva *",
        lbl_booking_time: "Hora *",
        lbl_booking_guests: "Número de comensales *",
        lbl_booking_message: "Comentarios / Alergias",
        ph_booking_name: "Vuestro nombre",
        ph_booking_phone: "Ej: 600 000 000",
        ph_booking_guests: "Ej: 4",
        ph_booking_message: "Indícanos si tienes alguna alergia, si necesitas trona para bebé, etc.",
        booking_info_note: "* Al enviar la petición, nuestro equipo comprobará la disponibilidad de mesas y os confirmará la reserva por teléfono.",
        booking_submit_btn: "Enviar petición de reserva",

        // Info lateral
        horaris_title: "Nuestros Horarios",
        horaris_days_1: "Lunes y Martes",
        horaris_days_2: "Miércoles a Viernes",
        horaris_days_3: "Sábado y Domingo",
        
        contact_title: "Datos de Contacte",
        contact_address_lbl: "Dirección física",
        contact_phone_lbl: "Teléfono de reservas",
        contact_instagram_lbl: "Instagram",
        
        map_title: "Cómo llegar",

        // Footer
        footer_quote: "La Pelleria, como en casa.",
        footer_bottom: "&copy; 2026 La Pelleria - Caldes de Montbui. Todos los derechos reservados. Hecho con <span>🖤</span> para la buena gente."
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_weekly: "Weekly Menu",
        nav_carta: "The Menu",
        nav_gallery: "Gallery",
        nav_opinions: "Reviews",
        nav_contact: "Find Us & Book",
        nav_book_btn: "Book Table",

        // Hero
        hero_tagline: "good people, good tapas",
        hero_desc: "Feel right at home in our cozy tapas bar in the historic center of Caldes de Montbui. Quality ingredients and homemade cooking with passion.",
        hero_view_menu: "View Menu",
        hero_book_table: "Book a Table",

        // Widget status
        status_open: "OPEN NOW",
        status_closed: "CLOSED NOW",
        status_enjoy: "Come and enjoy the menu!",
        status_closing_at: "We close at",
        status_opening_tomorrow: "we open tomorrow at",
        status_opening_next: "we open",
        status_tomorrow: "tomorrow",
        status_on_monday: "on Monday",
        status_on_wednesday: "on Wednesday",
        status_today: "Today",

        // Days of week
        day_0: "Sunday",
        day_1: "Monday",
        day_2: "Tuesday",
        day_3: "Wednesday",
        day_4: "Thursday",
        day_5: "Friday",
        day_6: "Saturday",

        // Weekly Menu
        weekly_subtitle: "Fresh, Varied & Homemade",
        weekly_title: "The Weekly Menu",
        weekly_board_subtitle: "Lunch Menu",
        weekly_board_inclusion: "* Includes bread, water or a glass of wine",
        weekly_primers: "Starters",
        weekly_segons: "Mains",
        weekly_postres: "Desserts",
        weekly_half_menu: "Half-menu option: <strong>11€</strong>",
        weekly_sencer: "Full",

        // The Menu (Carta)
        carta_subtitle: "Choose, share and enjoy",
        carta_title: "Our Menu",
        
        // Filters
        filter_all: "All",
        filter_tapes: "Tapas",
        filter_plats: "Dishes",
        filter_coques: "Flatbreads (Coques)",
        filter_entrepans: "Sandwiches",
        filter_vermut: "Vermouth Packs",
        filter_infantil: "Kids Menu",

        // Diet badges
        badge_featured: "House Specialty",
        badge_new: "New Items",
        badge_recomanat: "Recommended",
        badge_picant: "Mildly spicy",
        badge_veggie: "Vegetarian",
        badge_spicy: "Spicy",
        badge_gf: "Gluten free",
        badge_vermut_qty: "Ideal for 2",

        // Products
        item_brioche_title: "Brioche with salmon tartare",
        item_brioche_desc: "Buttery toasted brioche bun with a rocket base, fresh marinated salmon tartare, cream cheese drops and black sesame seeds.",
        
        item_gambes_title: "Garlic shrimp & scallops",
        item_gambes_desc: "Sautéed shrimp with golden sliced garlic and a touch of chili. We also offer tasty individual scallops gratin with fine seafood sauce.",

        item_braves_title: "La Pelleria's Bravas",
        item_braves_desc: "Diced potatoes, crispy on the outside and soft inside, topped with our secret spicy brava sauce and homemade garlic aioli.",

        item_ous_title: "Broken eggs with ham",
        item_ous_desc: "Sliced French fries base topped with broken fried free-range eggs and premium acorn-fed Iberian ham shavings.",

        item_croquetes_title: "Homemade croquettes (unit)",
        item_croquetes_desc: "Super creamy handmade croquettes. Available flavors: Oxtail, Pork secret with honey, Traditional roast meat, or Veggies with goat cheese.",

        item_torreznos_title: "Crispy Soria-style Torreznos",
        item_torreznos_desc: "Roasted and high-temperature fried pork belly to achieve an ultra-crispy skin and a tender, juicy interior.",

        item_fingers_title: "Homemade chicken fingers",
        item_fingers_desc: "Herb-marinated chicken breast strips coated in extra crispy Japanese panko breadcrumbs, served with honey-mustard sauce.",

        item_gildes_title: "Classic Gilda Duo",
        item_gildes_desc: "The quintessential Basque tapa. Two skewers with stuffed green olive, Cantabrian anchovy and pickled Ibarra pepper (guindilla).",

        item_seitons_title: "Anchovies in vinegar",
        item_seitons_desc: "Fresh white anchovies marinated in white wine vinegar, minced garlic and parsley, drizzled with extra virgin olive oil.",

        item_anxoves_title: "L'Escala Anchovies",
        item_anxoves_desc: "Premium salted anchovy fillets served over a base of grated tomato and a drizzle of olive oil.",

        item_russa_title: "Traditional Russian salad",
        item_russa_desc: "Boiled potato, carrot and egg mixed with fine Northern tuna, smooth mayonnaise, decorated with olives and roasted red pepper strips.",

        item_escalivada_title: "Escalivada with anchovies",
        item_escalivada_desc: "Wood-roasted red pepper, eggplant and onion, hand-peeled, seasoned with oil and topped with premium anchovy fillets.",

        item_hummus_title: "Homemade curry hummus",
        item_hummus_desc: "Creamy chickpea and tahini puree flavored with curry spices and lemon, served with warm pita bread for dipping.",

        item_taula_pernil_title: "Iberian ham board",
        item_taula_pernil_desc: "Generous board of finely sliced acorn-fed Iberian ham, served with traditional tomato-rubbed bread and olive oil.",

        item_taula_embotits_title: "Caldes cold cuts board",
        item_taula_embotits_desc: "Selection of local artisanal charcuterie: cured sausage, white and black \"bull\" sausages, and dry chorizo served with tomato bread.",

        item_taula_formatges_title: "National cheese board",
        item_taula_formatges_desc: "Assorted goat, sheep, cow, and intense blue cheeses, served with homemade jams and toasted nuts.",

        item_musclos_title: "Marinera-style mussels",
        item_musclos_desc: "Fresh rock mussels steamed with onion, garlic, tomato, and a slightly spicy white wine reduction.",

        // Plats
        item_amanida_burrata_title: "Tomato salad with burrata",
        item_amanida_burrata_desc: "Ripe local km 0 tomatoes, fresh basil pesto, 150g creamy Italian buffalo burrata and toasted pine nuts.",

        item_parmentier_bolets_title: "Mushroom parmentier with fried egg",
        item_parmentier_bolets_desc: "Robuchon-style creamy mashed potatoes, sautéed seasonal mixed wild mushrooms, topped with an organic fried egg and grated truffle.",

        item_hamburguesa_title: "\"La Pelleria\" beef burger",
        item_hamburguesa_desc: "200g grilled selected beef patty, lamb's lettuce, cured Manchego cheese shavings and truffle-infused mayonnaise.",

        item_galta_title: "Stewed pork cheek",
        item_galta_desc: "Boneless pork cheek slow-cooked in red wine from El Vallès and vegetables until melt-in-your-mouth tender, on a mashed potato bed.",

        item_canelo_marisc_title: "XXL seafood cannelloni",
        item_canelo_marisc_desc: "Large cannelloni filled with monkfish, shrimp and hake, covered in a smooth seafood bechamel sauce and gratin emmental cheese.",

        item_tartar_salmo_title: "Classic salmon tartare",
        item_tartar_salmo_desc: "Diced marinated salmon, spring onion, capers and avocado mixed with soy sauce and a touch of Dijon mustard, served with thin toasts.",

        // Coques
        item_coca_pork_title: "Pulled pork and cheddar Flatbread",
        item_coca_pork_desc: "Crispy thin bakery flatbread topped with spiced pulled pork, barbecue sauce, melted cheddar cheese and crispy onions.",

        item_coca_botifarra_title: "Butifarra sausage and escalivada Flatbread",
        item_coca_botifarra_desc: "The perfect Catalan combination. Grilled crumbled Caldes pork sausage over roasted red pepper and eggplant strips.",

        item_coca_escalivada_title: "Escalivada and anchovy Flatbread",
        item_coca_escalivada_desc: "Flatbread dough brushed with virgin olive oil, a base of smoky roasted vegetables (escalivada) and topped with L'Escala anchovies.",

        item_coca_salmo_title: "Salmon, avocado and burrata Flatbread",
        item_coca_salmo_desc: "Refreshing and gourmet. Selected smoked salmon, avocado slices, broken burrata cheese on top and a drizzle of nut vinaigrette.",

        item_coca_pernil_title: "Iberian ham Flatbread",
        item_coca_pernil_desc: "Extra crispy artisanal Caldes flatbread rubbed with hanging tomato, topped with fine slices of acorn-fed Iberian ham.",

        // Entrepans
        item_entrep_llom_title: "Pork loin and cheese Sandwich",
        item_entrep_llom_desc: "Juicy grilled pork loin and melted cheese in a freshly toasted crispy baguette.",

        item_pepito_title: "Beef Pepito Sandwich",
        item_pepito_desc: "Very tender beef steak, seared at high temperature with minced garlic, optional fried green pepper.",

        item_entrep_pollastre_title: "Chicken breast with mayonnaise",
        item_entrep_pollastre_desc: "Grilled chicken breast with fresh lettuce, tomato, and smooth mayonnaise.",

        item_baco_title: "Bacon and cheese Sandwich",
        item_baco_desc: "Crispy grilled smoked bacon with melted Emmental cheese.",

        item_xistorra_title: "Chistorra sausage Sandwich",
        item_xistorra_desc: "Grilled Navarrese chistorra sausage, served hot and bursting with intense flavor.",

        item_llonganissa_title: "Caldes dry sausage Sandwich",
        item_llonganissa_desc: "Perfectly cured local dry sausage (llonganissa) in tomato-and-oil-rubbed bread.",

        item_truita_francesa_title: "French omelet Sandwich",
        item_truita_francesa_desc: "Omelet made to order with two free-range eggs, in tomato-rubbed bread.",

        item_truita_farcida_title: "Stuffed omelet Sandwich",
        item_truita_farcida_desc: "Juicy omelet stuffed with melted Emmental cheese, ham, or bacon to your taste.",

        item_bikini_title: "Classic Bikini (Ham & Cheese)",
        item_bikini_desc: "The all-time favorite. Toasted sliced bread with plenty of butter, ham, and melted cheese.",

        item_bull_blanc_title: "White bull sausage Sandwich",
        item_bull_blanc_desc: "Traditional white sausage (\"bull blanc\") handmade by local butchers, in tomato-rubbed bread.",

        item_bull_negre_title: "Black bull sausage Sandwich",
        item_bull_negre_desc: "Traditional blood sausage (\"bull negre\") with a characteristic flavor and fantastic texture.",

        item_xoric_title: "Iberian chorizo Sandwich",
        item_xoric_desc: "Intense cured Iberian chorizo in tomato-rubbed hanging bread.",

        item_formatge_manxec_title: "Manchego cheese Sandwich",
        item_formatge_manxec_desc: "Abundant slices of cured Manchego cheese in tomato-rubbed bread with a touch of virgin olive oil.",

        // Packs Vermut
        item_vermut_fred_title: "Cold Vermouth Pack",
        item_vermut_fred_desc: "The midday treat. Includes 2 drinks of choice (cold Estrella Damm drafts, soft drink, or draft vermouth), crispy potato chips, select stuffed olives, and a can of cockles in sauce.",

        item_vermut_calent_title: "Hot Vermouth Pack",
        item_vermut_calent_desc: "Complete pack including 2 drinks, a hot portion of our bravas, a portion of crispy torreznos, and the special small tapa of the day.",

        // Infantil
        item_infantil_burger_title: "Kids burger with fries",
        item_infantil_burger_desc: "Easy-to-eat 100g beef patty with melted cheddar cheese, crispy bacon, and French fries.",

        item_infantil_croquetes_title: "Croquettes with fries",
        item_infantil_croquetes_desc: "Three super creamy homemade chicken croquettes served with French fries.",

        item_infantil_fingers_title: "Chicken fingers with fries",
        item_infantil_fingers_desc: "Very crispy breaded chicken breast strips, served with round potato chips and tomato.",

        item_infantil_pit_title: "Grilled chicken breast with fries",
        item_infantil_pit_desc: "Tender grilled chicken breast fillet served with homemade French fries.",

        // Galeria
        gallery_subtitle: "How we look",
        gallery_title: "The Gallery",
        gallery_vermut: "Cold Vermouth Pack",
        gallery_brioche: "Salmon Brioche",
        gallery_barra: "Behind the Bar",
        gallery_gambes: "Shrimp and Scallops",

        // Opinions
        opinions_subtitle: "What they say about us",
        opinions_title: "Our customers' opinions",
        review_1_text: "“The best bravas and the salmon brioche is spectacular. The atmosphere is cozy and the service is excellent.”",
        review_2_text: "“An incredible discovery in the center of Caldes. The cold vermouth is a delight and the tapas are super homemade. We will definitely be back!”",
        review_3_text: "“A cozy place with friendly staff and amazing local food. The pulled pork flatbread is a must-try. Highly recommended!”",
        opinions_cta_btn: "Leave your review on Google",

        // Reserves
        reserves_subtitle: "We welcome you with open arms",
        reserves_title: "Find Us & Reservations",
        booking_card_title: "Book your table",
        
        // Form
        lbl_booking_name: "Full name *",
        lbl_booking_phone: "Contact phone *",
        lbl_booking_date: "Booking date *",
        lbl_booking_time: "Time *",
        lbl_booking_guests: "Number of guests *",
        lbl_booking_message: "Comments / Allergies",
        ph_booking_name: "Your name",
        ph_booking_phone: "E.g. 600 000 000",
        ph_booking_guests: "E.g. 4",
        ph_booking_message: "Tell us if you have any allergies, if you need a baby high chair, etc.",
        booking_info_note: "* Upon sending this request, our staff will check table availability and confirm your booking by phone.",
        booking_submit_btn: "Send booking request",

        // Side info
        horaris_title: "Opening Hours",
        horaris_days_1: "Monday and Tuesday",
        horaris_days_2: "Wednesday to Friday",
        horaris_days_3: "Saturday and Sunday",
        
        contact_title: "Contact Info",
        contact_address_lbl: "Physical address",
        contact_phone_lbl: "Reservation phone",
        contact_instagram_lbl: "Instagram",
        
        map_title: "How to find us",

        // Footer
        footer_quote: "La Pelleria, just like home.",
        footer_bottom: "&copy; 2026 La Pelleria - Caldes de Montbui. All rights reserved. Made with <span>🖤</span> for the good people."
    }
};
