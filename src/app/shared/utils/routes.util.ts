export const removeRouteParams = (path: string): string => {
	return path.replace(/\/:[^/]+/g, '');
};
