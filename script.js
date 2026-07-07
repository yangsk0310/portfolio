/* =============================================
   챗봇 시스템 프롬프트
   ============================================= */
const SYSTEM_PROMPT = `너는 이 포트폴리오 주인의 페르소나 비서야. 방문자에게 밝고 정중하게, 주인을 잘 아는 사람처럼 답해. 답은 2~4문장, 마크다운 기호(별표 등) 없이 평문으로만.
아래 이력 지식을 근거로 답하되, 지식에 없는 질문이 오면 아는 선에서 자연스럽게 답하고 "자세한 건 저에게 직접 물어보시는 게 정확해요. 연락처를 참고해 주세요!"로 부드럽게 연결해. 과장하거나 없는 경력을 만들어내지 마.

이력 지식:

① 한 줄 소개
문헌정보학과 경제학을 복수전공한 양성경은 정보를 구조화하고 데이터 기반 기획을 금융 데이터·정보 서비스 업무에 적용하는 데 관심이 있는 인재이며, 금융 공공기관·은행권을 목표로 하고 있습니다.

② 기본 정보
- 소속: 성균관대학교 문헌정보학과 (23학번) / 경제학 복수전공
- 희망 진로: 금융 공공기관, 은행권
- 학력: 2020-2022 부산외국어고등학교 (영어·독일어 전공), 2023-현재 성균관대학교 (서울)
- 언어: 영어, 독일어 (고등학교 수준)
- 컴퓨터 활용: 한글 상, 파워포인트 상, 엑셀 상, 포토샵 중
- 주요 자격: 2종 자동 운전면허 (2023-08-22)
- 봉사활동: 초등학생 영어 책 읽어주기 (2017-2019), 초등학생 교육 봉사 (2020-2022)

③ 경험 요약
- 2021-2022 부산외국어고등학교 학급 반장: 학급 대표·운영, 학급회의 주도, 학생 간 소통·협업 강화
- 2023-현재 성균관대학교 프레시맨가이드 재정팀: 대계열제 신입생 LC 담당, 학부대학 행사 기획·진행, 예산·결산 집행, 물품 조사
- 2023-현재 LocalSync(니행내행) 프로젝트 – 기획·로직 설계: 35종 공공데이터 기반 AI 웹플랫폼 MVP 배포, "실속 계산기" 설계·재무 로직 기획, 국민행복 서비스 발굴·창업경진대회·SK이노베이션 AI Impact Solution 공모전 출품
- 2025-04~06 해커스 서포터즈 5기: 마케팅·홍보 활동 수행, 성실·적극적 자세
- 2025-04~06 세잎(Future Tomorrow 일경험) – 게임·IP SNS 마케팅: AI 영상 콘텐츠 4채널(꾸룩이·이겜봤냐·CrunchGems·DinoTycoon Universe) 기획·운용, 누적 조회수 16.5만 회 초과, 기업·멘토 피드백 수집·포트폴리오 모델 검증
- 2025-06-28~07-06 Brown University Global Summer Program 멘토: EAST 0315 "Deep Dive into the Korea Energy Sector" 담당, 한국 문화·현지 적응 지원, 문화·언어 교류 촉진으로 현지 만족도 92% 달성
- 2025-08-07~13 SKKU HUSS BRIDGE Builder 글로벌 프로젝트 (인도네시아): 사누르 지역 장기체류 외국인·지역 정착 현상 현장조사 및 설문 150명 실시, "문화 기반 몰입형 관광·장기체류 웰니스 마을" 정책적 시사점 도출, 국제 학술대회 발표
- 2017-2022 초등학생 교육 봉사: 영어·독일어 읽기 지도, 교육 지원

④ 강점 5가지
- 정보 구조화·정책 설계 능력: LocalSync 프로젝트에서 35종 공공데이터 기반 AI 웹플랫폼 기획·로직 설계, "실속 계산기" 재무 분석 로직 개발
- 데이터 기반 재무·비용 분석 역량: "실속 계산기"를 통해 지역별 세후소득·주거비·지원금·3년 정착비용을 비교·시각화, 국민행복 서비스·창업경진대회 제출
- 다문화·다언어 소통·글로벌 협업 경험: 영어·독일어 고등학교 전공, 인도네시아 BRIDGE Builder 현장조사·대학 발표, Brown University 멘토 활동 (한국-미국 학생 간 교류)
- 프로젝트·예산 관리 리더십: 프레시맨가이드 재정팀에서 행사 기획·예산·결산 집행, 물품 조사, 팀 내 재정 책임 수행
- 회복력·성장 지향성: 자기소개에 "외부 평가에 흔들리기보다 스스로의 가치를 지키며 성장"·"어려운 상황에서도 다시 일어나는 회복력"을 강조, 다양한 학부·대외활동을 성공적으로 수행

⑤ 예상 질문 & 답변
Q: 문헌정보학과 경제학을 복수전공한 배경을 어떻게 금융 분야에 연결하고자 하나요?
A: 문헌정보학에서 습득한 데이터·정보 구조화·분석 역량을 경제학·거시·미시·노동경제학 지식과 결합해 금융 데이터·정책 정보로 전환하고자 합니다. 특히, Vercel에 배포한 AI 기반 웹서비스(LocalSync)에서 공공데이터를 활용한 정보 서비스 경험을 금융 데이터와 연계할 수 있다고 생각합니다.

Q: 인도네시아 해외 출장 연구에서 구체적으로 어떤 현장조사를 진행했나요?
A: 사누르 지역의 장기체류 외국인·지역 정착 현상을 주제로, 현지 가이드·호텔 지배인·디지털 마케터·한식당 운영자와 면담하고, 사누르 해변 관광객을 대상으로 체류 기간·지역 매력 요인에 대한 설문 조사(기획·실시·수집)를 직접 수행했습니다. 이를 바탕으로 "문화 기반 몰입형 관광·장기체류 웰니스 마을"이라는 정책적 시사점을 도출했습니다.

Q: 반장·프레시맨가이드 재정팀·Brown 멘토 등 다양한 리더십 경험이 현재 직무에 어떻게 도움이 될까요?
A: 반장·프레시맨가이드 재정팀에서 팀 운영·예산 관리·행사 기획을 경험했으며, Brown 멘토로 한국 문화와 현지 적응을 지원하면서 학생 개별 맞춤 지도와 협업 조율 능력을 키웠습니다. 이러한 경험들은 조직 내 목표 설정, 일정·예산 관리, 다인원 협업 및 소통 능력을 강화해, 금융 공공기관·은행권의 프로젝트·정책 업무에 바로 적용할 수 있습니다.`;

/* =============================================
   포트폴리오 인터랙션 스크립트
   ============================================= */

(function () {
  'use strict';

  /* ----- DOM 요소 참조 ----- */
  const navbar = document.getElementById('navbar');
  const themeToggle = document.getElementById('themeToggle');
  const navBurger = document.getElementById('navBurger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');
  const revealElements = document.querySelectorAll('.reveal');

  const THEME_KEY = 'portfolio-theme';


  /* =============================================
     다크모드 토글 — localStorage에 선택 저장
     ============================================= */
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  applyTheme(getPreferredTheme());

  themeToggle.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });


  /* =============================================
     내비게이션 스크롤 효과 — 배경·그림자
     ============================================= */
  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();


  /* =============================================
     내비 링크 클릭 — 해당 섹션으로 부드럽게 스크롤
     ============================================= */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      navMenu.classList.remove('navbar__nav--open');
      navBurger.classList.remove('navbar__burger--active');
    });
  });

  document.querySelector('.navbar__logo').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
    navMenu.classList.remove('navbar__nav--open');
    navBurger.classList.remove('navbar__burger--active');
  });


  /* =============================================
     모바일 햄버거 메뉴 토글
     ============================================= */
  navBurger.addEventListener('click', function () {
    navMenu.classList.toggle('navbar__nav--open');
    navBurger.classList.toggle('navbar__burger--active');
  });


  /* =============================================
     스크롤 등장 효과 — IntersectionObserver
     ============================================= */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }


  /* =============================================
     챗봇
     ============================================= */
  const chatbot = document.getElementById('chatbot');
  const chatToggle = document.getElementById('chatToggle');
  const chatClose = document.getElementById('chatClose');
  const chatPanel = document.getElementById('chatPanel');
  const chatMessages = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');

  const UPSTAGE_URL = 'https://api.upstage.ai/v1/chat/completions';
  const API_KEY_STORAGE = 'upstage-api-key';
  const isLocalFile = location.protocol === 'file:';

  let conversationHistory = [];
  let isSending = false;


  /* ----- 챗봇 UI 토글 ----- */
  function openChat() {
    chatbot.classList.add('chatbot--open');
    chatPanel.setAttribute('aria-hidden', 'false');
    chatInput.focus();
  }

  function closeChat() {
    chatbot.classList.remove('chatbot--open');
    chatPanel.setAttribute('aria-hidden', 'true');
  }

  chatToggle.addEventListener('click', function () {
    if (chatbot.classList.contains('chatbot--open')) {
      closeChat();
    } else {
      openChat();
    }
  });

  chatClose.addEventListener('click', closeChat);


  /* ----- 메시지 렌더링 ----- */
  function appendMessage(text, role) {
    const div = document.createElement('div');
    div.className = 'chatbot__message chatbot__message--' + role;
    const p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
  }

  function showLoading() {
    const div = document.createElement('div');
    div.className = 'chatbot__loading';
    div.id = 'chatLoading';
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      dot.className = 'chatbot__loading-dot';
      div.appendChild(dot);
    }
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function hideLoading() {
    const loading = document.getElementById('chatLoading');
    if (loading) loading.remove();
  }

  function setInputDisabled(disabled) {
    chatInput.disabled = disabled;
    chatSend.disabled = disabled;
    isSending = disabled;
  }


  /* ----- 로컬 파일 모드: API 키 관리 ----- */
  function getStoredApiKey() {
    return localStorage.getItem(API_KEY_STORAGE);
  }

  function saveApiKey(key) {
    localStorage.setItem(API_KEY_STORAGE, key);
  }

  function clearApiKey() {
    localStorage.removeItem(API_KEY_STORAGE);
  }

  function promptForApiKey() {
    const key = window.prompt('Upstage API 키를 붙여넣어 주세요 (up_으로 시작)');
    if (key && key.trim()) {
      saveApiKey(key.trim());
      return key.trim();
    }
    return null;
  }


  /* ----- API 요청 (환경별 분기) ----- */
  async function requestChatCompletion(messages) {
    if (isLocalFile) {
      let apiKey = getStoredApiKey();
      if (!apiKey) {
        apiKey = promptForApiKey();
        if (!apiKey) {
          throw { type: 'cancelled', message: 'API 키가 필요합니다.' };
        }
      }

      const response = await fetch(UPSTAGE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
          model: 'solar-pro3',
          messages: messages
        })
      });

      const data = await response.json();

      if (response.status === 401) {
        clearApiKey();
        throw { type: 'auth', message: '키가 올바르지 않아요. 다시 질문하시면 새로 입력받을게요.' };
      }

      if (!response.ok) {
        throw { type: 'error', message: '잠시 후 다시 시도해 주세요.' };
      }

      return data;
    }

    // 배포 환경: 같은 도메인의 /api/chat 으로 POST
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: messages })
    });

    const data = await response.json();

    if (!response.ok) {
      throw { type: 'error', message: '잠시 후 다시 시도해 주세요.' };
    }

    return data;
  }


  /* ----- 메시지 전송 ----- */
  async function handleSend(text) {
    if (isSending || !text.trim()) return;

    const userText = text.trim();
    chatInput.value = '';
    appendMessage(userText, 'user');

    conversationHistory.push({ role: 'user', content: userText });

    setInputDisabled(true);
    showLoading();

    try {
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory
      ];

      const data = await requestChatCompletion(messages);
      hideLoading();

      const reply = data.choices && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content
        : null;

      if (reply) {
        appendMessage(reply, 'bot');
        conversationHistory.push({ role: 'assistant', content: reply });
      } else {
        appendMessage('잠시 후 다시 시도해 주세요.', 'error');
      }
    } catch (err) {
      hideLoading();

      if (err.type === 'auth') {
        appendMessage(err.message, 'error');
      } else if (err.type === 'cancelled') {
        appendMessage('API 키 없이는 답변을 드릴 수 없어요.', 'error');
      } else {
        appendMessage('잠시 후 다시 시도해 주세요.', 'error');
      }
    } finally {
      setInputDisabled(false);
      chatInput.focus();
    }
  }

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    handleSend(chatInput.value);
  });

})();
