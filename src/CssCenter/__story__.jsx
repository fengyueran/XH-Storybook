import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import CssCenter1 from '../CssCenter/example1';
import CssCenter2 from '../CssCenter/example2';

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
            sectionFn: () => (<CssCenter1 />),
            options: {
              showSource: false,
              allowSourceToggling: true,
              showPropTables: false,
              allowPropTablesToggling: false,
            },
            
          },
          {
            subtitle: '2）text-align',
            info: `
                  A: text-align: center;行内元素B水平居中
                `,
            sectionFn: () => (<CssCenter2 />),
            options: {
              showSource: false,
              allowSourceToggling: true,
              showPropTables: false,
              allowPropTablesToggling: false,
            },
            
          },
        ],
      },
    ],
  }
);