// ========== Ås?ìIñºéöÅt?äi‡|â‘ù¡â  - ?âªî≈ ==========

// èjïü?óÒï\ - égóp??ìIâpï∂ÅCçXïÑçáÅs?ìIñºéöÅt?äi
const wishes = [
    'Happy Birthday',
    'Make a Wish',
    'Forever Young',
    'Dream Big',
    'Stay Magical',
    'Shine Bright'
];

// èâénâª
document.addEventListener('DOMContentLoaded', function() {
    // ?óù?én?ñ êÿ?
    handleStartScreen();
});

// ========== ?én?ñ êÿ??óù ==========
function handleStartScreen() {
    const startScreen = document.getElementById('startScreen');
    const mainBirthday = document.getElementById('mainBirthday');
    const startButton = document.getElementById('startButton');
    const countdownContainer = document.getElementById('countdownContainer');
    const countdownNumber = document.getElementById('countdownNumber');
    const countdownBlessing = document.getElementById('countdownBlessing');
    
    if (startButton && countdownContainer) {
        // ì_??énà¬?
        startButton.addEventListener('click', function() {
            console.log('ì_??énà¬?');
            
            // ?ÂUà¬?ÅC?é¶ì|??
            startButton.style.display = 'none';
            countdownContainer.style.display = 'block';
            
            // ?énì|??
            startCountdown();
        });
        
        function startCountdown() {
            let countdown = 5;
            
            // ì|??îüêî
            const countdownInterval = setInterval(() => {
                countdown--;
                countdownNumber.textContent = countdown;
                
                // ìñì|??ìû2ïb?ÅC?é¶èjïüï∂éö
                if (countdown === 2 && countdownBlessing) {
                    countdownBlessing.classList.add('show');
                }
                
                // ìñì|??ìû0?
                if (countdown === 0) {
                    clearInterval(countdownInterval);
                    
                    // ìYâ¡íWèo?âÊ
                    startScreen.classList.add('fade-out');
                    
                    // ìôë“íWèo?âÊäÆê¨ç@?é¶éÂ?ñ 
                    setTimeout(() => {
                        startScreen.style.display = 'none';
                        mainBirthday.style.display = 'block';
                        
                        // èâénâªéÂ?ñ å˜î\
                        initMainPage();
                    }, 800);
                }
            }, 1000); // ?ïbçXêVàÍéü
        }
    } else {
        // î@â ñvóL?énà¬?ÅCíºê⁄èâénâªéÂ?ñ 
        console.log('ñvóLùQìû?énà¬?ÅCíºê⁄èâénâªéÂ?ñ ');
        initMainPage();
    }
}

// èâénâªéÂ?ñ èäóLå˜î\
function initMainPage() {
    initYourNameFireworks();
    initMusicPlayer();
    startAutoWishes();
    autoTriggerFireworks();
    createFloatingParticles();
    initCandleToggle(); // ìYâ¡??åå›
    initLoveLetter(); // ìYâ¡èÓ?åå›
}

// ========== Ås?ìIñºéöÅt?äi‡|â‘ - çXëΩ?êF ==========
function initYourNameFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    const particles = [];
    // ˙ùâ¡çXëΩ?êFÅCïÔäá?êFÅAéáêFÅAê¬êF
    const colors = [
        '#6495ED', // ñÓ?ãe?
        '#4169E1', // ïÛêŒ?
        '#1E90FF', // ìπäÔ?
        '#00BFFF', // ê[ìV?
        '#87CEEB', // ìV?êF
        '#FFB6C1', // êÛï≤êF
        '#FF69B4', // ?ï≤êF
        '#FFA07A', // êÛ??êF
        '#FF6347', // î‘â÷?
        '#FFD700', // ã‡êF
        '#98D8C8', // ê¬êF
        '#00CED1', // ê[?èºêŒ
        '#DDA0DD', // î~?êF
        '#BA55D3', // íÜ?â‘éá
        '#9370DB', // íÜéáêF
        '#F0E68C', // ?ë¥êF
        '#FAFAD2'  // êÛã‡ãeâ©
    ];
    
    // Ås?ìIñºéöÅt‡|â‘ó±éq - ó¨êØèÛ
    class MeteorParticle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            
            // êèä˜äpìxòaë¨ìxÅiå¸äOéU?Åj
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 3;
            
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed - 2; // å¸è„ïŒà⁄
            
            this.alpha = 1;
            this.color = color;
            this.size = Math.random() * 3 + 2;
            this.trail = [];
            this.life = 100;
            
            // îˆÁë?ìx
            this.trailLength = Math.floor(Math.random() * 15 + 10);
        }
        
        update() {
            // ??îˆÁë
            this.trail.push({
                x: this.x,
                y: this.y,
                alpha: this.alpha
            });
            
            if (this.trail.length > this.trailLength) {
                this.trail.shift();
            }
            
            // çXêVà íu
            this.x += this.vx;
            this.y += this.vy;
            
            // èdóÕòaãÛüÉëjóÕ
            this.vy += 0.08;
            this.vx *= 0.99;
            this.vy *= 0.99;
            
            // ??è¡é∏
            this.alpha -= 0.008;
            this.life--;
        }
        
        draw() {
            // ?êßó¨êØîˆÁë
            this.trail.forEach((point, index) => {
                const trailAlpha = (index / this.trail.length) * point.alpha * 0.6;
                const trailSize = this.size * (index / this.trail.length) * 0.8;
                
                ctx.save();
                ctx.globalAlpha = trailAlpha;
                
                // îˆÁë??
                const gradient = ctx.createRadialGradient(
                    point.x, point.y, 0,
                    point.x, point.y, trailSize
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
            
            // ?êßéÂó±éqÅi?åıÅj
            ctx.save();
            ctx.globalAlpha = this.alpha;
            
            // äO?åı
            ctx.shadowBlur = 20;
            ctx.shadowColor = this.color;
            
            // éÂó±éq
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size
            );
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(0.3, this.color);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        }
        
        isDead() {
            return this.alpha <= 0 || this.life <= 0;
        }
    }
    
    // ?åöÅs?ìIñºéöÅt?äi‡|â‘
    function createYourNameFirework(x, y) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const particleCount = Math.floor(Math.random() * 30) + 40; // 40-70ò¢ó±éq
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new MeteorParticle(x, y, color));
        }
    }
    
    // ?âÊèz?
    function animate() {
        // égópìßñæê¥èúÅC?CSSîwåiâ¬?
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // çXêVòa?êßèäóLó±éq
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            
            if (particles[i].isDead()) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // ì_??åö‡|â‘
    canvas.addEventListener('click', function(e) {
        createYourNameFirework(e.clientX, e.clientY);
    });
    
    // ñ\òIîüêîãüäOïî?óp
    window.createYourNameFirework = createYourNameFirework;
}

// ========== é©?êG?‡|â‘ - ëSõ†‰ó? ==========
function autoTriggerFireworks() {
    setInterval(() => {
        // ç›êÆò¢õ†ñã‰ó?ì‡êèä˜à íu
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7); // è„70%ãÊàÊ
        
        if (window.createYourNameFirework) {
            window.createYourNameFirework(x, y);
        }
    }, 1500); // ?1.5ïbàÍéü
    
    // èâén??ô{éüÅiï™éUç›ïsìØà íuÅj
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const x = (Math.random() * 0.8 + 0.1) * window.innerWidth; // 10%-90%ãÊàÊ
            const y = Math.random() * (window.innerHeight * 0.6);
            if (window.createYourNameFirework) {
                window.createYourNameFirework(x, y);
            }
        }, i * 400);
    }
}

// ========== ?ïÇìIç êFåıì_ ==========
function createFloatingParticles() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    const floatingParticles = [];
    const colors = ['#6495ED', '#FFB6C1', '#98D8C8', '#DDA0DD', '#FFD700'];
    
    class FloatingParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 20;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = -(Math.random() * 0.5 + 0.3);
            this.size = Math.random() * 2 + 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.5 + 0.3;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.y < -20) {
                this.y = canvas.height + 20;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    // ?åö50ò¢?ïÇåıì_
    for (let i = 0; i < 50; i++) {
        floatingParticles.push(new FloatingParticle());
    }
    
    function animateFloating() {
        floatingParticles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animateFloating);
    }
    
    animateFloating();
}

// ========== èjïü??èo ==========
function createFloatingWish() {
    const wishesContainer = document.getElementById('floatingWishes');
    const wish = document.createElement('div');
    wish.className = 'wish';
    
    // êèä˜??èjïü?
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    wish.textContent = randomWish;
    
    // êèä˜à íuÅiç∂âEïŒà⁄Åj
    const leftPosition = 20 + Math.random() * 60; // 20%-80%îV?
    wish.style.left = leftPosition + '%';
    
    wishesContainer.appendChild(wish);
    
    // ?âÊ?ë©ç@à⁄èú
    setTimeout(() => {
        wish.remove();
    }, 6000);
}

function startAutoWishes() {
    // óßë¶?é¶àÍè
    setTimeout(() => {
        createFloatingWish();
    }, 3000);
    
    // íËä˙?é¶
    setInterval(() => {
        if (Math.random() > 0.4) {
            createFloatingWish();
        }
    }, 8000);
}

// ========== âπ?îdï˙äÌ ==========
function initMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');
    const audio = document.getElementById('birthdayMusic');
    
    let isPlaying = false;
    
    // ??é©?îdï˙âπ?
    const tryAutoPlay = () => {
        console.log('??é©?îdï˙âπ?...');
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('âπ?é©?îdï˙ê¨å˜ÅI');
                isPlaying = true;
                musicIcon.textContent = '\u266B'; // ?
                musicText.textContent = 'Pause Music';
                musicToggle.classList.add('playing');
            }).catch((error) => {
                console.log('é©?îdï˙îÌ??äÌëjé~:', error);
                console.log('?ì_?à¬?îdï˙âπ?');
                // é©?îdï˙é∏?ÅC?é¶îdï˙à¬?
                isPlaying = false;
                musicIcon.textContent = '\u266A'; // ÅÙ
                musicText.textContent = 'Play Music';
                musicToggle.classList.remove('playing');
                // ìYâ¡íÒé¶?âÊ
                musicToggle.style.animation = 'button-pulse 2s ease-in-out infinite';
            });
        }
    };
    
    // âÑ???é©?îdï˙
    setTimeout(tryAutoPlay, 500);
    
    // ì_?à¬?êÿ?îdï˙èÛ?
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            musicIcon.textContent = '\u266A'; // ÅÙ
            musicText.textContent = 'Play Music';
            musicToggle.classList.remove('playing');
            musicToggle.style.animation = '';
            isPlaying = false;
        } else {
            audio.play().then(() => {
                musicIcon.textContent = '\u266B'; // ?
                musicText.textContent = 'Pause Music';
                musicToggle.classList.add('playing');
                musicToggle.style.animation = '';
                isPlaying = true;
            }).catch((error) => {
                console.log('îdï˙é∏?:', error);
            });
        }
    });
    
    // âπ?â¡????óù
    audio.addEventListener('error', function(e) {
        console.log('âπ?ï∂åèâ¡?é∏?:', e);
        musicToggle.style.opacity = '0.5';
        musicText.textContent = 'Music Unavailable';
    });
    
    // âπ?â¡?ê¨å˜
    audio.addEventListener('loadeddata', function() {
        console.log('âπ?ï∂åèâ¡?ê¨å˜');
    });
}

// ========== ??åå›å˜î\ ==========
function initCandleToggle() {
    const candles = document.querySelectorAll('.number-candle');
    let allLit = true; // èäóL??ìIèÛ?Åièâén?ì_ó∫Åj
    
    // ?èäóL??ìYâ¡ì_?éñåè
    candles.forEach(candle => {
        candle.addEventListener('click', function(e) {
            e.stopPropagation(); // ëjé~éñåèñ`ñAìû‡|â‘âÊïz
            
            if (allLit) {
                // ‡è?èäóL??
                candles.forEach(c => c.classList.add('extinguished'));
                allLit = false;
            } else {
                // ì_ó∫èäóL??
                candles.forEach(c => c.classList.remove('extinguished'));
                allLit = true;
            }
        });
        
        // ìYâ¡ël??í‚ù¡â 
        candle.style.cursor = 'pointer';
    });
}

// ========== èÓ?åå›å˜î\ ==========
function initLoveLetter() {
    const letterLink = document.getElementById('letterLink');
    const letterModal = document.getElementById('letterModal');
    const letterClose = document.getElementById('letterClose');
    const letterOverlay = document.getElementById('letterOverlay');
    const loveLetterMusic = document.getElementById('loveLetterMusic');
    const birthdayMusic = document.getElementById('birthdayMusic');
    let meteorTimer = null;

    if (!letterLink || !letterModal) {
        console.log('èÓ?å≥ëfñ¢ùQìû');
        return;
    }

    // ê∂ê¨ó∫èªèªêØêØó¨êØ
    function createLetterMeteorStar() {
        const paper = letterModal.querySelector('.letter-paper');
        if (!paper) return;
        const meteor = document.createElement('div');
        meteor.className = 'meteor-star';
        meteor.innerText = 'Åö';
        // êèä˜â°å¸à íuÅiêM??ìxì‡Åj
        const left = Math.random() * (paper.clientWidth - 30) + 5;
        meteor.style.left = left + 'px';
        // êèä˜ëÂè¨
        const size = (Math.random() * 0.7 + 1.2).toFixed(2);
        meteor.style.fontSize = size + 'rem';
        paper.appendChild(meteor);
        setTimeout(() => { meteor.remove(); }, 1400);
    }

    // ë≈??‚x
    letterLink.addEventListener('click', function(e) {
        e.preventDefault();
        letterModal.style.display = 'block';

        // í‚é~ê∂ì˙âı?âÃ
        if (birthdayMusic && !birthdayMusic.paused) {
            birthdayMusic.pause();
            birthdayMusic.currentTime = 0;
        }
        // îdï˙èÓ??ëÆâπ?Åièz?Åj
        if (loveLetterMusic) {
            loveLetterMusic.loop = true; // èz?îdï˙
            loveLetterMusic.currentTime = 0;
            loveLetterMusic.play().catch(function(err) {
                console.log('èÓ?âπ?îdï˙é∏?:', err);
            });
        }
        // ‡|â‘
        if (window.createYourNameFirework) {
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * (window.innerHeight * 0.6);
                    window.createYourNameFirework(x, y);
                }, i * 150);
            }
        }
        // ?éníË?ê∂ê¨ó∫èªèªêØêØó¨êØ
        meteorTimer = setInterval(() => {
            if (Math.random() > 0.5) createLetterMeteorStar();
        }, 1200);
    });

    // ???‚x
    function closeLetter() {
        letterModal.style.display = 'none';
        if (loveLetterMusic && !loveLetterMusic.paused) {
            loveLetterMusic.pause();
            loveLetterMusic.currentTime = 0;
        }
        // í‚é~ó¨êØ
        if (meteorTimer) {
            clearInterval(meteorTimer);
            meteorTimer = null;
        }
    }
    if (letterClose) letterClose.addEventListener('click', closeLetter);
    if (letterOverlay) letterOverlay.addEventListener('click', closeLetter);
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && letterModal.style.display === 'block') {
            closeLetter();
        }
    });
}
