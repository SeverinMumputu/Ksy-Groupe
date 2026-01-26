// --- DONNÉES ---
        // Catégories avec images HD (PNG/JPEG)
        const categories = [
            { id: 'freinage', name: 'Freinage', image: 'kit_frein.jpg' },
            { id: 'suspension', name: 'Suspension', image: 'suspension.jpg' },
            { id: 'electricite', name: 'Electricité', image: 'electricité.jpg' },
            { id: 'filtration', name: 'Filtration', image: 'filtre_2.jpg' },
            { id: 'carrosserie', name: 'Carrosserie', image: 'carrosserie.jpg' },
            { id: 'refroidissement', name: 'Refroidissement', image: 'compresseur.webp' }
        ];

        // Produits par catégorie
        const productsMap = {
            'freinage': [
                { name: 'Plaquettes de frein AR', img: 'Plaquettes de frein AV HYUNDAI Elantra.webp' },
                { name: 'Plaquettes de frein AV', img: 'Plaquettes de frein AV HYUNDAI Kona.webp' }
            ],
            'suspension': [
                { name: 'Amortisseur AV', img: 'Amortisseurs arriere KIA Sportage.webp' },
                { name: 'Amortisseur AR', img: 'Amortisseurs avant KIA Sorento.webp' }
            ],
            'electricite': [
                { name: 'Bougies', img: 'Bougies KIA Picanto.webp' },
                { name: 'Alternateur', img: 'Alternateur HYUNDAI Palisade.webp' },
                { name: 'Démarreur', img: 'Demarreur HYUNDAI Kona.webp' },
                { name: 'Phare avant', img: 'Phare avant HYUNDAI Elantra.webp' },
                { name: 'Feu arrière', img: 'feu_arriere.jpg' }
            ],
            'filtration': [
                { name: 'Filtre à air', img: 'Filtre  air HYUNDAI Kona.webp' },
                { name: 'Filtre à carburant', img: 'Filtre  carburant HYUNDAI Kona.webp' }
            ],
            'carrosserie': [
                { name: 'Rétroviseur', img: 'Rétroviseur gauche KIA Picanto.webp' }
            ],
            'refroidissement': [
                { name: 'Radiateur', img: 'Radiateur HYUNDAI Kona.webp' },
                { name: 'Compresseur de clim', img: 'Compresseur de climatisation KIA Picanto.webp' }
            ]
        };

        // Liste fictive de compatibilité pour la démo
        const commonCompatibility = "HYUNDAI Tucson, KIA Sportage, PEUGEOT 3008, SUZUKI Vitara";

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

            // Update UI Content
            breadcrumbCurrent.innerText = category.name;
            categoryTitle.innerText = category.name;

            // Render Products
            productGrid.innerHTML = products.map(prod => `
                <div class="bg-white group cursor-default">
                    <div class="relative aspect-square overflow-hidden bg-gray-50 border border-gray-100 mb-6">
                        <img src="${prod.img}" alt="${prod.name}" class="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition duration-700">
                        <div class="absolute top-4 right-4 bg-ksy-blue text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Neuf</div>
                        
                        <!-- Overlay Action -->
                        <div class="absolute inset-0 bg-ksy-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button onclick="openModal('${prod.name.replace(/'/g, "\\'")}', '${prod.img}', '${category.name}')" 
                                    class="border border-ksy-gold text-ksy-gold px-6 py-3 uppercase text-xs font-bold tracking-widest hover:bg-ksy-gold hover:text-ksy-blue transition transform translate-y-4 group-hover:translate-y-0 duration-300">
                                Voir Détails
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-bold text-ksy-blue mb-2">${prod.name}</h3>
                        <div class="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                             <span class="bg-gray-100 px-2 py-1 rounded">Ref: KSY-${Math.floor(Math.random()*1000)}</span>
                             <span class="text-green-600 font-semibold"><i class="fas fa-check-circle"></i> En stock</span>
                        </div>
                        <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                            Composant de qualité supérieure pour le système de ${category.name.toLowerCase()}. Conçu pour une durabilité maximale.
                        </p>
                    </div>
                </div>
            `).join('');

            // Reveal Section
            productSection.classList.remove('hidden');
            setTimeout(() => {
                productSection.classList.add('reveal-visible');
                // Scroll doux vers les produits
                const offset = 80; // Hauteur header
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = productSection.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
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
                    openModal(name, img, catName);
                }, 500);
            }
        }

        // --- MODAL ---
        function openModal(title, image, categoryName) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-category').innerText = categoryName;
            document.getElementById('modal-image').src = image;
            
            document.getElementById('modal-desc').innerHTML = `
                Ce produit <strong>${title}</strong> est une pièce de rechange certifiée KSY GROUPE. 
                <br><br>
                Fabriquée selon des normes strictes pour assurer une compatibilité parfaite avec le système de ${categoryName.toLowerCase()}.
                <br>
                Matériaux haute résistance et durabilité éprouvée.
            `;
            
            document.getElementById('modal-compat').innerText = commonCompatibility;
            
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