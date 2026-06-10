# 1. Project Title

Gen-Ardent Immigration Inc Sri Lanka - Immigration Service Web Application

# 2. Introduction

This documentation supports a client-side web application created for IT1308 Web Application Development. The website promotes immigration consultancy services, consultation booking, inquiries, career applications, reviews, success stories and interactive support features.

# 3. Project Background

Gen-Ardent Immigration Inc Sri Lanka is presented as a Canadian-based immigration consultancy with service support in Sri Lanka and Canada. The web application focuses on Canada immigration while also presenting Australia, New Zealand, United Kingdom, United States and Europe pathways.

# 4. System Objectives

- Present Gen-Ardent services clearly and professionally.
- Allow users to search visa, scholarship, legal and consultation services.
- Collect inquiries, booking requests, contact messages and career applications through client-side forms.
- Demonstrate chatbot, FAQ, dark mode, newsletter, CV upload and recommendation features.
- Provide a responsive interface suitable for desktop, tablet and mobile screens.

# 5. Target Users

- Students seeking study visas and scholarships.
- Skilled workers and nurses exploring migration pathways.
- Families seeking sponsorship or visitor visa guidance.
- Clients needing legal review, appeal support or refusal assistance.
- Job applicants interested in consultancy, marketing, support or internship roles.

# 6. Requirement Identification Table

| Page Name | Identified Requirement | Description | Implemented: Yes/No |
|---|---|---|---|
| Home | Logo and brand name | Displays Gen-Ardent Immigration branding in the navbar | Yes |
| Home | Tagline and hero banner | Includes professional tagline and immigration hero image | Yes |
| Home | Search bar | Dynamic service search appears in the navigation | Yes |
| Home | Promotional advertisements | Canada PR, student visa, scholarship, nurse migration and legal cards | Yes |
| Home | Service categories | Links to Canada, Other Countries, Legal Services and Consultation | Yes |
| Home | Testimonials preview | Client review cards shown on the home page | Yes |
| Home | Success stories preview | Highlight CTA links to About success stories | Yes |
| Home | Newsletter subscription | Client-side email validation and confirmation | Yes |
| Canada Immigration | Canada overview | Presents Canada as a priority destination | Yes |
| Canada Immigration | Canada services | PR, Study Visa, Work Visa, Family Sponsorship, Visitor Visa and Express Entry cards | Yes |
| Canada Immigration | FAQ accordion | Expandable Canada FAQ section | Yes |
| Canada Immigration | Inquiry form | Client-side validated Canada inquiry form | Yes |
| Canada Immigration | Recommendation feature | Interest selector suggests a suitable Canada pathway | Yes |
| Other Countries | Country services | Australia, New Zealand, UK, USA and Europe cards | Yes |
| Other Countries | Visa categories | Study, visit, work and migration pathways included | Yes |
| Other Countries | FAQ accordion | Expandable country FAQ section | Yes |
| Other Countries | Inquiry form | Client-side validated country inquiry form | Yes |
| Legal Services | Legal service cards | Appeals, refusals, refugee law, citizenship, advisory and representation | Yes |
| Legal Services | FAQ accordion | Expandable legal FAQ section | Yes |
| Legal Services | Inquiry form | Client-side validated legal inquiry form | Yes |
| Consultation | Booking form | Full name, email, phone, country, service, date, time and message fields | Yes |
| Consultation | Form validation | Required fields and email validation with success message | Yes |
| About | Company introduction | Includes vision, identity, office locations and credentials | Yes |
| About | Team cards | Staff role cards for consultancy and support roles | Yes |
| About | Reviews and success stories | Testimonial cards, success-story cards and review form | Yes |
| Career | Career opportunities | Consultant assistant, internship, marketing and support roles | Yes |
| Career | CV upload | Required CV file upload simulation using PDF, DOC or DOCX | Yes |
| Career | Application form | Client-side validated career form and confirmation message | Yes |
| Contact | Contact details | Email, phone and office location information | Yes |
| Contact | Map section | Placeholder map cards for Kollupitiya, Galle and Atlantic Canada | Yes |
| Contact | Contact form | Client-side validated contact form | Yes |
| Global | Mobile navigation | Responsive menu toggle | Yes |
| Global | Chatbot | Floating chatbot with rule-based replies | Yes |
| Global | Dark/light mode | Saved in localStorage | Yes |
| Global | Scroll-to-top | Floating button appears after scrolling | Yes |
| Global | Loading indicator | Page loading overlay animation | Yes |
| Global | External official links | Immigration Sri Lanka, Foreign Affairs Sri Lanka and SLTDA | Yes |

# 7. Sitemap Explanation

The sitemap follows a simple service-first structure: Home introduces the brand, then users can move to Canada Immigration, Other Countries, Legal Services, Consultation, About, Career and Contact. Success stories are placed inside About to keep the required page list focused.

# 8. Wireframe and Prototype Explanation

The prototype uses a consistent header, hero section, content cards, forms and footer across pages. Important demo features are visible near the top of relevant pages, including search, CTAs, FAQs, forms and chatbot access.

# 9. Storyboard Explanation

A typical user lands on Home, searches for a service, explores a country or legal page, reads FAQs, submits an inquiry, books a consultation and uses the chatbot for quick guidance. A job applicant follows Career and submits a CV upload form.

# 10. Style Guide

- Primary: `#0B3D91` / blue trust tone.
- Secondary: `#D71920` / Canada and urgency accent.
- Accent: `#F4B400` / scholarship and CTA highlight.
- Light background: `#F8FAFC`.
- Dark background: `#0F172A`.
- Headings: Poppins.
- Body: Inter.
- UI style: clean cards, restrained shadows, accessible labels and consistent icons.

# 11. Features Implemented

Responsive layout, service search, chatbot, dark mode, FAQ accordion, recommendation selector, validated forms, CV upload, newsletter, testimonials, success stories, map cards, external links, loading indicator and scroll-to-top behavior.

# 12. Search Bar Explanation

The search bar uses JavaScript data objects in `src/js/script.js`. It matches titles, descriptions and keywords such as Canada, visa, student, scholarship, legal, appeal, nurse and work, then shows clickable results.

# 13. Chatbot / AI Feature Explanation

The chatbot is rule-based and client-side only. It responds to prompts such as hi, canada visa, scholarship, consultation, contact, legal service and office location using predefined replies.

# 14. Logo Design Explanation

The website uses the supplied Gen-Ardent Immigration Sri Lanka logo image from `assets/logo/gen-ardent-logo.png`. The same logo appears in the navigation bar and splash/loading screen for consistent branding.

# 15. Advertisement Design Explanation

Promotional cards highlight Canada PR, student visas, scholarships, nurse migration, visitor visas and legal document review. Each card includes an icon, short message and CTA.

# 16. Screenshots Placeholder Section

Add screenshots here:

- Home desktop
- Home mobile navigation
- Search results
- Chatbot reply
- Dark mode
- Consultation booking form
- Career CV upload form
- FAQ accordion

# 17. Code Explanation

- `src/*.html`: Semantic pages with shared header/footer and page-specific content.
- `src/css/style.css`: Theme variables, responsive layout, cards, forms, navigation and interaction styles.
- `src/js/script.js`: Search, chatbot, validation, localStorage, FAQ, dark mode, recommendation and scroll behavior.

# 18. Feature Checklist

- [x] Eight required pages
- [x] Responsive navigation
- [x] Dynamic search
- [x] Chatbot
- [x] FAQ accordion
- [x] Inquiry and booking forms
- [x] CV upload
- [x] Newsletter
- [x] Testimonials and success stories
- [x] Dark/light mode
- [x] External official links
- [x] Scroll-to-top button

# 19. Testing

Recommended tests:

- Open every navbar link.
- Type `Canada`, `scholarship`, `legal`, `nurse`, `work` in search.
- Submit empty forms and confirm validation messages.
- Submit completed forms and confirm success messages.
- Upload an invalid CV file type and confirm file validation.
- Toggle dark mode, reload and confirm preference remains.
- Open chatbot and test hi, canada visa, scholarship, consultation, contact, legal service and office location.
- Resize to mobile width and test menu.

# 20. Conclusion

The completed application satisfies the Task A planning and Task B implementation requirements for a professional, responsive, client-side immigration consultancy website.
