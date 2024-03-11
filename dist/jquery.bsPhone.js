window.phoneLibraryLoaded = false;
window.phoneLibrary = [];

(function ($) {

    const defaultCountry = 'de';
    const wrapperClass = 'js-bs-phone-input';

    function setDropDownSelected($input){
        const inputGroup = $input.closest('.'+wrapperClass);
        const html = inputGroup.find('.dropdown-item[data-selected="Y"]').html();
        inputGroup.find('.btn').html( html);
    }
    function buildInputGroup($input){
        if ($input.closest('.'+wrapperClass).lenght){
            return $input.closest('.'+wrapperClass);
        }

        const inputGroup = $('<div>', {
            class: 'input-group '+wrapperClass
        }).insertAfter($input);

        const dropDownButton = $('<button>',{
            class: 'btn btn-outline-secondary dropdown-toggle',
            type: 'button',
            'data-bs-toggle':'dropdown',
            'aria-expanded': false,
            text:''
        }).appendTo(inputGroup);

        const dropDownMenu = $('<div>', {
            class: 'dropdown-menu overflow-y-auto py-0',
            css: {
                maxHeight: '50vh'
            }
        }).appendTo(inputGroup);

        const dropDownHeader = $('<div>', {
            class: 'dropdown-header sticky-top text-bg-light z-1 p-2 border-bottom',
            html: '<input type="search" class="form-control form-control-sm">'
        }).appendTo(dropDownMenu);

        window.phoneLibrary.forEach(el => {
            const activeClass = el.default ? 'Y' : 'N';
            const a = $('<a>',{
                class:'dropdown-item',
                html : `<img src="${el.flag}" style="width: 20px"> +${el.phoneCode}`,
                'data-iso-code': el.isoCode,
                'data-selected' : activeClass,
                title: el.country,
                href:'#'
            }).appendTo(dropDownMenu)
        });

        const tmpInput = $('<input>',{
            type:'tel',
            class:'js-temp-input form-control'
        }).appendTo(inputGroup)
        
        tmpInput.val($input.val())

        $input.addClass('d-none').appendTo(inputGroup);

        setDropDownSelected($input);

        return inputGroup;
    }

    const load = new Promise((resolve, reject) => {
        if (window.phoneLibraryLoaded){
            resolve(window.phoneLibrary);
        }
        else {
            loadLibrary(function (array) {
                resolve(array)
            })
        }
    });

    $.fn.bsPhone = function () {
        if ($(this).length > 1) {
            return $(this).each(function (i, e) {
                return $(e).bsPhone();
            })
        }
        const debug = true;
        const input = $(this);

        function init() {
           load.then((array)=>{
                const inputGroup = buildInputGroup(input);
                inputGroup.find('.dropdown-item').on('click', function(){
                    inputGroup.find('.dropdown-item[data-selected="Y"]').attr('data-selected','N');
                    $(this).attr('data-selected','Y');
                    setDropDownSelected(input)
                });
               inputGroup.find('[type="search"]').on('keyup input', function () {
                   const searchPattern = $(this).val().trim();
                   const searchElements = inputGroup.find('[data-iso-code]');
                   if (searchPattern !== '') {
                       searchElements.each(function (index, value) {

                           let currentName = $(value).data('isoCode');
                           let currentCountry = $(value).attr('title');
                           if (
                               currentName.toUpperCase().indexOf(searchPattern.toUpperCase()) > -1 ||
                               currentCountry.toUpperCase().indexOf(searchPattern.toUpperCase()) > -1
                           ) {
                               $(value).removeClass('d-none');
                           } else {
                               $(value).addClass('d-none');
                           }
                       });
                   } else {
                       searchElements.removeClass('d-none');
                   }
               })
            });
            return input;
        }

        init();

        return input;
    }


    function sortIsoCodes(a, b) {
        if (a.isoCode < b.isoCode) {
            return -1;
        }
        if (a.isoCode > b.isoCode) {
            return 1;
        }
        return 0;
    }



    async function loadLibrary(callback) {

        $.getJSON('/dist/countries.json', function (array) {
            array.forEach(country => {
                const isoToLower = country.isoCode.toLowerCase();
                country.default = defaultCountry === isoToLower;
                country.flag = '/dist/flags/' + isoToLower + '.svg';
            })
            array.sort(sortIsoCodes);
            console.log('library loaded new');
            window.phoneLibrary = array;
            window.phoneLibraryLoaded = true;
            callback(window.phoneLibrary);
        });
    }

}(jQuery))