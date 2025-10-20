# 🧩 Testable Profile Card

A responsive, accessible profile card built with **semantic HTML**, **CSS**, and **vanilla JavaScript**.  
Designed to meet testing requirements for the 3MTT project — including full `data-testid` coverage, accessibility, responsiveness, and keyboard navigation.

---

## 🚀 Live Demo

**🔗 [View on GitHub Pages](https://your-username.github.io/profile-card/)**  
_(Replace with your actual link after publishing)_

---

## 🗂️ Project Structure

profile-card/

├── README.md
├── index.html
├── style.css
└── script.js


All source files are stored in the `/docs` folder for GitHub Pages deployment.

---

## 🧠 Features

✅ Fully **semantic HTML** structure  
✅ **Accessible** (keyboard navigable, alt text, aria-labels)  
✅ **Responsive layout** using Flexbox  
✅ Displays **current time in milliseconds** (live update via JavaScript)  
✅ Includes **data-testid** attributes for automated testing  
✅ Opens social links securely in new tabs (`target="_blank" rel="noopener noreferrer"`)  

---

## 🧰 Technologies Used

- **HTML5**
- **CSS3 (Flexbox, responsive design)**
- **Vanilla JavaScript (ES6)**

No external frameworks or libraries were used.

---

## ⚙️ How to Run the Project Locally

Follow these steps to run the Profile Card on your own computer:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/profile-card.git
```


2️⃣ Navigate into the Folder

```bash
cd profile-card/docs
```

3️⃣ Open in Browser

Simply open the index.html file in your browser:

- On Windows:

```bash
start index.html
```

- On macOS:

```bash
open index.html
```

- Or manually double-click index.html in your file explorer.

✅ The profile card will display instantly with all features working offline.

## 🧪 Testing & Verification

Automated tests can use the data-testid attributes to verify structure and content.
Below are some relevant test points for QA or CI pipelines:

|Element	|Test ID	|Expected Behavior|
|---------|---------|-----------------|
|Profile Card Container	|test-profile-card	|Exists and visible|
|User Name	|test-user-name	|Contains a non-empty name string|
|User Bio	|test-user-bio	|Displays a short paragraph|
|Current Time	|test-user-time	|Returns a value within ±1000ms of Date.now()|
|Avatar Image	|test-user-avatar	|Renders with a valid src and alt|
|Social Links Container	|test-user-social-links	|Contains one or more links|
|Individual Social Link	|test-user-social-twitter, etc.	|Opens in new tab|
|Hobbies List	|test-user-hobbies	|Contains at least one <li>|
|Dislikes List	|test-user-dislikes	|Contains at least one <li>|
|Accessibility	|—	|Keyboard navigation works; visible focus on links|
|Responsiveness	|—	|Layout adapts at mobile/tablet/desktop breakpoints|

You can validate these tests using tools like:

- Playwright, Cypress, or Jest + Testing Library
- Browser DevTools → inspect data-testid attributes
- Manual keyboard-only navigation

## 🧩 Notes & Implementation Details

- The time display updates every second using Date.now() in JavaScript.
- Avatar images accept any valid URL.
- All links include rel="noopener noreferrer" for security.
- CSS is fully responsive; uses Flexbox for layout.
- Project intentionally excludes frameworks (no React, no Bootstrap).

## 🌍 Deployment (GitHub Pages)

1. Ensure your site files are in /docs
2. Go to Settings → Pages
3. Under Build and deployment, set:
   - Branch: main
   - Folder: /docs
4. Click Save
5. Wait ~60 seconds — your live link appears like:

``` arduino
https://your-username.github.io/profile-card/
```
## 🧾 License

This project is provided for educational purposes under the MIT License

##👨🏽‍💻 Author

Abraham Aigbokhan
- 🌐 LinkedIn
- 💻 GitHub
