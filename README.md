# Test task for QA learning program
This is a UI automation testing project for https://www.saucedemo.com/ built using WebdriverIO, Page Object Model (POM), and Allure Reports.
The main goal of this project is to demonstrate clean test automation architecture, maintainability, and good QA engineering practices.

## Page Object Model (POM)
All UI interactions are encapsulated inside Page Objects.

Key principles:
- No assertions inside Page Objects
- Only UI actions and selectors

## Reporting (Allure)
This project uses Allure Reports for better test visibility and debugging.
 
Run report:
```
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Possible improvements
- Add reusable components (Header/Footer)
- Introduce test data management layer
- Improve logging and debugging utilities
