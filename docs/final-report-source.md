[[CENTER]]Gen-Ardent Immigration Inc Sri Lanka - Immigration Service Web Application
[[CENTER]]Final Report / Documentation
[[CENTER]]Module Name: IT1308 Web Application Development
[[CENTER]]Student Name: [Enter Student Name]
[[CENTER]]Student ID: [Enter Student ID]
[[CENTER]]Lecturer Name: [Enter Lecturer Name]
[[CENTER]]Submission Date: [Enter Date]
[[PAGE_BREAK]]
# Table of Contents
| Section | Page Number |
|---|---|
| Cover Page | i |
| Table of Contents | ii |
| 1. Introduction | [Page No.] |
| 2. Project Background | [Page No.] |
| 3. System Objectives | [Page No.] |
| 4. Target Users | [Page No.] |
| 5. Task A - Design and Planning | [Page No.] |
| 6. Task B - Development and Implementation | [Page No.] |
| 7. Feature Explanation | [Page No.] |
| 8. Code Explanation | [Page No.] |
| 9. Feature Checklist | [Page No.] |
| 10. Testing Table | [Page No.] |
| 11. Screenshots Section | [Page No.] |
| 12. Screen Recording Demonstration | [Page No.] |
| 13. Challenges and Solutions | [Page No.] |
| 14. Conclusion | [Page No.] |
| 15. References | [Page No.] |
[[PAGE_BREAK]]
# 1. Introduction
The Gen-Ardent Immigration Inc Sri Lanka web application is a client-side immigration service website developed for the IT1308 Web Application Development assignment. The purpose of this project is to present immigration consultancy services in a professional, credible and user-friendly way. The website helps users understand Canada immigration pathways, other international visa options, legal support, consultation booking, career opportunities and contact details.

The system is designed to improve service presentation, client communication, consultation booking, credibility and lead generation. It gives potential clients a clear route from discovering a service to submitting an inquiry or booking a consultation. The application also includes interactive features such as search, chatbot support, FAQ accordions, form validation, CV upload display, newsletter subscription, testimonials, success stories, maps, social media links, dark/light mode and responsive design.

This project is fully client-side. It uses HTML5, CSS3 and JavaScript only, without a backend server or database. Data submissions are simulated in the browser through JavaScript and localStorage, which is suitable for an academic front-end web application assessment.

# 2. Project Background
Gen-Ardent Immigration Inc Sri Lanka is presented as a Canadian-based immigration consultancy firm with support for Sri Lankan and international clients. The company supports migration, study, work, settlement, visa processing, student visa guidance, scholarship opportunities, family sponsorship, legal advisory, immigration appeals, visa refusals, refugee law, citizenship and residency services.

The web application focuses strongly on Canada immigration because Canada is a major migration destination for students, families, skilled workers, nurses and professionals. At the same time, the website also promotes visa pathways for Australia, New Zealand, the United Kingdom, the United States and Europe. The legal services section supports clients who need document review, refusal appeal guidance or immigration representation.

The website is also designed as a trust-building platform. It uses a professional logo from assets/logo/gen-ardent-logo.png, a consistent navigation system, testimonials, success-story previews, official external links and office location sections to make the brand appear reliable and established.

# 3. System Objectives
- To design a modern client-side immigration consultancy website for Gen-Ardent Immigration Inc Sri Lanka.
- To clearly present Canada immigration, other country visa services and legal services.
- To promote visa programs, scholarship opportunities, nurse migration, family sponsorship and visit visa support.
- To allow users to book online or physical consultation appointments.
- To allow inquiries and CV uploads through client-side forms.
- To provide a search function that helps users find visa, scholarship, legal, booking and contact services quickly.
- To provide a rule-based chatbot for common immigration questions.
- To show testimonials, reviews and success stories to build trust.
- To include social media links and official external links.
- To support dark/light mode and save the selected theme using localStorage.
- To support responsive design for desktop, tablet and mobile devices.
- To use clean, reusable and maintainable HTML, CSS and JavaScript code.

# 4. Target Users
The target users of this system include students seeking study visas and scholarships, migrants seeking long-term settlement, families seeking sponsorship or visitor visa support, professionals and skilled workers seeking work or PR pathways, nurses exploring migration opportunities, clients with visa refusals and users looking for legal immigration support.

The website also supports job applicants who want to apply for immigration consultancy, documentation, marketing, customer service or internship roles. Since the application is responsive, these users can access the website from desktop computers, laptops, tablets and mobile phones.

# 5. Task A - Design and Planning
## 5.1 Requirement Identification Table
| Page Name | Identified Requirement | Description | Implemented: Yes/No |
|---|---|---|---|
| Home Page | Logo and brand identity | The navbar and splash loader use assets/logo/gen-ardent-logo.png for consistent Gen-Ardent branding. | Yes |
| Home Page | Hero and service introduction | src/index.html includes a hero with the heading Your Trusted Pathway to Global Immigration and call-to-action buttons. | Yes |
| Home Page | Promotional advertisements | The page includes cards for Canada PR, scholarship, nurse migration, visit visa, family sponsorship and legal review. | Yes |
| Home Page | Service cards | Home links to Canada, Other Countries, Legal Services and Consultation pages. | Yes |
| Home Page | Testimonials and success preview | The home page includes testimonial cards and a Canada student visa success story highlight. | Yes |
| Canada Immigration Page | Canada services | src/canada.html presents Express Entry, student visa, work permit, visitor visa, family sponsorship and related services. | Yes |
| Canada Immigration Page | FAQ and inquiry | The page contains FAQ accordion items and a Canada inquiry form with CV upload. | Yes |
| Canada Immigration Page | Recommendation widget | A select element with data-recommendation="canada" displays pathway suggestions. | Yes |
| Other Countries Page | Global visa services | src/other-countries.html presents Australia, New Zealand, UK, USA and Europe pathways. | Yes |
| Other Countries Page | Scholarship promotion | The page promotes scholarships up to 70 percent for selected programs. | Yes |
| Other Countries Page | Inquiry and CV upload | A validated country inquiry form includes name, email, phone, pathway, message and CV upload. | Yes |
| Legal Services Page | Legal advisory services | src/legal-services.html presents appeals, refusal support, refugee law, citizenship, residency and documentation review. | Yes |
| Legal Services Page | Legal inquiry form | The page includes a validated legal inquiry form with client details and legal service selection. | Yes |
| Consultation Booking Page | Booking form | src/consultation.html includes full name, email, phone, country, service, date, time, mode, message and CV upload fields. | Yes |
| Consultation Booking Page | Client-side confirmation | JavaScript validates the form, stores demo booking data and displays success feedback. | Yes |
| About Us Page | Company profile | src/about.html explains company identity, global connection, mission, vision, values and trust signals. | Yes |
| About Us Page | Reviews and success stories | About includes review highlights, success stories, a review form and dynamic review storage. | Yes |
| Career Page | Career opportunities | src/career.html lists current roles and includes a career application form. | Yes |
| Career Page | CV upload | The career form has an input type="file" field accepting PDF, DOC and DOCX. | Yes |
| Contact Page | Contact details and map cards | src/contact.html includes office contact cards and map placeholder cards. | Yes |
| Contact Page | Social and official links | Contact includes social media buttons and trusted links to official resources. | Yes |
| Global | Search bar | The shared navbar includes a search bar powered by searchData in src/js/script.js. | Yes |
| Global | Chatbot | All pages include a floating rule-based chatbot component. | Yes |
| Global | Dark/light mode | Theme toggle changes the body class and stores genArdentTheme in localStorage. | Yes |
| Global | Responsive design | CSS media queries at 1100px, 860px and 680px adapt layout and navigation. | Yes |

## 5.2 Sitemap
The sitemap follows a service-first structure. The Home page is the main entry point and connects users to Canada Immigration, Other Countries, Legal Services, Consultation Booking, About Us, Career and Contact. Success stories and reviews are included inside the About page, while inquiry and booking actions are available from the relevant service pages.

[Insert Sitemap Screenshot Here]

Sitemap hierarchy:
- Home
- Canada Immigration: Canada PR, Study Visa, Work Visa, Family Sponsorship, Visitor Visa and Express Entry
- Other Countries: Australia, New Zealand, United Kingdom, United States and Europe
- Legal Services: Visa Refusals, Appeals, Refugee Law, Citizenship and Residency
- Consultation Booking
- About Us: Company Profile, Team, Credentials, Reviews and Success Stories
- Career: Job Cards and CV Application Form
- Contact: Office Details, Map Cards, Contact Form, Social Links and Official External Links

## 5.3 Wireframes and Prototype
The wireframe design uses a consistent layout across all pages. Each page begins with a sticky header containing the logo, navigation links, search bar, theme toggle and mobile menu. Page content is organized through hero sections, cards, forms and full-width content bands. The footer appears across pages with newsletter, service links, social icons and official external links.

Home page wireframe: The home page contains a hero image, promotional cards, service category grid, why choose section, testimonial cards, success story call-to-action and newsletter band.

Canada Immigration page wireframe: The page contains a hero section, Canada visa service cards, promotional call-to-action, FAQ accordion, recommendation widget and inquiry form with CV upload.

Other Countries page wireframe: The page contains a hero, international country cards, scholarship promotion, FAQ accordion, recommendation widget and inquiry form.

Legal Services page wireframe: The page contains legal advisory cards, trust badges, FAQ content and a legal inquiry form.

Consultation page wireframe: The page focuses on a booking form with required details, preferred date/time, consultation mode and CV upload, supported by location cards.

About Us page wireframe: The page includes company background, mission, vision, values, advisory roles, credentials, success stories, testimonials and a review form.

Career page wireframe: The page includes career role cards and a career application form with CV upload.

Contact page wireframe: The page includes contact cards, map placeholders, contact form, social media buttons and official links.

[Insert Wireframe Screenshots Here]

Figma Prototype Link: [Paste Figma Prototype Link Here]

## 5.4 Storyboard
The storyboard explains the main user journey through the website.

Service Discovery -> Service Selection -> Inquiry/Booking -> Form Submission -> Confirmation

Service Discovery: A user opens the Home page, sees Gen-Ardent branding, visa promotions, service cards and the search bar.

Service Selection: The user searches for terms such as Canada visa, scholarship, legal service or consultation and selects a relevant page.

Inquiry/Booking: The user reads service details, opens FAQ sections and chooses either an inquiry form or the consultation booking form.

Form Submission: JavaScript validates required fields, email format and file upload type where applicable. The form does not reload the page.

Confirmation: A success message appears after valid submission, and demo data is saved in localStorage where a storage key is defined.

[Insert Storyboard Screenshot Here]

## 5.5 Style Guide / Design Tokens
The design style is professional, trustworthy, clean and global. It uses a blue, red and gold palette to communicate trust, Canada focus and premium service quality.

| Design Token | Value / Description |
|---|---|
| Primary color | #0B3D91, used for main buttons, links and trust-focused highlights. |
| Primary dark | #082F6F, used for hover states. |
| Secondary / Canada red | #D71920, used for Canada-focused accents. |
| Navy | #09213F, used for dark footer and strong brand areas. |
| Accent | #F4B400, used for scholarship highlights and accent buttons. |
| Light background | #F8FAFC. |
| Light surface | #FFFFFF. |
| Dark background | #0F172A. |
| Dark surface | #1E293B. |
| Text | #1A202C in light mode and #E5E7EB in dark mode. |
| Typography | Headings use Poppins; body text uses Inter. |
| Buttons | Primary buttons are blue, accent buttons are gold, and secondary buttons use transparent/border styling. |
| Iconography | Font Awesome icons are used in navigation, cards, buttons, forms, badges and chatbot. |
| Layout | Maximum container width is 1200px. CSS grid and flexbox organize cards, forms and split sections. |
| Light mode | Default theme uses light background and dark text. |
| Dark mode | body.dark-mode changes CSS variables for dark colors. |

# 6. Task B - Development and Implementation
## 6.1 Technologies Used
HTML5 is used to build the page structure. The project uses semantic elements such as header, nav, main, section, article, form and footer. These tags improve readability and make the website easier to maintain.

CSS3 is used for styling, layout, responsive design, dark mode, transitions, animations and hover effects. The stylesheet defines CSS custom properties in :root and alternative values under body.dark-mode. Media queries control the responsive layout for desktop, tablet and mobile.

JavaScript is used for interactivity. The file src/js/script.js controls the search bar, chatbot, form validation, FAQ accordion, theme toggle, scroll-to-top button, newsletter subscription, recommendation feature, review rendering, loading indicator and localStorage behavior.

Font Awesome is used for icons through a CDN link. Google Fonts provides the Poppins and Inter font families. localStorage saves user preferences and simulated submissions such as newsletter emails, inquiries, bookings and reviews.

## 6.2 Website Pages Implemented
| Page | Purpose | Main Sections / Features | Screenshot Placeholder |
|---|---|---|---|
| Home Page | Introduces the brand and directs users to major services. | Hero, promotional cards, service cards, why choose section, testimonials, success highlight, newsletter, chatbot and footer. | [Insert Home Page Screenshot Here] |
| Canada Immigration Page | Presents Canada-focused immigration services. | Service cards, Canada CTA, FAQ, recommendation selector, Canada inquiry form and CV upload. | [Insert Canada Immigration Page Screenshot Here] |
| Other Countries Page | Presents non-Canada visa pathways. | Country cards, scholarship promotion, FAQ, recommendation selector, inquiry form and CV upload. | [Insert Other Countries Page Screenshot Here] |
| Legal Services Page | Presents immigration legal support. | Advisory cards, trust section, before-submit guidance, legal inquiry form and FAQ. | [Insert Legal Services Page Screenshot Here] |
| Consultation Booking Page | Allows users to request a consultation. | Booking form, country/service/date/time/mode fields, CV upload and location cards. | [Insert Consultation Page Screenshot Here] |
| About Us Page | Builds trust through company details. | Company background, values, roles, certifications, success stories, testimonials and review form. | [Insert About Page Screenshot Here] |
| Career Page | Allows job applicants to apply. | Job cards, career application form and CV upload. | [Insert Career Page Screenshot Here] |
| Contact Page | Provides contact and location information. | Office cards, map placeholders, contact form, official links and social links. | [Insert Contact Page Screenshot Here] |

# 7. Feature Explanation
## 7.1 Search Bar Explanation
The search bar is placed in the shared navigation area of every page. In mobile view, a search icon opens the search box. The search feature is implemented in src/js/script.js using the searchData array. Each search item contains a title, page URL, description and keywords.

Users can search keywords such as Canada, express entry, PNP, student visa, work visa, family sponsorship, PR, visit visa, nurse migration, Australia, UK, USA, Europe, scholarship, legal, appeal, refusal, refugee, consultation, appointment, CV upload, reviews, careers and contact.

When the user types in the search input, setupSearch() converts the query to lowercase and filters searchData by matching the title, description and keyword list. The first six matching results are displayed in a dropdown as clickable links. If no match is found, the website displays a No results found message and suggests terms such as Canada, scholarship, legal, booking or contact. This improves usability because users can quickly find the correct service without manually checking every page.

## 7.2 Chatbot Explanation
The chatbot is a rule-based chatbot. It is included as a floating widget on all pages. The user can open it using the chat button, type a question and submit the chatbot form. The JavaScript function setupChatbot() handles opening, closing and message submission.

The chatbot uses the chatbotReplies array in src/js/script.js. Each reply contains keyword groups and a predefined response. The function findChatbotReply() checks the user message in lowercase and returns the matching response. It answers common queries such as hi, Canada visa, scholarship, consultation, legal service, contact, office location, nurse migration and family sponsorship.

This chatbot is suitable because the project is a client-side academic application and does not require a real-time AI API or backend integration. It still demonstrates interactive support and gives users quick guidance.

## 7.3 FAQ Accordion Explanation
FAQ accordions are used on the Canada Immigration, Other Countries and Legal Services pages. Each FAQ question is a button with the class faq-question. The JavaScript function setupFaqs() adds click events to these buttons. When a question is clicked, the closest faq-item receives or removes the open class, aria-expanded is updated and the answer height is changed using scrollHeight.

This improves readability because long FAQ content does not overload the page. Users can open only the answers they want to read.

## 7.4 Form Validation Explanation
Forms that require validation use the data-validate attribute. The JavaScript function setupValidatedForms() attaches submit events to these forms and prevents the default browser page reload. The validateForm() function checks required fields, verifies email format and validates file upload type where applicable.

Consultation form validation is implemented in src/consultation.html. It checks full name, email, phone, country of interest, service type, preferred date, preferred time, consultation mode, message and CV upload.

Inquiry form validation appears on Canada, Other Countries and Legal Services pages. The Canada and Other Countries forms include CV upload, while the Legal Services form collects legal issue details.

Career application validation appears in src/career.html. It checks applicant name, email, phone, selected position, cover message and CV upload.

The Contact form validates name, email, phone, subject and message. The Review form validates reviewer name, country, rating and review. After successful validation, a success message is displayed and form data is saved in localStorage if the form includes a storage key.

## 7.5 CV Upload Explanation
CV upload is implemented using input type="file". The project accepts PDF, DOC and DOCX file extensions in the Canada inquiry form, Other Countries inquiry form, Consultation form and Career application form. The setupFileInputs() function displays the selected filename in a span with the class file-name.

Since this is a client-side-only project, the file is not uploaded to a real server. The upload is simulated for demonstration. If the selected file type is invalid, validateForm() displays the error Upload a .pdf, .doc or .docx file.

## 7.6 Newsletter Subscription Explanation
Newsletter forms are included on the Home page and in the footer of all pages. The setupNewsletterForms() function listens for form submission, validates the email address using isValidEmail(), saves new subscribers in localStorage under genArdentNewsletter and displays a success message. This supports marketing and user engagement by showing how a real website could collect interested leads.

## 7.7 Dark Mode / Light Mode Explanation
The website supports dark and light modes. The theme toggle button changes the body class to dark-mode. CSS variables inside body.dark-mode replace the normal colors with dark theme colors. The selected theme is saved in localStorage using the key genArdentTheme. When the page reloads, applySavedTheme() restores the saved preference or uses the system dark mode preference if no saved value exists.

## 7.8 Scroll-to-Top Button Explanation
The scroll-to-top button is included at the bottom of every page. setupScrollTop() listens to the window scroll event. When the user scrolls more than 420 pixels, the visible class is added to the button. Clicking the button calls window.scrollTo with smooth behavior and returns the user to the top of the page. This improves navigation, especially on long pages.

## 7.9 Responsive Design Explanation
The website supports desktop, tablet and mobile screen sizes. CSS grid and flexbox are used for layout. Media queries at 1100px, 860px and 680px adjust navigation, card columns, hero layout, forms, footer columns and search behavior. On smaller screens, navigation collapses into a menu button, card grids stack into one column and the search bar can be opened with an icon.

## 7.10 Maps and External Links Explanation
The Contact page includes office cards and map placeholder cards for Kollupitiya, Galle and Atlantic Canada. The site also includes official external links such as Immigration Sri Lanka, Foreign Affairs Sri Lanka and Sri Lanka Tourism. Social media links for Facebook, Instagram and LinkedIn support client engagement and brand visibility.

# 8. Code Explanation
## 8.1 HTML Code Explanation
The official assignment version is located in the src folder. The README instructs users to open src/index.html in a browser. Each HTML file links to src/css/style.css and src/js/script.js, loads Google Fonts and Font Awesome, and includes a shared header, navigation, footer, chatbot and scroll-to-top button.

| HTML File | Page Purpose | Main Content and Actual Code Features |
|---|---|---|
| src/index.html | Home page for first impression and service discovery. | Contains the splash loader logo, sticky header, hero section, promotional cards, service cards, why choose section, testimonials preview, success story highlight, newsletter form, footer, chatbot and scroll-to-top button. |
| src/canada.html | Canada Immigration page. | Contains Canada service cards, CTA band, FAQ accordion, Canada recommendation selector and a validated Canada inquiry form with CV upload. |
| src/other-countries.html | Other Countries page. | Contains Australia, New Zealand, UK, USA and Europe service cards, scholarship promotion, FAQ, global pathway recommendation selector and inquiry form with CV upload. |
| src/legal-services.html | Legal Services page. | Contains legal advisory cards, trust guidance, before-submit information and a validated legal inquiry form. |
| src/consultation.html | Consultation Booking page. | Contains the main consultation booking form with country, service, date, time, mode and CV upload fields plus consultation location cards. |
| src/about.html | About Us and success/review page. | Contains company profile, values, advisory roles, certifications, success stories, testimonials, dynamic review area and review submission form. |
| src/career.html | Career page. | Contains current roles and a career application form with CV upload and validation. |
| src/contact.html | Contact page. | Contains office cards, map placeholders, contact form, official external links and social media buttons. |

The project uses semantic HTML tags. The header tag stores the top navigation. nav stores the primary links. main contains the unique content of each page. section organizes page areas such as hero, services, FAQ and forms. form defines interactive input areas. footer stores links, newsletter and social details. These tags make the structure professional and readable.

HTML Code Snippet:
```html
<header class="site-header">
  <div class="container nav-shell">
    <a class="brand" href="index.html" aria-label="Gen-Ardent home">
      <span class="brand-mark"><img src="../assets/logo/gen-ardent-logo.png" alt="Gen-Ardent Immigration Sri Lanka logo"></span>
      <span class="brand-text"><span>Gen-Ardent</span><small>Immigration Inc Sri Lanka</small></span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="index.html">Home</a>
      <a href="canada.html">Canada</a>
      <a href="other-countries.html">Countries</a>
      <a href="legal-services.html">Legal</a>
      <a href="consultation.html">Consultation</a>
    </nav>
  </div>
</header>
```

[Insert HTML Code Snippet Here]

## 8.2 CSS Code Explanation
The CSS file is src/css/style.css. It defines the full visual design of the website. The :root selector stores design tokens such as primary colors, accent colors, surfaces, text colors, shadows, radius values, container width and navigation height. body.dark-mode overrides these variables for dark mode.

Global styles set box-sizing, smooth scroll behavior, body font, image responsiveness and basic element defaults. Typography rules style headings, paragraphs and buttons. The navbar styling controls the sticky header, brand logo, search area, nav links, mobile menu and theme/search icon buttons.

Hero section styling uses background images, overlay gradients, CTA buttons and hero statistics. Card styling controls service cards, promotional cards, testimonial cards and map cards. Form styling covers labels, input fields, select boxes, textareas, error messages, success messages and file-name display. FAQ styling controls the collapsed answer area and open state. Search result styling controls the dropdown. Chatbot styling controls the launcher, chat window, messages and input area. Scroll-to-top and reveal animation styles support interactive movement.

Responsive media queries adapt the layout. At max-width 1100px, the nav menu becomes a dropdown and grid columns reduce. At max-width 860px, split layouts stack and hero layout becomes more compact. At max-width 680px, the brand mark is smaller, the search bar becomes fixed and most grids become one column.

CSS Code Snippet:
```css
:root {
  --primary: #0B3D91;
  --secondary: #D71920;
  --navy: #09213F;
  --accent: #F4B400;
  --background: #F8FAFC;
  --surface: #FFFFFF;
}

body.dark-mode {
  --background: #0F172A;
  --surface: #1E293B;
  --text: #E5E7EB;
}
```

[Insert CSS Code Snippet Here]

## 8.3 JavaScript Code Explanation
The JavaScript file is src/js/script.js. It begins with data arrays for search results, chatbot replies and recommendation messages. When the DOMContentLoaded event fires, JavaScript calls setup functions for every interactive feature: applySavedTheme(), setupLoader(), setupMobileNavigation(), setupActiveNavigation(), setupSearch(), setupFaqs(), setupChatbot(), setupNewsletterForms(), setupValidatedForms(), setupFileInputs(), setupReviews(), setupRecommendations(), setupScrollTop() and setupRevealAnimations().

setupMobileNavigation() controls the mobile menu button and mobile search button. It also controls the theme toggle and saves the selected theme.

setupSearch() reads the user input, filters the searchData array, displays result links and shows a No results found message when no item matches.

setupFaqs() controls the accordion behavior by adding and removing the open class and changing maxHeight.

setupChatbot() opens/closes the chatbot and handles form submission. appendChatMessage() adds user and bot messages to the chat window. findChatbotReply() searches predefined keyword groups and returns a matching response.

setupValidatedForms() processes all forms with data-validate. validateForm() checks required fields, email format and file extension. saveFormData() stores demo form submissions in localStorage when a data-storage-key is present.

setupNewsletterForms() validates newsletter emails and saves them to localStorage. setupFileInputs() displays selected file names. setupReviews(), addReviewFromForm() and renderReview() store and display dynamic reviews. setupRecommendations() shows pathway suggestions based on selected interest. setupScrollTop() controls the scroll button. setupRevealAnimations() uses IntersectionObserver for reveal effects.

JavaScript Code Snippet:
```javascript
const matches = searchData.filter((item) => {
  const searchable = [item.title, item.description, ...item.keywords].join(" ").toLowerCase();
  return searchable.includes(query);
}).slice(0, 6);
```

```javascript
document.body.classList.toggle("dark-mode", isDark);
localStorage.setItem("genArdentTheme", isDark ? "dark" : "light");
```

[Insert JavaScript Code Snippet Here]

## 8.4 Code Quality Explanation
The project separates structure, styling and behavior into HTML, CSS and JavaScript. HTML files are page-based and easy to understand. CSS uses reusable classes such as container, section, grid, card, btn, form-panel, faq-item, chatbot and reveal. JavaScript is organized into clear feature functions rather than one large block of mixed code.

The website is client-side and does not require a backend. This makes it easy to run by opening src/index.html in a browser. localStorage demonstrates persistence for theme preference, newsletter subscriptions, form submissions and reviews. The code can be extended in the future by replacing localStorage with backend API calls.

# 9. Feature Checklist
| Feature | Implemented: Yes/No | Description |
|---|---|---|
| Home page | Yes | Implemented in src/index.html with hero, promotions, services and testimonials. |
| Canada Immigration page | Yes | Implemented in src/canada.html. |
| Other Countries page | Yes | Implemented in src/other-countries.html. |
| Legal Services page | Yes | Implemented in src/legal-services.html. |
| Consultation Booking page | Yes | Implemented in src/consultation.html. |
| About Us page | Yes | Implemented in src/about.html. |
| Career page | Yes | Implemented in src/career.html. |
| Contact page | Yes | Implemented in src/contact.html. |
| Search bar | Yes | Implemented through searchData and setupSearch(). |
| FAQ accordion | Yes | Implemented through faq-question buttons and setupFaqs(). |
| Inquiry forms | Yes | Canada, other countries, legal and contact forms exist. |
| Consultation form | Yes | Consultation booking form exists. |
| Career form | Yes | Career application form exists. |
| CV upload | Yes | Used in Canada, Other Countries, Consultation and Career forms. |
| Newsletter subscription | Yes | Newsletter forms validate and save email locally. |
| Chatbot | Yes | Rule-based floating chatbot exists on pages. |
| Dark/light mode | Yes | Uses CSS variables, body.dark-mode and localStorage. |
| Scroll-to-top button | Yes | Appears after scrolling and returns to top. |
| Testimonials | Yes | Home and About include testimonial cards. |
| Success stories | Yes | About includes success story cards and Home includes success highlight. |
| Promotional advertisements | Yes | Promotional cards appear on Home and service pages. |
| Office locations | Yes | Contact and Consultation include office/location sections. |
| Maps | Yes | Contact page includes map placeholder cards. |
| Social media links | Yes | Facebook, Instagram and LinkedIn links are included. |
| External official links | Yes | Official links are included in footer/contact resources. |
| Responsive design | Yes | CSS media queries support desktop, tablet and mobile. |
| Loading indicator | Yes | site-loader and splash-card are implemented. |
| Smooth transitions | Yes | Buttons, cards, reveal animations and loader use transitions. |
| Hover effects | Yes | Cards, buttons, links and resource items include hover effects. |

# 10. Testing Table
| Test Case ID | Feature Tested | Test Input / Action | Expected Output | Actual Output | Status |
|---|---|---|---|---|---|
| TC01 | Navigation links | Click Home, Canada, Countries, Legal, Consultation, About, Career and Contact. | Correct pages open. | Navigation links point to the implemented src pages. | Pass |
| TC02 | Search bar | Type Canada. | Canada Immigration result appears. | searchData includes Canada keywords and displays matching result. | Pass |
| TC03 | Search bar no result | Type an unrelated word. | No results found message appears. | setupSearch() displays No results found with suggested terms. | Pass |
| TC04 | FAQ accordion | Click FAQ question on Canada page. | Answer expands and collapses. | setupFaqs() toggles open class and maxHeight. | Pass |
| TC05 | Consultation form empty submit | Submit without required fields. | Error messages appear. | validateForm() marks required fields. | Pass |
| TC06 | Consultation form valid submit | Fill all required fields and submit. | Success message appears and demo data is stored. | setupValidatedForms() saves data using storage key. | Pass |
| TC07 | Inquiry form | Submit Canada or Other Countries form with valid details. | Success message appears. | Forms use data-validate and data-storage-key. | Pass |
| TC08 | CV upload field | Select PDF, DOC or DOCX file. | File name is displayed. | setupFileInputs() writes selected filename. | Pass |
| TC09 | Invalid CV upload | Select unsupported file type. | Error message appears. | validateForm() checks allowed extensions. | Pass |
| TC10 | Chatbot replies | Type hi, scholarship, legal service or contact. | Correct predefined reply appears. | findChatbotReply() matches keyword groups. | Pass |
| TC11 | Newsletter subscription | Enter valid email. | Success message and stored email. | setupNewsletterForms() validates and saves email. | Pass |
| TC12 | Dark/light mode | Click theme toggle then reload page. | Theme preference remains. | genArdentTheme is saved in localStorage. | Pass |
| TC13 | Scroll-to-top button | Scroll down and click button. | Page returns to top smoothly. | setupScrollTop() calls window.scrollTo. | Pass |
| TC14 | Responsive layout | Resize to mobile width. | Menu collapses, cards stack and search opens from icon. | CSS media queries adjust layout. | Pass |
| TC15 | Contact page map | Open Contact page. | Map placeholder cards are visible. | Contact page includes office map placeholder section. | Pass |
| TC16 | Social media links | Click social links. | External social pages open in new tab. | Links use target="_blank" and rel="noopener". | Pass |

# 11. Screenshots Section
[Insert Home Page Screenshot]

[Insert Canada Immigration Page Screenshot]

[Insert Other Countries Page Screenshot]

[Insert Legal Services Page Screenshot]

[Insert Consultation Page Screenshot]

[Insert About Page Screenshot]

[Insert Career Page Screenshot]

[Insert Contact Page Screenshot]

[Insert Search Feature Screenshot]

[Insert Chatbot Screenshot]

[Insert Dark Mode Screenshot]

[Insert Mobile Responsive Screenshot]

# 12. Screen Recording Demonstration
The screen recording should demonstrate the project folder structure, the home page, navigation links, search functionality, service pages, FAQ accordions, consultation booking, inquiry forms, CV upload, chatbot, dark/light mode, About page reviews, Career page, Contact page and map section, scroll-to-top button, responsive mobile view, documentation PDF and final website overview.

Suggested recording order:
- Show the GenArdentWebApp folder and the src, css, js, assets and design folders.
- Open src/index.html and show the home page hero, promotions and services.
- Use the navigation bar to open Canada, Other Countries, Legal, Consultation, About, Career and Contact.
- Type Canada, scholarship and legal in the search bar.
- Expand FAQ items on service pages.
- Submit empty and valid forms to show validation and success states.
- Select a CV file in the upload field and show filename display.
- Ask the chatbot about hi, Canada visa, scholarship, legal service and contact.
- Toggle dark/light mode and refresh to show saved preference.
- Scroll down and use the scroll-to-top button.
- Resize the browser to mobile width and show mobile navigation.

# 13. Challenges and Solutions
| Challenge | Solution |
|---|---|
| Responsive design challenge | CSS grid, flexbox and media queries were used to make navigation, cards, forms and page sections adapt to desktop, tablet and mobile screens. |
| Search filtering challenge | A structured searchData array was created. JavaScript filters titles, descriptions and keywords to display relevant service links. |
| Form validation challenge | A reusable validateForm() function checks required fields, email format and allowed CV file extensions across multiple forms. |
| Chatbot predefined response challenge | chatbotReplies groups common keywords and returns useful predefined responses for client-side support. |
| Dark mode LocalStorage challenge | Theme selection is stored using genArdentTheme so the chosen mode remains after reload. |
| Maintaining design consistency challenge | CSS variables, reusable button classes, card classes, form classes and shared page layout keep the design consistent. |
| Client-side-only limitation | localStorage is used to simulate storing submissions, reviews and newsletter emails without a backend database. |

# 14. Conclusion
The Gen-Ardent Immigration web application successfully provides a professional, responsive and interactive client-side platform for immigration consultancy services. It supports service discovery, consultation booking, inquiries, CV upload, search, chatbot support, FAQs, promotional advertisements, testimonials, maps, dark/light mode and responsive design.

The system aligns with the business goals of credibility, lead generation, client engagement and global brand expansion. It presents Canada immigration services clearly while also covering other country pathways and legal support. The project demonstrates strong use of HTML5, CSS3 and JavaScript and is suitable for the IT1308 Web Application Development assignment.

# 15. References
Mozilla Developer Network (2026) HTML, CSS and JavaScript Documentation. Available at: https://developer.mozilla.org/ (Accessed: 10 June 2026).

W3Schools (2026) HTML, CSS and JavaScript Tutorials. Available at: https://www.w3schools.com/ (Accessed: 10 June 2026).

Figma (2026) UI/UX Design and Prototyping Tool. Available at: https://www.figma.com/ (Accessed: 10 June 2026).

Google Fonts (2026) Web Typography Resources. Available at: https://fonts.google.com/ (Accessed: 10 June 2026).

Font Awesome (2026) Icon Library. Available at: https://fontawesome.com/ (Accessed: 10 June 2026).

Government of Canada (2026) Immigration and citizenship. Available at: https://www.canada.ca/en/services/immigration-citizenship.html (Accessed: 10 June 2026).

Department of Immigration and Emigration Sri Lanka (2026) Official website. Available at: https://www.immigration.gov.lk/ (Accessed: 10 June 2026).
