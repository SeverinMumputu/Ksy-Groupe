 // --- DONNÉES ---
 const data = {
    brands: [
        { id: 'hyundai', name: 'HYUNDAI', image: 'hyundai-logo.png' },
        { id: 'kia', name: 'KIA', image: 'kia-logo.png' },
        { id: 'peugeot', name: 'PEUGEOT', image: 'peugeot-logo.png' },
        { id: 'suzuki', name: 'SUZUKI', image: 'suzuki-logo.webp' },
        { id: 'jetour', name: 'JETOUR', image: 'jetour.png' },
        { id: 'baic', name: 'BAIC', image: 'baic-logo-png_seeklogo-391483.png' },
        { id: 'changan', name: 'CHANGAN', image: 'logo-changan.png' }
    ],

    models: {
        hyundai: ['Tucson', 'SantaFe', 'Palisade', 'Elantra', 'Kona', 'Sonata'],
        kia: ['Sportage', 'Sorento', 'Seltos', 'Picanto', 'Rio'],
        suzuki: ['Vitara', 'Swift', 'Alto', 'Ciaz', 'Baleno', 'Fronx', 'Spresso'],
        peugeot: ['208', '308', '2008', '3008', '508', 'Partner', 'Expert', 'Rifter', 'Boxer'],
        jetour: ['X50', 'X70', 'T2', 'Dashing'],
        baic: ['X35', 'X55', 'X7'],
        changan: ['CS55', 'Alsvin']
     },

    categories: [
        { id: 'freinage', name: 'Système de freinage', icon: 'fa-compact-disc' },
        { id: 'suspension', name: 'Transmission et suspension', icon: 'fa-cogs' },
        { id: 'electricite', name: 'Electricité', icon: 'fa -bolt' },
        { id: 'filtre', name: 'Filtre', icon: 'fa-filter' },
        { id: 'carrosserie', name: 'Carrosserie', icon: 'fa-car-side' },
        { id: 'refroidissement', name: 'Refroidissement', icon: 'fa-snowflake' },
        { id: 'moteur', name: 'Moteur', icon: 'fa-cogs' },
        { id: 'essuieglaces', name: 'Essuie-glaces', icon: 'fa-water' },
        { id: 'huile', name: 'Huiles', icon: 'fa-water' }
    ]
};

      const BRAND_PRODUCTS = {

    hyundai: {
        kona: {
            freinage: [
                {
                    id: 'hy-kona-brake-front-001',
                    name: 'Plaquettes de frein avant HYUNDAI Kona',
                    image: 'hyundai/kona/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes de frein avant spécialement conçues pour HYUNDAI Kona. Excellente résistance thermique et usure maîtrisée.'
                },
                {
                    id: 'hy-kona-brake-rear-002',
                    name: 'Plaquettes de frein arrière HYUNDAI Kona',
                    image: 'hyundai/kona/freinage/plaquettes-arriere.webp',
                    description: 'Plaquettes arrière optimisées pour le système de freinage du Kona.'
                }
            ],

            electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Kona 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Kona 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Kona 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Kona 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Kona 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Kona 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Kona 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        tucson: {
            freinage: [
                {
                    id: 'hy-kona-brake-front-001',
                    name: 'Plaquettes de frein avant HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes de frein avant spécialement conçues pour HYUNDAI Kona. Excellente résistance thermique et usure maîtrisée.'
                },
                {
                    id: 'hy-kona-brake-rear-002',
                    name: 'Plaquettes de frein arrière HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-arriere.webp',
                    description: 'Plaquettes arrière optimisées pour le système de freinage du Kona.'
                }
            ],

            electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

         elantra: {
            freinage: [
                {
                    id: 'hy-kona-brake-front-001',
                    name: 'Plaquettes de frein avant HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes de frein avant spécialement conçues pour HYUNDAI Kona. Excellente résistance thermique et usure maîtrisée.'
                },
                {
                    id: 'hy-kona-brake-rear-002',
                    name: 'Plaquettes de frein arrière HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-arriere.webp',
                    description: 'Plaquettes arrière optimisées pour le système de freinage du Kona.'
                }
            ],

            electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

       sonata: {
            freinage: [
                {
                    id: 'hy-kona-brake-front-001',
                    name: 'Plaquettes de frein avant HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes de frein avant spécialement conçues pour HYUNDAI Kona. Excellente résistance thermique et usure maîtrisée.'
                },
                {
                    id: 'hy-kona-brake-rear-002',
                    name: 'Plaquettes de frein arrière HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-arriere.webp',
                    description: 'Plaquettes arrière optimisées pour le système de freinage du Kona.'
                }
            ],

            electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        palisade: {
            freinage: [
                {
                    id: 'hy-kona-brake-front-001',
                    name: 'Plaquettes de frein avant HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes de frein avant spécialement conçues pour HYUNDAI Kona. Excellente résistance thermique et usure maîtrisée.'
                },
                {
                    id: 'hy-kona-brake-rear-002',
                    name: 'Plaquettes de frein arrière HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-arriere.webp',
                    description: 'Plaquettes arrière optimisées pour le système de freinage du Kona.'
                }
            ],

            electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        santafe: {
            freinage: [
                {
                    id: 'hy-kona-brake-front-001',
                    name: 'Plaquettes de frein avant HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes de frein avant spécialement conçues pour HYUNDAI Kona. Excellente résistance thermique et usure maîtrisée.'
                },
                {
                    id: 'hy-kona-brake-rear-002',
                    name: 'Plaquettes de frein arrière HYUNDAI Tucson',
                    image: 'hyundai/kona/freinage/plaquettes-arriere.webp',
                    description: 'Plaquettes arrière optimisées pour le système de freinage du Kona.'
                }
            ],

            electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        }
    },

    kia: {
        picanto: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Picanto',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        sportage: {
            freinage: [
                {
                    id: 'kia-spo-frein-1',
                    name: 'plaquette de frein Avant Sportage',
                    image: 'Plaquettes de frein avant KIA SPORTAGE.png',
                    description: ''
                },
                {
                    id: 'kia-spo-frein-2',
                    name: 'plaquette de frein Arrière 1 Sportage',
                    image: 'Plaquettes de frein arrière 1 KIA SPORTAGE.png',
                    description: ''
                },
                {
                    id: 'kia-spo-frein-3',
                    name: 'plaquette de frein Arrière 2 Sportage',
                    image: 'Plaquettes de frein arrière 2 KIA SPORTAGE.png',
                    description: ''
                }
                              
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'kia-spo-fil-1',
                    name: 'Filtre à air Sportage',
                    image: 'Filtres à air pour KIA SPORTAGE.png',
                    description: ''
                },
                {
                    id: 'kia-spo-fil-2',
                    name: 'Filtre à huile Sportage',
                    image: 'Filtres à huile pour KIA_SPORTAGE.png',
                    description: ''
                },
                {
                    id: 'kia-spo-fil-3',
                    name: 'Filtre habitacle Sportage',
                    image: 'Filtres habitacle pour KIA SPORTAGE.png',
                    description: ''
                },   
                {
                    id: 'kia-spo-fil-4',
                    name: 'Filtre de transmissions Sportage',
                    image: 'Filtres de transmission pour KIA SPORTAGE.png',
                    description: ''
                }            
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'kia-spo-mot-1',
                    name: 'Bouchons de vidange huile Sportage',
                    image: 'Bouchons de vidange huile pour KIA SPORTAGE.png',
                    description: ''
                },
                {
                    id: 'kia-spo-mot-2',
                    name: 'Poulie de renvoi de la courroie d\entraînement Sportage',
                    image: 'Poulie de renvoi de la courroie entraînement KIA SPORTAGE CATEGORIE MOTEUR.png',
                    description: ''
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        sorento: {
            freinage: [
                {
                    id: 'kia-sor-frein-1',
                    name: 'plaquette de frein Avant Sorento',
                    image: 'plaquette DE FREIN AVANT KIA SORENTO.png',
                    description: ''
                },
                {
                    id: 'kia-sor-frein-2',
                    name: 'plaquette de frein arrière 1 sorento',
                    image: 'Plaquettes de frein arrière KIA SORENTO.png',
                    description: ''
                },
                {
                    id: 'kia-sor-frein-3',
                    name: 'plaquette de frein arrière 2 sorento',
                    image: 'Plaquettes de frein arrière 2 KIA SORENTO.png',
                    description: ''
                }                             
            ],
             electricite: [
                {
                    id: 'kia-sor-elec-1',
                    name: 'capteur de pression des pneus Sorento',
                    image: 'Capteur de pression des pneus KIA SORENTO.png',
                    description: ''
                },
            ],

            suspension: [
                {
                    id: 'kia-sor-SUS-1',
                    name: 'Biellette de barre stabilisatrice avant droite Sorento',
                    image: 'Biellette de barre stabilisatrice avant, droite KIA SORENTO.png',
                    description: ''
                },
                {
                    id: 'kia-sor-SUS-2',
                    name: 'Biellette de barre stabilisatrice avant gauche Sorento',
                    image: 'Biellette de barre stabilisatrice avant, gauche KIA SORENTO.png',
                    description: ''
                }
            ],

            filtre: [
                {
                    id: 'kia-sor-fil-1',
                    name: 'Filtre à air Sorento',
                    image: 'Filtres à air pour KIA SORENTO.png',
                    description: ''
                },
                {
                    id: 'kia-sor-fil-2',
                    name: 'Filtre à huile Sorento',
                    image: 'Filtres à huile pour KIA_SORENTO.png',
                    description: ''
                },
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        seltos: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        rio: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        }

    },

    peugeot: {
        208: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant 208',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        308 : {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sportage',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        2008: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        3008: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        508: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },
        partner: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },
        expert: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },
        rifter: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },
         boxer: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        }

    },

     suzuki: {
        vitara: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant Vitara',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        swift: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sportage',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        alto: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        ciaz: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        baleno: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },
        fronx: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },
        spresso: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sorento',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        }
    },

     jetour: {
        x50: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant X50',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        x70: {
            freinage: [             
                {
                    id: 'baic-X70-frein-1',
                    name: 'PLAQUETTE DE FREIN AVANT X70',
                    image: 'Plaquette_AV_X70_JETOUR.png',
                    description: ''
                },
                 {
                    id: 'baic-X70-frein-2',
                    name: 'PLAQUETTE DE FREIN ARRIERE X70',
                    image: 'Plaquette_ARR_X70_JETOUR.png',
                    description: ''
                }
            ],
             electricite: [
                {
                    id: 'jt-X70-elec-1',
                    name: 'Bougie Iridium Simple X70',
                    image: 'Bougie_Iridium_JETOUR_X70_Simple.png',
                    description: ''
                },
                {
                    id: 'jt-X70-elec-2',
                    name: 'Bougie Iridium + X70',
                    image: 'Bougie_Iridium_JETOUR_X70_Plus.png',
                    description: ''
                },
                {
                    id: 'jt-X70-elec-3',
                    name: 'Bougie Iridium ++ X70',
                    image: 'Bougie_Iridium_JETOUR_X70_Simple.png',
                    description: ''
                },
                {
                    id: 'jt-X70-elec-4',
                    name: 'capteur de pression des pneus X70',
                    image: 'capteur de pression des pneus_JETOUR_X70.png',
                    description: ''
                }
            ],

            suspension: [
                {
                    id: 'jt-X70-SUS-1',
                    name: 'Rotule AVANT droit X70',
                    image: 'Rotule_AV_droit_X70_JETOUR.png',
                    description: ''
                },
                {
                    id: 'jt-X70-SUS-2',
                    name: 'Rotule AVANT gauche X70',
                    image: 'Rotule_AV_gauche_X70_JETOUR.png',
                    description: ''
                },
                {
                    id: 'jt-X70-SUS-3',
                    name: 'Biellettes de barre stabilisatrices X70.',
                    image: 'Biellettes de barre stabilisatrice pour JETOUR DASHING.png',
                    description: ''
                }
            ],

            filtre: [
                {
                    id: 'Jt-X70-fil-001',
                    name: 'Filtre à air X70',
                    image: 'Filtre_A_Air_X70_JETOUR.png',
                    description: ''
                },
                {
                    id: 'Jt-X70-fil-002',
                    name: 'Filtre à huile X70',
                    image: 'Filtre_A_huile_JETOUR_X70.png',
                    description: ''
                },                            
                {
                    id: 'Jt-X70-fil-003',
                    name: 'Filtre à transmission X70',
                    image: 'Filtre_A_transmission_X70_JETOUR.png',
                    description: ''
                },
                {
                    id: 'Jt-X70-fil-004',
                    name: 'Filtre habitacle X70',
                    image: 'Filtre_Habitacle_X70_JETOUR.png',
                    description: ''
                },
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'jt-X70-mot-1',
                    name: 'Courroie entraînement du climatiseur, de alternateur et de la pompe à eau X70',
                    image: 'Courroie entraînement du climatiseur, de alternateur et de la pompe à eau JETOUR_X70.png',
                    description: ''
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        t2: {
            freinage: [
                {
                    id: 'baic-T2-frein-1',
                    name: 'PLAQUETTE DE FREIN AVANT T2',
                    image: 'Plaquettes de frein avant JETOUR_T2.png',
                    description: ''
                },
                 {
                    id: 'baic-T2-frein-2',
                    name: 'PLAQUETTE DE FREIN ARRIERE T2',
                    image: 'carton.jpg',
                    description: ''
                }
            ],
             electricite: [
             {
                    id: 'jt-t2-elec-1',
                    name: 'Bobines allumage T2',
                    image: 'Bobines allumage JETOUR T2.png',
                    description: ''
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'Jt-T2-fil-001',
                    name: 'Filtre à air T2',
                    image: 'filtre a air JETOUR_T2 .png',
                    description: ''
                },
                {
                    id: 'Jt-T2-fil-002',
                    name: 'Filtre à huile T2',
                    image: 'filtre a huile JETOUR T2.png',
                    description: ''
                },                            
                {
                    id: 'Jt-T2-fil-003',
                    name: 'Filtre à transmission T2',
                    image: 'Filtre_A_transmission_X70_JETOUR.png',
                    description: ''
                },
                {
                    id: 'Jt-T2-fil-004',
                    name: 'Filtre habitacle 1 T2',
                    image: 'filtre habitacle 2 jetour T2.png',
                    description: ''
                },
                {
                    id: 'Jt-T2-fil-004',
                    name: 'Filtre habitacle 2 T2',
                    image: 'Filtres habitacle 1 JETOUR_T2.png',
                    description: ''
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        dashing: {
            freinage: [
                {
                    id: 'jt-dash-frein-1',
                    name: 'PLAQUETTE DE FREIN AVANT 2 DASHING',
                    image: 'Plaquettes de frein avant 2 JETOUR_DASHING.png',
                    description: ''
                },
                {
                    id: 'jt-dash-frein-2',
                    name: 'Plaquettes de frein arrière Dashing',
                    image: 'Plaquettes de frein arrière JETOUR DASHING.png',
                    description: ''
                }               
            ],
             electricite: [
                {
                    id: 'jt-dash-elec-1',
                    name: 'capteur de pression des pneus Dashing',
                    image: 'Capteurs de pression des pneus pour JETUR DASHING.png',
                    description: ''
                },
                {
                    id: 'jt-dash-elec-2',
                    name: 'Bougie allumage double iridium 1 Dashing',
                    image: 'Bougie allumage double iridium 1 pour JETUR DASHING.png',
                    description: ''
                },
                {
                    id: 'jt-dash-elec-3',
                    name: 'Bougie allumage double iridium 2 Dashing',
                    image: 'Bougie allumage double iridium 2 pour JETUR DASHING.png',
                    description: ''
                }              
            ],

            suspension: [
               {
                    id: 'jt-dash-SUS-1',
                    name: 'Biellettes de barre stabilisatrices DASHING.',
                    image: 'Biellettes de barre stabilisatrice pour JETOUR DASHING.png',
                    description: ''
                },
                {
                    id: 'jt-dash-SUS-2',
                    name: 'Rotule de bras de suspension inférieur avant, côté droit Dashing',
                    image: 'Rotule de bras de suspension inférieur avant, côté droit JETOUR_DASHING.png',
                    description: ''
                },
                {
                    id: 'jt-dash-SUS-3',
                    name: 'Rotule de bras de suspension inférieur avant, gauche Dashing',
                    image: 'Rotule de bras de suspension inférieur avant, gauche JETOUR_DASHING.png',
                    description: ''
                }                              
            ],

            filtre: [
                {
                    id: 'Jt-Dash-fil-001',
                    name: 'Filtre à air Dashing',
                    image: 'Filtres à air pour JETOUR_DASHING.png',
                    description: ''
                },
                {
                    id: 'Jt-Dash-fil-002',
                    name: 'Filtre à huile Dashing',
                    image: 'Filtres à huile pour JETOUR_DASHING.png',
                    description: ''
                },                            
                {
                    id: 'Jt-Dash-fil-003',
                    name: 'Filtre à transmission Dashing',
                    image: 'Filtre_A_transmission_X70_JETOUR.png',
                    description: ''
                },
                {
                    id: 'Jt-Dash-fil-004',
                    name: 'Filtre habitacle Dashing',
                    image: 'Filtres habitacle pour JETOUR_DASHING.png',
                    description: ''
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'jt-dash-mot-1',
                    name: 'Courroie entraînement du climatiseur, de alternateur et de la pompe à eau Dashing',
                    image: 'Courroie entraînement du climatiseur, alternateur et de la pompe à eau jetour DASHING.png',
                    description: ''
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        }
    },

    baic: {
        x35: {
            freinage: [
                {
                    id: 'baic-X35-frein-1',
                    name: 'PLAQUETTE DE FREIN AVANT X35',
                    image: 'PLAQUETTE DE FREIN AV BAIC X35.png',
                    description: ''
                },
                 {
                    id: 'baic-X35-frein-2',
                    name: 'PLAQUETTE DE FREIN ARRIERE X35',
                    image: 'PLAQUETTE DE FREIN ARR BAIC X35.png',
                    description: ''
                }
            ],
             electricite: [
                {
                    id: 'baic-X35-elec-1',
                    name: 'Bobines allumage X35',
                    image: 'Bobines allumage BAIC X35.png',
                    description: ''
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
               {
                    id: 'Jt-X35-fil-001',
                    name: 'Filtre à air X35',
                    image: 'filtre a air baic _x35.png',
                    description: ''
                },
                {
                    id: 'Jt-X35-fil-002',
                    name: 'Filtre à huile 1 X35',
                    image: 'filtre a huile 1 BAIC X35.png',
                    description: ''
                }, 
                {
                    id: 'Jt-X35-fil-003',
                    name: 'Filtre à huile 2 X35',
                    image: 'filtre a huile 2 BAIC X35.png',
                    description: ''
                },                            
                {
                    id: 'Jt-X35-fil-004',
                    name: 'Filtre à transmission X35',
                    image: 'Filtre_A_transmission_X70_JETOUR.png',
                    description: ''
                },
                {
                    id: 'Jt-X35-fil-005',
                    name: 'Filtre habitacle X35',
                    image: 'filtre habitacle BAIC X35.png',
                    description: ''
                },
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        x55: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant KIA Sportage',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
              {
                    id: 'Jt-X55-fil-001',
                    name: 'Filtre à air X55',
                    image: 'filtre a air baic x55.png',
                    description: ''
                },
                {
                    id: 'Jt-X55-fil-002',
                    name: 'Filtre à huile X55',
                    image: 'carton.jpg',
                    description: ''
                },                             
                {
                    id: 'Jt-X55-fil-003',
                    name: 'Filtre à transmission X55',
                    image: 'carton.jpg',
                    description: ''
                },
                {
                    id: 'Jt-X55-fil-004',
                    name: 'Filtre habitacle X55',
                    image: 'carton.jpg',
                    description: ''
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        x7: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant X7',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        }
    },

    changan : {

        alsvin: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant Alsvin',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        },

        cS55: {
            freinage: [
                {
                    id: 'kia-picanto-brake-front-001',
                    name: 'Plaquettes de frein avant Alsvin',
                    image: 'kia/picanto/freinage/plaquettes-avant.webp',
                    description: 'Plaquettes avant pour KIA Picanto, adaptées à la conduite urbaine.'
                }
            ],
             electricite: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            suspension: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 3.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            filtre: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],
            
            refroidissement: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            moteur: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            essuieglaces: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ],

            carrosserie: [
                {
                    id: 'hy-kona-alt-001',
                    name: 'Alternateur HYUNDAI Tucson 2.0',
                    image: 'hyundai/kona/electricite/alternateur.webp',
                    description: 'Alternateur OEM 120A compatible Kona essence.'
                }
            ]
        }
    }
};


        // --- ÉTAT ---
        let state = {
            brand: null,
            model: null,
            category: null
        };

        // --- DOM ELEMENTS ---
        const brandGrid = document.getElementById('brand-grid');
        const modelSection = document.getElementById('model-section');
        const modelGrid = document.getElementById('model-grid');
        const categorySection = document.getElementById('category-section');
        const categoryGrid = document.getElementById('category-grid');
        const productSection = document.getElementById('product-section');
        const productGrid = document.getElementById('product-grid');

        // --- INITIALISATION ---
        function init() {
            renderBrands();
            setupSearch();
        }

        // --- RENDERING FUNCTIONS ---

        function renderBrands() {
            brandGrid.innerHTML = data.brands.map(brand => `
                <div onclick="selectBrand('${brand.id}')" 
                     class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer hover:bg-white hover:border-ksy-gold transition-all duration-500 flex items-center justify-center aspect-[4/3] relative overflow-hidden">
                    <div class="absolute inset-0 bg-ksy-gold/0 group-hover:bg-ksy-gold/5 transition duration-500"></div>
                    <img src="${brand.image}" 
     alt="${brand.name}" 
     class="max-w-[80%] max-h-[60%] object-contain filter grayscale brightness-200 contrast-0 group-hover:filter-none transition-all duration-500 transform group-hover:scale-110"
     onerror="this.src='https://placehold.co/100x50/0B1F3B/C9A24D?text=${brand.name}'">

                    <div class="absolute bottom-2 text-[10px] text-gray-400 group-hover:text-ksy-blue font-bold tracking-widest opacity-0 group-hover:opacity-100 transition duration-500 uppercase">
                        Sélectionner
                    </div>
                </div>
            `).join('');
        }

        function selectBrand(brandId) {
            state.brand = data.brands.find(b => b.id === brandId);
            state.model = null;
            state.category = null;

            // UI Updates
            document.getElementById('selected-brand-name').innerText = state.brand.name;
            
            // Hide subsequent sections
            categorySection.classList.add('hidden');
            productSection.classList.add('hidden');
            
            // Render Models
            renderModels(brandId);
            
            // Reveal Model Section
            modelSection.classList.remove('hidden');
            setTimeout(() => {
                modelSection.classList.add('reveal-visible');
                modelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function renderModels(brandId) {
            const models = data.models[brandId];
            modelGrid.innerHTML = models.map(model => `
                <div onclick="selectModel('${model}')" 
                     class="bg-[#0f2a4f] border border-white/5 p-6 rounded-lg cursor-pointer hover:border-ksy-gold group card-hover relative overflow-hidden">
                    <div class="absolute right-0 top-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full"></div>
                    <h4 class="text-xl font-bold text-white group-hover:text-ksy-gold transition">${model}</h4>
                    <p class="text-xs text-gray-400 mt-2 uppercase tracking-wide">Voir les pièces</p>
                    <i class="fas fa-arrow-right absolute bottom-6 right-6 text-white/10 group-hover:text-ksy-gold transform group-hover:translate-x-1 transition"></i>
                </div>
            `).join('');
        }

        function resetToBrand() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                modelSection.classList.remove('reveal-visible');
                setTimeout(() => modelSection.classList.add('hidden'), 500);
            }, 500);
        }

        function selectModel(modelName) {
            state.model = modelName;
            state.category = null;

            // UI Updates
            document.getElementById('breadcrumb-brand').innerText = state.brand.name;
            document.getElementById('breadcrumb-model').innerText = modelName;
            
            productSection.classList.add('hidden');

            renderCategories();
            
            categorySection.classList.remove('hidden');
            setTimeout(() => {
                categorySection.classList.add('reveal-visible');
                categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function resetToModel() {
            modelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            categorySection.classList.remove('reveal-visible');
            setTimeout(() => categorySection.classList.add('hidden'), 500);
        }

        function renderCategories() {
            categoryGrid.innerHTML = data.categories.map(cat => `
                <div onclick="selectCategory('${cat.id}')"
                     class="bg-[#0B1F3B] border border-white/10 p-8 rounded-xl cursor-pointer hover:bg-[#112a4d] hover:border-ksy-gold transition-all duration-300 text-center group">
                    <div class="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-ksy-gold group-hover:text-ksy-blue transition-colors duration-300">
                        <i class="fas ${cat.icon || 'fa-cogs'} text-2xl text-ksy-gold group-hover:text-ksy-blue"></i>
                    </div>
                    <h4 class="text-lg font-bold text-white tracking-wide">${cat.name}</h4>
                </div>
            `).join('');
        }

        function selectCategory(catId) {
            state.category = data.categories.find(c => c.id === catId);
            
            renderProducts();
            
            productSection.classList.remove('hidden');
            setTimeout(() => {
                productSection.classList.add('reveal-visible');
                productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function resetToCategory() {
            categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            productSection.classList.remove('reveal-visible');
            setTimeout(() => productSection.classList.add('hidden'), 500);
        }
        function renderProducts() {

    const brandId = state.brand.id;
    const modelKey = state.model.toLowerCase();
    const categoryId = state.category.id;

    const products =
        BRAND_PRODUCTS?.[brandId]?.[modelKey]?.[categoryId] || [];

    productGrid.innerHTML = products.map(product => `
        <div class="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:border-ksy-gold transition-all duration-300 group flex flex-col">
            
            <div class="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                <img src="${product.image}"
                     alt="${product.name}"
                     class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                <div class="absolute top-2 right-2 bg-ksy-gold text-ksy-blue text-[10px] font-bold px-2 py-1 rounded">
                    ORIGINE
                </div>
            </div>

            <div class="p-6 flex-1 flex flex-col">
                <div class="mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    ${state.brand.name} / ${state.model}
                </div>

                <h3 class="text-lg font-bold text-ksy-blue mb-2 leading-tight group-hover:text-ksy-gold transition">
                    ${product.name}
                </h3>

                <p class="text-sm text-gray-500 mb-4 line-clamp-2">
                    ${product.description}
                </p>

                <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span class="text-xs font-semibold text-green-600 flex items-center gap-1">
                        <i class="fas fa-check-circle"></i> Compatible
                    </span>

                    <button onclick="openModal(
                        '${product.name.replace(/'/g, "\\'")}',
                        '${product.image}',
                        '${state.brand.name} ${state.model}'
                    )"
                    class="text-ksy-blue font-bold text-sm hover:text-ksy-gold transition flex items-center gap-2">
                        DÉTAILS <i class="fas fa-chevron-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('result-context').innerText =
        `Pièces ${state.category.name.toLowerCase()} pour ${state.brand.name} ${state.model}`;
}

        // --- SEARCH LOGIC (Barre de recherche dynamique) ---
        function setupSearch() {
            const input = document.getElementById('global-search');
            const resultsBox = document.getElementById('search-results-dropdown');
            const inputMobile = document.getElementById('mobile-search'); // Minimal hook for mobile

            const performSearch = (query) => {
    query = query.toLowerCase().trim();
    if (query.length < 2) {
        resultsBox.classList.add('hidden');
        return;
    }

    let matches = [];
    const tokens = query.split(/\s+/);

    /* ==========================
       1️⃣ Recherche MARQUE / MODÈLE (inchangée, sécurisée)
    ========================== */
    data.brands.forEach(b => {
        if (b.name.toLowerCase().includes(query)) {
            matches.push({
                type: 'brand',
                text: `Pièces pour ${b.name}`,
                id: b.id
            });
        }

        data.models[b.id].forEach(m => {
            if (m.toLowerCase().includes(query)) {
                matches.push({
                    type: 'model',
                    text: `Pièces pour ${b.name} ${m}`,
                    brandId: b.id,
                    model: m
                });
            }
        });
    });

    /* ==========================
       2️⃣ Recherche PRODUIT RÉEL (nouvelle valeur ajoutée)
       Exploite BRAND_PRODUCTS sans le modifier
    ========================== */
    Object.entries(BRAND_PRODUCTS).forEach(([brandId, models]) => {
        Object.entries(models).forEach(([modelKey, categories]) => {
            Object.entries(categories).forEach(([catId, products]) => {
                products.forEach(product => {

                    const productName = product.name.toLowerCase();

                    // Tous les mots tapés doivent matcher quelque part
                    const isMatch = tokens.every(t =>
                        productName.includes(t) ||
                        modelKey.includes(t) ||
                        brandId.includes(t)
                    );

                    if (isMatch) {
                        const brandName =
                            data.brands.find(b => b.id === brandId)?.name || '';

                        matches.push({
                            type: 'product',
                            text: `${product.name} — ${brandName} ${modelKey}`,
                            brandId,
                            model: modelKey,
                            category: catId
                        });
                    }
                });
            });
        });
    });

    renderSearchResults(matches.slice(0, 6));
};


            input.addEventListener('input', (e) => performSearch(e.target.value));

            function renderSearchResults(results) {
                if (results.length === 0) {
                    resultsBox.innerHTML = '<div class="p-4 text-sm text-gray-500">Aucun résultat trouvé. Essayez "Tucson" ou "Filtre"...</div>';
                } else {
                    resultsBox.innerHTML = results.map(r => `
                        <div class="p-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 border-b border-gray-100 last:border-0" onclick="handleSearchResultClick('${r.type}', '${r.id || ''}', '${r.brandId || ''}', '${r.model || ''}')">
                            <div class="w-8 h-8 bg-ksy-blue/10 rounded-full flex items-center justify-center text-ksy-blue">
                                <i class="fas ${r.type === 'brand' ? 'fa-car' : (r.type === 'model' ? 'fa-car-side' : 'fa-cog')}"></i>
                            </div>
                            <span class="text-sm font-medium text-gray-700">${r.text}</span>
                        </div>
                    `).join('');
                }
                resultsBox.classList.remove('hidden');
            }
        }

        function handleSearchResultClick(type, id, brandId, model) {
             const resultsBox = document.getElementById('search-results-dropdown');
             resultsBox.classList.add('hidden');
             
             // Simulation de redirection intelligente
             if (type === 'brand') {
                 selectBrand(id);
                 document.getElementById('brand-section').scrollIntoView();
             } else if (type === 'model') {
                 selectBrand(brandId);
                 setTimeout(() => selectModel(model), 800);
             }else if (type === 'product') {
    selectBrand(brandId);
    setTimeout(() => {
        selectModel(model);
    }, 600);
}
 
             else {
                 // Générique : on scroll juste vers les marques pour inciter à choisir
                 alert("Veuillez sélectionner votre véhicule pour voir la compatibilité de : " + event.target.innerText);
                 window.scrollTo({ top: 300, behavior: 'smooth' });
             }
        }

        // --- MODAL LOGIC ---
        function openModal(title, image, subtitle) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-subtitle').innerText = subtitle;
            document.getElementById('modal-image').src = image;
            document.getElementById('modal-desc').innerText = `Ceci est une pièce de rechange de haute qualité pour ${subtitle}. Fabriquée selon les normes OEM pour garantir une performance optimale et une longévité accrue.`;
            document.getElementById('modal-compat').innerText = `Compatible avec toutes les versions de ${subtitle} (Années 2018-2024). Veuillez vérifier le numéro de châssis pour confirmation.`;
            
            document.getElementById('product-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('product-modal').classList.add('hidden');
        }

        // --- SEARCH VISIBILITY ---
        // Fermer la recherche si on clique ailleurs
        document.addEventListener('click', function(event) {
            const searchBox = document.getElementById('search-results-dropdown');
            const searchInput = document.getElementById('global-search');
            if (!searchInput.contains(event.target) && !searchBox.contains(event.target)) {
                searchBox.classList.add('hidden');
            }
        });

        // Start
        init();