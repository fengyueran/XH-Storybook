import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
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

storiesOf('Addons', module)
.add('withInfo',
  withInfo(`
    description or documentation about my component, supports markdown
  
    ~~~js
    <Button>Click Here</Button>
    ~~~
  
  `)(() =>
    <TestButton onClick={action('clicked')}>Test Button</TestButton>
  )
)
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
  )
.add('Dynamic variables without smart knob', () => {
  const name = text('Name', 'xhm');
  const age = number('Age', 17);

  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
})
.addDecorator(withSmartKnobs)
.add('Dynamic variables with smart knob', () => (<TestButton background={'blue'} />))
.add('withNotes', withNotes(`
    # Hello World

    This is some code showing usage of the component and other inline documentation

    ~~~js
    <div>
      hello world!
      <TestButton />
    </div>
    ~~~
  `)(() => <TestButton />))
  .add('withPropsCombinations', withPropsCombinations(
    // provide your component
    TestButton,
    // and an object with the shape
    // {propName: arrayOfPossiblevalues}
    {
      opacity: [0.5, 0.2, 1],
      background: ['red', 'blue'],
      onClick: [action('clicked')],
    }
  ));