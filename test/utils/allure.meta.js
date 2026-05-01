import allure from '@wdio/allure-reporter';

export const feature = (name) => allure.addFeature(name);
export const story = (name) => allure.addStory(name);
export const severity = (level) => allure.addSeverity(level);