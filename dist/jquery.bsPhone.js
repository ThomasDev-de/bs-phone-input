window.phoneLibraryLoaded = false;
window.phoneLibrary = [];

(function ($) {

    const defaultCountry = 'de';
    const wrapperClass = 'js-bs-phone-input';
    const helperInputClass = 'js-temp-input'

    $.bsPhone = {
        setDefaults: function (options = null) {
            this.DEFAULTS = $.extend({}, this.DEFAULTS, options || {});
        },
        getDefaults: function () {
            return this.DEFAULTS;
        },
        DEFAULTS: {
            default: 'de',
            wrapperClasses: 'mb-3',
            dropDownClasses: 'btn btn-outline-secondary',
            inputClasses: 'border-secondary rounded-end',
            formatValue(phoneCode, value = '') {
                return '+' + phoneCode + value;
            },
            formatView(phoneCode, value = '') {
                if (value.startsWith('+' + phoneCode)) {
                    value = value.replace('+' + phoneCode, '');
                }
                return value;
            }
        }
    };

    function setDropDownSelected($input) {
        console.log($input.attr('id'));
        const settings = $input.data('options');
        const inputGroup = $input.closest('.' + wrapperClass);
        let selected = inputGroup.find('.dropdown-item[data-selected="Y"]');
        const html = selected.html();
        inputGroup.find('.dropdown-toggle').html(html);
    }

    function buildInputGroup($input) {
        if ($input.closest('.' + wrapperClass).length) {
            return $input.closest('.' + wrapperClass);
        }

        const settings = $input.data('options');

        const inputGroup = $('<div>', {
            class: 'input-group ' + wrapperClass + ' ' + settings.wrapperClasses
        }).insertAfter($input);

        const dropDownButton = $('<button>', {
            class: 'dropdown-toggle ' + settings.dropDownClasses,
            type: 'button',
            'data-bs-toggle': 'dropdown',
            'aria-expanded': false,
            text: ''
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
            const activeClass = settings.default.toUpperCase() === el.isoCode.toUpperCase() ? 'Y' : 'N';
            const a = $('<a>', {
                class: 'dropdown-item',
                html: `<img src="${el.flag}" style="width: 20px"> +${el.phoneCode}`,
                'data-iso-code': el.isoCode,
                'data-selected': activeClass,
                'data-phone-code': el.phoneCode,
                title: el.country,
                href: '#'
            }).appendTo(dropDownMenu)
        });


        const tmpInput = $('<input>', {
            type: 'tel',
            class: 'form-control ' + helperInputClass + ' ' + settings.inputClasses
        }).appendTo(inputGroup);


        $input.attr('type', 'hidden');
        $input.appendTo(inputGroup);

        setDropDownSelected($input)
        return inputGroup;
    }

    function cleanValue($input) {
        const settings = $input.data('options');
        const wrapper = $input.closest('.' + wrapperClass);
        const helperInput = wrapper.find('.' + helperInputClass);
        const phoneCode = wrapper.find('.dropdown-item[data-selected="Y"]').data('phoneCode');

        let value = helperInput.val() || '';
        value = deleteLeadingZeros(value);

        // let eingabe = helperInput.val();
        // if (eingabe.startsWith('+'+phoneCode)){
        //     eingabe = eingabe.replace('+'+phoneCode, '');
        // }

        value = settings.formatValue(phoneCode, value);
        $input.val(value);
        helperInput.val(settings.formatView(phoneCode, value));

        console.log(value);

    }

    const load = new Promise((resolve, reject) => {
        if (window.phoneLibraryLoaded) {
            resolve(window.phoneLibrary);
        } else {
            loadLibrary(function (array) {
                resolve(array)
            })
        }
    });

    /**
     *
     * @param {null|string|object}optionsOrMethod
     * @return {*|jQuery|HTMLElement}
     */
    $.fn.bsPhone = function (optionsOrMethod = null, param = 'undefined') {

        if ($(this).length > 1) {
            return $(this).each(function (i, e) {
                return $(e).bsPhone(optionsOrMethod, param);
            })
        }
        let callMethod = false;
        let optionsSet = false;

        switch (typeof optionsOrMethod) {
            case 'string': {
                callMethod = true;
            }
                break;
            case 'object': {
                optionsSet = true;
                break;
            }
        }
        const debug = true;
        const input = $(this);


        function init(callback) {
            load.then((array) => {
                if (!input.data('initBsPhone')) {
                    const valueBefore = (input.attr('value') && input.attr('value') !== '') ? input.attr('value') : false;
                    let setup;
                    if (!optionsSet) {
                        setup = $.extend({}, $.bsPhone.getDefaults(), input.data());
                    } else {
                        setup = $.extend({}, $.bsPhone.getDefaults(), input.data(), optionsOrMethod || {});
                    }
                    input.data('options', setup);
                    buildInputGroup(input);
                    events(input);
                    setDropDownSelected(input);
                    input.data('initBsPhone', true);

                    if (valueBefore !== false) {

                        setVal(input, valueBefore);
                    }
                }
                return true;
            }).then(callback);
        }

        init(function () {
            if (callMethod) {
                switch (optionsOrMethod) {
                    case 'val':
                        if (typeof param === 'undefined')
                            return input.val();
                        setVal(input, param);
                }
            }

            return input;
        });


        return input;
    }

    function setVal($input, value) {
        const wrapper = $input.closest('.' + wrapperClass);
        const helperInput = wrapper.find('.' + helperInputClass);
        if (value) {
            if (value.startsWith('+')) {
                const found = window.phoneLibrary.filter(e => {
                    return value.startsWith('+' + e.phoneCode);
                });
                if (found.length) {
                    value = value.replace('+' + found[0].phoneCode, '');
                    wrapper.find('.dropdown-item[data-selected="Y"]').attr('data-selected', 'N');
                    wrapper.find('.dropdown-item[data-phone-code="' + found[0].phoneCode + '"]').attr('data-selected', 'Y');

                }
            }


        }

        helperInput.val(value);

        setDropDownSelected($input)
        cleanValue($input);

    }

    function deleteLeadingZeros(value = '') {
        if (value.startsWith('+')) {
            value = value.substring(1);
        }

        while (value.startsWith('0')) {
            value = value.substring(1);
        }
        return value;
    }

    function events($input) {
        const wrapper = $input.closest('.' + wrapperClass);

        wrapper
            .on('shown.bs.dropdown', '.dropdown-toggle', function(){

                wrapper.find('[type="search"]').val('').trigger('keyup').focus();
            })
            .on('click', '.dropdown-item', function () {
                wrapper.find('.dropdown-item[data-selected="Y"]').attr('data-selected', 'N');
                $(this).attr('data-selected', 'Y');
                setDropDownSelected($input);
                cleanValue($input);
            })
            .on('keyup input', '[type="search"]', function () {
                const searchPattern = $(this).val().trim();
                const searchElements = wrapper.find('[data-iso-code]');
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
            .on('input keypress', '.' + helperInputClass, function (e) {

                const ok = e.metaKey || // cmd/ctrl
                    e.which === 43 || // +
                    e.which === 40 || // (
                    e.which === 41 || // )
                    e.which === 45 || // -
                    e.which === 32 || // space
                    e.which <= 0 || // arrow keys
                    e.which == 8 || // delete key
                    /[0-9]/.test(String.fromCharCode(e.which)); // numbers

                if (!ok) {
                    e.preventDefault();
                } else {
                    cleanValue($input);
                }

            })
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

        $.getJSON('../dist/countries.json', function (array) {
            array.forEach(country => {
                let isoToLower = country.isoCode.toLowerCase();
                country.default = defaultCountry === isoToLower;
                if(isoToLower === 'an')
                    isoToLower = 'nl';
                if(isoToLower === 'uk')
                    isoToLower = 'sh';
                country.flag = '../dist/flags/' + isoToLower + '.svg';
            })
            array.sort(sortIsoCodes);
            console.log('library loaded new');
            window.phoneLibrary = array;
            window.phoneLibraryLoaded = true;
            callback(window.phoneLibrary);
        });
    }

}(jQuery))