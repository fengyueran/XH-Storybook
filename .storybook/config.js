import { configure, setAddon } from '@storybook/react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

setAddon(chaptersAddon);
setDefaults({sectionOptions: {useTheme: false}});
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
