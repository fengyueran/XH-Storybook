import { configure, addDecorator, setAddon } from '@storybook/react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';
import { withKnobs } from '@storybook/addon-knobs/react';

setAddon(chaptersAddon);
setDefaults({sectionOptions: {useTheme: false}});
function loadStories() {
  require('../src/stories');
}

addDecorator(withKnobs);

configure(loadStories, module);
