import React, { Children, cloneElement } from 'react';
import classnames from 'classnames';
import getAttrs from '../util/getAttrs';

export default function Menu(props) {
  return (
    <table is {...getAttrs(props, 'table', 'menu')}>
      <tr>
        <td>
          <table>
            {/* Modify `<Item />` components if the menu has a center attribute */}
            <tr>{Children.map(props.children, child => {
              if (props.align === 'center' && typeof child.type === 'function' && child.type.name === 'Item') {
                return cloneElement(child, {
                  className: classnames(child.props.className, 'float-center'),
                });
              }

              return child;
            })}</tr>
          </table>
        </td>
      </tr>
    </table>
  )
}
