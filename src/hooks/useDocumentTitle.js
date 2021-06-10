import useEffect from 'react';

function useDocumentTitle() {
	useEffect(() => {
		document.title = `${name} has clicked ${count} times`;
		return () => {
			console.log('Clean up');
		};
	}, []);
}
