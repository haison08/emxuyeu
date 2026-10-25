/**
 * emxuyeu - Sổ Gia Sư Đáng Yêu
 * Core Application Logic & State Management (Refined Layout)
 */

// Initial Sample State
const DEFAULT_SAMPLE_STATE = {
  theme: 'sakura',
  studentInfo: {
    name: 'Nguyễn Bảo Châu',
    grade: 'Lớp 9A2',
    subject: 'Toán Học',
    periodFrom: '2026-10-01',
    periodTo: '2026-10-25',
    avatar: ''
  },
  sessions: [
    { id: 's_1', date: '2026-10-02', startTime: '18:00', endTime: '20:00', hours: 2, fee: 200000 },
    { id: 's_2', date: '2026-10-05', startTime: '18:00', endTime: '20:00', hours: 2, fee: 200000 },
    { id: 's_3', date: '2026-10-09', startTime: '18:00', endTime: '20:00', hours: 2, fee: 200000 },
    { id: 's_4', date: '2026-10-12', startTime: '18:00', endTime: '20:00', hours: 2, fee: 200000 },
    { id: 's_5', date: '2026-10-16', startTime: '18:00', endTime: '20:00', hours: 2, fee: 200000 },
    { id: 's_6', date: '2026-10-19', startTime: '18:00', endTime: '20:00', hours: 2, fee: 200000 },
    { id: 's_7', date: '2026-10-22', startTime: '18:00', endTime: '20:00', hours: 2, fee: 200000 },
    { id: 's_8', date: '2026-10-25', startTime: '18:00', endTime: '20:00', hours: 2, fee: 200000 }
  ],
  evaluation: {
    attitude: { stars: 5, comment: 'Rất nghiêm túc, lễ phép, tập trung nghe giảng.' },
    diligence: { stars: 5, comment: 'Chủ động học tập và tích cực hỏi bài khi chưa hiểu.' },
    knowledge: { stars: 4, comment: 'Đại số nắm rất chắc, phần hình học cần vẽ hình cẩn thận hơn.' },
    progress: { stars: 5, comment: 'Tiến bộ vượt trội ở dạng toán giải bài toán bằng cách lập phương trình.' },
    overallComment: 'Em Châu là học sinh có tư duy tốt và tinh thần học hỏi cao. Trong tháng 10 này con đã khắc phục được tật vội vàng khi tính toán. Điểm bài thi thử cuối kỳ vừa rồi đạt 8.75/10.',
    parentAdvice: 'Nhờ gia đình tiếp tục đồng hành và động viên con duy trì việc tự học mỗi ngày. Thầy sẽ chuẩn bị thêm các đề nâng cao vào tháng sau.',
    stampBadge: 'progress',
    reportDate: '2026-10-25'
  }
};

// Application State
let appState = JSON.parse(JSON.stringify(DEFAULT_SAMPLE_STATE));
const STORAGE_KEY = 'emxuyeu_tutor_app_state_v3';

// -----------------------------------------------------------------------------
// DOM Elements Cache
// -----------------------------------------------------------------------------
const elements = {
  // Theme & Global
  body: document.body,
  themeSelector: document.getElementById('themeSelector'),
  btnLoadSample: document.getElementById('btnLoadSample'),
  btnResetForm: document.getElementById('btnResetForm'),
  
  // Mobile Tabs
  mobileTabsBar: document.getElementById('mobileTabsBar'),
  editorSection: document.getElementById('editorSection'),
  previewSection: document.getElementById('previewSection'),
  
  // Student Inputs
  studentName: document.getElementById('studentName'),
  studentGrade: document.getElementById('studentGrade'),
  subjectName: document.getElementById('subjectName'),
  periodFrom: document.getElementById('periodFrom'),
  periodTo: document.getElementById('periodTo'),
  
  // Avatar
  avatarInput: document.getElementById('avatarInput'),
  avatarImg: document.getElementById('avatarImg'),
  avatarPlaceholder: document.getElementById('avatarPlaceholder'),
  btnRemoveAvatar: document.getElementById('btnRemoveAvatar'),
  
  // Sessions
  sessionsContainer: document.getElementById('sessionsContainer'),
  emptySessionsState: document.getElementById('emptySessionsState'),
  btnAddSession: document.getElementById('btnAddSession'),
  
  // Finance Editor
  calcTotalSessions: document.getElementById('calcTotalSessions'),
  calcTotalHours: document.getElementById('calcTotalHours'),
  calcTotalFee: document.getElementById('calcTotalFee'),
  
  // Evaluation
  commentAttitude: document.getElementById('commentAttitude'),
  commentDiligence: document.getElementById('commentDiligence'),
  commentKnowledge: document.getElementById('commentKnowledge'),
  commentProgress: document.getElementById('commentProgress'),
  overallComment: document.getElementById('overallComment'),
  parentAdvice: document.getElementById('parentAdvice'),
  stampBadge: document.getElementById('stampBadge'),
  reportDate: document.getElementById('reportDate'),
  
  // Export & Toolbar
  btnExportImage: document.getElementById('btnExportImage'),
  btnExportPDF: document.getElementById('btnExportPDF'),
  exportOverlay: document.getElementById('exportOverlay'),
  exportStatusTitle: document.getElementById('exportStatusTitle'),
  exportStatusDesc: document.getElementById('exportStatusDesc'),
  toastContainer: document.getElementById('toastContainer'),
  
  // Printable Preview Elements
  reportPaper: document.getElementById('reportPaper'),
  repAvatarImg: document.getElementById('repAvatarImg'),
  repAvatarFallback: document.getElementById('repAvatarFallback'),
  repStudentName: document.getElementById('repStudentName'),
  repStudentGrade: document.getElementById('repStudentGrade'),
  repSubjectName: document.getElementById('repSubjectName'),
  repPeriodDisplay: document.getElementById('repPeriodDisplay'),
  repStampBadge: document.getElementById('repStampBadge'),
  repStampText: document.getElementById('repStampText'),
  repSessionCountBadge: document.getElementById('repSessionCountBadge'),
  repSessionsTable: document.getElementById('repSessionsTable'),
  repSessionsBody: document.getElementById('repSessionsBody'),
  repTotalSessions: document.getElementById('repTotalSessions'),
  repTotalHours: document.getElementById('repTotalHours'),
  repTotalFee: document.getElementById('repTotalFee'),
  repStarsAttitude: document.getElementById('repStarsAttitude'),
  repCommentAttitude: document.getElementById('repCommentAttitude'),
  repStarsDiligence: document.getElementById('repStarsDiligence'),
  repCommentDiligence: document.getElementById('repCommentDiligence'),
  repStarsKnowledge: document.getElementById('repStarsKnowledge'),
  repCommentKnowledge: document.getElementById('repCommentKnowledge'),
  repStarsProgress: document.getElementById('repStarsProgress'),
  repCommentProgress: document.getElementById('repCommentProgress'),
  repOverallComment: document.getElementById('repOverallComment'),
  repParentAdvice: document.getElementById('repParentAdvice'),
  repReportDate: document.getElementById('repReportDate')
};

// -----------------------------------------------------------------------------
// Formatters & Utility Functions
// -----------------------------------------------------------------------------
function formatCurrency(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return '0 đ';
  return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
}

function formatDateVN(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

function formatDateLongVN(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `Ngày ${parseInt(parts[2], 10)} tháng ${parseInt(parts[1], 10)} năm ${parts[0]}`;
  }
  return dateStr;
}

function getStarString(stars) {
  const count = Math.max(1, Math.min(5, Number(stars) || 5));
  return '⭐'.repeat(count) + '☆'.repeat(5 - count);
}

function calculateDurationHours(startTime, endTime) {
  if (!startTime || !endTime) return null;
  const [sH, sM] = startTime.split(':').map(Number);
  const [eH, eM] = endTime.split(':').map(Number);
  
  if (isNaN(sH) || isNaN(sM) || isNaN(eH) || isNaN(eM)) return null;

  let diffMinutes = (eH * 60 + eM) - (sH * 60 + sM);
  if (diffMinutes < 0) diffMinutes += 24 * 60; // Cross midnight edge case

  const hours = diffMinutes / 60;
  return Math.round(hours * 10) / 10; // Round to 1 decimal place
}

function debounce(func, delay = 250) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-circle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// -----------------------------------------------------------------------------
// State Management & LocalStorage
// -----------------------------------------------------------------------------
function saveStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }
}

const debouncedSaveState = debounce(saveStateToStorage, 300);

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        appState = { ...DEFAULT_SAMPLE_STATE, ...parsed };
        return true;
      }
    }
  } catch (err) {
    console.error('Failed to parse stored state:', err);
  }
  return false;
}

// -----------------------------------------------------------------------------
// UI Sync & Rendering
// -----------------------------------------------------------------------------
function renderEditorForm() {
  const { studentInfo, evaluation, theme } = appState;

  // Set Theme
  setTheme(theme || 'sakura', false);

  // Student Info
  elements.studentName.value = studentInfo.name || '';
  elements.studentGrade.value = studentInfo.grade || '';
  elements.subjectName.value = studentInfo.subject || '';
  elements.periodFrom.value = studentInfo.periodFrom || '';
  elements.periodTo.value = studentInfo.periodTo || '';

  // Avatar
  if (studentInfo.avatar) {
    elements.avatarImg.src = studentInfo.avatar;
    elements.avatarImg.classList.remove('hidden');
    elements.avatarPlaceholder.classList.add('hidden');
    elements.btnRemoveAvatar.classList.remove('hidden');
  } else {
    elements.avatarImg.src = '';
    elements.avatarImg.classList.add('hidden');
    elements.avatarPlaceholder.classList.remove('hidden');
    elements.btnRemoveAvatar.classList.add('hidden');
  }

  // Evaluation
  elements.commentAttitude.value = evaluation.attitude.comment || '';
  elements.commentDiligence.value = evaluation.diligence.comment || '';
  elements.commentKnowledge.value = evaluation.knowledge.comment || '';
  elements.commentProgress.value = evaluation.progress.comment || '';
  elements.overallComment.value = evaluation.overallComment || '';
  elements.parentAdvice.value = evaluation.parentAdvice || '';
  elements.stampBadge.value = evaluation.stampBadge || 'progress';
  elements.reportDate.value = evaluation.reportDate || new Date().toISOString().split('T')[0];

  // Star Ratings in Editor
  renderStarsInEditor('ratingAttitude', evaluation.attitude.stars);
  renderStarsInEditor('ratingDiligence', evaluation.diligence.stars);
  renderStarsInEditor('ratingKnowledge', evaluation.knowledge.stars);
  renderStarsInEditor('ratingProgress', evaluation.progress.stars);

  // Render Sessions Rows
  renderSessionsList();

  // Update Calculations & Live Preview
  updateCalculationsAndPreview();
}

function renderStarsInEditor(containerDataName, starCount) {
  const container = document.querySelector(`.star-rating[data-name="${containerDataName}"]`);
  if (!container) return;

  const buttons = container.querySelectorAll('.star-btn');
  buttons.forEach(btn => {
    const val = parseInt(btn.dataset.value, 10);
    if (val <= starCount) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderSessionsList() {
  const { sessions } = appState;
  elements.sessionsContainer.innerHTML = '';

  if (!sessions || sessions.length === 0) {
    elements.emptySessionsState.classList.remove('hidden');
    return;
  }
  elements.emptySessionsState.classList.add('hidden');

  sessions.forEach((s, idx) => {
    const row = document.createElement('div');
    row.className = 'session-row-card';
    row.dataset.id = s.id;

    row.innerHTML = `
      <div class="session-row-top">
        <span class="session-index-pill">
          <i class="fa-solid fa-bookmark"></i> Buổi #${idx + 1}
        </span>
        <div style="display: flex; gap: 6px;">
          <button type="button" class="btn-icon-danger btn-duplicate-session" title="Nhân bản buổi này" data-id="${s.id}">
            <i class="fa-regular fa-copy" style="color: var(--theme-primary);"></i>
          </button>
          <button type="button" class="btn-icon-danger btn-delete-session" title="Xóa buổi này" data-id="${s.id}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      <div class="session-fields-grid">
        <div class="form-group">
          <span class="session-col-label"><i class="fa-regular fa-calendar"></i> Ngày học</span>
          <input type="date" class="session-field-input session-date" value="${s.date || ''}" data-field="date">
        </div>

        <div class="form-group">
          <span class="session-col-label"><i class="fa-regular fa-clock"></i> Bắt đầu</span>
          <input type="time" class="session-field-input session-start-time" value="${s.startTime || '18:00'}" data-field="startTime">
        </div>

        <div class="form-group">
          <span class="session-col-label"><i class="fa-solid fa-hourglass-end"></i> Kết thúc</span>
          <input type="time" class="session-field-input session-end-time" value="${s.endTime || '20:00'}" data-field="endTime">
        </div>

        <div class="form-group">
          <span class="session-col-label"><i class="fa-solid fa-hourglass-half"></i> Số giờ</span>
          <input type="number" step="0.5" min="0.5" max="10" class="session-field-input session-hours" value="${s.hours || 2}" data-field="hours">
        </div>

        <div class="form-group">
          <span class="session-col-label"><i class="fa-solid fa-tag"></i> Học phí (VNĐ)</span>
          <input type="number" step="10000" min="0" class="session-field-input session-fee" value="${s.fee || 0}" data-field="fee">
        </div>
      </div>
    `;

    elements.sessionsContainer.appendChild(row);
  });
}

// -----------------------------------------------------------------------------
// Live Calculations & Live Preview Sync
// -----------------------------------------------------------------------------
function updateCalculationsAndPreview() {
  const { studentInfo, sessions, evaluation } = appState;

  // 1. Calculations
  const totalSessions = sessions.length;
  const totalHours = sessions.reduce((sum, item) => sum + (Number(item.hours) || 0), 0);
  const totalFee = sessions.reduce((sum, item) => sum + (Number(item.fee) || 0), 0);

  // 2. Editor Stats
  elements.calcTotalSessions.textContent = totalSessions;
  elements.calcTotalHours.textContent = totalHours;
  elements.calcTotalFee.textContent = formatCurrency(totalFee);

  // 3. Update Preview: Student Meta
  elements.repStudentName.textContent = studentInfo.name || 'Họ và tên học sinh';
  elements.repStudentGrade.textContent = studentInfo.grade || 'Lớp...';
  elements.repSubjectName.textContent = studentInfo.subject || 'Môn học';

  // Period Display
  if (studentInfo.periodFrom && studentInfo.periodTo) {
    elements.repPeriodDisplay.textContent = `Kỳ học: ${formatDateVN(studentInfo.periodFrom)} - ${formatDateVN(studentInfo.periodTo)}`;
  } else if (studentInfo.periodFrom) {
    elements.repPeriodDisplay.textContent = `Từ ngày: ${formatDateVN(studentInfo.periodFrom)}`;
  } else {
    elements.repPeriodDisplay.textContent = `Tháng ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`;
  }

  // Avatar in preview
  if (studentInfo.avatar) {
    elements.repAvatarImg.src = studentInfo.avatar;
    elements.repAvatarImg.classList.remove('hidden');
    elements.repAvatarFallback.classList.add('hidden');
  } else {
    elements.repAvatarImg.src = '';
    elements.repAvatarImg.classList.add('hidden');
    elements.repAvatarFallback.classList.remove('hidden');
  }

  // Stamp Badge in preview
  const stampMap = {
    progress: { text: 'Tiến Bộ Vượt Bậc', icon: 'fa-award', bg: 'linear-gradient(135deg, #fff275, #ffb03a)', color: '#643900' },
    star: { text: 'Ngôi Sao Chăm Chỉ', icon: 'fa-star', bg: 'linear-gradient(135deg, #ffd1dc, #ff9ebb)', color: '#61162d' },
    excellent: { text: 'Học Tập Xuất Sắc', icon: 'fa-trophy', bg: 'linear-gradient(135deg, #b8f2e6, #51cf66)', color: '#0b421a' },
    effort: { text: 'Nỗ Lực Đáng Khen', icon: 'fa-dumbbell', bg: 'linear-gradient(135deg, #d0bfff, #9775fa)', color: '#2d1163' },
    none: null
  };

  const stampConfig = stampMap[evaluation.stampBadge] || stampMap.progress;
  if (!stampConfig) {
    elements.repStampBadge.classList.add('hidden');
  } else {
    elements.repStampBadge.classList.remove('hidden');
    elements.repStampBadge.style.background = stampConfig.bg;
    elements.repStampBadge.style.color = stampConfig.color;
    elements.repStampBadge.innerHTML = `<i class="fa-solid ${stampConfig.icon}"></i><span>${stampConfig.text}</span>`;
  }

  // 4. Update Preview: Table of Sessions (with Start & End Time)
  elements.repSessionCountBadge.textContent = `${totalSessions} Buổi Học`;
  elements.repSessionsBody.innerHTML = '';

  if (sessions.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="5" style="text-align:center; padding: 22px; color: #a491ac;">Chưa có buổi học nào được thêm.</td>`;
    elements.repSessionsBody.appendChild(tr);
  } else {
    sessions.forEach((s, idx) => {
      const tr = document.createElement('tr');
      const dateStr = formatDateVN(s.date);
      const timeRangeStr = (s.startTime && s.endTime) ? `${s.startTime} – ${s.endTime}` : (s.startTime || '--:--');

      tr.innerHTML = `
        <td class="rep-cell-stt">${idx + 1}</td>
        <td>
          <div class="rep-cell-date">${dateStr || '--'}</div>
        </td>
        <td>
          <div class="rep-cell-timerange"><i class="fa-regular fa-clock"></i> ${timeRangeStr}</div>
        </td>
        <td class="rep-cell-duration">${s.hours || 0} giờ</td>
        <td class="rep-cell-fee">${formatCurrency(s.fee)}</td>
      `;
      elements.repSessionsBody.appendChild(tr);
    });
  }

  // 5. Update Preview: Financial Summary (3 balanced pills)
  elements.repTotalSessions.textContent = `${totalSessions} buổi`;
  elements.repTotalHours.textContent = `${totalHours} giờ`;
  elements.repTotalFee.textContent = formatCurrency(totalFee);

  // 6. Update Preview: Evaluation Stars & Comments
  elements.repStarsAttitude.textContent = getStarString(evaluation.attitude.stars);
  elements.repCommentAttitude.textContent = evaluation.attitude.comment || 'Nghiêm túc, tích cực.';

  elements.repStarsDiligence.textContent = getStarString(evaluation.diligence.stars);
  elements.repCommentDiligence.textContent = evaluation.diligence.comment || 'Tự giác hoàn thành bài tập.';

  elements.repStarsKnowledge.textContent = getStarString(evaluation.knowledge.stars);
  elements.repCommentKnowledge.textContent = evaluation.knowledge.comment || 'Nắm vững kiến thức trọng tâm.';

  elements.repStarsProgress.textContent = getStarString(evaluation.progress.stars);
  elements.repCommentProgress.textContent = evaluation.progress.comment || 'Tiến bộ rõ rệt qua từng buổi.';

  elements.repOverallComment.textContent = evaluation.overallComment || 'Con có tinh thần học tập tốt, tiến bộ đều qua các buổi học.';
  elements.repParentAdvice.textContent = evaluation.parentAdvice || 'Nhờ phụ huynh đồng hành và động viên con duy trì việc tự học mỗi ngày.';

  // 7. Update Preview: Footer Clean Date
  elements.repReportDate.textContent = formatDateLongVN(evaluation.reportDate || new Date().toISOString().split('T')[0]);

  // Save changes
  debouncedSaveState();
}

// -----------------------------------------------------------------------------
// Event Listeners: Student Info & Dynamic Sessions
// -----------------------------------------------------------------------------
function setupEventListeners() {
  // Input fields binding
  const simpleBinds = [
    { el: elements.studentName, path: ['studentInfo', 'name'] },
    { el: elements.studentGrade, path: ['studentInfo', 'grade'] },
    { el: elements.subjectName, path: ['studentInfo', 'subject'] },
    { el: elements.periodFrom, path: ['studentInfo', 'periodFrom'] },
    { el: elements.periodTo, path: ['studentInfo', 'periodTo'] },
    { el: elements.commentAttitude, path: ['evaluation', 'attitude', 'comment'] },
    { el: elements.commentDiligence, path: ['evaluation', 'diligence', 'comment'] },
    { el: elements.commentKnowledge, path: ['evaluation', 'knowledge', 'comment'] },
    { el: elements.commentProgress, path: ['evaluation', 'progress', 'comment'] },
    { el: elements.overallComment, path: ['evaluation', 'overallComment'] },
    { el: elements.parentAdvice, path: ['evaluation', 'parentAdvice'] },
    { el: elements.stampBadge, path: ['evaluation', 'stampBadge'] },
    { el: elements.reportDate, path: ['evaluation', 'reportDate'] }
  ];

  simpleBinds.forEach(({ el, path }) => {
    if (!el) return;
    el.addEventListener('input', () => {
      let val = el.value;
      let target = appState;
      for (let i = 0; i < path.length - 1; i++) {
        target = target[path[i]];
      }
      target[path[path.length - 1]] = val;

      updateCalculationsAndPreview();
    });
  });

  // Avatar Image Upload
  elements.avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Vui lòng chọn tệp hình ảnh!', 'error');
      return;
    }

    if (file.size > 4 * 1024 * 1024) {
      showToast('Kích thước ảnh nên nhỏ hơn 4MB', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      appState.studentInfo.avatar = dataUrl;
      elements.avatarImg.src = dataUrl;
      elements.avatarImg.classList.remove('hidden');
      elements.avatarPlaceholder.classList.add('hidden');
      elements.btnRemoveAvatar.classList.remove('hidden');
      updateCalculationsAndPreview();
      showToast('Đã tải ảnh lên thành công!', 'success');
    };
    reader.readAsDataURL(file);
  });

  elements.btnRemoveAvatar.addEventListener('click', () => {
    appState.studentInfo.avatar = '';
    elements.avatarInput.value = '';
    elements.avatarImg.src = '';
    elements.avatarImg.classList.add('hidden');
    elements.avatarPlaceholder.classList.remove('hidden');
    elements.btnRemoveAvatar.classList.add('hidden');
    updateCalculationsAndPreview();
  });

  // Star Rating Click Handlers
  document.querySelectorAll('.star-rating').forEach(container => {
    const dataName = container.dataset.name;
    const criteriaKey = dataName.replace('rating', '').toLowerCase();

    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.star-btn');
      if (!btn) return;

      const starValue = parseInt(btn.dataset.value, 10);
      if (appState.evaluation[criteriaKey]) {
        appState.evaluation[criteriaKey].stars = starValue;
      }
      renderStarsInEditor(dataName, starValue);
      updateCalculationsAndPreview();
    });
  });

  // Add Session Button
  elements.btnAddSession.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0];
    const defaultFee = appState.sessions.length > 0 
      ? appState.sessions[appState.sessions.length - 1].fee 
      : 200000;

    const newSession = {
      id: 's_' + Date.now(),
      date: today,
      startTime: '18:00',
      endTime: '20:00',
      hours: 2,
      fee: defaultFee
    };

    appState.sessions.push(newSession);
    renderSessionsList();
    updateCalculationsAndPreview();
    showToast('Đã thêm 1 buổi học mới!', 'success');

    // Scroll to new session
    const lastCard = elements.sessionsContainer.lastElementChild;
    if (lastCard) {
      lastCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Delegate Events for Dynamic Session List (Delete, Duplicate, Field Changes)
  elements.sessionsContainer.addEventListener('input', (e) => {
    const target = e.target;
    const card = target.closest('.session-row-card');
    if (!card) return;

    const id = card.dataset.id;
    const session = appState.sessions.find(s => s.id === id);
    if (!session) return;

    const field = target.dataset.field;
    if (field === 'hours' || field === 'fee') {
      session[field] = Number(target.value) || 0;
    } else {
      session[field] = target.value;
    }

    // Auto calculate hours if user edits startTime or endTime
    if (field === 'startTime' || field === 'endTime') {
      const autoHours = calculateDurationHours(session.startTime, session.endTime);
      if (autoHours !== null && autoHours > 0) {
        session.hours = autoHours;
        const hoursInput = card.querySelector('.session-hours');
        if (hoursInput) hoursInput.value = autoHours;
      }
    }

    updateCalculationsAndPreview();
  });

  elements.sessionsContainer.addEventListener('click', (e) => {
    // Delete
    const btnDelete = e.target.closest('.btn-delete-session');
    if (btnDelete) {
      const id = btnDelete.dataset.id;
      if (confirm('Bạn có chắc muốn xóa buổi học này không?')) {
        appState.sessions = appState.sessions.filter(s => s.id !== id);
        renderSessionsList();
        updateCalculationsAndPreview();
        showToast('Đã xóa buổi học.', 'info');
      }
      return;
    }

    // Duplicate
    const btnDuplicate = e.target.closest('.btn-duplicate-session');
    if (btnDuplicate) {
      const id = btnDuplicate.dataset.id;
      const targetSession = appState.sessions.find(s => s.id === id);
      if (targetSession) {
        const copy = { ...targetSession, id: 's_' + Date.now() };
        const idx = appState.sessions.findIndex(s => s.id === id);
        appState.sessions.splice(idx + 1, 0, copy);
        renderSessionsList();
        updateCalculationsAndPreview();
        showToast('Đã nhân bản buổi học!', 'success');
      }
      return;
    }
  });

  // Quick Sample Data Button
  elements.btnLoadSample.addEventListener('click', () => {
    if (confirm('Nạp bộ dữ liệu mẫu đầy đủ để trải nghiệm ngay?')) {
      appState = JSON.parse(JSON.stringify(DEFAULT_SAMPLE_STATE));
      renderEditorForm();
      showToast('Đã nạp dữ liệu mẫu thành công!', 'success');
    }
  });

  // Reset Form
  elements.btnResetForm.addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn làm mới toàn bộ phiếu không?')) {
      appState = {
        theme: appState.theme || 'sakura',
        studentInfo: {
          name: '',
          grade: '',
          subject: '',
          periodFrom: '',
          periodTo: '',
          avatar: ''
        },
        sessions: [],
        evaluation: {
          attitude: { stars: 5, comment: '' },
          diligence: { stars: 5, comment: '' },
          knowledge: { stars: 5, comment: '' },
          progress: { stars: 5, comment: '' },
          overallComment: '',
          parentAdvice: '',
          stampBadge: 'progress',
          reportDate: new Date().toISOString().split('T')[0]
        }
      };
      renderEditorForm();
      showToast('Đã làm mới biểu mẫu.', 'info');
    }
  });

  // Theme Selector Bubbles
  elements.themeSelector.addEventListener('click', (e) => {
    const bubble = e.target.closest('.theme-bubble');
    if (!bubble) return;
    const themeName = bubble.dataset.theme;
    setTheme(themeName, true);
  });

  // Mobile Tabs
  if (elements.mobileTabsBar) {
    elements.mobileTabsBar.addEventListener('click', (e) => {
      const tabBtn = e.target.closest('.mobile-tab-btn');
      if (!tabBtn) return;

      const tab = tabBtn.dataset.tab;
      document.querySelectorAll('.mobile-tab-btn').forEach(b => b.classList.remove('active'));
      tabBtn.classList.add('active');

      if (tab === 'preview') {
        elements.editorSection.classList.add('mobile-hidden');
        elements.previewSection.classList.add('mobile-active');
        elements.previewSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        elements.editorSection.classList.remove('mobile-hidden');
        elements.previewSection.classList.remove('mobile-active');
      }
    });
  }

  // Export Buttons
  elements.btnExportImage.addEventListener('click', exportAsImage);
  elements.btnExportPDF.addEventListener('click', exportAsPDF);
}

function setTheme(themeName, shouldSave = true) {
  elements.body.setAttribute('data-theme', themeName);
  appState.theme = themeName;

  document.querySelectorAll('.theme-bubble').forEach(b => {
    if (b.dataset.theme === themeName) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  if (shouldSave) {
    debouncedSaveState();
  }
}

// -----------------------------------------------------------------------------
// Exporting: High-Resolution Image (PNG)
// -----------------------------------------------------------------------------
async function exportAsImage() {
  const paper = elements.reportPaper;
  if (!paper) return;

  const studentNameClean = (appState.studentInfo.name || 'HocSinh')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '_');
  
  const dateStamp = appState.evaluation.reportDate || new Date().toISOString().split('T')[0];
  const fileName = `PhieuDanhGia_${studentNameClean}_${dateStamp}.png`;

  showExportLoading('Đang xử lý ảnh chất lượng cao...', 'Hệ thống đang chụp phiếu độ phân giải 2.5x cực nét để gửi Zalo/phụ huynh');

  try {
    await new Promise(r => setTimeout(r, 200));

    const canvas = await html2canvas(paper, {
      scale: 2.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      onclone: (clonedDoc) => {
        const clonedPaper = clonedDoc.getElementById('reportPaper');
        if (clonedPaper) {
          clonedPaper.style.boxShadow = 'none';
          clonedPaper.style.maxWidth = '720px';
          clonedPaper.style.margin = '0 auto';
        }
      }
    });

    canvas.toBlob((blob) => {
      if (!blob) throw new Error('Không tạo được file ảnh');

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      hideExportLoading();
      showToast('Đã tải ảnh PNG thành công! Bạn có thể gửi ngay cho phụ huynh.', 'success');
    }, 'image/png');

  } catch (error) {
    console.error('Lỗi khi xuất ảnh:', error);
    hideExportLoading();
    showToast('Lỗi khi xuất ảnh: ' + (error.message || 'Vui lòng thử lại'), 'error');
  }
}

// -----------------------------------------------------------------------------
// Exporting: High-Quality PDF (A4 Format)
// -----------------------------------------------------------------------------
async function exportAsPDF() {
  const paper = elements.reportPaper;
  if (!paper) return;

  const studentNameClean = (appState.studentInfo.name || 'HocSinh')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '_');
  
  const dateStamp = appState.evaluation.reportDate || new Date().toISOString().split('T')[0];
  const fileName = `PhieuDanhGia_${studentNameClean}_${dateStamp}.pdf`;

  showExportLoading('Đang tạo tệp PDF A4...', 'Đang render tài liệu và chia trang tự động');

  try {
    await new Promise(r => setTimeout(r, 200));

    const canvas = await html2canvas(paper, {
      scale: 2.2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      onclone: (clonedDoc) => {
        const clonedPaper = clonedDoc.getElementById('reportPaper');
        if (clonedPaper) {
          clonedPaper.style.boxShadow = 'none';
          clonedPaper.style.maxWidth = '740px';
          clonedPaper.style.margin = '0 auto';
        }
      }
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 210;
    const pdfHeight = 297;
    const margin = 10;
    const contentWidth = pdfWidth - (margin * 2);

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgHeightInPdf = (canvasHeight * contentWidth) / canvasWidth;

    if (imgHeightInPdf <= (pdfHeight - (margin * 2))) {
      pdf.addImage(imgData, 'JPEG', margin, margin, contentWidth, imgHeightInPdf);
    } else {
      let heightLeft = imgHeightInPdf;
      let position = margin;
      const pageHeightUsable = pdfHeight - (margin * 2);

      pdf.addImage(imgData, 'JPEG', margin, position, contentWidth, imgHeightInPdf);
      heightLeft -= pageHeightUsable;

      while (heightLeft > 0) {
        position = position - pageHeightUsable;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', margin, position, contentWidth, imgHeightInPdf);
        heightLeft -= pageHeightUsable;
      }
    }

    pdf.save(fileName);
    hideExportLoading();
    showToast('Đã tải tệp PDF thành công!', 'success');

  } catch (error) {
    console.error('Lỗi khi xuất PDF:', error);
    hideExportLoading();
    showToast('Lỗi khi xuất PDF: ' + (error.message || 'Vui lòng thử lại'), 'error');
  }
}

function showExportLoading(title, desc) {
  if (elements.exportStatusTitle) elements.exportStatusTitle.textContent = title;
  if (elements.exportStatusDesc) elements.exportStatusDesc.textContent = desc;
  elements.exportOverlay.classList.add('active');
}

function hideExportLoading() {
  elements.exportOverlay.classList.remove('active');
}

// -----------------------------------------------------------------------------
// App Initialization
// -----------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  const hasSaved = loadStateFromStorage();
  renderEditorForm();
  setupEventListeners();

  if (hasSaved) {
    showToast('Đã khôi phục dữ liệu đã lưu gần nhất.', 'info');
  } else {
    showToast('Chào mừng đến với emxuyeu! Dữ liệu mẫu đã sẵn sàng.', 'success');
  }
});
