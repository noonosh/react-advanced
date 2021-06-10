import React, { Fragment, useEffect, useState } from 'react';

function Counter(props) {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	// componentDidMount
	// componentDidUpdate
	// componentWillUnmount

	return (
		<Fragment>
			<input type='text' onChange={e => setName(e.target.value)} />
			<div>
				{name} has clicked {count} times!
			</div>
			<button onClick={() => setCount(count + 1)}>Increase</button>
		</Fragment>
	);
}

export default Counter;
