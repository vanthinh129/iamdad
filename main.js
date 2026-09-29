// ============================================
// I am Dad - Main Application
// ============================================
import './style.css';
import { sections } from './data.js';
import {
  renderHome,
  renderToday,
  renderTodayAI,
  renderWorksheetsHTML,
  generateAIWorksheetsHTML,
  callGeminiAPI,
  renderRoomSetup,
  renderFocusProgram,
  renderExercises,
  renderBehavior,
  renderDailyRoutine,
  renderTracker,
  renderResources,
} from './content.js';

// ============================================
// State
// ============================================
let currentSection = 'home';
let currentRating = 0;

// ============================================
// DOM References
// ============================================
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const themeToggle = document.getElementById('theme-toggle');
const contentArea = document.getElementById('content-area');
const breadcrumb = document.getElementById('breadcrumb');
const navItems = document.querySelectorAll('.nav-item');

// ============================================
// Sidebar Overlay
// ============================================
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.getElementById('app').appendChild(overlay);

// ============================================
// Navigation
// ============================================
function navigateTo(sectionId) {
  currentSection = sectionId;
  if (window.location.hash !== `#${sectionId}`) {
    window.location.hash = sectionId;
  }

  // Update active nav
  navItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.section === sectionId);
  });

  // Update breadcrumb
  breadcrumb.textContent = sections[sectionId]?.breadcrumb || 'Trang chủ';

  // Render content
  renderSection(sectionId);

  // Close sidebar on mobile
  closeSidebar();

  // Scroll to top
  contentArea.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSection(sectionId) {
  let html = '';
  switch (sectionId) {
    case 'home':
      html = renderHome();
      break;
    case 'today':
      html = renderToday();
      break;
    case 'today-ai':
      html = renderTodayAI();
      break;
    case 'room-setup':
      html = renderRoomSetup();
      break;
    case 'focus-program':
      html = renderFocusProgram();
      break;
    case 'exercises':
      html = renderExercises();
      break;
    case 'behavior':
      html = renderBehavior();
      break;
    case 'daily-routine':
      html = renderDailyRoutine();
      break;
    case 'tracker':
      html = renderTracker();
      break;
    case 'resources':
      html = renderResources();
      break;
    default:
      html = renderHome();
  }
  contentArea.innerHTML = html;

  // Bind section-specific events
  if (sectionId === 'today') {
    bindTodayEvents();
  }
  if (sectionId === 'today-ai') {
    bindTodayAIEvents();
  }
  if (sectionId === 'exercises') {
    bindTabEvents();
  }
  if (sectionId === 'tracker') {
    bindTrackerEvents();
    loadTrackerData();
  }
  if (sectionId === 'home') {
    bindHomeNavEvents();
  }
}

// ============================================
// State for dynamic worksheets
let currentRandomSeed = 0;

// Today Section Events & Printing
// ============================================
function bindTodayEvents() {
  const btnPrintAll = document.getElementById('btn-print-all');
  const btnPrintSchedule = document.getElementById('btn-print-schedule');
  const btnPrintWorksheets = document.getElementById('btn-print-worksheets');
  const weekSelect = document.getElementById('today-week-select');
  const levelSelect = document.getElementById('today-level-select');
  const daySelect = document.getElementById('today-day-select');
  const btnRefresh = document.getElementById('btn-refresh-worksheets');
  const weekTargetText = document.getElementById('week-target-text');
  const dadNoteText = document.getElementById('dad-note-text');

  function updateWorksheets() {
    const worksheetsContainer = document.getElementById('printable-worksheets');
    if (!worksheetsContainer) return;
    const lvl = levelSelect ? levelSelect.value : 'grade1-std';
    const day = daySelect ? daySelect.value : 'mon';
    const week = weekSelect ? weekSelect.value : '1';
    worksheetsContainer.innerHTML = renderWorksheetsHTML(lvl, day, currentRandomSeed, week);
  }

  if (btnPrintAll) {
    btnPrintAll.addEventListener('click', () => {
      document.body.classList.remove('print-only-schedule', 'print-only-worksheets');
      window.print();
    });
  }

  if (btnPrintSchedule) {
    btnPrintSchedule.addEventListener('click', () => {
      document.body.classList.add('print-only-schedule');
      document.body.classList.remove('print-only-worksheets');
      window.print();
      setTimeout(() => {
        document.body.classList.remove('print-only-schedule');
      }, 500);
    });
  }

  if (btnPrintWorksheets) {
    btnPrintWorksheets.addEventListener('click', () => {
      document.body.classList.add('print-only-worksheets');
      document.body.classList.remove('print-only-schedule');
      window.print();
      setTimeout(() => {
        document.body.classList.remove('print-only-worksheets');
      }, 500);
    });
  }

  if (weekSelect) {
    weekSelect.addEventListener('change', (e) => {
      const week = e.target.value;
      if (week === '1') {
        if (weekTargetText) weekTargetText.textContent = '5-7 phút tập trung';
        if (dadNoteText) dadNoteText.textContent = 'Ngồi cạnh bé, hỗ trợ tay-trên-tay khi cần. Chỉ nhắc bằng cử chỉ (không nói nhiều để bé không bị phụ thuộc giọng nói).';
      } else if (week === '2') {
        if (weekTargetText) weekTargetText.textContent = '7-10 phút tập trung';
        if (dadNoteText) dadNoteText.textContent = 'Di chuyển ghế ngồi cách bé 1 mét. Quan sát bé từ xa, mỉm cười khích lệ khi bé hoàn thành mỗi rổ.';
      } else if (week === '3') {
        if (weekTargetText) weekTargetText.textContent = '10-15 phút tập trung';
        if (dadNoteText) dadNoteText.textContent = 'Ngồi ở góc phòng (cách 2-3m). Thỉnh thoảng đọc sách/làm việc riêng để bé tập trung tự nhiên vào bài tập.';
      } else if (week === '4') {
        if (weekTargetText) weekTargetText.textContent = '15-20+ phút độc lập 🎉';
        if (dadNoteText) dadNoteText.textContent = 'Đứng ngoài cửa hoặc ra ngoài 3-5 phút. Bé tự làm độc lập từ Rổ 1 ➔ Rổ 2 ➔ Rổ 3 ➔ Hộp XONG.';
      }
      updateWorksheets();
      showToast(`🎯 Đã cập nhật mục tiêu & đề bài Tuần ${week}!`);
    });
  }

  if (daySelect) {
    daySelect.addEventListener('change', () => {
      currentRandomSeed = Math.floor(Math.random() * 10000) + 1;
      updateWorksheets();
      const dayNames = { mon: 'Thứ 2', tue: 'Thứ 3', wed: 'Thứ 4', thu: 'Thứ 5', fri: 'Thứ 6', sat: 'Thứ 7', sun: 'Chủ Nhật' };
      showToast(`📅 Đã đổi chủ đề bài tập sang ${dayNames[daySelect.value] || daySelect.value}!`);
    });
  }

  if (levelSelect) {
    levelSelect.addEventListener('change', (e) => {
      const lvl = e.target.value;
      currentRandomSeed = Math.floor(Math.random() * 10000) + 1;
      updateWorksheets();
      if (lvl === 'easy') {
        showToast('🌱 Đã chuyển sang Mức 1: Khởi động làm quen rổ');
      } else if (lvl === 'grade1-std') {
        showToast('🎓 Đã chuyển sang Mức 2: Chuẩn Lớp 1 (Đọc hiểu & Toán cộng/trừ 10)');
      } else if (lvl === 'grade1-adv') {
        showToast('🚀 Đã chuyển sang Mức 3: Lớp 1 Nâng cao (Toán 20 & Đọc đoạn văn)');
      }
    });
  }

  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      currentRandomSeed = Math.floor(Math.random() * 10000) + 1;
      updateWorksheets();
      showToast('🎲 Đã sinh bộ đề bài mới ngẫu nhiên cho bé!');
    });
  }
}

// ============================================
// Today AI Section Events & Generator
// ============================================
function bindTodayAIEvents() {
  const btnGenerateAI = document.getElementById('btn-generate-ai');
  const themeSelect = document.getElementById('ai-theme-select');
  const levelSelect = document.getElementById('ai-level-select');
  const weekSelect = document.getElementById('ai-week-select');
  const customPromptInput = document.getElementById('ai-custom-prompt');
  const worksheetsContainer = document.getElementById('printable-ai-worksheets');
  const apiKeyInput = document.getElementById('ai-api-key-input');
  const btnSaveKey = document.getElementById('btn-save-api-key');
  const statusBadge = document.getElementById('ai-status-badge');
  const inspectorPrompt = document.getElementById('ai-inspector-prompt');
  const inspectorResponse = document.getElementById('ai-inspector-response');

  const btnPrintAll = document.getElementById('btn-print-all-ai');
  const btnPrintSchedule = document.getElementById('btn-print-schedule-ai');
  const btnPrintWorksheets = document.getElementById('btn-print-worksheets-ai');

  // Load saved API key on init
  const savedKey = localStorage.getItem('gemini_api_key') || import.meta.env.VITE_GEMINI_API_KEY || '';
  if (apiKeyInput && savedKey) {
    apiKeyInput.value = savedKey;
  }

  if (btnSaveKey && apiKeyInput) {
    btnSaveKey.addEventListener('click', () => {
      const val = apiKeyInput.value.trim();
      if (val) {
        localStorage.setItem('gemini_api_key', val);
        showToast('💾 Đã lưu Gemini API Key thành công!');
        if (statusBadge) {
          statusBadge.textContent = '🟢 Đã lưu API Key — Sẵn sàng tạo bài bằng AI!';
          statusBadge.style.background = '#d1fae5';
          statusBadge.style.color = '#047857';
        }
      } else {
        localStorage.removeItem('gemini_api_key');
        showToast('⚠️ Đã xóa API Key!');
      }
    });
  }

  if (btnPrintAll) {
    btnPrintAll.addEventListener('click', () => {
      document.body.classList.remove('print-only-schedule', 'print-only-worksheets');
      window.print();
    });
  }

  if (btnPrintSchedule) {
    btnPrintSchedule.addEventListener('click', () => {
      document.body.classList.add('print-only-schedule');
      document.body.classList.remove('print-only-worksheets');
      window.print();
      setTimeout(() => {
        document.body.classList.remove('print-only-schedule');
      }, 500);
    });
  }

  if (btnPrintWorksheets) {
    btnPrintWorksheets.addEventListener('click', () => {
      document.body.classList.add('print-only-worksheets');
      document.body.classList.remove('print-only-schedule');
      window.print();
      setTimeout(() => {
        document.body.classList.remove('print-only-worksheets');
      }, 500);
    });
  }

  if (btnGenerateAI) {
    btnGenerateAI.addEventListener('click', async () => {
      const apiKey = (apiKeyInput ? apiKeyInput.value.trim() : '') || localStorage.getItem('gemini_api_key') || import.meta.env.VITE_GEMINI_API_KEY || '';
      const promptText = customPromptInput ? customPromptInput.value.trim() : '';
      const theme = themeSelect ? themeSelect.value : 'dog';
      const level = levelSelect ? levelSelect.value : 'grade1-std';
      const week = weekSelect ? weekSelect.value : '2';
      const modelSelect = document.getElementById('ai-model-select');
      const modelChoice = modelSelect ? modelSelect.value : 'auto';
      const seed = Math.floor(Math.random() * 9000) + 1000;

      if (!apiKey) {
        if (statusBadge) {
          statusBadge.textContent = '🔴 Chưa có API Key! Dán Gemini Key vào ô trên.';
          statusBadge.style.background = '#fee2e2';
          statusBadge.style.color = '#b91c1c';
        }
        showToast('⚠️ Vui lòng dán Gemini API Key của Ba để thực hiện cuộc gọi AI thực tế!');
        if (apiKeyInput) apiKeyInput.focus();
        return;
      }

      // Set Loading UI State
      btnGenerateAI.disabled = true;
      const originalText = btnGenerateAI.innerHTML;
      btnGenerateAI.innerHTML = '⏳ ĐANG GỬI PROMPT TỚI GOOGLE GEMINI AI... VUI LÒNG ĐỢI 3-5s';
      if (statusBadge) {
        statusBadge.textContent = '🟡 Đang kết nối tới Google Gemini API...';
        statusBadge.style.background = '#fef3c7';
        statusBadge.style.color = '#92400e';
      }

      try {
        const { parsed, rawText, systemPrompt, usedModel } = await callGeminiAPI(apiKey, promptText, theme, level, week, modelChoice);

        // Update Live Inspector display
        if (inspectorPrompt) inspectorPrompt.textContent = `[Model: ${usedModel}]\n\n${systemPrompt}`;
        if (inspectorResponse) inspectorResponse.textContent = JSON.stringify(parsed, null, 2);

        // Render AI Generated Worksheets
        if (worksheetsContainer) {
          worksheetsContainer.innerHTML = generateAIWorksheetsHTML(promptText, theme, level, seed, week, parsed);
        }

        if (statusBadge) {
          statusBadge.textContent = `🟢 Đã nhận bài tập 100% sinh bởi Gemini (${usedModel})!`;
          statusBadge.style.background = '#d1fae5';
          statusBadge.style.color = '#047857';
        }

        showToast(`🎉 Google Gemini AI (${usedModel}) đã tạo bộ đề bài thực tế thành công!`);
      } catch (err) {
        console.error('Gemini API Error:', err);
        if (inspectorResponse) inspectorResponse.textContent = `LỖI API: ${err.message}`;
        if (statusBadge) {
          statusBadge.textContent = `🔴 Lỗi AI: ${err.message.slice(0, 45)}...`;
          statusBadge.style.background = '#fee2e2';
          statusBadge.style.color = '#b91c1c';
        }
        showToast(`❌ Lỗi gọi Gemini AI: ${err.message}`);
      } finally {
        btnGenerateAI.disabled = false;
        btnGenerateAI.innerHTML = originalText;
      }
    });
  }
}

// ============================================
// Home card navigation
// ============================================
function bindHomeNavEvents() {
  document.querySelectorAll('.nav-card').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const target = card.dataset.goto;
      if (target) navigateTo(target);
    });
  });
}

// ============================================
// Tab Events (Exercises Section)
// ============================================
function bindTabEvents() {
  const tabs = document.querySelectorAll('#exercise-tabs .tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach((tc) => tc.classList.remove('active'));

      const target = document.getElementById(`tab-${tab.dataset.tab}`);
      if (target) target.classList.add('active');
    });
  });
}

// ============================================
// Tracker Events
// ============================================
function bindTrackerEvents() {
  // Set today's date
  const dateInput = document.getElementById('track-date');
  if (dateInput) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }

  // Star rating
  const starBtns = document.querySelectorAll('.star-btn');
  starBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentRating = parseInt(btn.dataset.rating);
      starBtns.forEach((s, i) => {
        s.style.opacity = i < currentRating ? '1' : '0.3';
        s.style.transform = i < currentRating ? 'scale(1.2)' : 'scale(1)';
      });
    });
  });

  // Form submit
  const form = document.getElementById('tracker-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      saveTrackerEntry();
    });
  }
}

function saveTrackerEntry() {
  const entry = {
    date: document.getElementById('track-date').value,
    focus: parseInt(document.getElementById('track-focus').value) || 0,
    tasks: parseInt(document.getElementById('track-tasks').value) || 0,
    independence: parseInt(document.getElementById('track-independence').value),
    scripting: document.getElementById('track-scripting').value,
    stimming: document.getElementById('track-stimming').value,
    mood: document.getElementById('track-mood').value,
    notes: document.getElementById('track-notes').value,
    rating: currentRating,
    timestamp: Date.now(),
  };

  // Save to localStorage
  const entries = getTrackerEntries();
  entries.push(entry);
  localStorage.setItem('iamdad-tracker', JSON.stringify(entries));

  // Reset form
  currentRating = 0;
  document.getElementById('tracker-form').reset();
  document.getElementById('track-date').value = new Date().toISOString().split('T')[0];
  document.querySelectorAll('.star-btn').forEach((s) => {
    s.style.opacity = '0.3';
    s.style.transform = 'scale(1)';
  });

  // Reload data
  loadTrackerData();

  // Show success feedback
  showToast('✅ Đã lưu ghi nhận thành công!');
}

function getTrackerEntries() {
  try {
    return JSON.parse(localStorage.getItem('iamdad-tracker') || '[]');
  } catch {
    return [];
  }
}

function loadTrackerData() {
  const entries = getTrackerEntries();
  const entriesContainer = document.getElementById('tracker-entries');
  const totalSessions = document.getElementById('total-sessions');
  const avgFocus = document.getElementById('avg-focus');
  const avgTasks = document.getElementById('avg-tasks');
  const avgIndependence = document.getElementById('avg-independence');

  if (entries.length === 0) {
    entriesContainer.innerHTML = `
      <p style="text-align: center; color: var(--text-tertiary); padding: var(--space-8);">
        Chưa có ghi nhận nào. Hãy bắt đầu ghi lại buổi học đầu tiên! 🌱
      </p>
    `;
    return;
  }

  // Render entries (newest first)
  const sortedEntries = [...entries].sort((a, b) => b.timestamp - a.timestamp);
  entriesContainer.innerHTML = sortedEntries
    .map((entry) => {
      const moodEmojis = {
        happy: '😊',
        neutral: '😐',
        resistant: '😣',
        upset: '😢',
        excited: '🤩',
      };
      const scriptingLabels = { high: '🔴', medium: '🟡', low: '🟢', none: '✅' };
      const stimmingLabels = { high: '🔴', medium: '🟡', low: '🟢', none: '✅' };
      const independenceLabels = {
        1: 'Cần cầm tay',
        2: 'Cần chỉ tay',
        3: 'Ba mẹ cạnh',
        4: 'Ba mẹ xa',
        5: '⭐ Độc lập!',
      };

      const stars = Array.from({ length: 5 }, (_, i) =>
        `<span class="star ${i < entry.rating ? 'filled' : ''}">★</span>`
      ).join('');

      return `
        <div class="tracker-entry">
          <div>
            <div class="tracker-date">${formatDate(entry.date)}</div>
            <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-top: 4px;">
              ${moodEmojis[entry.mood] || '😐'}
            </div>
          </div>
          <div class="tracker-summary">
            <div><strong>${entry.focus} phút</strong> tập trung · <strong>${entry.tasks}</strong> bài · 
            Độc lập: ${independenceLabels[entry.independence] || '—'}</div>
            <div style="margin-top: 4px; font-size: var(--text-xs);">
              Nói: ${scriptingLabels[entry.scripting] || '—'} · 
              Stimming: ${stimmingLabels[entry.stimming] || '—'}
              ${entry.notes ? ` · "${entry.notes.substring(0, 60)}${entry.notes.length > 60 ? '...' : ''}"` : ''}
            </div>
          </div>
          <div class="tracker-score">${stars}</div>
        </div>
      `;
    })
    .join('');

  // Update summary stats
  if (totalSessions) totalSessions.textContent = entries.length;
  if (avgFocus) {
    const avg = entries.reduce((sum, e) => sum + e.focus, 0) / entries.length;
    avgFocus.textContent = Math.round(avg);
  }
  if (avgTasks) {
    const avg = entries.reduce((sum, e) => sum + e.tasks, 0) / entries.length;
    avgTasks.textContent = avg.toFixed(1);
  }
  if (avgIndependence) {
    const avg = entries.reduce((sum, e) => sum + e.independence, 0) / entries.length;
    avgIndependence.textContent = avg.toFixed(1);
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  return `${days[d.getDay()]} ${d.getDate()}/${d.getMonth() + 1}`;
}

// ============================================
// Toast Notification
// ============================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: var(--text-primary);
    color: var(--bg-primary);
    padding: 12px 24px;
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 600;
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    opacity: 0;
    transition: all 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ============================================
// Sidebar Toggle (Mobile)
// ============================================
function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

sidebarToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// ============================================
// Nav Item Clicks
// ============================================
navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(item.dataset.section);
  });
});

// ============================================
// Theme Toggle
// ============================================
function initTheme() {
  const saved = localStorage.getItem('iamdad-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('iamdad-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('iamdad-theme', 'dark');
  }
});

// ============================================
// Keyboard Navigation
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSidebar();
  }
});

// ============================================
// Initialize
// ============================================
initTheme();

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'home';
  if (sections[hash]) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }
}

window.addEventListener('hashchange', handleRoute);
handleRoute();
