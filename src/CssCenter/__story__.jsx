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
          
        ],
      },
    ],
  }
);