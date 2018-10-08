import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import CssHCenter1 from '../CssCenter/example1';
import CssHCenter2 from '../CssCenter/example2';
import CssHCenter3 from '../CssCenter/example3';
import CssHCenter4 from '../CssCenter/example4';
import CssHCenter5 from '../CssCenter/example5';
import CssHCenter6 from '../CssCenter/example6';
import CssHCenter7 from '../CssCenter/example7';
import CssVCenter1 from '../CssCenter/example8';
import CssVCenter2 from '../CssCenter/example9';
import CssVCenter3 from '../CssCenter/example10';
import CssVCenter4 from '../CssCenter/example11';
import CssVCenter5 from '../CssCenter/example12';
import CssVCenter6 from '../CssCenter/example13';
import CssVCenter7 from '../CssCenter/example14';
import CssVCenter8 from '../CssCenter/example15';

storiesOf('前端', module)
.addWithChapters(
  'Css居中方法',
  {
    chapters: [
      // List of chapters. Refer to Configuration Format section.
      {
        title: '水平居中方法',
        sections: [
          // List of sections.
          {
            subtitle: '1）flex水平居中',
            info: `
                  A:
                  display: flex;
                  justify-content: center;
                  子元素B水平居中 \n
                  B:  display: flex;
                  justify-content: center;
                  子元素C水平居中 \n

                `,
            sectionFn: () => (<CssHCenter1 />),
          },
          {
            subtitle: '2）text-align',
            info: `
                  A: text-align: center;行内元素B水平居中
                `,
            sectionFn: () => (<CssHCenter2 />),
          },
          {
            subtitle: '3）margin-auto',
            info: `
                B:
                width: 200px;
                margin: 0 auto;
                块级元素B水平居中，行内元素若要通过margin居中可以设置其display属性为block。
                `,
            sectionFn: () => (<CssHCenter3 />),
          },
          {
            subtitle: '4）position',
            info: `
                A:width: 500px;
                position: relative;\n
                B:
                position: absolute;
                left: 180px;
                width: 140px;\n
                子元素B相对于父元素A的left为父元素宽度减去子元素宽度的一半， 因此必须知道父子元素的宽度。
                `,
            sectionFn: () => (<CssHCenter4 />),
          },
          {
            subtitle: '5）position + margin-left',
            info: `
                A:
                position: relative;\n
                B:
                position: absolute;
                left: 50%;
                margin-left: -70px;
                width: 140px;\n
                不需要知道父子元素的宽度，通过margin-left设置为自身的一半宽度的负值达到向左偏移自身的一半宽度， 与4)中的实现方法本质是一样的。\n
                需要知道子元素B的宽度。
                `,
            sectionFn: () => (<CssHCenter5 />),
          },
          {
            subtitle: '6）position + transform',
            info: `
                A:
                position: relative;\n
                B:
                position: absolute;
                left: 50%;
                transform: translateX(-50%);\n
                不需要知道父子元素的宽度，先定位到父元素的水平中心位置再通过transform向左偏移自身的一半宽度， 与4)中的实现方法本质是一样的。\n
                transform只对块级元素有效。
                `,
            sectionFn: () => (<CssHCenter6 />),
          },
          {
            subtitle: '7）fit-content',
            info: `
            结构："<A>
                  <B>
                   <li>Meat</li>
                   ...
                  </B>
                 </A>"\n
                A(div):
                position: relative;
                width: 500px;\n
                B(ul):
                width: fit-content;
                margin: 0 auto;\n
                li: float: left;
                子元素B水平居中
                `,
            sectionFn: () => (<CssHCenter7 />),
          },
        ],
      },
      {
        title: '垂直居中方法',
        sections: [
          // List of sections.
          {
            subtitle: '1）flex垂直居中',
            info: `
                  A:
                  display: flex;
                  align-items: center;
                  子元素B垂直居中 \n
                  B:  display: flex;
                  align-items: center;
                  子元素C垂直居中 \n

                `,
            sectionFn: () => (<CssVCenter1 />),
          },
          {
            subtitle: '2）position + margin-auto',
            info: `
                  A:
                  position: relative; \n
                  B: position: absolute;
                  top: 0;
                  bottom: 0;
                  height: 50px;
                  margin: auto 0;\n
                  子元素B高度固定，B垂直居中 

                `,
            sectionFn: () => (<CssVCenter2 />),
          },
          {
            subtitle: '3）position',
            info: `
                  A:
                  position: relative;
                  height:150px; \n
                  B: position: absolute;
                  top: 50;
                  height: 50px;\n
                  子元素B相对于父元素A的高top为父元素高度减去子元素高度的一半，因此必须知道父子元素的高度 
                `,
            sectionFn: () => (<CssVCenter3 />),
          },
          {
            subtitle: '4）position + margin-top',
            info: `
                  A:
                  position: relative;
                  height:150px; \n
                  B: position: absolute;
                  top: 50%;
                  margin-top: -25px;
                  height: 50px;\n
                  子元素B相对于父元素A的top为父元素高度的一半，margin-top为子元素高度一半的负值，因此必须知道子元素的高度。 
                `,
            sectionFn: () => (<CssVCenter4 />),
          },
          {
            subtitle: '5）position + transform',
            info: `
                  A:
                  position: relative; \n
                  B: position: absolute;
                  top: 50%;
                  transform: translateY(-50%);\n
                  子元素B相对于父元素A的top为父元素高度的一半，通过translateY(-50%)使子元素向上偏移自己一半的高度，本质上与3）、4）中的方法一样。 
                  不需要知道父子元素的高度。
                `,
            sectionFn: () => (<CssVCenter5 />),
          },
          {
            subtitle: '6）vertical-align',
            info: `
                子元素B垂直居中。
                结构: <table>
                        <td>
                          <th>
                            <B />
                          </th>
                        </td>
                     </table>
                     \n
                  A(th): 
                  height: 70px;
                  vertical-align: middle; \n
                  只有当元素的父元素为td/th，且高度固定时，设置vertical-align: middle有效。
                  其他元素若要使用vertical-align，需将父元素设置为isplay:table, 子元素设置为display:table-cell;vertical-align:middle;
                `,
            sectionFn: () => (<CssVCenter6 />),
          },
          {
            subtitle: '7）line-height',
            info: `
                  A(div): 
                  height: 100px; \n
                  B(span) :
                  line-height: 100px;
                  B为单行文本，通过设置其line-height为父元素高度，使其垂直居中。
                `,
            sectionFn: () => (<CssVCenter7 />),
          },
          {
            subtitle: '8）inline-block',
            info: `
                  A(div): 
                  &:after {
                    content: "";
                    height: 100%;
                    vertical-align: middle;
                    display: inline-block;
                  } \n
                  B(p) :
                  vertical-align: middle;
                  display: inline-block;\n
                  父元素A添加伪元素，伪元素与父元素同高且为行内块级元素(display: inline-block)、居中对齐，
                  子元素B设置为行内块级元素， 居中对齐。
                `,
            sectionFn: () => (<CssVCenter8 />),
          },
        ],
      },
    ],
  }
);