import app from './app';
import tv from './tv';
import metadata from './manifest.json';

export default {
  components: {
    app,
    tv,
  },
  ...metadata,
}