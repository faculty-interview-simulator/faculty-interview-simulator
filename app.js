const FREE_QUESTIONS_30 = [
  {
    id: "R01",
    question: "Tell us about your research.",
    primaryCategory: "Research",
    categories: ["research", "agenda"],
    answerAngle: ["Start with the problem area and why it matters.", "Name your main contribution in one sentence.", "End with the future research agenda you would build as faculty."]
  },
  {
    id: "R02",
    question: "What are the contributions of your work?",
    primaryCategory: "Research",
    categories: ["research", "contribution"],
    answerAngle: ["Separate technical, empirical, and community contributions.", "Use one concrete publication or system as evidence.", "Explain why the contribution changes what researchers or practitioners can do."]
  },
  {
    id: "R03",
    question: "What do you intend to do next? What is your research plan?",
    primaryCategory: "Research",
    categories: ["research", "future plan"],
    answerAngle: ["Frame a three to five year agenda rather than a list of papers.", "Mention one near term project and one larger scientific question.", "Connect the plan to students, grants, and departmental strengths."]
  },
  {
    id: "R04",
    question: "Give me a summary of your work in 30 seconds.",
    primaryCategory: "Research",
    categories: ["research", "elevator pitch"],
    answerAngle: ["Use one sentence for the field problem.", "Use one sentence for your approach.", "Use one sentence for impact and future direction."]
  },
  {
    id: "R05",
    question: "What is your methodology for problem solving?",
    primaryCategory: "Research",
    categories: ["research", "methodology"],
    answerAngle: ["Describe how you identify problems worth solving.", "Explain your validation method, such as experiments, benchmarks, proofs, or user studies.", "Show that your method is repeatable and supervisable."]
  },
  {
    id: "R06",
    question: "What are the most important challenges in your research domain?",
    primaryCategory: "Research",
    categories: ["research", "field vision"],
    answerAngle: ["Name two or three challenges rather than giving a broad survey.", "Explain which challenge your group is best positioned to address.", "Make the answer sound strategic, not only technical."]
  },
  {
    id: "R07",
    question: "How does your research contribute to this field?",
    primaryCategory: "Research",
    categories: ["research", "impact"],
    answerAngle: ["State the current limitation in the field.", "Explain how your work changes methods, evidence, tools, or assumptions.", "Give one example of adoption, citation, award, deployment, or follow-up work if available."]
  },
  {
    id: "T01",
    question: "What is your biggest weakness as a teacher?",
    primaryCategory: "Teaching",
    categories: ["teaching", "reflection"],
    answerAngle: ["Choose a real but controlled weakness.", "Show what you changed in response to evidence.", "End with a teaching practice you now use consistently."]
  },
  {
    id: "T02",
    question: "What courses would you be willing to teach? Are you interested in creating new courses?",
    primaryCategory: "Teaching",
    categories: ["teaching", "courses"],
    answerAngle: ["Name existing core courses you can teach immediately.", "Name one advanced course linked to your research area.", "Explain how the new course would serve the department curriculum."]
  },
  {
    id: "T03",
    question: "What are your teaching interests, or what is your teaching philosophy?",
    primaryCategory: "Teaching",
    categories: ["teaching", "philosophy"],
    answerAngle: ["Avoid abstract slogans and state one teaching principle.", "Give one classroom practice that implements the principle.", "Mention how you evaluate whether students learned."]
  },
  {
    id: "T04",
    question: "Given that existing technologies and tools will be obsolete in a few years, what should we teach our students?",
    primaryCategory: "Teaching",
    categories: ["teaching", "curriculum"],
    answerAngle: ["Distinguish durable concepts from transient tools.", "Give examples such as algorithms, systems thinking, security reasoning, evaluation, and communication.", "Explain how modern tools can be used without making the course shallow."]
  },
  {
    id: "T05",
    question: "How would you approach developing a curriculum from scratch?",
    primaryCategory: "Teaching",
    categories: ["teaching", "course design"],
    answerAngle: ["Start from learning outcomes and prerequisites.", "Map assessments to outcomes before choosing weekly topics.", "Include feedback loops from students, colleagues, and external benchmarks."]
  },
  {
    id: "G01",
    question: "What makes you different from the other candidates?",
    primaryCategory: "General / Career Fit",
    categories: ["fit", "positioning"],
    answerAngle: ["Do not attack other candidates.", "State your distinctive combination of research, methods, teaching, and collaboration profile.", "Tie the distinction to what the department needs now."]
  },
  {
    id: "G02",
    question: "How will you distinguish yourself from your advisor?",
    primaryCategory: "General / Career Fit",
    categories: ["fit", "independence"],
    answerAngle: ["Acknowledge the training you received without sounding dependent.", "Define your independent research agenda clearly.", "Use future grants, students, or collaborations as evidence of independence."]
  },
  {
    id: "G03",
    question: "What are your first year goals as faculty?",
    primaryCategory: "General / Career Fit",
    categories: ["career", "first year"],
    answerAngle: ["Mention research setup, student recruitment, grant preparation, and teaching readiness.", "Keep the goals realistic for one year.", "Show you understand the transition from candidate to faculty member."]
  },
  {
    id: "G04",
    question: "Why academia? Why not industry?",
    primaryCategory: "General / Career Fit",
    categories: ["career", "motivation"],
    answerAngle: ["Do not frame industry negatively.", "Emphasize long horizon research, student mentoring, and intellectual independence.", "Give a concrete example of work that fits academia especially well."]
  },
  {
    id: "G05",
    question: "If you start having difficulty juggling research, teaching, advising, and proposal writing, what would you do to fix the problem?",
    primaryCategory: "General / Career Fit",
    categories: ["career", "workload"],
    answerAngle: ["Show maturity rather than heroic overwork.", "Mention prioritization, calendar blocking, mentoring, delegation, and early communication.", "Explain how you would protect both students and deliverables."]
  },
  {
    id: "F01",
    question: "What are your funding plans?",
    primaryCategory: "Funding",
    categories: ["funding", "strategy"],
    answerAngle: ["Name realistic funders for the target country and field.", "Explain your first proposal topic and why it is fundable.", "Mention industry or interdisciplinary routes only when they fit your agenda."]
  },
  {
    id: "F02",
    question: "What will be the topic of your first grant proposal?",
    primaryCategory: "Funding",
    categories: ["funding", "first grant"],
    answerAngle: ["Make the topic narrower than your whole research agenda.", "State the research gap, method, and expected output.", "Connect it to a plausible funding scheme."]
  },
  {
    id: "F03",
    question: "What start-up funds or facilities would you need to establish your research?",
    primaryCategory: "Funding",
    categories: ["funding", "startup"],
    answerAngle: ["List categories rather than a vague total amount.", "Include students, compute, equipment, travel, data, and participant costs when relevant.", "Show that requests are tied to concrete first year outcomes."]
  },
  {
    id: "M01",
    question: "What will your first student's PhD topic be, and how many students do you plan to have?",
    primaryCategory: "Mentoring",
    categories: ["mentoring", "phd students"],
    answerAngle: ["Offer a topic that is feasible for a first student.", "Explain how it fits the larger research agenda.", "Give a staged group size rather than an unrealistic number."]
  },
  {
    id: "M02",
    question: "How would you organize and manage your research group?",
    primaryCategory: "Mentoring",
    categories: ["mentoring", "group management"],
    answerAngle: ["Describe meeting cadence, reading routines, writing routines, and code or data practices.", "Mention how junior students receive support.", "Show that the group culture is both productive and healthy."]
  },
  {
    id: "M03",
    question: "How many graduate students would you like to have in your group?",
    primaryCategory: "Mentoring",
    categories: ["mentoring", "growth"],
    answerAngle: ["Avoid sounding like you only want headcount.", "Explain gradual growth linked to funding and supervision quality.", "Mention balance across PhD, MSc, undergraduate, and collaborative supervision where appropriate."]
  },
  {
    id: "D01",
    question: "How will you help broaden participation and support students from underrepresented groups?",
    primaryCategory: "Diversity",
    categories: ["diversity", "student support"],
    answerAngle: ["Focus on evidence based outreach, inclusive curriculum, mentoring, and retention.", "Avoid tokenistic or demographic assumptions.", "Give concrete examples such as role models, assessment design, and recruitment events."]
  },
  {
    id: "D02",
    question: "How will you build a healthy research and learning culture in your group?",
    primaryCategory: "Diversity",
    categories: ["diversity", "culture", "mentoring"],
    answerAngle: ["Name one positive culture practice you would adopt.", "Name one risk you would actively prevent.", "Explain how students can raise issues early and safely."]
  },
  {
    id: "I01",
    question: "Tell me how your interests are aligned with some of the faculty here. Who could you work with?",
    primaryCategory: "Institution / Collaboration",
    categories: ["institution", "collaboration"],
    answerAngle: ["Name specific faculty only after doing institution research.", "Explain the intellectual fit, not just topic overlap.", "Propose one realistic collaboration idea."]
  },
  {
    id: "I02",
    question: "Which synergies do you see with the existing groups in our department?",
    primaryCategory: "Institution / Collaboration",
    categories: ["institution", "synergy"],
    answerAngle: ["Identify two or three departmental strengths.", "Explain how your work complements rather than duplicates them.", "Mention teaching, grants, seminars, or student co-supervision as concrete routes."]
  },
  {
    id: "I03",
    question: "Which faculty members in our department would you be interested in collaborating with, and why?",
    primaryCategory: "Institution / Collaboration",
    categories: ["institution", "collaboration"],
    answerAngle: ["Prepare names before the interview.", "For each person, state a research bridge and an achievable first project.", "Avoid listing too many names without depth."]
  },
  {
    id: "S01",
    question: "How will you divide your time between research, teaching, and service?",
    primaryCategory: "Service / Hard Questions",
    categories: ["service", "time allocation"],
    answerAngle: ["Show that research, teaching, and service can reinforce each other.", "Mention priorities for the first two years.", "Avoid implying that service is unimportant."]
  },
  {
    id: "S02",
    question: "What was your biggest mistake, how did you fix it, and what did you learn from it?",
    primaryCategory: "Service / Hard Questions",
    categories: ["hard question", "reflection"],
    answerAngle: ["Choose a professional example that shows judgment and growth.", "Describe the correction clearly.", "End with a durable practice you now use."]
  }
];

const CATEGORY_COLORS = {
  "Research": "#0f8f83",
  "Teaching": "#2563eb",
  "General / Career Fit": "#475569",
  "Funding": "#d97706",
  "Mentoring": "#7c3aed",
  "Diversity": "#e11d48",
  "Institution / Collaboration": "#0891b2",
  "Service / Hard Questions": "#be123c"
};

const state = {
  order: [],
  currentIndex: 0,
  marked: new Set(),
  questionStartedAt: Date.now(),
  timerId: null
};

const $ = (selector) => document.querySelector(selector);

function shuffleOrder() {
  state.order = FREE_QUESTIONS_30.map((_, index) => index);
  for (let i = state.order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
  }
}

function formatTime(ms) {
  const seconds = Math.floor(ms / 1000);
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function currentQuestion() {
  return FREE_QUESTIONS_30[state.order[state.currentIndex]];
}

function renderTimer() {
  const timerText = $("#timerText");
  if (!timerText) return;
  timerText.textContent = formatTime(Date.now() - state.questionStartedAt);
}

function renderDistribution() {
  const list = $("#distributionList");
  if (!list) return;
  const distribution = FREE_QUESTIONS_30.reduce((acc, question) => {
    acc[question.primaryCategory] = (acc[question.primaryCategory] || 0) + 1;
    return acc;
  }, {});

  list.replaceChildren(...Object.entries(distribution).map(([category, count]) => {
    const row = document.createElement("div");
    row.className = "distribution-row";
    row.style.setProperty("--category-color", CATEGORY_COLORS[category] || "#2f8f83");
    row.innerHTML = `
      <span class="category-dot"></span>
      <span>${category}</span>
      <strong>${count}</strong>
    `;
    return row;
  }));
}

function renderMarkedList() {
  const markedCount = $("#markedCount");
  const markedList = $("#markedList");
  if (markedCount) markedCount.textContent = String(state.marked.size);
  if (!markedList) return;

  const markedQuestions = FREE_QUESTIONS_30.filter((question) => state.marked.has(question.id));
  if (markedQuestions.length === 0) {
    markedList.textContent = "No questions marked yet.";
    return;
  }

  markedList.replaceChildren(...markedQuestions.map((question) => {
    const item = document.createElement("div");
    item.className = "marked-item";
    item.innerHTML = `<strong>${question.id}</strong><span>${question.question}</span>`;
    return item;
  }));
}

function renderComplete() {
  $("#progressText").textContent = "30 / 30";
  $("#progressFill").style.width = "100%";
  $("#questionNumber").textContent = "Complete";
  $("#questionId").textContent = "DONE";
  $("#questionText").textContent = "You completed the free 30-question practice set.";
  $("#questionNote").hidden = true;
  $("#tagList").replaceChildren();
  $("#answerAngleList").replaceChildren(...[
    "Review any marked questions.",
    "Reset the session for another shuffled run.",
    "Join the waitlist if you want the full desktop client."
  ].map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));
  $("#remainingText").textContent = "0 remaining";
  $("#nextButton").disabled = true;
  $("#reviewButton").disabled = true;
}

function renderQuestion() {
  if (state.currentIndex >= FREE_QUESTIONS_30.length) {
    renderComplete();
    renderMarkedList();
    return;
  }

  const question = currentQuestion();
  const progress = state.currentIndex + 1;
  const color = CATEGORY_COLORS[question.primaryCategory] || "#2f8f83";

  $("#progressText").textContent = `${progress} / ${FREE_QUESTIONS_30.length}`;
  $("#progressFill").style.width = `${(progress / FREE_QUESTIONS_30.length) * 100}%`;
  $("#questionNumber").textContent = `Question ${progress}`;
  $("#questionId").textContent = question.id;
  $("#questionText").textContent = question.question;
  $("#remainingText").textContent = `${FREE_QUESTIONS_30.length - progress} remaining`;

  const note = $("#questionNote");
  if (question.note) {
    note.textContent = question.note;
    note.hidden = false;
  } else {
    note.hidden = true;
  }

  const categoryChip = document.createElement("span");
  categoryChip.className = "tag-chip";
  categoryChip.textContent = question.primaryCategory;
  categoryChip.style.setProperty("--chip-color", color);

  const chips = question.categories.map((category) => {
    const chip = document.createElement("span");
    chip.className = "tag-chip";
    chip.textContent = category;
    return chip;
  });

  $("#tagList").replaceChildren(categoryChip, ...chips);
  $("#answerAngleList").replaceChildren(...question.answerAngle.map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }));
  $("#reviewButton").textContent = state.marked.has(question.id) ? "Marked for Review" : "Mark for Review";
  $("#nextButton").disabled = false;
  $("#reviewButton").disabled = false;
  renderMarkedList();
}

function nextQuestion() {
  state.currentIndex += 1;
  state.questionStartedAt = Date.now();
  renderQuestion();
  renderTimer();
}

function toggleReview() {
  const question = currentQuestion();
  if (!question) return;
  if (state.marked.has(question.id)) {
    state.marked.delete(question.id);
  } else {
    state.marked.add(question.id);
  }
  renderQuestion();
}

function resetSession() {
  shuffleOrder();
  state.currentIndex = 0;
  state.marked.clear();
  state.questionStartedAt = Date.now();
  renderQuestion();
  renderTimer();
}

function initPracticePage() {
  $("#nextButton").addEventListener("click", nextQuestion);
  $("#reviewButton").addEventListener("click", toggleReview);
  $("#resetButton").addEventListener("click", resetSession);
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && !$("#nextButton").disabled) nextQuestion();
    if (event.key.toLowerCase() === "m" && !$("#reviewButton").disabled) toggleReview();
  });
  renderDistribution();
  resetSession();
  state.timerId = window.setInterval(renderTimer, 1000);
  console.assert(FREE_QUESTIONS_30.length === 30, "Expected exactly 30 web questions.");
}

if (document.body.dataset.page === "practice") {
  initPracticePage();
}
