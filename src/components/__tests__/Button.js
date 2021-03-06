import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  it('renders a basic button', () => {
    const wrapper = render(<Button className="custom-class" href="example.com">Button</Button>);
    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="button custom-class">
        <tr>
          <td>
            <table>
              <tr>
                <td><a href="example.com">Button</a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `);
  });

  it('allows a target to be set', () => {
    const wrapper = render(<Button href="example.com" target="_blank" />);
    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="button">
        <tr>
          <td>
            <table>
              <tr>
                <td><a href="example.com" target="_blank"></a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `);
  });

  it('renders an expanded button', () => {
    const wrapper = render(<Button className="expand" href="example.com" />);
    expect(wrapper.html()).html.to.equal(`
      <table is="true" class="button expand">
        <tr>
          <td>
            <table>
              <tr>
                <td>
                  <center><a is="true" href="example.com" align="center" class="float-center"></a></center>
                </td>
              </tr>
            </table>
          </td>
          <td class="expander"></td>
        </tr>
      </table>
    `);
  });
});
