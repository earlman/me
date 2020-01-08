import { configure } from '@storybook/vue'
import '../src/styles/index.sass'

configure(require.context('../src', true, /\.stories\.js$/), module);
