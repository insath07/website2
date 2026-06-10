const searchData = [
  {
    title: "Canada Immigration",
    page: "canada.html",
    description: "Express Entry, PNP, student visa, work permit, visitor visa, family sponsorship and PR guidance.",
    category: "Main service",
    tags: ["#Canada", "#CanadaVisa", "#PR"],
    keywords: ["canada", "express entry", "pnp", "student visa", "work visa", "work permit", "family sponsorship", "pr", "visit visa", "visitor visa", "nurse migration"]
  },
  {
    title: "Canada PR Pathway",
    page: "canada.html",
    description: "Permanent residence guidance through Express Entry, PNP and profile assessment.",
    category: "Canada service",
    tags: ["#CanadaPR", "#ExpressEntry", "#PNP"],
    keywords: ["canada pr", "permanent residence", "express entry", "pnp", "crs", "skilled worker"]
  },
  {
    title: "Canada Student Visa",
    page: "canada.html",
    description: "Study permit, admission direction, SOP support and scholarship guidance.",
    category: "Canada service",
    tags: ["#StudentVisa", "#StudyPermit", "#Scholarship"],
    keywords: ["student visa", "study permit", "canada study", "sop", "admission", "scholarship"]
  },
  {
    title: "Canada Work Permit",
    page: "canada.html",
    description: "Work visa guidance for eligible applicants and employer-supported pathways.",
    category: "Canada service",
    tags: ["#WorkPermit", "#WorkVisa", "#SkilledWorker"],
    keywords: ["work permit", "work visa", "canada work", "job", "skilled worker"]
  },
  {
    title: "Family Sponsorship",
    page: "canada.html",
    description: "Support for spouse, parent, child and family sponsorship applications.",
    category: "Canada service",
    tags: ["#FamilySponsorship", "#SpouseVisa", "#CanadaFamily"],
    keywords: ["family sponsorship", "spouse visa", "parents", "children", "family"]
  },
  {
    title: "Visit Visa Support",
    page: "canada.html",
    description: "Visitor visa document review, invitation guidance and travel purpose support.",
    category: "Canada service",
    tags: ["#VisitVisa", "#VisitorVisa", "#Travel"],
    keywords: ["visit visa", "visitor visa", "tourist visa", "invitation", "travel"]
  },
  {
    title: "Nurse Migration Program",
    page: "canada.html",
    description: "Migration guidance for trained nurses through study, work and skilled pathways.",
    category: "Promotion",
    tags: ["#NurseMigration", "#Nursing", "#Healthcare"],
    keywords: ["nurse migration", "nurse", "nursing", "healthcare", "skilled migration"]
  },
  {
    title: "Other Countries",
    page: "other-countries.html",
    description: "Australia, New Zealand, UK, USA and Europe study, work and migration pathways.",
    category: "Main service",
    tags: ["#GlobalVisa", "#StudyAbroad", "#Migration"],
    keywords: ["australia", "new zealand", "uk", "usa", "europe", "study", "work", "migration", "scholarship"]
  },
  {
    title: "Scholarship Guidance",
    page: "other-countries.html",
    description: "Scholarship direction up to 70% for selected study pathways.",
    category: "Promotion",
    tags: ["#Scholarship", "#StudyAbroad", "#StudentVisa"],
    keywords: ["scholarship", "70%", "study abroad", "student visa", "course selection"]
  },
  {
    title: "Australia Visa Pathways",
    page: "other-countries.html",
    description: "Study, work, visit and migration guidance for Australia.",
    category: "Country service",
    tags: ["#Australia", "#AustraliaVisa", "#StudyAustralia"],
    keywords: ["australia", "australia visa", "study australia", "work australia", "australia migration"]
  },
  {
    title: "New Zealand Visa Pathways",
    page: "other-countries.html",
    description: "Study, work and skilled migration support for New Zealand.",
    category: "Country service",
    tags: ["#NewZealand", "#NZVisa", "#SkilledMigration"],
    keywords: ["new zealand", "nz", "new zealand visa", "study nz", "work nz"]
  },
  {
    title: "UK Student and Visit Visa",
    page: "other-countries.html",
    description: "UK study, visit and documentation support for students and families.",
    category: "Country service",
    tags: ["#UKVisa", "#StudyUK", "#VisitUK"],
    keywords: ["uk", "united kingdom", "uk visa", "study uk", "visit uk", "student visa"]
  },
  {
    title: "USA Visa Guidance",
    page: "other-countries.html",
    description: "USA student, visitor and documentation guidance.",
    category: "Country service",
    tags: ["#USAVisa", "#StudyUSA", "#VisitUSA"],
    keywords: ["usa", "us visa", "america", "study usa", "visit usa", "student visa"]
  },
  {
    title: "Europe Visa Guidance",
    page: "other-countries.html",
    description: "Selected European study, visit and migration pathway support.",
    category: "Country service",
    tags: ["#EuropeVisa", "#StudyEurope", "#Schengen"],
    keywords: ["europe", "europe visa", "schengen", "study europe", "visit europe"]
  },
  {
    title: "Legal Services",
    page: "legal-services.html",
    description: "Appeals, refusal support, refugee law, citizenship, residency and legal documentation review.",
    category: "Main service",
    tags: ["#LegalService", "#VisaAppeal", "#RefusalSupport"],
    keywords: ["legal", "appeal", "refusal", "refugee", "citizenship", "residency", "documentation"]
  },
  {
    title: "Visa Refusal Appeal",
    page: "legal-services.html",
    description: "Document review and guidance for visa refusals and immigration appeals.",
    category: "Legal service",
    tags: ["#LegalAppeal", "#VisaRefusal", "#Appeal"],
    keywords: ["visa refusal", "appeal", "legal appeal", "refusal support", "immigration appeal"]
  },
  {
    title: "Refugee and Immigration Law",
    page: "legal-services.html",
    description: "Guidance for refugee law, immigration concerns and supporting documents.",
    category: "Legal service",
    tags: ["#RefugeeLaw", "#ImmigrationLaw", "#LegalHelp"],
    keywords: ["refugee", "refugee law", "immigration law", "legal help", "documents"]
  },
  {
    title: "Consultation Booking",
    page: "consultation.html",
    description: "Book online or physical consultation with Gen-Ardent advisors.",
    category: "Booking",
    tags: ["#Consultation", "#Booking", "#Appointment"],
    keywords: ["booking", "book consultation", "consultation", "appointment", "cv upload"]
  },
  {
    title: "Success Stories",
    page: "about.html#success-stories",
    description: "Client reviews, visa approvals, scholarship journeys and appeal success stories.",
    category: "Trust",
    tags: ["#SuccessStories", "#Reviews", "#Testimonials"],
    keywords: ["reviews", "success", "testimonials", "approved", "scholarship"]
  },
  {
    title: "About Gen-Ardent",
    page: "about.html",
    description: "Company profile, mission, vision, values, team and credentials.",
    category: "Company",
    tags: ["#About", "#Team", "#Credentials"],
    keywords: ["about", "team", "credentials", "office", "consultants"]
  },
  {
    title: "Careers",
    page: "career.html",
    description: "Apply for internships, immigration consultant assistant, marketing, documentation and customer support roles.",
    category: "Career",
    tags: ["#Careers", "#Jobs", "#Internship"],
    keywords: ["career", "jobs", "internship", "immigration consultant assistant", "marketing", "customer support", "client support"]
  },
  {
    title: "Contact",
    page: "contact.html",
    description: "Contact offices in Kollupitiya, Galle and Atlantic Canada.",
    category: "Contact",
    tags: ["#Contact", "#Office", "#Location"],
    keywords: ["contact", "phone", "email", "map", "kollupitiya", "galle", "atlantic canada"]
  }
];

const chatbotReplies = [
  {
    keys: ["canada visa", "canada", "pr", "express entry"],
    reply: "You can explore Express Entry, Student Visa, Work Permit, Visitor Visa and Family Sponsorship on the Canada Immigration page: canada.html"
  },
  {
    keys: ["student visa", "study"],
    reply: "Student visa guidance and scholarship pathways are available for Canada and other study destinations. Start with canada.html or other-countries.html."
  },
  {
    keys: ["scholarship", "scholarships"],
    reply: "Scholarship guidance includes options up to 70% for selected student pathways. Visit the Other Countries page or book a consultation."
  },
  {
    keys: ["legal service", "legal services", "legal appeal", "appeal", "refusal"],
    reply: "Visa refusal and immigration appeal support is listed on the Legal Services page: legal-services.html"
  },
  {
    keys: ["consultation", "book consultation", "booking", "appointment"],
    reply: "You can submit an online or physical consultation request on the Consultation Booking page: consultation.html"
  },
  {
    keys: ["contact", "office", "phone", "email"],
    reply: "Contact details for Kollupitiya, Galle and Atlantic Canada are on the Contact page: contact.html"
  },
  {
    keys: ["nurse migration", "nurse", "nursing"],
    reply: "Nurse migration support is available through skilled worker and study pathways. Review Canada services or use the booking form."
  },
  {
    keys: ["family sponsorship", "family"],
    reply: "Family sponsorship is included under Canada Immigration services. Visit canada.html and submit the inquiry form."
  }
];

const canadaRecommendations = {
  Study: "Recommended pathway: Canada Student Visa with scholarship and study permit guidance.",
  Work: "Recommended pathway: Canada Work Permit or Express Entry eligibility assessment.",
  Family: "Recommended pathway: Family Sponsorship with document preparation support.",
  Visit: "Recommended pathway: Canada Visitor Visa with travel history and invitation review.",
  PR: "Recommended pathway: Express Entry or Provincial Nominee Program assessment."
};

const countryRecommendations = {
  Study: "Recommended pathway: UK, Canada, USA or Australia study visa with scholarship screening.",
  Work: "Recommended pathway: Australia work visa or New Zealand skilled migration assessment.",
  Visit: "Recommended pathway: UK, USA or Europe visit visa preparation.",
  Migration: "Recommended pathway: Australia, New Zealand or Europe long-term skilled migration."
};

document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  setupLoader();
  setupMobileNavigation();
  setupActiveNavigation();
  setupSearch();
  setupFaqs();
  setupChatbot();
  setupNewsletterForms();
  setupValidatedForms();
  setupFileInputs();
  setupReviews();
  setupRecommendations();
  setupScrollTop();
  setupRevealAnimations();
});

function setupLoader() {
  const loader = document.querySelector(".site-loader");
  if (!loader) return;

  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 1400);
  });

  setTimeout(() => loader.classList.add("hidden"), 2400);
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("genArdentTheme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = savedTheme ? savedTheme === "dark" : prefersDark;
  document.body.classList.toggle("dark-mode", useDark);
  updateThemeIcons(useDark);
}

function setupMobileNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const searchToggle = document.querySelector(".search-mobile-toggle");
  const searchWrap = document.querySelector(".search-wrap");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (searchToggle && searchWrap) {
    searchToggle.addEventListener("click", () => {
      const isOpen = searchWrap.classList.toggle("open");
      searchToggle.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        const input = searchWrap.querySelector("input");
        input && input.focus();
      }
    });
  }

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const isDark = !document.body.classList.contains("dark-mode");
      document.body.classList.toggle("dark-mode", isDark);
      localStorage.setItem("genArdentTheme", isDark ? "dark" : "light");
      updateThemeIcons(isDark);
    });
  });
}

function updateThemeIcons(isDark) {
  document.querySelectorAll(".theme-toggle i").forEach((icon) => {
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  });
}

function setupActiveNavigation() {
  const currentPage = getCurrentPage();
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === currentPage);
  });
}

function getCurrentPage() {
  const page = window.location.pathname.split("/").pop();
  return page || "index.html";
}

function setupSearch() {
  document.querySelectorAll(".search-wrap").forEach((wrap) => {
    const input = wrap.querySelector(".site-search");
    const results = wrap.querySelector(".search-results");
    if (!input || !results) return;

    const updateResults = () => renderSearchResults(results, input.value);

    input.addEventListener("focus", updateResults);
    input.addEventListener("input", updateResults);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        results.classList.remove("visible");
        input.blur();
      }
    });

    document.addEventListener("click", (event) => {
      if (!wrap.contains(event.target)) {
        results.classList.remove("visible");
      }
    });
  });
}

function renderSearchResults(results, rawQuery) {
  const query = normalizeSearchText(rawQuery);
  results.innerHTML = "";

  const matches = query
    ? searchData
      .map((item) => ({ item, score: getSearchScore(item, query) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .map((entry) => entry.item)
    : searchData;

  if (!matches.length) {
    results.innerHTML = `
      <div class="search-result search-empty">
        <strong>No results found</strong>
        <span>Try #CanadaPR, #Scholarship, #LegalAppeal, #Consultation or #NurseMigration.</span>
      </div>
    `;
    results.classList.add("visible");
    return;
  }

  const summary = document.createElement("div");
  summary.className = "search-summary";
  summary.innerHTML = query
    ? `<span>Best matches</span><small>${matches.length} service${matches.length === 1 ? "" : "s"} found</small>`
    : `<span>Available services</span><small>Type letters or hashtags to filter</small>`;
  results.appendChild(summary);

  matches.forEach((item) => {
    results.appendChild(renderSearchItem(item, query));
  });

  results.classList.add("visible");
}

function renderSearchItem(item, query) {
  const link = document.createElement("a");
  link.className = "search-result";
  link.href = item.page;
  const tags = (item.tags || [])
    .map((tag) => `<span class="search-tag">${highlightSearchText(tag, query)}</span>`)
    .join("");

  link.innerHTML = `
    <span class="search-result-label">${escapeHtml(item.category || "Service")}</span>
    <strong>${highlightSearchText(item.title, query)}</strong>
    <span class="search-result-description">${highlightSearchText(item.description, query)}</span>
    <span class="search-tags">${tags}</span>
  `;

  return link;
}

function getSearchScore(item, query) {
  const terms = getSearchTerms(query);
  const title = normalizeSearchText(item.title);
  const description = normalizeSearchText(item.description);
  const category = normalizeSearchText(item.category || "");
  const tags = (item.tags || []).map(normalizeSearchText);
  const keywords = (item.keywords || []).map(normalizeSearchText);
  const combined = [title, description, category, ...tags, ...keywords].join(" ");
  let score = 0;

  if (title.startsWith(query)) score += 90;
  if (title.includes(query)) score += 60;
  if (tags.some((tag) => tag.startsWith(query))) score += 55;
  if (keywords.some((keyword) => keyword.startsWith(query))) score += 45;
  if (combined.includes(query)) score += 35;

  terms.forEach((term) => {
    if (title.includes(term)) score += 24;
    if (tags.some((tag) => tag.includes(term))) score += 20;
    if (keywords.some((keyword) => keyword.includes(term))) score += 16;
    if (category.includes(term)) score += 10;
    if (description.includes(term)) score += 8;
  });

  return score;
}

function highlightSearchText(text, query) {
  const value = String(text);
  const terms = getSearchTerms(query)
    .sort((a, b) => b.length - a.length);

  if (!terms.length) return escapeHtml(value);

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "ig");
  return value.split(pattern).map((part) => {
    const isMatch = terms.some((term) => part.toLowerCase() === term.toLowerCase());
    return isMatch ? `<mark class="search-highlight">${escapeHtml(part)}</mark>` : escapeHtml(part);
  }).join("");
}

function getSearchTerms(query) {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];
  const terms = [normalized, ...normalized.split(/\s+/)].filter(Boolean);
  return [...new Set(terms)];
}

function normalizeSearchText(value) {
  return String(value || "").trim().toLowerCase().replace(/^#+/, "");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function setupFaqs() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0px";
    });
  });
}

function setupChatbot() {
  const chatbot = document.querySelector(".chatbot");
  if (!chatbot) return;

  const toggle = chatbot.querySelector(".chatbot-toggle");
  const close = chatbot.querySelector(".chatbot-close");
  const form = chatbot.querySelector(".chatbot-form");
  const input = chatbot.querySelector("input");
  const messages = chatbot.querySelector(".chatbot-messages");

  toggle && toggle.addEventListener("click", () => {
    chatbot.classList.toggle("open");
    input && input.focus();
  });

  close && close.addEventListener("click", () => chatbot.classList.remove("open"));

  form && form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    appendChatMessage(messages, text, "user");
    appendChatMessage(messages, findChatbotReply(text), "bot");
    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  });
}

function appendChatMessage(container, text, type) {
  if (!container) return;
  const message = document.createElement("div");
  message.className = `chat-msg ${type === "user" ? "user" : "bot"}`;
  message.textContent = text;
  container.appendChild(message);
}

function findChatbotReply(text) {
  const normalized = text.toLowerCase();
  if (/^(hi|hello|hey)\b/.test(normalized.trim())) {
    return "Hello. I can help with Canada visas, scholarships, legal services, consultations, contact details and office locations.";
  }
  const found = chatbotReplies.find((item) => item.keys.some((key) => normalized.includes(key)));
  return found ? found.reply : "I can help with Canada visas, student visas, scholarships, legal appeals, nurse migration, family sponsorship, bookings and contact details.";
}

function setupNewsletterForms() {
  document.querySelectorAll(".newsletter-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const message = form.parentElement.querySelector(".newsletter-message");
      const email = input.value.trim();

      if (!isValidEmail(email)) {
        setNewsletterMessage(message, "Please enter a valid email address.", "error");
        return;
      }

      const subscribers = getStoredArray("genArdentNewsletter");
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem("genArdentNewsletter", JSON.stringify(subscribers));
      }

      input.value = "";
      setNewsletterMessage(message, "Subscription saved successfully.", "success");
    });
  });
}

function setNewsletterMessage(element, text, type) {
  if (!element) return;
  element.textContent = text;
  element.className = `newsletter-message ${type}`;
}

function setupValidatedForms() {
  document.querySelectorAll("form[data-validate]").forEach((form) => {
    if (form.classList.contains("newsletter-form")) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const isValid = validateForm(form);
      const message = form.querySelector(".form-message");

      if (!isValid) {
        setFormMessage(message, "Please correct the highlighted fields.", "error");
        return;
      }

      if (form.dataset.storageKey) {
        saveFormData(form, form.dataset.storageKey);
      }

      if (form.dataset.reviewForm === "true") {
        addReviewFromForm(form);
      }

      setFormMessage(message, form.dataset.success || "Thank you! Your form has been submitted successfully.", "success");
      form.reset();
      clearFileNames(form);
    });
  });
}

function validateForm(form) {
  let isValid = true;
  form.querySelectorAll(".field-error").forEach((error) => {
    error.textContent = "";
  });

  form.querySelectorAll("[required]").forEach((field) => {
    const value = field.type === "file" ? field.files.length : field.value.trim();
    if (!value) {
      setFieldError(field, "This field is required.");
      isValid = false;
      return;
    }

    if (field.type === "email" && !isValidEmail(field.value.trim())) {
      setFieldError(field, "Enter a valid email address.");
      isValid = false;
    }
  });

  form.querySelectorAll('input[type="file"]').forEach((field) => {
    if (!field.files.length) return;
    const allowed = [".pdf", ".doc", ".docx"];
    const name = field.files[0].name.toLowerCase();
    const isAllowed = allowed.some((extension) => name.endsWith(extension));
    if (!isAllowed) {
      setFieldError(field, "Upload a .pdf, .doc or .docx file.");
      isValid = false;
    }
  });

  return isValid;
}

function setFieldError(field, text) {
  const group = field.closest(".form-field");
  const error = group && group.querySelector(".field-error");
  if (error) error.textContent = text;
}

function setFormMessage(element, text, type) {
  if (!element) return;
  element.textContent = text;
  element.className = `form-message ${type}`;
}

function saveFormData(form, key) {
  const entries = {};
  const formData = new FormData(form);

  formData.forEach((value, name) => {
    entries[name] = value instanceof File ? value.name : value;
  });

  entries.submittedAt = new Date().toISOString();
  const stored = getStoredArray(key);
  stored.push(entries);
  localStorage.setItem(key, JSON.stringify(stored));
}

function setupFileInputs() {
  document.querySelectorAll('input[type="file"]').forEach((input) => {
    input.addEventListener("change", () => {
      const wrapper = input.closest(".form-field");
      const display = wrapper && wrapper.querySelector(".file-name");
      if (display) {
        display.textContent = input.files.length ? input.files[0].name : "No file selected";
      }
    });
  });
}

function clearFileNames(form) {
  form.querySelectorAll(".file-name").forEach((display) => {
    display.textContent = "No file selected";
  });
}

function setupReviews() {
  const container = document.querySelector("#dynamicReviews");
  if (!container) return;

  getStoredArray("genArdentReviews").forEach((review) => renderReview(container, review));
}

function addReviewFromForm(form) {
  const review = {
    name: form.elements.name.value.trim(),
    country: form.elements.country.value.trim(),
    review: form.elements.review.value.trim(),
    rating: form.elements.rating.value
  };

  const stored = getStoredArray("genArdentReviews");
  stored.push(review);
  localStorage.setItem("genArdentReviews", JSON.stringify(stored));

  const container = document.querySelector("#dynamicReviews");
  if (container) renderReview(container, review, true);
}

function renderReview(container, review, prepend = false) {
  const card = document.createElement("article");
  card.className = "card testimonial-card reveal visible";
  const initial = review.name ? review.name.charAt(0).toUpperCase() : "G";
    card.innerHTML = `
    <div class="client-row">
      <div class="avatar">${initial}</div>
      <div>
        <strong>${escapeHtml(review.name)}</strong>
        <div class="stars">${"&#9733;".repeat(Number(review.rating))}${"&#9734;".repeat(5 - Number(review.rating))}</div>
      </div>
    </div>
    <p>${escapeHtml(review.review)}</p>
    <span class="badge gold"><i class="fa-solid fa-location-dot"></i>${escapeHtml(review.country)}</span>
  `;

  if (prepend && container.firstChild) {
    container.insertBefore(card, container.firstChild);
  } else {
    container.appendChild(card);
  }
}

function setupRecommendations() {
  document.querySelectorAll("[data-recommendation]").forEach((select) => {
    const outputId = select.dataset.output;
    const output = outputId ? document.querySelector(outputId) : null;
    const source = select.dataset.recommendation === "canada" ? canadaRecommendations : countryRecommendations;

    select.addEventListener("change", () => {
      const selected = select.value;
      if (output) {
        output.textContent = source[selected] || "Select an interest to see a suitable pathway recommendation.";
      }
    });
  });
}

function setupScrollTop() {
  const button = document.querySelector(".scroll-top");
  if (!button) return;

  window.addEventListener("scroll", () => {
    button.classList.toggle("visible", window.scrollY > 420);
  });

  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  elements.forEach((element) => observer.observe(element));
}

function getStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

