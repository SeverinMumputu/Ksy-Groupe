// --- DONNÉES ---
const EXPERT_PHONE = "+221778509048";

        // Catégories avec images HD (PNG/JPEG)
        const categories = [
            { id: 'freinage', name: 'Système de freinage', image: 'kit_frein.jpg' },
            { id: 'suspension', name: 'Transmission et suspension', image: 'suspension.jpg' },
            { id: 'electricite', name: 'Electricité', image:'electricité.jpg' },
            { id: 'filtre', name: 'Filtre', image:'filtre_bg.jpg'},
            { id: 'carrosserie', name: 'Carrosserie', image:'carrosserie.jpg' },
            { id: 'refroidissement', name: 'Refroidissement', image: 'clim.jpg' },
            { id: 'moteur', name: 'Moteur', image: 'moteur.jpg' },
            { id: 'essuieglaces', name: 'Essuie-glace', image:'essuie-glace.jpg' },
            { id: 'huile', name: 'Huiles', image:'huile.jpg' }
        ];

        // Produits par catégorie
        const productsMap = {
    freinage: [
        {
            name: 'Plaquettes de frein AR',
            img: 'Plaquettes de frein AV HYUNDAI Elantra.webp',
            description: 'Plaquettes arrière haute performance assurant un freinage stable et silencieux.',
            compatibility: 'HYUNDAI Elantra, HYUNDAI i30'
        },
        {
            name: 'Plaquettes de frein AV',
            img: 'Plaquettes de frein AV HYUNDAI Kona.webp',
            description: 'Plaquettes avant d’origine conçues pour une réponse immédiate au freinage.',
            compatibility: 'HYUNDAI Kona, KIA Seltos'
        }
    ],

    suspension: [
        {
            name: 'Amortisseur AV',
            img: 'Amortisseurs arriere KIA Sportage.webp',
            description: 'Amortisseur avant garantissant confort et tenue de route optimale.',
            compatibility: 'KIA Sportage, HYUNDAI Tucson'
        },
        {
            name: 'Amortisseur AR',
            img: 'Amortisseurs avant KIA Sorento.webp',
            description: 'Amortisseur arrière renforcé pour charges et routes dégradées.',
            compatibility: 'KIA Sorento'
        }
    ],

    electricite: [
        {
            name: 'Alternateur',
            img: 'Alternateur HYUNDAI Palisade.webp',
            description: 'Alternateur OEM assurant une alimentation électrique stable du véhicule.',
            compatibility: 'HYUNDAI Palisade'
        },
        {
            name: 'Démarreur',
            img: 'Demarreur HYUNDAI Kona.webp',
            description: 'Démarreur haute fiabilité pour démarrage à froid et conditions extrêmes.',
            compatibility: 'HYUNDAI Kona'
        }
    ],
        moteur: [
        {
            name: 'Alternateur',
            img: 'Alternateur HYUNDAI Palisade.webp',
            description: 'Alternateur OEM assurant une alimentation électrique stable du véhicule.',
            compatibility: 'HYUNDAI Palisade'
        },
        {
            name: 'Démarreur',
            img: 'Demarreur HYUNDAI Kona.webp',
            description: 'Démarreur haute fiabilité pour démarrage à froid et conditions extrêmes.',
            compatibility: 'HYUNDAI Kona'
        }
    ],
            huile: [
        {
            name: 'Alternateur',
            img: 'Alternateur HYUNDAI Palisade.webp',
            description: 'Alternateur OEM assurant une alimentation électrique stable du véhicule.',
            compatibility: 'HYUNDAI Palisade'
        },
        {
            name: 'Démarreur',
            img: 'Demarreur HYUNDAI Kona.webp',
            description: 'Démarreur haute fiabilité pour démarrage à froid et conditions extrêmes.',
            compatibility: 'HYUNDAI Kona'
        }
    ]
};


      

        // --- DOM ELEMENTS ---
        const categoryGrid = document.getElementById('category-grid');
        const productSection = document.getElementById('product-section');
        const productGrid = document.getElementById('product-grid');
        const breadcrumbCurrent = document.getElementById('breadcrumb-current');
        const categoryTitle = document.getElementById('category-title');

        
        // --- INITIALISATION ---
        function init() {
            renderCategories();
            setupSearch();
        }

        // --- RENDERING ---

        function renderCategories() {
            categoryGrid.innerHTML = categories.map(cat => `
                <div onclick="selectCategory('${cat.id}')" 
                     class="group category-card cursor-pointer relative overflow-hidden h-48 md:h-64 rounded-lg border border-white/20 bg-black/40">
                    
                    <!-- Image de fond -->
                    <img src="${cat.image}" 
                         alt="${cat.name}" 
                         class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-60 group-hover:opacity-100">
                    
                    <!-- Overlay dégradé -->
                    <div class="absolute inset-0 bg-gradient-to-t from-ksy-blue via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                    
                    <!-- Contenu texte -->
                    <div class="absolute bottom-0 left-0 w-full p-4 text-center">
                        <h4 class="text-lg md:text-xl font-serif font-bold text-white group-hover:text-ksy-gold transition-colors duration-300 tracking-wide">${cat.name}</h4>
                        <div class="h-[2px] w-0 bg-ksy-gold mx-auto mt-2 transition-all duration-300 group-hover:w-12"></div>
                    </div>
                </div>
            `).join('');
        }

        function selectCategory(catId) {
    const category = categories.find(c => c.id === catId);
    const products = productsMap[catId] || [];

    breadcrumbCurrent.innerText = category.name;
    categoryTitle.innerText = category.name;

    productGrid.innerHTML = products.map((prod, index) => `
        <div class="bg-white group">
            <div class="relative aspect-square overflow-hidden bg-gray-50 border border-gray-100 mb-6">
                <img src="${prod.img}" alt="${prod.name}"
                     class="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition duration-700">

                <div class="absolute top-4 right-4 bg-ksy-blue text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    Neuf
                </div>

                <!-- OVERLAY ACTION -->
                <div class="absolute inset-0 bg-ksy-blue/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <button
                        onclick="openProductModal('${catId}', ${index})"
                        class="border border-ksy-gold text-ksy-gold px-6 py-3 uppercase text-xs font-bold tracking-widest
                               hover:bg-ksy-gold hover:text-ksy-blue transition transform translate-y-4
                               group-hover:translate-y-0">
                        Voir détails
                    </button>
                </div>
            </div>

            <h3 class="text-lg font-bold text-ksy-blue mb-2">${prod.name}</h3>

            <p class="text-sm text-gray-500 leading-relaxed line-clamp-2">
                ${prod.description}
            </p>
        </div>
    `).join('');

    productSection.classList.remove('hidden');
    setTimeout(() => productSection.classList.add('reveal-visible'), 100);
}


        function resetToCategories() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            productSection.classList.remove('reveal-visible');
            setTimeout(() => productSection.classList.add('hidden'), 500);
        }

        // --- SEARCH LOGIC ---
        function setupSearch() {
            const input = document.getElementById('global-search');
            const desktopResultsBox = document.getElementById('search-results-dropdown');
const mobileResultsBox = document.getElementById('mobile-search-results');

function getActiveResultsBox() {
    return window.innerWidth < 768 ? mobileResultsBox : desktopResultsBox;
}

            const inputMobile = document.getElementById('mobile-search');

            const performSearch = (query) => {
                if (query.length < 2) {
                    const box = getActiveResultsBox();
                    box.classList.add('hidden');
                    return;
                }

                let matches = [];
                // Recherche dans les catégories
                categories.forEach(cat => {
                    if (cat.name.toLowerCase().includes(query.toLowerCase())) {
                        matches.push({ type: 'category', text: `Catégorie : ${cat.name}`, id: cat.id });
                    }
                });

                // Recherche dans les produits (flat list)
                Object.keys(productsMap).forEach(catId => {
                    productsMap[catId].forEach(prod => {
                        if (prod.name.toLowerCase().includes(query.toLowerCase())) {
                             matches.push({ type: 'product', text: prod.name, catId: catId, img: prod.img });
                        }
                    });
                });

                renderSearchResults(matches.slice(0, 5));
            };

            [input, inputMobile].forEach(el => {
                if(el) el.addEventListener('input', (e) => performSearch(e.target.value));
            });

          function renderSearchResults(results) {
    const box = getActiveResultsBox();

    if (!box) return;

    if (results.length === 0) {
        box.innerHTML = `<div class="p-4 text-sm text-gray-500 italic">
            Aucun produit trouvé.
        </div>`;
    } else {
        box.innerHTML = results.map(r => `
            <div class="p-3 hover:bg-gray-50 cursor-pointer flex items-center gap-4 border-b last:border-0"
                 onclick="handleSearchResultClick('${r.type}', '${r.id || r.catId}', '${r.text.replace(/'/g, "\\'")}', '${r.img || ''}')">
                <div class="w-10 h-10 bg-ksy-blue/5 rounded overflow-hidden flex items-center justify-center">
                    ${r.img ? `<img src="${r.img}" class="w-full h-full object-cover">` : `<i class="fas fa-folder"></i>`}
                </div>
                <div>
                    <p class="text-sm font-bold text-ksy-blue">${r.text}</p>
                    <p class="text-[10px] text-ksy-gold uppercase">
                        ${r.type === 'category' ? 'Voir la catégorie' : 'Voir le produit'}
                    </p>
                </div>
            </div>
        `).join('');
    }

    box.classList.remove('hidden');
}

        }

        function handleSearchResultClick(type, catId, name, img) {
            const resultsBox = document.getElementById('search-results-dropdown');
            resultsBox.classList.add('hidden');
            
            if (type === 'category') {
                selectCategory(catId);
            } else if (type === 'product') {
                // Ouvrir la catégorie puis le modal du produit
                selectCategory(catId);
                // Petit délai pour laisser le temps au DOM de se mettre à jour si nécessaire
                setTimeout(() => {
                    const catName = categories.find(c => c.id === catId).name;
                    const productIndex = productsMap[catId].findIndex(p => p.name === name);
openProductModal(catId, productIndex);

                }, 500);
            }
        }

        // --- MODAL ---
function openProductModal(catId, productIndex) {
    const product = productsMap[catId][productIndex];
    const categoryName = categories.find(c => c.id === catId).name;

    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-category').innerText = categoryName;
    document.getElementById('modal-image').src = product.img;
    document.getElementById('modal-desc').innerText = product.description;
    document.getElementById('modal-compat').innerText = product.compatibility;

    // 👉 WhatsApp message dynamique (premium & contextuel)
    const message = `
Bonjour,
Je souhaite avoir plus d'informations sur le produit suivant :

• Produit : ${product.name}
• Catégorie : ${categoryName}
• Compatibilité : ${product.compatibility}

Merci.
    `.trim();

    const whatsappUrl = `https://wa.me/${EXPERT_PHONE.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;

    const contactBtn = document.getElementById('contact-expert-btn');
    contactBtn.setAttribute("href", whatsappUrl);
    contactBtn.setAttribute("target", "_blank");

    document.getElementById('product-modal').classList.remove('hidden');
}




        function closeModal() {
            document.getElementById('product-modal').classList.add('hidden');
        }

        // Click outside search to close
        document.addEventListener('click', function(event) {
            document.addEventListener('click', (e) => {
    const desktopBox = document.getElementById('search-results-dropdown');
    const mobileBox = document.getElementById('mobile-search-results');
    const desktopInput = document.getElementById('global-search');
    const mobileInput = document.getElementById('mobile-search');

    if (
        (!desktopInput || !desktopInput.contains(e.target)) &&
        (!mobileInput || !mobileInput.contains(e.target)) &&
        (!desktopBox.contains(e.target)) &&
        (!mobileBox.contains(e.target))
    ) {
        desktopBox.classList.add('hidden');
        mobileBox.classList.add('hidden');
    }
});

            const searchInput = document.getElementById('global-search');
            if (!searchInput.contains(event.target) && !searchBox.contains(event.target)) {
                searchBox.classList.add('hidden');
            }
        });

        // Start
        init();