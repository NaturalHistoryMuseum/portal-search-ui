import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faPlus,
  faMinus,
  faSpinner,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faMinus, faSpinner, faTimes);

export default FontAwesomeIcon;
