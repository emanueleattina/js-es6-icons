$(document).ready(function () {
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
                `<div class="icon-container animal">
                    <i class="${item.family} ${item.prefix}${item.name} animal"></i>
                    <span>${item.name}</span>
                </div>`
            );
        }
    
        else if (item.type === 'vegetable') {
            $('.container').append(
                `<div class="icon-container vegetable">
                    <i class="${item.family} ${item.prefix}${item.name} vegetable"></i>
                    <span>${item.name}</span>
                </div>`
            );
        }
    
        else if (item.type === 'user') {
            $('.container').append(
                `<div class="icon-container user">
                    <i class="${item.family} ${item.prefix}${item.name} user"></i>
                    <span>${item.name}</span>
                </div>`
            );
        }
    });
    
    
});

function filterIcons() {
    var selectedIcon = $('#type').val();

    if (selectedIcon == 'animal') {
        $('.animal').show();
        $('.vegetable').hide();
        $('.user').hide();
    }

    else if (selectedIcon == 'vegetable') {
        $('.animal').hide();
        $('.vegetable').show();
        $('.user').hide();
    }

    else if (selectedIcon == 'user') {
        $('.animal').hide();
        $('.vegetable').hide();
        $('.user').show();
    }

    else if (selectedIcon == 'all') {
        $('.animal').show();
        $('.vegetable').show();
        $('.user').show();
    }
}