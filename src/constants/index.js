/* global NODE_ENV */

export const API_HOST = 'http://import2l.test.weekly.api.auto-toyz.com';
export const API_URI =  '/product-import/v1';

export const API_REQUIRED_REQUEST_PARAMS = {
	'client': 'web-tool' 
};

export const API_REQUEST_JSON_HEADER = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

export const API_REQUEST_MULTIPART_FORM_DATA_HEADER = {
	'Accept': 'application/json',
	'Content-Type': 'multipart/form-data',
};

export const INIT = 'INIT';
export const START = '_START';
export const END = '_END';
export const SUCCESS = '_SUCCESS';
export const FAIL = '_FAIL';
export const LOADING = 'LOADING';
export const UPDATE = '_UPDATE';
export const PING = 'PING';
export const SERVER = 'SERVER';

export const SHOW = '_SHOW';
export const HIDE = '_HIDE';
export const SAVE = '_SAVE';
export const REMOVE = '_REMOVE';

export const GET = '_GET';
export const SET = '_SET';

export const SUCCESS_TYPE = 'success';
export const WARNING_TYPE = 'warning';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const LOAD_BY_PARAMS = 'LOAD_BY_PARAMS';
export const SAVE_PROVIDER_SELECTION = '_SAVE_PROVIDER_SELECTION';
export const SAVE_OPERATOR_SELECTION = '_SAVE_OPERATOR_SELECTION';

export const CLEAR_SELECTION = '_CLEAR_SELECTION';

export const COLUMNS = 'COLUMNS';
export const TOGGLE_MODAL = '_TOGGLE_MODAL';
export const SHOW_MODAL = '_SHOW_MODAL';
export const HIDE_MODAL = '_HIDE_MODAL';
export const CHECK_OPTION = '_CHECK_OPTION';
export const CHECK_OPTION_GROUP = '_CHECK_OPTION_GROUP';

export const FILE_UPLOAD = 'FILE_UPLOAD';
export const SET_MAPS = '_SET_MAPS';
export const CLEAR_MAP = '_CLEAR_MAP';
export const CHANGE_MAP = '_CHANGE_MAP';

export const TASKS = 'TASKS';
export const TASK = 'TASK';
export const SUBTASK = 'SUBTASK';
export const DEPENDENT_SUBTASK = 'DEPENDENT_SUBTASK';
export const SHOW_DEFAULT = '_SHOW_DEFAULT';
export const SHOW_ALL = '_SHOW_ALL';
export const ALL = '_ALL';
export const DETAILS = '_DETAILS';
export const DISALLOW_RELOAD = '_DISALLOW_RELOAD';
export const FORCED_REQUEST = '_FORCED_REQUEST';

export const QUEUE_STATISTIC = 'QUEUE_STATISTIC';

export const FILTER = 'FILTER';

export const USER = 'USER';

export const MESSAGE_POPUP = 'MESSAGE_POPUP';
export const MESSAGE_BOX = 'MESSAGE_BOX';

export const LOADING_OVERLAY = 'LOADING_OVERLAY';

export const ADD_AUTO_RELOAD = '_ADD_AUTO_RELOAD';
export const UNMOUNT = '_UNMOUNT';

export const CHANGE = 'CHANGE';
export const DEFAULT = 'DEFAULT';
export const VIEW_MODE = 'VIEW_MODE';
export const HOST_URI_SETTINGS = 'HOST_URI_SETTINGS';