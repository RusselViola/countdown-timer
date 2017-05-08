import React from 'react';
import ReactDOM from 'react-dom';
import Timer from 'Timer';

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();

  });
  it('should start timer on started status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001)

  // it('should start timer on started status', () => {
  //   let timer = TestUtils.renderIntoDocument(<Timer/>);
  //
  //   timer.handleStatusChange('started');
  //   expect(timer.state.count).toBe(0);
  //
  //   setTimeout(() => {
  //     expect(timer.state.timerStatus).toBe('started');
  //     expect(timer.state.count).toBe(1);
  //     done();
  //   }, 1001)
  // });

  });
});
