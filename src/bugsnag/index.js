import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import BugsnagPluginExpress from '@bugsnag/plugin-express';

if (typeof window === 'undefined') {
  Bugsnag.start({
    apiKey: 'bc49a10ea8ec854021a2d1e42949466e',
    plugins: [new BugsnagPluginReact(), BugsnagPluginExpress],
  });
} else if (typeof window !== 'undefined') {
  Bugsnag.start({
    apiKey: '1c72d45d4a3fb13d49b8582a0128c7d8',
    plugins: [new BugsnagPluginReact()],
  });
}

export { Bugsnag };
