<script>
	import Select from 'svelte-select';

	const items = ['One', 'Two', 'Three'];

	const complexItems = [
		{ value: 'chocolate', label: 'Chocolate', group: 'Sweet' },
		{ value: 'pizza', label: 'Pizza', group: 'Savory' },
		{ value: 'cake', label: 'Cake', group: 'Sweet', selectable: false },
		{ value: 'chips', label: 'Chips', group: 'Savory' },
		{ value: 'ice-cream', label: 'Ice Cream', group: 'Sweet' }
	];

	const groupBy = (item) => item.group;
</script>

<h2>Group</h2>
<Select items={complexItems} {groupBy} />
