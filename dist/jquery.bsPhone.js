window.phoneLibraryLoaded = false;
window.phoneLibrary = [];

(function ($) {

    const defaultCountry = 'de';
    const wrapperClass = 'js-bs-phone-input';

    function buildInputGroup($input){
        if ($input.closest('.'+wrapperClass).lenght){
            return $input.closest('.'+wrapperClass);
        }
        let list = [];
        window.phoneLibrary.forEach(el => {
            list.push(`<li><a class="dropdown-item" title="${el.country}" href="#"><img src="${el.flag}" style="width: 20px"> +${el.phoneCode}</a></li>`);
        })

        const inputGroup = $(`
            <div class="input-group mb-3 ${wrapperClass}">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
              <ul class="dropdown-menu">
                ${list.join('')}
              </ul>
              
            </div>
        `);
        inputGroup.insertBefore($input);
        $input.appendTo(inputGroup);

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
                    const phoneCode = $(this).text().trim().split('+')[1];
                    inputGroup.find('.btn').text('+' + phoneCode);
                });
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
                // console.log('/dist/flags/'+country.isoCode.toLowerCase()+'.svg');
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