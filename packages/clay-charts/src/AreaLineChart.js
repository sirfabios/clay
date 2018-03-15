import {Config} from 'metal-state';
import Chart from './Chart';
import types from './utils/types';

/**
 * AreaLine Chart Component
 * @augments Chart
 */
class AreaLineChart extends Chart {}

AreaLineChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default area
	 * @instance
	 * @memberof AreaLineChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.area).value('area'),
};

export {AreaLineChart};
export default AreaLineChart;
