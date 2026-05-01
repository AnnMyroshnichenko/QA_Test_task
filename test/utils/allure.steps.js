import allure from '@wdio/allure-reporter';

export const step = async (name, fn) => {
    allure.startStep(name);

    try {
        const result = await fn();
        allure.endStep('passed');
        return result;
    } catch (err) {
        allure.endStep('failed');
        throw err;
    }
};