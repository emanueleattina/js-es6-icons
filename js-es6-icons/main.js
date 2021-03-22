const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

icons.forEach(item => {

    if (item.type === 'animal') {
        $('.container').append(
            `<div id="animal" class="icon-container">
                <i class="${item.family} ${item.prefix}${item.name} animal"></i>
                <span>${item.name}</span>
            </div>`
        );
    }

    else if (item.type === 'vegetable') {
        $('.container').append(
            `<div id="vegetable" class="icon-container">
                <i class="${item.family} ${item.prefix}${item.name} vegetable"></i>
                <span>${item.name}</span>
            </div>`
        );
    }

    else if (item.type === 'user') {
        $('.container').append(
            `<div id="user" class="icon-container">
                <i class="${item.family} ${item.prefix}${item.name} user"></i>
                <span>${item.name}</span>
            </div>`
        );
    }
});

function filterIcons() {
    var selectedIcon = $('#type').val();
    var selector = $(this).parents('select').parents('.navbar-bottom').parents('header').siblings('main').children('.container');

    if (selectedIcon == 'animal') {
        selector.children('div#user').hide();
        selector.children('div#vegetable').hide();
        console.log(selectedIcon);
    }

    else if (selectedIcon == 'vegetable') {
        selector.children('div#animal').hide();
        selector.children('div#user').hide();
        console.log(selectedIcon);
    }

    else if (selectedIcon == 'user') {
        selector.children('div#animal').hide();
        selector.children('div#vegetable').hide();
        console.log(selectedIcon);
    }
}