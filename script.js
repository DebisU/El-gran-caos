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
    "✠GDE✠ Federico \"El emperador\"": {
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
    "Enanos": "assets/FactionIcons/Dwarfs.webp"
};

const playerNames = Object.keys(players);

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
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'
];

// Variables de estado
let activePlayer1 = null;
let activePlayer2 = null;
let armyOwner1 = null;
let armyOwner2 = null;
let faction1 = null;
let faction2 = null;
let isSpinning = false;

// Elementos del DOM - Jugador 1
const activePlayer1Select = document.getElementById('activePlayer1Select');
const armyOwner1Section = document.getElementById('armyOwner1Section');
const armyOwner1Canvas = document.getElementById('armyOwner1Wheel');
const armyOwner1Ctx = armyOwner1Canvas.getContext('2d');
const spinArmyOwner1Btn = document.getElementById('spinArmyOwner1Btn');
const selectedArmyOwner1Div = document.getElementById('selectedArmyOwner1');

const faction1Section = document.getElementById('faction1Section');
const faction1Canvas = document.getElementById('faction1Wheel');
const faction1Ctx = faction1Canvas.getContext('2d');
const spinFaction1Btn = document.getElementById('spinFaction1Btn');
const selectedFaction1Div = document.getElementById('selectedFaction1');

const army1Section = document.getElementById('army1Section');

// Elementos del DOM - Jugador 2
const activePlayer2Select = document.getElementById('activePlayer2Select');
const armyOwner2Section = document.getElementById('armyOwner2Section');
const armyOwner2Canvas = document.getElementById('armyOwner2Wheel');
const armyOwner2Ctx = armyOwner2Canvas.getContext('2d');
const spinArmyOwner2Btn = document.getElementById('spinArmyOwner2Btn');
const selectedArmyOwner2Div = document.getElementById('selectedArmyOwner2');

const faction2Section = document.getElementById('faction2Section');
const faction2Canvas = document.getElementById('faction2Wheel');
const faction2Ctx = faction2Canvas.getContext('2d');
const spinFaction2Btn = document.getElementById('spinFaction2Btn');
const selectedFaction2Div = document.getElementById('selectedFaction2');

const army2Section = document.getElementById('army2Section');

// Botón de nueva partida
const newMatchBtn = document.getElementById('newMatchBtn');

// Poblar los selectores
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

// Función para dibujar la ruleta
function drawWheel(ctx, items, canvas, showIcons = false) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;
    const anglePerItem = (2 * Math.PI) / items.length;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    items.forEach((item, index) => {
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
        
        // Dibujar texto e icono si aplica
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + anglePerItem / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 4;
        
        if (showIcons && loadedIcons[item]) {
            // Calcular tamaño de fuente según longitud del texto
            const textLength = item.length;
            const fontSize = textLength > 15 ? 11 : (textLength > 12 ? 13 : 15);
            ctx.font = `bold ${fontSize}px Arial`;
            
            // Dibujar icono pre-cargado
            const icon = loadedIcons[item];
            const iconSize = 35;
            const iconX = radius * 0.4;
            const iconY = -iconSize / 2;
            
            if (icon.complete && icon.naturalHeight !== 0) {
                ctx.drawImage(icon, iconX, iconY, iconSize, iconSize);
            }
            
            // Texto más a la derecha del icono con más separación
            const textX = textLength > 15 ? radius * 0.77 : (textLength > 12 ? radius * 0.74 : radius * 0.72);
            ctx.fillText(item, textX, 5);
        } else {
            // Sin iconos, centrar el texto
            ctx.font = 'bold 16px Arial';
            ctx.fillText(item, radius * 0.65, 0);
        }
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
function spinWheel(canvas, items, callback, showIcons = false) {
    if (isSpinning) return;
    
    isSpinning = true;
    const spins = 5 + Math.random() * 5; // 5-10 vueltas
    const extraDegrees = Math.random() * 360;
    const totalRotation = spins * 360 + extraDegrees;
    const duration = 3000; // 3 segundos
    const startTime = Date.now();
    
    function animate() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentRotation = totalRotation * easeProgress;
        
        const ctx = canvas.getContext('2d');
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((currentRotation * Math.PI) / 180);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);
        drawWheel(ctx, items, canvas, showIcons);
        ctx.restore();
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // Calcular el ítem seleccionado
            // La flecha apunta arriba (270 grados en coordenadas canvas)
            // Necesitamos calcular qué segmento está en esa posición después de la rotación
            const totalRotationNormalized = totalRotation % 360;
            const pointerAngle = 270; // La flecha apunta arriba
            const finalAngle = (pointerAngle - totalRotationNormalized + 360) % 360;
            const anglePerItem = 360 / items.length;
            const selectedIndex = Math.floor(finalAngle / anglePerItem) % items.length;
            
            isSpinning = false;
            callback(items[selectedIndex]);
        }
    }
    
    animate();
}

// Event listeners - Jugador 1
activePlayer1Select.addEventListener('change', (e) => {
    activePlayer1 = e.target.value;
    if (activePlayer1) {
        armyOwner1Section.classList.remove('hidden');
        drawWheel(armyOwner1Ctx, playerNames, armyOwner1Canvas);
        faction1Section.classList.add('hidden');
        army1Section.classList.add('hidden');
        armyOwner1 = null;
        faction1 = null;
        selectedArmyOwner1Div.textContent = '';
        selectedFaction1Div.textContent = '';
    }
});

spinArmyOwner1Btn.addEventListener('click', () => {
    if (isSpinning) return;
    
    spinArmyOwner1Btn.disabled = true;
    selectedArmyOwner1Div.textContent = '';
    
    spinWheel(armyOwner1Canvas, playerNames, (result) => {
        armyOwner1 = result;
        selectedArmyOwner1Div.textContent = `Propietario: ${result}`;
        spinArmyOwner1Btn.disabled = false;
        
        setTimeout(() => {
            faction1Section.classList.remove('hidden');
            drawWheel(faction1Ctx, players[armyOwner1].factions, faction1Canvas, true);
        }, 1000);
    });
});

spinFaction1Btn.addEventListener('click', () => {
    if (isSpinning || !armyOwner1) return;
    
    spinFaction1Btn.disabled = true;
    selectedFaction1Div.textContent = '';
    
    spinWheel(faction1Canvas, players[armyOwner1].factions, (result) => {
        faction1 = result;
        selectedFaction1Div.textContent = `Facción: ${result}`;
        spinFaction1Btn.disabled = false;
        
        setTimeout(() => {
            army1Section.classList.remove('hidden');
            document.getElementById('army1ActivePlayer').textContent = activePlayer1;
            document.getElementById('army1Owner').textContent = `${armyOwner1} - ${faction1}`;
            
            const imageSrc = players[armyOwner1].images[faction1];
            document.getElementById('army1Image').src = imageSrc;
            document.getElementById('army1Image').alt = `${armyOwner1} - ${faction1}`;
            document.getElementById('army1Link').href = imageSrc;
        }, 1000);
    }, true);
});

// Event listeners - Jugador 2
activePlayer2Select.addEventListener('change', (e) => {
    activePlayer2 = e.target.value;
    if (activePlayer2) {
        armyOwner2Section.classList.remove('hidden');
        drawWheel(armyOwner2Ctx, playerNames, armyOwner2Canvas);
        faction2Section.classList.add('hidden');
        army2Section.classList.add('hidden');
        armyOwner2 = null;
        faction2 = null;
        selectedArmyOwner2Div.textContent = '';
        selectedFaction2Div.textContent = '';
    }
});

spinArmyOwner2Btn.addEventListener('click', () => {
    if (isSpinning) return;
    
    spinArmyOwner2Btn.disabled = true;
    selectedArmyOwner2Div.textContent = '';
    
    spinWheel(armyOwner2Canvas, playerNames, (result) => {
        armyOwner2 = result;
        selectedArmyOwner2Div.textContent = `Propietario: ${result}`;
        spinArmyOwner2Btn.disabled = false;
        
        setTimeout(() => {
            faction2Section.classList.remove('hidden');
            drawWheel(faction2Ctx, players[armyOwner2].factions, faction2Canvas, true);
        }, 1000);
    });
});

spinFaction2Btn.addEventListener('click', () => {
    if (isSpinning || !armyOwner2) return;
    
    spinFaction2Btn.disabled = true;
    selectedFaction2Div.textContent = '';
    
    spinWheel(faction2Canvas, players[armyOwner2].factions, (result) => {
        faction2 = result;
        selectedFaction2Div.textContent = `Facción: ${result}`;
        spinFaction2Btn.disabled = false;
        
        setTimeout(() => {
            army2Section.classList.remove('hidden');
            document.getElementById('army2ActivePlayer').textContent = activePlayer2;
            document.getElementById('army2Owner').textContent = `${armyOwner2} - ${faction2}`;
            
            const imageSrc = players[armyOwner2].images[faction2];
            document.getElementById('army2Image').src = imageSrc;
            document.getElementById('army2Image').alt = `${armyOwner2} - ${faction2}`;
            document.getElementById('army2Link').href = imageSrc;
        }, 1000);
    }, true);
});

// Botón de nueva partida
newMatchBtn.addEventListener('click', () => {
    // Resetear todo
    activePlayer1Select.value = '';
    activePlayer2Select.value = '';
    activePlayer1 = null;
    activePlayer2 = null;
    armyOwner1 = null;
    armyOwner2 = null;
    faction1 = null;
    faction2 = null;
    
    armyOwner1Section.classList.add('hidden');
    faction1Section.classList.add('hidden');
    army1Section.classList.add('hidden');
    armyOwner2Section.classList.add('hidden');
    faction2Section.classList.add('hidden');
    army2Section.classList.add('hidden');
    
    selectedArmyOwner1Div.textContent = '';
    selectedFaction1Div.textContent = '';
    selectedArmyOwner2Div.textContent = '';
    selectedFaction2Div.textContent = '';
    
    spinArmyOwner1Btn.disabled = false;
    spinFaction1Btn.disabled = false;
    spinArmyOwner2Btn.disabled = false;
    spinFaction2Btn.disabled = false;
});
