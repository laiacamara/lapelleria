const translations = {
    ca: {
        // Navegació
        nav_home: "Inici",
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

        // Widget d'estat
        status_open: "OBERT ARA",
        status_closed: "TANCAT ARA",
        status_enjoy: "Vine a gaudir de la carta!",
        status_closing_at: "Tanquem a les",
        status_opening_tomorrow: "obrim demà a les",
        status_opening_next: "obrim",
        status_tomorrow: "demà",
        status_on_monday: "dilluns",
        status_on_wednesday: "dimecres",
        status_today: "Avui",

        // Dies de la setmana
        day_0: "diumenge",
        day_1: "dilluns",
        day_2: "dimarts",
        day_3: "dimecres",
        day_4: "dijous",
        day_5: "divendres",
        day_6: "dissabte",

        // Avís Menú Diari
        daily_menu_badge: "Menú Casolà",
        daily_menu_title: "Menú Diari",
        daily_menu_highlight: "No oblidis preguntar pel nostre menú!",
        daily_menu_desc: "Disposem de menú casolà variat. Pregunta al nostre equip a taula o contacta amb nosaltres per consultar els plats d'avui.",
        daily_menu_btn: "Preguntar per WhatsApp",

        // La Carta
        carta_subtitle: "Tria, comparteix i gaudeix",
        carta_title: "La Nostra Carta",
        carta_footer_note: "✨ No dubtis a preguntar pel nostre menú!",
        
        // Filtres
        filter_all: "Tot",
        filter_tapes: "Les Tapes",
        filter_coques: "Les Coques",
        filter_entrepans: "Entrepans",
        filter_hamburgueses: "Hamburgueses",
        filter_plats: "Els Plats",
        filter_postres: "Postres",
        filter_begudes: "Begudes",
        filter_vermut: "Packs Vermut",
        filter_infantil: "Per als més petits",

        // Badges
        badge_featured: "Destacat",
        badge_new: "Novetat",
        badge_recomanat: "Recomanat",
        badge_picant: "Toc picant",
        badge_veggie: "Vegetarià",
        badge_spicy: "Picant",
        badge_gf: "Sense gluten",
        badge_vermut_qty: "Ideal 2 persones",

        // TAPES
        item_braves_title: "Les braves de la Pelle",
        item_ous_pernil_title: "Ous estrellats amb pernil ibèric",
        item_ous_sobrassada_title: "Ous estrellats amb sobrassada",
        item_croquetes_title: "Les croquetes (unitat)",
        item_croquetes_desc: "Sabors: cua de bou · secret i mel · verdures i formatge de cabra · rostit",
        item_pintxo_moru_title: "Pintxo morú amb pa amb tomàquet",
        item_torreznos_title: "Torreznos",
        item_fingers_pollastre_title: "Fingers de pollastre",
        item_fingers_vedella_title: "Fingers de vedella",
        item_patates_goloses_title: "Patates goloses amb bacó i formatge",
        item_natxos_title: "Natxos amb carn picada, pico de gall i guacamole",
        item_patates_xistorra_title: "Patates amb xistorra",
        item_pebrots_padro_title: "Pebrots del Padró",
        item_vieira_title: "Vieira a la planxa (unitat)",
        item_gambes_title: "Gambes a l'allet",
        item_gambes_desc: "Gambes saltades amb alls laminats daurats.",
        item_xipirons_title: "Xipirons fregits",
        item_calamars_title: "Calamars a la romana",
        item_seitons_title: "Seitons",
        item_anxoves_title: "Anxoves",

        // COQUES
        item_coca_escalivada_title: "Coca d'escalivada amb anxoves",
        item_coca_pernil_title: "Coca de pernil ibèric",
        item_coca_salmo_title: "Coca de salmó, alvocat i burrata",
        item_coca_sobrassada_title: "Coca de sobrassada, formatge de cabra i mel",
        item_coca_pork_title: "Coca de pulled pork amb formatge cheddar",
        item_coca_botifarra_title: "Coca de botifarra amb escalivada",
        item_coca_baco_title: "Coca de bacó amb formatge",

        // ENTREPANS SIMPLES
        item_entrep_formatge_title: "Formatge manxec",
        item_entrep_llonganissa_title: "Llonganissa",
        item_entrep_bull_blanc_title: "Bull blanc",
        item_entrep_bull_negre_title: "Bull negre",
        item_entrep_xoric_title: "Xoriç",
        item_entrep_bikini_title: "Bikini",
        item_entrep_truita_francesa_title: "Truita francesa",
        item_entrep_truita_farcida_title: "Truita farcida",
        item_entrep_baco_title: "Bacó",
        item_entrep_llom_title: "Llom",
        item_entrep_pepito_title: "Pepito de vedella",
        item_entrep_pollastre_title: "Pollastre",
        item_entrep_xistorra_title: "Xistorra",

        // ENTREPANS COMPLETS
        item_pollo_loco_title: "Pollo loco",
        item_pollo_loco_desc: "Pollastre amb pulled pork i formatge.",
        item_serranito_title: "Serranito",
        item_serranito_desc: "Pepito de vedella amb pernil ibèric, pebrot verd i formatge.",
        item_mallorqui_title: "Mallorquí",
        item_mallorqui_desc: "Pollastre amb sobrassada, formatge de cabra i mel.",
        item_bravissim_title: "El bravissim",
        item_bravissim_desc: "Llom amb ceba caramel·litzada, formatge i salsa brava.",
        item_vegetal_title: "Vegetal",
        item_vegetal_desc: "Pollastre/tonyina amb enciam, tomàquet, formatge i maionesa.",
        item_empanat_title: "Empanat",
        item_empanat_desc: "Pollastre arrebossat amb enciam, tomàquet i salsa mel i mostassa.",
        item_classic_title: "Clàssic",
        item_classic_desc: "Pollastre amb bacó i formatge brie.",

        // HAMBURGUESES
        item_brutal_title: "Brutal",
        item_brutal_desc: "Hamburguesa de vedella amb pulled pork, formatge cheddar i bacó.",
        item_bestia_title: "Bèstia",
        item_bestia_desc: "Doble hamburguesa de vedella amb formatge, bacó i salsa barbacoa.",
        item_iberica_title: "Ibèrica",
        item_iberica_desc: "Hamburguesa de vedella amb formatge i pernil ibèric.",
        item_cheese_title: "Cheese",
        item_cheese_desc: "Hamburguesa de vedella amb formatge, cheddar, brie, formatge de cabra i salsa hannibal.",
        item_trufada_title: "Trufada",
        item_trufada_desc: "Hamburguesa de vedella amb formatge manxec, ou i salsa de trufa.",
        item_barbakiu_title: "Barbakiu",
        item_barbakiu_desc: "Hamburguesa de vedella amb formatge, bacó, anelles de ceba i salsa barbacoa.",
        item_crispy_title: "Crispy",
        item_crispy_desc: "Hamburguesa de pollastre cruixent amb enciam, tomàquet i salsa mel i mostassa.",

        // PLATS COMBINATS
        plat_combinat_desc: "Acompanyat d'amanida, patates i ou.",
        item_plat_llom_title: "Llom",
        item_plat_pollastre_title: "Pollastre",
        item_plat_pepito_title: "Pepito de vedella",
        item_plat_calamars_title: "Calamars a la romana",
        item_plat_hamburguesa_title: "Hamburguesa",
        item_plat_xistorra_title: "Xistorra",
        item_plat_botifarra_title: "Botifarra",
        item_plat_vedella_arrebossada_title: "Carn de vedella arrebossada",

        // POSTRES
        item_pastis_formatge_title: "Pastís de formatge casolà",
        item_crema_catalana_title: "Crema catalana casolana",
        item_brioix_nutella_title: "Brioix de nutella",
        item_mel_mato_title: "Mel i mató",
        item_postres_dia_title: "Postres del dia",

        // INFANTIL
        item_infantil_croquetes_title: "Croquetes de rostit amb patates",
        item_infantil_pit_title: "Pit de pollastre amb patates",
        item_infantil_burger_title: "Hamburguesa amb formatge i bacó",
        item_infantil_fingers_title: "Fingers amb patates",

        // PACKS VERMUT
        item_vermut_fred_title: "Pack Vermut Fred",
        item_vermut_fred_desc: "Olives, escopinyes, patates xips i salsa espinaler, amb dues begudes incloses.",
        item_vermut_calent_title: "Pack Vermut Calent",
        item_vermut_calent_desc: "Braves, torreznos i pebrots del Padró amb dues begudes incloses.",

        // BEGUDES
        drinks_refrescs_title: "Refrescs & Aigües",
        drinks_cerveses_title: "Cerveses",
        drinks_vins_title: "Vins & Sangries",
        drinks_vermut_title: "Vermuts & Aperitius",
        drinks_cafes_title: "Cafeteria & Infusions",

        // Galeria
        gallery_subtitle: "Així ens veiem",
        gallery_title: "La Galeria",
        gallery_vermut: "Pack Vermut Fred de la casa",
        gallery_barra: "L'ambient acollidor de la nostra barra",
        gallery_brioche: "Brioix gurmet amb tàrtar",
        gallery_gambes: "Gambes a l'allet i zamburinyes",

        // Opinions
        opinions_subtitle: "El que diuen de nosaltres",
        opinions_title: "La veu dels nostres clients",
        review_1_text: "“Les millors braves i el brioix és espectacular. L'ambient és molt acollidor i el tracte de deu.”",
        review_2_text: "“Un gran descobriment al centre de Caldes. El vermut fred entra sol i les tapes són super casolanes. Tornarem segur!”",
        review_3_text: "“Un racó amb molt d'encant, atenció familiar i menjar de proximitat immillorable. La coca de pulled pork és imprescindible. Molt recomanable!”",
        opinions_cta_btn: "Deixa la teva opinió a Google",

        // Reserves
        reserves_subtitle: "T'esperem amb els braços oberts",
        reserves_title: "On som & Reserves",
        booking_card_title: "Fes la teva reserva",
        
        // Formulari
        lbl_booking_name: "Nom i cognoms *",
        lbl_booking_phone: "Telèfon de contacte *",
        lbl_booking_date: "Data de la reserva *",
        lbl_booking_time: "Hora *",
        lbl_booking_guests: "Nombre de comensals *",
        lbl_booking_message: "Comentaris / Al·lèrgies",
        ph_booking_name: "El vostre nom",
        ph_booking_phone: "Ex: 600 000 000",
        ph_booking_guests: "Ex: 4",
        ph_booking_message: "Indica'ns si teniu alguna al·lèrgia, si necessiteu trona per a nadons, etc.",
        booking_info_note: "* En enviar la petició, el nostre equip comprovarà la disponibilitat de taula i us confirmarà la reserva per telèfon.",
        booking_submit_btn: "Enviar petició de reserva",

        // Info lateral
        horaris_title: "Els Nostres Horaris",
        horaris_days_1: "Dilluns i Dimarts",
        horaris_days_2: "Dimecres a Divendres",
        horaris_days_3: "Dissabte i Diumenge",
        
        contact_title: "Dades de Contacte",
        contact_address_lbl: "Adreça física",
        contact_phone_lbl: "Telèfon de reserves",
        contact_instagram_lbl: "Instagram",
        
        map_title: "Com arribar-hi",
        open_in_maps: "Obrir a Google Maps",

        // Footer
        footer_quote: "La Pelleria, com a casa.",
        footer_bottom: "&copy; 2026 La Pelleria - Caldes de Montbui. Tots els drets reservats. Fet amb <span>🖤</span> per a la bona gent."
    },

    es: {
        // Navegación
        nav_home: "Inicio",
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

        // Días de la semana
        day_0: "domingo",
        day_1: "lunes",
        day_2: "martes",
        day_3: "miércoles",
        day_4: "jueves",
        day_5: "viernes",
        day_6: "sábado",

        // Aviso Menú Diario
        daily_menu_badge: "Menú Casero",
        daily_menu_title: "Menú Diario",
        daily_menu_highlight: "¡No olvides preguntar por nuestro menú!",
        daily_menu_desc: "Disponemos de menú casero variado. Pregunta a nuestro equipo en mesa o contáctanos para consultar los platos de hoy.",
        daily_menu_btn: "Preguntar por WhatsApp",

        // La Carta
        carta_subtitle: "Elige, comparte y disfruta",
        carta_title: "Nuestra Carta",
        carta_footer_note: "✨ ¡No dudes en preguntar por nuestro menú!",
        
        // Filtros
        filter_all: "Todo",
        filter_tapes: "Tapas",
        filter_coques: "Cocas",
        filter_entrepans: "Bocadillos",
        filter_hamburgueses: "Hamburguesas",
        filter_plats: "Platos combinados",
        filter_postres: "Postres",
        filter_begudes: "Bebidas",
        filter_vermut: "Packs Vermut",
        filter_infantil: "Para los más pequeños",

        // Badges
        badge_featured: "Destacado",
        badge_new: "Novedad",
        badge_recomanat: "Recomendado",
        badge_picant: "Toque picante",
        badge_veggie: "Vegetariano",
        badge_spicy: "Picante",
        badge_gf: "Sin gluten",
        badge_vermut_qty: "Ideal 2 personas",

        // TAPAS
        item_braves_title: "Las bravas de la Pelle",
        item_ous_pernil_title: "Huevos estrellados con jamón ibérico",
        item_ous_sobrassada_title: "Huevos estrellados con sobrasada",
        item_croquetes_title: "Las croquetas (unidad)",
        item_croquetes_desc: "Sabores: rabo de toro · secreto y miel · verduras y queso de cabra · asado",
        item_pintxo_moru_title: "Pincho moruno con pan con tomate",
        item_torreznos_title: "Torreznos crujientes",
        item_fingers_pollastre_title: "Fingers de pollo",
        item_fingers_vedella_title: "Fingers de ternera",
        item_patates_goloses_title: "Patatas golosas con beicon y queso",
        item_natxos_title: "Nachos con carne picada, pico de gallo y guacamole",
        item_patates_xistorra_title: "Patatas con chistorra",
        item_pebrots_padro_title: "Pimientos del Padrón",
        item_vieira_title: "Vieira a la plancha (unidad)",
        item_gambes_title: "Gambas al ajillo",
        item_gambes_desc: "Gambas salteadas con ajos laminados dorados.",
        item_xipirons_title: "Chipirones fritos",
        item_calamars_title: "Calamares a la romana",
        item_seitons_title: "Boquerones",
        item_anxoves_title: "Anchoas",

        // COCAS
        item_coca_escalivada_title: "Coca de escalivada con anchoas",
        item_coca_pernil_title: "Coca de jamón ibérico",
        item_coca_salmo_title: "Coca de salmón, aguacate y burrata",
        item_coca_sobrassada_title: "Coca de sobrasada, queso de cabra y miel",
        item_coca_pork_title: "Coca de pulled pork con queso cheddar",
        item_coca_botifarra_title: "Coca de butifarra con escalivada",
        item_coca_baco_title: "Coca de beicon con queso",

        // BOCADILLOS SIMPLES
        item_entrep_formatge_title: "Queso manchego",
        item_entrep_llonganissa_title: "Longaniza",
        item_entrep_bull_blanc_title: "Bull blanco",
        item_entrep_bull_negre_title: "Bull negro",
        item_entrep_xoric_title: "Chorizo",
        item_entrep_bikini_title: "Bikini mixto",
        item_entrep_truita_francesa_title: "Tortilla francesa",
        item_entrep_truita_farcida_title: "Tortilla rellena",
        item_entrep_baco_title: "Beicon",
        item_entrep_llom_title: "Lomo",
        item_entrep_pepito_title: "Pepito de ternera",
        item_entrep_pollastre_title: "Pollo",
        item_entrep_xistorra_title: "Chistorra",

        // BOCADILLOS COMPLETOS
        item_pollo_loco_title: "Pollo loco",
        item_pollo_loco_desc: "Pollo con pulled pork y queso.",
        item_serranito_title: "Serranito",
        item_serranito_desc: "Pepito de ternera con jamón ibérico, pimiento verde y queso.",
        item_mallorqui_title: "Mallorquín",
        item_mallorqui_desc: "Pollo con sobrasada, queso de cabra y miel.",
        item_bravissim_title: "El bravísimo",
        item_bravissim_desc: "Lomo con cebolla caramelizada, queso y salsa brava.",
        item_vegetal_title: "Vegetal",
        item_vegetal_desc: "Pollo/atún con lechuga, tomate, queso y mayonesa.",
        item_empanat_title: "Empanado",
        item_empanat_desc: "Pollo rebozado con lechuga, tomate y salsa miel y mostaza.",
        item_classic_title: "Clásico",
        item_classic_desc: "Pollo con beicon y queso brie.",

        // HAMBURGUESAS
        item_brutal_title: "Brutal",
        item_brutal_desc: "Hamburguesa de ternera con pulled pork, queso cheddar y beicon.",
        item_bestia_title: "Bestia",
        item_bestia_desc: "Doble hamburguesa de ternera con queso, beicon y salsa barbacoa.",
        item_iberica_title: "Ibérica",
        item_iberica_desc: "Hamburguesa de ternera con queso y jamón ibérico.",
        item_cheese_title: "Cheese",
        item_cheese_desc: "Hamburguesa de ternera con queso, cheddar, brie, queso de cabra y salsa hannibal.",
        item_trufada_title: "Trufada",
        item_trufada_desc: "Hamburguesa de ternera con queso manchego, huevo y salsa de trufa.",
        item_barbakiu_title: "Barbacoa",
        item_barbakiu_desc: "Hamburguesa de ternera con queso, beicon, aros de cebolla y salsa barbacoa.",
        item_crispy_title: "Crispy",
        item_crispy_desc: "Hamburguesa de pollo crujiente con lechuga, tomate y salsa miel y mostaza.",

        // PLATOS COMBINADOS
        plat_combinat_desc: "Acompañado de ensalada, patatas y huevo.",
        item_plat_llom_title: "Lomo",
        item_plat_pollastre_title: "Pollo",
        item_plat_pepito_title: "Pepito de ternera",
        item_plat_calamars_title: "Calamares a la romana",
        item_plat_hamburguesa_title: "Hamburguesa",
        item_plat_xistorra_title: "Chistorra",
        item_plat_botifarra_title: "Butifarra",
        item_plat_vedella_arrebossada_title: "Carne de ternera rebozada",

        // POSTRES
        item_pastis_formatge_title: "Pastel de queso casero",
        item_crema_catalana_title: "Crema catalana casera",
        item_brioix_nutella_title: "Brioche de Nutella",
        item_mel_mato_title: "Mel i mató (queso fresco con miel)",
        item_postres_dia_title: "Postre del día",

        // INFANTIL
        item_infantil_croquetes_title: "Croquetas de asado con patatas",
        item_infantil_pit_title: "Pechuga de pollo con patatas",
        item_infantil_burger_title: "Hamburguesa con queso y beicon",
        item_infantil_fingers_title: "Fingers con patatas",

        // PACKS VERMUT
        item_vermut_fred_title: "Pack Vermut Frío",
        item_vermut_fred_desc: "Aceitunas, berberechos, patatas chips y salsa espinaler, con dos bebidas incluidas.",
        item_vermut_calent_title: "Pack Vermut Caliente",
        item_vermut_calent_desc: "Bravas, torreznos y pimientos del Padrón con dos bebidas incluidas.",

        // BEBIDAS
        drinks_refrescs_title: "Refrescos y Aguas",
        drinks_cerveses_title: "Cervezas",
        drinks_vins_title: "Vinos y Sangrías",
        drinks_vermut_title: "Vermuts y Aperitivos",
        drinks_cafes_title: "Cafetería e Infusiones",

        // Galería
        gallery_subtitle: "Así nos vemos",
        gallery_title: "La Galería",
        gallery_vermut: "Pack Vermut Frío de la casa",
        gallery_barra: "El ambiente acogedor de nuestra barra",
        gallery_brioche: "Brioche gourmet con tártar",
        gallery_gambes: "Gambas al ajillo y zamburiñas",

        // Opiniones
        opinions_subtitle: "Lo que dicen de nosotros",
        opinions_title: "La voz de nuestros clientes",
        review_1_text: "“Las mejores bravas y el brioche es espectacular. El ambiente es muy acogedor y el trato insuperable.”",
        review_2_text: "“Un gran descubrimiento en el centro de Caldes. El vermut frío entra solo y las tapas son súper caseras. ¡Volveremos seguro!”",
        review_3_text: "“Un rincón con mucho encanto, atención familiar y comida de proximidad excelente. La coca de pulled pork es imprescindible. ¡Muy recomendable!”",
        opinions_cta_btn: "Deja tu opinión en Google",

        // Reservas
        reserves_subtitle: "Te esperamos con los brazos abiertos",
        reserves_title: "Dónde estamos & Reservas",
        booking_card_title: "Haz tu reserva",
        
        // Formulario
        lbl_booking_name: "Nombre y apellidos *",
        lbl_booking_phone: "Teléfono de contacto *",
        lbl_booking_date: "Fecha de la reserva *",
        lbl_booking_time: "Hora *",
        lbl_booking_guests: "Número de comensales *",
        lbl_booking_message: "Comentarios / Alergias",
        ph_booking_name: "Tu nombre",
        ph_booking_phone: "Ej: 600 000 000",
        ph_booking_guests: "Ej: 4",
        ph_booking_message: "Indícanos si tienes alguna alergia, si necesitas trona para bebé, etc.",
        booking_info_note: "* Al enviar la petición, nuestro equipo comprobará la disponibilidad de mesas y te confirmará la reserva por teléfono.",
        booking_submit_btn: "Enviar petición de reserva",

        // Info lateral
        horaris_title: "Nuestros Horarios",
        horaris_days_1: "Lunes y Martes",
        horaris_days_2: "Miércoles a Viernes",
        horaris_days_3: "Sábado y Domingo",
        
        contact_title: "Datos de Contacto",
        contact_address_lbl: "Dirección física",
        contact_phone_lbl: "Teléfono de reservas",
        contact_instagram_lbl: "Instagram",
        
        map_title: "Cómo llegar",
        open_in_maps: "Abrir en Google Maps",

        // Footer
        footer_quote: "La Pelleria, como en casa.",
        footer_bottom: "&copy; 2026 La Pelleria - Caldes de Montbui. Todos los derechos reservados. Hecho con <span>🖤</span> para la buena gente."
    },

    en: {
        // Navigation
        nav_home: "Home",
        nav_carta: "The Menu",
        nav_gallery: "Gallery",
        nav_opinions: "Reviews",
        nav_contact: "Location & Bookings",
        nav_book_btn: "Book a Table",

        // Hero
        hero_tagline: "good people, great tapas",
        hero_desc: "Feel right at home in our welcoming tapas bar in the historic center of Caldes de Montbui. Quality ingredients and heartfelt homemade cooking.",
        hero_view_menu: "View Menu",
        hero_book_table: "Book a Table",

        // Status widget
        status_open: "OPEN NOW",
        status_closed: "CLOSED NOW",
        status_enjoy: "Come and enjoy our menu!",
        status_closing_at: "Closing at",
        status_opening_tomorrow: "we open tomorrow at",
        status_opening_next: "we open",
        status_tomorrow: "tomorrow",
        status_on_monday: "Monday",
        status_on_wednesday: "Wednesday",
        status_today: "Today",

        // Days of week
        day_0: "Sunday",
        day_1: "Monday",
        day_2: "Tuesday",
        day_3: "Wednesday",
        day_4: "Thursday",
        day_5: "Friday",
        day_6: "Saturday",

        // Daily Menu Notice
        daily_menu_badge: "Daily Special",
        daily_menu_title: "Daily Menu",
        daily_menu_highlight: "Don't forget to ask about our daily menu!",
        daily_menu_desc: "We offer a varied homemade daily menu. Ask our team at the table or contact us to check today's dishes.",
        daily_menu_btn: "Ask via WhatsApp",

        // The Menu
        carta_subtitle: "Choose, share and enjoy",
        carta_title: "Our Menu",
        carta_footer_note: "✨ Don't hesitate to ask for our daily menu!",
        
        // Filters
        filter_all: "All",
        filter_tapes: "Tapas",
        filter_coques: "Flatbreads (Coques)",
        filter_entrepans: "Sandwiches",
        filter_hamburgueses: "Burgers",
        filter_plats: "Combination Plates",
        filter_postres: "Desserts",
        filter_begudes: "Drinks",
        filter_vermut: "Vermouth Packs",
        filter_infantil: "Kids Menu",

        // Badges
        badge_featured: "House Specialty",
        badge_new: "New",
        badge_recomanat: "Recommended",
        badge_picant: "Mildly spicy",
        badge_veggie: "Vegetarian",
        badge_spicy: "Spicy",
        badge_gf: "Gluten free",
        badge_vermut_qty: "Ideal for 2",

        // TAPAS
        item_braves_title: "Pelle's Brava Potatoes",
        item_ous_pernil_title: "Broken fried eggs with Iberian ham",
        item_ous_sobrassada_title: "Broken fried eggs with sobrasada",
        item_croquetes_title: "Homemade croquettes (unit)",
        item_croquetes_desc: "Flavors: oxtail · pork secreto & honey · vegetables & goat cheese · roast meat",
        item_pintxo_moru_title: "Marinated pork skewer with tomato bread",
        item_torreznos_title: "Crispy Soria-style Torreznos",
        item_fingers_pollastre_title: "Chicken fingers",
        item_fingers_vedella_title: "Beef fingers",
        item_patates_goloses_title: "Loaded fries with bacon and melted cheese",
        item_natxos_title: "Nachos with minced beef, pico de gallo & guacamole",
        item_patates_xistorra_title: "Fries with chistorra sausage",
        item_pebrots_padro_title: "Padrón peppers",
        item_vieira_title: "Grilled scallop (unit)",
        item_gambes_title: "Garlic prawns",
        item_gambes_desc: "Sautéed prawns with golden sliced garlic.",
        item_xipirons_title: "Crispy fried baby squid",
        item_calamars_title: "Battered squid rings (calamari)",
        item_seitons_title: "Pickled white anchovies",
        item_anxoves_title: "Salted anchovies from L'Escala",

        // FLATBREADS (COQUES)
        item_coca_escalivada_title: "Escalivada & anchovy flatbread",
        item_coca_pernil_title: "Iberian ham flatbread",
        item_coca_salmo_title: "Salmon, avocado & burrata flatbread",
        item_coca_sobrassada_title: "Sobrasada, goat cheese & honey flatbread",
        item_coca_pork_title: "Pulled pork & cheddar cheese flatbread",
        item_coca_botifarra_title: "Catalan sausage & escalivada flatbread",
        item_coca_baco_title: "Bacon & melted cheese flatbread",

        // SANDWICHES
        item_entrep_formatge_title: "Manchego cheese sandwich",
        item_entrep_llonganissa_title: "Cured Catalan sausage sandwich",
        item_entrep_bull_blanc_title: "White pork sausage sandwich",
        item_entrep_bull_negre_title: "Black blood sausage sandwich",
        item_entrep_xoric_title: "Iberian chorizo sandwich",
        item_entrep_bikini_title: "Toasted ham & cheese sandwich",
        item_entrep_truita_francesa_title: "French omelette sandwich",
        item_entrep_truita_farcida_title: "Stuffed omelette sandwich",
        item_entrep_baco_title: "Crispy bacon sandwich",
        item_entrep_llom_title: "Pork loin sandwich",
        item_entrep_pepito_title: "Beef tenderloin sandwich (Pepito)",
        item_entrep_pollastre_title: "Grilled chicken breast sandwich",
        item_entrep_xistorra_title: "Chistorra sausage sandwich",

        // SPECIAL SANDWICHES
        item_pollo_loco_title: "Pollo loco",
        item_pollo_loco_desc: "Chicken with pulled pork and cheese.",
        item_serranito_title: "Serranito",
        item_serranito_desc: "Beef tenderloin with Iberian ham, green pepper and cheese.",
        item_mallorqui_title: "Mallorquí",
        item_mallorqui_desc: "Chicken with sobrasada, goat cheese and honey.",
        item_bravissim_title: "El bravissim",
        item_bravissim_desc: "Pork loin with caramelized onion, cheese and brava sauce.",
        item_vegetal_title: "Vegetal sandwich",
        item_vegetal_desc: "Chicken/tuna with fresh lettuce, tomato, cheese and mayonnaise.",
        item_empanat_title: "Breaded chicken sandwich",
        item_empanat_desc: "Crispy breaded chicken with lettuce, tomato and honey-mustard sauce.",
        item_classic_title: "Classic sandwich",
        item_classic_desc: "Chicken with bacon and creamy brie cheese.",

        // BURGERS
        item_brutal_title: "Brutal Burger",
        item_brutal_desc: "Beef burger with pulled pork, cheddar cheese and bacon.",
        item_bestia_title: "The Beast Burger",
        item_bestia_desc: "Double beef burger with melted cheese, bacon and BBQ sauce.",
        item_iberica_title: "Iberian Burger",
        item_iberica_desc: "Beef burger with cheese and Iberian ham.",
        item_cheese_title: "Four Cheese Burger",
        item_cheese_desc: "Beef burger with melted cheddar, brie, goat cheese and hannibal sauce.",
        item_trufada_title: "Truffle Burger",
        item_trufada_desc: "Beef burger with cured Manchego cheese, fried egg and truffle sauce.",
        item_barbakiu_title: "BBQ Burger",
        item_barbakiu_desc: "Beef burger with cheese, bacon, crispy onion rings and BBQ sauce.",
        item_crispy_title: "Crispy Chicken Burger",
        item_crispy_desc: "Crispy chicken burger with lettuce, tomato and honey-mustard sauce.",

        // COMBINATION PLATES
        plat_combinat_desc: "Served with fresh salad, fries and a fried egg.",
        item_plat_llom_title: "Pork loin plate",
        item_plat_pollastre_title: "Grilled chicken plate",
        item_plat_pepito_title: "Beef steak plate",
        item_plat_calamars_title: "Crispy battered squid plate",
        item_plat_hamburguesa_title: "Burger plate",
        item_plat_xistorra_title: "Chistorra sausage plate",
        item_plat_botifarra_title: "Catalan sausage plate",
        item_plat_vedella_arrebossada_title: "Breaded beef schnitzel plate",

        // DESSERTS
        item_pastis_formatge_title: "Homemade cheesecake",
        item_crema_catalana_title: "Traditional Catalan cream",
        item_brioix_nutella_title: "Warm Nutella brioche",
        item_mel_mato_title: "Mel i mató (fresh curd cheese with honey)",
        item_postres_dia_title: "Dessert of the day",

        // KIDS MENU
        item_infantil_croquetes_title: "Roast meat croquettes with fries",
        item_infantil_pit_title: "Grilled chicken breast with fries",
        item_infantil_burger_title: "Kids burger with cheese & bacon",
        item_infantil_fingers_title: "Chicken fingers with fries",

        // VERMOUTH PACKS
        item_vermut_fred_title: "Cold Vermouth Pack",
        item_vermut_fred_desc: "Olives, canned cockles, potato crisps and Espinaler sauce, with two drinks included.",
        item_vermut_calent_title: "Hot Vermouth Pack",
        item_vermut_calent_desc: "Brava potatoes, crispy torreznos and Padrón peppers with two drinks included.",

        // DRINKS
        drinks_refrescs_title: "Soft Drinks & Water",
        drinks_cerveses_title: "Beers",
        drinks_vins_title: "Wines & Sangria",
        drinks_vermut_title: "Vermouth & Aperitifs",
        drinks_cafes_title: "Coffee & Tea",

        // Gallery
        gallery_subtitle: "A glimpse of our bar",
        gallery_title: "The Gallery",
        gallery_vermut: "Our Cold Vermouth Pack",
        gallery_barra: "The cozy atmosphere at our bar counter",
        gallery_brioche: "Gourmet brioche with tartare",
        gallery_gambes: "Garlic prawns & gratin scallops",

        // Reviews
        opinions_subtitle: "What our guests say",
        opinions_title: "Customer Reviews",
        review_1_text: "“The best bravas in town and the brioche is spectacular. Great cozy vibe and top-notch service.”",
        review_2_text: "“An incredible spot in the heart of Caldes. The cold vermouth is delightful and the tapas are truly homemade. We'll definitely be back!”",
        review_3_text: "“Charming place with friendly staff and unbeatable local food. The pulled pork flatbread is a must-try. Highly recommended!”",
        opinions_cta_btn: "Leave a Google Review",

        // Reservations
        reserves_subtitle: "We look forward to welcoming you",
        reserves_title: "Location & Bookings",
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
        ph_booking_message: "Let us know about any allergies, if you need a high chair, etc.",
        booking_info_note: "* Upon submitting, our staff will check table availability and confirm your booking by phone.",
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
        open_in_maps: "Open in Google Maps",

        // Footer
        footer_quote: "La Pelleria, just like home.",
        footer_bottom: "&copy; 2026 La Pelleria - Caldes de Montbui. All rights reserved. Made with <span>🖤</span> for the good people."
    }
};