import FillRoboForm from '../pageobjects/robot.form.page';
import allureReporter from '@wdio/allure-reporter'
import { WDIOType } from '../../../config/types/types'

describe('Interact with elements on the web page', () => {
    // $$
    it('should can interact getting an element from a list', () => {
        FillRoboForm.open();   
        FillRoboForm.getElemetFromList();
    });

    it('should clear a value', () => {
        browser.takeScreenshot();
        allureReporter.addSeverity('critical')
        FillRoboForm.open(); 
        FillRoboForm.checkClearValues('Doctor');
    });

    it('get text from table cell', () => {
        browser.url('http://the-internet.herokuapp.com/tables');
        const rows: WDIOType = $$('#table1 tr');
        const columns = rows[2].$$('td'); // get columns of 2nd row
        console.log(columns[2].getText()); // get text of 3rd column
    });

    it('should check if the element is clickable', () => {
        FillRoboForm.open();
        FillRoboForm.checkIfElementIsClickable();
    });

    it('should check if the element exist on the page', () => {
        FillRoboForm.checkIsDisplayedInViewport();
    });

    it('should check if the element is Enable on any part of the web page', () => {
        FillRoboForm.checkIsEnable();
    });

    it('should check if the element exist on any part of the web page', () => {
        FillRoboForm.checkIsExisting();
    });

    it('should copy value in the field', () => {
        FillRoboForm.checkSetValue('Seventh Avenue ', 'north of Central Park', 'New York City' );
    });
})