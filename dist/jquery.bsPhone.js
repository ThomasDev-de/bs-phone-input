(function ($) {
    const countries = [
        {
            "isoCode": "AD",
            "iso3": "AND",
            "phoneCode": 376,
            "country": "Andorra",
            "default": false
        },
        {
            "isoCode": "AE",
            "iso3": "ARE",
            "phoneCode": 971,
            "country": "United Arab Emirates",
            "default": false
        },
        {
            "isoCode": "AF",
            "iso3": "AFG",
            "phoneCode": 93,
            "country": "Afghanistan",
            "default": false
        },
        {
            "isoCode": "AG",
            "iso3": "ATG",
            "phoneCode": 1268,
            "country": "Antigua and Barbuda",
            "default": false
        },
        {
            "isoCode": "AI",
            "iso3": "AIA",
            "phoneCode": 1264,
            "country": "Anguilla",
            "default": false
        },
        {
            "isoCode": "AL",
            "iso3": "ALB",
            "phoneCode": 355,
            "country": "Albania",
            "default": false
        },
        {
            "isoCode": "AM",
            "iso3": "ARM",
            "phoneCode": 374,
            "country": "Armenia",
            "default": false
        },
        {
            "isoCode": "AN",
            "iso3": "ANT",
            "phoneCode": 599,
            "country": "Netherlands Antilles",
            "default": false
        },
        {
            "isoCode": "AO",
            "iso3": "AGO",
            "phoneCode": 244,
            "country": "Angola",
            "default": false
        },
        {
            "isoCode": "AQ",
            "iso3": "ATA",
            "phoneCode": 672,
            "country": "Antarctica",
            "default": false
        },
        {
            "isoCode": "AR",
            "iso3": "ARG",
            "phoneCode": 54,
            "country": "Argentina",
            "default": false
        },
        {
            "isoCode": "AS",
            "iso3": "ASM",
            "phoneCode": 1684,
            "country": "American Samoa",
            "default": false
        },
        {
            "isoCode": "AT",
            "iso3": "AUT",
            "phoneCode": 43,
            "country": "Austria",
            "default": false
        },
        {
            "isoCode": "AU",
            "iso3": "AUS",
            "phoneCode": 61,
            "country": "Australia",
            "default": false
        },
        {
            "isoCode": "AW",
            "iso3": "ABW",
            "phoneCode": 297,
            "country": "Aruba",
            "default": false
        },
        {
            "isoCode": "AZ",
            "iso3": "AZE",
            "phoneCode": 994,
            "country": "Azerbaijan",
            "default": false
        },
        {
            "isoCode": "BA",
            "iso3": "BIH",
            "phoneCode": 387,
            "country": "Bosnia and Herzegovina",
            "default": false
        },
        {
            "isoCode": "BB",
            "iso3": "BRB",
            "phoneCode": 1246,
            "country": "Barbados",
            "default": false
        },
        {
            "isoCode": "BD",
            "iso3": "BGD",
            "phoneCode": 880,
            "country": "Bangladesh",
            "default": false
        },
        {
            "isoCode": "BE",
            "iso3": "BEL",
            "phoneCode": 32,
            "country": "Belgium",
            "default": false
        },
        {
            "isoCode": "BF",
            "iso3": "BFA",
            "phoneCode": 226,
            "country": "Burkina Faso",
            "default": false
        },
        {
            "isoCode": "BG",
            "iso3": "BGR",
            "phoneCode": 359,
            "country": "Bulgaria",
            "default": false
        },
        {
            "isoCode": "BH",
            "iso3": "BHR",
            "phoneCode": 973,
            "country": "Bahrain",
            "default": false
        },
        {
            "isoCode": "BI",
            "iso3": "BDI",
            "phoneCode": 257,
            "country": "Burundi",
            "default": false
        },
        {
            "isoCode": "BJ",
            "iso3": "BEN",
            "phoneCode": 229,
            "country": "Benin",
            "default": false
        },
        {
            "isoCode": "BM",
            "iso3": "BMU",
            "phoneCode": 1441,
            "country": "Bermuda",
            "default": false
        },
        {
            "isoCode": "BN",
            "iso3": "BRN",
            "phoneCode": 673,
            "country": "Brunei Darussalam",
            "default": false
        },
        {
            "isoCode": "BO",
            "iso3": "BOL",
            "phoneCode": 591,
            "country": "Bolivia",
            "default": false
        },
        {
            "isoCode": "BR",
            "iso3": "BRA",
            "phoneCode": 55,
            "country": "Brazil",
            "default": false
        },
        {
            "isoCode": "BS",
            "iso3": "BHS",
            "phoneCode": 1242,
            "country": "Bahamas",
            "default": false
        },
        {
            "isoCode": "BT",
            "iso3": "BTN",
            "phoneCode": 975,
            "country": "Bhutan",
            "default": false
        },
        {
            "isoCode": "BV",
            "iso3": "BVT",
            "phoneCode": 47,
            "country": "Bouvet Island",
            "default": false
        },
        {
            "isoCode": "BW",
            "iso3": "BWA",
            "phoneCode": 267,
            "country": "Botswana",
            "default": false
        },
        {
            "isoCode": "BY",
            "iso3": "BLR",
            "phoneCode": 375,
            "country": "Belarus",
            "default": false
        },
        {
            "isoCode": "BZ",
            "iso3": "BLZ",
            "phoneCode": 501,
            "country": "Belize",
            "default": false
        },
        {
            "isoCode": "CA",
            "iso3": "CAN",
            "phoneCode": 1,
            "country": "Canada",
            "default": false
        },
        {
            "isoCode": "CC",
            "iso3": "CCK",
            "phoneCode": 672,
            "country": "Cocos (Keeling) Islands",
            "default": false
        },
        {
            "isoCode": "CD",
            "iso3": "COD",
            "phoneCode": 242,
            "country": "Congo, the Democratic Republic of the",
            "default": false
        },
        {
            "isoCode": "CF",
            "iso3": "CAF",
            "phoneCode": 236,
            "country": "Central African Republic",
            "default": false
        },
        {
            "isoCode": "CG",
            "iso3": "COG",
            "phoneCode": 242,
            "country": "Congo",
            "default": false
        },
        {
            "isoCode": "CH",
            "iso3": "CHE",
            "phoneCode": 41,
            "country": "Switzerland",
            "default": false
        },
        {
            "isoCode": "CI",
            "iso3": "CIV",
            "phoneCode": 225,
            "country": "Cote D'Ivoire",
            "default": false
        },
        {
            "isoCode": "CK",
            "iso3": "COK",
            "phoneCode": 682,
            "country": "Cook Islands",
            "default": false
        },
        {
            "isoCode": "CL",
            "iso3": "CHL",
            "phoneCode": 56,
            "country": "Chile",
            "default": false
        },
        {
            "isoCode": "CM",
            "iso3": "CMR",
            "phoneCode": 237,
            "country": "Cameroon",
            "default": false
        },
        {
            "isoCode": "CN",
            "iso3": "CHN",
            "phoneCode": 86,
            "country": "China",
            "default": false
        },
        {
            "isoCode": "CO",
            "iso3": "COL",
            "phoneCode": 57,
            "country": "Colombia",
            "default": false
        },
        {
            "isoCode": "CR",
            "iso3": "CRI",
            "phoneCode": 506,
            "country": "Costa Rica",
            "default": false
        },
        {
            "isoCode": "CU",
            "iso3": "CUB",
            "phoneCode": 53,
            "country": "Cuba",
            "default": false
        },
        {
            "isoCode": "CV",
            "iso3": "CPV",
            "phoneCode": 238,
            "country": "Cape Verde",
            "default": false
        },
        {
            "isoCode": "CX",
            "iso3": "CXR",
            "phoneCode": 61,
            "country": "Christmas Island",
            "default": false
        },
        {
            "isoCode": "CZ",
            "iso3": "CZE",
            "phoneCode": 420,
            "country": "Czech Republic",
            "default": false
        },
        {
            "isoCode": "DE",
            "iso3": "DEU",
            "phoneCode": 49,
            "country": "Germany",
            "default": true
        },
        {
            "isoCode": "DJ",
            "iso3": "DJI",
            "phoneCode": 253,
            "country": "Djibouti",
            "default": false
        },
        {
            "isoCode": "DK",
            "iso3": "DNK",
            "phoneCode": 45,
            "country": "Denmark",
            "default": false
        },
        {
            "isoCode": "DM",
            "iso3": "DMA",
            "phoneCode": 1767,
            "country": "Dominica",
            "default": false
        },
        {
            "isoCode": "DO",
            "iso3": "DOM",
            "phoneCode": 1809,
            "country": "Dominican Republic",
            "default": false
        },
        {
            "isoCode": "DZ",
            "iso3": "DZA",
            "phoneCode": 213,
            "country": "Algeria",
            "default": false
        },
        {
            "isoCode": "EC",
            "iso3": "ECU",
            "phoneCode": 593,
            "country": "Ecuador",
            "default": false
        },
        {
            "isoCode": "EE",
            "iso3": "EST",
            "phoneCode": 372,
            "country": "Estonia",
            "default": false
        },
        {
            "isoCode": "EG",
            "iso3": "EGY",
            "phoneCode": 20,
            "country": "Egypt",
            "default": false
        },
        {
            "isoCode": "EH",
            "iso3": "ESH",
            "phoneCode": 212,
            "country": "Western Sahara",
            "default": false
        },
        {
            "isoCode": "ER",
            "iso3": "ERI",
            "phoneCode": 291,
            "country": "Eritrea",
            "default": false
        },
        {
            "isoCode": "ES",
            "iso3": "ESP",
            "phoneCode": 34,
            "country": "Spain",
            "default": false
        },
        {
            "isoCode": "ET",
            "iso3": "ETH",
            "phoneCode": 251,
            "country": "Ethiopia",
            "default": false
        },
        {
            "isoCode": "FI",
            "iso3": "FIN",
            "phoneCode": 358,
            "country": "Finland",
            "default": false
        },
        {
            "isoCode": "FJ",
            "iso3": "FJI",
            "phoneCode": 679,
            "country": "Fiji",
            "default": false
        },
        {
            "isoCode": "FK",
            "iso3": "FLK",
            "phoneCode": 500,
            "country": "Falkland Islands (Malvinas)",
            "default": false
        },
        {
            "isoCode": "FM",
            "iso3": "FSM",
            "phoneCode": 691,
            "country": "Micronesia, Federated States of",
            "default": false
        },
        {
            "isoCode": "FO",
            "iso3": "FRO",
            "phoneCode": 298,
            "country": "Faroe Islands",
            "default": false
        },
        {
            "isoCode": "FR",
            "iso3": "FRA",
            "phoneCode": 33,
            "country": "France",
            "default": false
        },
        {
            "isoCode": "GA",
            "iso3": "GAB",
            "phoneCode": 241,
            "country": "Gabon",
            "default": false
        },
        {
            "isoCode": "GD",
            "iso3": "GRD",
            "phoneCode": 1473,
            "country": "Grenada",
            "default": false
        },
        {
            "isoCode": "GE",
            "iso3": "GEO",
            "phoneCode": 995,
            "country": "Georgia",
            "default": false
        },
        {
            "isoCode": "GF",
            "iso3": "GUF",
            "phoneCode": 594,
            "country": "French Guiana",
            "default": false
        },
        {
            "isoCode": "GH",
            "iso3": "GHA",
            "phoneCode": 233,
            "country": "Ghana",
            "default": false
        },
        {
            "isoCode": "GI",
            "iso3": "GIB",
            "phoneCode": 350,
            "country": "Gibraltar",
            "default": false
        },
        {
            "isoCode": "GL",
            "iso3": "GRL",
            "phoneCode": 299,
            "country": "Greenland",
            "default": false
        },
        {
            "isoCode": "GM",
            "iso3": "GMB",
            "phoneCode": 220,
            "country": "Gambia",
            "default": false
        },
        {
            "isoCode": "GN",
            "iso3": "GIN",
            "phoneCode": 224,
            "country": "Guinea",
            "default": false
        },
        {
            "isoCode": "GP",
            "iso3": "GLP",
            "phoneCode": 590,
            "country": "Guadeloupe",
            "default": false
        },
        {
            "isoCode": "GQ",
            "iso3": "GNQ",
            "phoneCode": 240,
            "country": "Equatorial Guinea",
            "default": false
        },
        {
            "isoCode": "GR",
            "iso3": "GRC",
            "phoneCode": 30,
            "country": "Greece",
            "default": false
        },
        {
            "isoCode": "GS",
            "iso3": "SGS",
            "phoneCode": 500,
            "country": "South Georgia and the South Sandwich Islands",
            "default": false
        },
        {
            "isoCode": "GT",
            "iso3": "GTM",
            "phoneCode": 502,
            "country": "Guatemala",
            "default": false
        },
        {
            "isoCode": "GU",
            "iso3": "GUM",
            "phoneCode": 1671,
            "country": "Guam",
            "default": false
        },
        {
            "isoCode": "GW",
            "iso3": "GNB",
            "phoneCode": 245,
            "country": "Guinea-Bissau",
            "default": false
        },
        {
            "isoCode": "GY",
            "iso3": "GUY",
            "phoneCode": 592,
            "country": "Guyana",
            "default": false
        },
        {
            "isoCode": "HK",
            "iso3": "HKG",
            "phoneCode": 852,
            "country": "Hong Kong",
            "default": false
        },
        {
            "isoCode": "HM",
            "iso3": "HMD",
            "phoneCode": 672,
            "country": "Heard Island and Mcdonald Islands",
            "default": false
        },
        {
            "isoCode": "HN",
            "iso3": "HND",
            "phoneCode": 504,
            "country": "Honduras",
            "default": false
        },
        {
            "isoCode": "HR",
            "iso3": "HRV",
            "phoneCode": 385,
            "country": "Croatia",
            "default": false
        },
        {
            "isoCode": "HT",
            "iso3": "HTI",
            "phoneCode": 509,
            "country": "Haiti",
            "default": false
        },
        {
            "isoCode": "HU",
            "iso3": "HUN",
            "phoneCode": 36,
            "country": "Hungary",
            "default": false
        },
        {
            "isoCode": "ID",
            "iso3": "IDN",
            "phoneCode": 62,
            "country": "Indonesia",
            "default": false
        },
        {
            "isoCode": "IE",
            "iso3": "IRL",
            "phoneCode": 353,
            "country": "Ireland",
            "default": false
        },
        {
            "isoCode": "IL",
            "iso3": "ISR",
            "phoneCode": 972,
            "country": "Israel",
            "default": false
        },
        {
            "isoCode": "IN",
            "iso3": "IND",
            "phoneCode": 91,
            "country": "India",
            "default": false
        },
        {
            "isoCode": "IO",
            "iso3": "IOT",
            "phoneCode": 246,
            "country": "British Indian Ocean Territory",
            "default": false
        },
        {
            "isoCode": "IQ",
            "iso3": "IRQ",
            "phoneCode": 964,
            "country": "Iraq",
            "default": false
        },
        {
            "isoCode": "IR",
            "iso3": "IRN",
            "phoneCode": 98,
            "country": "Iran, Islamic Republic of",
            "default": false
        },
        {
            "isoCode": "IS",
            "iso3": "ISL",
            "phoneCode": 354,
            "country": "Iceland",
            "default": false
        },
        {
            "isoCode": "IT",
            "iso3": "ITA",
            "phoneCode": 39,
            "country": "Italy",
            "default": false
        },
        {
            "isoCode": "JM",
            "iso3": "JAM",
            "phoneCode": 1876,
            "country": "Jamaica",
            "default": false
        },
        {
            "isoCode": "JO",
            "iso3": "JOR",
            "phoneCode": 962,
            "country": "Jordan",
            "default": false
        },
        {
            "isoCode": "JP",
            "iso3": "JPN",
            "phoneCode": 81,
            "country": "Japan",
            "default": false
        },
        {
            "isoCode": "KE",
            "iso3": "KEN",
            "phoneCode": 254,
            "country": "Kenya",
            "default": false
        },
        {
            "isoCode": "KG",
            "iso3": "KGZ",
            "phoneCode": 996,
            "country": "Kyrgyzstan",
            "default": false
        },
        {
            "isoCode": "KH",
            "iso3": "KHM",
            "phoneCode": 855,
            "country": "Cambodia",
            "default": false
        },
        {
            "isoCode": "KI",
            "iso3": "KIR",
            "phoneCode": 686,
            "country": "Kiribati",
            "default": false
        },
        {
            "isoCode": "KM",
            "iso3": "COM",
            "phoneCode": 269,
            "country": "Comoros",
            "default": false
        },
        {
            "isoCode": "KN",
            "iso3": "KNA",
            "phoneCode": 1869,
            "country": "Saint Kitts and Nevis",
            "default": false
        },
        {
            "isoCode": "KP",
            "iso3": "PRK",
            "phoneCode": 850,
            "country": "Korea, Democratic People's Republic of",
            "default": false
        },
        {
            "isoCode": "KR",
            "iso3": "KOR",
            "phoneCode": 82,
            "country": "Korea, Republic of",
            "default": false
        },
        {
            "isoCode": "KW",
            "iso3": "KWT",
            "phoneCode": 965,
            "country": "Kuwait",
            "default": false
        },
        {
            "isoCode": "KY",
            "iso3": "CYM",
            "phoneCode": 1345,
            "country": "Cayman Islands",
            "default": false
        },
        {
            "isoCode": "KZ",
            "iso3": "KAZ",
            "phoneCode": 7,
            "country": "Kazakhstan",
            "default": false
        },
        {
            "isoCode": "LA",
            "iso3": "LAO",
            "phoneCode": 856,
            "country": "Lao People's Democratic Republic",
            "default": false
        },
        {
            "isoCode": "LB",
            "iso3": "LBN",
            "phoneCode": 961,
            "country": "Lebanon",
            "default": false
        },
        {
            "isoCode": "LC",
            "iso3": "LCA",
            "phoneCode": 1758,
            "country": "Saint Lucia",
            "default": false
        },
        {
            "isoCode": "LI",
            "iso3": "LIE",
            "phoneCode": 423,
            "country": "Liechtenstein",
            "default": false
        },
        {
            "isoCode": "LK",
            "iso3": "LKA",
            "phoneCode": 94,
            "country": "Sri Lanka",
            "default": false
        },
        {
            "isoCode": "LR",
            "iso3": "LBR",
            "phoneCode": 231,
            "country": "Liberia",
            "default": false
        },
        {
            "isoCode": "LS",
            "iso3": "LSO",
            "phoneCode": 266,
            "country": "Lesotho",
            "default": false
        },
        {
            "isoCode": "LT",
            "iso3": "LTU",
            "phoneCode": 370,
            "country": "Lithuania",
            "default": false
        },
        {
            "isoCode": "LU",
            "iso3": "LUX",
            "phoneCode": 352,
            "country": "Luxembourg",
            "default": false
        },
        {
            "isoCode": "LV",
            "iso3": "LVA",
            "phoneCode": 371,
            "country": "Latvia",
            "default": false
        },
        {
            "isoCode": "LY",
            "iso3": "LBY",
            "phoneCode": 218,
            "country": "Libyan Arab Jamahiriya",
            "default": false
        },
        {
            "isoCode": "MA",
            "iso3": "MAR",
            "phoneCode": 212,
            "country": "Morocco",
            "default": false
        },
        {
            "isoCode": "MC",
            "iso3": "MCO",
            "phoneCode": 377,
            "country": "Monaco",
            "default": false
        },
        {
            "isoCode": "MD",
            "iso3": "MDA",
            "phoneCode": 373,
            "country": "Moldova, Republic of",
            "default": false
        },
        {
            "isoCode": "MG",
            "iso3": "MDG",
            "phoneCode": 261,
            "country": "Madagascar",
            "default": false
        },
        {
            "isoCode": "MH",
            "iso3": "MHL",
            "phoneCode": 692,
            "country": "Marshall Islands",
            "default": false
        },
        {
            "isoCode": "MK",
            "iso3": "MKD",
            "phoneCode": 389,
            "country": "Macedonia, the Former Yugoslav Republic of",
            "default": false
        },
        {
            "isoCode": "ML",
            "iso3": "MLI",
            "phoneCode": 223,
            "country": "Mali",
            "default": false
        },
        {
            "isoCode": "MM",
            "iso3": "MMR",
            "phoneCode": 95,
            "country": "Myanmar",
            "default": false
        },
        {
            "isoCode": "MN",
            "iso3": "MNG",
            "phoneCode": 976,
            "country": "Mongolia",
            "default": false
        },
        {
            "isoCode": "MO",
            "iso3": "MAC",
            "phoneCode": 853,
            "country": "Macao",
            "default": false
        },
        {
            "isoCode": "MP",
            "iso3": "MNP",
            "phoneCode": 1670,
            "country": "Northern Mariana Islands",
            "default": false
        },
        {
            "isoCode": "MQ",
            "iso3": "MTQ",
            "phoneCode": 596,
            "country": "Martinique",
            "default": false
        },
        {
            "isoCode": "MR",
            "iso3": "MRT",
            "phoneCode": 222,
            "country": "Mauritania",
            "default": false
        },
        {
            "isoCode": "MS",
            "iso3": "MSR",
            "phoneCode": 1664,
            "country": "Montserrat",
            "default": false
        },
        {
            "isoCode": "MT",
            "iso3": "MLT",
            "phoneCode": 356,
            "country": "Malta",
            "default": false
        },
        {
            "isoCode": "MU",
            "iso3": "MUS",
            "phoneCode": 230,
            "country": "Mauritius",
            "default": false
        },
        {
            "isoCode": "MV",
            "iso3": "MDV",
            "phoneCode": 960,
            "country": "Maldives",
            "default": false
        },
        {
            "isoCode": "MW",
            "iso3": "MWI",
            "phoneCode": 265,
            "country": "Malawi",
            "default": false
        },
        {
            "isoCode": "MX",
            "iso3": "MEX",
            "phoneCode": 52,
            "country": "Mexico",
            "default": false
        },
        {
            "isoCode": "MY",
            "iso3": "MYS",
            "phoneCode": 60,
            "country": "Malaysia",
            "default": false
        },
        {
            "isoCode": "MZ",
            "iso3": "MOZ",
            "phoneCode": 258,
            "country": "Mozambique",
            "default": false
        },
        {
            "isoCode": "NA",
            "iso3": "NAM",
            "phoneCode": 264,
            "country": "Namibia",
            "default": false
        },
        {
            "isoCode": "NC",
            "iso3": "NCL",
            "phoneCode": 687,
            "country": "New Caledonia",
            "default": false
        },
        {
            "isoCode": "NE",
            "iso3": "NER",
            "phoneCode": 227,
            "country": "Niger",
            "default": false
        },
        {
            "isoCode": "NF",
            "iso3": "NFK",
            "phoneCode": 672,
            "country": "Norfolk Island",
            "default": false
        },
        {
            "isoCode": "NG",
            "iso3": "NGA",
            "phoneCode": 234,
            "country": "Nigeria",
            "default": false
        },
        {
            "isoCode": "NI",
            "iso3": "NIC",
            "phoneCode": 505,
            "country": "Nicaragua",
            "default": false
        },
        {
            "isoCode": "NL",
            "iso3": "NLD",
            "phoneCode": 31,
            "country": "Netherlands",
            "default": false
        },
        {
            "isoCode": "NO",
            "iso3": "NOR",
            "phoneCode": 47,
            "country": "Norway",
            "default": false
        },
        {
            "isoCode": "NP",
            "iso3": "NPL",
            "phoneCode": 977,
            "country": "Nepal",
            "default": false
        },
        {
            "isoCode": "NR",
            "iso3": "NRU",
            "phoneCode": 674,
            "country": "Nauru",
            "default": false
        },
        {
            "isoCode": "NU",
            "iso3": "NIU",
            "phoneCode": 683,
            "country": "Niue",
            "default": false
        },
        {
            "isoCode": "NZ",
            "iso3": "NZL",
            "phoneCode": 64,
            "country": "New Zealand",
            "default": false
        },
        {
            "isoCode": "OM",
            "iso3": "OMN",
            "phoneCode": 968,
            "country": "Oman",
            "default": false
        },
        {
            "isoCode": "PA",
            "iso3": "PAN",
            "phoneCode": 507,
            "country": "Panama",
            "default": false
        },
        {
            "isoCode": "PE",
            "iso3": "PER",
            "phoneCode": 51,
            "country": "Peru",
            "default": false
        },
        {
            "isoCode": "PF",
            "iso3": "PYF",
            "phoneCode": 689,
            "country": "French Polynesia",
            "default": false
        },
        {
            "isoCode": "PG",
            "iso3": "PNG",
            "phoneCode": 675,
            "country": "Papua New Guinea",
            "default": false
        },
        {
            "isoCode": "PH",
            "iso3": "PHL",
            "phoneCode": 63,
            "country": "Philippines",
            "default": false
        },
        {
            "isoCode": "PK",
            "iso3": "PAK",
            "phoneCode": 92,
            "country": "Pakistan",
            "default": false
        },
        {
            "isoCode": "PL",
            "iso3": "POL",
            "phoneCode": 48,
            "country": "Poland",
            "default": false
        },
        {
            "isoCode": "PM",
            "iso3": "SPM",
            "phoneCode": 508,
            "country": "Saint Pierre and Miquelon",
            "default": false
        },
        {
            "isoCode": "PN",
            "iso3": "PCN",
            "phoneCode": 64,
            "country": "Pitcairn",
            "default": false
        },
        {
            "isoCode": "PR",
            "iso3": "PRI",
            "phoneCode": 1787,
            "country": "Puerto Rico",
            "default": false
        },
        {
            "isoCode": "PS",
            "iso3": "PSE",
            "phoneCode": 970,
            "country": "Palestinian Territory, Occupied",
            "default": false
        },
        {
            "isoCode": "PT",
            "iso3": "PRT",
            "phoneCode": 351,
            "country": "Portugal",
            "default": false
        },
        {
            "isoCode": "PW",
            "iso3": "PLW",
            "phoneCode": 680,
            "country": "Palau",
            "default": false
        },
        {
            "isoCode": "PY",
            "iso3": "PRY",
            "phoneCode": 595,
            "country": "Paraguay",
            "default": false
        },
        {
            "isoCode": "QA",
            "iso3": "QAT",
            "phoneCode": 974,
            "country": "Qatar",
            "default": false
        },
        {
            "isoCode": "RE",
            "iso3": "REU",
            "phoneCode": 262,
            "country": "Reunion",
            "default": false
        },
        {
            "isoCode": "RO",
            "iso3": "ROM",
            "phoneCode": 40,
            "country": "Romania",
            "default": false
        },
        {
            "isoCode": "RU",
            "iso3": "RUS",
            "phoneCode": 70,
            "country": "Russian Federation",
            "default": false
        },
        {
            "isoCode": "RW",
            "iso3": "RWA",
            "phoneCode": 250,
            "country": "Rwanda",
            "default": false
        },
        {
            "isoCode": "SA",
            "iso3": "SAU",
            "phoneCode": 966,
            "country": "Saudi Arabia",
            "default": false
        },
        {
            "isoCode": "SB",
            "iso3": "SLB",
            "phoneCode": 677,
            "country": "Solomon Islands",
            "default": false
        },
        {
            "isoCode": "SC",
            "iso3": "SYC",
            "phoneCode": 248,
            "country": "Seychelles",
            "default": false
        },
        {
            "isoCode": "SD",
            "iso3": "SDN",
            "phoneCode": 249,
            "country": "Sudan",
            "default": false
        },
        {
            "isoCode": "SE",
            "iso3": "SWE",
            "phoneCode": 46,
            "country": "Sweden",
            "default": false
        },
        {
            "isoCode": "SG",
            "iso3": "SGP",
            "phoneCode": 65,
            "country": "Singapore",
            "default": false
        },
        {
            "isoCode": "SH",
            "iso3": "SHN",
            "phoneCode": 290,
            "country": "Saint Helena",
            "default": false
        },
        {
            "isoCode": "SI",
            "iso3": "SVN",
            "phoneCode": 386,
            "country": "Slovenia",
            "default": false
        },
        {
            "isoCode": "SJ",
            "iso3": "SJM",
            "phoneCode": 47,
            "country": "Svalbard and Jan Mayen",
            "default": false
        },
        {
            "isoCode": "SK",
            "iso3": "SVK",
            "phoneCode": 421,
            "country": "Slovakia",
            "default": false
        },
        {
            "isoCode": "SL",
            "iso3": "SLE",
            "phoneCode": 232,
            "country": "Sierra Leone",
            "default": false
        },
        {
            "isoCode": "SM",
            "iso3": "SMR",
            "phoneCode": 378,
            "country": "San Marino",
            "default": false
        },
        {
            "isoCode": "SN",
            "iso3": "SEN",
            "phoneCode": 221,
            "country": "Senegal",
            "default": false
        },
        {
            "isoCode": "SO",
            "iso3": "SOM",
            "phoneCode": 252,
            "country": "Somalia",
            "default": false
        },
        {
            "isoCode": "SR",
            "iso3": "SUR",
            "phoneCode": 597,
            "country": "Suriname",
            "default": false
        },
        {
            "isoCode": "ST",
            "iso3": "STP",
            "phoneCode": 239,
            "country": "Sao Tome and Principe",
            "default": false
        },
        {
            "isoCode": "SV",
            "iso3": "SLV",
            "phoneCode": 503,
            "country": "El Salvador",
            "default": false
        },
        {
            "isoCode": "SY",
            "iso3": "SYR",
            "phoneCode": 963,
            "country": "Syrian Arab Republic",
            "default": false
        },
        {
            "isoCode": "SZ",
            "iso3": "SWZ",
            "phoneCode": 268,
            "country": "Swaziland",
            "default": false
        },
        {
            "isoCode": "TC",
            "iso3": "TCA",
            "phoneCode": 1649,
            "country": "Turks and Caicos Islands",
            "default": false
        },
        {
            "isoCode": "TD",
            "iso3": "TCD",
            "phoneCode": 235,
            "country": "Chad",
            "default": false
        },
        {
            "isoCode": "TF",
            "iso3": "ATF",
            "phoneCode": 262,
            "country": "French Southern Territories",
            "default": false
        },
        {
            "isoCode": "TG",
            "iso3": "TGO",
            "phoneCode": 228,
            "country": "Togo",
            "default": false
        },
        {
            "isoCode": "TH",
            "iso3": "THA",
            "phoneCode": 66,
            "country": "Thailand",
            "default": false
        },
        {
            "isoCode": "TJ",
            "iso3": "TJK",
            "phoneCode": 992,
            "country": "Tajikistan",
            "default": false
        },
        {
            "isoCode": "TK",
            "iso3": "TKL",
            "phoneCode": 690,
            "country": "Tokelau",
            "default": false
        },
        {
            "isoCode": "TL",
            "iso3": "TLS",
            "phoneCode": 670,
            "country": "Timor",
            "default": false
        },
        {
            "isoCode": "TM",
            "iso3": "TKM",
            "phoneCode": 7370,
            "country": "Turkmenistan",
            "default": false
        },
        {
            "isoCode": "TN",
            "iso3": "TUN",
            "phoneCode": 216,
            "country": "Tunisia",
            "default": false
        },
        {
            "isoCode": "TO",
            "iso3": "TON",
            "phoneCode": 676,
            "country": "Tonga",
            "default": false
        },
        {
            "isoCode": "TR",
            "iso3": "TUR",
            "phoneCode": 90,
            "country": "Turkey",
            "default": false
        },
        {
            "isoCode": "TT",
            "iso3": "TTO",
            "phoneCode": 1868,
            "country": "Trinidad and Tobago",
            "default": false
        },
        {
            "isoCode": "TV",
            "iso3": "TUV",
            "phoneCode": 688,
            "country": "Tuvalu",
            "default": false
        },
        {
            "isoCode": "TW",
            "iso3": "TWN",
            "phoneCode": 886,
            "country": "Taiwan, Province of China",
            "default": false
        },
        {
            "isoCode": "TZ",
            "iso3": "TZA",
            "phoneCode": 255,
            "country": "Tanzania, United Republic of",
            "default": false
        },
        {
            "isoCode": "UA",
            "iso3": "UKR",
            "phoneCode": 380,
            "country": "Ukraine",
            "default": false
        },
        {
            "isoCode": "UG",
            "iso3": "UGA",
            "phoneCode": 256,
            "country": "Uganda",
            "default": false
        },
        {
            "isoCode": "UK",
            "iso3": "GBR",
            "phoneCode": 44,
            "country": "Great Britain",
            "default": false
        },
        {
            "isoCode": "US",
            "iso3": "USA",
            "phoneCode": 1,
            "country": "United States",
            "default": false
        },
        {
            "isoCode": "UY",
            "iso3": "URY",
            "phoneCode": 598,
            "country": "Uruguay",
            "default": false
        },
        {
            "isoCode": "UZ",
            "iso3": "UZB",
            "phoneCode": 998,
            "country": "Uzbekistan",
            "default": false
        },
        {
            "isoCode": "VA",
            "iso3": "VAT",
            "phoneCode": 39,
            "country": "Holy See (Vatican City State)",
            "default": false
        },
        {
            "isoCode": "VC",
            "iso3": "VCT",
            "phoneCode": 1784,
            "country": "Saint Vincent and the Grenadines",
            "default": false
        },
        {
            "isoCode": "VE",
            "iso3": "VEN",
            "phoneCode": 58,
            "country": "Venezuela",
            "default": false
        },
        {
            "isoCode": "VG",
            "iso3": "VGB",
            "phoneCode": 1284,
            "country": "Virgin Islands, British",
            "default": false
        },
        {
            "isoCode": "VI",
            "iso3": "VIR",
            "phoneCode": 1340,
            "country": "Virgin Islands, U.s.",
            "default": false
        },
        {
            "isoCode": "VN",
            "iso3": "VNM",
            "phoneCode": 84,
            "country": "Viet Nam",
            "default": false
        },
        {
            "isoCode": "VU",
            "iso3": "VUT",
            "phoneCode": 678,
            "country": "Vanuatu",
            "default": false
        },
        {
            "isoCode": "WF",
            "iso3": "WLF",
            "phoneCode": 681,
            "country": "Wallis and Futuna",
            "default": false
        },
        {
            "isoCode": "WS",
            "iso3": "WSM",
            "phoneCode": 684,
            "country": "Samoa",
            "default": false
        },
        {
            "isoCode": "YE",
            "iso3": "YEM",
            "phoneCode": 967,
            "country": "Yemen",
            "default": false
        },
        {
            "isoCode": "YT",
            "iso3": "MYT",
            "phoneCode": 269,
            "country": "Mayotte",
            "default": false
        },
        {
            "isoCode": "ZA",
            "iso3": "ZAF",
            "phoneCode": 27,
            "country": "South Africa",
            "default": false
        },
        {
            "isoCode": "ZM",
            "iso3": "ZMB",
            "phoneCode": 260,
            "country": "Zambia",
            "default": false
        },
        {
            "isoCode": "ZW",
            "iso3": "ZWE",
            "phoneCode": 263,
            "country": "Zimbabwe",
            "default": false
        }
    ];

    const wrapperClass = 'js-bs-phone-input';
    const helperInputClass = 'js-temp-input'

    $.bsPhone = {
        setDefaults: function (options = null) {
            this.DEFAULTS = $.extend({}, this.DEFAULTS, options || {});
        }, getDefaults: function () {
            const defCopy = this.DEFAULTS;
            return defCopy;
        }, DEFAULTS: {
            default: 'de',
            limitedCountries: [],
            inputGroupClasses: 'mb-3',
            dropDownClasses: 'btn btn-outline-secondary',
            dropDownMaxHeight: '50vh',
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
        // console.log($input.attr('id'));
        const settings = $input.data('options');
        const inputGroup = $input.closest('.' + wrapperClass);
        let selected = inputGroup.find('.dropdown-item[data-selected="Y"]');
        const html = selected.html();
        inputGroup.find('.dropdown-toggle').html(html);
    }

    function buildInputGroup($input, settings) {
        if ($input.closest('.' + wrapperClass).length) {
            return $input.closest('.' + wrapperClass);
        }

        const inputGroup = $('<div>', {
            class: 'input-group ' + wrapperClass + ' ' + settings.inputGroupClasses
        }).insertAfter($input);

        const dropDownButton = $('<button>', {
            class: 'dropdown-toggle ' + settings.dropDownClasses,
            type: 'button',
            'data-bs-toggle': 'dropdown',
            'aria-expanded': false,
            text: ''
        }).appendTo(inputGroup);

        const dropDownMenu = $('<div>', {
            class: 'dropdown-menu py-0',
        }).appendTo(inputGroup);

        const dropDownHeader = $('<div>', {
            class: 'dropdown-header sticky-top  z-1 p-2 border-bottom',
            html: '<input type="search" class="form-control form-control-sm">'
        }).appendTo(dropDownMenu);

        const menuContainer = $('<div>', {
            class: 'dropdown-body overflow-y-auto', css: {
                maxHeight: settings.dropDownMaxHeight
            }
        }).appendTo(dropDownMenu);

        const allCountries = !settings.limitedCountries.length;
        countries.forEach(el => {
            if (!allCountries && !settings.limitedCountries.includes(el.isoCode.toLowerCase())) {
                return false;
            }
            const activeClass = settings.default.toUpperCase() === el.isoCode.toUpperCase() ? 'Y' : 'N';
            // console.log(el)
            const a = $('<a>', {
                class: 'dropdown-item d-flex align-items-center',
                html: `${el.isoCode} +(${el.phoneCode})`,
                'data-iso-code': el.isoCode,
                'data-selected': activeClass,
                'data-phone-code': el.phoneCode,
                'data-bs-toggle': 'tooltip',
                'data-bs-placement': "end",
                title: el.country,
                href: '#'
            }).appendTo(menuContainer);

        });


        const tmpInput = $('<input>', {
            type: 'tel', class: 'form-control ' + helperInputClass + ' ' + settings.inputClasses
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

        // console.log(value);

    }


    /**
     *
     * @param {null|string|object}optionsOrMethod
     * @return {*|jQuery|HTMLElement}
     */
    $.fn.bsPhone = function (optionsOrMethod = null, param) {

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


        function init() {
            if (!input.data('initBsPhone')) {
                const valueBefore = (input.attr('value') && input.attr('value') !== '') ? input.attr('value') : false;
                let setup;
                if (!optionsSet) {
                    setup = $.extend({}, $.bsPhone.getDefaults(), input.data());
                } else {
                    setup = $.extend({}, $.bsPhone.getDefaults(), input.data(), optionsOrMethod || {});
                }
                input.data('options', setup);
                const wrapper = buildInputGroup(input, setup);

                events(input);
                setDropDownSelected(input);

                input.data('initBsPhone', true);

                if (valueBefore !== false) {
                    setVal(input, valueBefore);
                }
            }
        }

        init();

        if (callMethod) {
            switch (optionsOrMethod) {
                case 'val':
                    if (!param && param !== null) {
                        return input.val();
                    } else {
                        setVal(input, param);

                    }
            }
        } else {
            return input;
        }


    }

    function setVal($input, value) {
        const wrapper = $input.closest('.' + wrapperClass);
        const helperInput = wrapper.find('.' + helperInputClass);
        if (value) {
            if (value.startsWith('+')) {
                const found = countries.filter(e => {
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
            .on('shown.bs.dropdown', '.dropdown-toggle', function () {
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

                        let currentPhoneCode = $(value).data('phoneCode') + '';
                        let currentName = $(value).data('isoCode');
                        let currentCountry = $(value).attr('title');
                        if (currentName.toUpperCase().indexOf(searchPattern.toUpperCase()) > -1 || currentCountry.toUpperCase().indexOf(searchPattern.toUpperCase()) > -1 || currentPhoneCode.startsWith(searchPattern) || ('+' + currentPhoneCode).startsWith(searchPattern)) {
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

    $('[data-bs-toggle="phone"]').bsPhone();

}(jQuery))
