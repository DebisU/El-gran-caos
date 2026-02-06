// Datos de jugadores y facciones
const players = {
    "[MTK] Turin": {
        factions: ["Hombres Lagarto", "Altos Elfos", "Grand Cathay"],
        images: {
            "Hombres Lagarto": "assets/PlayerArmies/TurinHombresLagarto.jpg",
            "Altos Elfos": "assets/PlayerArmies/TurinAltosElfos.jpg",
            "Grand Cathay": "assets/PlayerArmies/TurinGrandCathay.jpg"
        }
    },
    "Sufak": {
        factions: ["Imperio", "Elfos Oscuros", "Condes Vampiro"],
        images: {
            "Imperio": "assets/PlayerArmies/SuffakImperio.jpg",
            "Elfos Oscuros": "assets/PlayerArmies/SufakElfosOscuros.jpg",
            "Condes Vampiro": "assets/PlayerArmies/SufakCondesVampiro.jpg"
        }
    },
    "DebisU": {
        factions: ["Silvanos", "Skaven", "Reyes Funerarios"],
        images: {
            "Silvanos": "assets/PlayerArmies/DebisuElfosSilvanos.jpg",
            "Skaven": "assets/PlayerArmies/DebisuSkaven.jpg",
            "Reyes Funerarios": "assets/PlayerArmies/DebisuReyesFunerarios.jpg"
        }
    },
    "Jamewghost098": {
        factions: ["Guerreros del Caos", "Costa del Vampiro", "Pieles Verdes"],
        images: {
            "Guerreros del Caos": "assets/PlayerArmies/Jamewghost098GuerrerosDelCaos.jpg",
            "Costa del Vampiro": "assets/PlayerArmies/Jamewghost098CostaDelVampiro.jpg",
            "Pieles Verdes": "assets/PlayerArmies/Jamewghost098PielesVerdes.jpg"
        }
    },
    "✠GDE✠ Federico": {
        factions: ["Guerreros del Caos", "Ogros", "Imperio"],
        images: {
            "Guerreros del Caos": "assets/PlayerArmies/FedericoGuerrerosDelCaos.jpg",
            "Ogros": "assets/PlayerArmies/FedericoOgros.jpg",
            "Imperio": "assets/PlayerArmies/FedericoImperio.jpg"
        }
    },
    "[NC] Dr Kaiju": {
        factions: ["Slaanesh", "Elfos Oscuros", "Enanos del Caos"],
        images: {
            "Slaanesh": "assets/PlayerArmies/DrKaijuSlaanesh.jpg",
            "Elfos Oscuros": "assets/PlayerArmies/DrKaijuElfosOscuros.jpg",
            "Enanos del Caos": "assets/PlayerArmies/DrKaijuEnanosDelCaos.jpg"
        }
    },
    "Wisly": {
        factions: ["Reyes Funerarios", "Pieles Verdes", "Khorne"],
        images: {
            "Reyes Funerarios": "assets/PlayerArmies/WislyReyesFunerarios.jpg",
            "Pieles Verdes": "assets/PlayerArmies/WislyPielesVerdes.jpg",
            "Khorne": "assets/PlayerArmies/WislyKhorne.jpg"
        }
    },
    "Kaputo": {
        factions: ["Bretonia", "Nurgle", "Enanos"],
        images: {
            "Bretonia": "assets/PlayerArmies/KaputoBretonia.jpg",
            "Nurgle": "assets/PlayerArmies/kaputoNurgle.jpg",
            "Enanos": "assets/PlayerArmies/KaputoEnanos.jpg"
        }
    },
    "Royer": {
        factions: ["Khorne", "Kislev", "Demonios del Caos"],
        images: {
            "Khorne": "assets/PlayerArmies/Rogerkhorne.jpg",
            "Kislev": "assets/PlayerArmies/RoyerKislev.jpg",
            "Demonios del Caos": "assets/PlayerArmies/RoyerChaosDemons.jpg"
        }
    }
};

// Iconos de facciones
const factionIcons = {
    "Hombres Lagarto": "assets/FactionIcons/Lizardmen.webp",
    "Altos Elfos": "assets/FactionIcons/High_Elves.webp",
    "Grand Cathay": "assets/FactionIcons/Grand_Cathay.webp",
    "Imperio": "assets/FactionIcons/Empire.webp",
    "Elfos Oscuros": "assets/FactionIcons/Dark_Elves.webp",
    "Condes Vampiro": "assets/FactionIcons/VampireCounts.webp",
    "Silvanos": "assets/FactionIcons/WoodElves.webp",
    "Skaven": "assets/FactionIcons/Skaven.webp",
    "Reyes Funerarios": "assets/FactionIcons/Tomb_Kings.webp",
    "Guerreros del Caos": "assets/FactionIcons/ChaosWarriors.webp",
    "Costa del Vampiro": "assets/FactionIcons/Vampire_Coast.webp",
    "Pieles Verdes": "assets/FactionIcons/Greenskins.webp",
    "Ogros": "assets/FactionIcons/Ogre_Kingdoms.webp",
    "Slaanesh": "assets/FactionIcons/Slaanesh.webp",
    "Enanos del Caos": "assets/FactionIcons/ChaosDwarfs.webp",
    "Khorne": "assets/FactionIcons/Khorne.webp",
    "Bretonia": "assets/FactionIcons/Bretonia.webp",
    "Nurgle": "assets/FactionIcons/Nurgle.webp",
    "Enanos": "assets/FactionIcons/Dwarfs.webp",
    "Kislev": "assets/FactionIcons/Kislev.webp",
    "Demonios del Caos": "assets/FactionIcons/DaemonsOfChaos.webp"
};

const playerNames = Object.keys(players);

// Crear lista de todas las composiciones disponibles
const allCompositions = [];
playerNames.forEach(player => {
    players[player].factions.forEach(faction => {
        allCompositions.push({
            player: player,
            faction: faction,
            display: `${player} - ${faction}`,
            image: players[player].images[faction],
            icon: factionIcons[faction]
        });
    });
});

// Pre-cargar iconos de facciones
const loadedIcons = {};
Object.keys(factionIcons).forEach(faction => {
    const img = new Image();
    img.src = factionIcons[faction];
    loadedIcons[faction] = img;
});

// Colores para las ruletas
const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
    '#F39C12', '#E74C3C', '#9B59B6', '#3498DB',
    '#1ABC9C', '#E67E22', '#2ECC71', '#34495E',
    '#16A085', '#27AE60', '#2980B9', '#8E44AD',
    '#C0392B', '#D35400', '#7F8C8D', '#BDC3C7'
];

// Variables de estado
let activePlayer1 = null;
let activePlayer2 = null;
let bans1 = [];
let bans2 = [];
let selectedComposition1 = null;
let selectedComposition2 = null;
let isSpinning = false;
let usedCompositions = [];

// Cargar listas usadas del localStorage
function loadUsedCompositions() {
    const stored = localStorage.getItem('usedCompositions');
    if (stored) {
        usedCompositions = JSON.parse(stored);
    }
}

// Guardar listas usadas en localStorage
function saveUsedCompositions() {
    localStorage.setItem('usedCompositions', JSON.stringify(usedCompositions));
}

// Marcar una composición como usada
function markAsUsed(compositionIndex) {
    if (!usedCompositions.includes(compositionIndex)) {
        usedCompositions.push(compositionIndex);
        saveUsedCompositions();
    }
}

// Cargar al iniciar
loadUsedCompositions();

// Elementos del DOM - Jugador 1
const activePlayer1Select = document.getElementById('activePlayer1Select');
const bans1Section = document.getElementById('bans1Section');
const ban1_1 = document.getElementById('ban1_1');
const ban1_2 = document.getElementById('ban1_2');
const ban1_3 = document.getElementById('ban1_3');
const confirmBans1Btn = document.getElementById('confirmBans1Btn');

const army1WheelSection = document.getElementById('army1WheelSection');
const army1Canvas = document.getElementById('army1Wheel');
const army1Ctx = army1Canvas.getContext('2d');
const spinArmy1Btn = document.getElementById('spinArmy1Btn');
const selectedArmy1Div = document.getElementById('selectedArmy1');
const army1Section = document.getElementById('army1Section');

// Elementos del DOM - Jugador 2
const activePlayer2Select = document.getElementById('activePlayer2Select');
const bans2Section = document.getElementById('bans2Section');
const ban2_1 = document.getElementById('ban2_1');
const ban2_2 = document.getElementById('ban2_2');
const ban2_3 = document.getElementById('ban2_3');
const confirmBans2Btn = document.getElementById('confirmBans2Btn');

const army2WheelSection = document.getElementById('army2WheelSection');
const army2Canvas = document.getElementById('army2Wheel');
const army2Ctx = army2Canvas.getContext('2d');
const spinArmy2Btn = document.getElementById('spinArmy2Btn');
const selectedArmy2Div = document.getElementById('selectedArmy2');
const army2Section = document.getElementById('army2Section');

// Botón de nueva partida
const newMatchBtn = document.getElementById('newMatchBtn');
const viewUsedBtn = document.getElementById('viewUsedBtn');
const clearUsedBtn = document.getElementById('clearUsedBtn');
const usedListsModal = document.getElementById('usedListsModal');
const closeModal = document.querySelector('.close-modal');
const usedListsGrid = document.getElementById('usedListsGrid');

// Poblar los selectores de jugadores
playerNames.forEach(player => {
    const option1 = document.createElement('option');
    option1.value = player;
    option1.textContent = player;
    activePlayer1Select.appendChild(option1);
    
    const option2 = document.createElement('option');
    option2.value = player;
    option2.textContent = player;
    activePlayer2Select.appendChild(option2);
});

// Función para poblar selectores de bans
function populateBanSelects(selects) {
    selects.forEach(select => {
        select.innerHTML = '<option value="">Selecciona...</option>';
        allCompositions.forEach((comp, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = comp.display;
            select.appendChild(option);
        });
    });
}

// Función para dibujar la ruleta de composiciones
function drawCompositionsWheel(ctx, compositions, canvas) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;
    const anglePerItem = (2 * Math.PI) / compositions.length;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    compositions.forEach((comp, index) => {
        const startAngle = index * anglePerItem;
        const endAngle = startAngle + anglePerItem;
        
        // Dibujar sector
        ctx.beginPath();
        ctx.fillStyle = colors[index % colors.length];
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fill();
        
        // Dibujar borde
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Dibujar icono y texto
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + anglePerItem / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 4;
        
        // Dibujar icono
        const icon = loadedIcons[comp.faction];
        if (icon && icon.complete && icon.naturalHeight !== 0) {
            const iconSize = 30;
            const iconX = radius * 0.35;
            const iconY = -iconSize / 2;
            ctx.drawImage(icon, iconX, iconY, iconSize, iconSize);
        }
        
        // Dibujar texto (solo nombre del jugador para que no se solape)
        const fontSize = comp.display.length > 25 ? 10 : (comp.display.length > 20 ? 11 : 12);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.fillText(comp.display, radius * 0.68, 0);
        
        ctx.restore();
    });
    
    // Dibujar círculo central
    ctx.beginPath();
    ctx.fillStyle = '#1a1a2e';
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Función para girar la ruleta
function spinWheel(canvas, compositions, callback) {
    if (isSpinning) return;
    
    isSpinning = true;
    const spins = 5 + Math.random() * 5;
    const extraDegrees = Math.random() * 360;
    const totalRotation = spins * 360 + extraDegrees;
    const duration = 3000;
    const startTime = Date.now();
    
    function animate() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentRotation = totalRotation * easeProgress;
        
        const ctx = canvas.getContext('2d');
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((currentRotation * Math.PI) / 180);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        drawCompositionsWheel(ctx, compositions, canvas);
        ctx.restore();
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            const totalRotationNormalized = totalRotation % 360;
            const pointerAngle = 270;
            const finalAngle = (pointerAngle - totalRotationNormalized + 360) % 360;
            const anglePerItem = 360 / compositions.length;
            const selectedIndex = Math.floor(finalAngle / anglePerItem) % compositions.length;
            
            isSpinning = false;
            callback(compositions[selectedIndex]);
        }
    }
    
    animate();
}

// Event listeners - Jugador 1
activePlayer1Select.addEventListener('change', (e) => {
    activePlayer1 = e.target.value;
    if (activePlayer1) {
        bans1Section.classList.remove('hidden');
        populateBanSelects([ban1_1, ban1_2, ban1_3]);
        
        // Mostrar la ruleta con composiciones disponibles (excluyendo usadas y baneadas)
        const allBans = [...bans1, ...bans2].map(b => parseInt(b));
        const availableComps = allCompositions.filter((_, index) => 
            !allBans.includes(index) && !usedCompositions.includes(index)
        );
        army1WheelSection.classList.remove('hidden');
        drawCompositionsWheel(army1Ctx, availableComps, army1Canvas);
        
        army1Section.classList.add('hidden');
        bans1 = [];
        selectedComposition1 = null;
    }
});

confirmBans1Btn.addEventListener('click', () => {
    const ban1 = ban1_1.value;
    const ban2 = ban1_2.value;
    const ban3 = ban1_3.value;
    
    // Los bans son opcionales
    bans1 = [ban1, ban2, ban3].filter(b => b !== '');
    
    // Actualizar la ruleta con las composiciones disponibles
    const allBans = [...bans1, ...bans2].map(b => parseInt(b));
    const availableComps = allCompositions.filter((_, index) => 
        !allBans.includes(index) && !usedCompositions.includes(index)
    );
    
    if (availableComps.length > 0) {
        drawCompositionsWheel(army1Ctx, availableComps, army1Canvas);
    }
});

spinArmy1Btn.addEventListener('click', () => {
    if (isSpinning) return;
    
    spinArmy1Btn.disabled = true;
    selectedArmy1Div.textContent = '';
    
    const allBans = [...bans1, ...bans2].map(b => parseInt(b));
    const availableComps = allCompositions.filter((_, index) => 
        !allBans.includes(index) && !usedCompositions.includes(index)
    );
    
    spinWheel(army1Canvas, availableComps, (result) => {
        selectedComposition1 = result;
        selectedArmy1Div.textContent = `${result.display}`;
        spinArmy1Btn.disabled = false;
        
        // Marcar como usada
        const originalIndex = allCompositions.findIndex(c => 
            c.player === result.player && c.faction === result.faction
        );
        if (originalIndex !== -1) {
            markAsUsed(originalIndex);
        }
        
        setTimeout(() => {
            army1Section.classList.remove('hidden');
            document.getElementById('army1ActivePlayer').textContent = activePlayer1;
            document.getElementById('army1Composition').textContent = result.display;
            document.getElementById('army1Image').src = result.image;
            document.getElementById('army1Image').alt = result.display;
            document.getElementById('army1Link').href = result.image;
        }, 1000);
    });
});

// Event listeners - Jugador 2
activePlayer2Select.addEventListener('change', (e) => {
    activePlayer2 = e.target.value;
    if (activePlayer2) {
        bans2Section.classList.remove('hidden');
        populateBanSelects([ban2_1, ban2_2, ban2_3]);
        
        // Mostrar la ruleta con composiciones disponibles (excluyendo usadas y baneadas)
        const allBans = [...bans1, ...bans2].map(b => parseInt(b));
        const availableComps = allCompositions.filter((_, index) => 
            !allBans.includes(index) && !usedCompositions.includes(index)
        );
        army2WheelSection.classList.remove('hidden');
        drawCompositionsWheel(army2Ctx, availableComps, army2Canvas);
        
        army2Section.classList.add('hidden');
        bans2 = [];
        selectedComposition2 = null;
    }
});

confirmBans2Btn.addEventListener('click', () => {
    const ban1 = ban2_1.value;
    const ban2 = ban2_2.value;
    const ban3 = ban2_3.value;
    
    // Los bans son opcionales
    bans2 = [ban1, ban2, ban3].filter(b => b !== '');
    
    // Actualizar la ruleta con las composiciones disponibles
    const allBans = [...bans1, ...bans2].map(b => parseInt(b));
    const availableComps = allCompositions.filter((_, index) => 
        !allBans.includes(index) && !usedCompositions.includes(index)
    );
    
    if (availableComps.length > 0) {
        drawCompositionsWheel(army2Ctx, availableComps, army2Canvas);
    }
});

spinArmy2Btn.addEventListener('click', () => {
    if (isSpinning) return;
    
    spinArmy2Btn.disabled = true;
    selectedArmy2Div.textContent = '';
    
    const allBans = [...bans1, ...bans2].map(b => parseInt(b));
    const availableComps = allCompositions.filter((_, index) => 
        !allBans.includes(index) && !usedCompositions.includes(index)
    );
    
    spinWheel(army2Canvas, availableComps, (result) => {
        selectedComposition2 = result;
        selectedArmy2Div.textContent = `${result.display}`;
        spinArmy2Btn.disabled = false;
        
        // Marcar como usada
        const originalIndex = allCompositions.findIndex(comp => 
            comp.player === result.player && comp.faction === result.faction
        );
        if (originalIndex !== -1) {
            markAsUsed(originalIndex);
        }
        
        setTimeout(() => {
            army2Section.classList.remove('hidden');
            document.getElementById('army2ActivePlayer').textContent = activePlayer2;
            document.getElementById('army2Composition').textContent = result.display;
            document.getElementById('army2Image').src = result.image;
            document.getElementById('army2Image').alt = result.display;
            document.getElementById('army2Link').href = result.image;
        }, 1000);
    });
});

// Botón de nueva partida
newMatchBtn.addEventListener('click', () => {
    activePlayer1Select.value = '';
    activePlayer2Select.value = '';
    activePlayer1 = null;
    activePlayer2 = null;
    bans1 = [];
    bans2 = [];
    selectedComposition1 = null;
    selectedComposition2 = null;
    
    bans1Section.classList.add('hidden');
    army1WheelSection.classList.add('hidden');
    army1Section.classList.add('hidden');
    bans2Section.classList.add('hidden');
    army2WheelSection.classList.add('hidden');
    army2Section.classList.add('hidden');
    
    ban1_1.value = '';
    ban1_2.value = '';
    ban1_3.value = '';
    ban2_1.value = '';
    ban2_2.value = '';
    ban2_3.value = '';
    
    selectedArmy1Div.textContent = '';
    selectedArmy2Div.textContent = '';
    
    spinArmy1Btn.disabled = false;
    spinArmy2Btn.disabled = false;
});

// Modal de listas usadas
viewUsedBtn.addEventListener('click', () => {
    renderUsedCompositions();
    usedListsModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    usedListsModal.classList.remove('active');
});

usedListsModal.addEventListener('click', (e) => {
    if (e.target === usedListsModal) {
        usedListsModal.classList.remove('active');
    }
});

clearUsedBtn.addEventListener('click', () => {
    if (confirm('¿Marcar todas las listas como disponibles?')) {
        usedCompositions = [];
        saveUsedCompositions();
        renderUsedCompositions();
        updateCurrentWheels();
    }
});

function renderUsedCompositions() {
    usedListsGrid.innerHTML = '';
    
    // Mostrar TODAS las composiciones (invertimos la lógica: check = disponible)
    allCompositions.forEach((comp, index) => {
        const isAvailable = !usedCompositions.includes(index);
        
        const item = document.createElement('div');
        item.className = 'used-list-item';
        if (isAvailable) {
            item.classList.add('marked-available');
        }
        
        const iconImg = document.createElement('img');
        iconImg.src = comp.icon;
        iconImg.alt = comp.faction;
        iconImg.style.width = '40px';
        iconImg.style.height = '40px';
        iconImg.style.objectFit = 'contain';
        
        const info = document.createElement('div');
        info.style.flex = '1';
        info.innerHTML = `<strong>${comp.player}</strong><br>${comp.faction}`;
        
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-used-btn';
        toggleBtn.innerHTML = isAvailable ? '✓' : '';
        toggleBtn.title = isAvailable ? 'Click para retirar' : 'Click para hacer disponible';
        toggleBtn.onclick = () => {
            if (usedCompositions.includes(index)) {
                // Está retirada, la hacemos disponible
                usedCompositions = usedCompositions.filter(idx => idx !== index);
            } else {
                // Está disponible, la retiramos
                usedCompositions.push(index);
            }
            saveUsedCompositions();
            renderUsedCompositions();
            updateCurrentWheels();
        };
        
        item.appendChild(iconImg);
        item.appendChild(info);
        item.appendChild(toggleBtn);
        
        usedListsGrid.appendChild(item);
    });
}

function updateCurrentWheels() {
    // Actualizar ruleta del jugador 1 si está activa
    if (activePlayer1 && !army1WheelSection.classList.contains('hidden')) {
        const allBans = [...bans1, ...bans2].map(b => parseInt(b));
        const availableComps = allCompositions.filter((_, index) => 
            !allBans.includes(index) && !usedCompositions.includes(index)
        );
        if (availableComps.length > 0) {
            drawCompositionsWheel(army1Ctx, availableComps, army1Canvas);
        }
    }
    
    // Actualizar ruleta del jugador 2 si está activa
    if (activePlayer2 && !army2WheelSection.classList.contains('hidden')) {
        const allBans = [...bans1, ...bans2].map(b => parseInt(b));
        const availableComps = allCompositions.filter((_, index) => 
            !allBans.includes(index) && !usedCompositions.includes(index)
        );
        if (availableComps.length > 0) {
            drawCompositionsWheel(army2Ctx, availableComps, army2Canvas);
        }
    }
}

// Función para detectar clic en la ruleta y abrir la imagen
function handleWheelClick(canvas, compositions, event) {
    if (isSpinning) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Calcular distancia desde el centro
    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = canvas.width / 2 - 20;
    
    // Solo procesar clics dentro del círculo (excluyendo el centro)
    if (distance < 30 || distance > radius) return;
    
    // Calcular ángulo del clic (atan2 devuelve ángulo desde el eje X positivo)
    let angle = Math.atan2(dy, dx);
    
    // Normalizar a rango [0, 2π]
    if (angle < 0) angle += 2 * Math.PI;
    
    // Calcular en qué sector se hizo clic
    // Los sectores empiezan en ángulo 0 (derecha) y van en sentido horario
    const anglePerItem = (2 * Math.PI) / compositions.length;
    const clickedIndex = Math.floor(angle / anglePerItem) % compositions.length;
    const clickedComposition = compositions[clickedIndex];
    
    // Abrir la imagen correspondiente
    if (clickedComposition && clickedComposition.image) {
        window.open(clickedComposition.image, '_blank');
    }
}

// Agregar event listeners de clic a las ruletas de composiciones
army1Canvas.addEventListener('click', (event) => {
    if (activePlayer1 && !army1WheelSection.classList.contains('hidden')) {
        const allBans = [...bans1, ...bans2].map(b => parseInt(b));
        const availableComps = allCompositions.filter((_, index) => 
            !allBans.includes(index) && !usedCompositions.includes(index)
        );
        handleWheelClick(army1Canvas, availableComps, event);
    }
});

army2Canvas.addEventListener('click', (event) => {
    if (activePlayer2 && !army2WheelSection.classList.contains('hidden')) {
        const allBans = [...bans1, ...bans2].map(b => parseInt(b));
        const availableComps = allCompositions.filter((_, index) => 
            !allBans.includes(index) && !usedCompositions.includes(index)
        );
        handleWheelClick(army2Canvas, availableComps, event);
    }
});

// Cambiar cursor a pointer cuando está sobre las ruletas
army1Canvas.style.cursor = 'pointer';
army2Canvas.style.cursor = 'pointer';
