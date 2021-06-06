import '../styles/CraneSubmission.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';

// TODO: REMOVE THIS
const countryCodes = [
    "ABW Aruba",
    "AFG Afghanistan",
    "AGO Angola",
    "AIA Anguilla",
    "ALA Åland Islands",
    "ALB Albania",
    "AND Andorra",
    "ARE United Arab Emirates",
    "ARG Argentina",
    "ARM Armenia",
    "ASM American Samoa",
    "ATA Antarctica",
    "ATF French Southern Territories",
    "ATG Antigua and Barbuda",
    "AUS Australia",
    "AUT Austria",
    "AZE Azerbaijan",
    "BDI Burundi",
    "BEL Belgium",
    "BEN Benin",
    "BES Bonaire Sint Eustatius and Saba",
    "BFA Burkina Faso",
    "BGD Bangladesh",
    "BGR Bulgaria",
    "BHR Bahrain",
    "BHS Bahamas",
    "BIH Bosnia and Herzegovina",
    "BLM Saint Barthélemy",
    "BLR Belarus",
    "BLZ Belize",
    "BMU Bermuda",
    "BOL Bolivia (Plurinational State of)",
    "BRA Brazil",
    "BRB Barbados",
    "BRN Brunei Darussalam",
    "BTN Bhutan",
    "BVT Bouvet Island",
    "BWA Botswana",
    "CAF Central African Republic",
    "CAN Canada",
    "CCK Cocos (Keeling) Islands",
    "CHE Switzerland",
    "CHL Chile",
    "CHN China",
    "CIV Côte d'Ivoire",
    "CMR Cameroon",
    "COD Democratic Republic of the Congo",
    "COG Congo",
    "COK Cook Islands",
    "COL Colombia",
    "COM Comoros",
    "CPV Cabo Verde",
    "CRI Costa Rica",
    "CUB Cuba",
    "CUW Curaçao",
    "CXR Christmas Island",
    "CYM Cayman Islands",
    "CYP Cyprus",
    "CZE Czechia",
    "DEU Germany",
    "DJI Djibouti",
    "DMA Dominica",
    "DNK Denmark",
    "DOM Dominican Republic",
    "DZA Algeria",
    "ECU Ecuador",
    "EGY Egypt",
    "ERI Eritrea",
    "ESH Western Sahara",
    "ESP Spain",
    "EST Estonia",
    "ETH Ethiopia",
    "FIN Finland",
    "FJI Fiji",
    "FLK Falkland Islands (Malvinas)",
    "FRA France",
    "FRO Faroe Islands",
    "FSM Micronesia (Federated States of)",
    "GAB Gabon",
    "GBR United Kingdom of Great Britain and Northern Ireland",
    "GEO Georgia",
    "GGY Guernsey",
    "GHA Ghana",
    "GIB Gibraltar",
    "GIN Guinea",
    "GLP Guadeloupe",
    "GMB Gambia",
    "GNB Guinea-Bissau",
    "GNQ Equatorial Guinea",
    "GRC Greece",
    "GRD Grenada",
    "GRL Greenland",
    "GTM Guatemala",
    "GUF French Guiana",
    "GUM Guam",
    "GUY Guyana",
    "HKG Hong Kong",
    "HMD Heard Island and McDonald Islands",
    "HND Honduras",
    "HRV Croatia",
    "HTI Haiti",
    "HUN Hungary",
    "IDN Indonesia",
    "IMN Isle of Man",
    "IND India",
    "IOT British Indian Ocean Territory",
    "IRL Ireland",
    "IRN Iran (Islamic Republic of)",
    "IRQ Iraq",
    "ISL Iceland",
    "ISR Israel",
    "ITA Italy",
    "JAM Jamaica",
    "JEY Jersey",
    "JOR Jordan",
    "JPN Japan",
    "KAZ Kazakhstan",
    "KEN Kenya",
    "KGZ Kyrgyzstan",
    "KHM Cambodia",
    "KIR Kiribati",
    "KNA Saint Kitts and Nevis",
    "KOR Korea Republic of",
    "KWT Kuwait",
    "LAO Lao People's Democratic Republic",
    "LBN Lebanon",
    "LBR Liberia",
    "LBY Libya",
    "LCA Saint Lucia",
    "LIE Liechtenstein",
    "LKA Sri Lanka",
    "LSO Lesotho",
    "LTU Lithuania",
    "LUX Luxembourg",
    "LVA Latvia",
    "MAC Macao",
    "MAF Saint Martin (French part)",
    "MAR Morocco",
    "MCO Monaco",
    "MDA Moldova Republic of",
    "MDG Madagascar",
    "MDV Maldives",
    "MEX Mexico",
    "MHL Marshall Islands",
    "MKD North Macedonia",
    "MLI Mali",
    "MLT Malta",
    "MMR Myanmar",
    "MNE Montenegro",
    "MNG Mongolia",
    "MNP Northern Mariana Islands",
    "MOZ Mozambique",
    "MRT Mauritania",
    "MSR Montserrat",
    "MTQ Martinique",
    "MUS Mauritius",
    "MWI Malawi",
    "MYS Malaysia",
    "MYT Mayotte",
    "NAM Namibia",
    "NCL New Caledonia",
    "NER Niger",
    "NFK Norfolk Island",
    "NGA Nigeria",
    "NIC Nicaragua",
    "NIU Niue",
    "NLD Netherlands",
    "NOR Norway",
    "NPL Nepal",
    "NRU Nauru",
    "NZL New Zealand",
    "OMN Oman",
    "PAK Pakistan",
    "PAN Panama",
    "PCN Pitcairn",
    "PER Peru",
    "PHL Philippines",
    "PLW Palau",
    "PNG Papua New Guinea",
    "POL Poland",
    "PRI Puerto Rico",
    "PRK Korea (Democratic People's Republic of)",
    "PRT Portugal",
    "PRY Paraguay",
    "PSE Palestine State of",
    "PYF French Polynesia",
    "QAT Qatar",
    "REU Réunion",
    "ROU Romania",
    "RUS Russian Federation",
    "RWA Rwanda",
    "SAU Saudi Arabia",
    "SDN Sudan",
    "SEN Senegal",
    "SGP Singapore",
    "SGS South Georgia and the South Sandwich Islands",
    "SHN Saint Helena Ascension and Tristan da Cunha",
    "SJM Svalbard and Jan Mayen",
    "SLB Solomon Islands",
    "SLE Sierra Leone",
    "SLV El Salvador",
    "SMR San Marino",
    "SOM Somalia",
    "SPM Saint Pierre and Miquelon",
    "SRB Serbia",
    "SSD South Sudan",
    "STP Sao Tome and Principe",
    "SUR Suriname",
    "SVK Slovakia",
    "SVN Slovenia",
    "SWE Sweden",
    "SWZ Eswatini",
    "SXM Sint Maarten (Dutch part)",
    "SYC Seychelles",
    "SYR Syrian Arab Republic",
    "TCA Turks and Caicos Islands",
    "TCD Chad",
    "TGO Togo",
    "THA Thailand",
    "TJK Tajikistan",
    "TKL Tokelau",
    "TKM Turkmenistan",
    "TLS Timor-Leste",
    "TON Tonga",
    "TTO Trinidad and Tobago",
    "TUN Tunisia",
    "TUR Turkey",
    "TUV Tuvalu",
    "TWN Taiwan Province of China",
    "TZA Tanzania United Republic of",
    "UGA Uganda",
    "UKR Ukraine",
    "UMI United States Minor Outlying Islands",
    "URY Uruguay",
    "USA United States of America",
    "UZB Uzbekistan",
    "VAT Holy See",
    "VCT Saint Vincent and the Grenadines",
    "VEN Venezuela (Bolivarian Republic of)",
    "VGB Virgin Islands (British)",
    "VIR Virgin Islands (U.S.)",
    "VNM Vietnam",
    "VUT Vanuatu",
    "WLF Wallis and Futuna",
    "WSM Samoa",
    "YEM Yemen",
    "ZAF South Africa",
    "ZMB Zambia",
    "ZWE Zimbabwe"
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    }
  }
));
  
function CraneSubmission() {
    const classes = useStyles();
    var [countryCode, message, name, email] = React.useState('')        //TODO: incorrect use of hooks, rewrite
    var [activeColor, setActiveColor] = React.useState(colorData[0].color)

    var submit = async () => {
        const newCrane = await fetch('/cranes', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                message: message,
                country: countryCode,
                backgroundColor: activeColor,
                creationTime: new Date().toLocaleString()
            })
        })
    }

    return (
        <div>
            <Grid container alignItems="center" direction="column">
                <Box width="50%">
                    Unfold you story here! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus lorem, auctor eu est a, iaculis maximus magna. Suspendisse suscipit tortor nec sollicitudin dictum.
                    <Grid class="form">
                        <form className={classes.root} noValidate autoComplete="off">
                        <Grid container direction="column" justify="center">
                                <Grid container direction="row" justify="flex-start">
                                <TextField required id="outlined-required" label="Name" onChange={(event) => {
                                    name = event.target.value
                                }}/>
                                <TextField required id="outlined-required" label="Email" onChange={(event) => {
                                    email = event.target.value
                                }}/>
                                <Autocomplete
                                    onChange={(event, value, reason) => {
                                        countryCode = value.substring(0,3)
                                    }}
                                    options={countryCodes}
                                    getOptionLabel={(code) => code.substring(4, code.length)}
                                    style={{ width: 174 }}
                                    renderInput={(params) => <TextField {...params} label="Filter By Country" variant="outlined" />}
                                />
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    variant="outlined"
                                    fullWidth 
                                    onChange={(event) => {
                                        message = event.target.value
                                    }}
                                />
                                </Grid>
                                <Grid container justify="flex-start">
                                    <GridList cols={colorData.length} cellHeight="auto">
                                        {colorData.map((item) => 
                                            <GridListTile key={item.color} onClick={() => {setActiveColor(item.color)}}>
                                                <img className={item.color == activeColor ? 'active-color color' : 'normal-color color'} srcset={`${item.src}`}/>
                                            </GridListTile>
                                            )}
                                    </GridList>
                                </Grid>
                                <Button variant="contained" onClick={submit}>Submit</Button>
                        </Grid>
                        </form>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
}

const colorData = [
    {
        src: "blue-purple.png",
        color: "blue-purple"
    },
    {
        src: "green-blue.png",
        color: "green-blue"
    },
    {
        src: "orange-yellow.png",
        color: "orange-yellow"
    },
    {
        src: "pink-red.png",
        color: "pink-red"
    },
    {
        src: "purple-pink.png",
        color: "purple-pink"
    },
    {
        src: "red-orange.png",
        color: "red-orange"
    },
    {
        src: "yellow-green.png",
        color: "yellow-green"
    },
]

export default CraneSubmission