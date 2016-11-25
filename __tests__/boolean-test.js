/* eslint-disable react/prop-types */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { boolean } from '../src';

describe('edit.boolean', function () {
  it('renders given value', function () {
    const testValue = false;
    const Boolean = boolean();
    const result = TestUtils.renderIntoDocument(
      <Wrapper>
        <Boolean value={testValue} onValue={() => {}} />
      </Wrapper>
    );

    const renderedButtons = TestUtils.scryRenderedDOMComponentsWithTag(
      result, 'button'
    );

    expect(renderedButtons.length).toEqual(2);
    expect(renderedButtons[0].disabled).toEqual(testValue);
    expect(renderedButtons[1].disabled).toEqual(!testValue);
  });

  it('triggers onValue when value is false', function () {
    let changedValue = false;
    const Boolean = boolean();
    const result = TestUtils.renderIntoDocument(
      <Wrapper>
        <Boolean
          value={false}
          onValue={() => {
            changedValue = true;
          }}
        />
      </Wrapper>
    );

    const renderedButtons = TestUtils.scryRenderedDOMComponentsWithTag(
      result, 'button'
    );

    TestUtils.Simulate.click(renderedButtons[0]);

    expect(changedValue).toEqual(true);
  });

  it('triggers onValue when value is true', function () {
    let changedValue = false;
    const Boolean = boolean();
    const result = TestUtils.renderIntoDocument(
      <Wrapper>
        <Boolean
          value
          onValue={() => {
            changedValue = false;
          }}
        />
      </Wrapper>
    );

    const renderedButtons = TestUtils.scryRenderedDOMComponentsWithTag(
      result, 'button'
    );

    TestUtils.Simulate.click(renderedButtons[1]);

    expect(changedValue).toEqual(false);
  });

  it('accepts custom props', function () {
    const testClassName = 'demo';
    const Boolean = boolean({
      props: { className: testClassName }
    });
    const result = TestUtils.renderIntoDocument(
      <Wrapper>
        <Boolean value={'name'} onValue={() => {}} />
      </Wrapper>
    );

    const renderedDiv = TestUtils.findRenderedDOMComponentWithClass(
      result, testClassName
    );

    expect(renderedDiv).toBeDefined();
  });
});

class Wrapper extends React.Component { // eslint-disable-line max-len, react/prefer-stateless-function
  render() {
    return <div>{this.props.children}</div>;
  }
}
