export const removeRouteParams = (path: string, maintainSlashes = false): string => {
	const pathSplitted = path.split('/');
	const matchCondition = (element: string) => !element.startsWith(':');
	const pathElementsWithoutParams = pathSplitted.filter(matchCondition);
	const newPath = maintainSlashes ? pathElementsWithoutParams.join('/') : pathElementsWithoutParams.join('');
	return newPath;
};
