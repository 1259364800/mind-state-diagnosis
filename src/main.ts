import './style.css';
import { QUESTIONS } from './data';
import { calculateResult, getLevelLabel } from './results';

let currentQuestion = 0;
const scores: Record<string, number> = { lazy: 0, try: 0, crazy: 0, emo: 0 };

const app = document.getElementById('app')!;

function renderIntro() {
  app.innerHTML = `
    <div class="screen intro-screen">
      <div class="glitch-title" data-text="精神状态诊断器">精神状态诊断器</div>
      <div class="subtitle">8 道题，测测你现在的精神状态</div>
      <button class="btn-start" id="btn-start">开始诊断</button>
      <div class="footer">8 道题 · 看看你的精神状态</div>
    </div>
  `;
  document.getElementById('btn-start')!.addEventListener('click', renderQuestion);
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  app.innerHTML = `
    <div class="screen question-screen">
      <div class="progress">
        <div class="progress-bar" style="width: ${(currentQuestion / QUESTIONS.length) * 100}%"></div>
      </div>
      <div class="question-number">问题 ${currentQuestion + 1} / ${QUESTIONS.length}</div>
      <div class="question-text">${q.text}</div>
      <div class="options">
        ${q.options.map((opt, idx) => `
          <button class="option-btn" data-idx="${idx}">
            <span class="option-label">${String.fromCharCode(65 + idx)}</span>
            <span class="option-text">${opt.text}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.option-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const idx = Number((e.currentTarget as HTMLElement).dataset.idx);
      const option = q.options[idx];
      Object.entries(option.scores).forEach(([key, val]) => {
        scores[key] += val;
      });
      currentQuestion++;
      if (currentQuestion >= QUESTIONS.length) {
        renderLoading();
      } else {
        renderQuestion();
      }
    });
  });
}

function renderLoading() {
  app.innerHTML = `
    <div class="screen loading-screen">
      <div class="spinner"></div>
      <div class="loading-text">正在连接你的大脑...</div>
    </div>
  `;
  setTimeout(renderResult, 800);
}

function renderResult() {
  const result = calculateResult(scores);
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const level = getLevelLabel(total <= 8 ? 0 : total <= 14 ? 1 : 2);

  app.innerHTML = `
    <div class="screen result-screen">
      <div class="result-card" id="result-card">
        <div class="card-header">
          <span class="card-label">精神状态诊断报告</span>
          <span class="card-level">${level}</span>
        </div>
        <div class="card-emoji">${result.emoji}</div>
        <div class="card-type" style="color: ${result.color}">${result.label}</div>
        <div class="card-diagnosis">${result.diagnosis}</div>
        <div class="card-traits">
          ${result.traits.map(t => `<span class="trait">${t}</span>`).join('')}
        </div>
        <div class="card-advice">
          <span class="advice-label">建议</span>
          ${result.advice}
        </div>
      </div>
      <div class="result-actions">
        <button class="btn-share" id="btn-share">📤 分享结果</button>
        <button class="btn-retry" id="btn-retry">再测一次</button>
      </div>
    </div>
  `;

  document.getElementById('btn-retry')!.addEventListener('click', () => {
    currentQuestion = 0;
    Object.keys(scores).forEach(k => scores[k] = 0);
    renderIntro();
  });

  document.getElementById('btn-share')!.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: '精神状态诊断器',
        text: `我测出来是「${result.label}」，你呢？`,
        url: location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`我测出来是「${result.label}」—— 精神状态诊断器 ${location.href}`);
      const btn = document.getElementById('btn-share')!;
      const old = btn.textContent;
      btn.textContent = '已复制到剪贴板';
      setTimeout(() => btn.textContent = old, 1500);
    }
  });
}

renderIntro();
