import 'clay-dropdown';
import 'clay-pagination';
import {Config} from 'metal-state';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayPaginationBar.soy.js';

/**
 * Metal ClayPaginationBar component.
 * @extends Component
 */
class ClayPaginationBar extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayPaginationBar.STATE = {
	/**
	 * Href to create each pagination page complete href.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?(string|undefined)}
	 */
	baseHref: Config.string(),

	/**
	 * Current pagination page number.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!number}
	 */
	currentPage: Config.number().required(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * List of available number of entries.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!array}
	 */
	entries: Config.arrayOf(
		Config.shapeOf({
			active: Config.bool(),
			href: Config.string().required(),
			label: Config.number().required(),
		})
	).required(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Entries index that points to selected entry.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {?(number|undefined)}
	 */
	selectedEntry: Config.number().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Total number of entries.
	 * @default undefined
	 * @instance
	 * @memberof ClayPaginationBar
	 * @type {!number}
	 */
	totalEntries: Config.number().required(),
};

defineWebComponent('clay-pagination-bar', ClayPaginationBar);

Soy.register(ClayPaginationBar, templates);

export {ClayPaginationBar};
export default ClayPaginationBar;
