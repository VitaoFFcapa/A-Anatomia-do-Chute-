
"use strict";

/* =====================================
   MENU RESPONSIVO
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
    function closeMenu() {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    document.addEventListener("click", event => {
        const clickedInsideMenu = navigation.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }
    });
}

/* =====================================
   FASES DO CHUTE
===================================== */

const phases = [
    {
        title: "Preparação",
        description:
            "O jogador organiza sua postura e posiciona o corpo para iniciar o movimento.",
        action:
            "O corpo busca equilíbrio. A perna de apoio começa a ser posicionada e o jogador prepara a aproximação.",
        structures:
            "Músculos do tronco, quadril e membros inferiores.",
        tags: ["Equilíbrio", "Postura", "Coordenação"]
    },
    {
        title: "Aproximação",
        description:
            "O jogador se desloca em direção à bola, ajustando a velocidade e a posição do corpo.",
        action:
            "Os passos de aproximação ajudam a organizar a distância e o ângulo de chegada à bola. A perna de apoio se prepara para o contato com o solo.",
        structures:
            "Músculos dos membros inferiores, quadril e tronco.",
        tags: ["Deslocamento", "Apoio", "Coordenação"]
    },
    {
        title: "Balanço da perna",
        description:
            "A perna que realizará o chute é movimentada para trás e depois acelerada em direção à bola.",
        action:
            "O quadril participa do movimento da coxa e o joelho se movimenta para preparar o contato. A perna de apoio contribui para a estabilidade.",
        structures:
            "Glúteo máximo, iliopsoas, quadríceps e músculos estabilizadores.",
        tags: ["Aceleração", "Quadril", "Joelho"]
    },
    {
        title: "Contato com a bola",
        description:
            "O pé entra em contato com a bola e transfere parte da energia do movimento para ela.",
        action:
            "A região do pé escolhida para o contato influencia a direção e a trajetória da bola. O tornozelo precisa estar controlado durante o impacto.",
        structures:
            "Quadríceps, músculos do tornozelo e estabilizadores do quadril.",
        tags: ["Impacto", "Transferência de energia", "Precisão"]
    },
    {
        title: "Desaceleração",
        description:
            "Depois do contato, a perna continua o movimento e reduz sua velocidade de forma controlada.",
        action:
            "Os músculos ajudam a controlar a continuidade do movimento e o corpo reorganiza o equilíbrio para finalizar o chute.",
        structures:
            "Isquiotibiais, glúteos, músculos do tronco e da perna de apoio.",
        tags: ["Controle", "Equilíbrio", "Desaceleração"]
    }
];

const phaseButtons = document.querySelectorAll(".phase-btn");
const phaseNumber = document.getElementById("phaseNumber");
const phaseTitle = document.getElementById("phaseTitle");
const phaseDescription = document.getElementById("phaseDescription");
const phaseAction = document.getElementById("phaseAction");
const phaseStructures = document.getElementById("phaseStructures");
const phaseTags = document.getElementById("phaseTags");

function createTags(container, tags) {
    if (!container) return;

    container.replaceChildren();

    tags.forEach(tag => {
        const element = document.createElement("span");
        element.className = "tag";
        element.textContent = tag;
        container.appendChild(element);
    });
}

function showPhase(index) {
    const phase = phases[index];

    if (!phase) return;

    if (phaseNumber) {
        phaseNumber.textContent = `FASE ${String(index + 1).padStart(2, "0")}`;
    }

    if (phaseTitle) phaseTitle.textContent = phase.title;
    if (phaseDescription) phaseDescription.textContent = phase.description;
    if (phaseAction) phaseAction.textContent = phase.action;
    if (phaseStructures) phaseStructures.textContent = phase.structures;

    createTags(phaseTags, phase.tags);

    phaseButtons.forEach((button, buttonIndex) => {
        const isActive = buttonIndex === index;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

phaseButtons.forEach(button => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.phase);
        showPhase(index);
    });
});

/* =====================================
   ANATOMIA MUSCULAR
===================================== */

const muscles = [
    {
        name: "Quadríceps",
        color: "#e4572e",
        description:
            "Grupo muscular localizado na parte anterior da coxa. Participa da extensão do joelho, movimento importante durante a aceleração da perna e na preparação do contato com a bola.",
        tags: ["Coxa", "Extensão do joelho", "Aceleração"]
    },
    {
        name: "Isquiotibiais",
        color: "#1d8a7f",
        description:
            "Grupo muscular localizado na parte posterior da coxa. Participa da flexão do joelho e ajuda a controlar a perna durante a desaceleração do movimento.",
        tags: ["Parte posterior da coxa", "Flexão do joelho", "Controle"]
    },
    {
        name: "Glúteo máximo",
        color: "#cf8a12",
        description:
            "Músculo localizado na região posterior do quadril. Atua principalmente na extensão do quadril e contribui para a estabilidade da pelve e a produção de força.",
        tags: ["Quadril", "Extensão", "Estabilidade"]
    },
    {
        name: "Iliopsoas",
        color: "#b3203a",
        description:
            "Conjunto muscular profundo que conecta a região lombar e a pelve ao fêmur. É importante para a flexão do quadril, ajudando a levar a coxa para a frente.",
        tags: ["Quadril", "Flexão", "Movimento da coxa"]
    },
    {
        name: "Gastrocnêmio",
        color: "#7b4fb0",
        description:
            "Músculo localizado na região posterior da perna, conhecido como parte da panturrilha. Participa da flexão plantar do tornozelo e também auxilia na flexão do joelho.",
        tags: ["Panturrilha", "Tornozelo", "Flexão plantar"]
    },
    {
        name: "Tibial anterior",
        color: "#2f6fdb",
        description:
            "Músculo localizado na parte anterior da perna. Participa da dorsiflexão do tornozelo, ajudando a levantar a parte da frente do pé.",
        tags: ["Parte anterior da perna", "Tornozelo", "Dorsiflexão"]
    }
];

const muscleMenu = document.getElementById("muscleMenu");
const muscleTitle = document.getElementById("muscleTitle");
const muscleDescription = document.getElementById("muscleDescription");
const muscleTags = document.getElementById("muscleTags");
const musclePoints = document.querySelectorAll(".muscle-point");

function showMuscle(index) {
    const muscle = muscles[index];

    if (!muscle) return;

    if (muscleTitle) muscleTitle.textContent = muscle.name;
    if (muscleDescription) {
        muscleDescription.textContent = muscle.description;
    }

    createTags(muscleTags, muscle.tags);

    document.querySelectorAll(".muscle-btn").forEach((button, buttonIndex) => {
        const isActive = buttonIndex === index;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    musclePoints.forEach(button => {
        const isActive = Number(button.dataset.muscle) === index;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll(".svg-muscle").forEach(shape => {
        shape.classList.toggle("active", Number(shape.dataset.muscle) === index);
    });

    document.querySelector(".anatomy-svg")?.classList.add("has-selection");
    document.querySelector(".muscle-panel")?.style.setProperty("--muscle-color", muscle.color);
}

if (muscleMenu) {
    muscles.forEach((muscle, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "muscle-btn";
        button.dataset.muscle = String(index);
        button.style.setProperty("--muscle-color", muscle.color);
        button.textContent = muscle.name;
        button.setAttribute("aria-pressed", String(index === 0));

        button.addEventListener("click", () => {
            showMuscle(index);
        });

        muscleMenu.appendChild(button);
    });
}

musclePoints.forEach(button => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.muscle);
        showMuscle(index);
    });
});

musclePoints.forEach(button => {
    const muscle = muscles[Number(button.dataset.muscle)];

    if (muscle) button.style.setProperty("--muscle-color", muscle.color);
});

document.querySelectorAll(".svg-muscle").forEach(shape => {
    shape.addEventListener("click", () => {
        showMuscle(Number(shape.dataset.muscle));
    });
});

/* =====================================
   SIMULADOR DE CHUTE
===================================== */

const distanceInput = document.getElementById("distance");
const strengthInput = document.getElementById("strength");
const kickTypeInput = document.getElementById("kickType");

const distanceValue = document.getElementById("distanceValue");
const strengthValue = document.getElementById("strengthValue");

const kickButton = document.getElementById("kickButton");
const ball = document.getElementById("ball");
const footballField = document.querySelector(".football-field");
const goal = document.querySelector(".goal");
const goalNet = document.querySelector(".goal-net");
const result = document.getElementById("result");

const FRAME_MS = 1000 / 60;
const CONFETTI_COLORS = ["#4ade80", "#d8b45a", "#f0fdf4", "#16a34a"];

let rafId = null;
let resetTimer = null;
let restX = 0;
let lastFieldWidth = 0;
let shots = 0;
let goals = 0;

function createFieldElement(className) {
    if (!footballField) return null;

    const element = document.createElement("div");
    element.className = className;
    element.setAttribute("aria-hidden", "true");
    footballField.appendChild(element);

    return element;
}

const ballShadow = createFieldElement("ball-shadow");
const goalBanner = createFieldElement("goal-banner");

if (goalBanner) goalBanner.textContent = "GOL!";

function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function updateSimulatorValues() {
    if (distanceInput && distanceValue) {
        distanceValue.textContent = `${distanceInput.value} m`;
    }

    if (strengthInput && strengthValue) {
        strengthValue.textContent = `${strengthInput.value}%`;
    }
}

/* ---------- Geometria do campo ---------- */

function getGeometry() {
    const ballWidth = ball.offsetWidth;
    const fieldHeight = footballField.clientHeight;
    const ballCenter = ball.offsetLeft + ballWidth / 2;
    const goalCenter = goal.offsetLeft + goal.offsetWidth / 2;
    const ballBottom = fieldHeight - ball.offsetTop - ball.offsetHeight;
    const goalBottom = fieldHeight - goal.offsetTop - goal.offsetHeight;

    return {
        ballWidth,
        total: goalCenter - ballCenter,
        goalBase: goalBottom - ballBottom,
        goalHeight: goal.offsetHeight
    };
}

/* Quanto menor a distância, mais perto do gol a bola começa. */
function getRestX(geometry) {
    const distance = Number(distanceInput.value);
    const min = Number(distanceInput.min) || 5;
    const max = Number(distanceInput.max) || 40;
    const closeness = (max - distance) / (max - min);

    return geometry.total * 0.62 * closeness;
}

/* ---------- Aplicação dos quadros ---------- */

function applyFrame(frame) {
    ball.style.transform =
        `translate(${restX + frame.x}px, ${-frame.y}px) rotate(${frame.rot}deg) scale(${frame.sc})`;
    ball.style.opacity = String(frame.op);

    if (ballShadow) {
        const height = Math.max(0, frame.y);
        ballShadow.style.transform =
            `translate(${restX + frame.x}px, 0) scale(${Math.max(0.35, 1 - height / 260)})`;
        ballShadow.style.opacity = String(frame.op * Math.max(0.25, 1 - height / 200));
    }
}

function cancelRun() {
    if (rafId) cancelAnimationFrame(rafId);
    if (resetTimer) clearTimeout(resetTimer);

    rafId = null;
    resetTimer = null;
}

function resetBall() {
    if (!ball || !goal || !footballField || !distanceInput) return;

    cancelRun();

    lastFieldWidth = footballField.clientWidth;
    restX = getRestX(getGeometry());

    applyFrame({ x: 0, y: 0, rot: 0, sc: 1, op: 1 });
}

/* ---------- Efeitos visuais ---------- */

function spawnAtBall(className, x, y, size) {
    const element = createFieldElement(className);
    const offset = (ball.offsetWidth - size) / 2;
    const base = `translate(${restX + x}px, ${-y}px)`;

    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.marginLeft = `${offset}px`;
    element.style.marginBottom = `${offset}px`;
    element.style.transform = base;

    return { element, base };
}

function playEffect(className, x, y, size, keyframes, duration) {
    const { element, base } = spawnAtBall(className, x, y, size);

    const animation = element.animate(
        keyframes.map(frame => ({
            ...frame,
            transform: `${base} ${frame.transform || ""}`
        })),
        { duration, easing: "ease-out", fill: "forwards" }
    );

    animation.onfinish = () => element.remove();
}

function spawnTrail(frame, type) {
    const className = type === "tres-dedos" ? "ball-trail trail-gold" : "ball-trail";
    const center = ball.offsetWidth / 2;

    playEffect(
        className,
        frame.x,
        frame.y,
        12,
        [
            { opacity: 0.6, transform: "scale(1)" },
            { opacity: 0, transform: "scale(.2)" }
        ],
        480
    );

    return center;
}

function spawnDust(frame) {
    playEffect(
        "ball-dust",
        frame.x,
        0,
        16,
        [
            { opacity: 0.55, transform: "translateY(0) scale(.6)" },
            { opacity: 0, transform: "translateY(-10px) scale(2.4)" }
        ],
        520
    );
}

function spawnLaunchRing() {
    playEffect(
        "kick-ring",
        0,
        0,
        ball.offsetWidth,
        [
            { opacity: 0.9, transform: "scale(1)" },
            { opacity: 0, transform: "scale(2.8)" }
        ],
        520
    );
}

function celebrateGoal() {
    if (goalNet) {
        goalNet.animate(
            [
                { transform: "scaleX(1) skewY(0deg)" },
                { transform: "scaleX(1.4) skewY(-5deg)", offset: 0.3 },
                { transform: "scaleX(.94) skewY(2deg)", offset: 0.65 },
                { transform: "scaleX(1) skewY(0deg)" }
            ],
            { duration: 700, easing: "ease-out" }
        );
    }

    if (goalBanner) {
        goalBanner.animate(
            [
                { opacity: 0, transform: "translate(-50%, -50%) scale(.4)" },
                { opacity: 1, transform: "translate(-50%, -50%) scale(1.15)", offset: 0.22 },
                { opacity: 1, transform: "translate(-50%, -50%) scale(1)", offset: 0.75 },
                { opacity: 0, transform: "translate(-50%, -90%) scale(1)" }
            ],
            { duration: 1700, easing: "ease-out" }
        );
    }

    const originX = goal.offsetLeft + goal.offsetWidth / 2;
    const originY = goal.offsetTop;

    for (let i = 0; i < 18; i++) {
        const piece = createFieldElement("confetti-piece");
        const dx = (Math.random() - 0.5) * 200;
        const rise = 50 + Math.random() * 90;
        const spin = (Math.random() - 0.5) * 720;

        piece.style.left = `${originX}px`;
        piece.style.top = `${originY}px`;
        piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];

        const animation = piece.animate(
            [
                { opacity: 1, transform: "translate(0, 0) rotate(0deg)" },
                {
                    opacity: 1,
                    transform: `translate(${dx * 0.6}px, ${-rise}px) rotate(${spin * 0.5}deg)`,
                    offset: 0.4
                },
                {
                    opacity: 0,
                    transform: `translate(${dx}px, ${60 + Math.random() * 40}px) rotate(${spin}deg)`
                }
            ],
            { duration: 1200 + Math.random() * 500, easing: "ease-out" }
        );

        animation.onfinish = () => piece.remove();
    }
}

/* ---------- Trajetória ---------- */

function getKickDescription(type, strength) {
    if (type === "chapa") {
        return strength >= 70
            ? "A chapa combina direção e controle, favorecendo uma finalização mais precisa."
            : "A chapa permite priorizar o direcionamento da bola.";
    }

    if (type === "tres-dedos") {
        return "O contato com a parte externa do pé pode produzir uma trajetória com efeito lateral.";
    }

    return strength >= 70
        ? "O peito do pé é frequentemente utilizado para produzir chutes potentes."
        : "O peito do pé permite um contato mais direto com a bola.";
}

/* Calcula todos os quadros do chute: voo, quiques e rolamento. */
function buildTrajectory({ outcome, ratio, type, strength, distance, geometry }) {
    const remaining = geometry.total - restX;
    const ballWidth = geometry.ballWidth;

    let flightMs = 1500 - strength * 7 + distance * 6;
    flightMs *= 0.55 + 0.45 * (remaining / geometry.total);
    flightMs = Math.min(1900, Math.max(520, flightMs));

    const typeArc = { peito: 1, chapa: 0.45, "tres-dedos": 0.8 }[type] ?? 1;
    const typeHeight = { peito: 0.5, chapa: 0.3, "tres-dedos": 0.62 }[type] ?? 0.5;
    const spin = { peito: 0.32, chapa: 0.2, "tres-dedos": 0.75 }[type] ?? 0.3;

    let arc = (35 + strength * 0.9) * typeArc;
    let endX = remaining;
    let endY = 0;

    if (outcome === "goal") {
        endY = geometry.goalBase + geometry.goalHeight * typeHeight;
    } else if (outcome === "over") {
        endY = geometry.goalBase + geometry.goalHeight + 32;
    } else {
        const fraction = 0.35 + 0.55 * Math.min(1, ratio / 0.85);
        endX = remaining * fraction;
        flightMs *= Math.sqrt(fraction);
        arc *= Math.sqrt(fraction);
    }

    const gravity = (8 * arc) / (flightMs * flightMs);
    const vx0 = endX / flightMs;
    const vy0 = (4 * arc + endY) / flightMs;

    const frames = [];
    const events = [{ index: 0, kind: "launch" }];

    let x = 0;
    let y = 0;
    let vx = vx0;
    let vy = vy0;
    let rot = 0;
    let time = 0;
    let inFlight = true;
    let restIndex = null;

    for (let i = 0; i < 420; i++) {
        let opacity = 1;
        let scale = 1;

        if (outcome === "over" && !inFlight && x > endX + 15) {
            const progress = Math.min(1, (x - endX - 15) / 100);
            opacity = 1 - progress;
            scale = 1 - progress * 0.4;
        }

        frames.push({ x, y, rot, sc: scale, op: opacity, flight: inFlight });

        if (opacity <= 0) break;

        time += FRAME_MS;

        if (inFlight) {
            const u = time / flightMs;

            if (u < 1) {
                x = endX * u;
                y = 4 * arc * u * (1 - u) + endY * u;

                if (type === "tres-dedos") {
                    y += 14 * Math.sin(u * Math.PI * 3) * (1 - u * 0.3);
                }

                rot += spin * FRAME_MS;
                continue;
            }

            inFlight = false;
            x = endX;
            y = endY;
            vx = vx0;
            vy = vy0 - gravity * flightMs;
            restIndex = frames.length;

            if (outcome === "goal") {
                vx = vx0 * 0.05;
                vy *= 0.35;
                events.push({ index: frames.length, kind: "goal" });
            }

            continue;
        }

        vy -= gravity * FRAME_MS;
        y += vy * FRAME_MS;
        x += vx * FRAME_MS;

        if (y > 0) {
            rot += spin * FRAME_MS;
        } else {
            y = 0;

            if (Math.abs(vy) > 0.05) {
                vy = -vy * 0.55;
                vx *= 0.8;
                events.push({ index: frames.length, kind: "bounce" });
            } else {
                vy = 0;
                vx *= 0.965;
            }

            rot += (vx * FRAME_MS / (Math.PI * ballWidth)) * 360;
        }

        if (outcome === "short" && x > remaining * 0.96) {
            x = remaining * 0.96;
            vx = 0;
        }

        if (outcome !== "over" && y === 0 && Math.abs(vx) < 0.004) {
            frames.push({ x, y, rot, sc: 1, op: 1, flight: false });
            break;
        }
    }

    return {
        frames,
        events,
        finalIndex: outcome === "over"
            ? Math.min(restIndex ?? 0, frames.length - 1)
            : frames.length - 1
    };
}

function playTrajectory(trajectory, type, onDone) {
    const { frames, events } = trajectory;
    const startTime = performance.now();
    let last = -1;

    function step(now) {
        const index = Math.min(
            frames.length - 1,
            Math.floor((now - startTime) / FRAME_MS)
        );

        for (let i = last + 1; i <= index; i++) {
            if (frames[i].flight && i % 2 === 0 && i > 0) {
                spawnTrail(frames[i], type);
            }

            events
                .filter(event => event.index === i)
                .forEach(event => {
                    if (event.kind === "launch") spawnLaunchRing();
                    if (event.kind === "bounce") spawnDust(frames[i]);
                    if (event.kind === "goal") celebrateGoal();
                });
        }

        last = index;
        applyFrame(frames[index]);

        if (index < frames.length - 1) {
            rafId = requestAnimationFrame(step);
        } else {
            rafId = null;
            onDone();
        }
    }

    rafId = requestAnimationFrame(step);
}

/* ---------- Resultado ---------- */

const OUTCOMES = {
    goal: {
        label: "Gol",
        message: "A bola entrou no gol."
    },
    short: {
        label: "Curto",
        message: "A bola não chegou ao gol. Aumente a força ou diminua a distância."
    },
    over: {
        label: "Por cima",
        message: "A bola passou por cima do travessão. Reduza um pouco a força."
    }
};

function showResult(outcome, distance, strength, type) {
    const info = OUTCOMES[outcome];
    const badge = document.createElement("span");

    badge.className = `result-badge result-${outcome}`;
    badge.textContent = info.label;

    result.replaceChildren(
        badge,
        document.createTextNode(
            `${distance} m de distância • Força de ${strength}% • ` +
            `${getKickDescription(type, strength)} ${info.message} ` +
            `Gols: ${goals} de ${shots}.`
        )
    );
}

function shootBall() {
    if (!ball || !goal || !footballField || !result || !distanceInput || !strengthInput || !kickTypeInput) {
        return;
    }

    cancelRun();

    const distance = Number(distanceInput.value);
    const strength = Number(strengthInput.value);
    const type = kickTypeInput.value;

    const geometry = getGeometry();
    restX = getRestX(geometry);

    /* Força necessária cresce com a distância. */
    const needed = 20 + distance * 1.6;
    const ratio = strength / needed;
    /* Faixa de acerto estreita; a chapa é a mais precisa e o três dedos, o mais arriscado. */
    const window_ = {
        peito: { min: 0.95, max: 1.3 },
        chapa: { min: 0.9, max: 1.4 },
        "tres-dedos": { min: 1.0, max: 1.25 }
    }[type] ?? { min: 0.95, max: 1.3 };

    const outcome = ratio < window_.min ? "short" : ratio > window_.max ? "over" : "goal";

    shots += 1;
    if (outcome === "goal") goals += 1;

    const trajectory = buildTrajectory({
        outcome, ratio, type, strength, distance, geometry
    });

    applyFrame(trajectory.frames[0]);

    if (prefersReducedMotion()) {
        applyFrame(trajectory.frames[trajectory.finalIndex]);
    } else {
        playTrajectory(trajectory, type, () => {
            if (outcome === "over") {
                resetTimer = setTimeout(() => {
                    resetBall();
                    ball.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 350 });
                }, 600);
            }
        });
    }

    showResult(outcome, distance, strength, type);

    kickButton?.setAttribute("aria-label", "Repetir simulação de chute");
}

if (distanceInput) {
    distanceInput.addEventListener("input", () => {
        updateSimulatorValues();
        resetBall();
    });
}

if (strengthInput) {
    strengthInput.addEventListener("input", updateSimulatorValues);
}

if (kickButton) {
    kickButton.addEventListener("click", shootBall);
}

window.addEventListener("resize", () => {
    if (footballField && footballField.clientWidth !== lastFieldWidth) {
        resetBall();
    }
});

window.addEventListener("load", resetBall);

/* =====================================
   INICIALIZAÇÃO
===================================== */

showPhase(0);
showMuscle(0);
updateSimulatorValues();
resetBall();
