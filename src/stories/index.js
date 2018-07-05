import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import TestButton from '../components/TestButton';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Addon Chapters')
  .addWithChapters(
    'Story With Chapters',
  {
    subtitle: 'subtitle',
    info: 'story info',
    chapters: [
      // List of chapters. Refer to Configuration Format section.
      {
        title: 'chapter1',
        subtitle: 'chapter1.1',
        info: 'chapter info',
        sections: [
          // List of sections.
          {
            title: 'section title',
            subtitle: 'section subtitle',
            info: 'section info',
            sectionFn: () => (<TestButton onClick={action('clicked')} background={'blue'} />),
            options: {
              showSource: true,
              allowSourceToggling: true,
              showPropTables: true,
              allowPropTablesToggling: true,
            },
          },
        ],
      },
    ],
  }
  );
