<!--
    #/**
    # * @author Rajat Verma
    # * Email: rajatvermaa95@gmail.com
    # * GitHub Profile: https://github.com/rajatt95
    # * GitHub Page: https://rajatt95.github.io/
    # * LinkedIn: https://www.linkedin.com/in/rajatt95/
    # * Topmate: https://topmate.io/rajatt95
    # * Telegram: https://t.me/rajatt95
    # * Instagram: https://www.instagram.com/rajattvermaa95/
    # * YouTube: https://www.youtube.com/@rajatt95
    # * WhatsApp Community: https://chat.whatsapp.com/DVRP0ViD0YwELUKF2XMJHy
    # * WhatsApp Channel: https://whatsapp.com/channel/0029Va9XXMhJ93waOU5Xer3r
    # */
    #/***************************************************/
-->
---
# 💻 Test Automation Framework | WEB 

[![Playwright](https://img.shields.io/badge/Playwright-34495E?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
 

[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Playwright HTML Reporter](https://img.shields.io/badge/Playwright%20HTML%20Reporter-<COLOR>?style=for-the-badge&logo=playwright&logoColor=white)](https://www.npmjs.com/package/playwright-html-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents
<!-- # - [Video Tutorial](#video-tutorial) -->
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)
- [Other Projects](#other-projects)
- [Technical Documents](#technical-documents)
- [Contacts](#contacts)

## 📖 Introduction
This repository contains a **Test Automation Framework** built with **Playwright** and **TypeScript** for testing **web applications**.


<!-- ## 🎥 Video Tutorial

<a href="https://www.youtube.com/watch?v=g0nG6aPbpl4&list=PLrBBHmoBFxBUu9G7haETpa0B03H9GnfKX"> <img src="https://img.youtube.com/vi/g0nG6aPbpl4/0.jpg" alt="Test Automation Framework | WEB | Cypress + JS" width="200"> </a>

Click on the image above to watch the tutorials. -->

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v18.16.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## ▶️ Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rajatt95/TestAutomationFramework_YT_Rajat_Web_Playwright_TS.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd TestAutomationFramework_YT_Rajat_Web_Playwright_TS
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## 🚀 Running Tests

- **Playwright UI mode:**

  ```bash
  npm run tests:ui-mode
  ```
- **Playwright Debug mode:**

  ```bash
  npm run tests:debug
  ```
- **Playwright Codegen:**

  ```bash
  npm run playwright:codegen
  ```

- **Execution in different browsers:**

  - [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
[![WebKit](https://img.shields.io/badge/WebKit-689F63?style=for-the-badge&logo=webkit&logoColor=white)](https://webkit.org/)
[![Chromium](https://img.shields.io/badge/Chromium-4A90E2?style=for-the-badge&logo=chromium&logoColor=white)](https://www.chromium.org/Home)


  ```bash
  npm run tests:CHROME
  ```
  ```bash
  npm run tests:EDGE
  ```
  ```bash
  npm run tests:FIREFOX
  ```
  ```bash
  npm run tests:WEBKIT
  ```
  ```bash
  npm run tests:CHROMIUM
  ```

- Execution in Headless mode:
  ```bash
  npm run tests:CHROME:HEADLESS
  ```

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
|-- .github
|     |-- workflows
|          |-- 01_ui_tests_chrome.yml
|          |-- 02_ui_tests_select_one.yml
|          |-- 03_ui_tests_ALL.yml
|-- pages
|     |-- BasePage.ts
|     |-- CartPage.ts
|     |-- Components.ts
|     |-- LoginPage.ts
|     |-- ProductsPage.ts
|-- test-data
|     |-- login_credentials.json
|-- tests-saucedemo
|     |-- components.spec.ts
|     |-- login.spec.ts
|-- utils
|     |-- VerificationUtils.ts
|     |-- WaitUtils.ts
|-- .gitignore
|-- package.json
|-- playwright.config.ts
```

- `pages`: Contains the Page Object Model (POM) classes representing web pages and their elements.
- `playwright-report`: Contains the HTML report for tests (Logs, Screenshots, Traces and Videos are attached).
- `test-data`: Contains external files (example: login credentials data) that can be used to mock data during tests.
- `tests-saucedemo`: Contains the actual test files. You can organize your tests into subdirectories as needed. 
- `utils`: Contains the Utilities that provides methods for asserting different conditions on web elements, waits.

## ⚙️ Configuration

- Modify `playwright.config.ts` for playwright configuration settings such as
  - `baseURL`
  - `testDir`
  - `reporter`
  - `fullyParallel`
  - `video`
  - `screenshot`
  - `trace`

## 🔄 Continuous Integration

This project is configured for CI using Github Actions. Check the configurations in `.github/workflows/*.yml`.

- `01_ui_tests_chrome.yml`: This workflow executes tests in Chrome browser.

- `02_ui_tests_select_one.yml`: This workflow will first ask User to select the browser for tests execution.

- `03_ui_tests_ALL.yml`: This workflow executes the tests in all browsers <!-- #(CHROME, EDGE, WEBKIT, CHROMIUM, FIREFOX) -->

  [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
  [![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
  [![WebKit](https://img.shields.io/badge/WebKit-689F63?style=for-the-badge&logo=webkit&logoColor=white)](https://webkit.org/)
  [![Chromium](https://img.shields.io/badge/Chromium-4A90E2?style=for-the-badge&logo=chromium&logoColor=white)](https://www.chromium.org/Home)

## 📊 Reporting

Playwright HTML report (Logs, Screenshots, Traces and Videos are attached) is stored in the `playwright-report` directory.

## 🔭 Other Projects

- [![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)](https://github.com/stars/rajatt95/lists/programming-language-java)  - 
  [![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)](https://github.com/stars/rajatt95/lists/selenium-automation-frameworks)
  [![Appium](https://img.shields.io/badge/Appium-40C4FF?style=for-the-badge&logo=appium&logoColor=white)](https://github.com/stars/rajatt95/lists/appium-automation-frameworks)
  [![Rest Assured](https://img.shields.io/badge/Rest%20Assured-5B47A5?style=for-the-badge&logo=rest-assured&logoColor=white)](https://github.com/stars/rajatt95/lists/restassured-automation-framework)

- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/stars/rajatt95/lists/programming-language-javascript) - 
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://github.com/stars/rajatt95/lists/cypress-automation-frameworks)
[![Playwright](https://img.shields.io/badge/Playwright-34495E?style=for-the-badge&logo=playwright&logoColor=white)](https://github.com/stars/rajatt95/lists/playwright-automation-frameworks)

- [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://github.com/stars/rajatt95/lists/programming-language-python) -
  [![Requests](https://img.shields.io/badge/Requests-2CA5E0?style=for-the-badge&logo=python&logoColor=white)](https://github.com/stars/rajatt95/lists/requests-automation-framework)

## 📄 Technical Documents

- [![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=google-drive&logoColor=white)](https://drive.google.com/drive/folders/1tne9pZjgWvfrS0l9tVHs6k1jnQHpTLoA?usp=sharing)
- [![GitHub Repository](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajatt95/Documents)

## 📧 Contacts

- [![Email](https://img.shields.io/badge/Email-rajatvermaa95%40gmail.com-green)](mailto:rajatvermaa95@gmail.com)
- [![GitHub Profile](https://img.shields.io/badge/GitHub-Profile-blue)](https://github.com/rajatt95)
- [![GitHub Page](https://img.shields.io/badge/GitHub-Page-lightgrey)](https://rajatt95.github.io/)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/rajatt95)
- [![Topmate](https://img.shields.io/badge/Topmate-Profile-red)](https://topmate.io/rajatt95)
- [![Telegram](https://img.shields.io/badge/Telegram-Channel-blue)](https://t.me/rajatt95)
- [![Instagram](https://img.shields.io/badge/Instagram-Profile-orange)](https://www.instagram.com/rajattvermaa95/)
- [![YouTube](https://img.shields.io/badge/YouTube-Channel-red)](https://www.youtube.com/@rajatt95)
- [![WhatsApp Community](https://img.shields.io/badge/WhatsApp-Community-brightgreen)](https://chat.whatsapp.com/LP20xMGvxnEL88GoB58bo1)
- [![WhatsApp Channel](https://img.shields.io/badge/WhatsApp-Channel-brightgreen)](https://whatsapp.com/channel/0029Va9XXMhJ93waOU5Xer3r)

Feel free to reach out if you have any questions, or suggestions, or just want to chat!

Thanks for visiting my GitHub profile! 😊

<p align="left"> <img src="https://komarev.com/ghpvc/?username=rajatt95&label=Profile%20views&color=0e75b6&style=flat" alt="rajatt95" /> </p>
