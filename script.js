// --- 1. THE NEW AC "DATABASE" WITH LINKS ---
// I've added example Amazon links.
const acRecommendations = {
    "1.0 Ton": [
        {
            brand: "LG",
            model: "PS-Q13",
            stars: "4 Star AI Dual Inverter",
            imageUrl: "https://m.media-amazon.com/images/I/41ajT4+QSfL._AC_UF894,1000_QL80_.jpg",
            link: "https://www.amazon.in/LG-Convertible-AntiVirus-Protection-US-Q13JNYE/dp/B0DQQ55C8M/ref=sr_1_10?crid=3OBWSFIT45SEW&dib=eyJ2IjoiMSJ9.wQIq5acYz5kfa6QQwTVVJqk3rxJyuyzhqum3Fh28P07l_z-HbTXn0F196qHKMbmyQ4IMXu4X7BHDlIhRfUGp645UFQL_Mh_oVb_aOHaoaQygUTrHHCnpwN0Cx7TxTsQ0Ht3DVAVMbvI6nzis6S-m4nlZgJ5lW7IC1wPPlKiJgvebUTmxxPa_XKNlKNveZeyzZZNvnf_wEP819alj62xlqVxMKqVK3S4swh-SNzGVTdA.Zhq-c-wkegdxo6LL3TK7HIr7jq3LVZh_qrgFer9Vmtk&dib_tag=se&keywords=1+ton+ac&qid=1761923275&s=kitchen&sprefix=1+%2Ckitchen%2C213&sr=1-10"
        },
        {
            brand: "Voltas",
            model: "123VECTRA",
            stars: "3 Star Adjustable Inverter",
            imageUrl: "https://m.media-amazon.com/images/I/41CdTMpDHRL._AC_UF1000,1000_QL80_.jpg",
            link: "https://www.amazon.in/Voltas-Adjustable-Anti-dust-123V-CAE/dp/B0D5BN2FDY/ref=sr_1_6?crid=3OBWSFIT45SEW&dib=eyJ2IjoiMSJ9.wQIq5acYz5kfa6QQwTVVJqk3rxJyuyzhqum3Fh28P07l_z-HbTXn0F196qHKMbmyQ4IMXu4X7BHDlIhRfUGp645UFQL_Mh_oVb_aOHaoaQygUTrHHCnpwN0Cx7TxTsQ0Ht3DVAVMbvI6nzis6S-m4nlZgJ5lW7IC1wPPlKiJgvebUTmxxPa_XKNlKNveZeyzZZNvnf_wEP819alj62xlqVxMKqVK3S4swh-SNzGVTdA.Zhq-c-wkegdxo6LL3TK7HIr7jq3LVZh_qrgFer9Vmtk&dib_tag=se&keywords=1%2Bton%2Bac&qid=1761923275&s=kitchen&sprefix=1%2B%2Ckitchen%2C213&sr=1-6&th=1"
        },
        {
            brand: "Blue Star",
            model: "IC312Y",
            stars: "3 Star Inverter",
            imageUrl: "https://m.media-amazon.com/images/I/51In2t1YlPL._AC_UF1000,1000_QL80_.jpg",
            link: "https://www.amazon.in/Blue-Star-Convertible-Diagnosis-IE312YNU/dp/B0DBLK94GW/ref=sr_1_9?crid=3OBWSFIT45SEW&dib=eyJ2IjoiMSJ9.wQIq5acYz5kfa6QQwTVVJqk3rxJyuyzhqum3Fh28P07l_z-HbTXn0F196qHKMbmyQ4IMXu4X7BHDlIhRfUGp645UFQL_Mh_oVb_aOHaoaQygUTrHHCnpwN0Cx7TxTsQ0Ht3DVAVMbvI6nzis6S-m4nlZgJ5lW7IC1wPPlKiJgvebUTmxxPa_XKNlKNveZeyzZZNvnf_wEP819alj62xlqVxMKqVK3S4swh-SNzGVTdA.Zhq-c-wkegdxo6LL3TK7HIr7jq3LVZh_qrgFer9Vmtk&dib_tag=se&keywords=1%2Bton%2Bac&qid=1761923275&s=kitchen&sprefix=1%2B%2Ckitchen%2C213&sr=1-9&th=1"
        }
    ],
    "1.5 Ton": [
        {
            brand: "Daikin",
            model: "MTKL50U",
            stars: "3 Star Inverter",
            imageUrl: "https://m.media-amazon.com/images/I/61JyEPdw3UL._AC_UF1000,1000_QL80_.jpg",
            link: "https://www.amazon.in/Daikin-Inverter-Display-Technology-MTKL50U/dp/B0BK1KS6ZD/"
        },
        {
            brand: "Lloyd",
            model: "GLS18I3",
            stars: "3 Star 5-in-1 Inverter",
            imageUrl: "https://m.media-amazon.com/images/I/61Toxe1mJ3L._AC_UF1000,1000_QL80_.jpg",
            link: "https://www.amazon.in/Lloyd-Convertible-Corrosion-Anti-Viral-GLS18I3FOSEW/dp/B0D183F48H"
        },
        {
            brand: "LG",
            model: "Q18JNXE",
            stars: "3 Star AI Flexicool",
            imageUrl: "https://m.media-amazon.com/images/I/61JZ82cn8WL._AC_UF1000,1000_QL80_.jpg",
            link: "https://www.amazon.in/LG-Convertible-Anti-Virus-Protection-US-Q18JNXE/dp/B0DQQ4XDBB"
        }
    ],
    "2.0 Ton": [
        {
            brand: "Panasonic",
            model: "CS/CU-NU24YKY",
            stars: "3 Star 7-in-1 Inverter",
            imageUrl: "https://m.media-amazon.com/images/I/51Octe3FHsL._AC_UF1000,1000_QL80_.jpg",
            link: "https://www.amazon.in/Panasonic-Condenser-Convertible-CS-CU-SU24AKY3W/dp/B0DSVT8Y8L"
        },
        {
            brand: "Samsung",
            model: "AR24CY",
            stars: "3 Star Windfree",
            imageUrl: "https://m.media-amazon.com/images/I/518jz8du8UL.jpg",
            link: "https://www.amazon.in/Samsung-Inverter-Powerful-Convertible-AR50F18D1LHNNA/dp/B0DRY6T8B8"
        },
        {
            brand: "LG",
            model: "Q24ENXE",
            stars: "3 Star Dual Inverter",
            imageUrl: "https://m.media-amazon.com/images/I/61JZ82cn8WL._AC_UF1000,1000_QL80_.jpg",
            link: "https://www.amazon.in/LG-Convertible-Anti-Virus-Protection-US-Q24ENXE/dp/B0DRG85QHB"
        }
    ],
    "2.5 Ton": [
        {
            brand: "Daikin",
            model: "FTKL90UV",
            stars: "4 Star Inverter",
            imageUrl: "https://i.imgur.com/gV9Z5tD.png",
            link: "https://m.media-amazon.com/images/I/61GyAk4UAaL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            brand: "Godrej",
            model: "30LINV3R32",
            stars: "3 Star Convertible",
            imageUrl: "https://i.imgur.com/gV9Z5tD.png",
            link: "https://m.media-amazon.com/images/I/51vBb9MKMrL._AC_UF1000,1000_QL80_.jpg"
        }
    ],
    "3.0 Ton": [
        {
            brand: "O General",
            model: "FTL36U",
            stars: "3 Star Fixed Speed",
            imageUrl: "https://m.media-amazon.com/images/I/51nokLrmxVL._AC_UF1000,1000_QL80_.jpg",
            link: "https://www.reliancedigital.in/product/ogeneral-3-ton-5-star-inverter-split-ac-asgg36ceta-coanda-airflow-pm-25-filter6-speed-fan-control-blue-fin-condenser-100-percent-copper-ltwjfr-7537201"
        }
    ],
    "4.0 Ton": [
        {
            brand: "Voltas",
            model: "48CZMM",
            stars: "Cassette Unit (Heavy Duty)",
            imageUrl: "https://m.media-amazon.com/images/I/21mQJUz1-6L._AC_UF350,350_QL50_.jpg",
            link: "https://www.amazon.in/Voltas-Portable-Tower-Copper-48CZMM/dp/B087MRMBRT"
        }
    ],
    "5.0 Ton": [
        {
            brand: "Daikin",
            model: "DRG06",
            stars: "Cassette Unit (Commercial)",
            imageUrl: "https://images-cdn.ubuy.co.in/6793958612292604920119c2-daikin-3-ton-17-seer-115k-btu-commercial.jpg",
            link: "https://www.ubuy.co.in/product/NFB56W2MW-5-ton-16-5-seer-140-000-btu-commercial-gas-package-air-conditioner-208-230-3-60-drg0603dh00001s"
        }
    ]
};


// --- 2. GET HTML ELEMENTS ---
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const sunlightSelect = document.getElementById('sunlight');
const peopleInput = document.getElementById('people');
const calculateBtn = document.getElementById('calculate-btn');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const recommendationsContainer = document.getElementById('recommendations-container');
const recommendationsList = document.getElementById('recommendations-list');


// --- 3. THE MAIN CALCULATION (EXPANDED) ---
calculateBtn.addEventListener('click', () => {
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const sunlightFactor = parseFloat(sunlightSelect.value);
    const people = parseInt(peopleInput.value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Please enter valid room dimensions.");
        return;
    }

    const roomArea = length * width;
    const baseBtu = roomArea * 35; 

    let occupancyAdjustment = 0;
    if (people > 2) {
        occupancyAdjustment = (people - 2) * 600; 
    }

    const totalBtu = (baseBtu * sunlightFactor) + occupancyAdjustment;
    const requiredTons = totalBtu / 12000; 

    let recommendedTons = "";
    if (requiredTons <= 1.0) {
        recommendedTons = "1.0 Ton";
    } else if (requiredTons <= 1.4) {
        recommendedTons = "1.5 Ton";
    } else if (requiredTons <= 1.8) {
        recommendedTons = "2.0 Ton";
    } else if (requiredTons <= 2.2) {
        recommendedTons = "2.5 Ton";
    } else if (requiredTons <= 2.7) {
        recommendedTons = "3.0 Ton";
    } else if (requiredTons <= 3.5) {
        recommendedTons = "4.0 Ton";
    } else if (requiredTons <= 4.5) {
        recommendedTons = "5.0 Ton";
    } else {
        recommendedTons = "More than 5.0 Ton";
    }

    resultText.textContent = recommendedTons;
    resultContainer.classList.remove('hidden');

    displayRecommendations(recommendedTons);
});


// --- 4. THE RECOMMENDATION DISPLAY FUNCTION (UPDATED FOR LINKS) ---
function displayRecommendations(tonnage) {
    recommendationsList.innerHTML = '';
    const models = acRecommendations[tonnage];

    if (models && models.length > 0) {
        models.forEach(model => {
            // --- UPDATED HTML TO BE A CLICKABLE LINK ---
            const cardHTML = `
                <a href="${model.link}" target="_blank" rel="noopener noreferrer" class="recommendation-card-link">
                    <div class="recommendation-card">
                        <img src="${model.imageUrl}" alt="${model.brand} ${model.model}" class="rec-thumbnail">
                        <div class="rec-info">
                            <span class="rec-brand">${model.brand}</span>
                            <span class="rec-model">${model.model}</span>
                            <span class="rec-stars">${model.stars}</span>
                        </div>
                    </div>
                </a>
            `;
            recommendationsList.innerHTML += cardHTML;
        });
        recommendationsContainer.classList.remove('hidden');
    } else {
        recommendationsContainer.classList.add('hidden');
    }
}